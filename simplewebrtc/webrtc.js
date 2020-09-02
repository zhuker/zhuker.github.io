/* vim: set sts=4 sw=4 et :
 *
 * Based on Demo Javascript app for negotiating and streaming a sendrecv webrtc stream
 *
 * Author: Nirbheek Chauhan <nirbheek@centricular.com>
 * Author: Alex Zhukov <zhukov.alex@gmail.com>
 */

// Set this to override the automatic detection in websocketServerConnect()
var ws_server = "webrtc.nirbheek.in";
var ws_port;
// Set this to use a specific peer id instead of a random one
var default_peer_id;
// Override with your own STUN servers if you want
var rtc_configuration = {
    iceServers: [{urls: "stun:stun.services.mozilla.com"},
        {urls: "stun:stun.l.google.com:19302"}]
};
// The default constraints that will be attempted. Can be overriden by the user.
var default_constraints = {video: true, audio: false};

var connect_attempts = 0;
var peer_connection;
var send_channel;
var latency_channel;
var ws_conn;
// Promise for local stream after constraints are approved by the user
var local_stream_promise;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function getOurId() {
    return parseInt(getQueryVariable("ourid") || Math.floor(Math.random() * (9000 - 10) + 10).toString());
}

function resetState() {
    // This will call onServerClose()
    ws_conn.close();
}

function handleIncomingError(error) {
    setError("ERROR: " + error);
    resetState();
}

function getVideoElement() {
    return document.getElementById("stream");
}

function setStatus(text) {
    console.log(text);
    var span = document.getElementById("status")
    // Don't set the status if it already contains an error
    if (!span.classList.contains('error'))
        span.textContent = text;
}

function setError(text) {
    console.error(text);
    var span = document.getElementById("status")
    span.textContent = text;
    span.classList.add('error');
}

function resetVideo() {
    // Release the webcam and mic
    if (local_stream_promise)
        local_stream_promise.then(stream => {
            if (stream) {
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
        });

    // Reset the video element and stop showing the last received frame
    var videoElement = getVideoElement();
    videoElement.pause();
    videoElement.src = "";
    videoElement.load();
}

// SDP offer received from peer, set remote description and create an answer
function onIncomingSDP(sdp) {
    peer_connection.setRemoteDescription(sdp).then(() => {
        setStatus("Remote SDP set");
        if (sdp.type != "offer")
            return;
        setStatus("Got SDP offer");
        local_stream_promise.then((stream) => {
            setStatus("Got local stream, creating answer");
            peer_connection.createAnswer()
                .then(onLocalDescription).catch(setError);
        }).catch(setError);
    }).catch(setError);
}

// Local description was set, send it to peer
function onLocalDescription(desc) {
    console.log("Got local description: " + JSON.stringify(desc));
    peer_connection.setLocalDescription(desc).then(function () {
        setStatus("Sending SDP " + desc.type);
        sdp = {'sdp': peer_connection.localDescription}
        ws_conn.send(JSON.stringify(sdp));
    });
}

function generateOffer() {
    peer_connection.createOffer().then(onLocalDescription).catch(setError);
}

// ICE candidate received from peer, add it to the peer connection
function onIncomingICE(ice) {
    var candidate = new RTCIceCandidate(ice);
    peer_connection.addIceCandidate(candidate).catch(setError);
}

function onServerMessage(event) {
    console.log("Received " + event.data);
    switch (event.data) {
        case "HELLO":
            setStatus("Registered with server, waiting for call");
            return;
        default:
            if (event.data.startsWith("ERROR")) {
                handleIncomingError(event.data);
                return;
            }
            if (event.data.startsWith("OFFER_REQUEST")) {
                // The peer wants us to set up and then send an offer
                createCall(null).then(generateOffer);
            } else {
                // Handle incoming JSON SDP and ICE messages
                try {
                    msg = JSON.parse(event.data);
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        handleIncomingError("Error parsing incoming JSON: " + event.data);
                    } else {
                        handleIncomingError("Unknown error parsing response: " + event.data);
                    }
                    return;
                }

                // Incoming JSON signals the beginning of a call
                if (!peer_connection)
                    createCall(msg);

                if (msg.sdp != null) {
                    onIncomingSDP(msg.sdp);
                } else if (msg.ice != null) {
                    onIncomingICE(msg.ice);
                } else {
                    handleIncomingError("Unknown incoming JSON: " + msg);
                }
            }
    }
}

function onServerClose(event) {
    setStatus('Disconnected from server');
    resetVideo();

    if (peer_connection) {
        peer_connection.close();
        peer_connection = null;
    }

    // Reset after a second
    window.setTimeout(websocketServerConnect, 1000);
}

function onServerError(event) {
    setError("Unable to connect to server, did you add an exception for the certificate?")
    // Retry after 3 seconds
    window.setTimeout(websocketServerConnect, 3000);
}

function getLocalStream() {
    var constraints;
    var textarea = document.getElementById('constraints');
    try {
        constraints = JSON.parse(textarea.value);
    } catch (e) {
        console.error(e);
        setError('ERROR parsing constraints: ' + e.message + ', using default constraints');
        constraints = default_constraints;
    }
    console.log(JSON.stringify(constraints));

    // Add local stream
    if (navigator.mediaDevices.getUserMedia) {
        return navigator.mediaDevices.getUserMedia(constraints);
    } else {
        errorUserMediaHandler();
    }
}

function websocketServerConnect() {
    connect_attempts++;
    if (connect_attempts > 3) {
        setError("Too many connection attempts, aborting. Refresh page to try again");
        return;
    }
    // Clear errors in the status span
    var span = document.getElementById("status");
    span.classList.remove('error');
    span.textContent = '';
    // Populate constraints
    var textarea = document.getElementById('constraints');
    if (textarea.value == '')
        textarea.value = JSON.stringify(default_constraints);
    // Fetch the peer id to use
    peer_id = default_peer_id || getOurId();
    ws_port = ws_port || '8443';
    if (window.location.protocol.startsWith("file")) {
        ws_server = ws_server || "127.0.0.1";
    } else if (window.location.protocol.startsWith("http")) {
        ws_server = ws_server || window.location.hostname;
    } else {
        throw new Error("Don't know how to connect to the signalling server with uri" + window.location);
    }
    var ws_url = 'wss://' + ws_server + ':' + ws_port
    setStatus("Connecting to server " + ws_url);
    ws_conn = new WebSocket(ws_url);
    /* When connected, immediately register with the server */
    ws_conn.addEventListener('open', (event) => {
        document.getElementById("peer-id").textContent = peer_id;
        ws_conn.send('HELLO ' + peer_id);
        setStatus("Registering with server");
    });
    ws_conn.addEventListener('error', onServerError);
    ws_conn.addEventListener('message', onServerMessage);
    ws_conn.addEventListener('close', onServerClose);
}

function onRemoteTrack(event) {
    if (getVideoElement().srcObject !== event.streams[0]) {
        console.log('Incoming stream');
        getVideoElement().srcObject = event.streams[0];
    }
}

function errorUserMediaHandler() {
    setError("Browser doesn't support getUserMedia!");
}

TIMESYNC_INTERVAL = null;
const handleDataChannelOpen = (event) => {
    console.log("dataChannel.OnOpen", event);
};

VIDEO = null;

const handleDataChannelMessageReceived = (event) => {
    console.log("dataChannel.OnMessage:", event, event.data.type);

    setStatus("Received data channel message");
    if (typeof event.data === 'string' || event.data instanceof String) {
        console.log('Incoming string message: ' + event.data);
        textarea = document.getElementById("text")
        textarea.value = textarea.value + '\n' + event.data
    } else {
        console.log('Incoming data message');
    }
    if (event.target.label === 'latency') {
        if (TIMESYNC_INTERVAL != null) {
            clearInterval(TIMESYNC_INTERVAL);
            TIMESYNC_INTERVAL = null;
        }

        let tR2 = performance.now();
        let sender_report = JSON.parse(event.data);
        let tR1 = sender_report['received_time'];
        let delay = sender_report['delay_since_received'];
        let rtt = tR2 - delay - tR1;

        if (VIDEO == null) {
            VIDEO = document.getElementsByTagName('video')[0];
        }

        VIDEO.requestVideoFrameCallback((now_, framemeta) => {
            console.log("framemeta", now_, framemeta);
            let sender_time = (sender_report['local_clock'] + rtt / 2 + (now_ - tR2));
            let [last_known_frame_time, time_of_frame_msec] = Object.entries(sender_report.track_times_msec)[0][1]
            let time_since_last_known_frame = sender_time - time_of_frame_msec;
            let expected_video_time = last_known_frame_time + time_since_last_known_frame;
            let actual_video_time = (framemeta.rtpTimestamp / 90 | 0);
            let latency = expected_video_time - actual_video_time;
            latency_msec.innerText = (latency | 0) + "msec";
            uilogpre.innerText = ""
                + "\nnow: " + (tR2 | 0) + " " + (now_ | 0)
                + "\nrtt: " + (rtt | 0)
                + "\nmy_time_when_i_sent: " + tR1
                + "\ntime_since_last_known_frame: " + (time_since_last_known_frame | 0)
                + "\nlast_known_frame_time: " + last_known_frame_time
                + "\nexpected_video_time:   " + (expected_video_time | 0)
                + "\nactual_video_time:     " + (actual_video_time | 0)

            ;
            if (latency < 0) {
                console.error("latency: " + (latency | 0) + "msec" + uilogpre.innerText);
            }
            setTimeout(() => {
                let msec = performance.now() | 0;
                latency_channel.send("" + msec);
            }, 2000);
        });


    }
    // send_channel.send("Hi! (from browser)");
};

const handleDataChannelError = (error) => {
    console.log("dataChannel.OnError:", error);
};

const handleDataChannelClose = (event) => {
    console.log("dataChannel.OnClose", event);
};

function onDataChannel(event) {
    console.log("onDataChannel", event.channel);
    setStatus("Data channel created");
    let receiveChannel = event.channel;
    receiveChannel.onopen = handleDataChannelOpen;
    receiveChannel.onmessage = handleDataChannelMessageReceived;
    receiveChannel.onerror = handleDataChannelError;
    receiveChannel.onclose = handleDataChannelClose;
    if (receiveChannel.label === "latency") {
        latency_channel = receiveChannel;
        TIMESYNC_INTERVAL = setInterval(() => {
            let msec = Math.trunc(performance.now());
            receiveChannel.send("" + msec);
        }, 2000);
    }
}

STATS = {}
let statsHandler = () => {
    if (peer_connection) {
        peer_connection.getStats().then((stats) => {
            console.log("stats", stats);
            STATS = stats;
            Array.from(STATS.values()).filter(s => s.type === 'remote-outbound-rtp').forEach((ro) => {
                console.log('remote outbound', ro);
            })
            for (let stat_ in stats.keys()) {
                console.log("stat", stat_, stats.get(stat_));
            }
        });
    }
};

// setInterval(statsHandler, 1000);

function createCall(msg) {
    // Reset connection attempts because we connected successfully
    connect_attempts = 0;

    console.log('Creating RTCPeerConnection');

    peer_connection = new RTCPeerConnection(rtc_configuration);
    peer_connection.createDataChannel('ololo', null);
    peer_connection.ondatachannel = onDataChannel;
    peer_connection.ontrack = onRemoteTrack;
    /* Send our video/audio to the other peer */
    local_stream_promise = getLocalStream().then((stream) => {
        console.log('Adding local stream');
        peer_connection.addStream(stream);
        return stream;
    }).catch(setError);

    if (msg != null && !msg.sdp) {
        console.log("WARNING: First message wasn't an SDP message!?");
    }

    peer_connection.onicecandidate = (event) => {
        // We have a candidate, send it to the remote party with the
        // same uuid
        if (event.candidate == null) {
            console.log("ICE Candidate was null, done");
            return;
        }
        ws_conn.send(JSON.stringify({'ice': event.candidate}));
    };

    if (msg != null)
        setStatus("Created peer connection for call, waiting for SDP");

    return local_stream_promise;
}
