// RoomSignaling.js

class RoomSignaling {
    constructor(wsurl, ourId) {
        this.chat = new WsRoomChat(wsurl, ourId);
        this._onConnect = (success, peerId) => {};
        this._onDisconnect = (peerId) => {};
        this._onOfferReceived = new Map();
        this._onOfferRequested = (peerId) => { console.log("unhandled _onOfferRequested"); };
        this._onAnswerReceived = (peerId, sdp) => { console.log("unhandled _onAnswerReceived"); };
        this.roomId = "";

        const PeerState = {
            UNKNOWN: "UNKNOWN",
            SENT_OFFER_REQUEST: "SENT_OFFER_REQUEST",
            SENT_OFFER: "SENT_OFFER",
            RECEIVED_OFFER_REQUEST: "RECEIVED_OFFER_REQUEST",
            OFFER_RECEIVED: "OFFER_RECEIVED",
            ANSWER_RECEIVED: "ANSWER_RECEIVED",
            ANSWER_SENT: "ANSWER_SENT"
        };

        this.roomClient = new (class extends RoomClient {
            constructor() {
                super();
                this.peerStates = new Map();
            }

            onConnect(peerId) {
                this.chat.joinOrCreateRoom(this.roomId());
            }

            onDisconnect(peerId) {
                this.chat.close();
                this._onDisconnect(peerId);
            }

            onPeerJoinedRoom(peerId) {
                this.peerStates.set(peerId, PeerState.UNKNOWN);
                this._onConnect(true, peerId);
            }

            onRoomJoined(roomid) {
                this.peerStates.set(roomid, PeerState.UNKNOWN);
                this._onConnect(true, roomid);
            }

            onPeerLeftRoom(peerId) {
                this.peerStates.delete(peerId);
            }

            onPeerMessage(peerId, msg) {
                console.log(`${ourId} onPeerMessage ${peerId} ${msg}`);
                const state = this.peerStates.get(peerId);
                if (state === PeerState.UNKNOWN && msg === "OFFER_REQUEST") {
                    this.peerStates.set(peerId, PeerState.RECEIVED_OFFER_REQUEST);
                    this._onOfferRequested(peerId);
                } else if (state === PeerState.SENT_OFFER) {
                    this._onAnswerReceived(peerId, msg);
                } else if (state === PeerState.SENT_OFFER_REQUEST) {
                    const callback = this._onOfferReceived.get(peerId);
                    if (callback) callback(msg);
                }
            }
        })();
        // Bind 'this' for roomClient methods that reference RoomSignaling properties
        this.roomClient.chat = this.chat;
        this.roomClient.roomId = () => this.roomId; // Getter for roomId
        this.roomClient._onConnect = (success, peerId) => this._onConnect(success, peerId);
        this.roomClient._onDisconnect = (peerId) => this._onDisconnect(peerId);
        this.roomClient._onOfferRequested = (peerId) => this._onOfferRequested(peerId);
        this.roomClient._onAnswerReceived = (peerId, msg) => this._onAnswerReceived(peerId, msg);
        this.roomClient._onOfferReceived = this._onOfferReceived;
    }

    connect(roomId, onConnect, onDisconnect) {
        this.roomId = roomId;
        this._onConnect = onConnect;
        this._onDisconnect = onDisconnect;
        this.chat.connect(this.roomClient);
    }

    onOfferRequested(callback) {
        this._onOfferRequested = callback;
    }

    sendOffer(remoteId, sdp) {
        this.chat.sendPeerMessage(remoteId, sdp);
        this.roomClient.peerStates.set(remoteId, "SENT_OFFER");
    }

    requestOffer(remoteId, onOfferReceived) {
        this.chat.sendPeerMessage(remoteId, "OFFER_REQUEST");
        this.roomClient.peerStates.set(remoteId, "SENT_OFFER_REQUEST");
        this._onOfferReceived.set(remoteId, onOfferReceived);
    }

    sendAnswer(remoteId, sdp) {
        this.chat.sendPeerMessage(remoteId, sdp);
    }

    receiveAnswer(onAnswerReceived) {
        this._onAnswerReceived = onAnswerReceived;
    }
}

class RoomClient {
    onConnect(peerId) {}
    onDisconnect(peerId) {}
    onProtocolFailed(str) {}
    onRoomJoined(roomid) {}
    onPeerJoinedRoom(peerId) {}
    onPeerLeftRoom(peerId) {}
    onPeerMessage(peerId, msg) {}
}

class WsRoomChat {
    constructor(serverUrl, ourId) {
        this.serverUrl = serverUrl;
        this.ourId = ourId;
        this.ProtoState = {
            NONE: "NONE",
            CONNECTED: "CONNECTED",
            HELLO: "HELLO",
            ROOM_REQUESTED: "ROOM_REQUESTED",
            ROOM_OK: "ROOM_OK",
            FAILED: "FAILED"
        };
        this.roomClient = new RoomClient();
        this.roomId = null;
        this.wsClient = null;
        this.state = this.ProtoState.NONE;
    }

    sendUtf8(str) {
        this.debug(`> ${str}`);
        this.wsClient.send(str);
    }

    debug(str) {
        console.log(str);
    }

    onProtocolFailed(str = "") {
        this.debug(`onProtocolFailed ${str}`);
        this.close();
        this.roomClient.onProtocolFailed(str);
    }

    onRoomJoined() {
        this.debug(`i joined room ${this.roomId}`);
        this.state = this.ProtoState.ROOM_OK;
        this.roomClient.onRoomJoined(this.roomId);
    }

    onPeerJoinedRoom(peerId) {
        this.debug(`onPeerJoinedRoom ${peerId}`);
        this.roomClient.onPeerJoinedRoom(peerId);
    }

    onPeerLeftRoom(peerId) {
        this.debug(`onPeerLeftRoom ${peerId}`);
        this.roomClient.onPeerLeftRoom(peerId);
    }

    joinOrCreateRoom(roomid) {
        if (this.state !== this.ProtoState.HELLO) {
            throw new Error(`${this.ourId} expected ${this.ProtoState.HELLO}, got ${this.state}`);
        }
        this.debug(`joining room ${roomid}`);
        this.roomId = roomid;
        this.sendUtf8(`ROOM ${roomid}`);
        this.state = this.ProtoState.ROOM_REQUESTED;
    }

    sendPeerMessage(peerId, message) {
        if (this.state !== this.ProtoState.ROOM_OK) {
            throw new Error("State must be ROOM_OK to send peer message");
        }
        this.sendUtf8(`ROOM_PEER_MSG ${peerId} ${message}`);
    }

    onPeerMessage(peerId, msg) {
        this.debug(`onPeerMessage ${peerId} ${msg}`);
        this.roomClient.onPeerMessage(peerId, msg);
    }

    connect(roomClient) {
        this.roomClient = roomClient;
        this.wsClient = new WebSocket(this.serverUrl);
        this.wsClient.onclose = (event) => {
            this.debug("onClosed");
            this.roomClient.onDisconnect(this.ourId);
        };
        this.wsClient.onerror = (event) => {
            this.debug(`onFailure ${event}`);
            this.roomClient.onDisconnect(this.ourId);
        };
        this.wsClient.onmessage = (event) => {
            const str = event.data;
            this.debug(`< ${str}`);
            if (this.state === this.ProtoState.CONNECTED) {
                if (str !== "HELLO") {
                    this.onProtocolFailed();
                    return;
                } else {
                    this.state = this.ProtoState.HELLO;
                    this.roomClient.onConnect(this.ourId);
                }
            } else if (this.state === this.ProtoState.ROOM_REQUESTED) {
                if (str.startsWith("ROOM_OK")) {
                    this.onRoomJoined();
                } else {
                    this.onProtocolFailed(`dont know what to do with ${str}`);
                }
            } else if (this.state === this.ProtoState.ROOM_OK) {
                if (str.startsWith("ROOM_PEER_JOINED")) {
                    const tokens = str.split(" ", 2);
                    this.onPeerJoinedRoom(tokens[1]);
                    return;
                }
                if (str.startsWith("ROOM_PEER_LEFT")) {
                    const tokens = str.split(" ", 2);
                    this.onPeerLeftRoom(tokens[1]);
                    return;
                }
                if (str.startsWith("ROOM_PEER_MSG")) {
                    const tokens = str.split(" ", 3);
                    const remoteId = tokens[1];
                    const remoteMsg = str.replace(/^\s*\S+\s+\S+\s*/, ''); //split(' ', 3);
                    this.onPeerMessage(remoteId, remoteMsg);
                } else {
                    this.onProtocolFailed(`dont know what to do with ${str}`);
                }
            }
        };
        this.wsClient.onopen = (event) => {
            this.debug("onOpen");
            this.state = this.ProtoState.CONNECTED;
            this.sendUtf8(`HELLO ${this.ourId}`);
        };
    }

    close() {
        if (this.wsClient) {
            this.wsClient.close();
            this.wsClient = null;
            this.state = this.ProtoState.FAILED;
        }
    }
}
