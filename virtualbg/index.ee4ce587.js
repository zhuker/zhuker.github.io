// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3RuNK":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "f4a3e600ee4ce587";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"85GYl":[function(require,module,exports) {
var _rxjs = require("rxjs");
var _operators = require("rxjs/operators");
console.log("hello world", _rxjs.Observable);
const facevideo = document.getElementById("face");
const maskvideo = document.getElementById("mask");
function framerx(video) {
    return new _rxjs.Observable((s)=>{
        let subscribed = true;
        let listener = (time, meta)=>{
            s.next([
                video,
                time,
                meta
            ]);
            if (subscribed) video.requestVideoFrameCallback(listener);
        };
        video.requestVideoFrameCallback(listener);
        return ()=>subscribed = false
        ;
    });
}
let maskTime = -1;
function bothcanplayrx() {
    return _rxjs.zip([
        _rxjs.fromEvent(facevideo, "canplay"),
        _rxjs.fromEvent(maskvideo, "canplay")
    ]);
}
function bothplay() {
    return _rxjs.zip([
        _rxjs.fromEvent(facevideo, "play"),
        _rxjs.fromEvent(maskvideo, "play")
    ]);
}
const playbutton = document.getElementById("playbutton");
playbutton.onclick = (e)=>{
    maskvideo.play();
    facevideo.play();
    playbutton.disabled = true;
};
function main() {
    bothcanplayrx().pipe(_operators.concatMap((x)=>{
        console.log("both videos canplay", x);
        playbutton.disabled = false;
        return bothplay();
    })).subscribe((x)=>{
        console.log("both playing", x);
        const whiteonblack = document.getElementById("whiteonblack");
        const whiteonblackctx = whiteonblack.getContext('2d');
        const blackonwhite = document.getElementById("blackonwhite");
        const blackonwhitectx = blackonwhite.getContext('2d');
        blackonwhitectx.filter = 'invert(1)';
        framerx(maskvideo).subscribe((value)=>{
            maskTime = value[2]["mediaTime"];
            whiteonblackctx.drawImage(value[0], 0, 0);
            blackonwhitectx.drawImage(value[0], 0, 0);
        });
        framerx(facevideo).subscribe((value)=>{
            let faceTime = value[2]["mediaTime"];
            if (maskTime != -1 && faceTime > maskTime + 1 / 24) console.log("face is ahead of mask", faceTime, maskTime, (faceTime - maskTime) * 24);
            if (maskTime != -1 && maskTime > faceTime + 1 / 24) console.log("mask is ahead of face", faceTime, maskTime, (maskTime - faceTime) * 24);
        });
    });
}
main();

},{"rxjs":"eIdcY","rxjs/operators":"hcCBS"}],"eIdcY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>_observable1.Observable
);
parcelHelpers.export(exports, "ConnectableObservable", ()=>_connectableObservable.ConnectableObservable
);
parcelHelpers.export(exports, "observable", ()=>_observable2.observable
);
parcelHelpers.export(exports, "animationFrames", ()=>_animationFrames.animationFrames
);
parcelHelpers.export(exports, "Subject", ()=>_subject.Subject
);
parcelHelpers.export(exports, "BehaviorSubject", ()=>_behaviorSubject.BehaviorSubject
);
parcelHelpers.export(exports, "ReplaySubject", ()=>_replaySubject.ReplaySubject
);
parcelHelpers.export(exports, "AsyncSubject", ()=>_asyncSubject.AsyncSubject
);
parcelHelpers.export(exports, "asap", ()=>_asap.asap
);
parcelHelpers.export(exports, "asapScheduler", ()=>_asap.asapScheduler
);
parcelHelpers.export(exports, "async", ()=>_async.async
);
parcelHelpers.export(exports, "asyncScheduler", ()=>_async.asyncScheduler
);
parcelHelpers.export(exports, "queue", ()=>_queue.queue
);
parcelHelpers.export(exports, "queueScheduler", ()=>_queue.queueScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>_animationFrame.animationFrame
);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>_animationFrame.animationFrameScheduler
);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>_virtualTimeScheduler.VirtualTimeScheduler
);
parcelHelpers.export(exports, "VirtualAction", ()=>_virtualTimeScheduler.VirtualAction
);
parcelHelpers.export(exports, "Scheduler", ()=>_scheduler.Scheduler
);
parcelHelpers.export(exports, "Subscription", ()=>_subscription.Subscription
);
parcelHelpers.export(exports, "Subscriber", ()=>_subscriber.Subscriber
);
parcelHelpers.export(exports, "Notification", ()=>_notification.Notification
);
parcelHelpers.export(exports, "NotificationKind", ()=>_notification.NotificationKind
);
parcelHelpers.export(exports, "pipe", ()=>_pipe.pipe
);
parcelHelpers.export(exports, "noop", ()=>_noop.noop
);
parcelHelpers.export(exports, "identity", ()=>_identity.identity
);
parcelHelpers.export(exports, "isObservable", ()=>_isObservable.isObservable
);
parcelHelpers.export(exports, "lastValueFrom", ()=>_lastValueFrom.lastValueFrom
);
parcelHelpers.export(exports, "firstValueFrom", ()=>_firstValueFrom.firstValueFrom
);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>_argumentOutOfRangeError.ArgumentOutOfRangeError
);
parcelHelpers.export(exports, "EmptyError", ()=>_emptyError.EmptyError
);
parcelHelpers.export(exports, "NotFoundError", ()=>_notFoundError.NotFoundError
);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>_objectUnsubscribedError.ObjectUnsubscribedError
);
parcelHelpers.export(exports, "SequenceError", ()=>_sequenceError.SequenceError
);
parcelHelpers.export(exports, "TimeoutError", ()=>_timeout.TimeoutError
);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>_unsubscriptionError.UnsubscriptionError
);
parcelHelpers.export(exports, "bindCallback", ()=>_bindCallback.bindCallback
);
parcelHelpers.export(exports, "bindNodeCallback", ()=>_bindNodeCallback.bindNodeCallback
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "connectable", ()=>_connectable.connectable
);
parcelHelpers.export(exports, "defer", ()=>_defer.defer
);
parcelHelpers.export(exports, "empty", ()=>_empty.empty
);
parcelHelpers.export(exports, "forkJoin", ()=>_forkJoin.forkJoin
);
parcelHelpers.export(exports, "from", ()=>_from.from
);
parcelHelpers.export(exports, "fromEvent", ()=>_fromEvent.fromEvent
);
parcelHelpers.export(exports, "fromEventPattern", ()=>_fromEventPattern.fromEventPattern
);
parcelHelpers.export(exports, "generate", ()=>_generate.generate
);
parcelHelpers.export(exports, "iif", ()=>_iif.iif
);
parcelHelpers.export(exports, "interval", ()=>_interval.interval
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "never", ()=>_never.never
);
parcelHelpers.export(exports, "of", ()=>_of.of
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairs", ()=>_pairs.pairs
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "range", ()=>_range.range
);
parcelHelpers.export(exports, "throwError", ()=>_throwError.throwError
);
parcelHelpers.export(exports, "timer", ()=>_timer.timer
);
parcelHelpers.export(exports, "using", ()=>_using.using
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "scheduled", ()=>_scheduled.scheduled
);
parcelHelpers.export(exports, "EMPTY", ()=>_empty.EMPTY
);
parcelHelpers.export(exports, "NEVER", ()=>_never.NEVER
);
parcelHelpers.export(exports, "config", ()=>_config.config
);
parcelHelpers.export(exports, "audit", ()=>_audit.audit
);
parcelHelpers.export(exports, "auditTime", ()=>_auditTime.auditTime
);
parcelHelpers.export(exports, "buffer", ()=>_buffer.buffer
);
parcelHelpers.export(exports, "bufferCount", ()=>_bufferCount.bufferCount
);
parcelHelpers.export(exports, "bufferTime", ()=>_bufferTime.bufferTime
);
parcelHelpers.export(exports, "bufferToggle", ()=>_bufferToggle.bufferToggle
);
parcelHelpers.export(exports, "bufferWhen", ()=>_bufferWhen.bufferWhen
);
parcelHelpers.export(exports, "catchError", ()=>_catchError.catchError
);
parcelHelpers.export(exports, "combineAll", ()=>_combineAll.combineAll
);
parcelHelpers.export(exports, "combineLatestAll", ()=>_combineLatestAll.combineLatestAll
);
parcelHelpers.export(exports, "combineLatestWith", ()=>_combineLatestWith.combineLatestWith
);
parcelHelpers.export(exports, "concatAll", ()=>_concatAll.concatAll
);
parcelHelpers.export(exports, "concatMap", ()=>_concatMap.concatMap
);
parcelHelpers.export(exports, "concatMapTo", ()=>_concatMapTo.concatMapTo
);
parcelHelpers.export(exports, "concatWith", ()=>_concatWith.concatWith
);
parcelHelpers.export(exports, "connect", ()=>_connect.connect
);
parcelHelpers.export(exports, "count", ()=>_count.count
);
parcelHelpers.export(exports, "debounce", ()=>_debounce.debounce
);
parcelHelpers.export(exports, "debounceTime", ()=>_debounceTime.debounceTime
);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>_defaultIfEmpty.defaultIfEmpty
);
parcelHelpers.export(exports, "delay", ()=>_delay.delay
);
parcelHelpers.export(exports, "delayWhen", ()=>_delayWhen.delayWhen
);
parcelHelpers.export(exports, "dematerialize", ()=>_dematerialize.dematerialize
);
parcelHelpers.export(exports, "distinct", ()=>_distinct.distinct
);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>_distinctUntilChanged.distinctUntilChanged
);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>_distinctUntilKeyChanged.distinctUntilKeyChanged
);
parcelHelpers.export(exports, "elementAt", ()=>_elementAt.elementAt
);
parcelHelpers.export(exports, "endWith", ()=>_endWith.endWith
);
parcelHelpers.export(exports, "every", ()=>_every.every
);
parcelHelpers.export(exports, "exhaust", ()=>_exhaust.exhaust
);
parcelHelpers.export(exports, "exhaustAll", ()=>_exhaustAll.exhaustAll
);
parcelHelpers.export(exports, "exhaustMap", ()=>_exhaustMap.exhaustMap
);
parcelHelpers.export(exports, "expand", ()=>_expand.expand
);
parcelHelpers.export(exports, "filter", ()=>_filter.filter
);
parcelHelpers.export(exports, "finalize", ()=>_finalize.finalize
);
parcelHelpers.export(exports, "find", ()=>_find.find
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndex.findIndex
);
parcelHelpers.export(exports, "first", ()=>_first.first
);
parcelHelpers.export(exports, "groupBy", ()=>_groupBy.groupBy
);
parcelHelpers.export(exports, "ignoreElements", ()=>_ignoreElements.ignoreElements
);
parcelHelpers.export(exports, "isEmpty", ()=>_isEmpty.isEmpty
);
parcelHelpers.export(exports, "last", ()=>_last.last
);
parcelHelpers.export(exports, "map", ()=>_map.map
);
parcelHelpers.export(exports, "mapTo", ()=>_mapTo.mapTo
);
parcelHelpers.export(exports, "materialize", ()=>_materialize.materialize
);
parcelHelpers.export(exports, "max", ()=>_max.max
);
parcelHelpers.export(exports, "mergeAll", ()=>_mergeAll.mergeAll
);
parcelHelpers.export(exports, "flatMap", ()=>_flatMap.flatMap
);
parcelHelpers.export(exports, "mergeMap", ()=>_mergeMap.mergeMap
);
parcelHelpers.export(exports, "mergeMapTo", ()=>_mergeMapTo.mergeMapTo
);
parcelHelpers.export(exports, "mergeScan", ()=>_mergeScan.mergeScan
);
parcelHelpers.export(exports, "mergeWith", ()=>_mergeWith.mergeWith
);
parcelHelpers.export(exports, "min", ()=>_min.min
);
parcelHelpers.export(exports, "multicast", ()=>_multicast.multicast
);
parcelHelpers.export(exports, "observeOn", ()=>_observeOn.observeOn
);
parcelHelpers.export(exports, "pairwise", ()=>_pairwise.pairwise
);
parcelHelpers.export(exports, "pluck", ()=>_pluck.pluck
);
parcelHelpers.export(exports, "publish", ()=>_publish.publish
);
parcelHelpers.export(exports, "publishBehavior", ()=>_publishBehavior.publishBehavior
);
parcelHelpers.export(exports, "publishLast", ()=>_publishLast.publishLast
);
parcelHelpers.export(exports, "publishReplay", ()=>_publishReplay.publishReplay
);
parcelHelpers.export(exports, "raceWith", ()=>_raceWith.raceWith
);
parcelHelpers.export(exports, "reduce", ()=>_reduce.reduce
);
parcelHelpers.export(exports, "repeat", ()=>_repeat.repeat
);
parcelHelpers.export(exports, "repeatWhen", ()=>_repeatWhen.repeatWhen
);
parcelHelpers.export(exports, "retry", ()=>_retry.retry
);
parcelHelpers.export(exports, "retryWhen", ()=>_retryWhen.retryWhen
);
parcelHelpers.export(exports, "refCount", ()=>_refCount.refCount
);
parcelHelpers.export(exports, "sample", ()=>_sample.sample
);
parcelHelpers.export(exports, "sampleTime", ()=>_sampleTime.sampleTime
);
parcelHelpers.export(exports, "scan", ()=>_scan.scan
);
parcelHelpers.export(exports, "sequenceEqual", ()=>_sequenceEqual.sequenceEqual
);
parcelHelpers.export(exports, "share", ()=>_share.share
);
parcelHelpers.export(exports, "shareReplay", ()=>_shareReplay.shareReplay
);
parcelHelpers.export(exports, "single", ()=>_single.single
);
parcelHelpers.export(exports, "skip", ()=>_skip.skip
);
parcelHelpers.export(exports, "skipLast", ()=>_skipLast.skipLast
);
parcelHelpers.export(exports, "skipUntil", ()=>_skipUntil.skipUntil
);
parcelHelpers.export(exports, "skipWhile", ()=>_skipWhile.skipWhile
);
parcelHelpers.export(exports, "startWith", ()=>_startWith.startWith
);
parcelHelpers.export(exports, "subscribeOn", ()=>_subscribeOn.subscribeOn
);
parcelHelpers.export(exports, "switchAll", ()=>_switchAll.switchAll
);
parcelHelpers.export(exports, "switchMap", ()=>_switchMap.switchMap
);
parcelHelpers.export(exports, "switchMapTo", ()=>_switchMapTo.switchMapTo
);
parcelHelpers.export(exports, "switchScan", ()=>_switchScan.switchScan
);
parcelHelpers.export(exports, "take", ()=>_take.take
);
parcelHelpers.export(exports, "takeLast", ()=>_takeLast.takeLast
);
parcelHelpers.export(exports, "takeUntil", ()=>_takeUntil.takeUntil
);
parcelHelpers.export(exports, "takeWhile", ()=>_takeWhile.takeWhile
);
parcelHelpers.export(exports, "tap", ()=>_tap.tap
);
parcelHelpers.export(exports, "throttle", ()=>_throttle.throttle
);
parcelHelpers.export(exports, "throttleTime", ()=>_throttleTime.throttleTime
);
parcelHelpers.export(exports, "throwIfEmpty", ()=>_throwIfEmpty.throwIfEmpty
);
parcelHelpers.export(exports, "timeInterval", ()=>_timeInterval.timeInterval
);
parcelHelpers.export(exports, "timeout", ()=>_timeout.timeout
);
parcelHelpers.export(exports, "timeoutWith", ()=>_timeoutWith.timeoutWith
);
parcelHelpers.export(exports, "timestamp", ()=>_timestamp.timestamp
);
parcelHelpers.export(exports, "toArray", ()=>_toArray.toArray
);
parcelHelpers.export(exports, "window", ()=>_window.window
);
parcelHelpers.export(exports, "windowCount", ()=>_windowCount.windowCount
);
parcelHelpers.export(exports, "windowTime", ()=>_windowTime.windowTime
);
parcelHelpers.export(exports, "windowToggle", ()=>_windowToggle.windowToggle
);
parcelHelpers.export(exports, "windowWhen", ()=>_windowWhen.windowWhen
);
parcelHelpers.export(exports, "withLatestFrom", ()=>_withLatestFrom.withLatestFrom
);
parcelHelpers.export(exports, "zipAll", ()=>_zipAll.zipAll
);
parcelHelpers.export(exports, "zipWith", ()=>_zipWith.zipWith
);
var _observable1 = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _observable2 = require("./internal/symbol/observable");
var _animationFrames = require("./internal/observable/dom/animationFrames");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _lastValueFrom = require("./internal/lastValueFrom");
var _firstValueFrom = require("./internal/firstValueFrom");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _notFoundError = require("./internal/util/NotFoundError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _sequenceError = require("./internal/util/SequenceError");
var _timeout = require("./internal/operators/timeout");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _connectable = require("./internal/observable/connectable");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _types = require("./internal/types");
parcelHelpers.exportAll(_types, exports);
var _config = require("./internal/config");
var _audit = require("./internal/operators/audit");
var _auditTime = require("./internal/operators/auditTime");
var _buffer = require("./internal/operators/buffer");
var _bufferCount = require("./internal/operators/bufferCount");
var _bufferTime = require("./internal/operators/bufferTime");
var _bufferToggle = require("./internal/operators/bufferToggle");
var _bufferWhen = require("./internal/operators/bufferWhen");
var _catchError = require("./internal/operators/catchError");
var _combineAll = require("./internal/operators/combineAll");
var _combineLatestAll = require("./internal/operators/combineLatestAll");
var _combineLatestWith = require("./internal/operators/combineLatestWith");
var _concatAll = require("./internal/operators/concatAll");
var _concatMap = require("./internal/operators/concatMap");
var _concatMapTo = require("./internal/operators/concatMapTo");
var _concatWith = require("./internal/operators/concatWith");
var _connect = require("./internal/operators/connect");
var _count = require("./internal/operators/count");
var _debounce = require("./internal/operators/debounce");
var _debounceTime = require("./internal/operators/debounceTime");
var _defaultIfEmpty = require("./internal/operators/defaultIfEmpty");
var _delay = require("./internal/operators/delay");
var _delayWhen = require("./internal/operators/delayWhen");
var _dematerialize = require("./internal/operators/dematerialize");
var _distinct = require("./internal/operators/distinct");
var _distinctUntilChanged = require("./internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("./internal/operators/distinctUntilKeyChanged");
var _elementAt = require("./internal/operators/elementAt");
var _endWith = require("./internal/operators/endWith");
var _every = require("./internal/operators/every");
var _exhaust = require("./internal/operators/exhaust");
var _exhaustAll = require("./internal/operators/exhaustAll");
var _exhaustMap = require("./internal/operators/exhaustMap");
var _expand = require("./internal/operators/expand");
var _filter = require("./internal/operators/filter");
var _finalize = require("./internal/operators/finalize");
var _find = require("./internal/operators/find");
var _findIndex = require("./internal/operators/findIndex");
var _first = require("./internal/operators/first");
var _groupBy = require("./internal/operators/groupBy");
var _ignoreElements = require("./internal/operators/ignoreElements");
var _isEmpty = require("./internal/operators/isEmpty");
var _last = require("./internal/operators/last");
var _map = require("./internal/operators/map");
var _mapTo = require("./internal/operators/mapTo");
var _materialize = require("./internal/operators/materialize");
var _max = require("./internal/operators/max");
var _mergeAll = require("./internal/operators/mergeAll");
var _flatMap = require("./internal/operators/flatMap");
var _mergeMap = require("./internal/operators/mergeMap");
var _mergeMapTo = require("./internal/operators/mergeMapTo");
var _mergeScan = require("./internal/operators/mergeScan");
var _mergeWith = require("./internal/operators/mergeWith");
var _min = require("./internal/operators/min");
var _multicast = require("./internal/operators/multicast");
var _observeOn = require("./internal/operators/observeOn");
var _pairwise = require("./internal/operators/pairwise");
var _pluck = require("./internal/operators/pluck");
var _publish = require("./internal/operators/publish");
var _publishBehavior = require("./internal/operators/publishBehavior");
var _publishLast = require("./internal/operators/publishLast");
var _publishReplay = require("./internal/operators/publishReplay");
var _raceWith = require("./internal/operators/raceWith");
var _reduce = require("./internal/operators/reduce");
var _repeat = require("./internal/operators/repeat");
var _repeatWhen = require("./internal/operators/repeatWhen");
var _retry = require("./internal/operators/retry");
var _retryWhen = require("./internal/operators/retryWhen");
var _refCount = require("./internal/operators/refCount");
var _sample = require("./internal/operators/sample");
var _sampleTime = require("./internal/operators/sampleTime");
var _scan = require("./internal/operators/scan");
var _sequenceEqual = require("./internal/operators/sequenceEqual");
var _share = require("./internal/operators/share");
var _shareReplay = require("./internal/operators/shareReplay");
var _single = require("./internal/operators/single");
var _skip = require("./internal/operators/skip");
var _skipLast = require("./internal/operators/skipLast");
var _skipUntil = require("./internal/operators/skipUntil");
var _skipWhile = require("./internal/operators/skipWhile");
var _startWith = require("./internal/operators/startWith");
var _subscribeOn = require("./internal/operators/subscribeOn");
var _switchAll = require("./internal/operators/switchAll");
var _switchMap = require("./internal/operators/switchMap");
var _switchMapTo = require("./internal/operators/switchMapTo");
var _switchScan = require("./internal/operators/switchScan");
var _take = require("./internal/operators/take");
var _takeLast = require("./internal/operators/takeLast");
var _takeUntil = require("./internal/operators/takeUntil");
var _takeWhile = require("./internal/operators/takeWhile");
var _tap = require("./internal/operators/tap");
var _throttle = require("./internal/operators/throttle");
var _throttleTime = require("./internal/operators/throttleTime");
var _throwIfEmpty = require("./internal/operators/throwIfEmpty");
var _timeInterval = require("./internal/operators/timeInterval");
var _timeoutWith = require("./internal/operators/timeoutWith");
var _timestamp = require("./internal/operators/timestamp");
var _toArray = require("./internal/operators/toArray");
var _window = require("./internal/operators/window");
var _windowCount = require("./internal/operators/windowCount");
var _windowTime = require("./internal/operators/windowTime");
var _windowToggle = require("./internal/operators/windowToggle");
var _windowWhen = require("./internal/operators/windowWhen");
var _withLatestFrom = require("./internal/operators/withLatestFrom");
var _zipAll = require("./internal/operators/zipAll");
var _zipWith = require("./internal/operators/zipWith");

},{"./internal/Observable":"7yQsj","./internal/observable/ConnectableObservable":"diV6v","./internal/symbol/observable":"5jZEM","./internal/observable/dom/animationFrames":"9XrWr","./internal/Subject":"4O2Ci","./internal/BehaviorSubject":"ifPeJ","./internal/ReplaySubject":"kApGB","./internal/AsyncSubject":"ckOBG","./internal/scheduler/asap":"cypNV","./internal/scheduler/async":"gpgEY","./internal/scheduler/queue":"kkv2i","./internal/scheduler/animationFrame":"65j3k","./internal/scheduler/VirtualTimeScheduler":"aJbBf","./internal/Scheduler":"eRccS","./internal/Subscription":"5zUJD","./internal/Subscriber":"jYnMU","./internal/Notification":"2IL41","./internal/util/pipe":"1KVeR","./internal/util/noop":"g21kV","./internal/util/identity":"j7VF6","./internal/util/isObservable":"jMtcB","./internal/lastValueFrom":"cxlPC","./internal/firstValueFrom":"c64sh","./internal/util/ArgumentOutOfRangeError":"jVDjP","./internal/util/EmptyError":"9qylJ","./internal/util/NotFoundError":"lhHMy","./internal/util/ObjectUnsubscribedError":"jTWmj","./internal/util/SequenceError":"7MimW","./internal/operators/timeout":"29JXc","./internal/util/UnsubscriptionError":"6Fgee","./internal/observable/bindCallback":"96G65","./internal/observable/bindNodeCallback":"cmWtt","./internal/observable/combineLatest":"8P95W","./internal/observable/concat":"9rIbp","./internal/observable/connectable":"daW4r","./internal/observable/defer":"chtn2","./internal/observable/empty":"aJbJE","./internal/observable/forkJoin":"f6AFX","./internal/observable/from":"9pgfw","./internal/observable/fromEvent":"e5WGi","./internal/observable/fromEventPattern":"j4iVw","./internal/observable/generate":"f2cdK","./internal/observable/iif":"6vBM2","./internal/observable/interval":"Mwrym","./internal/observable/merge":"89mgc","./internal/observable/never":"3vB5v","./internal/observable/of":"odzQg","./internal/observable/onErrorResumeNext":"7z1li","./internal/observable/pairs":"dPQli","./internal/observable/partition":"1EAzE","./internal/observable/race":"8pir5","./internal/observable/range":"gR9Mr","./internal/observable/throwError":"1p9WI","./internal/observable/timer":"6RyKL","./internal/observable/using":"bZTOl","./internal/observable/zip":"97KMy","./internal/scheduled/scheduled":"hH29s","./internal/types":"2I43Y","./internal/config":"ZvVom","./internal/operators/audit":"ilXNl","./internal/operators/auditTime":"ckIxW","./internal/operators/buffer":"3k6NZ","./internal/operators/bufferCount":"4gWAC","./internal/operators/bufferTime":"bjytj","./internal/operators/bufferToggle":"2yytQ","./internal/operators/bufferWhen":"kCOrD","./internal/operators/catchError":"JhbIr","./internal/operators/combineAll":"fXGvp","./internal/operators/combineLatestAll":"84NPM","./internal/operators/combineLatestWith":"b0rac","./internal/operators/concatAll":"8dE4y","./internal/operators/concatMap":"gx19e","./internal/operators/concatMapTo":"bWtf4","./internal/operators/concatWith":"1TxEI","./internal/operators/connect":"996sN","./internal/operators/count":"becQQ","./internal/operators/debounce":"gj3HP","./internal/operators/debounceTime":"9xmt9","./internal/operators/defaultIfEmpty":"9LLdN","./internal/operators/delay":"aWls4","./internal/operators/delayWhen":"1lLop","./internal/operators/dematerialize":"94tDV","./internal/operators/distinct":"k7Lxc","./internal/operators/distinctUntilChanged":"gKqL5","./internal/operators/distinctUntilKeyChanged":"eK953","./internal/operators/elementAt":"iHu5L","./internal/operators/endWith":"2g7tf","./internal/operators/every":"2utBP","./internal/operators/exhaust":"lFhHE","./internal/operators/exhaustAll":"9Xrdb","./internal/operators/exhaustMap":"9LQL9","./internal/operators/expand":"bqZ3j","./internal/operators/filter":"2xhFi","./internal/operators/finalize":"74tcl","./internal/operators/find":"1fxVZ","./internal/operators/findIndex":"foToP","./internal/operators/first":"dPIxm","./internal/operators/groupBy":"5Wem9","./internal/operators/ignoreElements":"cZ4a2","./internal/operators/isEmpty":"kgslb","./internal/operators/last":"lr2Ou","./internal/operators/map":"76nl9","./internal/operators/mapTo":"iWPk6","./internal/operators/materialize":"gyCJX","./internal/operators/max":"hPuxw","./internal/operators/mergeAll":"jWozx","./internal/operators/flatMap":"9AkEm","./internal/operators/mergeMap":"agCFd","./internal/operators/mergeMapTo":"8s9lk","./internal/operators/mergeScan":"5uiIX","./internal/operators/mergeWith":"fmZl4","./internal/operators/min":"9uFVl","./internal/operators/multicast":"6q52K","./internal/operators/observeOn":"luPVb","./internal/operators/pairwise":"gorxB","./internal/operators/pluck":"5zGuP","./internal/operators/publish":"6LSaD","./internal/operators/publishBehavior":"2YRSe","./internal/operators/publishLast":"la7U0","./internal/operators/publishReplay":"76ACk","./internal/operators/raceWith":"9M9x7","./internal/operators/reduce":"gvErY","./internal/operators/repeat":"3L4JM","./internal/operators/repeatWhen":"6YiKQ","./internal/operators/retry":"ggola","./internal/operators/retryWhen":"h9AXv","./internal/operators/refCount":"3fXOk","./internal/operators/sample":"e1giE","./internal/operators/sampleTime":"erl66","./internal/operators/scan":"ryIZj","./internal/operators/sequenceEqual":"9Bk2J","./internal/operators/share":"l8b99","./internal/operators/shareReplay":"k8mmw","./internal/operators/single":"dw93N","./internal/operators/skip":"i5n9g","./internal/operators/skipLast":"37Yn7","./internal/operators/skipUntil":"gnxSm","./internal/operators/skipWhile":"k9Hq4","./internal/operators/startWith":"1rnij","./internal/operators/subscribeOn":"adsua","./internal/operators/switchAll":"de18Y","./internal/operators/switchMap":"epOzo","./internal/operators/switchMapTo":"afuB6","./internal/operators/switchScan":"aEJS3","./internal/operators/take":"6hYpU","./internal/operators/takeLast":"1MNo9","./internal/operators/takeUntil":"a6yre","./internal/operators/takeWhile":"idO1R","./internal/operators/tap":"1plP0","./internal/operators/throttle":"9lrjc","./internal/operators/throttleTime":"1kQ5K","./internal/operators/throwIfEmpty":"79Fad","./internal/operators/timeInterval":"huUJs","./internal/operators/timeoutWith":"9k3lA","./internal/operators/timestamp":"jSrVB","./internal/operators/toArray":"3nFbW","./internal/operators/window":"gBs0f","./internal/operators/windowCount":"267Hz","./internal/operators/windowTime":"9Ctcc","./internal/operators/windowToggle":"bhjIf","./internal/operators/windowWhen":"e3yxp","./internal/operators/withLatestFrom":"dpgEi","./internal/operators/zipAll":"kI25R","./internal/operators/zipWith":"jUcdo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7yQsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable
);
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var _isFunction = require("./util/isFunction");
var _errorContext = require("./util/errorContext");
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) this._subscribe = subscribe;
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _subscriber.SafeSubscriber(observerOrNext, error, complete);
        _errorContext.errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 || subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_observable.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return _pipe.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && _isFunction.isFunction(value.next) && _isFunction.isFunction(value.error) && _isFunction.isFunction(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof _subscriber.Subscriber || isObserver(value) && _subscription.isSubscription(value);
}

},{"./Subscriber":"jYnMU","./Subscription":"5zUJD","./symbol/observable":"5jZEM","./util/pipe":"1KVeR","./config":"ZvVom","./util/isFunction":"ftscY","./util/errorContext":"e27eu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jYnMU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber
);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber
);
parcelHelpers.export(exports, "EMPTY_OBSERVER", ()=>EMPTY_OBSERVER
);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _subscription = require("./Subscription");
var _config = require("./config");
var _reportUnhandledError = require("./util/reportUnhandledError");
var _noop = require("./util/noop");
var _notificationFactories = require("./NotificationFactories");
var _timeoutProvider = require("./scheduler/timeoutProvider");
var _errorContext = require("./util/errorContext");
var Subscriber = function(_super) {
    _tslib.__extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (_subscription.isSubscription(destination)) destination.add(_this);
        } else _this.destination = EMPTY_OBSERVER;
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) handleStoppedNotification(_notificationFactories.nextNotification(value), this);
        else this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) handleStoppedNotification(_notificationFactories.errorNotification(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) handleStoppedNotification(_notificationFactories.COMPLETE_NOTIFICATION, this);
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_subscription.Subscription);
var SafeSubscriber = function(_super) {
    _tslib.__extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (_isFunction.isFunction(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
            var context_1;
            if (_this && _config.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
            } else context_1 = observerOrNext;
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : _noop.noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : _noop.noop
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
function wrapForErrorHandling(handler, instance) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        try {
            handler.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) _errorContext.captureError(err);
            else _reportUnhandledError.reportUnhandledError(err);
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = _config.config.onStoppedNotification;
    onStoppedNotification && _timeoutProvider.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _noop.noop,
    error: defaultErrorHandler,
    complete: _noop.noop
};

},{"tslib":"j55WF","./util/isFunction":"ftscY","./Subscription":"5zUJD","./config":"ZvVom","./util/reportUnhandledError":"3s07i","./util/noop":"g21kV","./NotificationFactories":"6UGwl","./scheduler/timeoutProvider":"W0UVl","./util/errorContext":"e27eu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j55WF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ftscY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
function isFunction(value) {
    return typeof value === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5zUJD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription
);
parcelHelpers.export(exports, "EMPTY_SUBSCRIPTION", ()=>EMPTY_SUBSCRIPTION
);
parcelHelpers.export(exports, "isSubscription", ()=>isSubscription
);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var _arrRemove = require("./util/arrRemove");
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) try {
                    for(var _parentage_1 = _tslib.__values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                        var parent_1 = _parentage_1_1.value;
                        parent_1.remove(this);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                else _parentage.remove(this);
            }
            var initialTeardown = this.initialTeardown;
            if (_isFunction.isFunction(initialTeardown)) try {
                initialTeardown();
            } catch (e) {
                errors = e instanceof _unsubscriptionError.UnsubscriptionError ? e.errors : [
                    e
                ];
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for(var _teardowns_1 = _tslib.__values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()){
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _unsubscriptionError.UnsubscriptionError) errors = _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(errors)), _tslib.__read(err.errors));
                            else errors.push(err);
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) throw new _unsubscriptionError.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) execTeardown(teardown);
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) _arrRemove.arrRemove(_parentage, parent);
    };
    Subscription.prototype.remove = function(teardown) {
        var _teardowns = this._teardowns;
        _teardowns && _arrRemove.arrRemove(_teardowns, teardown);
        if (teardown instanceof Subscription) teardown._removeParent(this);
    };
    Subscription.EMPTY = (function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && 'closed' in value && _isFunction.isFunction(value.remove) && _isFunction.isFunction(value.add) && _isFunction.isFunction(value.unsubscribe);
}
function execTeardown(teardown) {
    if (_isFunction.isFunction(teardown)) teardown();
    else teardown.unsubscribe();
}

},{"tslib":"j55WF","./util/isFunction":"ftscY","./util/UnsubscriptionError":"6Fgee","./util/arrRemove":"iMX4f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Fgee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError
);
var _createErrorClass = require("./createErrorClass");
var UnsubscriptionError = _createErrorClass.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5TWEz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createErrorClass", ()=>createErrorClass
);
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iMX4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrRemove", ()=>arrRemove
);
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ZvVom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config
);
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3s07i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reportUnhandledError", ()=>reportUnhandledError
);
var _config = require("../config");
var _timeoutProvider = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    _timeoutProvider.timeoutProvider.setTimeout(function() {
        var onUnhandledError = _config.config.onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}

},{"../config":"ZvVom","../scheduler/timeoutProvider":"W0UVl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"W0UVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutProvider", ()=>timeoutProvider
);
var _tslib = require("tslib");
var timeoutProvider = {
    setTimeout: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
    },
    clearTimeout: function(handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};

},{"tslib":"j55WF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g21kV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop
);
function noop() {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6UGwl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPLETE_NOTIFICATION", ()=>COMPLETE_NOTIFICATION
);
parcelHelpers.export(exports, "errorNotification", ()=>errorNotification
);
parcelHelpers.export(exports, "nextNotification", ()=>nextNotification
);
parcelHelpers.export(exports, "createNotification", ()=>createNotification
);
var COMPLETE_NOTIFICATION = function() {
    return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e27eu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorContext", ()=>errorContext
);
parcelHelpers.export(exports, "captureError", ()=>captureError
);
var _config = require("../config");
var context = null;
function errorContext(cb) {
    if (_config.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) throw error;
        }
    } else cb();
}
function captureError(err) {
    if (_config.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}

},{"../config":"ZvVom","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5jZEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable
);
var observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1KVeR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray
);
var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j7VF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity
);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"diV6v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectableObservable", ()=>ConnectableObservable
);
var _tslib = require("tslib");
var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _refCount = require("../operators/refCount");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
var _lift = require("../util/lift");
var ConnectableObservable = function(_super) {
    _tslib.__extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (_lift.hasLift(source)) _this.lift = source.lift;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) this._subject = this.subjectFactory();
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 || _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new _subscription.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(new _operatorSubscriber.OperatorSubscriber(subject_1, undefined, function() {
                _this._teardown();
                subject_1.complete();
            }, function(err) {
                _this._teardown();
                subject_1.error(err);
            }, function() {
                return _this._teardown();
            })));
            if (connection.closed) {
                this._connection = null;
                connection = _subscription.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function() {
        return _refCount.refCount()(this);
    };
    return ConnectableObservable;
}(_observable.Observable);

},{"tslib":"j55WF","../Observable":"7yQsj","../Subscription":"5zUJD","../operators/refCount":"3fXOk","../operators/OperatorSubscriber":"2AV5Y","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3fXOk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refCount", ()=>refCount
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function refCount() {
    return _lift.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) sharedConnection.unsubscribe();
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) connection = source.connect();
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"acAIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasLift", ()=>hasLift
);
parcelHelpers.export(exports, "operate", ()=>operate
);
var _isFunction = require("./isFunction");
function hasLift(source) {
    return _isFunction.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function(source) {
        if (hasLift(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

},{"./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2AV5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OperatorSubscriber", ()=>OperatorSubscriber
);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var OperatorSubscriber = function(_super) {
    _tslib.__extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err1) {
                destination.error(err1);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
    };
    return OperatorSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"jYnMU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9XrWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationFrames", ()=>animationFrames
);
var _observable = require("../../Observable");
var _subscription = require("../../Subscription");
var _performanceTimestampProvider = require("../../scheduler/performanceTimestampProvider");
var _animationFrameProvider = require("../../scheduler/animationFrameProvider");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
function animationFramesFactory(timestampProvider) {
    var schedule = _animationFrameProvider.animationFrameProvider.schedule;
    return new _observable.Observable(function(subscriber) {
        var subscription = new _subscription.Subscription();
        var provider = timestampProvider || _performanceTimestampProvider.performanceTimestampProvider;
        var start = provider.now();
        var run = function(timestamp) {
            var now = provider.now();
            subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
            });
            if (!subscriber.closed) subscription.add(schedule(run));
        };
        subscription.add(schedule(run));
        return subscription;
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

},{"../../Observable":"7yQsj","../../Subscription":"5zUJD","../../scheduler/performanceTimestampProvider":"eD4Jp","../../scheduler/animationFrameProvider":"ghfQj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eD4Jp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "performanceTimestampProvider", ()=>performanceTimestampProvider
);
var performanceTimestampProvider = {
    now: function() {
        return (performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ghfQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationFrameProvider", ()=>animationFrameProvider
);
var _tslib = require("tslib");
var _subscription = require("../Subscription");
var animationFrameProvider = {
    schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new _subscription.Subscription(function() {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
    },
    cancelAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
    },
    delegate: undefined
};

},{"tslib":"j55WF","../Subscription":"5zUJD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4O2Ci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subject", ()=>Subject
);
parcelHelpers.export(exports, "AnonymousSubject", ()=>AnonymousSubject
);
var _tslib = require("tslib");
var _observable = require("./Observable");
var _subscription = require("./Subscription");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _arrRemove = require("./util/arrRemove");
var _errorContext = require("./util/errorContext");
var Subject = function(_super) {
    _tslib.__extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        _errorContext.errorContext(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                var copy = _this.observers.slice();
                try {
                    for(var copy_1 = _tslib.__values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()){
                        var observer = copy_1_1.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        _errorContext.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length)observers.shift().error(err);
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        _errorContext.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length)observers.shift().complete();
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped ? _subscription.EMPTY_SUBSCRIPTION : (observers.push(subscriber), new _subscription.Subscription(function() {
            return _arrRemove.arrRemove(observers, subscriber);
        }));
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject.prototype.asObservable = function() {
        var observable = new _observable.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_observable.Observable);
var AnonymousSubject = function(_super) {
    _tslib.__extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _subscription.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject);

},{"tslib":"j55WF","./Observable":"7yQsj","./Subscription":"5zUJD","./util/ObjectUnsubscribedError":"jTWmj","./util/arrRemove":"iMX4f","./util/errorContext":"e27eu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jTWmj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>ObjectUnsubscribedError
);
var _createErrorClass = require("./createErrorClass");
var ObjectUnsubscribedError = _createErrorClass.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ifPeJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BehaviorSubject", ()=>BehaviorSubject
);
var _tslib = require("tslib");
var _subject = require("./Subject");
var BehaviorSubject = function(_super) {
    _tslib.__extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) throw thrownError;
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_subject.Subject);

},{"tslib":"j55WF","./Subject":"4O2Ci","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kApGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReplaySubject", ()=>ReplaySubject
);
var _tslib = require("tslib");
var _subject = require("./Subject");
var _dateTimestampProvider = require("./scheduler/dateTimestampProvider");
var ReplaySubject = function(_super) {
    _tslib.__extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) _bufferSize = Infinity;
        if (_windowTime === void 0) _windowTime = Infinity;
        if (_timestampProvider === void 0) _timestampProvider = _dateTimestampProvider.dateTimestampProvider;
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2)subscriber.next(copy[i]);
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2)last = i;
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(_subject.Subject);

},{"tslib":"j55WF","./Subject":"4O2Ci","./scheduler/dateTimestampProvider":"euFMa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"euFMa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateTimestampProvider", ()=>dateTimestampProvider
);
var dateTimestampProvider = {
    now: function() {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ckOBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncSubject", ()=>AsyncSubject
);
var _tslib = require("tslib");
var _subject = require("./Subject");
var AsyncSubject = function(_super) {
    _tslib.__extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(_subject.Subject);

},{"tslib":"j55WF","./Subject":"4O2Ci","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cypNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asapScheduler", ()=>asapScheduler
);
parcelHelpers.export(exports, "asap", ()=>asap
);
var _asapAction = require("./AsapAction");
var _asapScheduler = require("./AsapScheduler");
var asapScheduler = new _asapScheduler.AsapScheduler(_asapAction.AsapAction);
var asap = asapScheduler;

},{"./AsapAction":"gdOsS","./AsapScheduler":"4uhFB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gdOsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapAction", ()=>AsapAction
);
var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var _immediateProvider = require("./immediateProvider");
var AsapAction = function(_super) {
    _tslib.__extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = _immediateProvider.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            _immediateProvider.immediateProvider.clearImmediate(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"gatq4","./immediateProvider":"b0FJK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gatq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncAction", ()=>AsyncAction
);
var _tslib = require("tslib");
var _action = require("./Action");
var _intervalProvider = require("./intervalProvider");
var _arrRemove = require("../util/arrRemove");
var AsyncAction = function(_super) {
    _tslib.__extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) delay = 0;
        return _intervalProvider.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && this.delay === delay && this.pending === false) return id;
        _intervalProvider.intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            _arrRemove.arrRemove(actions, this);
            if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(_action.Action);

},{"tslib":"j55WF","./Action":"1Yvkl","./intervalProvider":"4ioGE","../util/arrRemove":"iMX4f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Yvkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action
);
var _tslib = require("tslib");
var _subscription = require("../Subscription");
var Action = function(_super) {
    _tslib.__extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action;
}(_subscription.Subscription);

},{"tslib":"j55WF","../Subscription":"5zUJD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4ioGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intervalProvider", ()=>intervalProvider
);
var _tslib = require("tslib");
var intervalProvider = {
    setInterval: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) || setInterval).apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
    },
    clearInterval: function(handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
};

},{"tslib":"j55WF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b0FJK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "immediateProvider", ()=>immediateProvider
);
var _tslib = require("tslib");
var _immediate = require("../util/Immediate");
var setImmediate = _immediate.Immediate.setImmediate, clearImmediate = _immediate.Immediate.clearImmediate;
var immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, _tslib.__spreadArray([], _tslib.__read(args)));
    },
    clearImmediate: function(handle) {
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
};

},{"tslib":"j55WF","../util/Immediate":"aWu13","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWu13":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immediate", ()=>Immediate
);
parcelHelpers.export(exports, "TestTools", ()=>TestTools
);
var nextHandle = 1;
var resolved;
var activeHandles = {
};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) resolved = Promise.resolve();
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
var TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4uhFB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapScheduler", ()=>AsapScheduler
);
var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AsapScheduler = function(_super) {
    _tslib.__extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AsapScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"iv1vw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iv1vw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncScheduler", ()=>AsyncScheduler
);
var _tslib = require("tslib");
var _scheduler = require("../Scheduler");
var AsyncScheduler = function(_super) {
    _tslib.__extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) now = _scheduler.Scheduler.now;
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift())
        this._active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler;
}(_scheduler.Scheduler);

},{"tslib":"j55WF","../Scheduler":"eRccS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eRccS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scheduler", ()=>Scheduler
);
var _dateTimestampProvider = require("./scheduler/dateTimestampProvider");
var Scheduler = function() {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) now = Scheduler.now;
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = _dateTimestampProvider.dateTimestampProvider.now;
    return Scheduler;
}();

},{"./scheduler/dateTimestampProvider":"euFMa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gpgEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncScheduler", ()=>asyncScheduler
);
parcelHelpers.export(exports, "async", ()=>async
);
var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var asyncScheduler = new _asyncScheduler.AsyncScheduler(_asyncAction.AsyncAction);
var async = asyncScheduler;

},{"./AsyncAction":"gatq4","./AsyncScheduler":"iv1vw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kkv2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queueScheduler", ()=>queueScheduler
);
parcelHelpers.export(exports, "queue", ()=>queue
);
var _queueAction = require("./QueueAction");
var _queueScheduler = require("./QueueScheduler");
var queueScheduler = new _queueScheduler.QueueScheduler(_queueAction.QueueAction);
var queue = queueScheduler;

},{"./QueueAction":"5KH3A","./QueueScheduler":"9C8Ro","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5KH3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueAction", ()=>QueueAction
);
var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var QueueAction = function(_super) {
    _tslib.__extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        return scheduler.flush(this);
    };
    return QueueAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"gatq4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9C8Ro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueScheduler", ()=>QueueScheduler
);
var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var QueueScheduler = function(_super) {
    _tslib.__extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"iv1vw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"65j3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>animationFrameScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>animationFrame
);
var _animationFrameAction = require("./AnimationFrameAction");
var _animationFrameScheduler = require("./AnimationFrameScheduler");
var animationFrameScheduler = new _animationFrameScheduler.AnimationFrameScheduler(_animationFrameAction.AnimationFrameAction);
var animationFrame = animationFrameScheduler;

},{"./AnimationFrameAction":"iAUgX","./AnimationFrameScheduler":"6leU4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iAUgX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameAction", ()=>AnimationFrameAction
);
var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var _animationFrameProvider = require("./animationFrameProvider");
var AnimationFrameAction = function(_super) {
    _tslib.__extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider.animationFrameProvider.requestAnimationFrame(function() {
            return scheduler.flush(undefined);
        }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            _animationFrameProvider.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"gatq4","./animationFrameProvider":"ghfQj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6leU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameScheduler", ()=>AnimationFrameScheduler
);
var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AnimationFrameScheduler = function(_super) {
    _tslib.__extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"iv1vw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aJbBf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>VirtualTimeScheduler
);
parcelHelpers.export(exports, "VirtualAction", ()=>VirtualAction
);
var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var _subscription = require("../Subscription");
var _asyncScheduler = require("./AsyncScheduler");
var VirtualTimeScheduler = function(_super) {
    _tslib.__extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) schedulerActionCtor = VirtualAction;
        if (maxFrames === void 0) maxFrames = Infinity;
        var _this = _super.call(this, schedulerActionCtor, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) break;
        }
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_asyncScheduler.AsyncScheduler);
var VirtualAction = function(_super) {
    _tslib.__extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) index = scheduler.index += 1;
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (Number.isFinite(delay)) {
            if (!this.id) return _super.prototype.schedule.call(this, state, delay);
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        } else return _subscription.Subscription.EMPTY;
    };
    VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return undefined;
    };
    VirtualAction.prototype._execute = function(state, delay) {
        if (this.active === true) return _super.prototype._execute.call(this, state, delay);
    };
    VirtualAction.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) return 0;
            else if (a.index > b.index) return 1;
            else return -1;
        } else if (a.delay > b.delay) return 1;
        else return -1;
    };
    return VirtualAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"gatq4","../Subscription":"5zUJD","./AsyncScheduler":"iv1vw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2IL41":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotificationKind", ()=>NotificationKind
);
parcelHelpers.export(exports, "Notification", ()=>Notification
);
parcelHelpers.export(exports, "observeNotification", ()=>observeNotification
);
var _empty = require("./observable/empty");
var _of = require("./observable/of");
var _throwError = require("./observable/throwError");
var _isFunction = require("./util/isFunction");
var NotificationKind;
(function(NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {
}));
var Notification = function() {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function(observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return _isFunction.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N' ? _of.of(value) : kind === 'E' ? _throwError.throwError(function() {
            return error;
        }) : kind === 'C' ? _empty.EMPTY : 0;
        if (!result) throw new TypeError("Unexpected notification kind " + kind);
        return result;
    };
    Notification.createNext = function(value) {
        return new Notification('N', value);
    };
    Notification.createError = function(err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function() {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    return Notification;
}();
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') throw new TypeError('Invalid notification, missing "kind"');
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 || _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 || _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 || _c.call(observer);
}

},{"./observable/empty":"aJbJE","./observable/of":"odzQg","./observable/throwError":"1p9WI","./util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aJbJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY", ()=>EMPTY
);
parcelHelpers.export(exports, "empty", ()=>empty
);
var _observable = require("../Observable");
var EMPTY = new _observable.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _observable.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
}

},{"../Observable":"7yQsj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"odzQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "of", ()=>of
);
var _args = require("../util/args");
var _from = require("./from");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = _args.popScheduler(args);
    return _from.from(args, scheduler);
}

},{"../util/args":"3et4z","./from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3et4z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popResultSelector", ()=>popResultSelector
);
parcelHelpers.export(exports, "popScheduler", ()=>popScheduler
);
parcelHelpers.export(exports, "popNumber", ()=>popNumber
);
var _isFunction = require("./isFunction");
var _isScheduler = require("./isScheduler");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return _isFunction.isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return _isScheduler.isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

},{"./isFunction":"ftscY","./isScheduler":"eCOPl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eCOPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isScheduler", ()=>isScheduler
);
var _isFunction = require("./isFunction");
function isScheduler(value) {
    return value && _isFunction.isFunction(value.schedule);
}

},{"./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9pgfw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
var _scheduled = require("../scheduled/scheduled");
var _innerFrom = require("./innerFrom");
function from(input, scheduler) {
    return scheduler ? _scheduled.scheduled(input, scheduler) : _innerFrom.innerFrom(input);
}

},{"../scheduled/scheduled":"hH29s","./innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hH29s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled
);
var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _scheduleReadableStreamLike = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if (_isInteropObservable.isInteropObservable(input)) return _scheduleObservable.scheduleObservable(input, scheduler);
        if (_isArrayLike.isArrayLike(input)) return _scheduleArray.scheduleArray(input, scheduler);
        if (_isPromise.isPromise(input)) return _schedulePromise.schedulePromise(input, scheduler);
        if (_isAsyncIterable.isAsyncIterable(input)) return _scheduleAsyncIterable.scheduleAsyncIterable(input, scheduler);
        if (_isIterable.isIterable(input)) return _scheduleIterable.scheduleIterable(input, scheduler);
        if (_isReadableStreamLike.isReadableStreamLike(input)) return _scheduleReadableStreamLike.scheduleReadableStreamLike(input, scheduler);
    }
    throw _throwUnobservableError.createInvalidObservableTypeError(input);
}

},{"./scheduleObservable":"4hCxj","./schedulePromise":"iXCcS","./scheduleArray":"htHMS","./scheduleIterable":"feMQG","./scheduleAsyncIterable":"dkZtL","../util/isInteropObservable":"2Lr0L","../util/isPromise":"4nLhv","../util/isArrayLike":"g2l4K","../util/isIterable":"cUoq5","../util/isAsyncIterable":"8qLrt","../util/throwUnobservableError":"2CpxC","../util/isReadableStreamLike":"iWMXH","./scheduleReadableStreamLike":"cGXK6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4hCxj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable
);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function scheduleObservable(input, scheduler) {
    return _innerFrom.innerFrom(input).pipe(_subscribeOn.subscribeOn(scheduler), _observeOn.observeOn(scheduler));
}

},{"../observable/innerFrom":"8vUv0","../operators/observeOn":"luPVb","../operators/subscribeOn":"adsua","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8vUv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "innerFrom", ()=>innerFrom
);
parcelHelpers.export(exports, "fromInteropObservable", ()=>fromInteropObservable
);
parcelHelpers.export(exports, "fromArrayLike", ()=>fromArrayLike
);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise
);
parcelHelpers.export(exports, "fromIterable", ()=>fromIterable
);
parcelHelpers.export(exports, "fromAsyncIterable", ()=>fromAsyncIterable
);
parcelHelpers.export(exports, "fromReadableStreamLike", ()=>fromReadableStreamLike
);
var _tslib = require("tslib");
var _isArrayLike = require("../util/isArrayLike");
var _isPromise = require("../util/isPromise");
var _observable = require("../Observable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isIterable = require("../util/isIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _isFunction = require("../util/isFunction");
var _reportUnhandledError = require("../util/reportUnhandledError");
var _observable1 = require("../symbol/observable");
function innerFrom(input) {
    if (input instanceof _observable.Observable) return input;
    if (input != null) {
        if (_isInteropObservable.isInteropObservable(input)) return fromInteropObservable(input);
        if (_isArrayLike.isArrayLike(input)) return fromArrayLike(input);
        if (_isPromise.isPromise(input)) return fromPromise(input);
        if (_isAsyncIterable.isAsyncIterable(input)) return fromAsyncIterable(input);
        if (_isIterable.isIterable(input)) return fromIterable(input);
        if (_isReadableStreamLike.isReadableStreamLike(input)) return fromReadableStreamLike(input);
    }
    throw _throwUnobservableError.createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new _observable.Observable(function(subscriber) {
        var obs = obj[_observable1.observable]();
        if (_isFunction.isFunction(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new _observable.Observable(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new _observable.Observable(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, _reportUnhandledError.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new _observable.Observable(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = _tslib.__values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) return;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new _observable.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(_isReadableStreamLike.readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return _tslib.__awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return _tslib.__generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = _tslib.__asyncValues(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) return [
                        2
                    ];
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
}

},{"tslib":"j55WF","../util/isArrayLike":"g2l4K","../util/isPromise":"4nLhv","../Observable":"7yQsj","../util/isInteropObservable":"2Lr0L","../util/isAsyncIterable":"8qLrt","../util/throwUnobservableError":"2CpxC","../util/isIterable":"cUoq5","../util/isReadableStreamLike":"iWMXH","../util/isFunction":"ftscY","../util/reportUnhandledError":"3s07i","../symbol/observable":"5jZEM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g2l4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike
);
var isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4nLhv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
var _isFunction = require("./isFunction");
function isPromise(value) {
    return _isFunction.isFunction(value === null || value === void 0 ? void 0 : value.then);
}

},{"./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Lr0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable
);
var _observable = require("../symbol/observable");
var _isFunction = require("./isFunction");
function isInteropObservable(input) {
    return _isFunction.isFunction(input[_observable.observable]);
}

},{"../symbol/observable":"5jZEM","./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8qLrt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable
);
var _isFunction = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && _isFunction.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

},{"./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2CpxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInvalidObservableTypeError", ()=>createInvalidObservableTypeError
);
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cUoq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable
);
var _iterator = require("../symbol/iterator");
var _isFunction = require("./isFunction");
function isIterable(input) {
    return _isFunction.isFunction(input === null || input === void 0 ? void 0 : input[_iterator.iterator]);
}

},{"../symbol/iterator":"b8rI1","./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b8rI1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator
);
parcelHelpers.export(exports, "iterator", ()=>iterator
);
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iWMXH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readableStreamLikeToAsyncGenerator", ()=>readableStreamLikeToAsyncGenerator
);
parcelHelpers.export(exports, "isReadableStreamLike", ()=>isReadableStreamLike
);
var _tslib = require("tslib");
var _isFunction = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return _tslib.__asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return _tslib.__generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4,
                        _tslib.__await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _tslib.__await(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        _tslib.__await(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return _isFunction.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

},{"tslib":"j55WF","./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"luPVb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeOn", ()=>observeOn
);
var _executeSchedule = require("../util/executeSchedule");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return _lift.operate(function(source, subscriber) {
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}

},{"../util/executeSchedule":"e5aja","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e5aja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "executeSchedule", ()=>executeSchedule
);
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) delay = 0;
    if (repeat === void 0) repeat = false;
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) parentSubscription.add(this.schedule(null, delay));
        else this.unsubscribe();
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) return scheduleSubscription;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"adsua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeOn", ()=>subscribeOn
);
var _lift = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return _lift.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}

},{"../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iXCcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise
);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function schedulePromise(input, scheduler) {
    return _innerFrom.innerFrom(input).pipe(_subscribeOn.subscribeOn(scheduler), _observeOn.observeOn(scheduler));
}

},{"../observable/innerFrom":"8vUv0","../operators/observeOn":"luPVb","../operators/subscribeOn":"adsua","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"htHMS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray
);
var _observable = require("../Observable");
function scheduleArray(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) subscriber.complete();
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) this.schedule();
            }
        });
    });
}

},{"../Observable":"7yQsj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"feMQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable
);
var _observable = require("../Observable");
var _iterator = require("../symbol/iterator");
var _isFunction = require("../util/isFunction");
var _executeSchedule = require("../util/executeSchedule");
function scheduleIterable(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var iterator;
        _executeSchedule.executeSchedule(subscriber, scheduler, function() {
            iterator = input[_iterator.iterator]();
            _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else subscriber.next(value);
            }, 0, true);
        });
        return function() {
            return _isFunction.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}

},{"../Observable":"7yQsj","../symbol/iterator":"b8rI1","../util/isFunction":"ftscY","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dkZtL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleAsyncIterable", ()=>scheduleAsyncIterable
);
var _observable = require("../Observable");
var _executeSchedule = require("../util/executeSchedule");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) throw new Error('Iterable cannot be null');
    return new _observable.Observable(function(subscriber) {
        _executeSchedule.executeSchedule(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else subscriber.next(result.value);
                });
            }, 0, true);
        });
    });
}

},{"../Observable":"7yQsj","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cGXK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleReadableStreamLike", ()=>scheduleReadableStreamLike
);
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return _scheduleAsyncIterable.scheduleAsyncIterable(_isReadableStreamLike.readableStreamLikeToAsyncGenerator(input), scheduler);
}

},{"./scheduleAsyncIterable":"dkZtL","../util/isReadableStreamLike":"iWMXH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1p9WI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwError", ()=>throwError
);
var _observable = require("../Observable");
var _isFunction = require("../util/isFunction");
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = _isFunction.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new _observable.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
}

},{"../Observable":"7yQsj","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jMtcB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObservable", ()=>isObservable
);
var _observable = require("../Observable");
var _isFunction = require("./isFunction");
function isObservable(obj) {
    return !!obj && (obj instanceof _observable.Observable || _isFunction.isFunction(obj.lift) && _isFunction.isFunction(obj.subscribe));
}

},{"../Observable":"7yQsj","./isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cxlPC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lastValueFrom", ()=>lastValueFrom
);
var _emptyError = require("./util/EmptyError");
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) resolve(_value);
                else if (hasConfig) resolve(config.defaultValue);
                else reject(new _emptyError.EmptyError());
            }
        });
    });
}

},{"./util/EmptyError":"9qylJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9qylJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyError", ()=>EmptyError
);
var _createErrorClass = require("./createErrorClass");
var EmptyError = _createErrorClass.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = 'EmptyError';
        this.message = 'no elements in sequence';
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c64sh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "firstValueFrom", ()=>firstValueFrom
);
var _emptyError = require("./util/EmptyError");
var _subscriber = require("./Subscriber");
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var subscriber = new _subscriber.SafeSubscriber({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) resolve(config.defaultValue);
                else reject(new _emptyError.EmptyError());
            }
        });
        source.subscribe(subscriber);
    });
}

},{"./util/EmptyError":"9qylJ","./Subscriber":"jYnMU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jVDjP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>ArgumentOutOfRangeError
);
var _createErrorClass = require("./createErrorClass");
var ArgumentOutOfRangeError = _createErrorClass.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lhHMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundError", ()=>NotFoundError
);
var _createErrorClass = require("./createErrorClass");
var NotFoundError = _createErrorClass.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7MimW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SequenceError", ()=>SequenceError
);
var _createErrorClass = require("./createErrorClass");
var SequenceError = _createErrorClass.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});

},{"./createErrorClass":"5TWEz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"29JXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError
);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _createErrorClass = require("../util/createErrorClass");
var _operatorSubscriber = require("./OperatorSubscriber");
var _executeSchedule = require("../util/executeSchedule");
var TimeoutError = _createErrorClass.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) info = null;
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = _isDate.isValidDate(config) ? {
        first: config
    } : typeof config === 'number' ? {
        each: config
    } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _async.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return _lift.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
            timerSubscription = _executeSchedule.executeSchedule(subscriber, scheduler, function() {
                try {
                    originalSourceSubscription.unsubscribe();
                    _innerFrom.innerFrom(_with({
                        meta: meta,
                        lastValue: lastValue,
                        seen: seen
                    })).subscribe(subscriber);
                } catch (err) {
                    subscriber.error(err);
                }
            }, delay);
        };
        originalSourceSubscription = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, undefined, undefined, function() {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            lastValue = null;
        }));
        startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
    });
}
function timeoutErrorFactory(info) {
    throw new TimeoutError(info);
}

},{"../scheduler/async":"gpgEY","../util/isDate":"fcNH4","../util/lift":"acAIF","../observable/innerFrom":"8vUv0","../util/createErrorClass":"5TWEz","./OperatorSubscriber":"2AV5Y","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fcNH4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidDate", ()=>isValidDate
);
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"96G65":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindCallback", ()=>bindCallback
);
var _bindCallbackInternals = require("./bindCallbackInternals");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return _bindCallbackInternals.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}

},{"./bindCallbackInternals":"9MJ4l","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9MJ4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindCallbackInternals", ()=>bindCallbackInternals
);
var _tslib = require("tslib");
var _isScheduler = require("../util/isScheduler");
var _observable = require("../Observable");
var _subscribeOn = require("../operators/subscribeOn");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _observeOn = require("../operators/observeOn");
var _asyncSubject = require("../AsyncSubject");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (_isScheduler.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(_mapOneOrManyArgs.mapOneOrManyArgs(resultSelector));
        };
    }
    if (scheduler) return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(_subscribeOn.subscribeOn(scheduler), _observeOn.observeOn(scheduler));
    };
    return function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var subject = new _asyncSubject.AsyncSubject();
        var uninitialized = true;
        return new _observable.Observable(function(subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(args)), [
                    function() {
                        var results = [];
                        for(var _i = 0; _i < arguments.length; _i++)results[_i] = arguments[_i];
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) subject.complete();
                    }, 
                ]));
                if (isComplete_1) subject.complete();
                isAsync_1 = true;
            }
            return subs;
        });
    };
}

},{"tslib":"j55WF","../util/isScheduler":"eCOPl","../Observable":"7yQsj","../operators/subscribeOn":"adsua","../util/mapOneOrManyArgs":"1wtQ7","../operators/observeOn":"luPVb","../AsyncSubject":"ckOBG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1wtQ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapOneOrManyArgs", ()=>mapOneOrManyArgs
);
var _tslib = require("tslib");
var _map = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return _map.map(function(args) {
        return callOrApply(fn, args);
    });
}

},{"tslib":"j55WF","../operators/map":"76nl9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76nl9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function map(project, thisArg) {
    return _lift.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cmWtt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindNodeCallback", ()=>bindNodeCallback
);
var _bindCallbackInternals = require("./bindCallbackInternals");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return _bindCallbackInternals.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}

},{"./bindCallbackInternals":"9MJ4l","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8P95W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
parcelHelpers.export(exports, "combineLatestInit", ()=>combineLatestInit
);
var _observable = require("../Observable");
var _argsArgArrayOrObject = require("../util/argsArgArrayOrObject");
var _from = require("./from");
var _identity = require("../util/identity");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _args = require("../util/args");
var _createObject = require("../util/createObject");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
var _executeSchedule = require("../util/executeSchedule");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = _args.popScheduler(args);
    var resultSelector = _args.popResultSelector(args);
    var _a = _argsArgArrayOrObject.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) return _from.from([], scheduler);
    var result = new _observable.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return _createObject.createObject(keys, values);
    } : _identity.identity));
    return resultSelector ? result.pipe(_mapOneOrManyArgs.mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) valueTransform = _identity.identity;
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = _from.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
                    }, function() {
                        if (!--active) subscriber.complete();
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++)_loop_1(i);
        }, subscriber);
    };
}
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) _executeSchedule.executeSchedule(subscription, scheduler, execute);
    else execute();
}

},{"../Observable":"7yQsj","../util/argsArgArrayOrObject":"gdk8s","./from":"9pgfw","../util/identity":"j7VF6","../util/mapOneOrManyArgs":"1wtQ7","../util/args":"3et4z","../util/createObject":"gE19p","../operators/OperatorSubscriber":"2AV5Y","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gdk8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "argsArgArrayOrObject", ()=>argsArgArrayOrObject
);
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) return {
            args: first_1,
            keys: null
        };
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gE19p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createObject", ()=>createObject
);
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9rIbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
var _concatAll = require("../operators/concatAll");
var _args = require("../util/args");
var _from = require("./from");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return _concatAll.concatAll()(_from.from(args, _args.popScheduler(args)));
}

},{"../operators/concatAll":"8dE4y","../util/args":"3et4z","./from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8dE4y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatAll", ()=>concatAll
);
var _mergeAll = require("./mergeAll");
function concatAll() {
    return _mergeAll.mergeAll(1);
}

},{"./mergeAll":"jWozx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jWozx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeAll", ()=>mergeAll
);
var _mergeMap = require("./mergeMap");
var _identity = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return _mergeMap.mergeMap(_identity.identity, concurrent);
}

},{"./mergeMap":"agCFd","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"agCFd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMap", ()=>mergeMap
);
var _map = require("./map");
var _innerFrom = require("../observable/innerFrom");
var _lift = require("../util/lift");
var _mergeInternals = require("./mergeInternals");
var _isFunction = require("../util/isFunction");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (_isFunction.isFunction(resultSelector)) return mergeMap(function(a, i) {
        return _map.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
        })(_innerFrom.innerFrom(project(a, i)));
    }, concurrent);
    else if (typeof resultSelector === 'number') concurrent = resultSelector;
    return _lift.operate(function(source, subscriber) {
        return _mergeInternals.mergeInternals(source, subscriber, project, concurrent);
    });
}

},{"./map":"76nl9","../observable/innerFrom":"8vUv0","../util/lift":"acAIF","./mergeInternals":"6wzfD","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6wzfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeInternals", ()=>mergeInternals
);
var _innerFrom = require("../observable/innerFrom");
var _executeSchedule = require("../util/executeSchedule");
var _operatorSubscriber = require("./OperatorSubscriber");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) subscriber.complete();
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        _innerFrom.innerFrom(project(value, index++)).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
            if (expand) outerNext(innerValue);
            else subscriber.next(innerValue);
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) try {
                active--;
                var _loop_1 = function() {
                    var bufferedValue = buffer.shift();
                    if (innerSubScheduler) _executeSchedule.executeSchedule(subscriber, innerSubScheduler, function() {
                        return doInnerSub(bufferedValue);
                    });
                    else doInnerSub(bufferedValue);
                };
                while(buffer.length && active < concurrent)_loop_1();
                checkComplete();
            } catch (err) {
                subscriber.error(err);
            }
        }));
    };
    source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalTeardown === null || additionalTeardown === void 0 || additionalTeardown();
    };
}

},{"../observable/innerFrom":"8vUv0","../util/executeSchedule":"e5aja","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"daW4r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "connectable", ()=>connectable
);
var _subject = require("../Subject");
var _observable = require("../Observable");
var _defer = require("./defer");
var DEFAULT_CONFIG = {
    connector: function() {
        return new _subject.Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new _observable.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function() {
        if (!connection || connection.closed) {
            connection = _defer.defer(function() {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) connection.add(function() {
                return subject = connector();
            });
        }
        return connection;
    };
    return result;
}

},{"../Subject":"4O2Ci","../Observable":"7yQsj","./defer":"chtn2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"chtn2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defer", ()=>defer
);
var _observable = require("../Observable");
var _innerFrom = require("./innerFrom");
function defer(observableFactory) {
    return new _observable.Observable(function(subscriber) {
        _innerFrom.innerFrom(observableFactory()).subscribe(subscriber);
    });
}

},{"../Observable":"7yQsj","./innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f6AFX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forkJoin", ()=>forkJoin
);
var _observable = require("../Observable");
var _argsArgArrayOrObject = require("../util/argsArgArrayOrObject");
var _innerFrom = require("./innerFrom");
var _args = require("../util/args");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _createObject = require("../util/createObject");
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = _args.popResultSelector(args);
    var _a = _argsArgArrayOrObject.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new _observable.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            _innerFrom.innerFrom(sources[sourceIndex]).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                return remainingCompletions--;
            }, undefined, function() {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) subscriber.next(keys ? _createObject.createObject(keys, values) : values);
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++)_loop_1(sourceIndex);
    });
    return resultSelector ? result.pipe(_mapOneOrManyArgs.mapOneOrManyArgs(resultSelector)) : result;
}

},{"../Observable":"7yQsj","../util/argsArgArrayOrObject":"gdk8s","./innerFrom":"8vUv0","../util/args":"3et4z","../operators/OperatorSubscriber":"2AV5Y","../util/mapOneOrManyArgs":"1wtQ7","../util/createObject":"gE19p","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e5WGi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEvent", ()=>fromEvent
);
var _tslib = require("tslib");
var _innerFrom = require("../observable/innerFrom");
var _observable = require("../Observable");
var _mergeMap = require("../operators/mergeMap");
var _isArrayLike = require("../util/isArrayLike");
var _isFunction = require("../util/isFunction");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var nodeEventEmitterMethods = [
    'addListener',
    'removeListener'
];
var eventTargetMethods = [
    'addEventListener',
    'removeEventListener'
];
var jqueryMethods = [
    'on',
    'off'
];
function fromEvent(target, eventName, options, resultSelector) {
    if (_isFunction.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe(_mapOneOrManyArgs.mapOneOrManyArgs(resultSelector));
    var _a = _tslib.__read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (_isArrayLike.isArrayLike(target)) return _mergeMap.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
        })(_innerFrom.innerFrom(target));
    }
    if (!add) throw new TypeError('Invalid event target');
    return new _observable.Observable(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return _isFunction.isFunction(target.addListener) && _isFunction.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return _isFunction.isFunction(target.on) && _isFunction.isFunction(target.off);
}
function isEventTarget(target) {
    return _isFunction.isFunction(target.addEventListener) && _isFunction.isFunction(target.removeEventListener);
}

},{"tslib":"j55WF","../observable/innerFrom":"8vUv0","../Observable":"7yQsj","../operators/mergeMap":"agCFd","../util/isArrayLike":"g2l4K","../util/isFunction":"ftscY","../util/mapOneOrManyArgs":"1wtQ7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j4iVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEventPattern", ()=>fromEventPattern
);
var _observable = require("../Observable");
var _isFunction = require("../util/isFunction");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(_mapOneOrManyArgs.mapOneOrManyArgs(resultSelector));
    return new _observable.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++)e[_i] = arguments[_i];
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return _isFunction.isFunction(removeHandler) ? function() {
            return removeHandler(handler, retValue);
        } : undefined;
    });
}

},{"../Observable":"7yQsj","../util/isFunction":"ftscY","../util/mapOneOrManyArgs":"1wtQ7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f2cdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generate", ()=>generate
);
var _tslib = require("tslib");
var _identity = require("../util/identity");
var _isScheduler = require("../util/isScheduler");
var _defer = require("./defer");
var _scheduleIterable = require("../scheduled/scheduleIterable");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? _identity.identity : _b, scheduler = _a.scheduler;
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || _isScheduler.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = _identity.identity;
            scheduler = resultSelectorOrScheduler;
        } else resultSelector = resultSelectorOrScheduler;
    }
    function gen() {
        var state;
        return _tslib.__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        resultSelector(state)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }
    return _defer.defer(scheduler ? function() {
        return _scheduleIterable.scheduleIterable(gen(), scheduler);
    } : gen);
}

},{"tslib":"j55WF","../util/identity":"j7VF6","../util/isScheduler":"eCOPl","./defer":"chtn2","../scheduled/scheduleIterable":"feMQG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6vBM2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iif", ()=>iif
);
var _defer = require("./defer");
function iif(condition, trueResult, falseResult) {
    return _defer.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}

},{"./defer":"chtn2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"Mwrym":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interval", ()=>interval
);
var _async = require("../scheduler/async");
var _timer = require("./timer");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = _async.asyncScheduler;
    if (period < 0) period = 0;
    return _timer.timer(period, period, scheduler);
}

},{"../scheduler/async":"gpgEY","./timer":"6RyKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6RyKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer
);
var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isScheduler = require("../util/isScheduler");
var _isDate = require("../util/isDate");
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) dueTime = 0;
    if (scheduler === void 0) scheduler = _async.async;
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (_isScheduler.isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
        else intervalDuration = intervalOrScheduler;
    }
    return new _observable.Observable(function(subscriber) {
        var due = _isDate.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) due = 0;
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) this.schedule(undefined, intervalDuration);
                else subscriber.complete();
            }
        }, due);
    });
}

},{"../Observable":"7yQsj","../scheduler/async":"gpgEY","../util/isScheduler":"eCOPl","../util/isDate":"fcNH4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"89mgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
var _mergeAll = require("../operators/mergeAll");
var _innerFrom = require("./innerFrom");
var _empty = require("./empty");
var _args = require("../util/args");
var _from = require("./from");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = _args.popScheduler(args);
    var concurrent = _args.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? _empty.EMPTY : sources.length === 1 ? _innerFrom.innerFrom(sources[0]) : _mergeAll.mergeAll(concurrent)(_from.from(sources, scheduler));
}

},{"../operators/mergeAll":"jWozx","./innerFrom":"8vUv0","./empty":"aJbJE","../util/args":"3et4z","./from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3vB5v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NEVER", ()=>NEVER
);
parcelHelpers.export(exports, "never", ()=>never
);
var _observable = require("../Observable");
var _noop = require("../util/noop");
var NEVER = new _observable.Observable(_noop.noop);
function never() {
    return NEVER;
}

},{"../Observable":"7yQsj","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7z1li":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
var _empty = require("./empty");
var _onErrorResumeNext = require("../operators/onErrorResumeNext");
var _argsOrArgArray = require("../util/argsOrArgArray");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return _onErrorResumeNext.onErrorResumeNext(_argsOrArgArray.argsOrArgArray(sources))(_empty.EMPTY);
}

},{"./empty":"aJbJE","../operators/onErrorResumeNext":"2ToZ1","../util/argsOrArgArray":"25sle","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ToZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
var _tslib = require("tslib");
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    var nextSources = _argsOrArgArray.argsOrArgArray(sources);
    return _lift.operate(function(source, subscriber) {
        var remaining = _tslib.__spreadArray([
            source
        ], _tslib.__read(nextSources));
        var subscribeNext = function() {
            if (!subscriber.closed) {
                if (remaining.length > 0) {
                    var nextSource = void 0;
                    try {
                        nextSource = _innerFrom.innerFrom(remaining.shift());
                    } catch (err) {
                        subscribeNext();
                        return;
                    }
                    var innerSub = new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, _noop.noop, _noop.noop);
                    subscriber.add(nextSource.subscribe(innerSub));
                    innerSub.add(subscribeNext);
                } else subscriber.complete();
            }
        };
        subscribeNext();
    });
}

},{"tslib":"j55WF","../util/lift":"acAIF","../observable/innerFrom":"8vUv0","../util/argsOrArgArray":"25sle","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"25sle":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "argsOrArgArray", ()=>argsOrArgArray
);
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dPQli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairs", ()=>pairs
);
var _from = require("./from");
function pairs(obj, scheduler) {
    return _from.from(Object.entries(obj), scheduler);
}

},{"./from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1EAzE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
var _not = require("../util/not");
var _filter = require("../operators/filter");
var _innerFrom = require("./innerFrom");
function partition(source, predicate, thisArg) {
    return [
        _filter.filter(predicate, thisArg)(_innerFrom.innerFrom(source)),
        _filter.filter(_not.not(predicate, thisArg))(_innerFrom.innerFrom(source))
    ];
}

},{"../util/not":"aXPYw","../operators/filter":"2xhFi","./innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aXPYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "not", ()=>not
);
function not(pred, thisArg) {
    return function(value, index) {
        return !pred.call(thisArg, value, index);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2xhFi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function filter(predicate, thisArg) {
    return _lift.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8pir5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
parcelHelpers.export(exports, "raceInit", ()=>raceInit
);
var _observable = require("../Observable");
var _innerFrom = require("./innerFrom");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
function race() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    sources = _argsOrArgArray.argsOrArgArray(sources);
    return sources.length === 1 ? _innerFrom.innerFrom(sources[0]) : new _observable.Observable(raceInit(sources));
}
function raceInit(sources) {
    return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i) {
            subscriptions.push(_innerFrom.innerFrom(sources[i]).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                if (subscriptions) {
                    for(var s = 0; s < subscriptions.length; s++)s !== i && subscriptions[s].unsubscribe();
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for(var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++)_loop_1(i);
    };
}

},{"../Observable":"7yQsj","./innerFrom":"8vUv0","../util/argsOrArgArray":"25sle","../operators/OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gR9Mr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range
);
var _observable = require("../Observable");
var _empty = require("./empty");
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) return _empty.EMPTY;
    var end = count + start;
    return new _observable.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            } else subscriber.complete();
        });
    } : function(subscriber) {
        var n = start;
        while(n < end && !subscriber.closed)subscriber.next(n++);
        subscriber.complete();
    });
}

},{"../Observable":"7yQsj","./empty":"aJbJE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bZTOl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "using", ()=>using
);
var _observable = require("../Observable");
var _innerFrom = require("./innerFrom");
var _empty = require("./empty");
function using(resourceFactory, observableFactory) {
    return new _observable.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? _innerFrom.innerFrom(result) : _empty.EMPTY;
        source.subscribe(subscriber);
        return function() {
            if (resource) resource.unsubscribe();
        };
    });
}

},{"../Observable":"7yQsj","./innerFrom":"8vUv0","./empty":"aJbJE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"97KMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
var _tslib = require("tslib");
var _observable = require("../Observable");
var _innerFrom = require("./innerFrom");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _empty = require("./empty");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
var _args = require("../util/args");
function zip() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = _args.popResultSelector(args);
    var sources = _argsOrArgArray.argsOrArgArray(args);
    return sources.length ? new _observable.Observable(function(subscriber) {
        var buffers = sources.map(function() {
            return [];
        });
        var completed = sources.map(function() {
            return false;
        });
        subscriber.add(function() {
            buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex) {
            _innerFrom.innerFrom(sources[sourceIndex]).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                buffers[sourceIndex].push(value);
                if (buffers.every(function(buffer) {
                    return buffer.length;
                })) {
                    var result = buffers.map(function(buffer) {
                        return buffer.shift();
                    });
                    subscriber.next(resultSelector ? resultSelector.apply(void 0, _tslib.__spreadArray([], _tslib.__read(result))) : result);
                    if (buffers.some(function(buffer, i) {
                        return !buffer.length && completed[i];
                    })) subscriber.complete();
                }
            }, function() {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        };
        for(var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++)_loop_1(sourceIndex);
        return function() {
            buffers = completed = null;
        };
    }) : _empty.EMPTY;
}

},{"tslib":"j55WF","../Observable":"7yQsj","./innerFrom":"8vUv0","../util/argsOrArgArray":"25sle","./empty":"aJbJE","../operators/OperatorSubscriber":"2AV5Y","../util/args":"3et4z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2I43Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ilXNl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audit", ()=>audit
);
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _operatorSubscriber = require("./OperatorSubscriber");
function audit(durationSelector) {
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) _innerFrom.innerFrom(durationSelector(value)).subscribe(durationSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, endDuration, cleanupDuration));
        }, function() {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","../observable/innerFrom":"8vUv0","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ckIxW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auditTime", ()=>auditTime
);
var _async = require("../scheduler/async");
var _audit = require("./audit");
var _timer = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _audit.audit(function() {
        return _timer.timer(duration, scheduler);
    });
}

},{"../scheduler/async":"gpgEY","./audit":"ilXNl","../observable/timer":"6RyKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3k6NZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer", ()=>buffer
);
var _lift = require("../util/lift");
var _noop = require("../util/noop");
var _operatorSubscriber = require("./OperatorSubscriber");
function buffer(closingNotifier) {
    return _lift.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return currentBuffer.push(value);
        }, function() {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        closingNotifier.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, _noop.noop));
        return function() {
            currentBuffer = null;
        };
    });
}

},{"../util/lift":"acAIF","../util/noop":"g21kV","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4gWAC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferCount", ()=>bufferCount
);
var _tslib = require("tslib");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _arrRemove = require("../util/arrRemove");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = null;
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return _lift.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if ((count++) % startBufferEvery === 0) buffers.push([]);
            try {
                for(var buffers_1 = _tslib.__values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (toEmit) try {
                for(var toEmit_1 = _tslib.__values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()){
                    var buffer = toEmit_1_1.value;
                    _arrRemove.arrRemove(buffers, buffer);
                    subscriber.next(buffer);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        }, function() {
            var e_3, _a;
            try {
                for(var buffers_2 = _tslib.__values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()){
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffers = null;
        }));
    });
}

},{"tslib":"j55WF","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/arrRemove":"iMX4f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bjytj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferTime", ()=>bufferTime
);
var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _arrRemove = require("../util/arrRemove");
var _async = require("../scheduler/async");
var _args = require("../util/args");
var _executeSchedule = require("../util/executeSchedule");
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = _args.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : _async.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return _lift.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            _arrRemove.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
            if (bufferRecords) {
                var subs = new _subscription.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs
                };
                bufferRecords.push(record_1);
                _executeSchedule.executeSchedule(subs, scheduler, function() {
                    return emit(record_1);
                }, bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) _executeSchedule.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        else restartOnEmit = true;
        startBuffer();
        var bufferTimeSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for(var recordsCopy_1 = _tslib.__values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()){
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length)subscriber.next(bufferRecords.shift().buffer);
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 || bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function() {
            return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
    });
}

},{"tslib":"j55WF","../Subscription":"5zUJD","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/arrRemove":"iMX4f","../scheduler/async":"gpgEY","../util/args":"3et4z","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2yytQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferToggle", ()=>bufferToggle
);
var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
var _arrRemove = require("../util/arrRemove");
function bufferToggle(openings, closingSelector) {
    return _lift.operate(function(source, subscriber) {
        var buffers = [];
        _innerFrom.innerFrom(openings).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new _subscription.Subscription();
            var emitBuffer = function() {
                _arrRemove.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(_innerFrom.innerFrom(closingSelector(openValue)).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, emitBuffer, _noop.noop)));
        }, _noop.noop));
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var buffers_1 = _tslib.__values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(buffers.length > 0)subscriber.next(buffers.shift());
            subscriber.complete();
        }));
    });
}

},{"tslib":"j55WF","../Subscription":"5zUJD","../util/lift":"acAIF","../observable/innerFrom":"8vUv0","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","../util/arrRemove":"iMX4f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kCOrD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferWhen", ()=>bufferWhen
);
var _lift = require("../util/lift");
var _noop = require("../util/noop");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
function bufferWhen(closingSelector) {
    return _lift.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            _innerFrom.innerFrom(closingSelector()).subscribe(closingSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, openBuffer, _noop.noop));
        };
        openBuffer();
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function() {
            return buffer = closingSubscriber = null;
        }));
    });
}

},{"../util/lift":"acAIF","../util/noop":"g21kV","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"JhbIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catchError", ()=>catchError
);
var _innerFrom = require("../observable/innerFrom");
var _operatorSubscriber = require("./OperatorSubscriber");
var _lift = require("../util/lift");
function catchError(selector) {
    return _lift.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
            handledResult = _innerFrom.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else syncUnsub = true;
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}

},{"../observable/innerFrom":"8vUv0","./OperatorSubscriber":"2AV5Y","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fXGvp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineAll", ()=>combineAll
);
var _combineLatestAll = require("./combineLatestAll");
var combineAll = _combineLatestAll.combineLatestAll;

},{"./combineLatestAll":"84NPM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"84NPM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatestAll", ()=>combineLatestAll
);
var _combineLatest = require("../observable/combineLatest");
var _joinAllInternals = require("./joinAllInternals");
function combineLatestAll(project) {
    return _joinAllInternals.joinAllInternals(_combineLatest.combineLatest, project);
}

},{"../observable/combineLatest":"8P95W","./joinAllInternals":"8mEZ4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8mEZ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "joinAllInternals", ()=>joinAllInternals
);
var _identity = require("../util/identity");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _pipe = require("../util/pipe");
var _mergeMap = require("./mergeMap");
var _toArray = require("./toArray");
function joinAllInternals(joinFn, project) {
    return _pipe.pipe(_toArray.toArray(), _mergeMap.mergeMap(function(sources) {
        return joinFn(sources);
    }), project ? _mapOneOrManyArgs.mapOneOrManyArgs(project) : _identity.identity);
}

},{"../util/identity":"j7VF6","../util/mapOneOrManyArgs":"1wtQ7","../util/pipe":"1KVeR","./mergeMap":"agCFd","./toArray":"3nFbW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3nFbW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
var _reduce = require("./reduce");
var _lift = require("../util/lift");
var arrReducer = function(arr, value) {
    return arr.push(value), arr;
};
function toArray() {
    return _lift.operate(function(source, subscriber) {
        _reduce.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}

},{"./reduce":"gvErY","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvErY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce
);
var _scanInternals = require("./scanInternals");
var _lift = require("../util/lift");
function reduce(accumulator, seed) {
    return _lift.operate(_scanInternals.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}

},{"./scanInternals":"hvaR4","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hvaR4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scanInternals", ()=>scanInternals
);
var _operatorSubscriber = require("./OperatorSubscriber");
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
            hasState && subscriber.next(state);
            subscriber.complete();
        }));
    };
}

},{"./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b0rac":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatestWith", ()=>combineLatestWith
);
var _tslib = require("tslib");
var _combineLatest = require("./combineLatest");
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return _combineLatest.combineLatest.apply(void 0, _tslib.__spreadArray([], _tslib.__read(otherSources)));
}

},{"tslib":"j55WF","./combineLatest":"11Atz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"11Atz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
var _tslib = require("tslib");
var _combineLatest = require("../observable/combineLatest");
var _lift = require("../util/lift");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _pipe = require("../util/pipe");
var _args = require("../util/args");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = _args.popResultSelector(args);
    return resultSelector ? _pipe.pipe(combineLatest.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args))), _mapOneOrManyArgs.mapOneOrManyArgs(resultSelector)) : _lift.operate(function(source, subscriber) {
        _combineLatest.combineLatestInit(_tslib.__spreadArray([
            source
        ], _tslib.__read(_argsOrArgArray.argsOrArgArray(args))))(subscriber);
    });
}

},{"tslib":"j55WF","../observable/combineLatest":"8P95W","../util/lift":"acAIF","../util/argsOrArgArray":"25sle","../util/mapOneOrManyArgs":"1wtQ7","../util/pipe":"1KVeR","../util/args":"3et4z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gx19e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMap", ()=>concatMap
);
var _mergeMap = require("./mergeMap");
var _isFunction = require("../util/isFunction");
function concatMap(project, resultSelector) {
    return _isFunction.isFunction(resultSelector) ? _mergeMap.mergeMap(project, resultSelector, 1) : _mergeMap.mergeMap(project, 1);
}

},{"./mergeMap":"agCFd","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bWtf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMapTo", ()=>concatMapTo
);
var _concatMap = require("./concatMap");
var _isFunction = require("../util/isFunction");
function concatMapTo(innerObservable, resultSelector) {
    return _isFunction.isFunction(resultSelector) ? _concatMap.concatMap(function() {
        return innerObservable;
    }, resultSelector) : _concatMap.concatMap(function() {
        return innerObservable;
    });
}

},{"./concatMap":"gx19e","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1TxEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatWith", ()=>concatWith
);
var _tslib = require("tslib");
var _concat = require("./concat");
function concatWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return _concat.concat.apply(void 0, _tslib.__spreadArray([], _tslib.__read(otherSources)));
}

},{"tslib":"j55WF","./concat":"eEXRc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eEXRc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
var _tslib = require("tslib");
var _lift = require("../util/lift");
var _concatAll = require("./concatAll");
var _args = require("../util/args");
var _from = require("../observable/from");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = _args.popScheduler(args);
    return _lift.operate(function(source, subscriber) {
        _concatAll.concatAll()(_from.from(_tslib.__spreadArray([
            source
        ], _tslib.__read(args)), scheduler)).subscribe(subscriber);
    });
}

},{"tslib":"j55WF","../util/lift":"acAIF","./concatAll":"8dE4y","../util/args":"3et4z","../observable/from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"996sN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "connect", ()=>connect
);
var _subject = require("../Subject");
var _from = require("../observable/from");
var _lift = require("../util/lift");
var _fromSubscribable = require("../observable/fromSubscribable");
var DEFAULT_CONFIG = {
    connector: function() {
        return new _subject.Subject();
    }
};
function connect(selector, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connector = config.connector;
    return _lift.operate(function(source, subscriber) {
        var subject = connector();
        _from.from(selector(_fromSubscribable.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}

},{"../Subject":"4O2Ci","../observable/from":"9pgfw","../util/lift":"acAIF","../observable/fromSubscribable":"5awg2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5awg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromSubscribable", ()=>fromSubscribable
);
var _observable = require("../Observable");
function fromSubscribable(subscribable) {
    return new _observable.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
    });
}

},{"../Observable":"7yQsj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"becQQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "count", ()=>count
);
var _reduce = require("./reduce");
function count(predicate) {
    return _reduce.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
}

},{"./reduce":"gvErY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gj3HP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
var _lift = require("../util/lift");
var _noop = require("../util/noop");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
function debounce(durationSelector) {
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, emit, _noop.noop);
            _innerFrom.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = durationSubscriber = null;
        }));
    });
}

},{"../util/lift":"acAIF","../util/noop":"g21kV","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9xmt9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounceTime", ()=>debounceTime
);
var _async = require("../scheduler/async");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) scheduler = _async.asyncScheduler;
    return _lift.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = activeTask = null;
        }));
    });
}

},{"../scheduler/async":"gpgEY","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9LLdN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>defaultIfEmpty
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function defaultIfEmpty(defaultValue) {
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            if (!hasValue) subscriber.next(defaultValue);
            subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWls4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay
);
var _async = require("../scheduler/async");
var _delayWhen = require("./delayWhen");
var _timer = require("../observable/timer");
function delay(due, scheduler) {
    if (scheduler === void 0) scheduler = _async.asyncScheduler;
    var duration = _timer.timer(due, scheduler);
    return _delayWhen.delayWhen(function() {
        return duration;
    });
}

},{"../scheduler/async":"gpgEY","./delayWhen":"1lLop","../observable/timer":"6RyKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1lLop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delayWhen", ()=>delayWhen
);
var _concat = require("../observable/concat");
var _take = require("./take");
var _ignoreElements = require("./ignoreElements");
var _mapTo = require("./mapTo");
var _mergeMap = require("./mergeMap");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) return function(source) {
        return _concat.concat(subscriptionDelay.pipe(_take.take(1), _ignoreElements.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
    return _mergeMap.mergeMap(function(value, index) {
        return delayDurationSelector(value, index).pipe(_take.take(1), _mapTo.mapTo(value));
    });
}

},{"../observable/concat":"9rIbp","./take":"6hYpU","./ignoreElements":"cZ4a2","./mapTo":"iWPk6","./mergeMap":"agCFd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6hYpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "take", ()=>take
);
var _empty = require("../observable/empty");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function take(count) {
    return count <= 0 ? function() {
        return _empty.EMPTY;
    } : _lift.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            if (++seen <= count) {
                subscriber.next(value);
                if (count <= seen) subscriber.complete();
            }
        }));
    });
}

},{"../observable/empty":"aJbJE","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cZ4a2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ignoreElements", ()=>ignoreElements
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
function ignoreElements() {
    return _lift.operate(function(source, subscriber) {
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, _noop.noop));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iWPk6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapTo", ()=>mapTo
);
var _map = require("./map");
function mapTo(value) {
    return _map.map(function() {
        return value;
    });
}

},{"./map":"76nl9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"94tDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dematerialize", ()=>dematerialize
);
var _notification = require("../Notification");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function dematerialize() {
    return _lift.operate(function(source, subscriber) {
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(notification) {
            return _notification.observeNotification(notification, subscriber);
        }));
    });
}

},{"../Notification":"2IL41","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k7Lxc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinct", ()=>distinct
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
function distinct(keySelector, flushes) {
    return _lift.operate(function(source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes === null || flushes === void 0 || flushes.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            return distinctKeys.clear();
        }, _noop.noop));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gKqL5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>distinctUntilChanged
);
var _identity = require("../util/identity");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) keySelector = _identity.identity;
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return _lift.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}

},{"../util/identity":"j7VF6","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eK953":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>distinctUntilKeyChanged
);
var _distinctUntilChanged = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return _distinctUntilChanged.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}

},{"./distinctUntilChanged":"gKqL5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iHu5L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementAt", ()=>elementAt
);
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _filter = require("./filter");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _take = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError();
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(_filter.filter(function(v, i) {
            return i === index;
        }), _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _argumentOutOfRangeError.ArgumentOutOfRangeError();
        }));
    };
}

},{"../util/ArgumentOutOfRangeError":"jVDjP","./filter":"2xhFi","./throwIfEmpty":"79Fad","./defaultIfEmpty":"9LLdN","./take":"6hYpU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"79Fad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwIfEmpty", ()=>throwIfEmpty
);
var _emptyError = require("../util/EmptyError");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) errorFactory = defaultErrorFactory;
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
    });
}
function defaultErrorFactory() {
    return new _emptyError.EmptyError();
}

},{"../util/EmptyError":"9qylJ","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2g7tf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endWith", ()=>endWith
);
var _tslib = require("tslib");
var _concat = require("../observable/concat");
var _of = require("../observable/of");
function endWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    return function(source) {
        return _concat.concat(source, _of.of.apply(void 0, _tslib.__spreadArray([], _tslib.__read(values))));
    };
}

},{"tslib":"j55WF","../observable/concat":"9rIbp","../observable/of":"odzQg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2utBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "every", ()=>every
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function every(predicate, thisArg) {
    return _lift.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lFhHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaust", ()=>exhaust
);
var _exhaustAll = require("./exhaustAll");
var exhaust = _exhaustAll.exhaustAll;

},{"./exhaustAll":"9Xrdb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Xrdb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaustAll", ()=>exhaustAll
);
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _operatorSubscriber = require("./OperatorSubscriber");
function exhaustAll() {
    return _lift.operate(function(source, subscriber) {
        var isComplete = false;
        var innerSub = null;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(inner) {
            if (!innerSub) innerSub = _innerFrom.innerFrom(inner).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, function() {
                innerSub = null;
                isComplete && subscriber.complete();
            }));
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","../observable/innerFrom":"8vUv0","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9LQL9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaustMap", ()=>exhaustMap
);
var _map = require("./map");
var _innerFrom = require("../observable/innerFrom");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function exhaustMap(project, resultSelector) {
    if (resultSelector) return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
            return _innerFrom.innerFrom(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return _lift.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(outerValue) {
            if (!innerSub) {
                innerSub = new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, function() {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                _innerFrom.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}

},{"./map":"76nl9","../observable/innerFrom":"8vUv0","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bqZ3j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expand", ()=>expand
);
var _lift = require("../util/lift");
var _mergeInternals = require("./mergeInternals");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) concurrent = Infinity;
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return _lift.operate(function(source, subscriber) {
        return _mergeInternals.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}

},{"../util/lift":"acAIF","./mergeInternals":"6wzfD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"74tcl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "finalize", ()=>finalize
);
var _lift = require("../util/lift");
function finalize(callback) {
    return _lift.operate(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
}

},{"../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1fxVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "createFind", ()=>createFind
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function find(predicate, thisArg) {
    return _lift.operate(createFind(predicate, thisArg, 'value'));
}
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function(source, subscriber) {
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"foToP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findIndex", ()=>findIndex
);
var _lift = require("../util/lift");
var _find = require("./find");
function findIndex(predicate, thisArg) {
    return _lift.operate(_find.createFind(predicate, thisArg, 'index'));
}

},{"../util/lift":"acAIF","./find":"1fxVZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dPIxm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "first", ()=>first
);
var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _take = require("./take");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _throwIfEmpty = require("./throwIfEmpty");
var _identity = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"9qylJ","./filter":"2xhFi","./take":"6hYpU","./defaultIfEmpty":"9LLdN","./throwIfEmpty":"79Fad","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Wem9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupBy", ()=>groupBy
);
var _tslib = require("tslib");
var _observable = require("../Observable");
var _innerFrom = require("../observable/innerFrom");
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return _lift.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') element = elementOrOptions;
        else duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        var groups = new Map();
        var notify = function(cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function(err) {
            return notify(function(consumer) {
                return consumer.error(err);
            });
        };
        var groupBySourceSubscriber = new GroupBySubscriber(subscriber, function(value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, group_1 = connector ? connector() : new _subject.Subject());
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = new _operatorSubscriber.OperatorSubscriber(group_1, function() {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 || durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function() {
                            return groups.delete(key_1);
                        });
                        groupBySourceSubscriber.add(_innerFrom.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            } catch (err) {
                handleError(err);
            }
        }, function() {
            return notify(function(consumer) {
                return consumer.complete();
            });
        }, handleError, function() {
            return groups.clear();
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new _observable.Observable(function(groupSubscriber) {
                groupBySourceSubscriber.activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function() {
                    innerSub.unsubscribe();
                    --groupBySourceSubscriber.activeGroups === 0 && groupBySourceSubscriber.teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
var GroupBySubscriber = function(_super) {
    _tslib.__extends(GroupBySubscriber, _super);
    function GroupBySubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeGroups = 0;
        _this.teardownAttempted = false;
        return _this;
    }
    GroupBySubscriber.prototype.unsubscribe = function() {
        this.teardownAttempted = true;
        this.activeGroups === 0 && _super.prototype.unsubscribe.call(this);
    };
    return GroupBySubscriber;
}(_operatorSubscriber.OperatorSubscriber);

},{"tslib":"j55WF","../Observable":"7yQsj","../observable/innerFrom":"8vUv0","../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kgslb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function isEmpty() {
    return _lift.operate(function(source, subscriber) {
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            subscriber.next(false);
            subscriber.complete();
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lr2Ou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "last", ()=>last
);
var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _takeLast = require("./takeLast");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _identity = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _takeLast.takeLast(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"9qylJ","./filter":"2xhFi","./takeLast":"1MNo9","./throwIfEmpty":"79Fad","./defaultIfEmpty":"9LLdN","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1MNo9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeLast", ()=>takeLast
);
var _tslib = require("tslib");
var _empty = require("../observable/empty");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function takeLast(count) {
    return count <= 0 ? function() {
        return _empty.EMPTY;
    } : _lift.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            buffer.push(value);
            count < buffer.length && buffer.shift();
        }, function() {
            var e_1, _a;
            try {
                for(var buffer_1 = _tslib.__values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()){
                    var value = buffer_1_1.value;
                    subscriber.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffer = null;
        }));
    });
}

},{"tslib":"j55WF","../observable/empty":"aJbJE","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gyCJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "materialize", ()=>materialize
);
var _notification = require("../Notification");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function materialize() {
    return _lift.operate(function(source, subscriber) {
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(_notification.Notification.createNext(value));
        }, function() {
            subscriber.next(_notification.Notification.createComplete());
            subscriber.complete();
        }, function(err) {
            subscriber.next(_notification.Notification.createError(err));
            subscriber.complete();
        }));
    });
}

},{"../Notification":"2IL41","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hPuxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max
);
var _reduce = require("./reduce");
var _isFunction = require("../util/isFunction");
function max(comparer) {
    return _reduce.reduce(_isFunction.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    });
}

},{"./reduce":"gvErY","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9AkEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flatMap", ()=>flatMap
);
var _mergeMap = require("./mergeMap");
var flatMap = _mergeMap.mergeMap;

},{"./mergeMap":"agCFd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8s9lk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMapTo", ()=>mergeMapTo
);
var _mergeMap = require("./mergeMap");
var _isFunction = require("../util/isFunction");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (_isFunction.isFunction(resultSelector)) return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, resultSelector, concurrent);
    if (typeof resultSelector === 'number') concurrent = resultSelector;
    return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}

},{"./mergeMap":"agCFd","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5uiIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeScan", ()=>mergeScan
);
var _lift = require("../util/lift");
var _mergeInternals = require("./mergeInternals");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return _lift.operate(function(source, subscriber) {
        var state = seed;
        return _mergeInternals.mergeInternals(source, subscriber, function(value, index) {
            return accumulator(state, value, index);
        }, concurrent, function(value) {
            state = value;
        }, false, undefined, function() {
            return state = null;
        });
    });
}

},{"../util/lift":"acAIF","./mergeInternals":"6wzfD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fmZl4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeWith", ()=>mergeWith
);
var _tslib = require("tslib");
var _merge = require("./merge");
function mergeWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return _merge.merge.apply(void 0, _tslib.__spreadArray([], _tslib.__read(otherSources)));
}

},{"tslib":"j55WF","./merge":"br3iC","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"br3iC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
var _tslib = require("tslib");
var _lift = require("../util/lift");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _mergeAll = require("./mergeAll");
var _args = require("../util/args");
var _from = require("../observable/from");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = _args.popScheduler(args);
    var concurrent = _args.popNumber(args, Infinity);
    args = _argsOrArgArray.argsOrArgArray(args);
    return _lift.operate(function(source, subscriber) {
        _mergeAll.mergeAll(concurrent)(_from.from(_tslib.__spreadArray([
            source
        ], _tslib.__read(args)), scheduler)).subscribe(subscriber);
    });
}

},{"tslib":"j55WF","../util/lift":"acAIF","../util/argsOrArgArray":"25sle","./mergeAll":"jWozx","../util/args":"3et4z","../observable/from":"9pgfw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9uFVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "min", ()=>min
);
var _reduce = require("./reduce");
var _isFunction = require("../util/isFunction");
function min(comparer) {
    return _reduce.reduce(_isFunction.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    });
}

},{"./reduce":"gvErY","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6q52K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "multicast", ()=>multicast
);
var _connectableObservable = require("../observable/ConnectableObservable");
var _isFunction = require("../util/isFunction");
var _connect = require("./connect");
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = _isFunction.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
    };
    if (_isFunction.isFunction(selector)) return _connect.connect(selector, {
        connector: subjectFactory
    });
    return function(source) {
        return new _connectableObservable.ConnectableObservable(source, subjectFactory);
    };
}

},{"../observable/ConnectableObservable":"diV6v","../util/isFunction":"ftscY","./connect":"996sN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gorxB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairwise", ()=>pairwise
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function pairwise() {
    return _lift.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([
                p,
                value
            ]);
            hasPrev = true;
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5zGuP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pluck", ()=>pluck
);
var _map = require("./map");
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++)properties[_i] = arguments[_i];
    var length = properties.length;
    if (length === 0) throw new Error('list of properties cannot be empty.');
    return _map.map(function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') currentProp = p;
            else return undefined;
        }
        return currentProp;
    });
}

},{"./map":"76nl9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6LSaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publish", ()=>publish
);
var _subject = require("../Subject");
var _multicast = require("./multicast");
var _connect = require("./connect");
function publish(selector) {
    return selector ? function(source) {
        return _connect.connect(selector)(source);
    } : function(source) {
        return _multicast.multicast(new _subject.Subject())(source);
    };
}

},{"../Subject":"4O2Ci","./multicast":"6q52K","./connect":"996sN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2YRSe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishBehavior", ()=>publishBehavior
);
var _behaviorSubject = require("../BehaviorSubject");
var _connectableObservable = require("../observable/ConnectableObservable");
function publishBehavior(initialValue) {
    return function(source) {
        var subject = new _behaviorSubject.BehaviorSubject(initialValue);
        return new _connectableObservable.ConnectableObservable(source, function() {
            return subject;
        });
    };
}

},{"../BehaviorSubject":"ifPeJ","../observable/ConnectableObservable":"diV6v","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"la7U0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishLast", ()=>publishLast
);
var _asyncSubject = require("../AsyncSubject");
var _connectableObservable = require("../observable/ConnectableObservable");
function publishLast() {
    return function(source) {
        var subject = new _asyncSubject.AsyncSubject();
        return new _connectableObservable.ConnectableObservable(source, function() {
            return subject;
        });
    };
}

},{"../AsyncSubject":"ckOBG","../observable/ConnectableObservable":"diV6v","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76ACk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishReplay", ()=>publishReplay
);
var _replaySubject = require("../ReplaySubject");
var _multicast = require("./multicast");
var _isFunction = require("../util/isFunction");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !_isFunction.isFunction(selectorOrScheduler)) timestampProvider = selectorOrScheduler;
    var selector = _isFunction.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
        return _multicast.multicast(new _replaySubject.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
}

},{"../ReplaySubject":"kApGB","./multicast":"6q52K","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9M9x7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "raceWith", ()=>raceWith
);
var _tslib = require("tslib");
var _race = require("../observable/race");
var _lift = require("../util/lift");
var _identity = require("../util/identity");
function raceWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return !otherSources.length ? _identity.identity : _lift.operate(function(source, subscriber) {
        _race.raceInit(_tslib.__spreadArray([
            source
        ], _tslib.__read(otherSources)))(subscriber);
    });
}

},{"tslib":"j55WF","../observable/race":"8pir5","../util/lift":"acAIF","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3L4JM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
var _empty = require("../observable/empty");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function repeat(count) {
    if (count === void 0) count = Infinity;
    return count <= 0 ? function() {
        return _empty.EMPTY;
    } : _lift.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRepeat = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, function() {
                if (++soFar < count) {
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        subscribeForRepeat();
                    } else syncUnsub = true;
                } else subscriber.complete();
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRepeat();
            }
        };
        subscribeForRepeat();
    });
}

},{"../observable/empty":"aJbJE","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6YiKQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeatWhen", ()=>repeatWhen
);
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function repeatWhen(notifier) {
    return _lift.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
            return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
            if (!completions$) {
                completions$ = new _subject.Subject();
                notifier(completions$).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
                    if (innerSub) subscribeForRepeatWhen();
                    else syncResub = true;
                }, function() {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function() {
            isMainComplete = false;
            innerSub = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, function() {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}

},{"../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ggola":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retry", ()=>retry
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _identity = require("../util/identity");
var _timer = require("../observable/timer");
var _innerFrom = require("../observable/innerFrom");
function retry(configOrCount) {
    if (configOrCount === void 0) configOrCount = Infinity;
    var config;
    if (configOrCount && typeof configOrCount === 'object') config = configOrCount;
    else config = {
        count: configOrCount
    };
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0 ? _identity.identity : _lift.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                if (resetOnSuccess) soFar = 0;
                subscriber.next(value);
            }, undefined, function(err) {
                if ((soFar++) < count) {
                    var resub_1 = function() {
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            subscribeForRetry();
                        } else syncUnsub = true;
                    };
                    if (delay != null) {
                        var notifier = typeof delay === 'number' ? _timer.timer(delay) : _innerFrom.innerFrom(delay(err, soFar));
                        var notifierSubscriber_1 = new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
                            notifierSubscriber_1.unsubscribe();
                            resub_1();
                        }, function() {
                            subscriber.complete();
                        });
                        notifier.subscribe(notifierSubscriber_1);
                    } else resub_1();
                } else subscriber.error(err);
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/identity":"j7VF6","../observable/timer":"6RyKL","../observable/innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h9AXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retryWhen", ()=>retryWhen
);
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function retryWhen(notifier) {
    return _lift.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
            innerSub = source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
                if (!errors$) {
                    errors$ = new _subject.Subject();
                    notifier(errors$).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
                        return innerSub ? subscribeForRetryWhen() : syncResub = true;
                    }));
                }
                if (errors$) errors$.next(err);
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}

},{"../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e1giE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sample", ()=>sample
);
var _lift = require("../util/lift");
var _noop = require("../util/noop");
var _operatorSubscriber = require("./OperatorSubscriber");
function sample(notifier) {
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
        }));
        var emit = function() {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        notifier.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, emit, _noop.noop));
    });
}

},{"../util/lift":"acAIF","../util/noop":"g21kV","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"erl66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sampleTime", ()=>sampleTime
);
var _async = require("../scheduler/async");
var _sample = require("./sample");
var _interval = require("../observable/interval");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) scheduler = _async.asyncScheduler;
    return _sample.sample(_interval.interval(period, scheduler));
}

},{"../scheduler/async":"gpgEY","./sample":"e1giE","../observable/interval":"Mwrym","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ryIZj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scan", ()=>scan
);
var _lift = require("../util/lift");
var _scanInternals = require("./scanInternals");
function scan(accumulator, seed) {
    return _lift.operate(_scanInternals.scanInternals(accumulator, seed, arguments.length >= 2, true));
}

},{"../util/lift":"acAIF","./scanInternals":"hvaR4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Bk2J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sequenceEqual", ()=>sequenceEqual
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) comparator = function(a, b) {
        return a === b;
    };
    return _lift.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
            var sequenceEqualSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, function(a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) complete ? emit(false) : selfState.buffer.push(a);
                else !comparator(a, buffer.shift()) && emit(false);
            }, function() {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 || sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        compareTo.subscribe(createSubscriber(bState, aState));
    });
}
function createState() {
    return {
        buffer: [],
        complete: false
    };
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l8b99":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "share", ()=>share
);
var _tslib = require("tslib");
var _from = require("../observable/from");
var _take = require("../operators/take");
var _subject = require("../Subject");
var _subscriber = require("../Subscriber");
var _lift = require("../util/lift");
function share(options) {
    if (options === void 0) options = {
    };
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new _subject.Subject();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection = null;
        var resetConnection = null;
        var subject = null;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
            resetConnection = null;
        };
        var reset = function() {
            cancelReset();
            connection = subject = null;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 || conn.unsubscribe();
        };
        return _lift.operate(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) cancelReset();
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            });
            dest.subscribe(subscriber);
            if (!connection) {
                connection = new _subscriber.SafeSubscriber({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                _from.from(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    if (on === true) {
        reset();
        return null;
    }
    if (on === false) return null;
    return on.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args))).pipe(_take.take(1)).subscribe(function() {
        return reset();
    });
}

},{"tslib":"j55WF","../observable/from":"9pgfw","../operators/take":"6hYpU","../Subject":"4O2Ci","../Subscriber":"jYnMU","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k8mmw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shareReplay", ()=>shareReplay
);
var _replaySubject = require("../ReplaySubject");
var _share = require("./share");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
        windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
        refCount = !!configOrBufferSize.refCount;
        scheduler = configOrBufferSize.scheduler;
    } else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    return _share.share({
        connector: function() {
            return new _replaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}

},{"../ReplaySubject":"kApGB","./share":"l8b99","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dw93N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "single", ()=>single
);
var _emptyError = require("../util/EmptyError");
var _sequenceError = require("../util/SequenceError");
var _notFoundError = require("../util/NotFoundError");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function single(predicate) {
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new _sequenceError.SequenceError('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function() {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            } else subscriber.error(seenValue ? new _notFoundError.NotFoundError('No matching values') : new _emptyError.EmptyError());
        }));
    });
}

},{"../util/EmptyError":"9qylJ","../util/SequenceError":"7MimW","../util/NotFoundError":"lhHMy","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i5n9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skip", ()=>skip
);
var _filter = require("./filter");
function skip(count) {
    return _filter.filter(function(_, index) {
        return count <= index;
    });
}

},{"./filter":"2xhFi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"37Yn7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipLast", ()=>skipLast
);
var _identity = require("../util/identity");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function skipLast(skipCount) {
    return skipCount <= 0 ? _identity.identity : _lift.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var valueIndex = seen++;
            if (valueIndex < skipCount) ring[valueIndex] = value;
            else {
                var index = valueIndex % skipCount;
                var oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return function() {
            ring = null;
        };
    });
}

},{"../util/identity":"j7VF6","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gnxSm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipUntil", ()=>skipUntil
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
var _noop = require("../util/noop");
function skipUntil(notifier) {
    return _lift.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            skipSubscriber === null || skipSubscriber === void 0 || skipSubscriber.unsubscribe();
            taking = true;
        }, _noop.noop);
        _innerFrom.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return taking && subscriber.next(value);
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k9Hq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipWhile", ()=>skipWhile
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function skipWhile(predicate) {
    return _lift.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1rnij":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWith", ()=>startWith
);
var _concat = require("../observable/concat");
var _args = require("../util/args");
var _lift = require("../util/lift");
function startWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    var scheduler = _args.popScheduler(values);
    return _lift.operate(function(source, subscriber) {
        (scheduler ? _concat.concat(values, source, scheduler) : _concat.concat(values, source)).subscribe(subscriber);
    });
}

},{"../observable/concat":"9rIbp","../util/args":"3et4z","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"de18Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchAll", ()=>switchAll
);
var _switchMap = require("./switchMap");
var _identity = require("../util/identity");
function switchAll() {
    return _switchMap.switchMap(_identity.identity);
}

},{"./switchMap":"epOzo","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"epOzo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMap", ()=>switchMap
);
var _innerFrom = require("../observable/innerFrom");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function switchMap(project, resultSelector) {
    return _lift.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            _innerFrom.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}

},{"../observable/innerFrom":"8vUv0","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"afuB6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMapTo", ()=>switchMapTo
);
var _switchMap = require("./switchMap");
var _isFunction = require("../util/isFunction");
function switchMapTo(innerObservable, resultSelector) {
    return _isFunction.isFunction(resultSelector) ? _switchMap.switchMap(function() {
        return innerObservable;
    }, resultSelector) : _switchMap.switchMap(function() {
        return innerObservable;
    });
}

},{"./switchMap":"epOzo","../util/isFunction":"ftscY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aEJS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchScan", ()=>switchScan
);
var _switchMap = require("./switchMap");
var _lift = require("../util/lift");
function switchScan(accumulator, seed) {
    return _lift.operate(function(source, subscriber) {
        var state = seed;
        _switchMap.switchMap(function(value, index) {
            return accumulator(state, value, index);
        }, function(_, innerValue) {
            return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
            state = null;
        };
    });
}

},{"./switchMap":"epOzo","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a6yre":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeUntil", ()=>takeUntil
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
var _noop = require("../util/noop");
function takeUntil(notifier) {
    return _lift.operate(function(source, subscriber) {
        _innerFrom.innerFrom(notifier).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            return subscriber.complete();
        }, _noop.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"idO1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeWhile", ()=>takeWhile
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return _lift.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1plP0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tap", ()=>tap
);
var _isFunction = require("../util/isFunction");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _identity = require("../util/identity");
function tap(observerOrNext, error, complete) {
    var tapObserver = _isFunction.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? _lift.operate(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            isUnsub = false;
            (_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            isUnsub = false;
            (_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
            subscriber.error(err);
        }, function() {
            var _a, _b;
            if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
            (_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
        }));
    }) : _identity.identity;
}

},{"../util/isFunction":"ftscY","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/identity":"j7VF6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9lrjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultThrottleConfig", ()=>defaultThrottleConfig
);
parcelHelpers.export(exports, "throttle", ()=>throttle
);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, _a) {
    var _b = _a === void 0 ? defaultThrottleConfig : _a, leading = _b.leading, trailing = _b.trailing;
    return _lift.operate(function(source, subscriber) {
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
            throttled === null || throttled === void 0 || throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function() {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
            return throttled = _innerFrom.innerFrom(durationSelector(value)).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}

},{"../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1kQ5K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throttleTime", ()=>throttleTime
);
var _async = require("../scheduler/async");
var _throttle = require("./throttle");
var _timer = require("../observable/timer");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) scheduler = _async.asyncScheduler;
    if (config === void 0) config = _throttle.defaultThrottleConfig;
    var duration$ = _timer.timer(duration, scheduler);
    return _throttle.throttle(function() {
        return duration$;
    }, config);
}

},{"../scheduler/async":"gpgEY","./throttle":"9lrjc","../observable/timer":"6RyKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"huUJs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>timeInterval
);
parcelHelpers.export(exports, "TimeInterval", ()=>TimeInterval
);
var _async = require("../scheduler/async");
var _scan = require("./scan");
var _defer = require("../observable/defer");
var _map = require("./map");
function timeInterval(scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return _defer.defer(function() {
            return source.pipe(_scan.scan(function(_a, value) {
                var current = _a.current;
                return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                };
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined
            }), _map.map(function(_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = function() {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}();

},{"../scheduler/async":"gpgEY","./scan":"ryIZj","../observable/defer":"chtn2","./map":"76nl9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9k3lA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutWith", ()=>timeoutWith
);
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _timeout = require("./timeout");
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : _async.async;
    if (_isDate.isValidDate(due)) first = due;
    else if (typeof due === 'number') each = due;
    if (withObservable) _with = function() {
        return withObservable;
    };
    else throw new TypeError('No observable provided to switch to');
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return _timeout.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with
    });
}

},{"../scheduler/async":"gpgEY","../util/isDate":"fcNH4","./timeout":"29JXc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jSrVB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timestamp", ()=>timestamp
);
var _dateTimestampProvider = require("../scheduler/dateTimestampProvider");
var _map = require("./map");
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) timestampProvider = _dateTimestampProvider.dateTimestampProvider;
    return _map.map(function(value) {
        return {
            value: value,
            timestamp: timestampProvider.now()
        };
    });
}

},{"../scheduler/dateTimestampProvider":"euFMa","./map":"76nl9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gBs0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "window", ()=>window
);
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
function window(windowBoundaries) {
    return _lift.operate(function(source, subscriber) {
        var windowSubject = new _subject.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        windowBoundaries.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function() {
            windowSubject.complete();
            subscriber.next(windowSubject = new _subject.Subject());
        }, _noop.noop, errorHandler));
        return function() {
            windowSubject === null || windowSubject === void 0 || windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}

},{"../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"267Hz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowCount", ()=>windowCount
);
var _tslib = require("tslib");
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) startWindowEvery = 0;
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return _lift.operate(function(source, subscriber) {
        var windows = [
            new _subject.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var windows_1 = _tslib.__values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()){
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) windows.shift().complete();
            if (++count % startEvery === 0) {
                var window_2 = new _subject.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function() {
            while(windows.length > 0)windows.shift().complete();
            subscriber.complete();
        }, function(err) {
            while(windows.length > 0)windows.shift().error(err);
            subscriber.error(err);
        }, function() {
            starts = null;
            windows = null;
        }));
    });
}

},{"tslib":"j55WF","../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Ctcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowTime", ()=>windowTime
);
var _subject = require("../Subject");
var _async = require("../scheduler/async");
var _subscription = require("../Subscription");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _arrRemove = require("../util/arrRemove");
var _args = require("../util/args");
var _executeSchedule = require("../util/executeSchedule");
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = _args.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : _async.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return _lift.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            _arrRemove.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function() {
            if (windowRecords) {
                var subs = new _subscription.Subscription();
                subscriber.add(subs);
                var window_1 = new _subject.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                _executeSchedule.executeSchedule(subs, scheduler, function() {
                    return closeWindow(record_1);
                }, windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) _executeSchedule.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        else restartOnClose = true;
        startWindow();
        var loop = function(cb) {
            return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
            loop(function(_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            loop(function(record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function() {
            return terminate(function(consumer) {
                return consumer.complete();
            });
        }, function(err) {
            return terminate(function(consumer) {
                return consumer.error(err);
            });
        }));
        return function() {
            windowRecords = null;
        };
    });
}

},{"../Subject":"4O2Ci","../scheduler/async":"gpgEY","../Subscription":"5zUJD","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../util/arrRemove":"iMX4f","../util/args":"3et4z","../util/executeSchedule":"e5aja","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bhjIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowToggle", ()=>windowToggle
);
var _tslib = require("tslib");
var _subject = require("../Subject");
var _subscription = require("../Subscription");
var _lift = require("../util/lift");
var _innerFrom = require("../observable/innerFrom");
var _operatorSubscriber = require("./OperatorSubscriber");
var _noop = require("../util/noop");
var _arrRemove = require("../util/arrRemove");
function windowToggle(openings, closingSelector) {
    return _lift.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
            while(0 < windows.length)windows.shift().error(err);
            subscriber.error(err);
        };
        _innerFrom.innerFrom(openings).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(openValue) {
            var window = new _subject.Subject();
            windows.push(window);
            var closingSubscription = new _subscription.Subscription();
            var closeWindow = function() {
                _arrRemove.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = _innerFrom.innerFrom(closingSelector(openValue));
            } catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, closeWindow, _noop.noop, handleError)));
        }, _noop.noop));
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for(var windowsCopy_1 = _tslib.__values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()){
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(0 < windows.length)windows.shift().complete();
            subscriber.complete();
        }, handleError, function() {
            while(0 < windows.length)windows.shift().unsubscribe();
        }));
    });
}

},{"tslib":"j55WF","../Subject":"4O2Ci","../Subscription":"5zUJD","../util/lift":"acAIF","../observable/innerFrom":"8vUv0","./OperatorSubscriber":"2AV5Y","../util/noop":"g21kV","../util/arrRemove":"iMX4f","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e3yxp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowWhen", ()=>windowWhen
);
var _subject = require("../Subject");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
function windowWhen(closingSelector) {
    return _lift.operate(function(source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function(err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window === null || window === void 0 || window.complete();
            window = new _subject.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = _innerFrom.innerFrom(closingSelector());
            } catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = new _operatorSubscriber.OperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            return window.next(value);
        }, function() {
            window.complete();
            subscriber.complete();
        }, handleError, function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}

},{"../Subject":"4O2Ci","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dpgEi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withLatestFrom", ()=>withLatestFrom
);
var _tslib = require("tslib");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _innerFrom = require("../observable/innerFrom");
var _identity = require("../util/identity");
var _noop = require("../util/noop");
var _args = require("../util/args");
function withLatestFrom() {
    var inputs = [];
    for(var _i = 0; _i < arguments.length; _i++)inputs[_i] = arguments[_i];
    var project = _args.popResultSelector(inputs);
    return _lift.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
            return false;
        });
        var ready = false;
        var _loop_1 = function(i) {
            _innerFrom.innerFrom(inputs[i]).subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(_identity.identity)) && (hasValue = null);
                }
            }, _noop.noop));
        };
        for(var i = 0; i < len; i++)_loop_1(i);
        source.subscribe(new _operatorSubscriber.OperatorSubscriber(subscriber, function(value) {
            if (ready) {
                var values = _tslib.__spreadArray([
                    value
                ], _tslib.__read(otherValues));
                subscriber.next(project ? project.apply(void 0, _tslib.__spreadArray([], _tslib.__read(values))) : values);
            }
        }));
    });
}

},{"tslib":"j55WF","../util/lift":"acAIF","./OperatorSubscriber":"2AV5Y","../observable/innerFrom":"8vUv0","../util/identity":"j7VF6","../util/noop":"g21kV","../util/args":"3et4z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kI25R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zipAll", ()=>zipAll
);
var _zip = require("../observable/zip");
var _joinAllInternals = require("./joinAllInternals");
function zipAll(project) {
    return _joinAllInternals.joinAllInternals(_zip.zip, project);
}

},{"../observable/zip":"97KMy","./joinAllInternals":"8mEZ4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jUcdo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zipWith", ()=>zipWith
);
var _tslib = require("tslib");
var _zip = require("./zip");
function zipWith() {
    var otherInputs = [];
    for(var _i = 0; _i < arguments.length; _i++)otherInputs[_i] = arguments[_i];
    return _zip.zip.apply(void 0, _tslib.__spreadArray([], _tslib.__read(otherInputs)));
}

},{"tslib":"j55WF","./zip":"c2Euv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c2Euv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
var _tslib = require("tslib");
var _zip = require("../observable/zip");
var _lift = require("../util/lift");
function zip() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return _lift.operate(function(source, subscriber) {
        _zip.zip.apply(void 0, _tslib.__spreadArray([
            source
        ], _tslib.__read(sources))).subscribe(subscriber);
    });
}

},{"tslib":"j55WF","../observable/zip":"97KMy","../util/lift":"acAIF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hcCBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audit", ()=>_audit.audit
);
parcelHelpers.export(exports, "auditTime", ()=>_auditTime.auditTime
);
parcelHelpers.export(exports, "buffer", ()=>_buffer.buffer
);
parcelHelpers.export(exports, "bufferCount", ()=>_bufferCount.bufferCount
);
parcelHelpers.export(exports, "bufferTime", ()=>_bufferTime.bufferTime
);
parcelHelpers.export(exports, "bufferToggle", ()=>_bufferToggle.bufferToggle
);
parcelHelpers.export(exports, "bufferWhen", ()=>_bufferWhen.bufferWhen
);
parcelHelpers.export(exports, "catchError", ()=>_catchError.catchError
);
parcelHelpers.export(exports, "combineAll", ()=>_combineAll.combineAll
);
parcelHelpers.export(exports, "combineLatestAll", ()=>_combineLatestAll.combineLatestAll
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "combineLatestWith", ()=>_combineLatestWith.combineLatestWith
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "concatAll", ()=>_concatAll.concatAll
);
parcelHelpers.export(exports, "concatMap", ()=>_concatMap.concatMap
);
parcelHelpers.export(exports, "concatMapTo", ()=>_concatMapTo.concatMapTo
);
parcelHelpers.export(exports, "concatWith", ()=>_concatWith.concatWith
);
parcelHelpers.export(exports, "connect", ()=>_connect.connect
);
parcelHelpers.export(exports, "count", ()=>_count.count
);
parcelHelpers.export(exports, "debounce", ()=>_debounce.debounce
);
parcelHelpers.export(exports, "debounceTime", ()=>_debounceTime.debounceTime
);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>_defaultIfEmpty.defaultIfEmpty
);
parcelHelpers.export(exports, "delay", ()=>_delay.delay
);
parcelHelpers.export(exports, "delayWhen", ()=>_delayWhen.delayWhen
);
parcelHelpers.export(exports, "dematerialize", ()=>_dematerialize.dematerialize
);
parcelHelpers.export(exports, "distinct", ()=>_distinct.distinct
);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>_distinctUntilChanged.distinctUntilChanged
);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>_distinctUntilKeyChanged.distinctUntilKeyChanged
);
parcelHelpers.export(exports, "elementAt", ()=>_elementAt.elementAt
);
parcelHelpers.export(exports, "endWith", ()=>_endWith.endWith
);
parcelHelpers.export(exports, "every", ()=>_every.every
);
parcelHelpers.export(exports, "exhaust", ()=>_exhaust.exhaust
);
parcelHelpers.export(exports, "exhaustAll", ()=>_exhaustAll.exhaustAll
);
parcelHelpers.export(exports, "exhaustMap", ()=>_exhaustMap.exhaustMap
);
parcelHelpers.export(exports, "expand", ()=>_expand.expand
);
parcelHelpers.export(exports, "filter", ()=>_filter.filter
);
parcelHelpers.export(exports, "finalize", ()=>_finalize.finalize
);
parcelHelpers.export(exports, "find", ()=>_find.find
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndex.findIndex
);
parcelHelpers.export(exports, "first", ()=>_first.first
);
parcelHelpers.export(exports, "groupBy", ()=>_groupBy.groupBy
);
parcelHelpers.export(exports, "ignoreElements", ()=>_ignoreElements.ignoreElements
);
parcelHelpers.export(exports, "isEmpty", ()=>_isEmpty.isEmpty
);
parcelHelpers.export(exports, "last", ()=>_last.last
);
parcelHelpers.export(exports, "map", ()=>_map.map
);
parcelHelpers.export(exports, "mapTo", ()=>_mapTo.mapTo
);
parcelHelpers.export(exports, "materialize", ()=>_materialize.materialize
);
parcelHelpers.export(exports, "max", ()=>_max.max
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "mergeAll", ()=>_mergeAll.mergeAll
);
parcelHelpers.export(exports, "flatMap", ()=>_flatMap.flatMap
);
parcelHelpers.export(exports, "mergeMap", ()=>_mergeMap.mergeMap
);
parcelHelpers.export(exports, "mergeMapTo", ()=>_mergeMapTo.mergeMapTo
);
parcelHelpers.export(exports, "mergeScan", ()=>_mergeScan.mergeScan
);
parcelHelpers.export(exports, "mergeWith", ()=>_mergeWith.mergeWith
);
parcelHelpers.export(exports, "min", ()=>_min.min
);
parcelHelpers.export(exports, "multicast", ()=>_multicast.multicast
);
parcelHelpers.export(exports, "observeOn", ()=>_observeOn.observeOn
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairwise", ()=>_pairwise.pairwise
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "pluck", ()=>_pluck.pluck
);
parcelHelpers.export(exports, "publish", ()=>_publish.publish
);
parcelHelpers.export(exports, "publishBehavior", ()=>_publishBehavior.publishBehavior
);
parcelHelpers.export(exports, "publishLast", ()=>_publishLast.publishLast
);
parcelHelpers.export(exports, "publishReplay", ()=>_publishReplay.publishReplay
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "raceWith", ()=>_raceWith.raceWith
);
parcelHelpers.export(exports, "reduce", ()=>_reduce.reduce
);
parcelHelpers.export(exports, "repeat", ()=>_repeat.repeat
);
parcelHelpers.export(exports, "repeatWhen", ()=>_repeatWhen.repeatWhen
);
parcelHelpers.export(exports, "retry", ()=>_retry.retry
);
parcelHelpers.export(exports, "retryWhen", ()=>_retryWhen.retryWhen
);
parcelHelpers.export(exports, "refCount", ()=>_refCount.refCount
);
parcelHelpers.export(exports, "sample", ()=>_sample.sample
);
parcelHelpers.export(exports, "sampleTime", ()=>_sampleTime.sampleTime
);
parcelHelpers.export(exports, "scan", ()=>_scan.scan
);
parcelHelpers.export(exports, "sequenceEqual", ()=>_sequenceEqual.sequenceEqual
);
parcelHelpers.export(exports, "share", ()=>_share.share
);
parcelHelpers.export(exports, "shareReplay", ()=>_shareReplay.shareReplay
);
parcelHelpers.export(exports, "single", ()=>_single.single
);
parcelHelpers.export(exports, "skip", ()=>_skip.skip
);
parcelHelpers.export(exports, "skipLast", ()=>_skipLast.skipLast
);
parcelHelpers.export(exports, "skipUntil", ()=>_skipUntil.skipUntil
);
parcelHelpers.export(exports, "skipWhile", ()=>_skipWhile.skipWhile
);
parcelHelpers.export(exports, "startWith", ()=>_startWith.startWith
);
parcelHelpers.export(exports, "subscribeOn", ()=>_subscribeOn.subscribeOn
);
parcelHelpers.export(exports, "switchAll", ()=>_switchAll.switchAll
);
parcelHelpers.export(exports, "switchMap", ()=>_switchMap.switchMap
);
parcelHelpers.export(exports, "switchMapTo", ()=>_switchMapTo.switchMapTo
);
parcelHelpers.export(exports, "switchScan", ()=>_switchScan.switchScan
);
parcelHelpers.export(exports, "take", ()=>_take.take
);
parcelHelpers.export(exports, "takeLast", ()=>_takeLast.takeLast
);
parcelHelpers.export(exports, "takeUntil", ()=>_takeUntil.takeUntil
);
parcelHelpers.export(exports, "takeWhile", ()=>_takeWhile.takeWhile
);
parcelHelpers.export(exports, "tap", ()=>_tap.tap
);
parcelHelpers.export(exports, "throttle", ()=>_throttle.throttle
);
parcelHelpers.export(exports, "throttleTime", ()=>_throttleTime.throttleTime
);
parcelHelpers.export(exports, "throwIfEmpty", ()=>_throwIfEmpty.throwIfEmpty
);
parcelHelpers.export(exports, "timeInterval", ()=>_timeInterval.timeInterval
);
parcelHelpers.export(exports, "timeout", ()=>_timeout.timeout
);
parcelHelpers.export(exports, "timeoutWith", ()=>_timeoutWith.timeoutWith
);
parcelHelpers.export(exports, "timestamp", ()=>_timestamp.timestamp
);
parcelHelpers.export(exports, "toArray", ()=>_toArray.toArray
);
parcelHelpers.export(exports, "window", ()=>_window.window
);
parcelHelpers.export(exports, "windowCount", ()=>_windowCount.windowCount
);
parcelHelpers.export(exports, "windowTime", ()=>_windowTime.windowTime
);
parcelHelpers.export(exports, "windowToggle", ()=>_windowToggle.windowToggle
);
parcelHelpers.export(exports, "windowWhen", ()=>_windowWhen.windowWhen
);
parcelHelpers.export(exports, "withLatestFrom", ()=>_withLatestFrom.withLatestFrom
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "zipAll", ()=>_zipAll.zipAll
);
parcelHelpers.export(exports, "zipWith", ()=>_zipWith.zipWith
);
var _audit = require("../internal/operators/audit");
var _auditTime = require("../internal/operators/auditTime");
var _buffer = require("../internal/operators/buffer");
var _bufferCount = require("../internal/operators/bufferCount");
var _bufferTime = require("../internal/operators/bufferTime");
var _bufferToggle = require("../internal/operators/bufferToggle");
var _bufferWhen = require("../internal/operators/bufferWhen");
var _catchError = require("../internal/operators/catchError");
var _combineAll = require("../internal/operators/combineAll");
var _combineLatestAll = require("../internal/operators/combineLatestAll");
var _combineLatest = require("../internal/operators/combineLatest");
var _combineLatestWith = require("../internal/operators/combineLatestWith");
var _concat = require("../internal/operators/concat");
var _concatAll = require("../internal/operators/concatAll");
var _concatMap = require("../internal/operators/concatMap");
var _concatMapTo = require("../internal/operators/concatMapTo");
var _concatWith = require("../internal/operators/concatWith");
var _connect = require("../internal/operators/connect");
var _count = require("../internal/operators/count");
var _debounce = require("../internal/operators/debounce");
var _debounceTime = require("../internal/operators/debounceTime");
var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");
var _delay = require("../internal/operators/delay");
var _delayWhen = require("../internal/operators/delayWhen");
var _dematerialize = require("../internal/operators/dematerialize");
var _distinct = require("../internal/operators/distinct");
var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");
var _elementAt = require("../internal/operators/elementAt");
var _endWith = require("../internal/operators/endWith");
var _every = require("../internal/operators/every");
var _exhaust = require("../internal/operators/exhaust");
var _exhaustAll = require("../internal/operators/exhaustAll");
var _exhaustMap = require("../internal/operators/exhaustMap");
var _expand = require("../internal/operators/expand");
var _filter = require("../internal/operators/filter");
var _finalize = require("../internal/operators/finalize");
var _find = require("../internal/operators/find");
var _findIndex = require("../internal/operators/findIndex");
var _first = require("../internal/operators/first");
var _groupBy = require("../internal/operators/groupBy");
var _ignoreElements = require("../internal/operators/ignoreElements");
var _isEmpty = require("../internal/operators/isEmpty");
var _last = require("../internal/operators/last");
var _map = require("../internal/operators/map");
var _mapTo = require("../internal/operators/mapTo");
var _materialize = require("../internal/operators/materialize");
var _max = require("../internal/operators/max");
var _merge = require("../internal/operators/merge");
var _mergeAll = require("../internal/operators/mergeAll");
var _flatMap = require("../internal/operators/flatMap");
var _mergeMap = require("../internal/operators/mergeMap");
var _mergeMapTo = require("../internal/operators/mergeMapTo");
var _mergeScan = require("../internal/operators/mergeScan");
var _mergeWith = require("../internal/operators/mergeWith");
var _min = require("../internal/operators/min");
var _multicast = require("../internal/operators/multicast");
var _observeOn = require("../internal/operators/observeOn");
var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");
var _pairwise = require("../internal/operators/pairwise");
var _partition = require("../internal/operators/partition");
var _pluck = require("../internal/operators/pluck");
var _publish = require("../internal/operators/publish");
var _publishBehavior = require("../internal/operators/publishBehavior");
var _publishLast = require("../internal/operators/publishLast");
var _publishReplay = require("../internal/operators/publishReplay");
var _race = require("../internal/operators/race");
var _raceWith = require("../internal/operators/raceWith");
var _reduce = require("../internal/operators/reduce");
var _repeat = require("../internal/operators/repeat");
var _repeatWhen = require("../internal/operators/repeatWhen");
var _retry = require("../internal/operators/retry");
var _retryWhen = require("../internal/operators/retryWhen");
var _refCount = require("../internal/operators/refCount");
var _sample = require("../internal/operators/sample");
var _sampleTime = require("../internal/operators/sampleTime");
var _scan = require("../internal/operators/scan");
var _sequenceEqual = require("../internal/operators/sequenceEqual");
var _share = require("../internal/operators/share");
var _shareReplay = require("../internal/operators/shareReplay");
var _single = require("../internal/operators/single");
var _skip = require("../internal/operators/skip");
var _skipLast = require("../internal/operators/skipLast");
var _skipUntil = require("../internal/operators/skipUntil");
var _skipWhile = require("../internal/operators/skipWhile");
var _startWith = require("../internal/operators/startWith");
var _subscribeOn = require("../internal/operators/subscribeOn");
var _switchAll = require("../internal/operators/switchAll");
var _switchMap = require("../internal/operators/switchMap");
var _switchMapTo = require("../internal/operators/switchMapTo");
var _switchScan = require("../internal/operators/switchScan");
var _take = require("../internal/operators/take");
var _takeLast = require("../internal/operators/takeLast");
var _takeUntil = require("../internal/operators/takeUntil");
var _takeWhile = require("../internal/operators/takeWhile");
var _tap = require("../internal/operators/tap");
var _throttle = require("../internal/operators/throttle");
var _throttleTime = require("../internal/operators/throttleTime");
var _throwIfEmpty = require("../internal/operators/throwIfEmpty");
var _timeInterval = require("../internal/operators/timeInterval");
var _timeout = require("../internal/operators/timeout");
var _timeoutWith = require("../internal/operators/timeoutWith");
var _timestamp = require("../internal/operators/timestamp");
var _toArray = require("../internal/operators/toArray");
var _window = require("../internal/operators/window");
var _windowCount = require("../internal/operators/windowCount");
var _windowTime = require("../internal/operators/windowTime");
var _windowToggle = require("../internal/operators/windowToggle");
var _windowWhen = require("../internal/operators/windowWhen");
var _withLatestFrom = require("../internal/operators/withLatestFrom");
var _zip = require("../internal/operators/zip");
var _zipAll = require("../internal/operators/zipAll");
var _zipWith = require("../internal/operators/zipWith");

},{"../internal/operators/audit":"ilXNl","../internal/operators/auditTime":"ckIxW","../internal/operators/buffer":"3k6NZ","../internal/operators/bufferCount":"4gWAC","../internal/operators/bufferTime":"bjytj","../internal/operators/bufferToggle":"2yytQ","../internal/operators/bufferWhen":"kCOrD","../internal/operators/catchError":"JhbIr","../internal/operators/combineAll":"fXGvp","../internal/operators/combineLatestAll":"84NPM","../internal/operators/combineLatest":"11Atz","../internal/operators/combineLatestWith":"b0rac","../internal/operators/concat":"eEXRc","../internal/operators/concatAll":"8dE4y","../internal/operators/concatMap":"gx19e","../internal/operators/concatMapTo":"bWtf4","../internal/operators/concatWith":"1TxEI","../internal/operators/connect":"996sN","../internal/operators/count":"becQQ","../internal/operators/debounce":"gj3HP","../internal/operators/debounceTime":"9xmt9","../internal/operators/defaultIfEmpty":"9LLdN","../internal/operators/delay":"aWls4","../internal/operators/delayWhen":"1lLop","../internal/operators/dematerialize":"94tDV","../internal/operators/distinct":"k7Lxc","../internal/operators/distinctUntilChanged":"gKqL5","../internal/operators/distinctUntilKeyChanged":"eK953","../internal/operators/elementAt":"iHu5L","../internal/operators/endWith":"2g7tf","../internal/operators/every":"2utBP","../internal/operators/exhaust":"lFhHE","../internal/operators/exhaustAll":"9Xrdb","../internal/operators/exhaustMap":"9LQL9","../internal/operators/expand":"bqZ3j","../internal/operators/filter":"2xhFi","../internal/operators/finalize":"74tcl","../internal/operators/find":"1fxVZ","../internal/operators/findIndex":"foToP","../internal/operators/first":"dPIxm","../internal/operators/groupBy":"5Wem9","../internal/operators/ignoreElements":"cZ4a2","../internal/operators/isEmpty":"kgslb","../internal/operators/last":"lr2Ou","../internal/operators/map":"76nl9","../internal/operators/mapTo":"iWPk6","../internal/operators/materialize":"gyCJX","../internal/operators/max":"hPuxw","../internal/operators/merge":"br3iC","../internal/operators/mergeAll":"jWozx","../internal/operators/flatMap":"9AkEm","../internal/operators/mergeMap":"agCFd","../internal/operators/mergeMapTo":"8s9lk","../internal/operators/mergeScan":"5uiIX","../internal/operators/mergeWith":"fmZl4","../internal/operators/min":"9uFVl","../internal/operators/multicast":"6q52K","../internal/operators/observeOn":"luPVb","../internal/operators/onErrorResumeNext":"2ToZ1","../internal/operators/pairwise":"gorxB","../internal/operators/partition":"aVoGK","../internal/operators/pluck":"5zGuP","../internal/operators/publish":"6LSaD","../internal/operators/publishBehavior":"2YRSe","../internal/operators/publishLast":"la7U0","../internal/operators/publishReplay":"76ACk","../internal/operators/race":"jmiOV","../internal/operators/raceWith":"9M9x7","../internal/operators/reduce":"gvErY","../internal/operators/repeat":"3L4JM","../internal/operators/repeatWhen":"6YiKQ","../internal/operators/retry":"ggola","../internal/operators/retryWhen":"h9AXv","../internal/operators/refCount":"3fXOk","../internal/operators/sample":"e1giE","../internal/operators/sampleTime":"erl66","../internal/operators/scan":"ryIZj","../internal/operators/sequenceEqual":"9Bk2J","../internal/operators/share":"l8b99","../internal/operators/shareReplay":"k8mmw","../internal/operators/single":"dw93N","../internal/operators/skip":"i5n9g","../internal/operators/skipLast":"37Yn7","../internal/operators/skipUntil":"gnxSm","../internal/operators/skipWhile":"k9Hq4","../internal/operators/startWith":"1rnij","../internal/operators/subscribeOn":"adsua","../internal/operators/switchAll":"de18Y","../internal/operators/switchMap":"epOzo","../internal/operators/switchMapTo":"afuB6","../internal/operators/switchScan":"aEJS3","../internal/operators/take":"6hYpU","../internal/operators/takeLast":"1MNo9","../internal/operators/takeUntil":"a6yre","../internal/operators/takeWhile":"idO1R","../internal/operators/tap":"1plP0","../internal/operators/throttle":"9lrjc","../internal/operators/throttleTime":"1kQ5K","../internal/operators/throwIfEmpty":"79Fad","../internal/operators/timeInterval":"huUJs","../internal/operators/timeout":"29JXc","../internal/operators/timeoutWith":"9k3lA","../internal/operators/timestamp":"jSrVB","../internal/operators/toArray":"3nFbW","../internal/operators/window":"gBs0f","../internal/operators/windowCount":"267Hz","../internal/operators/windowTime":"9Ctcc","../internal/operators/windowToggle":"bhjIf","../internal/operators/windowWhen":"e3yxp","../internal/operators/withLatestFrom":"dpgEi","../internal/operators/zip":"c2Euv","../internal/operators/zipAll":"kI25R","../internal/operators/zipWith":"jUcdo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aVoGK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
var _not = require("../util/not");
var _filter = require("./filter");
function partition(predicate, thisArg) {
    return function(source) {
        return [
            _filter.filter(predicate, thisArg)(source),
            _filter.filter(_not.not(predicate, thisArg))(source)
        ];
    };
}

},{"../util/not":"aXPYw","./filter":"2xhFi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jmiOV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
var _tslib = require("tslib");
var _argsOrArgArray = require("../util/argsOrArgArray");
var _raceWith = require("./raceWith");
function race() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return _raceWith.raceWith.apply(void 0, _tslib.__spreadArray([], _tslib.__read(_argsOrArgArray.argsOrArgArray(args))));
}

},{"tslib":"j55WF","../util/argsOrArgArray":"25sle","./raceWith":"9M9x7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["3RuNK","85GYl"], "85GYl", "parcelRequire716c")

//# sourceMappingURL=index.ee4ce587.js.map
