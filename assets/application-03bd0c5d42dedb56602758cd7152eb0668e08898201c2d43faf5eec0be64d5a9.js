/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(t) {
"use strict";
if ("Element" in t) {
var e = "classList", n = "prototype", o = t.Element[n], r = Object, s = String[n].trim || function() {
return this.replace(/^\s+|\s+$/g, "");
}, i = Array[n].indexOf || function(t) {
for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
return -1;
}, a = function(t, e) {
this.name = t, this.code = DOMException[t], this.message = e;
}, c = function(t, e) {
if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
return i.call(t, e);
}, l = function(t) {
for (var e = s.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, r = n.length; o < r; o++) this.push(n[o]);
this._updateClassName = function() {
t.setAttribute("class", this.toString());
};
}, u = l[n] = [], p = function() {
return new l(this);
};
if (a[n] = Error[n], u.item = function(t) {
return this[t] || null;
}, u.contains = function(t) {
return -1 !== c(this, t += "");
}, u.add = function() {
for (var t, e = arguments, n = 0, o = e.length, r = !1; t = e[n] + "", -1 === c(this, t) && (this.push(t), 
r = !0), ++n < o; ) ;
r && this._updateClassName();
}, u.remove = function() {
var t, e, n = arguments, o = 0, r = n.length, s = !1;
do {
for (t = n[o] + "", e = c(this, t); -1 !== e; ) this.splice(e, 1), s = !0, e = c(this, t);
} while (++o < r);
s && this._updateClassName();
}, u.toggle = function(t, e) {
t += "";
var n = this.contains(t), o = n ? !0 !== e && "remove" : !1 !== e && "add";
return o && this[o](t), !0 === e || !1 === e ? e : !n;
}, u.toString = function() {
return this.join(" ");
}, r.defineProperty) {
var h = {
get: p,
enumerable: !0,
configurable: !0
};
try {
r.defineProperty(o, e, h);
} catch (d) {
d.number !== undefined && -2146823252 !== d.number || (h.enumerable = !1, r.defineProperty(o, e, h));
}
} else r[n].__defineGetter__ && o.__defineGetter__(e, p);
}
}(self), function() {
"use strict";
var t = document.createElement("_");
if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
var e = function(t) {
var o = DOMTokenList.prototype[t];
DOMTokenList.prototype[t] = function(t) {
var e, n = arguments.length;
for (e = 0; e < n; e++) t = arguments[e], o.call(this, t);
};
};
e("add"), e("remove");
}
if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
var n = DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle = function(t, e) {
return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
};
}
t = null;
}()), function(t, i) {
"use strict";
var e = function(t) {
if ("object" != typeof t.document) throw new Error("Cookies.js requires a `window` with a `document` object");
var s = function(t, e, n) {
return 1 === arguments.length ? s.get(t) : s.set(t, e, n);
};
return s._document = t.document, s._cacheKeyPrefix = "cookey.", s._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), 
s.defaults = {
path: "/",
secure: !1
}, s.get = function(t) {
s._cachedDocumentCookie !== s._document.cookie && s._renewCache();
var e = s._cache[s._cacheKeyPrefix + t];
return e === i ? i : decodeURIComponent(e);
}, s.set = function(t, e, n) {
return (n = s._getExtendedOptions(n)).expires = s._getExpiresDate(e === i ? -1 : n.expires), 
s._document.cookie = s._generateCookieString(t, e, n), s;
}, s.expire = function(t, e) {
return s.set(t, i, e);
}, s._getExtendedOptions = function(t) {
return {
path: t && t.path || s.defaults.path,
domain: t && t.domain || s.defaults.domain,
expires: t && t.expires || s.defaults.expires,
secure: t && t.secure !== i ? t.secure : s.defaults.secure
};
}, s._isValidDate = function(t) {
return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime());
}, s._getExpiresDate = function(t, e) {
if (e = e || new Date(), "number" == typeof t ? t = t === Infinity ? s._maxExpireDate : new Date(e.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)), 
t && !s._isValidDate(t)) throw new Error("`expires` parameter cannot be converted to a valid Date instance");
return t;
}, s._generateCookieString = function(t, e, n) {
var o = (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (e = (e + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
return o += (n = n || {}).path ? ";path=" + n.path : "", o += n.domain ? ";domain=" + n.domain : "", 
o += n.expires ? ";expires=" + n.expires.toUTCString() : "", o += n.secure ? ";secure" : "";
}, s._getCacheFromString = function(t) {
for (var e = {}, n = t ? t.split("; ") : [], o = 0; o < n.length; o++) {
var r = s._getKeyValuePairFromCookieString(n[o]);
e[s._cacheKeyPrefix + r.key] === i && (e[s._cacheKeyPrefix + r.key] = r.value);
}
return e;
}, s._getKeyValuePairFromCookieString = function(t) {
var e = t.indexOf("=");
e = e < 0 ? t.length : e;
var n, o = t.substr(0, e);
try {
n = decodeURIComponent(o);
} catch (r) {
console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + o + '"', r);
}
return {
key: n,
value: t.substr(e + 1)
};
}, s._renewCache = function() {
s._cache = s._getCacheFromString(s._document.cookie), s._cachedDocumentCookie = s._document.cookie;
}, s._areEnabled = function() {
var t = "cookies.js", e = "1" === s.set(t, 1).get(t);
return s.expire(t), e;
}, s.enabled = s._areEnabled(), s;
}, n = t && "object" == typeof t.document ? e(t) : e;
"function" == typeof define && define.amd ? define(function() {
return n;
}) : "object" == typeof exports ? ("object" == typeof module && "object" == typeof module.exports && (exports = module.exports = n), 
exports.Cookies = n) : t.Cookies = n;
}("undefined" == typeof window ? this : window), function() {
"use strict";
/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */ function c(r, t) {
function e(t, e) {
return function() {
return t.apply(e, arguments);
};
}
var n;
if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, 
this.layer = r, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, 
!c.notNeeded(r)) {
for (var o = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ], s = this, i = 0, a = o.length; i < a; i++) s[o[i]] = e(s[o[i]], s);
l && (r.addEventListener("mouseover", this.onMouse, !0), r.addEventListener("mousedown", this.onMouse, !0), 
r.addEventListener("mouseup", this.onMouse, !0)), r.addEventListener("click", this.onClick, !0), 
r.addEventListener("touchstart", this.onTouchStart, !1), r.addEventListener("touchmove", this.onTouchMove, !1), 
r.addEventListener("touchend", this.onTouchEnd, !1), r.addEventListener("touchcancel", this.onTouchCancel, !1), 
Event.prototype.stopImmediatePropagation || (r.removeEventListener = function(t, e, n) {
var o = Node.prototype.removeEventListener;
"click" === t ? o.call(r, t, e.hijacked || e, n) : o.call(r, t, e, n);
}, r.addEventListener = function(t, e, n) {
var o = Node.prototype.addEventListener;
"click" === t ? o.call(r, t, e.hijacked || (e.hijacked = function(t) {
t.propagationStopped || e(t);
}), n) : o.call(r, t, e, n);
}), "function" == typeof r.onclick && (n = r.onclick, r.addEventListener("click", function(t) {
n(t);
}, !1), r.onclick = null);
}
}
var t = 0 <= navigator.userAgent.indexOf("Windows Phone"), l = 0 < navigator.userAgent.indexOf("Android") && !t, a = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, u = a && /OS 4_\d(_\d)?/.test(navigator.userAgent), p = a && /OS [6-7]_\d/.test(navigator.userAgent), r = 0 < navigator.userAgent.indexOf("BB10");
c.prototype.needsClick = function(t) {
switch (t.nodeName.toLowerCase()) {
case "button":
case "select":
case "textarea":
if (t.disabled) return !0;
break;

case "input":
if (a && "file" === t.type || t.disabled) return !0;
break;

case "label":
case "iframe":
case "video":
return !0;
}
return /\bneedsclick\b/.test(t.className);
}, c.prototype.needsFocus = function(t) {
switch (t.nodeName.toLowerCase()) {
case "textarea":
return !0;

case "select":
return !l;

case "input":
switch (t.type) {
case "button":
case "checkbox":
case "file":
case "image":
case "radio":
case "submit":
return !1;
}
return !t.disabled && !t.readOnly;

default:
return /\bneedsfocus\b/.test(t.className);
}
}, c.prototype.sendClick = function(t, e) {
var n, o;
document.activeElement && document.activeElement !== t && document.activeElement.blur(), 
o = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), 
n.forwardedTouchEvent = !0, t.dispatchEvent(n);
}, c.prototype.determineEventType = function(t) {
return l && "select" === t.tagName.toLowerCase() ? "mousedown" : "click";
}, c.prototype.focus = function(t) {
var e;
a && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, 
t.setSelectionRange(e, e)) : t.focus();
}, c.prototype.updateScrollParent = function(t) {
var e, n;
if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
n = t;
do {
if (n.scrollHeight > n.offsetHeight) {
e = n, t.fastClickScrollParent = n;
break;
}
n = n.parentElement;
} while (n);
}
e && (e.fastClickLastScrollTop = e.scrollTop);
}, c.prototype.getTargetElementFromEventTarget = function(t) {
return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
}, c.prototype.onTouchStart = function(t) {
var e, n, o;
if (1 < t.targetTouches.length) return !0;
if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], 
a) {
if ((o = window.getSelection()).rangeCount && !o.isCollapsed) return !0;
if (!u) {
if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), 
!1;
this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e);
}
}
return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, 
this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), 
!0;
}, c.prototype.touchHasMoved = function(t) {
var e = t.changedTouches[0], n = this.touchBoundary;
return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n;
}, c.prototype.onTouchMove = function(t) {
return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, 
this.targetElement = null), !0;
}, c.prototype.findControl = function(t) {
return t.control !== undefined ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
}, c.prototype.onTouchEnd = function(t) {
var e, n, o, r, s, i = this.targetElement;
if (!this.trackingClick) return !0;
if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, 
this.trackingClick = !1, this.trackingClickStart = 0, p && (s = t.changedTouches[0], 
(i = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || i).fastClickScrollParent = this.targetElement.fastClickScrollParent), 
"label" === (o = i.tagName.toLowerCase())) {
if (e = this.findControl(i)) {
if (this.focus(i), l) return !1;
i = e;
}
} else if (this.needsFocus(i)) return 100 < t.timeStamp - n || a && window.top !== window && "input" === o ? this.targetElement = null : (this.focus(i), 
this.sendClick(i, t), a && "select" === o || (this.targetElement = null, t.preventDefault())), 
!1;
return !(!a || u || !(r = i.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(i) || (t.preventDefault(), 
this.sendClick(i, t)), !1);
}, c.prototype.onTouchCancel = function() {
this.trackingClick = !1, this.targetElement = null;
}, c.prototype.onMouse = function(t) {
return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, 
t.stopPropagation(), t.preventDefault(), !1))));
}, c.prototype.onClick = function(t) {
var e;
return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), 
e);
}, c.prototype.destroy = function() {
var t = this.layer;
l && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), 
t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), 
t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), 
t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1);
}, c.notNeeded = function(t) {
var e, n, o;
if ("undefined" == typeof window.ontouchstart) return !0;
if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1]) {
if (!l) return !0;
if (e = document.querySelector("meta[name=viewport]")) {
if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
if (31 < n && document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
}
if (r && 10 <= (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= o[2] && (e = document.querySelector("meta[name=viewport]"))) {
if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
}
return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1] && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction));
}, c.attach = function(t, e) {
return new c(t, e);
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
return c;
}) : "undefined" != typeof module && module.exports ? (module.exports = c.attach, 
module.exports.FastClick = c) : window.FastClick = c;
}(), window.addEventListener("load", function() {
var t, e, n;
n = "http://www.w3.org/1998/Math/MathML", document.body.insertAdjacentHTML("afterbegin", "<div style='border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;'><math xmlns='" + n + "'><mspace height='23px' width='77px'></mspace></math></div>"), 
t = (e = document.body.firstChild).firstChild.firstChild.getBoundingClientRect(), 
document.body.removeChild(e), (1 < Math.abs(t.height - 23) || 1 < Math.abs(t.width - 77)) && (window.supportsMathML = !1);
});

var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(l) {
function R(t, e, n, o) {
this.type = t, this.content = e, this.alias = n, this.length = 0 | (o || "").length;
}
function L(t, e, n, o) {
t.lastIndex = e;
var r = t.exec(n);
if (r && o && r[1]) {
var s = r[1].length;
r.index += s, r[0] = r[0].slice(s);
}
return r;
}
function O(t, e, n, o, r, s) {
for (var i in n) if (n.hasOwnProperty(i) && n[i]) {
var a = n[i];
a = Array.isArray(a) ? a : [ a ];
for (var c = 0; c < a.length; ++c) {
if (s && s.cause == i + "," + c) return;
var l = a[c], u = l.inside, p = !!l.lookbehind, h = !!l.greedy, d = l.alias;
if (h && !l.pattern.global) {
var f = l.pattern.toString().match(/[imsuy]*$/)[0];
l.pattern = RegExp(l.pattern.source, f + "g");
}
for (var g = l.pattern || l, m = o.next, y = r; m !== e.tail && !(s && y >= s.reach); y += m.value.length, 
m = m.next) {
var b = m.value;
if (e.length > t.length) return;
if (!(b instanceof R)) {
var _, v = 1;
if (h) {
if (!(_ = L(g, y, t, p))) break;
var E = _.index, w = _.index + _[0].length, S = y;
for (S += m.value.length; S <= E; ) S += (m = m.next).value.length;
if (y = S -= m.value.length, m.value instanceof R) continue;
for (var T = m; T !== e.tail && (S < w || "string" == typeof T.value); T = T.next) v++, 
S += T.value.length;
v--, b = t.slice(y, S), _.index -= y;
} else if (!(_ = L(g, 0, b, p))) continue;
E = _.index;
var C = _[0], k = b.slice(0, E), I = b.slice(E + C.length), A = y + b.length;
s && A > s.reach && (s.reach = A);
var N = m.prev;
if (k && (N = P(e, N, k), y += k.length), x(e, N, v), m = P(e, N, new R(i, u ? M.tokenize(C, u) : C, d, C)), 
I && P(e, m, I), 1 < v) {
var D = {
cause: i + "," + c,
reach: A
};
O(t, e, n, m.prev, y, D), s && D.reach > s.reach && (s.reach = D.reach);
}
}
}
}
}
}
function s() {
var t = {
value: null,
prev: null,
next: null
}, e = {
value: null,
prev: t,
next: null
};
t.next = e, this.head = t, this.tail = e, this.length = 0;
}
function P(t, e, n) {
var o = e.next, r = {
value: n,
prev: e,
next: o
};
return e.next = r, o.prev = r, t.length++, r;
}
function x(t, e, n) {
for (var o = e.next, r = 0; r < n && o !== t.tail; r++) o = o.next;
(e.next = o).prev = e, t.length -= r;
}
function i(t) {
for (var e = [], n = t.head.next; n !== t.tail; ) e.push(n.value), n = n.next;
return e;
}
function t() {
M.manual || M.highlightAll();
}
var u = /\blang(?:uage)?-([\w-]+)\b/i, e = 0, n = {}, M = {
manual: l.Prism && l.Prism.manual,
disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
util: {
encode: function a(t) {
return t instanceof R ? new R(t.type, a(t.content), t.alias) : Array.isArray(t) ? t.map(a) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(t) {
return Object.prototype.toString.call(t).slice(8, -1);
},
objId: function(t) {
return t.__id || Object.defineProperty(t, "__id", {
value: ++e
}), t.__id;
},
clone: function c(t, n) {
var o, e;
switch (n = n || {}, M.util.type(t)) {
case "Object":
if (e = M.util.objId(t), n[e]) return n[e];
for (var r in o = {}, n[e] = o, t) t.hasOwnProperty(r) && (o[r] = c(t[r], n));
return o;

case "Array":
return e = M.util.objId(t), n[e] ? n[e] : (o = [], n[e] = o, t.forEach(function(t, e) {
o[e] = c(t, n);
}), o);

default:
return t;
}
},
getLanguage: function(t) {
for (;t && !u.test(t.className); ) t = t.parentElement;
return t ? (t.className.match(u) || [ , "none" ])[1].toLowerCase() : "none";
},
currentScript: function() {
if ("undefined" == typeof document) return null;
if ("currentScript" in document) return document.currentScript;
try {
throw new Error();
} catch (o) {
var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack) || [])[1];
if (t) {
var e = document.getElementsByTagName("script");
for (var n in e) if (e[n].src == t) return e[n];
}
return null;
}
},
isActive: function(t, e, n) {
for (var o = "no-" + e; t; ) {
var r = t.classList;
if (r.contains(e)) return !0;
if (r.contains(o)) return !1;
t = t.parentElement;
}
return !!n;
}
},
languages: {
plain: n,
plaintext: n,
text: n,
txt: n,
extend: function(t, e) {
var n = M.util.clone(M.languages[t]);
for (var o in e) n[o] = e[o];
return n;
},
insertBefore: function(n, t, e, o) {
var r = (o = o || M.languages)[n], s = {};
for (var i in r) if (r.hasOwnProperty(i)) {
if (i == t) for (var a in e) e.hasOwnProperty(a) && (s[a] = e[a]);
e.hasOwnProperty(i) || (s[i] = r[i]);
}
var c = o[n];
return o[n] = s, M.languages.DFS(M.languages, function(t, e) {
e === c && t != n && (this[t] = s);
}), s;
},
DFS: function p(t, e, n, o) {
o = o || {};
var r = M.util.objId;
for (var s in t) if (t.hasOwnProperty(s)) {
e.call(t, s, t[s], n || s);
var i = t[s], a = M.util.type(i);
"Object" !== a || o[r(i)] ? "Array" !== a || o[r(i)] || (o[r(i)] = !0, p(i, e, s, o)) : (o[r(i)] = !0, 
p(i, e, null, o));
}
}
},
plugins: {},
highlightAll: function(t, e) {
M.highlightAllUnder(document, t, e);
},
highlightAllUnder: function(t, e, n) {
var o = {
callback: n,
container: t,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
M.hooks.run("before-highlightall", o), o.elements = Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)), 
M.hooks.run("before-all-elements-highlight", o);
for (var r, s = 0; r = o.elements[s++]; ) M.highlightElement(r, !0 === e, o.callback);
},
highlightElement: function(t, e, n) {
function o(t) {
a.highlightedCode = t, M.hooks.run("before-insert", a), a.element.innerHTML = a.highlightedCode, 
M.hooks.run("after-highlight", a), M.hooks.run("complete", a), n && n.call(a.element);
}
var r = M.util.getLanguage(t), s = M.languages[r];
t.className = t.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r;
var i = t.parentElement;
i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r);
var a = {
element: t,
language: r,
grammar: s,
code: t.textContent
};
if (M.hooks.run("before-sanity-check", a), (i = a.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), 
!a.code) return M.hooks.run("complete", a), void (n && n.call(a.element));
if (M.hooks.run("before-highlight", a), a.grammar) if (e && l.Worker) {
var c = new Worker(M.filename);
c.onmessage = function(t) {
o(t.data);
}, c.postMessage(JSON.stringify({
language: a.language,
code: a.code,
immediateClose: !0
}));
} else o(M.highlight(a.code, a.grammar, a.language)); else o(M.util.encode(a.code));
},
highlight: function(t, e, n) {
var o = {
code: t,
grammar: e,
language: n
};
return M.hooks.run("before-tokenize", o), o.tokens = M.tokenize(o.code, o.grammar), 
M.hooks.run("after-tokenize", o), R.stringify(M.util.encode(o.tokens), o.language);
},
tokenize: function(t, e) {
var n = e.rest;
if (n) {
for (var o in n) e[o] = n[o];
delete e.rest;
}
var r = new s();
return P(r, r.head, t), O(t, r, e, r.head, 0), i(r);
},
hooks: {
all: {},
add: function(t, e) {
var n = M.hooks.all;
n[t] = n[t] || [], n[t].push(e);
},
run: function(t, e) {
var n = M.hooks.all[t];
if (n && n.length) for (var o, r = 0; o = n[r++]; ) o(e);
}
},
Token: R
};
if (l.Prism = M, R.stringify = function h(t, e) {
if ("string" == typeof t) return t;
if (Array.isArray(t)) {
var n = "";
return t.forEach(function(t) {
n += h(t, e);
}), n;
}
var o = {
type: t.type,
content: h(t.content, e),
tag: "span",
classes: [ "token", t.type ],
attributes: {},
language: e
}, r = t.alias;
r && (Array.isArray(r) ? Array.prototype.push.apply(o.classes, r) : o.classes.push(r)), 
M.hooks.run("wrap", o);
var s = "";
for (var i in o.attributes) s += " " + i + '="' + (o.attributes[i] || "").replace(/"/g, "&quot;") + '"';
return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + s + ">" + o.content + "</" + o.tag + ">";
}, !l.document) return l.addEventListener && (M.disableWorkerMessageHandler || l.addEventListener("message", function(t) {
var e = JSON.parse(t.data), n = e.language, o = e.code, r = e.immediateClose;
l.postMessage(M.highlight(o, M.languages[n], n)), r && l.close();
}, !1)), M;
var o = M.util.currentScript();
if (o && (M.filename = o.src, o.hasAttribute("data-manual") && (M.manual = !0)), 
!M.manual) {
var r = document.readyState;
"loading" === r || "interactive" === r && o && o.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);
}
return M;
}(_self);

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), 
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: {
pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
greedy: !0,
inside: {
"internal-subset": {
pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
lookbehind: !0,
greedy: !0,
inside: null
},
string: {
pattern: /"[^"]*"|'[^']*'/,
greedy: !0
},
punctuation: /^<!|>$|[[\]]/,
"doctype-tag": /^DOCTYPE/,
name: /[^\s<>'"]+/
}
},
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"special-attr": [],
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
inside: {
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, /"|'/ ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: [ {
pattern: /&[\da-z]{1,8};/i,
alias: "named-entity"
}, /&#x?[\da-f]{1,8};/i ]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, 
Prism.hooks.add("wrap", function(t) {
"entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
value: function addInlined(t, e) {
var n = {};
n["language-" + e] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[e]
}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
var o = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: n
}
};
o["language-" + e] = {
pattern: /[\s\S]+/,
inside: Prism.languages[e]
};
var r = {};
r[t] = {
pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
return t;
}), "i"),
lookbehind: !0,
greedy: !0,
inside: o
}, Prism.languages.insertBefore("markup", "cdata", r);
}
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
value: function(t, e) {
Prism.languages.markup.tag.inside["special-attr"].push({
pattern: RegExp(/(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
lookbehind: !0,
inside: {
"attr-name": /^[^\s=]+/,
"attr-value": {
pattern: /=[\s\S]+/,
inside: {
value: {
pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
lookbehind: !0,
alias: [ e, "language-" + e ],
inside: Prism.languages[e]
},
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, /"|'/ ]
}
}
}
});
}
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, 
Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), 
Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, 
Prism.languages.rss = Prism.languages.xml, function(t) {
var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
t.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
inside: {
rule: /^@[\w-]+/,
"selector-function-argument": {
pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
lookbehind: !0,
alias: "selector"
},
keyword: {
pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
lookbehind: !0
}
}
},
url: {
pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
greedy: !0,
inside: {
"function": /^url/i,
punctuation: /^\(|\)$/,
string: {
pattern: RegExp("^" + e.source + "$"),
alias: "url"
}
}
},
selector: {
pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
lookbehind: !0
},
string: {
pattern: e,
greedy: !0
},
property: {
pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
lookbehind: !0
},
important: /!important\b/i,
"function": {
pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
lookbehind: !0
},
punctuation: /[(){};:,]/
}, t.languages.css.atrule.inside.rest = t.languages.css;
var n = t.languages.markup;
n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(Prism), Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
"boolean": /\b(?:true|false)\b/,
"function": /\b\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
"class-name": [ Prism.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|})\s*)catch\b/,
lookbehind: !0
}, {
pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
"function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
lookbehind: !0,
greedy: !0,
inside: {
"regex-source": {
pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
lookbehind: !0,
alias: "language-regex",
inside: Prism.languages.regex
},
"regex-delimiter": /^\/|\/$/,
"regex-flags": /^[a-z]+$/
}
},
"function-variable": {
pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
hashbang: {
pattern: /^#!.*/,
greedy: !0,
alias: "comment"
},
"template-string": {
pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
greedy: !0,
inside: {
"template-punctuation": {
pattern: /^`|`$/,
alias: "string"
},
interpolation: {
pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
lookbehind: !0,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), 
Prism.languages.js = Prism.languages.javascript, function(t) {
var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
lookbehind: !0,
alias: "punctuation",
inside: null
}, o = {
bash: n,
environment: {
pattern: RegExp("\\$" + e),
alias: "constant"
},
variable: [ {
pattern: /\$?\(\([\s\S]+?\)\)/,
greedy: !0,
inside: {
variable: [ {
pattern: /(^\$\(\([\s\S]+)\)\)/,
lookbehind: !0
}, /^\$\(\(/ ],
number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
punctuation: /\(\(?|\)\)?|,|;/
}
}, {
pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
greedy: !0,
inside: {
variable: /^\$\(|^`|\)$|`$/
}
}, {
pattern: /\$\{[^}]+\}/,
greedy: !0,
inside: {
operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
punctuation: /[\[\]]/,
environment: {
pattern: RegExp("(\\{)" + e),
lookbehind: !0,
alias: "constant"
}
}
}, /\$(?:\w+|[#?*!@$])/ ],
entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
};
t.languages.bash = {
shebang: {
pattern: /^#!\s*\/.*/,
alias: "important"
},
comment: {
pattern: /(^|[^"{\\$])#.*/,
lookbehind: !0
},
"function-name": [ {
pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
lookbehind: !0,
alias: "function"
}, {
pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
alias: "function"
} ],
"for-or-select": {
pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
alias: "variable",
lookbehind: !0
},
"assign-left": {
pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
inside: {
environment: {
pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
lookbehind: !0,
alias: "constant"
}
},
alias: "variable",
lookbehind: !0
},
string: [ {
pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
lookbehind: !0,
greedy: !0,
inside: o
}, {
pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
lookbehind: !0,
greedy: !0,
inside: {
bash: n
}
}, {
pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
lookbehind: !0,
greedy: !0,
inside: o
}, {
pattern: /(^|[^$\\])'[^']*'/,
lookbehind: !0,
greedy: !0
}, {
pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
greedy: !0,
inside: {
entity: o.entity
}
} ],
environment: {
pattern: RegExp("\\$?" + e),
alias: "constant"
},
variable: o.variable,
"function": {
pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
lookbehind: !0
},
keyword: {
pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
lookbehind: !0
},
builtin: {
pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
lookbehind: !0,
alias: "class-name"
},
"boolean": {
pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
lookbehind: !0
},
"file-descriptor": {
pattern: /\B&\d\b/,
alias: "important"
},
operator: {
pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
inside: {
"file-descriptor": {
pattern: /^\d/,
alias: "important"
}
}
},
punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
number: {
pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
lookbehind: !0
}
}, n.inside = t.languages.bash;
for (var r = [ "comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number" ], s = o.variable[1].inside, i = 0; i < r.length; i++) s[r[i]] = t.languages.bash[r[i]];
t.languages.shell = t.languages.bash;
}(Prism), Prism.languages.c = Prism.languages.extend("clike", {
comment: {
pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
greedy: !0
},
"class-name": {
pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
lookbehind: !0
},
keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
"function": /\b[a-z_]\w*(?=\s*\()/i,
number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
macro: {
pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
lookbehind: !0,
greedy: !0,
alias: "property",
inside: {
string: [ {
pattern: /^(#\s*include\s*)<[^>]+>/,
lookbehind: !0
}, Prism.languages.c.string ],
comment: Prism.languages.c.comment,
"macro-name": [ {
pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
lookbehind: !0
}, {
pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
lookbehind: !0,
alias: "function"
} ],
directive: {
pattern: /^(#\s*)[a-z]+/,
lookbehind: !0,
alias: "keyword"
},
"directive-hash": /^#/,
punctuation: /##|\\(?=[\r\n])/,
expression: {
pattern: /\S[\s\S]*/,
inside: Prism.languages.c
}
}
},
constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
}), delete Prism.languages.c["boolean"], function(t) {
var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
return e.source;
});
t.languages.cpp = t.languages.extend("c", {
"class-name": [ {
pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
return e.source;
})),
lookbehind: !0
}, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/ ],
keyword: e,
number: {
pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
greedy: !0
},
operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
"boolean": /\b(?:true|false)\b/
}), t.languages.insertBefore("cpp", "string", {
module: {
pattern: RegExp(/(\b(?:module|import)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
return n;
}) + ")"),
lookbehind: !0,
greedy: !0,
inside: {
string: /^[<"][\s\S]+/,
operator: /:/,
punctuation: /\./
}
},
"raw-string": {
pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
alias: "string",
greedy: !0
}
}), t.languages.insertBefore("cpp", "keyword", {
"generic-function": {
pattern: /\b[a-z_]\w*\s*<(?:[^<>]|<(?:[^<>])*>)*>(?=\s*\()/i,
inside: {
"function": /^\w+/,
generic: {
pattern: /<[\s\S]+/,
alias: "class-name",
inside: t.languages.cpp
}
}
}
}), t.languages.insertBefore("cpp", "operator", {
"double-colon": {
pattern: /::/,
alias: "punctuation"
}
}), t.languages.insertBefore("cpp", "class-name", {
"base-clause": {
pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
lookbehind: !0,
greedy: !0,
inside: t.languages.extend("cpp", {})
}
}), t.languages.insertBefore("inside", "double-colon", {
"class-name": /\b[a-z_]\w*\b(?!\s*::)/i
}, t.languages.cpp["base-clause"]);
}(Prism), function(t) {
var e = /#(?!\{).+/, n = {
pattern: /#\{[^}]+\}/,
alias: "variable"
};
t.languages.coffeescript = t.languages.extend("javascript", {
comment: e,
string: [ {
pattern: /'(?:\\[\s\S]|[^\\'])*'/,
greedy: !0
}, {
pattern: /"(?:\\[\s\S]|[^\\"])*"/,
greedy: !0,
inside: {
interpolation: n
}
} ],
keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
"class-member": {
pattern: /@(?!\d)\w+/,
alias: "variable"
}
}), t.languages.insertBefore("coffeescript", "comment", {
"multiline-comment": {
pattern: /###[\s\S]+?###/,
alias: "comment"
},
"block-regex": {
pattern: /\/{3}[\s\S]*?\/{3}/,
alias: "regex",
inside: {
comment: e,
interpolation: n
}
}
}), t.languages.insertBefore("coffeescript", "string", {
"inline-javascript": {
pattern: /`(?:\\[\s\S]|[^\\`])*`/,
inside: {
delimiter: {
pattern: /^`|`$/,
alias: "punctuation"
},
script: {
pattern: /[\s\S]+/,
alias: "language-javascript",
inside: t.languages.javascript
}
}
},
"multiline-string": [ {
pattern: /'''[\s\S]*?'''/,
greedy: !0,
alias: "string"
}, {
pattern: /"""[\s\S]*?"""/,
greedy: !0,
alias: "string",
inside: {
interpolation: n
}
} ]
}), t.languages.insertBefore("coffeescript", "keyword", {
property: /(?!\d)\w+(?=\s*:(?!:))/
}), delete t.languages.coffeescript["template-string"], t.languages.coffee = t.languages.coffeescript;
}(Prism), function(t) {
t.languages.ruby = t.languages.extend("clike", {
comment: [ /#.*/, {
pattern: /^=begin\s[\s\S]*?^=end/m,
greedy: !0
} ],
"class-name": {
pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
});
var e = {
pattern: /#\{[^}]+\}/,
inside: {
delimiter: {
pattern: /^#\{|\}$/,
alias: "tag"
},
rest: t.languages.ruby
}
};
delete t.languages.ruby["function"], t.languages.insertBefore("ruby", "keyword", {
regex: [ {
pattern: RegExp(/%r/.source + "(?:" + [ /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source ].join("|") + ")" + /[egimnosux]{0,6}/.source),
greedy: !0,
inside: {
interpolation: e
}
}, {
pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
lookbehind: !0,
greedy: !0,
inside: {
interpolation: e
}
} ],
variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
symbol: {
pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
lookbehind: !0
},
"method-definition": {
pattern: /(\bdef\s+)[\w.]+/,
lookbehind: !0,
inside: {
"function": /\w+$/,
rest: t.languages.ruby
}
}
}), t.languages.insertBefore("ruby", "number", {
builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
constant: /\b[A-Z]\w*(?:[?!]|\b)/
}), t.languages.ruby.string = [ {
pattern: RegExp(/%[qQiIwWxs]?/.source + "(?:" + [ /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source ].join("|") + ")"),
greedy: !0,
inside: {
interpolation: e
}
}, {
pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
greedy: !0,
inside: {
interpolation: e
}
}, {
pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
alias: "heredoc-string",
greedy: !0,
inside: {
delimiter: {
pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
alias: "symbol",
inside: {
punctuation: /^<<[-~]?/
}
},
interpolation: e
}
}, {
pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
alias: "heredoc-string",
greedy: !0,
inside: {
delimiter: {
pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
alias: "symbol",
inside: {
punctuation: /^<<[-~]?'|'$/
}
}
}
} ], t.languages.rb = t.languages.ruby;
}(Prism), function(t) {
t.languages.crystal = t.languages.extend("ruby", {
keyword: [ /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/, {
pattern: /(\.\s*)(?:is_a|responds_to)\?/,
lookbehind: !0
} ],
number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
}), t.languages.insertBefore("crystal", "string", {
attribute: {
pattern: /@\[.+?\]/,
alias: "attr-name",
inside: {
delimiter: {
pattern: /^@\[|\]$/,
alias: "tag"
},
rest: t.languages.crystal
}
},
expansion: [ {
pattern: /\{\{.+?\}\}/,
inside: {
delimiter: {
pattern: /^\{\{|\}\}$/,
alias: "tag"
},
rest: t.languages.crystal
}
}, {
pattern: /\{%.+?%\}/,
inside: {
delimiter: {
pattern: /^\{%|%\}$/,
alias: "tag"
},
rest: t.languages.crystal
}
} ]
});
}(Prism), Prism.languages.d = Prism.languages.extend("clike", {
comment: [ {
pattern: /^\s*#!.+/,
greedy: !0
}, {
pattern: RegExp(/(^|[^\\])/.source + "(?:" + [ /\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source, /\/\/.*/.source, /\/\*[\s\S]*?\*\//.source ].join("|") + ")"),
lookbehind: !0,
greedy: !0
} ],
string: [ {
pattern: RegExp([ /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source, /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source, /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source, /\bq"(.)[\s\S]*?\2"/.source, /'(?:\\(?:\W|\w+)|[^\\])'/.source, /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source ].join("|"), "m"),
greedy: !0
}, {
pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
greedy: !0,
alias: "token-string"
} ],
keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
number: [ /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i, {
pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
lookbehind: !0
} ],
operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
}), Prism.languages.insertBefore("d", "keyword", {
property: /\B@\w*/
}), Prism.languages.insertBefore("d", "function", {
register: {
pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
alias: "variable"
}
}), function(t) {
var e = [ /\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/ ], n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, o = {
pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
lookbehind: !0,
inside: {
namespace: {
pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
inside: {
punctuation: /\./
}
}
}
};
t.languages.dart = t.languages.extend("clike", {
string: [ {
pattern: /r?("""|''')[\s\S]*?\1/,
greedy: !0
}, {
pattern: /r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
greedy: !0
} ],
"class-name": [ o, {
pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
lookbehind: !0,
inside: o.inside
} ],
keyword: e,
operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
}), t.languages.insertBefore("dart", "function", {
metadata: {
pattern: /@\w+/,
alias: "symbol"
}
}), t.languages.insertBefore("dart", "class-name", {
generics: {
pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
inside: {
"class-name": o,
keyword: e,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
}
});
}(Prism), function(o) {
o.languages.diff = {
coord: [ /^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m ]
};
var r = {
"deleted-sign": "-",
"deleted-arrow": "<",
"inserted-sign": "+",
"inserted-arrow": ">",
unchanged: " ",
diff: "!"
};
Object.keys(r).forEach(function(t) {
var e = r[t], n = [];
/^\w+$/.test(t) || n.push(/\w+/.exec(t)[0]), "diff" === t && n.push("bold"), o.languages.diff[t] = {
pattern: RegExp("^(?:[" + e + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
alias: n,
inside: {
line: {
pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
lookbehind: !0
},
prefix: {
pattern: /[\s\S]/,
alias: /\w+/.exec(t)[0]
}
}
};
}), Object.defineProperty(o.languages.diff, "PREFIXES", {
value: r
});
}(Prism), function(y) {
function b(t, e) {
return "___" + t.toUpperCase() + e + "___";
}
Object.defineProperties(y.languages["markup-templating"] = {}, {
buildPlaceholders: {
value: function(o, r, t, s) {
if (o.language === r) {
var i = o.tokenStack = [];
o.code = o.code.replace(t, function(t) {
if ("function" == typeof s && !s(t)) return t;
for (var e, n = i.length; -1 !== o.code.indexOf(e = b(r, n)); ) ++n;
return i[n] = t, e;
}), o.grammar = y.languages.markup;
}
}
},
tokenizePlaceholders: {
value: function(h, d) {
function f(t) {
for (var e = 0; e < t.length && !(g >= m.length); e++) {
var n = t[e];
if ("string" == typeof n || n.content && "string" == typeof n.content) {
var o = m[g], r = h.tokenStack[o], s = "string" == typeof n ? n : n.content, i = b(d, o), a = s.indexOf(i);
if (-1 < a) {
++g;
var c = s.substring(0, a), l = new y.Token(d, y.tokenize(r, h.grammar), "language-" + d, r), u = s.substring(a + i.length), p = [];
c && p.push.apply(p, f([ c ])), p.push(l), u && p.push.apply(p, f([ u ])), "string" == typeof n ? t.splice.apply(t, [ e, 1 ].concat(p)) : n.content = p;
}
} else n.content && f(n.content);
}
return t;
}
if (h.language === d && h.tokenStack) {
h.grammar = y.languages[d];
var g = 0, m = Object.keys(h.tokenStack);
f(h.tokens);
}
}
}
});
}(Prism), function(t) {
t.languages.django = {
comment: /^{#[\s\S]*?#}$/,
tag: {
pattern: /(^{%[+-]?\s*)\w+/,
lookbehind: !0,
alias: "keyword"
},
delimiter: {
pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
alias: "punctuation"
},
string: {
pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
filter: {
pattern: /(\|)\w+/,
lookbehind: !0,
alias: "function"
},
test: {
pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
lookbehind: !0,
alias: "function"
},
"function": /\b[a-z_]\w+(?=\s*\()/i,
keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
number: /\b\d+(?:\.\d+)?\b/,
"boolean": /[Tt]rue|[Ff]alse|[Nn]one/,
variable: /\b\w+?\b/,
punctuation: /[{}[\](),.:;]/
};
var e = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g, n = t.languages["markup-templating"];
t.hooks.add("before-tokenize", function(t) {
n.buildPlaceholders(t, "django", e);
}), t.hooks.add("after-tokenize", function(t) {
n.tokenizePlaceholders(t, "django");
}), t.languages.jinja2 = t.languages.django, t.hooks.add("before-tokenize", function(t) {
n.buildPlaceholders(t, "jinja2", e);
}), t.hooks.add("after-tokenize", function(t) {
n.tokenizePlaceholders(t, "jinja2");
});
}(Prism), Prism.languages.elixir = {
doc: {
pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
inside: {
attribute: /^@\w+/,
string: /['"][\s\S]+/
}
},
comment: {
pattern: /#.*/m,
greedy: !0
},
regex: {
pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
greedy: !0
},
string: [ {
pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
greedy: !0,
inside: {}
}, {
pattern: /("""|''')[\s\S]*?\1/,
greedy: !0,
inside: {}
}, {
pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0,
inside: {}
} ],
atom: {
pattern: /(^|[^:]):\w+/,
lookbehind: !0,
alias: "symbol"
},
module: {
pattern: /\b[A-Z]\w*\b/,
alias: "class-name"
},
"attr-name": /\b\w+\??:(?!:)/,
argument: {
pattern: /(^|[^&])&\d+/,
lookbehind: !0,
alias: "variable"
},
attribute: {
pattern: /@\w+/,
alias: "variable"
},
"function": /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d+))/,
number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct|delegate)?|do|else|end|fn|for|if|import|not|or|raise|require|rescue|try|unless|use|when)\b/,
"boolean": /\b(?:true|false|nil)\b/,
operator: [ /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
pattern: /([^<])<(?!<)/,
lookbehind: !0
}, {
pattern: /([^>])>(?!>)/,
lookbehind: !0
} ],
punctuation: /<<|>>|[.,%\[\]{}()]/
}, Prism.languages.elixir.string.forEach(function(t) {
t.inside = {
interpolation: {
pattern: /#\{[^}]+\}/,
inside: {
delimiter: {
pattern: /^#\{|\}$/,
alias: "punctuation"
},
rest: Prism.languages.elixir
}
}
};
}), Prism.languages.erlang = {
comment: /%.+/,
string: {
pattern: /"(?:\\.|[^\\"\r\n])*"/,
greedy: !0
},
"quoted-function": {
pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
alias: "function"
},
"quoted-atom": {
pattern: /'(?:\\.|[^\\'\r\n])+'/,
alias: "atom"
},
"boolean": /\b(?:true|false)\b/,
keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
number: [ /\$\\?./, /\b\d+#[a-z0-9]+/i, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i ],
"function": /\b[a-z][\w@]*(?=\()/,
variable: {
pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
lookbehind: !0
},
operator: [ /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
pattern: /(^|[^<])<(?!<)/,
lookbehind: !0
}, {
pattern: /(^|[^>])>(?!>)/,
lookbehind: !0
} ],
atom: /\b[a-z][\w@]*/,
punctuation: /[()[\]{}:;,.#|]|<<|>>/
}, Prism.languages.go = Prism.languages.extend("clike", {
string: {
pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
greedy: !0
},
keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
"boolean": /\b(?:_|iota|nil|true|false)\b/,
number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/
}), delete Prism.languages.go["class-name"], Prism.languages.groovy = Prism.languages.extend("clike", {
string: [ {
pattern: /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
greedy: !0
}, {
pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
greedy: !0
} ],
keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
operator: {
pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
lookbehind: !0
},
punctuation: /\.+|[{}[\];(),:$]/
}), Prism.languages.insertBefore("groovy", "string", {
shebang: {
pattern: /#!.+/,
alias: "comment"
}
}), Prism.languages.insertBefore("groovy", "punctuation", {
"spock-block": /\b(?:setup|given|when|then|and|cleanup|expect|where):/
}), Prism.languages.insertBefore("groovy", "function", {
annotation: {
pattern: /(^|[^.])@\w+/,
lookbehind: !0,
alias: "punctuation"
}
}), Prism.hooks.add("wrap", function(t) {
if ("groovy" === t.language && "string" === t.type) {
var e = t.content[0];
if ("'" != e) {
var n = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;
"$" === e && (n = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/), t.content = t.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&"), 
t.content = Prism.highlight(t.content, {
expression: {
pattern: n,
lookbehind: !0,
inside: Prism.languages.groovy
}
}), t.classes.push("/" === e ? "regex" : "gstring");
}
}
}), function(t) {
var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, o = {
pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
lookbehind: !0,
inside: {
namespace: {
pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
inside: {
punctuation: /\./
}
},
punctuation: /\./
}
};
t.languages.java = t.languages.extend("clike", {
"class-name": [ o, {
pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=())])/.source),
lookbehind: !0,
inside: o.inside
} ],
keyword: e,
"function": [ t.languages.clike["function"], {
pattern: /(\:\:\s*)[a-z_]\w*/,
lookbehind: !0
} ],
number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
operator: {
pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
lookbehind: !0
}
}), t.languages.insertBefore("java", "string", {
"triple-quoted-string": {
pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
greedy: !0,
alias: "string"
}
}), t.languages.insertBefore("java", "class-name", {
annotation: {
pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
lookbehind: !0,
alias: "punctuation"
},
generics: {
pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
inside: {
"class-name": o,
keyword: e,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
},
namespace: {
pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
return e.source;
})),
lookbehind: !0,
inside: {
punctuation: /\./
}
}
});
}(Prism), Prism.languages.json = {
property: {
pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
lookbehind: !0,
greedy: !0
},
string: {
pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
lookbehind: !0,
greedy: !0
},
comment: {
pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
greedy: !0
},
number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
punctuation: /[{}[\],]/,
operator: /:/,
"boolean": /\b(?:true|false)\b/,
"null": {
pattern: /\bnull\b/,
alias: "keyword"
}
}, Prism.languages.webmanifest = Prism.languages.json, Prism.languages.julia = {
comment: {
pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
lookbehind: !0
},
regex: {
pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
greedy: !0
},
string: {
pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'|`(?:[^\\`\r\n]|\\.)*`/,
lookbehind: !0,
greedy: !0
},
keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
"boolean": /\b(?:true|false)\b/,
number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
operator: /&&|\|\||[-+*^%\xf7\u22bb&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265'\u221a\u221b]/,
punctuation: /::?|[{}[\]();,.?]/,
constant: /\b(?:(?:NaN|Inf)(?:16|32|64)?|im|pi)\b|[\u03c0\u212f]/
}, function(t) {
t.languages.kotlin = t.languages.extend("clike", {
keyword: {
pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
lookbehind: !0
},
"function": [ {
pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
greedy: !0
}, {
pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
lookbehind: !0,
greedy: !0
} ],
number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
}), delete t.languages.kotlin["class-name"], t.languages.insertBefore("kotlin", "string", {
"raw-string": {
pattern: /("""|''')[\s\S]*?\1/,
alias: "string"
}
}), t.languages.insertBefore("kotlin", "keyword", {
annotation: {
pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
alias: "builtin"
}
}), t.languages.insertBefore("kotlin", "function", {
label: {
pattern: /\b\w+@|@\w+\b/,
alias: "symbol"
}
});
var e = [ {
pattern: /\$\{[^}]+\}/,
inside: {
delimiter: {
pattern: /^\$\{|\}$/,
alias: "variable"
},
rest: t.languages.kotlin
}
}, {
pattern: /\$\w+/,
alias: "variable"
} ];
t.languages.kotlin.string.inside = t.languages.kotlin["raw-string"].inside = {
interpolation: e
}, t.languages.kt = t.languages.kotlin, t.languages.kts = t.languages.kotlin;
}(Prism), function(t) {
var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {
"equation-command": {
pattern: e,
alias: "regex"
}
};
t.languages.latex = {
comment: /%.*/m,
cdata: {
pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
lookbehind: !0
},
equation: [ {
pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
inside: n,
alias: "string"
}, {
pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
lookbehind: !0,
inside: n,
alias: "string"
} ],
keyword: {
pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
lookbehind: !0
},
url: {
pattern: /(\\url\{)[^}]+(?=\})/,
lookbehind: !0
},
headline: {
pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
lookbehind: !0,
alias: "class-name"
},
"function": {
pattern: e,
alias: "selector"
},
punctuation: /[[\]{}&]/
}, t.languages.tex = t.languages.latex, t.languages.context = t.languages.latex;
}(Prism), Prism.languages.lua = {
comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
string: {
pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
greedy: !0
},
number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
"function": /(?!\d)\w+(?=\s*(?:[({]))/,
operator: [ /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
pattern: /(^|[^.])\.\.(?!\.)/,
lookbehind: !0
} ],
punctuation: /[\[\](){},;]|\.+|:+/
}, Prism.languages.matlab = {
comment: [ /%\{[\s\S]*?\}%/, /%.+/ ],
string: {
pattern: /\B'(?:''|[^'\r\n])*'/,
greedy: !0
},
number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
"function": /\b(?!\d)\w+(?=\s*\()/,
operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
punctuation: /\.{3}|[.,;\[\](){}!]/
}, function() {
var t = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
Prism.languages.nginx = {
comment: {
pattern: /(^|[\s{};])#.*/,
lookbehind: !0
},
directive: {
pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
lookbehind: !0,
greedy: !0,
inside: {
string: {
pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
lookbehind: !0,
inside: {
escape: {
pattern: /\\["'\\nrt]/,
alias: "entity"
},
variable: t
}
},
comment: {
pattern: /(\s)#.*/,
lookbehind: !0,
greedy: !0
},
keyword: {
pattern: /^\S+/,
greedy: !0
},
"boolean": {
pattern: /(\s)(?:off|on)(?!\S)/,
lookbehind: !0
},
number: {
pattern: /(\s)\d+[a-z]*(?!\S)/i,
lookbehind: !0
},
variable: t
}
},
punctuation: /[{};]/
};
}(), Prism.languages.nim = {
comment: /#.*/,
string: {
pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
greedy: !0
},
number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
"function": {
pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
inside: {
operator: /\*$/
}
},
ignore: {
pattern: /`[^`\r\n]+`/,
inside: {
punctuation: /`/
}
},
operator: {
pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
lookbehind: !0
},
punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
}, Prism.languages.ocaml = {
comment: /\(\*[\s\S]*?\*\)/,
string: [ {
pattern: /"(?:\\.|[^\\\r\n"])*"/,
greedy: !0
}, {
pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
greedy: !0
} ],
number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
directive: {
pattern: /\B#\w+/,
alias: "important"
},
label: {
pattern: /\B~\w+/,
alias: "function"
},
"type-variable": {
pattern: /\B'\w+/,
alias: "function"
},
variant: {
pattern: /`\w+/,
alias: "variable"
},
module: {
pattern: /\b[A-Z]\w+/,
alias: "variable"
},
keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
"boolean": /\b(?:false|true)\b/,
operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
punctuation: /[(){}\[\]|.,:;]|\b_\b/
}, Prism.languages.perl = {
comment: [ {
pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
lookbehind: !0
}, {
pattern: /(^|[^\\$])#.*/,
lookbehind: !0
} ],
string: [ {
pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
greedy: !0
}, {
pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
greedy: !0
}, {
pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
greedy: !0
}, {
pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
greedy: !0
}, {
pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
greedy: !0
}, {
pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
greedy: !0
}, {
pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
greedy: !0
}, {
pattern: /'(?:[^'\\\r\n]|\\.)*'/,
greedy: !0
} ],
regex: [ {
pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
greedy: !0
}, {
pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
greedy: !0
}, {
pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
greedy: !0
}, {
pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
greedy: !0
}, {
pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
greedy: !0
}, {
pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
lookbehind: !0,
greedy: !0
}, {
pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
greedy: !0
} ],
variable: [ /[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/ ],
filehandle: {
pattern: /<(?![<=])\S*>|\b_\b/,
alias: "symbol"
},
vstring: {
pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
alias: "string"
},
"function": {
pattern: /sub [a-z0-9_]+/i,
inside: {
keyword: /sub/
}
},
keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
punctuation: /[{}[\];(),:]/
}, function(n) {
var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, e = [ {
pattern: /\b(?:false|true)\b/i,
alias: "boolean"
}, {
pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
greedy: !0,
lookbehind: !0
}, {
pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
greedy: !0,
lookbehind: !0
}, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/ ], o = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, r = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
n.languages.php = {
delimiter: {
pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
alias: "important"
},
comment: t,
variable: /\$+(?:\w+\b|(?={))/i,
"package": {
pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
lookbehind: !0,
inside: {
punctuation: /\\/
}
},
"class-name-definition": {
pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
lookbehind: !0,
alias: "class-name"
},
"function-definition": {
pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
lookbehind: !0,
alias: "function"
},
keyword: [ {
pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
alias: "type-casting",
greedy: !0,
lookbehind: !0
}, {
pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
alias: "type-hint",
greedy: !0,
lookbehind: !0
}, {
pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
alias: "type-hint",
greedy: !0,
lookbehind: !0
}, {
pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
alias: "return-type",
greedy: !0,
lookbehind: !0
}, {
pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
alias: "return-type",
greedy: !0,
lookbehind: !0
}, {
pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
alias: "type-declaration",
greedy: !0
}, {
pattern: /(\|\s*)(?:null|false)\b/i,
alias: "type-declaration",
greedy: !0,
lookbehind: !0
}, {
pattern: /\b(?:parent|self|static)(?=\s*::)/i,
alias: "static-context",
greedy: !0
}, {
pattern: /(\byield\s+)from\b/i,
lookbehind: !0
}, /\bclass\b/i, {
pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
lookbehind: !0
} ],
"argument-name": {
pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
lookbehind: !0
},
"class-name": [ {
pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
greedy: !0,
lookbehind: !0
}, {
pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
greedy: !0,
lookbehind: !0
}, {
pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
greedy: !0
}, {
pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
alias: "class-name-fully-qualified",
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
alias: "class-name-fully-qualified",
greedy: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
alias: "class-name-fully-qualified",
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /\b[a-z_]\w*(?=\s*\$)/i,
alias: "type-declaration",
greedy: !0
}, {
pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
alias: [ "class-name-fully-qualified", "type-declaration" ],
greedy: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /\b[a-z_]\w*(?=\s*::)/i,
alias: "static-context",
greedy: !0
}, {
pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
alias: [ "class-name-fully-qualified", "static-context" ],
greedy: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
alias: "type-hint",
greedy: !0,
lookbehind: !0
}, {
pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
alias: [ "class-name-fully-qualified", "type-hint" ],
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}, {
pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
alias: "return-type",
greedy: !0,
lookbehind: !0
}, {
pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
alias: [ "class-name-fully-qualified", "return-type" ],
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /\\/
}
} ],
constant: e,
"function": {
pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
lookbehind: !0,
inside: {
punctuation: /\\/
}
},
property: {
pattern: /(->\s*)\w+/,
lookbehind: !0
},
number: o,
operator: r,
punctuation: s
};
var i = {
pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
lookbehind: !0,
inside: n.languages.php
}, a = [ {
pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
alias: "nowdoc-string",
greedy: !0,
inside: {
delimiter: {
pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
alias: "symbol",
inside: {
punctuation: /^<<<'?|[';]$/
}
}
}
}, {
pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
alias: "heredoc-string",
greedy: !0,
inside: {
delimiter: {
pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
alias: "symbol",
inside: {
punctuation: /^<<<"?|[";]$/
}
},
interpolation: i
}
}, {
pattern: /`(?:\\[\s\S]|[^\\`])*`/,
alias: "backtick-quoted-string",
greedy: !0
}, {
pattern: /'(?:\\[\s\S]|[^\\'])*'/,
alias: "single-quoted-string",
greedy: !0
}, {
pattern: /"(?:\\[\s\S]|[^\\"])*"/,
alias: "double-quoted-string",
greedy: !0,
inside: {
interpolation: i
}
} ];
n.languages.insertBefore("php", "variable", {
string: a,
attribute: {
pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
greedy: !0,
inside: {
"attribute-content": {
pattern: /^(#\[)[\s\S]+(?=]$)/,
lookbehind: !0,
inside: {
comment: t,
string: a,
"attribute-class-name": [ {
pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
alias: "class-name",
greedy: !0,
lookbehind: !0
}, {
pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
alias: [ "class-name", "class-name-fully-qualified" ],
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /\\/
}
} ],
constant: e,
number: o,
operator: r,
punctuation: s
}
},
delimiter: {
pattern: /^#\[|]$/,
alias: "punctuation"
}
}
}
}), n.hooks.add("before-tokenize", function(t) {
if (/<\?/.test(t.code)) {
var e = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi;
n.languages["markup-templating"].buildPlaceholders(t, "php", e);
}
}), n.hooks.add("after-tokenize", function(t) {
n.languages["markup-templating"].tokenizePlaceholders(t, "php");
});
}(Prism), Prism.languages.python = {
comment: {
pattern: /(^|[^\\])#.*/,
lookbehind: !0
},
"string-interpolation": {
pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
greedy: !0,
inside: {
interpolation: {
pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
lookbehind: !0,
inside: {
"format-spec": {
pattern: /(:)[^:(){}]+(?=}$)/,
lookbehind: !0
},
"conversion-option": {
pattern: /![sra](?=[:}]$)/,
alias: "punctuation"
},
rest: null
}
},
string: /[\s\S]+/
}
},
"triple-quoted-string": {
pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
greedy: !0,
alias: "string"
},
string: {
pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
greedy: !0
},
"function": {
pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
lookbehind: !0
},
"class-name": {
pattern: /(\bclass\s+)\w+/i,
lookbehind: !0
},
decorator: {
pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
lookbehind: !0,
alias: [ "annotation", "punctuation" ],
inside: {
punctuation: /\./
}
},
keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
"boolean": /\b(?:True|False|None)\b/,
number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, 
Prism.languages.py = Prism.languages.python, Prism.languages.r = {
comment: /#.*/,
string: {
pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"percent-operator": {
pattern: /%[^%\s]*%/,
alias: "operator"
},
"boolean": /\b(?:TRUE|FALSE)\b/,
ellipsis: /\.\.(?:\.|\d+)/,
number: [ /\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/ ],
keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
punctuation: /[(){}\[\],;]/
}, function(i) {
function t(t, e) {
return t = t.replace(/<S>/g, function() {
return n;
}).replace(/<BRACES>/g, function() {
return o;
}).replace(/<SPREAD>/g, function() {
return r;
}), RegExp(t, e);
}
var e = i.util.clone(i.languages.javascript), n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
r = t(r).source, i.languages.jsx = i.languages.extend("markup", e), i.languages.jsx.tag.pattern = t(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), 
i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i, 
i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, 
i.languages.jsx.tag.inside.comment = e.comment, i.languages.insertBefore("inside", "attr-name", {
spread: {
pattern: t(/<SPREAD>/.source),
inside: i.languages.jsx
}
}, i.languages.jsx.tag), i.languages.insertBefore("inside", "special-attr", {
script: {
pattern: t(/=<BRACES>/.source),
inside: {
"script-punctuation": {
pattern: /^=(?={)/,
alias: "punctuation"
},
rest: i.languages.jsx
},
alias: "language-javascript"
}
}, i.languages.jsx.tag);
var a = function(t) {
return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(a).join("") : "";
}, c = function(t) {
for (var e = [], n = 0; n < t.length; n++) {
var o = t[n], r = !1;
if ("string" != typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? 0 < e.length && e[e.length - 1].tagName === a(o.content[0].content[1]) && e.pop() : "/>" === o.content[o.content.length - 1].content || e.push({
tagName: a(o.content[0].content[1]),
openedBraces: 0
}) : 0 < e.length && "punctuation" === o.type && "{" === o.content ? e[e.length - 1].openedBraces++ : 0 < e.length && 0 < e[e.length - 1].openedBraces && "punctuation" === o.type && "}" === o.content ? e[e.length - 1].openedBraces-- : r = !0), 
(r || "string" == typeof o) && 0 < e.length && 0 === e[e.length - 1].openedBraces) {
var s = a(o);
n < t.length - 1 && ("string" == typeof t[n + 1] || "plain-text" === t[n + 1].type) && (s += a(t[n + 1]), 
t.splice(n + 1, 1)), 0 < n && ("string" == typeof t[n - 1] || "plain-text" === t[n - 1].type) && (s = a(t[n - 1]) + s, 
t.splice(n - 1, 1), n--), t[n] = new i.Token("plain-text", s, null, s);
}
o.content && "string" != typeof o.content && c(o.content);
}
};
i.hooks.add("after-tokenize", function(t) {
"jsx" !== t.language && "tsx" !== t.language || c(t.tokens);
});
}(Prism), function(t) {
for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) e = e.replace(/<self>/g, function() {
return e;
});
e = e.replace(/<self>/g, function() {
return /[^\s\S]/.source;
}), t.languages.rust = {
comment: [ {
pattern: RegExp(/(^|[^\\])/.source + e),
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
greedy: !0
},
"char": {
pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
greedy: !0,
alias: "string"
},
attribute: {
pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
greedy: !0,
alias: "attr-name",
inside: {
string: null
}
},
"closure-params": {
pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
lookbehind: !0,
greedy: !0,
inside: {
"closure-punctuation": {
pattern: /^\||\|$/,
alias: "punctuation"
},
rest: null
}
},
"lifetime-annotation": {
pattern: /'\w+/,
alias: "symbol"
},
"fragment-specifier": {
pattern: /(\$\w+:)[a-z]+/,
lookbehind: !0,
alias: "punctuation"
},
variable: /\$\w+/,
"function-definition": {
pattern: /(\bfn\s+)\w+/,
lookbehind: !0,
alias: "function"
},
"type-definition": {
pattern: /(\b(?:enum|struct|union)\s+)\w+/,
lookbehind: !0,
alias: "class-name"
},
"module-declaration": [ {
pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
lookbehind: !0,
alias: "namespace"
}, {
pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
lookbehind: !0,
alias: "namespace",
inside: {
punctuation: /::/
}
} ],
keyword: [ /\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/ ],
"function": /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
macro: {
pattern: /\b\w+!/,
alias: "property"
},
constant: /\b[A-Z_][A-Z_\d]+\b/,
"class-name": /\b[A-Z]\w*\b/,
namespace: {
pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
inside: {
punctuation: /::/
}
},
number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
"boolean": /\b(?:false|true)\b/,
punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
}, t.languages.rust["closure-params"].inside.rest = t.languages.rust, t.languages.rust.attribute.inside.string = t.languages.rust.string;
}(Prism), Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)?url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
},
property: {
pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
pattern: /( )(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
"module-modifier": {
pattern: /\b(?:as|with|show|hide)\b/i,
alias: "keyword"
},
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
"boolean": /\b(?:true|false)\b/,
"null": {
pattern: /\bnull\b/,
alias: "keyword"
},
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, function(t) {
var e = [ /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source, /'[^']*'/.source, /\$'(?:[^'\\]|\\[\s\S])*'/.source, /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source ].join("|");
t.languages["shell-session"] = {
command: {
pattern: RegExp(/^(?:[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?::[^\0-\x1F$#*?"<>:;|]+)?|[^\0-\x1F$#*?"<>:;|]+)?/.source + /[$#]/.source + /(?:[^\\\r\n'"<$]|\\(?:[^\r]|\r\n?)|\$(?!')|<<str>>)+/.source.replace(/<<str>>/g, function() {
return e;
}), "m"),
greedy: !0,
inside: {
info: {
pattern: /^[^#$]+/,
alias: "punctuation",
inside: {
user: /^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+/,
punctuation: /:/,
path: /[\s\S]+/
}
},
bash: {
pattern: /(^[$#]\s*)\S[\s\S]*/,
lookbehind: !0,
alias: "language-bash",
inside: t.languages.bash
},
"shell-symbol": {
pattern: /^[$#]/,
alias: "important"
}
}
},
output: /.(?:.*(?:[\r\n]|.$))*/
}, t.languages["sh-session"] = t.languages.shellsession = t.languages["shell-session"];
}(Prism), Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
"function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
"boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
}, function(t) {
t.languages.typescript = t.languages.extend("javascript", {
"class-name": {
pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
lookbehind: !0,
greedy: !0,
inside: null
},
builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
}), t.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)(?!\s*[^\s_${}*a-zA-Z\xA0-\uFFFF])/), 
delete t.languages.typescript.parameter;
var e = t.languages.extend("typescript", {});
delete e["class-name"], t.languages.typescript["class-name"].inside = e, t.languages.insertBefore("typescript", "function", {
decorator: {
pattern: /@[$\w\xA0-\uFFFF]+/,
inside: {
at: {
pattern: /^@/,
alias: "operator"
},
"function": /^[\s\S]+/
}
},
"generic-function": {
pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
greedy: !0,
inside: {
"function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
generic: {
pattern: /<[\s\S]+/,
alias: "class-name",
inside: e
}
}
}
}), t.languages.ts = t.languages.typescript;
}(Prism), function(t) {
function e(t, e) {
e = (e || "").replace(/m/g, "") + "m";
var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
return r;
}).replace(/<<value>>/g, function() {
return t;
});
return RegExp(n, e);
}
var n = /[*&][^\s[\]{},]+/, o = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + o.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + o.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
}), i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
t.languages.yaml = {
scalar: {
pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
return r;
})),
lookbehind: !0,
alias: "string"
},
comment: /#.*/,
key: {
pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
return r;
}).replace(/<<key>>/g, function() {
return "(?:" + s + "|" + i + ")";
})),
lookbehind: !0,
greedy: !0,
alias: "atrule"
},
directive: {
pattern: /(^[ \t]*)%.+/m,
lookbehind: !0,
alias: "important"
},
datetime: {
pattern: e(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
lookbehind: !0,
alias: "number"
},
"boolean": {
pattern: e(/true|false/.source, "i"),
lookbehind: !0,
alias: "important"
},
"null": {
pattern: e(/null|~/.source, "i"),
lookbehind: !0,
alias: "important"
},
string: {
pattern: e(i),
lookbehind: !0,
greedy: !0
},
number: {
pattern: e(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
lookbehind: !0
},
tag: o,
important: n,
punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
}, t.languages.yml = t.languages.yaml;
}(Prism), Prism.languages.cmake = {
comment: /#.*/,
string: {
pattern: /"(?:[^\\"]|\\.)*"/,
greedy: !0,
inside: {
interpolation: {
pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
inside: {
punctuation: /\$\{|\}/,
variable: /\w+/
}
}
}
},
variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
"boolean": /\b(?:ON|OFF|TRUE|FALSE)\b/,
namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
inserted: {
pattern: /\b\w+::\w+\b/,
alias: "class-name"
},
number: /\b\d+(?:\.\d+)*\b/,
"function": /\b[a-z_]\w*(?=\s*\()\b/i,
punctuation: /[()>}]|\$[<{]/
}, 
/*! Raven.js 3.20.1 (42adaf5) | github.com/getsentry/raven-js */
/*
 * Includes TraceKit
 * https://github.com/getsentry/TraceKit
 *
 * Copyright 2017 Matt Robenolt and other contributors
 * Released under the BSD license
 * https://github.com/getsentry/raven-js/blob/master/LICENSE
 *
 */
function(t) {
if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Raven = t();
}
}(function() {
return function B(s, i, a) {
function c(n, t) {
if (!i[n]) {
if (!s[n]) {
var e = "function" == typeof require && require;
if (!t && e) return e(n, !0);
if (l) return l(n, !0);
var o = new Error("Cannot find module '" + n + "'");
throw o.code = "MODULE_NOT_FOUND", o;
}
var r = i[n] = {
exports: {}
};
s[n][0].call(r.exports, function(t) {
var e = s[n][1][t];
return c(e || t);
}, r, r.exports, B, s, i, a);
}
return i[n].exports;
}
for (var l = "function" == typeof require && require, t = 0; t < a.length; t++) c(a[t]);
return c;
}({
1: [ function(t, e) {
function n(t) {
this.name = "RavenConfigError", this.message = t;
}
n.prototype = new Error(), n.prototype.constructor = n, e.exports = n;
}, {} ],
2: [ function(t, e) {
var n = function(t, o, r) {
var s = t[o], i = t;
if (o in t) {
var a = "warn" === o ? "warning" : o;
t[o] = function() {
var t = [].slice.call(arguments), e = "" + t.join(" "), n = {
level: a,
logger: "console",
extra: {
arguments: t
}
};
"assert" === o ? !1 === t[0] && (e = "Assertion failed: " + (t.slice(1).join(" ") || "console.assert"), 
n.extra.arguments = t.slice(1), r && r(e, n)) : r && r(e, n), s && Function.prototype.apply.call(s, i, t);
};
}
};
e.exports = {
wrapMethod: n
};
}, {} ],
3: [ function(x, M) {
(function(t) {
function r() {
return +new Date();
}
function n(e, n) {
return d(n) ? function(t) {
return n(t, e);
} : n;
}
function e() {
for (var t in this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !h(O), 
this._hasNavigator = !h(P), this._lastCapturedException = null, this._lastData = null, 
this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, 
this._globalContext = {}, this._globalOptions = {
logger: "javascript",
ignoreErrors: [],
ignoreUrls: [],
whitelistUrls: [],
includePaths: [],
collectWindowErrors: !0,
maxMessageLength: 0,
maxUrlLength: 250,
stackTraceLimit: 50,
autoBreadcrumbs: !0,
instrument: !0,
sampleRate: 1
}, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, 
this._originalConsole = L.console || {}, this._originalConsoleMethods = {}, this._plugins = [], 
this._startTime = r(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, 
this._keypressTimeout, this._location = L.location, this._lastHref = this._location && this._location.href, 
this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[t] = this._originalConsole[t];
}
var l = x(6), o = x(7), c = x(1), s = x(5), a = s.isError, u = s.isObject, p = s.isErrorEvent, h = s.isUndefined, d = s.isFunction, f = s.isString, g = s.isArray, i = s.isEmptyObject, m = s.each, y = s.objectMerge, b = s.truncate, _ = s.objectFrozen, v = s.hasKey, E = s.joinRegExp, w = s.urlencode, S = s.uuid4, T = s.htmlTreeAsString, C = s.isSameException, k = s.isSameStacktrace, I = s.parseUrl, A = s.fill, N = x(2).wrapMethod, D = "source protocol user pass host port path".split(" "), R = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/, L = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, O = L.document, P = L.navigator;
e.prototype = {
VERSION: "3.20.1",
debug: !1,
TraceKit: l,
config: function(t, e) {
var n = this;
if (n._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), 
n;
if (!t) return n;
var o = n._globalOptions;
e && m(e, function(t, e) {
"tags" === t || "extra" === t || "user" === t ? n._globalContext[t] = e : o[t] = e;
}), n.setDSN(t), o.ignoreErrors.push(/^Script error\.?$/), o.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), 
o.ignoreErrors = E(o.ignoreErrors), o.ignoreUrls = !!o.ignoreUrls.length && E(o.ignoreUrls), 
o.whitelistUrls = !!o.whitelistUrls.length && E(o.whitelistUrls), o.includePaths = E(o.includePaths), 
o.maxBreadcrumbs = Math.max(0, Math.min(o.maxBreadcrumbs || 100, 100));
var r = {
xhr: !0,
console: !0,
dom: !0,
location: !0,
sentry: !0
}, s = o.autoBreadcrumbs;
"[object Object]" === {}.toString.call(s) ? s = y(r, s) : !1 !== s && (s = r), o.autoBreadcrumbs = s;
var i = {
tryCatch: !0
}, a = o.instrument;
return "[object Object]" === {}.toString.call(a) ? a = y(i, a) : !1 !== a && (a = i), 
o.instrument = a, l.collectWindowErrors = !!o.collectWindowErrors, n;
},
install: function() {
var t = this;
return t.isSetup() && !t._isRavenInstalled && (l.report.subscribe(function() {
t._handleOnErrorStackInfo.apply(t, arguments);
}), t._patchFunctionToString(), t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch(), 
t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs(), t._drainPlugins(), 
t._isRavenInstalled = !0), Error.stackTraceLimit = t._globalOptions.stackTraceLimit, 
this;
},
setDSN: function(t) {
var e = this, n = e._parseDSN(t), o = n.path.lastIndexOf("/"), r = n.path.substr(1, o);
e._dsn = t, e._globalKey = n.user, e._globalSecret = n.pass && n.pass.substr(1), 
e._globalProject = n.path.substr(o + 1), e._globalServer = e._getGlobalServer(n), 
e._globalEndpoint = e._globalServer + "/" + r + "api/" + e._globalProject + "/store/", 
this._resetBackoff();
},
context: function(t, e, n) {
return d(t) && (n = e || [], e = t, t = undefined), this.wrap(t, e).apply(this, n);
},
wrap: function(o, r, s) {
function t() {
var t = [], e = arguments.length, n = !o || o && !1 !== o.deep;
for (s && d(s) && s.apply(this, arguments); e--; ) t[e] = n ? i.wrap(o, arguments[e]) : arguments[e];
try {
return r.apply(this, t);
} catch (B) {
throw i._ignoreNextOnError(), i.captureException(B, o), B;
}
}
var i = this;
if (h(r) && !d(o)) return o;
if (d(o) && (r = o, o = undefined), !d(r)) return r;
try {
if (r.__raven__) return r;
if (r.__raven_wrapper__) return r.__raven_wrapper__;
} catch (B) {
return r;
}
for (var e in r) v(r, e) && (t[e] = r[e]);
return t.prototype = r.prototype, (r.__raven_wrapper__ = t).__raven__ = !0, t.__orig__ = r, 
t;
},
uninstall: function() {
return l.report.uninstall(), this._unpatchFunctionToString(), this._restoreBuiltIns(), 
Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, 
this;
},
captureException: function(t, e) {
var n = !a(t), o = !p(t), r = p(t) && !t.error;
if (n && o || r) return this.captureMessage(t, y({
trimHeadFrames: 1,
stacktrace: !0
}, e));
p(t) && (t = t.error), this._lastCapturedException = t;
try {
var s = l.computeStackTrace(t);
this._handleStackInfo(s, e);
} catch (i) {
if (t !== i) throw i;
}
return this;
},
captureMessage: function(t, e) {
if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
var n, o = y({
message: t + ""
}, e = e || {});
try {
throw new Error(t);
} catch (c) {
n = c;
}
n.name = null;
var r = l.computeStackTrace(n), s = g(r.stack) && r.stack[1], i = s && s.url || "";
if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(i)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(i))) {
if (this._globalOptions.stacktrace || e && e.stacktrace) {
e = y({
fingerprint: t,
trimHeadFrames: (e.trimHeadFrames || 0) + 1
}, e);
var a = this._prepareFrames(r, e);
o.stacktrace = {
frames: a.reverse()
};
}
return this._send(o), this;
}
}
},
captureBreadcrumb: function(t) {
var e = y({
timestamp: r() / 1e3
}, t);
if (d(this._globalOptions.breadcrumbCallback)) {
var n = this._globalOptions.breadcrumbCallback(e);
if (u(n) && !i(n)) e = n; else if (!1 === n) return this;
}
return this._breadcrumbs.push(e), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), 
this;
},
addPlugin: function(t) {
var e = [].slice.call(arguments, 1);
return this._plugins.push([ t, e ]), this._isRavenInstalled && this._drainPlugins(), 
this;
},
setUserContext: function(t) {
return this._globalContext.user = t, this;
},
setExtraContext: function(t) {
return this._mergeContext("extra", t), this;
},
setTagsContext: function(t) {
return this._mergeContext("tags", t), this;
},
clearContext: function() {
return this._globalContext = {}, this;
},
getContext: function() {
return JSON.parse(o(this._globalContext));
},
setEnvironment: function(t) {
return this._globalOptions.environment = t, this;
},
setRelease: function(t) {
return this._globalOptions.release = t, this;
},
setDataCallback: function(t) {
var e = this._globalOptions.dataCallback;
return this._globalOptions.dataCallback = n(e, t), this;
},
setBreadcrumbCallback: function(t) {
var e = this._globalOptions.breadcrumbCallback;
return this._globalOptions.breadcrumbCallback = n(e, t), this;
},
setShouldSendCallback: function(t) {
var e = this._globalOptions.shouldSendCallback;
return this._globalOptions.shouldSendCallback = n(e, t), this;
},
setTransport: function(t) {
return this._globalOptions.transport = t, this;
},
lastException: function() {
return this._lastCapturedException;
},
lastEventId: function() {
return this._lastEventId;
},
isSetup: function() {
return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, 
this._logDebug("error", "Error: Raven has not been configured.")), !1));
},
afterLoad: function() {
var t = L.RavenConfig;
t && this.config(t.dsn, t.config).install();
},
showReportDialog: function(t) {
if (O) {
var e = (t = t || {}).eventId || this.lastEventId();
if (!e) throw new c("Missing eventId");
var n = t.dsn || this._dsn;
if (!n) throw new c("Missing DSN");
var o = encodeURIComponent, r = "";
r += "?eventId=" + o(e), r += "&dsn=" + o(n);
var s = t.user || this._globalContext.user;
s && (s.name && (r += "&name=" + o(s.name)), s.email && (r += "&email=" + o(s.email)));
var i = this._getGlobalServer(this._parseDSN(n)), a = O.createElement("script");
a.async = !0, a.src = i + "/api/embed/error-page/" + r, (O.head || O.body).appendChild(a);
}
},
_ignoreNextOnError: function() {
var t = this;
this._ignoreOnError += 1, setTimeout(function() {
t._ignoreOnError -= 1;
});
},
_triggerEvent: function(t, e) {
var n, o;
if (this._hasDocument) {
for (o in e = e || {}, t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1), 
O.createEvent ? (n = O.createEvent("HTMLEvents")).initEvent(t, !0, !0) : (n = O.createEventObject()).eventType = t, 
e) v(e, o) && (n[o] = e[o]);
if (O.createEvent) O.dispatchEvent(n); else try {
O.fireEvent("on" + n.eventType.toLowerCase(), n);
} catch (B) {}
}
},
_breadcrumbEventHandler: function(n) {
var o = this;
return function(t) {
if (o._keypressTimeout = null, o._lastCapturedEvent !== t) {
var e;
o._lastCapturedEvent = t;
try {
e = T(t.target);
} catch (B) {
e = "<unknown>";
}
o.captureBreadcrumb({
category: "ui." + n,
message: e
});
}
};
},
_keypressEventHandler: function() {
var r = this, s = 1e3;
return function(t) {
var e;
try {
e = t.target;
} catch (B) {
return;
}
var n = e && e.tagName;
if (n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable)) {
var o = r._keypressTimeout;
o || r._breadcrumbEventHandler("input")(t), clearTimeout(o), r._keypressTimeout = setTimeout(function() {
r._keypressTimeout = null;
}, s);
}
};
},
_captureUrlChange: function(t, e) {
var n = I(this._location.href), o = I(e), r = I(t);
this._lastHref = e, n.protocol === o.protocol && n.host === o.host && (e = o.relative), 
n.protocol === r.protocol && n.host === r.host && (t = r.relative), this.captureBreadcrumb({
category: "navigation",
data: {
to: e,
from: t
}
});
},
_patchFunctionToString: function() {
var t = this;
t._originalFunctionToString = Function.prototype.toString, Function.prototype.toString = function() {
return "function" == typeof this && this.__raven__ ? t._originalFunctionToString.apply(this.__orig__, arguments) : t._originalFunctionToString.apply(this, arguments);
};
},
_unpatchFunctionToString: function() {
this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString);
},
_instrumentTryCatch: function() {
function t(s) {
return function(t, e) {
for (var n = new Array(arguments.length), o = 0; o < n.length; ++o) n[o] = arguments[o];
var r = n[0];
return d(r) && (n[0] = u.wrap(r)), s.apply ? s.apply(this, n) : s(n[0], n[1]);
};
}
function e(l) {
var t = L[l] && L[l].prototype;
t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (A(t, "addEventListener", function(c) {
return function(t, e, n, o) {
try {
e && e.handleEvent && (e.handleEvent = u.wrap(e.handleEvent));
} catch (a) {}
var r, s, i;
return p && p.dom && ("EventTarget" === l || "Node" === l) && (s = u._breadcrumbEventHandler("click"), 
i = u._keypressEventHandler(), r = function(t) {
if (t) {
var e;
try {
e = t.type;
} catch (B) {
return;
}
return "click" === e ? s(t) : "keypress" === e ? i(t) : void 0;
}
}), c.call(this, t, u.wrap(e, undefined, r), n, o);
};
}, n), A(t, "removeEventListener", function(r) {
return function(t, e, n, o) {
try {
e = e && (e.__raven_wrapper__ ? e.__raven_wrapper__ : e);
} catch (B) {}
return r.call(this, t, e, n, o);
};
}, n));
}
var u = this, n = u._wrappedBuiltIns, p = this._globalOptions.autoBreadcrumbs;
A(L, "setTimeout", t, n), A(L, "setInterval", t, n), L.requestAnimationFrame && A(L, "requestAnimationFrame", function(e) {
return function(t) {
return e(u.wrap(t));
};
}, n);
for (var o = [ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], r = 0; r < o.length; r++) e(o[r]);
},
_instrumentBreadcrumbs: function() {
function i(t, e) {
t in e && d(e[t]) && A(e, t, function(t) {
return l.wrap(t);
});
}
var l = this, t = this._globalOptions.autoBreadcrumbs, e = l._wrappedBuiltIns;
if (t.xhr && "XMLHttpRequest" in L) {
var n = XMLHttpRequest.prototype;
A(n, "open", function(n) {
return function(t, e) {
return f(e) && -1 === e.indexOf(l._globalKey) && (this.__raven_xhr = {
method: t,
url: e,
status_code: null
}), n.apply(this, arguments);
};
}, e), A(n, "send", function(s) {
return function(t) {
function e() {
if (n.__raven_xhr && 4 === n.readyState) {
try {
n.__raven_xhr.status_code = n.status;
} catch (B) {}
l.captureBreadcrumb({
type: "http",
category: "xhr",
data: n.__raven_xhr
});
}
}
for (var n = this, o = [ "onload", "onerror", "onprogress" ], r = 0; r < o.length; r++) i(o[r], n);
return "onreadystatechange" in n && d(n.onreadystatechange) ? A(n, "onreadystatechange", function(t) {
return l.wrap(t, undefined, e);
}) : n.onreadystatechange = e, s.apply(this, arguments);
};
}, e);
}
t.xhr && "fetch" in L && A(L, "fetch", function(c) {
return function(t, e) {
for (var n = new Array(arguments.length), o = 0; o < n.length; ++o) n[o] = arguments[o];
var r, s = n[0], i = "GET";
"string" == typeof s ? r = s : "Request" in L && s instanceof L.Request ? (r = s.url, 
s.method && (i = s.method)) : r = "" + s, n[1] && n[1].method && (i = n[1].method);
var a = {
method: i,
url: r,
status_code: null
};
return l.captureBreadcrumb({
type: "http",
category: "fetch",
data: a
}), c.apply(this, n).then(function(t) {
return a.status_code = t.status, t;
});
};
}, e), t.dom && this._hasDocument && (O.addEventListener ? (O.addEventListener("click", l._breadcrumbEventHandler("click"), !1), 
O.addEventListener("keypress", l._keypressEventHandler(), !1)) : (O.attachEvent("onclick", l._breadcrumbEventHandler("click")), 
O.attachEvent("onkeypress", l._keypressEventHandler())));
var o = L.chrome, r = !(o && o.app && o.app.runtime) && L.history && history.pushState && history.replaceState;
if (t.location && r) {
var s = L.onpopstate;
L.onpopstate = function() {
var t = l._location.href;
if (l._captureUrlChange(l._lastHref, t), s) return s.apply(this, arguments);
};
var a = function(r) {
return function(t, e, n) {
var o = 2 < arguments.length ? n : undefined;
return o && l._captureUrlChange(l._lastHref, o + ""), r.apply(this, arguments);
};
};
A(history, "pushState", a, e), A(history, "replaceState", a, e);
}
if (t.console && "console" in L && console.log) {
var c = function(t, e) {
l.captureBreadcrumb({
message: t,
level: e.level,
category: "console"
});
};
m([ "debug", "info", "warn", "error", "log" ], function(t, e) {
N(console, e, c);
});
}
},
_restoreBuiltIns: function() {
for (var t; this._wrappedBuiltIns.length; ) {
var e = (t = this._wrappedBuiltIns.shift())[0], n = t[1], o = t[2];
e[n] = o;
}
},
_drainPlugins: function() {
var r = this;
m(this._plugins, function(t, e) {
var n = e[0], o = e[1];
n.apply(r, [ r ].concat(o));
});
},
_parseDSN: function(t) {
var e = R.exec(t), n = {}, o = 7;
try {
for (;o--; ) n[D[o]] = e[o] || "";
} catch (B) {
throw new c("Invalid DSN: " + t);
}
if (n.pass && !this._globalOptions.allowSecretKey) throw new c("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
return n;
},
_getGlobalServer: function(t) {
var e = "//" + t.host + (t.port ? ":" + t.port : "");
return t.protocol && (e = t.protocol + ":" + e), e;
},
_handleOnErrorStackInfo: function() {
this._ignoreOnError || this._handleStackInfo.apply(this, arguments);
},
_handleStackInfo: function(t, e) {
var n = this._prepareFrames(t, e);
this._triggerEvent("handle", {
stackInfo: t,
options: e
}), this._processException(t.name, t.message, t.url, t.lineno, n, e);
},
_prepareFrames: function(o, t) {
var r = this, s = [];
if (o.stack && o.stack.length && (m(o.stack, function(t, e) {
var n = r._normalizeFrame(e, o.url);
n && s.push(n);
}), t && t.trimHeadFrames)) for (var e = 0; e < t.trimHeadFrames && e < s.length; e++) s[e].in_app = !1;
return s = s.slice(0, this._globalOptions.stackTraceLimit);
},
_normalizeFrame: function(t, e) {
var n = {
filename: t.url,
lineno: t.line,
colno: t.column,
"function": t.func || "?"
};
return t.url || (n.filename = e), n.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n["function"]) || /raven\.(min\.)?js$/.test(n.filename)), 
n;
},
_processException: function(t, e, n, o, r, s) {
var i, a = (t ? t + ": " : "") + (e || "");
if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e) && !this._globalOptions.ignoreErrors.test(a)) && (r && r.length ? (n = r[0].filename || n, 
r.reverse(), i = {
frames: r
}) : n && (i = {
frames: [ {
filename: n,
lineno: o,
in_app: !0
} ]
}), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
var c = y({
exception: {
values: [ {
type: t,
value: e,
stacktrace: i
} ]
},
culprit: n
}, s);
this._send(c);
}
},
_trimPacket: function(t) {
var e = this._globalOptions.maxMessageLength;
if (t.message && (t.message = b(t.message, e)), t.exception) {
var n = t.exception.values[0];
n.value = b(n.value, e);
}
var o = t.request;
return o && (o.url && (o.url = b(o.url, this._globalOptions.maxUrlLength)), o.Referer && (o.Referer = b(o.Referer, this._globalOptions.maxUrlLength))), 
t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs), t;
},
_trimBreadcrumbs: function(t) {
for (var e, n, o, r = [ "to", "from", "url" ], s = 0; s < t.values.length; ++s) if ((n = t.values[s]).hasOwnProperty("data") && u(n.data) && !_(n.data)) {
o = y({}, n.data);
for (var i = 0; i < r.length; ++i) e = r[i], o.hasOwnProperty(e) && o[e] && (o[e] = b(o[e], this._globalOptions.maxUrlLength));
t.values[s].data = o;
}
},
_getHttpData: function() {
if (this._hasNavigator || this._hasDocument) {
var t = {};
return this._hasNavigator && P.userAgent && (t.headers = {
"User-Agent": navigator.userAgent
}), this._hasDocument && (O.location && O.location.href && (t.url = O.location.href), 
O.referrer && (t.headers || (t.headers = {}), t.headers.Referer = O.referrer)), 
t;
}
},
_resetBackoff: function() {
this._backoffDuration = 0, this._backoffStart = null;
},
_shouldBackoff: function() {
return this._backoffDuration && r() - this._backoffStart < this._backoffDuration;
},
_isRepeatData: function(t) {
var e = this._lastData;
return !(!e || t.message !== e.message || t.culprit !== e.culprit) && (t.stacktrace || e.stacktrace ? k(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || C(t.exception, e.exception));
},
_setBackoffState: function(t) {
if (!this._shouldBackoff()) {
var e = t.status;
if (400 === e || 401 === e || 429 === e) {
var n;
try {
n = t.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10);
} catch (B) {}
this._backoffDuration = n || (2 * this._backoffDuration || 1e3), this._backoffStart = r();
}
}
},
_send: function(t) {
var e = this._globalOptions, n = {
project: this._globalProject,
logger: e.logger,
platform: "javascript"
}, o = this._getHttpData();
o && (n.request = o), t.trimHeadFrames && delete t.trimHeadFrames, (t = y(n, t)).tags = y(y({}, this._globalContext.tags), t.tags), 
t.extra = y(y({}, this._globalContext.extra), t.extra), t.extra["session:duration"] = r() - this._startTime, 
this._breadcrumbs && 0 < this._breadcrumbs.length && (t.breadcrumbs = {
values: [].slice.call(this._breadcrumbs, 0)
}), i(t.tags) && delete t.tags, this._globalContext.user && (t.user = this._globalContext.user), 
e.environment && (t.environment = e.environment), e.release && (t.release = e.release), 
e.serverName && (t.server_name = e.serverName), d(e.dataCallback) && (t = e.dataCallback(t) || t), 
t && !i(t) && (d(e.shouldSendCallback) && !e.shouldSendCallback(t) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", t) : "number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t)));
},
_getUuid: function() {
return S();
},
_sendProcessedPayload: function(e, n) {
var o = this, t = this._globalOptions;
if (this.isSetup()) if (e = this._trimPacket(e), this._globalOptions.allowDuplicates || !this._isRepeatData(e)) {
this._lastEventId = e.event_id || (e.event_id = this._getUuid()), this._lastData = e, 
this._logDebug("debug", "Raven about to send:", e);
var r = {
sentry_version: "7",
sentry_client: "raven-js/" + this.VERSION,
sentry_key: this._globalKey
};
this._globalSecret && (r.sentry_secret = this._globalSecret);
var s = e.exception && e.exception.values[0];
this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
category: "sentry",
message: s ? (s.type ? s.type + ": " : "") + s.value : e.message,
event_id: e.event_id,
level: e.level || "error"
});
var i = this._globalEndpoint;
(t.transport || this._makeRequest).call(this, {
url: i,
auth: r,
data: e,
options: t,
onSuccess: function a() {
o._resetBackoff(), o._triggerEvent("success", {
data: e,
src: i
}), n && n();
},
onError: function c(t) {
o._logDebug("error", "Raven transport failed to send: ", t), t.request && o._setBackoffState(t.request), 
o._triggerEvent("failure", {
data: e,
src: i
}), t = t || new Error("Raven send failed (no additional details provided)"), n && n(t);
}
});
} else this._logDebug("warn", "Raven dropped repeat event: ", e);
},
_makeRequest: function(e) {
var n = L.XMLHttpRequest && new L.XMLHttpRequest();
if (n && ("withCredentials" in n || "undefined" != typeof XDomainRequest)) {
var t = e.url;
"withCredentials" in n ? n.onreadystatechange = function() {
if (4 === n.readyState) if (200 === n.status) e.onSuccess && e.onSuccess(); else if (e.onError) {
var t = new Error("Sentry error code: " + n.status);
t.request = n, e.onError(t);
}
} : (n = new XDomainRequest(), t = t.replace(/^https?:/, ""), e.onSuccess && (n.onload = e.onSuccess), 
e.onError && (n.onerror = function() {
var t = new Error("Sentry error code: XDomainRequest");
t.request = n, e.onError(t);
})), n.open("POST", t + "?" + w(e.auth)), n.send(o(e.data));
}
},
_logDebug: function(t) {
this._originalConsoleMethods[t] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1));
},
_mergeContext: function(t, e) {
h(e) ? delete this._globalContext[t] : this._globalContext[t] = y(this._globalContext[t] || {}, e);
}
}, e.prototype.setUser = e.prototype.setUserContext, e.prototype.setReleaseContext = e.prototype.setRelease, 
M.exports = e;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
1: 1,
2: 2,
5: 5,
6: 6,
7: 7
} ],
4: [ function(s, i) {
(function(t) {
var e = s(3), n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, o = n.Raven, r = new e();
r.noConflict = function() {
return n.Raven = o, r;
}, r.afterLoad(), i.exports = r;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
3: 3
} ],
5: [ function(t, I) {
(function(t) {
function e(t) {
return "object" == typeof t && null !== t;
}
function n(t) {
switch ({}.toString.call(t)) {
case "[object Error]":
case "[object Exception]":
case "[object DOMException]":
return !0;

default:
return t instanceof Error;
}
}
function o(t) {
return l() && "[object ErrorEvent]" === {}.toString.call(t);
}
function r(t) {
return void 0 === t;
}
function s(t) {
return "function" == typeof t;
}
function c(t) {
return "[object String]" === Object.prototype.toString.call(t);
}
function i(t) {
return "[object Array]" === Object.prototype.toString.call(t);
}
function a(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}
function l() {
try {
return new ErrorEvent(""), !0;
} catch (B) {
return !1;
}
}
function u(o) {
function t(t, e) {
var n = o(t) || t;
return e && e(n) || n;
}
return t;
}
function p(t, e) {
var n, o;
if (r(t.length)) for (n in t) g(t, n) && e.call(null, n, t[n]); else if (o = t.length) for (n = 0; n < o; n++) e.call(null, n, t[n]);
}
function h(n, t) {
return t && p(t, function(t, e) {
n[t] = e;
}), n;
}
function d(t) {
return !!Object.isFrozen && Object.isFrozen(t);
}
function f(t, e) {
return !e || t.length <= e ? t : t.substr(0, e) + "\u2026";
}
function g(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function m(t) {
for (var e, n = [], o = 0, r = t.length; o < r; o++) c(e = t[o]) ? n.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && n.push(e.source);
return new RegExp(n.join("|"), "i");
}
function y(t) {
var n = [];
return p(t, function(t, e) {
n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
}), n.join("&");
}
function b(t) {
var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
if (!e) return {};
var n = e[6] || "", o = e[8] || "";
return {
protocol: e[2],
host: e[4],
path: e[5],
relative: e[5] + n + o
};
}
function _() {
var t = k.crypto || k.msCrypto;
if (r(t) || !t.getRandomValues) return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
var e = 16 * Math.random() | 0;
return ("x" === t ? e : 3 & e | 8).toString(16);
});
var e = new Uint16Array(8);
t.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768;
var n = function(t) {
for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
return e;
};
return n(e[0]) + n(e[1]) + n(e[2]) + n(e[3]) + n(e[4]) + n(e[5]) + n(e[6]) + n(e[7]);
}
function v(t) {
for (var e, n = 5, o = 80, r = [], s = 0, i = 0, a = " > ", c = a.length; t && s++ < n && !("html" === (e = E(t)) || 1 < s && i + r.length * c + e.length >= o); ) r.push(e), 
i += e.length, t = t.parentNode;
return r.reverse().join(a);
}
function E(t) {
var e, n, o, r, s, i = [];
if (!t || !t.tagName) return "";
if (i.push(t.tagName.toLowerCase()), t.id && i.push("#" + t.id), (e = t.className) && c(e)) for (n = e.split(/\s+/), 
s = 0; s < n.length; s++) i.push("." + n[s]);
var a = [ "type", "name", "title", "alt" ];
for (s = 0; s < a.length; s++) o = a[s], (r = t.getAttribute(o)) && i.push("[" + o + '="' + r + '"]');
return i.join("");
}
function w(t, e) {
return !!(!!t ^ !!e);
}
function S(t, e) {
return !w(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && T(t.stacktrace, e.stacktrace));
}
function T(t, e) {
if (w(t, e)) return !1;
var n, o, r = t.frames, s = e.frames;
if (r.length !== s.length) return !1;
for (var i = 0; i < r.length; i++) if (n = r[i], o = s[i], n.filename !== o.filename || n.lineno !== o.lineno || n.colno !== o.colno || n["function"] !== o["function"]) return !1;
return !0;
}
function C(t, e, n, o) {
var r = t[e];
t[e] = n(r), t[e].__raven__ = !0, t[e].__orig__ = r, o && o.push([ t, e, r ]);
}
var k = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
I.exports = {
isObject: e,
isError: n,
isErrorEvent: o,
isUndefined: r,
isFunction: s,
isString: c,
isArray: i,
isEmptyObject: a,
supportsErrorEvent: l,
wrappedCallback: u,
each: p,
objectMerge: h,
truncate: f,
objectFrozen: d,
hasKey: g,
joinRegExp: m,
urlencode: y,
uuid4: _,
htmlTreeAsString: v,
htmlElementAsString: E,
isSameException: S,
isSameStacktrace: T,
parseUrl: b,
fill: C
};
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
6: [ function(n, o) {
(function(t) {
function g() {
return "undefined" == typeof document || null == document.location ? "" : document.location.href;
}
var m = n(5), y = {
collectWindowErrors: !0,
debug: !1
}, b = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, _ = [].slice, v = "?", E = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
y.report = function w() {
function t(t) {
r(), c.push(t);
}
function e(t) {
for (var e = c.length - 1; 0 <= e; --e) c[e] === t && c.splice(e, 1);
}
function n() {
s(), c = [];
}
function l(t, e) {
var n = null;
if (!e || y.collectWindowErrors) {
for (var o in c) if (c.hasOwnProperty(o)) try {
c[o].apply(null, [ t ].concat(_.call(arguments, 2)));
} catch (r) {
n = r;
}
if (n) throw n;
}
}
function o(t, e, n, o, r) {
if (f) y.computeStackTrace.augmentStackTraceWithInitialElement(f, e, n, t), u(); else if (r && m.isError(r)) l(y.computeStackTrace(r), !0); else {
var s, i = {
url: e,
line: n,
column: o
}, a = undefined, c = t;
if ("[object String]" === {}.toString.call(t)) (s = t.match(E)) && (a = s[1], c = s[2]);
i.func = v, l({
name: a,
message: c,
url: g(),
stack: [ i ]
}, !0);
}
return !!p && p.apply(this, arguments);
}
function r() {
a || (p = b.onerror, b.onerror = o, a = !0);
}
function s() {
a && (b.onerror = p, a = !1, p = undefined);
}
function u() {
var t = f, e = h;
d = f = h = null, l.apply(null, [ t, !1 ].concat(e));
}
function i(t, e) {
var n = _.call(arguments, 1);
if (f) {
if (d === t) return;
u();
}
var o = y.computeStackTrace(t);
if (f = o, d = t, h = n, setTimeout(function() {
d === t && u();
}, o.incomplete ? 2e3 : 0), !1 !== e) throw t;
}
var p, a, c = [], h = null, d = null, f = null;
return i.subscribe = t, i.unsubscribe = e, i.uninstall = n, i;
}(), y.computeStackTrace = function e() {
function o(t) {
if ("undefined" != typeof t.stack && t.stack) {
for (var e, n, o, r = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, l = t.stack.split("\n"), u = [], p = (/^(.*) is undefined$/.exec(t.message), 
0), h = l.length; p < h; ++p) {
if (n = r.exec(l[p])) {
var d = n[2] && 0 === n[2].indexOf("native");
n[2] && 0 === n[2].indexOf("eval") && (e = c.exec(n[2])) && (n[2] = e[1], n[3] = e[2], 
n[4] = e[3]), o = {
url: d ? null : n[2],
func: n[1] || v,
args: d ? [ n[2] ] : [],
line: n[3] ? +n[3] : null,
column: n[4] ? +n[4] : null
};
} else if (n = i.exec(l[p])) o = {
url: n[2],
func: n[1] || v,
args: [],
line: +n[3],
column: n[4] ? +n[4] : null
}; else {
if (!(n = s.exec(l[p]))) continue;
n[3] && -1 < n[3].indexOf(" > eval") && (e = a.exec(n[3])) ? (n[3] = e[1], n[4] = e[2], 
n[5] = null) : 0 !== p || n[5] || "undefined" == typeof t.columnNumber || (u[0].column = t.columnNumber + 1), 
o = {
url: n[3],
func: n[1] || v,
args: n[2] ? n[2].split(",") : [],
line: n[4] ? +n[4] : null,
column: n[5] ? +n[5] : null
};
}
!o.func && o.line && (o.func = v), u.push(o);
}
return u.length ? {
name: t.name,
message: t.message,
url: g(),
stack: u
} : null;
}
}
function u(t, e, n) {
var o = {
url: e,
line: n
};
if (o.url && o.line) {
if (t.incomplete = !1, o.func || (o.func = v), 0 < t.stack.length && t.stack[0].url === o.url) {
if (t.stack[0].line === o.line) return !1;
if (!t.stack[0].line && t.stack[0].func === o.func) return t.stack[0].line = o.line, 
!1;
}
return t.stack.unshift(o), t.partial = !0;
}
return !(t.incomplete = !0);
}
function p(t, e) {
for (var n, o, r = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, s = [], i = {}, a = !1, c = p.caller; c && !a; c = c.caller) if (c !== h && c !== y.report) {
if (o = {
url: null,
func: v,
line: null,
column: null
}, c.name ? o.func = c.name : (n = r.exec(c.toString())) && (o.func = n[1]), "undefined" == typeof o.func) try {
o.func = n.input.substring(0, n.input.indexOf("{"));
} catch (B) {}
i["" + c] ? a = !0 : i["" + c] = !0, s.push(o);
}
e && s.splice(0, e);
var l = {
name: t.name,
message: t.message,
url: g(),
stack: s
};
return u(l, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), 
l;
}
function h(t, e) {
var n = null;
e = null == e ? 0 : +e;
try {
if (n = o(t)) return n;
} catch (B) {
if (y.debug) throw B;
}
try {
if (n = p(t, e + 1)) return n;
} catch (B) {
if (y.debug) throw B;
}
return {
name: t.name,
message: t.message,
url: g()
};
}
return h.augmentStackTraceWithInitialElement = u, h.computeStackTraceFromStackProp = o, 
h;
}(), o.exports = y;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
5: 5
} ],
7: [ function(t, e) {
function a(t, e) {
for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
return -1;
}
function n(t, e, n, o) {
return JSON.stringify(t, r(e, o), n);
}
function c(t) {
var e = {
stack: t.stack,
message: t.message,
name: t.name
};
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
return e;
}
function r(o, r) {
var s = [], i = [];
return null == r && (r = function(t, e) {
return s[0] === e ? "[Circular ~]" : "[Circular ~." + i.slice(0, a(s, e)).join(".") + "]";
}), function(t, e) {
if (0 < s.length) {
var n = a(s, this);
~n ? s.splice(n + 1) : s.push(this), ~n ? i.splice(n, Infinity, t) : i.push(t), 
~a(s, e) && (e = r.call(this, t, e));
} else s.push(e);
return null == o ? e instanceof Error ? c(e) : e : o.call(this, t, e);
};
}
(e.exports = n).getSerialize = r;
}, {} ]
}, {}, [ 4 ])(4);
}), 
/*
 * Copyright 2013-2021 Thibaut Courouble and other contributors
 *
 * This source code is licensed under the terms of the Mozilla
 * Public License, v. 2.0, a copy of which may be obtained at:
 * http://mozilla.org/MPL/2.0/
 */
function() {}.call(this), function() {
var s, n, o, r, i, a, c, l, u, p, h, d, e;
s = {
json: "application/json",
html: "text/html"
}, this.ajax = function(t) {
var e;
return r(t), d(t), (e = new XMLHttpRequest()).open(t.type, t.url, t.async), o(e, t), 
i(e, t), e.send(t.data), t.async ? {
abort: n.bind(void 0, e)
} : h(e, t);
}, ajax.defaults = {
async: !0,
dataType: "json",
timeout: 30,
type: "GET"
}, r = function(t) {
var e;
for (e in ajax.defaults) null == t[e] && (t[e] = ajax.defaults[e]);
}, d = function(t) {
t.data && ("GET" === t.type ? (t.url += "?" + e(t.data), t.data = null) : t.data = e(t.data));
}, e = function(e) {
var n, o;
return function() {
var t;
for (n in t = [], e) o = e[n], t.push(encodeURIComponent(n) + "=" + encodeURIComponent(o));
return t;
}().join("&");
}, o = function(t, e) {
e.async && (t.timer = setTimeout(u.bind(void 0, t, e), 1e3 * e.timeout), e.progress && (t.onprogress = e.progress), 
t.onreadystatechange = function() {
4 === t.readyState && (clearTimeout(t.timer), a(t, e));
});
}, i = function(t, e) {
var n, o, r;
for (n in e.headers || (e.headers = {}), e.contentType && (e.headers["Content-Type"] = e.contentType), 
!e.headers["Content-Type"] && e.data && "GET" !== e.type && (e.headers["Content-Type"] = "application/x-www-form-urlencoded"), 
e.dataType && (e.headers.Accept = s[e.dataType] || e.dataType), o = e.headers) r = o[n], 
t.setRequestHeader(n, r);
}, a = function(t, e) {
var n, o;
200 <= (n = t.status) && n < 300 ? null != (o = h(t, e)) ? l(o, t, e) : c("invalid", t, e) : c("error", t, e);
}, l = function(t, e, n) {
var o;
null != (o = n.success) && o.call(n.context, t, e, n);
}, c = function(t, e, n) {
var o;
null != (o = n.error) && o.call(n.context, t, e, n);
}, u = function(t, e) {
t.abort(), c("timeout", t, e);
}, n = function(t) {
clearTimeout(t.timer), t.onreadystatechange = null, t.abort();
}, h = function(t, e) {
return "json" === e.dataType ? p(t.responseText) : t.responseText;
}, p = function(t) {
try {
return JSON.parse(t);
} catch (error) {}
};
}.call(this), function() {
this.CookiesStore = function() {
function t() {}
var n;
return n = /^\d+$/, t.onBlocked = function() {}, t.prototype.get = function(t) {
var e;
return null != (e = Cookies.get(t)) && n.test(e) && (e = parseInt(e, 10)), e;
}, t.prototype.set = function(t, e) {
!1 !== e ? (!0 === e && (e = 1), e && ("function" == typeof n.test ? n.test(e) : void 0) && (e = parseInt(e, 10)), 
Cookies.set(t, "" + e, {
path: "/",
expires: 1e8
}), this.get(t) !== e && this.constructor.onBlocked(t, e, this.get(t))) : this.del(t);
}, t.prototype.del = function(t) {
Cookies.expire(t);
}, t.prototype.reset = function() {
var t, e, n, o;
try {
for (o = document.cookie.split(/;\s?/), e = 0, n = o.length; e < n; e++) t = o[e], 
Cookies.expire(t.split("=")[0]);
} catch (error) {}
}, t.prototype.dump = function() {
var t, e, n, o, r;
for (r = {}, e = 0, n = (o = document.cookie.split(/;\s?/)).length; e < n; e++) "_" !== (t = o[e])[0] && (r[(t = t.split("="))[0]] = t[1]);
return r;
}, t;
}();
}.call(this), function() {
var l = [].slice;
this.Events = {
on: function(t, e) {
var n, o, r, s, i;
if (0 <= t.indexOf(" ")) for (o = 0, r = (i = t.split(" ")).length; o < r; o++) s = i[o], 
this.on(s, e); else (null != (n = null != this._callbacks ? this._callbacks : this._callbacks = {})[t] ? n[t] : n[t] = []).push(e);
return this;
},
off: function(t, e) {
var n, o, r, s, i, a, c;
if (0 <= t.indexOf(" ")) for (o = 0, s = (a = t.split(" ")).length; o < s; o++) i = a[o], 
this.off(i, e); else (n = null != (c = this._callbacks) ? c[t] : void 0) && 0 <= (r = n.indexOf(e)) && (n.splice(r, 1), 
n.length || delete this._callbacks[t]);
return this;
},
trigger: function(t) {
var e, n, o, r, s, i, a, c;
if (r = t, e = 2 <= arguments.length ? l.call(arguments, 1) : [], this.eventInProgress = {
name: r,
args: e
}, o = null != (a = this._callbacks) ? a[r] : void 0) for (s = 0, i = (c = o.slice(0)).length; s < i; s++) "function" == typeof (n = c[s]) && n.apply(null, e);
return this.eventInProgress = null, "all" !== r && this.trigger.apply(this, [ "all", r ].concat(l.call(e))), 
this;
},
removeEvent: function(t) {
var e, n, o, r;
if (null != this._callbacks) for (e = 0, n = (r = t.split(" ")).length; e < n; e++) o = r[e], 
delete this._callbacks[o];
return this;
}
};
}.call(this), function() {
var g, s, o, m, i;
g = s = null, o = {}, m = {}, i = function(t, e) {
var n;
return o[t] ? e(o[t]) : ((n = new Image()).crossOrigin = "anonymous", n.src = t, 
n.onload = function() {
return o[t] = n, e(n);
});
}, this.setFaviconForDoc = function(u) {
var t, e, n, p, o, h, d, f, r;
if (g !== u.slug) {
if (p = $('link[rel="icon"]'), null === s && (s = p.href), m[u.slug]) return p.href = m[u.slug], 
void (g = u.slug);
if (null !== (o = $("._icon-" + u.slug.split("~")[0])) && (t = (r = window.getComputedStyle(o, ":before"))["background-position-x"], 
e = r["background-position-y"], void 0 !== t && void 0 !== e)) return n = app.config.favicon_spritesheet, 
h = 16, d = Math.abs(parseInt(t.slice(0, -2))), f = Math.abs(parseInt(e.slice(0, -2))), 
i(n, function(l) {
return i(s, function(t) {
var e, n, o, r, s, i, a;
a = t.width, n = (e = document.createElement("canvas")).getContext("2d"), e.width = a, 
e.height = a, n.drawImage(t, 0, 0), o = a / 100 * (100 - (s = 65)), r = a / 100 * s, 
n.drawImage(l, d, f, h, h, o, o, r, r);
try {
return m[u.slug] = e.toDataURL(), p.href = m[u.slug], g = u.slug;
} catch (c) {
return i = c, Raven.captureException(i, {
level: "info"
}), this.resetFavicon();
}
});
});
}
}, this.resetFavicon = function() {
if (null !== s && null !== g) return $('link[rel="icon"]').href = s, g = null;
};
}.call(this), function() {
this.LocalStorageStore = function() {
function t() {}
return t.prototype.get = function(t) {
try {
return JSON.parse(localStorage.getItem(t));
} catch (error) {}
}, t.prototype.set = function(t, e) {
try {
return localStorage.setItem(t, JSON.stringify(e)), !0;
} catch (error) {}
}, t.prototype.del = function(t) {
try {
return localStorage.removeItem(t), !0;
} catch (error) {}
}, t.prototype.reset = function() {
try {
return localStorage.clear(), !0;
} catch (error) {}
}, t;
}();
}.call(this), 
/*
 * Based on github.com/visionmedia/page.js
 * Licensed under the MIT license
 * Copyright 2012 TJ Holowaychuk <tj@vision-media.ca>
 */
function() {
var i, o, s, e, a, r, n, c, l, u, p, h, d;
u = !1, a = null, s = [], this.page = function(t, e) {
var n;
"function" == typeof t ? page("*", t) : "function" == typeof e ? (n = new o(t), 
s.push(n.middleware(e))) : "string" == typeof t ? page.show(t, e) : page.start(t);
}, page.start = function(t) {
null == t && (t = {}), u || (u = !0, addEventListener("popstate", c), addEventListener("click", n), 
page.replace(e(), null, null, !0));
}, page.stop = function() {
u && (u = !1, removeEventListener("click", n), removeEventListener("popstate", c));
}, page.show = function(t, e) {
var n, o, r;
if (t !== (null != a ? a.path : void 0)) return n = new i(t, e), o = a, a = n.state, 
(r = page.dispatch(n)) ? (a = o, location.assign(r)) : (n.pushState(), d(), p()), 
n;
}, page.replace = function(t, e, n, o) {
var r, s;
return (r = new i(t, e || a)).init = o, a = r.state, n || (s = page.dispatch(r)), 
s && ((r = new i(s)).init = o, a = r.state, page.dispatch(r)), r.replaceState(), 
d(), n || p(), r;
}, page.dispatch = function(n) {
var o, r;
return o = 0, (r = function() {
var t, e;
return (t = s[o++]) && (e = t(n, r)), e;
})();
}, page.canGoBack = function() {
return !i.isIntialState(a);
}, page.canGoForward = function() {
return !i.isLastState(a);
}, e = function() {
return location.pathname + location.search + location.hash;
}, i = function() {
function t(t, e) {
var n, o, r;
this.path = null != t ? t : "/", this.state = null != e ? e : {}, this.pathname = this.path.replace(/(?:\?([^#]*))?(?:#(.*))?$/, (r = this, 
function(t, e, n) {
return r.query = e, r.hash = n, "";
})), null == (n = this.state).id && (n.id = this.constructor.stateId++), null == (o = this.state).sessionId && (o.sessionId = this.constructor.sessionId), 
this.state.path = this.path;
}
return t.initialPath = e(), t.sessionId = Date.now(), t.stateId = 0, t.isIntialState = function(t) {
return 0 === t.id;
}, t.isLastState = function(t) {
return t.id === this.stateId - 1;
}, t.isInitialPopState = function(t) {
return t.path === this.initialPath && 1 === this.stateId;
}, t.isSameSession = function(t) {
return t.sessionId === this.sessionId;
}, t.prototype.pushState = function() {
history.pushState(this.state, "", this.path);
}, t.prototype.replaceState = function() {
try {
history.replaceState(this.state, "", this.path);
} catch (error) {}
}, t;
}(), o = function() {
function t(t, e) {
this.path = t, null == e && (e = {}), this.keys = [], this.regexp = l(this.path, this.keys);
}
return t.prototype.middleware = function(o) {
return r = this, function(t, e) {
var n;
return r.match(t.pathname, n = []) ? (t.params = n, o(t, e)) : e();
};
var r;
}, t.prototype.match = function(t, e) {
var n, o, r, s, i, a, c;
if (i = this.regexp.exec(t)) {
for (n = o = 0, s = (a = i.slice(1)).length; o < s; n = ++o) "string" == typeof (c = a[n]) && (c = decodeURIComponent(c)), 
(r = this.keys[n]) ? e[r.name] = c : e.push(c);
return !0;
}
}, t;
}(), l = function(t, a) {
return t instanceof RegExp ? t : (t instanceof Array && (t = "(" + t.join("|") + ")"), 
t = t.replace(/\/\(/g, "(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(t, e, n, o, r, s) {
var i;
return null == e && (e = ""), null == n && (n = ""), a.push({
name: o,
optional: !!s
}), i = s ? "" : e, i += "(?:", s && (i += e), i += n, i += r || (n ? "([^/.]+?)" : "([^/]+?)"), 
i += ")", s && (i += s), i;
}).replace(/([\/.])/g, "\\$1").replace(/\*/g, "(.*)"), new RegExp("^" + t + "$"));
}, c = function(t) {
t.state && !i.isInitialPopState(t.state) && (i.isSameSession(t.state) ? page.replace(t.state.path, t.state) : location.reload());
}, n = function(t) {
var e, n;
try {
if (1 !== t.which || t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented) return;
} catch (error) {
return;
}
for (e = $.eventTarget(t); e && "A" !== e.tagName; ) e = e.parentNode;
e && !e.target && r(e.href) && (t.preventDefault(), n = (n = e.pathname + e.search + e.hash).replace(/^\/\/+/, "/"), 
page.show(n));
}, r = function(t) {
return 0 === t.indexOf(location.protocol + "//" + location.hostname);
}, d = function() {
return this.canonicalLink || (this.canonicalLink = document.head.querySelector('link[rel="canonical"]')), 
this.canonicalLink.setAttribute("href", "https://" + location.host + location.pathname);
}, h = [], page.track = function(t) {
h.push(t);
}, p = function() {
var t, e, n, o;
if ("production" === app.config.env) if (e = Cookies.get("analyticsConsent"), t = Cookies.get("analyticsConsentAsked"), 
"1" === e) for (n = 0, o = h.length; n < o; n++) h[n].call(); else void 0 === e && void 0 === t && (Cookies.set("analyticsConsentAsked", "1"), 
new app.views.Notif("AnalyticsConsent", {
autoHide: null
}));
}, this.resetAnalytics = function() {
var t, e, n, o;
for (t = 0, e = (o = document.cookie.split(/;\s?/)).length; t < e; t++) "_" === (n = o[t].split("=")[0])[0] && "_" !== n[1] && Cookies.expire(n);
};
}.call(this), function() {
var e, n, o, r, s, i, a, c, l, u, p, h, d, f, g, m = [].slice;
this.$ = function(t, e) {
null == e && (e = document);
try {
return e.querySelector(t);
} catch (error) {}
}, this.$$ = function(t, e) {
null == e && (e = document);
try {
return e.querySelectorAll(t);
} catch (error) {}
}, $.id = function(t) {
return document.getElementById(t);
}, $.hasChild = function(t, e) {
if (t) for (;e; ) {
if (e === t) return !0;
if (e === document.body) return;
e = e.parentNode;
}
}, $.closestLink = function(t, e) {
for (null == e && (e = document.body); t; ) {
if ("A" === t.tagName) return t;
if (t === e) return;
t = t.parentNode;
}
}, $.on = function(t, e, n, o) {
var r, s, i, a;
if (null == o && (o = !1), 0 <= e.indexOf(" ")) for (r = 0, s = (a = e.split(" ")).length; r < s; r++) i = a[r], 
$.on(t, i, n); else t.addEventListener(e, n, o);
}, $.off = function(t, e, n, o) {
var r, s, i, a;
if (null == o && (o = !1), 0 <= e.indexOf(" ")) for (r = 0, s = (a = e.split(" ")).length; r < s; r++) i = a[r], 
$.off(t, i, n); else t.removeEventListener(e, n, o);
}, $.trigger = function(t, e, n, o) {
var r;
null == n && (n = !0), null == o && (o = !0), (r = document.createEvent("Event")).initEvent(e, n, o), 
t.dispatchEvent(r);
}, $.click = function(t) {
var e;
(e = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, window, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
t.dispatchEvent(e);
}, $.stopEvent = function(t) {
t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
}, $.eventTarget = function(t) {
return t.target.correspondingUseElement || t.target;
}, s = function(t) {
var e, n, o, r, s;
if (n = document.createDocumentFragment(), $.isCollection(t)) for (o = 0, r = (s = $.makeArray(t)).length; o < r; o++) e = s[o], 
n.appendChild(e); else n.innerHTML = t;
return n;
}, $.append = function(t, e) {
"string" == typeof e ? t.insertAdjacentHTML("beforeend", e) : ($.isCollection(e) && (e = s(e)), 
t.appendChild(e));
}, $.prepend = function(t, e) {
t.firstChild ? "string" == typeof e ? t.insertAdjacentHTML("afterbegin", e) : ($.isCollection(e) && (e = s(e)), 
t.insertBefore(e, t.firstChild)) : $.append(e);
}, $.before = function(t, e) {
("string" == typeof e || $.isCollection(e)) && (e = s(e)), t.parentNode.insertBefore(e, t);
}, $.after = function(t, e) {
("string" == typeof e || $.isCollection(e)) && (e = s(e)), t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e);
}, $.remove = function(t) {
var e, n, o, r, s, i;
if ($.isCollection(t)) for (n = 0, o = (r = $.makeArray(t)).length; n < o; n++) null != (s = (e = r[n]).parentNode) && s.removeChild(e); else null != (i = t.parentNode) && i.removeChild(t);
}, $.empty = function(t) {
for (;t.firstChild; ) t.removeChild(t.firstChild);
}, $.batchUpdate = function(t, e) {
var n, o;
n = t.parentNode, o = t.nextSibling, n.removeChild(t), e(t), o ? n.insertBefore(t, o) : n.appendChild(t);
}, $.rect = function(t) {
return t.getBoundingClientRect();
}, $.offset = function(t, e) {
var n, o;
for (null == e && (e = document.body), n = o = 0; t && t !== e; ) o += t.offsetTop, 
n += t.offsetLeft, t = t.offsetParent;
return {
top: o,
left: n
};
}, $.scrollParent = function(t) {
for (var e, n; (t = t.parentNode) && 1 === t.nodeType && !(0 < t.scrollTop) && "auto" !== (e = null != (n = getComputedStyle(t)) ? n.overflowY : void 0) && "scroll" !== e; ) ;
return t;
}, $.scrollTo = function(t, e, n, o) {
var r, s, i, a, c, l, u, p;
if (null == n && (n = "center"), null == o && (o = {}), t && (null == e && (e = $.scrollParent(t)), 
e && (c = e.clientHeight) < (l = e.scrollHeight))) switch (p = $.offset(t, e).top, 
a = e.firstElementChild.offsetTop, n) {
case "top":
e.scrollTop = p - a - (null != o.margin ? o.margin : 0);
break;

case "center":
e.scrollTop = p - Math.round(c / 2 - t.offsetHeight / 2);
break;

case "continuous":
u = e.scrollTop, r = t.offsetHeight, i = 0 < (s = e.lastElementChild.offsetTop + e.lastElementChild.offsetHeight) ? l - s : 0, 
p - a <= u + r * (o.topGap || 1) ? e.scrollTop = p - a - r * (o.topGap || 1) : p + i >= u + c - r * ((o.bottomGap || 1) + 1) && (e.scrollTop = p + i - c + r * ((o.bottomGap || 1) + 1));
}
}, $.scrollToWithImageLock = function(t, e) {
var r, s, i, n, o, a, c;
if (s = t, a = e, r = 3 <= arguments.length ? m.call(arguments, 2) : [], null == a && (a = $.scrollParent(s)), 
a) for ($.scrollTo.apply($, [ s, a ].concat(m.call(r))), n = 0, o = (c = a.getElementsByTagName("img")).length; n < o; n++) (i = c[n]).complete || function() {
var e, n, o;
e = function(t) {
return clearTimeout(n), o(t.target), $.scrollTo.apply($, [ s, a ].concat(m.call(r)));
}, o = function(t) {
return $.off(t, "load", e);
}, $.on(i, "load", e), n = setTimeout(o.bind(null, i), 3e3);
}();
}, $.lockScroll = function(t, e) {
var n, o;
(n = $.scrollParent(t)) ? (o = $.rect(t).top, n !== document.body && n !== document.documentElement && (o -= $.rect(n).top), 
e(), n.scrollTop = $.offset(t, n).top - o) : e();
}, f = g = d = p = h = null, $.smoothScroll = function(n, t) {
var e, o;
if (window.requestAnimationFrame) return d = t, f ? (e = d - g, h += Math.min(300, Math.abs(p - e)), 
void (p = e)) : (g = n.scrollTop, p = d - g, h = Math.min(300, Math.abs(p)), o = Date.now(), 
f = function() {
var t, e;
return t = Math.min(1, (Date.now() - o) / h), e = Math.max(0, Math.floor(g + p * (t < .5 ? 2 * t * t : t * (4 - 2 * t) - 1))), 
n.scrollTop = e, 1 === t ? f = null : requestAnimationFrame(f);
}, requestAnimationFrame(f));
n.scrollTop = t;
}, $.extend = function(t) {
var e, n, o, r, s, i, a;
for (i = t, e = 0, o = (s = 2 <= arguments.length ? m.call(arguments, 1) : []).length; e < o; e++) if (r = s[e]) for (n in r) a = r[n], 
i[n] = a;
return i;
}, $.makeArray = function(t) {
return Array.isArray(t) ? t : Array.prototype.slice.apply(t);
}, $.arrayDelete = function(t, e) {
var n;
return 0 <= (n = t.indexOf(e)) && (t.splice(n, 1), !0);
}, $.isCollection = function(t) {
return Array.isArray(t) || "function" == typeof (null != t ? t.item : void 0);
}, e = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#x27;",
"/": "&#x2F;"
}, n = /[&<>"'\/]/g, $.escape = function(t) {
return t.replace(n, function(t) {
return e[t];
});
}, o = /([.*+?^=!:${}()|\[\]\/\\])/g, $.escapeRegexp = function(t) {
return t.replace(o, "\\$1");
}, $.urlDecode = function(t) {
return decodeURIComponent(t.replace(/\+/g, "%20"));
}, $.classify = function(t) {
var e, n, o, r;
for (e = n = 0, o = (t = t.split("_")).length; n < o; e = ++n) r = t[e], t[e] = r[0].toUpperCase() + r.slice(1);
return t.join("");
}, $.framify = function(e, n) {
return window.requestAnimationFrame ? function() {
var t;
return t = 1 <= arguments.length ? m.call(arguments, 0) : [], requestAnimationFrame(e.bind.apply(e, [ n ].concat(m.call(t))));
} : e;
}, $.requestAnimationFrame = function(t) {
window.requestAnimationFrame ? requestAnimationFrame(t) : setTimeout(t, 0);
}, $.noop = function() {}, $.popup = function(t) {
var e;
try {
(e = window.open()).opener && (e.opener = null), e.location = t.href || t;
} catch (error) {
window.open(t.href || t, "_blank");
}
}, u = null, $.isMac = function() {
var t;
return null != u ? u : u = 0 <= (null != (t = navigator.userAgent) ? t.indexOf("Mac") : void 0);
}, c = null, $.isIE = function() {
var t, e;
return null != c ? c : c = 0 <= (null != (t = navigator.userAgent) ? t.indexOf("MSIE") : void 0) || 0 <= (null != (e = navigator.userAgent) ? e.indexOf("rv:11.0") : void 0);
}, a = null, $.isChromeForAndroid = function() {
var t;
return null != a ? a : a = 0 <= (null != (t = navigator.userAgent) ? t.indexOf("Android") : void 0) && /Chrome\/([.0-9])+ Mobile/.test(navigator.userAgent);
}, i = null, $.isAndroid = function() {
var t;
return null != i ? i : i = 0 <= (null != (t = navigator.userAgent) ? t.indexOf("Android") : void 0);
}, l = null, $.isIOS = function() {
var t, e;
return null != l ? l : l = 0 <= (null != (t = navigator.userAgent) ? t.indexOf("iPhone") : void 0) || 0 <= (null != (e = navigator.userAgent) ? e.indexOf("iPad") : void 0);
}, $.overlayScrollbarsEnabled = function() {
var t, e;
return !!$.isMac() && ((t = document.createElement("div")).setAttribute("style", "width: 100px; height: 100px; overflow: scroll; position: absolute"), 
document.body.appendChild(t), e = t.offsetWidth === t.clientWidth, document.body.removeChild(t), 
e);
}, r = {
className: "highlight",
delay: 1e3
}, $.highlight = function(t, e) {
null == e && (e = {}), e = $.extend({}, r, e), t.classList.add(e.className), setTimeout(function() {
return t.classList.remove(e.className);
}, e.delay);
}, $.copyToClipboard = function(t) {
var e, n;
(n = document.createElement("textarea")).style.position = "fixed", n.style.opacity = 0, 
n.value = t, document.body.appendChild(n);
try {
n.select(), e = !!document.execCommand("copy");
} catch (error) {
e = !1;
} finally {
document.body.removeChild(n);
}
return e;
};
}.call(this), function() {
var e = [].slice;
this.app = {
_$: $,
_$$: $$,
_page: page,
collections: {},
models: {},
templates: {},
views: {},
init: function() {
try {
this.initErrorTracking();
} catch (t) {}
this.browserCheck() && (this.el = $("._app"), this.localStorage = new LocalStorageStore(), 
app.ServiceWorker.isEnabled() && (this.serviceWorker = new app.ServiceWorker()), 
this.settings = new app.Settings(), this.db = new app.DB(), this.settings.initLayout(), 
this.docs = new app.collections.Docs(), this.disabledDocs = new app.collections.Docs(), 
this.entries = new app.collections.Entries(), this.router = new app.Router(), this.shortcuts = new app.Shortcuts(), 
this.document = new app.views.Document(), this.isMobile() && (this.mobile = new app.views.Mobile()), 
document.body.hasAttribute("data-doc") ? (this.DOC = JSON.parse(document.body.getAttribute("data-doc")), 
this.bootOne()) : this.DOCS ? this.bootAll() : this.onBootError());
},
browserCheck: function() {
return !!this.isSupportedBrowser() || (document.body.innerHTML = app.templates.unsupportedBrowser, 
this.hideLoadingScreen(), !1);
},
initErrorTracking: function() {
var t, e, n;
this.isInvalidLocation() ? new app.views.Notif("InvalidLocation") : (this.config.sentry_dsn && Raven.config(this.config.sentry_dsn, {
release: this.config.release,
whitelistUrls: [ /devdocs/ ],
includePaths: [ /devdocs/ ],
ignoreErrors: [ /NPObject/, /NS_ERROR/, /^null$/, /EvalError/ ],
tags: {
mode: this.isSingleDoc() ? "single" : "full",
iframe: (window.top !== window).toString(),
electron: (!!(null != (t = window.process) && null != (e = t.versions) ? e.electron : void 0)).toString()
},
shouldSendCallback: (n = this, function() {
try {
if (n.isInjectionError()) return n.onInjectionError(), !1;
if (n.isAndroidWebview()) return !1;
} catch (t) {}
return !0;
}),
dataCallback: function(t) {
try {
$.extend(t.user || (t.user = {}), app.settings.dump()), t.user.docs && (t.user.docs = t.user.docs.split("/")), 
app.lastIDBTransaction && (t.user.lastIDBTransaction = app.lastIDBTransaction), 
t.tags.scriptCount = document.scripts.length;
} catch (e) {}
return t;
}
}).install(), this.previousErrorHandler = onerror, window.onerror = this.onWindowError.bind(this), 
CookiesStore.onBlocked = this.onCookieBlocked);
},
bootOne: function() {
this.doc = new app.models.Doc(this.DOC), this.docs.reset([ this.doc ]), this.doc.load(this.start.bind(this), this.onBootError.bind(this), {
readCache: !0
}), new app.views.Notice("singleDoc", this.doc), delete this.DOC;
},
bootAll: function() {
var t, e, n, o, r;
for (e = this.settings.getDocs(), n = 0, o = (r = this.DOCS).length; n < o; n++) t = r[n], 
(0 <= e.indexOf(t.slug) ? this.docs : this.disabledDocs).add(t);
this.migrateDocs(), this.docs.load(this.start.bind(this), this.onBootError.bind(this), {
readCache: !0,
writeCache: !0
}), delete this.DOCS;
},
start: function() {
var t, e, n, o, r, s, i, a, c, l, u;
for (e = 0, r = (a = this.docs.all()).length; e < r; e++) t = a[e], this.entries.add(t.toEntry());
for (n = 0, s = (c = this.disabledDocs.all()).length; n < s; n++) t = c[n], this.entries.add(t.toEntry());
for (o = 0, i = (l = this.docs.all()).length; o < i; o++) t = l[o], this.initDoc(t);
this.trigger("ready"), this.router.start(), this.hideLoadingScreen(), setTimeout((u = this, 
function() {
return u.doc || u.welcomeBack(), u.removeEvent("ready bootError");
}), 50);
},
initDoc: function(t) {
var e, n, o, r;
for (e = 0, n = (o = t.types.all()).length; e < n; e++) r = o[e], t.entries.add(r.toEntry());
this.entries.add(t.entries.all());
},
migrateDocs: function() {
var t, e, n, o, r, s;
for (e = 0, n = (r = this.settings.getDocs()).length; e < n; e++) s = r[e], this.docs.findBy("slug", s) || (o = !0, 
"webpack~2" === s && (t = this.disabledDocs.findBy("slug", "webpack")), "angular~4_typescript" === s && (t = this.disabledDocs.findBy("slug", "angular")), 
"angular~2_typescript" === s && (t = this.disabledDocs.findBy("slug", "angular~2")), 
t || (t = this.disabledDocs.findBy("slug_without_version", s)), t && (this.disabledDocs.remove(t), 
this.docs.add(t)));
o && this.saveDocs();
},
enableDoc: function(t, e, n) {
var o, r;
this.docs.contains(t) || (r = this, o = function() {
r.docs.contains(t) || (r.disabledDocs.remove(t), r.docs.add(t), r.docs.sort(), r.initDoc(t), 
r.saveDocs(), app.settings.get("autoInstall") ? t.install(e, n) : e());
}, t.load(o, n, {
writeCache: !0
}));
},
saveDocs: function() {
var r, t;
return this.settings.setDocs(function() {
var t, e, n, o;
for (o = [], t = 0, e = (n = this.docs.all()).length; t < e; t++) r = n[t], o.push(r.slug);
return o;
}.call(this)), this.db.migrate(), null != (t = this.serviceWorker) ? t.updateInBackground() : void 0;
},
welcomeBack: function() {
var t;
return t = this.settings.get("count"), this.settings.set("count", ++t), 5 === t && new app.views.Notif("Share", {
autoHide: null
}), new app.views.News(), new app.views.Updates(), this.updateChecker = new app.UpdateChecker();
},
reboot: function() {
"/" !== location.pathname && "/settings" !== location.pathname ? window.location = "/#" + location.pathname : window.location = "/";
},
reload: function() {
this.docs.clearCache(), this.disabledDocs.clearCache(), this.serviceWorker ? this.serviceWorker.reload() : this.reboot();
},
reset: function() {
var t, e;
this.localStorage.reset(), this.settings.reset(), null != (t = this.db) && t.reset(), 
null != (e = this.serviceWorker) && e.update(), window.location = "/";
},
showTip: function(t) {
var e;
this.isSingleDoc() || -1 === (e = this.settings.getTips()).indexOf(t) && (e.push(t), 
this.settings.setTips(e), new app.views.Tip(t));
},
hideLoadingScreen: function() {
$.overlayScrollbarsEnabled() && document.body.classList.add("_overlay-scrollbars"), 
document.documentElement.classList.remove("_booting");
},
indexHost: function() {
return this.config[this.serviceWorker && this.settings.hasDocs() ? "index_path" : "docs_origin"];
},
onBootError: function() {
1 <= arguments.length && e.call(arguments, 0), this.trigger("bootError"), this.hideLoadingScreen();
},
onQuotaExceeded: function() {
this.quotaExceeded || (this.quotaExceeded = !0, new app.views.Notif("QuotaExceeded", {
autoHide: null
}));
},
onCookieBlocked: function(t, e, n) {
this.cookieBlocked || (this.cookieBlocked = !0, new app.views.Notif("CookieBlocked", {
autoHide: null
}), Raven.captureMessage("CookieBlocked/" + t, {
level: "warning",
extra: {
value: e,
actual: n
}
}));
},
onWindowError: function() {
var t;
t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.cookieBlocked || (this.isInjectionError.apply(this, t) ? this.onInjectionError() : this.isAppError.apply(this, t) && ("function" == typeof this.previousErrorHandler && this.previousErrorHandler.apply(this, t), 
this.hideLoadingScreen(), this.errorNotif || (this.errorNotif = new app.views.Notif("Error")), 
this.errorNotif.show()));
},
onInjectionError: function() {
this.injectionError || (this.injectionError = !0, alert("JavaScript code has been injected in the page which prevents DevDocs from running correctly.\nPlease check your browser extensions/addons. "), 
Raven.captureMessage("injection error", {
level: "info"
}));
},
isInjectionError: function() {
return window.$ !== app._$ || window.$$ !== app._$$ || window.page !== app._page || "function" != typeof $.empty || "function" != typeof page.show;
},
isAppError: function(t, e) {
return e && -1 !== e.indexOf("devdocs") && e.indexOf(".js") === e.length - 3;
},
isSupportedBrowser: function() {
var t, e, n;
try {
for (n in e = {
bind: !!Function.prototype.bind,
pushState: !!history.pushState,
matchMedia: !!window.matchMedia,
insertAdjacentHTML: !!document.body.insertAdjacentHTML,
defaultPrevented: !1 === document.createEvent("CustomEvent").defaultPrevented,
cssVariables: !!("undefined" != typeof CSS && null !== CSS && "function" == typeof CSS.supports ? CSS.supports("(--t: 0)") : void 0)
}) if (!e[n]) return Raven.captureMessage("unsupported/" + n, {
level: "info"
}), !1;
return !0;
} catch (o) {
return t = o, Raven.captureMessage("unsupported/exception", {
level: "info",
extra: {
error: t
}
}), !1;
}
},
isSingleDoc: function() {
return document.body.hasAttribute("data-doc");
},
isMobile: function() {
return null != this._isMobile ? this._isMobile : this._isMobile = app.views.Mobile.detect();
},
isAndroidWebview: function() {
return null != this._isAndroidWebview ? this._isAndroidWebview : this._isAndroidWebview = app.views.Mobile.detectAndroidWebview();
},
isInvalidLocation: function() {
return "production" === this.config.env && 0 !== location.host.indexOf(app.config.production_host);
}
}, $.extend(app, Events);
}.call(this), function() {
app.config = {
db_filename: "db.json",
default_docs: [ "css", "dom", "html", "http", "javascript" ],
docs_origin: "//documents.devdocs.io",
env: "production",
history_cache_size: 10,
index_filename: "index.json",
index_path: "/docs",
max_results: 50,
production_host: "devdocs.io",
search_param: "q",
sentry_dsn: "https://5df3f4c982314008b52b799b1f25ad9d@app.getsentry.com/11245",
version: 1626819261,
release: "Tue, 20 Jul 2021 22:14:21 GMT",
mathml_stylesheet: "/mathml.css",
favicon_spritesheet: "/assets/sprites/docs-d6795da1049cadf416b0081d435a52ee3a93e65eaf0067f0ca6e6bd648d1bfff.png",
service_worker_path: "/service-worker.js",
service_worker_enabled: !0
};
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
};
app.DB = function() {
function t() {
this.deleteCorruptedDocs = e(this.deleteCorruptedDocs, this), this.checkForCorruptedDocs = e(this.checkForCorruptedDocs, this), 
this.onOpenError = e(this.onOpenError, this), this.onOpenSuccess = e(this.onOpenSuccess, this), 
this.versionMultipler = $.isIE() ? 1e5 : 1e9, this.useIndexedDB = this.useIndexedDB(), 
this.callbacks = [];
}
var r, s;
return r = "docs", s = 15, t.prototype.db = function(t) {
var e, n;
if (!this.useIndexedDB) return t();
if (t && this.callbacks.push(t), !this.open) try {
this.open = !0, (n = indexedDB.open(r, s * this.versionMultipler + this.userVersion())).onsuccess = this.onOpenSuccess, 
n.onerror = this.onOpenError, n.onupgradeneeded = this.onUpgradeNeeded;
} catch (o) {
e = o, this.fail("exception", e);
}
}, t.prototype.onOpenSuccess = function(t) {
var e, n;
if (0 === (e = t.target.result).objectStoreNames.length) {
try {
e.close();
} catch (o) {}
this.open = !1, this.fail("empty");
} else if (n = this.buggyIDB(e)) {
try {
e.close();
} catch (o) {}
this.open = !1, this.fail("buggy", n);
} else this.runCallbacks(e), this.open = !1, e.close();
}, t.prototype.onOpenError = function(t) {
var e;
switch (t.preventDefault(), this.open = !1, (e = t.target.error).name) {
case "QuotaExceededError":
this.onQuotaExceededError();
break;

case "VersionError":
this.onVersionError();
break;

case "InvalidStateError":
this.fail("private_mode");
break;

default:
this.fail("cant_open", e);
}
}, t.prototype.fail = function(t, e) {
this.cachedDocs = null, this.useIndexedDB = !1, this.reason || (this.reason = t), 
this.error || (this.error = e), e && "function" == typeof console.error && console.error("IDB error", e), 
this.runCallbacks(), e && "cant_open" === t && Raven.captureMessage(e.name + ": " + e.message, {
level: "warning",
fingerprint: [ e.name ]
});
}, t.prototype.onQuotaExceededError = function() {
this.reset(), this.db(), app.onQuotaExceeded(), Raven.captureMessage("QuotaExceededError", {
level: "warning"
});
}, t.prototype.onVersionError = function() {
var t, e;
(t = indexedDB.open(r)).onsuccess = (e = this, function(t) {
return e.handleVersionMismatch(t.target.result.version);
}), t.onerror = function(t) {
return t.preventDefault(), this.fail("cant_open", error);
};
}, t.prototype.handleVersionMismatch = function(t) {
Math.floor(t / this.versionMultipler) !== s ? this.fail("version") : (this.setUserVersion(t - s * this.versionMultipler), 
this.db());
}, t.prototype.buggyIDB = function(t) {
if (!this.checkedBuggyIDB) {
this.checkedBuggyIDB = !0;
try {
this.idbTransaction(t, {
stores: $.makeArray(t.objectStoreNames).slice(0, 2),
mode: "readwrite"
}).abort();
} catch (e) {
return e;
}
}
}, t.prototype.runCallbacks = function(t) {
for (var e; e = this.callbacks.shift(); ) e(t);
}, t.prototype.onUpgradeNeeded = function(t) {
var e, n, o, r, s, i, a, c, l;
if (e = t.target.result) {
if (c = $.makeArray(e.objectStoreNames), !$.arrayDelete(c, "docs")) try {
e.createObjectStore("docs");
} catch (u) {}
for (o = 0, s = (l = app.docs.all()).length; o < s; o++) if (n = l[o], !$.arrayDelete(c, n.slug)) try {
e.createObjectStore(n.slug);
} catch (u) {}
for (r = 0, i = c.length; r < i; r++) {
a = c[r];
try {
e.deleteObjectStore(a);
} catch (u) {}
}
}
}, t.prototype.store = function(s, i, a, c, l) {
var u;
null == l && (l = !0), this.db((u = this, function(t) {
var e, n, o, r;
if (t) {
for (n in (r = u.idbTransaction(t, {
stores: [ "docs", s.slug ],
mode: "readwrite",
ignoreError: !1
})).oncomplete = function() {
var t;
null != (t = u.cachedDocs) && (t[s.slug] = s.mtime), a();
}, r.onerror = function(t) {
var e;
t.preventDefault(), "NotFoundError" === (null != (e = r.error) ? e.name : void 0) && l ? (u.migrate(), 
setTimeout(function() {
return u.store(s, i, a, c, !1);
}, 0)) : c(t);
}, (o = r.objectStore(s.slug)).clear(), i) e = i[n], o.add(e, n);
(o = r.objectStore("docs")).put(s.mtime, s.slug);
} else c();
}));
}, t.prototype.unstore = function(r, s, i, a) {
var e;
null == a && (a = !0), this.db((e = this, function(t) {
var o;
t ? ((o = e.idbTransaction(t, {
stores: [ "docs", r.slug ],
mode: "readwrite",
ignoreError: !1
})).oncomplete = function() {
var t;
null != (t = e.cachedDocs) && delete t[r.slug], s();
}, o.onerror = function(t) {
var e, n;
t.preventDefault(), "NotFoundError" === (null != (e = o.error) ? e.name : void 0) && a ? (this.migrate(), 
setTimeout((n = this, function() {
return n.unstore(r, s, i, !1);
}), 0)) : i(t);
}, o.objectStore("docs")["delete"](r.slug), o.objectStore(r.slug).clear()) : i();
}));
}, t.prototype.version = function(o, r) {
var t, s;
null == (t = this.cachedVersion(o)) ? this.db((s = this, function(t) {
var e, n;
t ? (n = s.idbTransaction(t, {
stores: [ "docs" ],
mode: "readonly"
}).objectStore("docs"), (e = n.get(o.slug)).onsuccess = function() {
r(e.result);
}, e.onerror = function(t) {
t.preventDefault(), r(!1);
}) : r(!1);
})) : r(t);
}, t.prototype.cachedVersion = function(t) {
if (this.cachedDocs) return this.cachedDocs[t.slug] || !1;
}, t.prototype.versions = function(r, s) {
var t, i;
{
if (!(t = this.cachedVersions(r))) return this.db((i = this, function(t) {
var n, o, e;
t ? ((e = i.idbTransaction(t, {
stores: [ "docs" ],
mode: "readonly"
})).oncomplete = function() {
s(n);
}, o = e.objectStore("docs"), n = {}, r.forEach(function(e) {
var t;
(t = o.get(e.slug)).onsuccess = function() {
n[e.slug] = t.result;
}, t.onerror = function(t) {
t.preventDefault(), n[e.slug] = !1;
};
})) : s(!1);
}));
s(t);
}
}, t.prototype.cachedVersions = function(t) {
var e, n, o, r;
if (this.cachedDocs) {
for (r = {}, n = 0, o = t.length; n < o; n++) r[(e = t[n]).slug] = this.cachedVersion(e);
return r;
}
}, t.prototype.load = function(t, e, n) {
return this.shouldLoadWithIDB(t) ? (n = this.loadWithXHR.bind(this, t, e, n), this.loadWithIDB(t, e, n)) : this.loadWithXHR(t, e, n);
}, t.prototype.loadWithXHR = function(t, e, n) {
return ajax({
url: t.fileUrl(),
dataType: "html",
success: e,
error: n
});
}, t.prototype.loadWithIDB = function(o, r, s) {
return this.db((i = this, function(t) {
var e, n;
if (t) {
if (!t.objectStoreNames.contains(o.doc.slug)) return s(), void i.loadDocsCache(t);
n = i.idbTransaction(t, {
stores: [ o.doc.slug ],
mode: "readonly"
}).objectStore(o.doc.slug), (e = n.get(o.dbPath())).onsuccess = function() {
e.result ? r(e.result) : s();
}, e.onerror = function(t) {
t.preventDefault(), s();
}, i.loadDocsCache(t);
} else s();
}));
var i;
}, t.prototype.loadDocsCache = function(t) {
var e, n, o, r;
this.cachedDocs || (this.cachedDocs = {}, (n = this.idbTransaction(t, {
stores: [ "docs" ],
mode: "readonly"
})).oncomplete = (o = this, function() {
setTimeout(o.checkForCorruptedDocs, 50);
}), (e = n.objectStore("docs").openCursor()).onsuccess = (r = this, function(t) {
var e;
(e = t.target.result) && (r.cachedDocs[e.key] = e.value, e["continue"]());
}), e.onerror = function(t) {
t.preventDefault();
});
}, t.prototype.checkForCorruptedDocs = function() {
var d;
this.db((d = this, function(t) {
var e, n, o, r, s, i, a, c, l, u, p, h;
if (d.corruptedDocs = [], 0 !== (n = function() {
var t, e;
for (i in e = [], t = this.cachedDocs) t[i] && e.push(i);
return e;
}.call(d)).length) {
for (o = 0, a = n.length; o < a; o++) p = n[o], app.docs.findBy("slug", p) || d.corruptedDocs.push(p);
for (r = 0, c = (u = d.corruptedDocs).length; r < c; r++) p = u[r], $.arrayDelete(n, p);
if (0 !== n.length) for ((h = d.idbTransaction(t, {
stores: n,
mode: "readonly",
ignoreError: !1
})).oncomplete = function() {
0 < d.corruptedDocs.length && setTimeout(d.deleteCorruptedDocs, 0);
}, s = 0, l = n.length; s < l; s++) e = n[s], h.objectStore(e).get("index").onsuccess = function(t) {
t.target.result || d.corruptedDocs.push(t.target.source.name);
}; else setTimeout(d.deleteCorruptedDocs, 0);
}
}));
}, t.prototype.deleteCorruptedDocs = function() {
var o;
this.db((o = this, function(t) {
var e, n;
for (n = o.idbTransaction(t, {
stores: [ "docs" ],
mode: "readwrite",
ignoreError: !1
}).objectStore("docs"); e = o.corruptedDocs.pop(); ) o.cachedDocs[e] = !1, n["delete"](e);
})), Raven.captureMessage("corruptedDocs", {
level: "info",
extra: {
docs: this.corruptedDocs.join(",")
}
});
}, t.prototype.shouldLoadWithIDB = function(t) {
return this.useIndexedDB && (!this.cachedDocs || this.cachedDocs[t.doc.slug]);
}, t.prototype.idbTransaction = function(t, e) {
var n;
return app.lastIDBTransaction = [ e.stores, e.mode ], n = t.transaction(e.stores, e.mode), 
!1 !== e.ignoreError && (n.onerror = function(t) {
t.preventDefault();
}), !1 !== e.ignoreAbort && (n.onabort = function(t) {
t.preventDefault();
}), n;
}, t.prototype.reset = function() {
try {
"undefined" != typeof indexedDB && null !== indexedDB && indexedDB.deleteDatabase(r);
} catch (t) {}
}, t.prototype.useIndexedDB = function() {
try {
return !(app.isSingleDoc() || !window.indexedDB) || !(this.reason = "not_supported");
} catch (t) {
return !1;
}
}, t.prototype.migrate = function() {
app.settings.set("schema", this.userVersion() + 1);
}, t.prototype.setUserVersion = function(t) {
app.settings.set("schema", t);
}, t.prototype.userVersion = function() {
return app.settings.get("schema");
}, t;
}();
}.call(this), function() {
app.Router = function() {
function t() {
var t, e, n, o, r, s;
for (t = 0, e = (r = this.constructor.routes).length; t < e; t++) o = (s = r[t])[0], 
n = s[1], page(o, this[n].bind(this));
this.setInitialPath();
}
return $.extend(t.prototype, Events), t.routes = [ [ "*", "before" ], [ "/", "root" ], [ "/settings", "settings" ], [ "/offline", "offline" ], [ "/about", "about" ], [ "/news", "news" ], [ "/help", "help" ], [ "/:doc-:type/", "type" ], [ "/:doc/", "doc" ], [ "/:doc/:path(*)", "entry" ], [ "*", "notFound" ] ], 
t.prototype.start = function() {
page.start();
}, t.prototype.show = function(t) {
page.show(t);
}, t.prototype.triggerRoute = function(t) {
this.trigger(t, this.context), this.trigger("after", t, this.context);
}, t.prototype.before = function(t, e) {
var n, o;
if (n = this.context, this.context = t, this.trigger("before", t), o = e()) return this.context = n, 
o;
}, t.prototype.doc = function(t, e) {
var n;
if (!(n = app.docs.findBySlug(t.params.doc) || app.disabledDocs.findBySlug(t.params.doc))) return e();
t.doc = n, t.entry = n.toEntry(), this.triggerRoute("entry");
}, t.prototype.type = function(t, e) {
var n, o;
if (!(o = null != (n = app.docs.findBySlug(t.params.doc)) ? n.types.findBy("slug", t.params.type) : void 0)) return e();
t.doc = n, t.type = o, this.triggerRoute("type");
}, t.prototype.entry = function(t, e) {
var n, o, r, s;
if (!(n = app.docs.findBySlug(t.params.doc))) return e();
if (s = t.params.path, r = t.hash, o = n.findEntryByPathAndHash(s, r)) return t.doc = n, 
t.entry = o, void this.triggerRoute("entry");
if ("/index" === s.slice(-6)) {
if (s = s.substr(0, s.length - 6), o = n.findEntryByPathAndHash(s, r)) return o.fullPath();
} else if (s += "/index", o = n.findEntryByPathAndHash(s, r)) return o.fullPath();
return e();
}, t.prototype.root = function() {
if (app.isSingleDoc()) return "/";
this.triggerRoute("root");
}, t.prototype.settings = function(t) {
if (app.isSingleDoc()) return "/#/" + t.path;
this.triggerRoute("settings");
}, t.prototype.offline = function(t) {
if (app.isSingleDoc()) return "/#/" + t.path;
this.triggerRoute("offline");
}, t.prototype.about = function(t) {
if (app.isSingleDoc()) return "/#/" + t.path;
t.page = "about", this.triggerRoute("page");
}, t.prototype.news = function(t) {
if (app.isSingleDoc()) return "/#/" + t.path;
t.page = "news", this.triggerRoute("page");
}, t.prototype.help = function(t) {
if (app.isSingleDoc()) return "/#/" + t.path;
t.page = "help", this.triggerRoute("page");
}, t.prototype.notFound = function() {
this.triggerRoute("notFound");
}, t.prototype.isIndex = function() {
var t, e, n;
return "/" === (null != (t = this.context) ? t.path : void 0) || app.isSingleDoc() && (null != (e = this.context) && null != (n = e.entry) ? n.isIndex() : void 0);
}, t.prototype.isSettings = function() {
var t;
return "/settings" === (null != (t = this.context) ? t.path : void 0);
}, t.prototype.setInitialPath = function() {
var t;
(t = location.pathname.replace(/^\/{2,}/g, "/")) !== location.pathname && page.replace(t + location.search + location.hash, null, !0), 
"/" === location.pathname && ((t = this.getInitialPathFromHash()) ? page.replace(t + location.search, null, !0) : (t = this.getInitialPathFromCookie()) && page.replace(t + location.search + location.hash, null, !0));
}, t.prototype.getInitialPathFromHash = function() {
var t;
try {
return null != (t = new RegExp("#/(.+)").exec(decodeURIComponent(location.hash))) ? t[1] : void 0;
} catch (error) {}
}, t.prototype.getInitialPathFromCookie = function() {
var t;
if (t = Cookies.get("initial_path")) return Cookies.expire("initial_path"), t;
}, t.prototype.replaceHash = function(t) {
page.replace(location.pathname + location.search + (t || ""), null, !0);
}, t;
}();
}.call(this), function() {
function h() {
if (0 <= (n = E.indexOf(b))) return o = E.lastIndexOf(b), n !== o ? Math.max(t(), (n = o) && t() || 0) : t();
}
function t() {
if (v = 100 - (w - _), 0 < n) {
if (E.charAt(n - 1) === f) v += n - 1; else {
if (1 === _) return;
for (m = n - 2; 0 <= m && E.charAt(m) !== f; ) m--;
v -= n - m + (w - _ - n);
}
for (a = 0, m = n - 2; 0 <= m; ) E.charAt(m) === f && a++, m--;
v -= a;
}
for (a = 0, m = w - _ - n - 1; 0 <= m; ) E.charAt(n + _ + m) === f && a++, m--;
return v -= 5 * a, Math.max(1, v);
}
function d() {
if (!(w <= _ || 0 <= E.indexOf(b)) && (r = g.exec(E))) return s = r.index, i = r[0].length, 
v = e(), (r = g.exec(E.slice(m = E.lastIndexOf(f) + 1))) ? (s = m + r.index, i = r[0].length, 
Math.max(v, e())) : v;
}
function e() {
return 0 === s || E.charAt(s - 1) === f ? Math.max(66, 100 - i) : s + i === w ? Math.max(33, 67 - i) : Math.max(1, 34 - i);
}
var f, g, m, n, o, r, s, i, y, b, _, v, a, E, w, S = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, c = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) l.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, l = {}.hasOwnProperty;
f = ".", b = _ = E = w = y = g = n = o = r = s = i = v = a = m = null, app.Searcher = function() {
function t(t) {
null == t && (t = {}), this.matchChunks = S(this.matchChunks, this), this.match = S(this.match, this), 
this.options = $.extend({}, n, t);
}
var e, n, o, r, s, i, a, c, l, u, p;
return $.extend(t.prototype, Events), e = 2e4, n = {
max_results: app.config.max_results,
fuzzy_min_length: 3
}, u = /#|::|:-|->|\$(?=\w)|\-(?=\w)|\:(?=\w)|\ [\/\-&]\ |:\ |\ /g, a = /(\w)[\-:]$/, 
l = /\ \(\w+?\)$/, s = /\(\)/, c = /\ event$/, o = /\.+/g, p = /\s/g, i = "", r = "...", 
"string", t.normalizeString = function(t) {
return t.toLowerCase().replace(r, i).replace(c, i).replace(l, i).replace(u, f).replace(o, f).replace(s, i).replace(p, i);
}, t.normalizeQuery = function(t) {
return (t = this.normalizeString(t)).replace(a, "$1.");
}, t.prototype.find = function(t, e, n) {
this.kill(), this.data = t, this.attr = e, this.query = n, this.setup(), this.isValid() ? this.match() : this.end();
}, t.prototype.setup = function() {
b = this.query = this.constructor.normalizeQuery(this.query), _ = b.length, this.dataLength = this.data.length, 
this.matchers = [ h ], this.totalResults = 0, this.setupFuzzy();
}, t.prototype.setupFuzzy = function() {
_ >= this.options.fuzzy_min_length ? (g = this.queryToFuzzyRegexp(b), this.matchers.push(d)) : g = null;
}, t.prototype.isValid = function() {
return 0 < _ && b !== f;
}, t.prototype.end = function() {
this.totalResults || this.triggerResults([]), this.trigger("end"), this.free();
}, t.prototype.kill = function() {
this.timeout && (clearTimeout(this.timeout), this.free());
}, t.prototype.free = function() {
this.data = this.attr = this.dataLength = this.matchers = this.matcher = this.query = this.totalResults = this.scoreMap = this.cursor = this.timeout = null;
}, t.prototype.match = function() {
!this.foundEnough() && (this.matcher = this.matchers.shift()) ? (this.setupMatcher(), 
this.matchChunks()) : this.end();
}, t.prototype.setupMatcher = function() {
this.cursor = 0, this.scoreMap = new Array(101);
}, t.prototype.matchChunks = function() {
this.matchChunk(), this.cursor === this.dataLength || this.scoredEnough() ? (this.delay(this.match), 
this.sendResults()) : this.delay(this.matchChunks);
}, t.prototype.matchChunk = function() {
var t, e, n, o, r;
for (y = this.matcher, t = 0, o = this.chunkSize(); 0 <= o ? t < o : o < t; 0 <= o ? t++ : t--) {
if ((E = this.data[this.cursor][this.attr]).split) w = E.length, (v = y()) && this.addResult(this.data[this.cursor], v); else {
for (e = v = 0, n = (r = this.data[this.cursor][this.attr]).length; e < n; e++) E = r[e], 
w = E.length, v = Math.max(v, y() || 0);
0 < v && this.addResult(this.data[this.cursor], v);
}
this.cursor++;
}
}, t.prototype.chunkSize = function() {
return this.cursor + e > this.dataLength ? this.dataLength % e : e;
}, t.prototype.scoredEnough = function() {
var t;
return (null != (t = this.scoreMap[100]) ? t.length : void 0) >= this.options.max_results;
}, t.prototype.foundEnough = function() {
return this.totalResults >= this.options.max_results;
}, t.prototype.addResult = function(t, e) {
var n, o;
((n = this.scoreMap)[o = Math.round(e)] || (n[o] = [])).push(t), this.totalResults++;
}, t.prototype.getResults = function() {
var t, e, n, o;
for (o = [], t = (n = this.scoreMap).length - 1; 0 <= t; t += -1) (e = n[t]) && o.push.apply(o, e);
return o.slice(0, this.options.max_results);
}, t.prototype.sendResults = function() {
var t;
(t = this.getResults()).length && this.triggerResults(t);
}, t.prototype.triggerResults = function(t) {
this.trigger("results", t);
}, t.prototype.delay = function(t) {
return this.timeout = setTimeout(t, 1);
}, t.prototype.queryToFuzzyRegexp = function(t) {
var e, n, o, r;
for (n = t.split(""), m = o = 0, r = n.length; o < r; m = ++o) e = n[m], n[m] = $.escapeRegexp(e);
return new RegExp(n.join(".*?"));
}, t;
}(), app.SynchronousSearcher = function(t) {
function e() {
return this.match = S(this.match, this), e.__super__.constructor.apply(this, arguments);
}
return c(e, t), e.prototype.match = function() {
return this.matcher && (this.allResults || (this.allResults = []), this.allResults.push.apply(this.allResults, this.getResults())), 
e.__super__.match.apply(this, arguments);
}, e.prototype.free = function() {
return this.allResults = null, e.__super__.free.apply(this, arguments);
}, e.prototype.end = function() {
return this.sendResults(!0), e.__super__.end.apply(this, arguments);
}, e.prototype.sendResults = function(t) {
var e;
if (t && (null != (e = this.allResults) ? e.length : void 0)) return this.triggerResults(this.allResults);
}, e.prototype.delay = function(t) {
return t();
}, e;
}(app.Searcher);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
};
app.ServiceWorker = function() {
function t() {
var e;
this.onStateChange = n(this.onStateChange, this), this.onUpdateFound = n(this.onUpdateFound, this), 
this.registration = null, this.notifyUpdate = !0, navigator.serviceWorker.register(app.config.service_worker_path, {
scope: "/"
}).then((e = this, function(t) {
return e.updateRegistration(t);
}), function(t) {
return console.error("Could not register service worker:", t);
});
}
return $.extend(t.prototype, Events), t.isEnabled = function() {
return !!navigator.serviceWorker && app.config.service_worker_enabled;
}, t.prototype.update = function() {
if (this.registration) return this.notifyUpdate = !0, this.registration.update()["catch"](function() {});
}, t.prototype.updateInBackground = function() {
if (this.registration) return this.notifyUpdate = !1, this.registration.update()["catch"](function() {});
}, t.prototype.reload = function() {
return this.updateInBackground().then(function() {
return app.reboot();
});
}, t.prototype.updateRegistration = function(t) {
this.registration = t, $.on(this.registration, "updatefound", this.onUpdateFound);
}, t.prototype.onUpdateFound = function() {
this.installingRegistration && $.off(this.installingRegistration, "statechange", this.onStateChange()), 
this.installingRegistration = this.registration.installing, $.on(this.installingRegistration, "statechange", this.onStateChange);
}, t.prototype.onStateChange = function() {
this.installingRegistration && "installed" === this.installingRegistration.state && navigator.serviceWorker.controller && (this.installingRegistration = null, 
this.onUpdateReady());
}, t.prototype.onUpdateReady = function() {
this.notifyUpdate && this.trigger("updateready");
}, t;
}();
}.call(this), function() {
app.Settings = function() {
function t() {
var t;
this.store = new CookiesStore(), this.cache = {}, this.autoSupported = "not all" !== window.matchMedia("(prefers-color-scheme)").media, 
this.autoSupported && (this.darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)"), 
this.darkModeQuery.addListener((t = this, function() {
return t.setTheme(t.get("theme"));
})));
}
var o, r;
return r = [ "hideDisabled", "hideIntro", "manualUpdate", "fastScroll", "arrowScroll", "analyticsConsent", "docs", "dark", "theme", "layout", "size", "tips", "autoInstall", "spaceScroll", "spaceTimeout" ], 
o = [ "count", "schema", "version", "news" ], t.prototype.LAYOUTS = [ "_max-width", "_sidebar-hidden", "_native-scrollbars" ], 
t.defaults = {
count: 0,
hideDisabled: !1,
hideIntro: !1,
news: 0,
manualUpdate: !1,
schema: 1,
analyticsConsent: !1,
theme: "auto",
spaceScroll: 1,
spaceTimeout: .5
}, t.prototype.get = function(t) {
var e;
return this.cache.hasOwnProperty(t) ? this.cache[t] : (this.cache[t] = null != (e = this.store.get(t)) ? e : this.constructor.defaults[t], 
"theme" !== t || "auto" !== this.cache[t] || this.darkModeQuery ? this.cache[t] : this.cache[t] = "default");
}, t.prototype.set = function(t, e) {
this.store.set(t, e), delete this.cache[t], "theme" === t && this.setTheme(e);
}, t.prototype.del = function(t) {
this.store.del(t), delete this.cache[t];
}, t.prototype.hasDocs = function() {
try {
return !!this.store.get("docs");
} catch (error) {}
}, t.prototype.getDocs = function() {
var t;
return (null != (t = this.store.get("docs")) ? t.split("/") : void 0) || app.config.default_docs;
}, t.prototype.setDocs = function(t) {
this.set("docs", t.join("/"));
}, t.prototype.getTips = function() {
var t;
return (null != (t = this.store.get("tips")) ? t.split("/") : void 0) || [];
}, t.prototype.setTips = function(t) {
this.set("tips", t.join("/"));
}, t.prototype.setLayout = function(t, e) {
var n;
this.toggleLayout(t, e), n = (this.store.get("layout") || "").split(" "), $.arrayDelete(n, ""), 
e ? -1 === n.indexOf(t) && n.push(t) : $.arrayDelete(n, t), 0 < n.length ? this.set("layout", n.join(" ")) : this.del("layout");
}, t.prototype.hasLayout = function(t) {
return -1 !== (this.store.get("layout") || "").split(" ").indexOf(t);
}, t.prototype.setSize = function(t) {
this.set("size", t);
}, t.prototype.dump = function() {
return this.store.dump();
}, t.prototype["export"] = function() {
var t, e, n;
for (t = this.dump(), e = 0, n = o.length; e < n; e++) delete t[o[e]];
return t;
}, t.prototype["import"] = function(t) {
var e, n, o;
for (e in n = this["export"]()) o = n[e], t.hasOwnProperty(e) || this.del(e);
for (e in t) o = t[e], -1 !== r.indexOf(e) && this.set(e, o);
}, t.prototype.reset = function() {
this.store.reset(), this.cache = {};
}, t.prototype.initLayout = function() {
var t, e, n, o;
for (1 === this.get("dark") && (this.set("theme", "dark"), this.del("dark")), this.setTheme(this.get("theme")), 
t = 0, n = (o = this.LAYOUTS).length; t < n; t++) e = o[t], this.toggleLayout(e, this.hasLayout(e));
this.initSidebarWidth();
}, t.prototype.setTheme = function(t) {
var e;
"auto" === t && (t = this.darkModeQuery.matches ? "dark" : "default"), (e = document.documentElement.classList).remove("_theme-default", "_theme-dark"), 
e.add("_theme-" + t), this.updateColorMeta();
}, t.prototype.updateColorMeta = function() {
var t;
t = getComputedStyle(document.documentElement).getPropertyValue("--headerBackground").trim(), 
$("meta[name=theme-color]").setAttribute("content", t);
}, t.prototype.toggleLayout = function(t, e) {
var n, o;
n = document.body.classList, (null != (o = app.router) ? o.isSettings : void 0) || n.toggle(t, e), 
n.toggle("_overlay-scrollbars", $.overlayScrollbarsEnabled());
}, t.prototype.initSidebarWidth = function() {
var t;
(t = this.get("size")) && document.documentElement.style.setProperty("--sidebarWidth", t + "px");
}, t;
}();
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
};
app.Shortcuts = function() {
function t() {
this.onKeypress = e(this.onKeypress, this), this.onKeydown = e(this.onKeydown, this), 
this.isMac = $.isMac(), this.start();
}
return $.extend(t.prototype, Events), t.prototype.start = function() {
$.on(document, "keydown", this.onKeydown), $.on(document, "keypress", this.onKeypress);
}, t.prototype.stop = function() {
$.off(document, "keydown", this.onKeydown), $.off(document, "keypress", this.onKeypress);
}, t.prototype.swapArrowKeysBehavior = function() {
return app.settings.get("arrowScroll");
}, t.prototype.spaceScroll = function() {
return app.settings.get("spaceScroll");
}, t.prototype.showTip = function() {
return app.showTip("KeyNav"), this.showTip = null;
}, t.prototype.spaceTimeout = function() {
return app.settings.get("spaceTimeout");
}, t.prototype.onKeydown = function(t) {
this.buggyEvent(t) || !1 === (t.ctrlKey || t.metaKey ? t.altKey || t.shiftKey ? void 0 : this.handleKeydownSuperEvent(t) : t.shiftKey ? t.altKey ? void 0 : this.handleKeydownShiftEvent(t) : t.altKey ? this.handleKeydownAltEvent(t) : this.handleKeydownEvent(t)) && t.preventDefault();
}, t.prototype.onKeypress = function(t) {
this.buggyEvent(t) || 63 === t.charCode && "INPUT" === document.activeElement.tagName || t.ctrlKey || t.metaKey || !1 === this.handleKeypressEvent(t) && t.preventDefault();
}, t.prototype.handleKeydownEvent = function(t, e) {
var n, o, r;
if (!e && (37 === (n = t.which) || 38 === n || 39 === n || 40 === n) && this.swapArrowKeysBehavior()) return this.handleKeydownAltEvent(t, !0);
if (t.target.form || !(48 <= (o = t.which) && o <= 57 || 65 <= (r = t.which) && r <= 90)) switch (t.which) {
case 8:
if (!t.target.form) return this.trigger("typing");
break;

case 13:
return this.trigger("enter");

case 27:
return this.trigger("escape"), !1;

case 32:
if ("search" === t.target.type && this.spaceScroll() && (!this.lastKeypress || this.lastKeypress < Date.now() - 1e3 * this.spaceTimeout())) return this.trigger("pageDown"), 
!1;
break;

case 33:
return this.trigger("pageUp");

case 34:
return this.trigger("pageDown");

case 35:
if (!t.target.form) return this.trigger("pageBottom");
break;

case 36:
if (!t.target.form) return this.trigger("pageTop");
break;

case 37:
if (!t.target.value) return this.trigger("left");
break;

case 38:
return this.trigger("up"), "function" == typeof this.showTip && this.showTip(), 
!1;

case 39:
if (!t.target.value) return this.trigger("right");
break;

case 40:
return this.trigger("down"), "function" == typeof this.showTip && this.showTip(), 
!1;

case 191:
if (!t.target.form) return this.trigger("typing"), !1;
} else this.trigger("typing");
}, t.prototype.handleKeydownSuperEvent = function(t) {
switch (t.which) {
case 13:
return this.trigger("superEnter");

case 37:
if (this.isMac) return this.trigger("superLeft"), !1;
break;

case 38:
return this.trigger("pageTop"), !1;

case 39:
if (this.isMac) return this.trigger("superRight"), !1;
break;

case 40:
return this.trigger("pageBottom"), !1;

case 188:
return this.trigger("preferences"), !1;
}
}, t.prototype.handleKeydownShiftEvent = function(t, e) {
var n, o, r, s;
if (!e && (37 === (n = t.which) || 38 === n || 39 === n || 40 === n) && this.swapArrowKeysBehavior()) return this.handleKeydownEvent(t, !0);
if (!t.target.form && 65 <= (o = t.which) && o <= 90) this.trigger("typing"); else switch (t.which) {
case 32:
return this.trigger("pageUp"), !1;

case 38:
if (!(null != (r = getSelection()) ? r.toString() : void 0)) return this.trigger("altUp"), 
!1;
break;

case 40:
if (!(null != (s = getSelection()) ? s.toString() : void 0)) return this.trigger("altDown"), 
!1;
}
}, t.prototype.handleKeydownAltEvent = function(t, e) {
var n;
if (!e && (37 === (n = t.which) || 38 === n || 39 === n || 40 === n) && this.swapArrowKeysBehavior()) return this.handleKeydownEvent(t, !0);
switch (t.which) {
case 9:
return this.trigger("altRight", t);

case 37:
if (!this.isMac) return this.trigger("superLeft"), !1;
break;

case 38:
return this.trigger("altUp"), !1;

case 39:
if (!this.isMac) return this.trigger("superRight"), !1;
break;

case 40:
return this.trigger("altDown"), !1;

case 67:
return this.trigger("altC"), !1;

case 68:
return this.trigger("altD"), !1;

case 70:
return this.trigger("altF", t);

case 71:
return this.trigger("altG"), !1;

case 79:
return this.trigger("altO"), !1;

case 82:
return this.trigger("altR"), !1;

case 83:
return this.trigger("altS"), !1;
}
}, t.prototype.handleKeypressEvent = function(t) {
return 63 !== t.which || t.target.value ? this.lastKeypress = Date.now() : (this.trigger("help"), 
!1);
}, t.prototype.buggyEvent = function(t) {
try {
return t.target, t.ctrlKey, t.which, !1;
} catch (error) {
return !0;
}
}, t;
}();
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
};
app.UpdateChecker = function() {
function t() {
var t;
this.onFocus = e(this.onFocus, this), this.checkDocs = e(this.checkDocs, this), 
this.lastCheck = Date.now(), $.on(window, "focus", this.onFocus), null != (t = app.serviceWorker) && t.on("updateready", this.onUpdateReady), 
setTimeout(this.checkDocs, 0);
}
return t.prototype.check = function() {
var n;
app.serviceWorker ? app.serviceWorker.update() : ajax({
url: $('script[src*="application"]').getAttribute("src"),
dataType: "application/javascript",
error: (n = this, function(t, e) {
if (404 === e.status) return n.onUpdateReady();
})
});
}, t.prototype.onUpdateReady = function() {
new app.views.Notif("UpdateReady", {
autoHide: null
});
}, t.prototype.checkDocs = function() {
var e;
app.settings.get("manualUpdate") ? app.docs.checkForUpdates((e = this, function(t) {
if (0 < t) return e.onDocsUpdateReady();
})) : app.docs.updateInBackground();
}, t.prototype.onDocsUpdateReady = function() {
new app.views.Notif("UpdateDocs", {
autoHide: null
});
}, t.prototype.onFocus = function() {
216e5 < Date.now() - this.lastCheck && (this.lastCheck = Date.now(), this.check());
}, t;
}();
}.call(this), function() {
app.Collection = function() {
function t(t) {
null == t && (t = []), this.reset(t);
}
return t.prototype.model = function() {
return app.models[this.constructor.model];
}, t.prototype.reset = function(t) {
var e, n, o;
for (null == t && (t = []), this.models = [], e = 0, n = t.length; e < n; e++) o = t[e], 
this.add(o);
}, t.prototype.add = function(t) {
var e, n, o, r;
if (t instanceof app.Model) this.models.push(t); else if (t instanceof Array) for (e = 0, 
n = t.length; e < n; e++) o = t[e], this.add(o); else t instanceof app.Collection ? (r = this.models).push.apply(r, t.all()) : this.models.push(new (this.model())(t));
}, t.prototype.remove = function(t) {
this.models.splice(this.models.indexOf(t), 1);
}, t.prototype.size = function() {
return this.models.length;
}, t.prototype.isEmpty = function() {
return 0 === this.models.length;
}, t.prototype.each = function(t) {
var e, n, o;
for (e = 0, n = (o = this.models).length; e < n; e++) t(o[e]);
}, t.prototype.all = function() {
return this.models;
}, t.prototype.contains = function(t) {
return 0 <= this.models.indexOf(t);
}, t.prototype.findBy = function(t, e) {
var n, o, r, s;
for (n = 0, o = (s = this.models).length; n < o; n++) if ((r = s[n])[t] === e) return r;
}, t.prototype.findAllBy = function(t, e) {
var n, o, r, s, i;
for (i = [], n = 0, o = (s = this.models).length; n < o; n++) (r = s[n])[t] === e && i.push(r);
return i;
}, t.prototype.countAllBy = function(t, e) {
var n, o, r, s;
for (o = n = 0, r = (s = this.models).length; o < r; o++) s[o][t] === e && (n += 1);
return n;
}, t;
}();
}.call(this), function() {
var r = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) s.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, s = {}.hasOwnProperty, u = [].slice;
app.collections.Docs = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
var l, n, o;
return r(e, t), e.model = "Doc", e.prototype.findBySlug = function(t) {
return this.findBy("slug", t) || this.findBy("slug_without_version", t);
}, n = /\.(\d)$/, o = ".0$1", e.prototype.sort = function() {
return this.models.sort(function(t, e) {
return t.name === e.name ? !t.version || t.version.replace(n, o) > e.version.replace(n, o) ? -1 : 1 : t.name.toLowerCase() > e.name.toLowerCase() ? 1 : -1;
});
}, l = 3, e.prototype.load = function(t, e, n) {
var o, r, s, i, a, c;
for (c = this, i = function() {
r < c.models.length ? c.models[r].load(i, o, n) : r === c.models.length + l - 1 && t(), 
r++;
}, o = function() {
var t;
t = 1 <= arguments.length ? u.call(arguments, 0) : [], e && (e.apply(null, t), e = null), 
i();
}, s = r = 0, a = l; 0 <= a ? s < a : a < s; 0 <= a ? s++ : s--) i();
}, e.prototype.clearCache = function() {
var t, e, n;
for (t = 0, e = (n = this.models).length; t < e; t++) n[t].clearCache();
}, e.prototype.uninstall = function(t) {
var e, n, o;
e = 0, o = this, (n = function() {
e < o.models.length ? o.models[e++].uninstall(n, n) : t();
})();
}, e.prototype.getInstallStatuses = function(o) {
app.db.versions(this.models, function(t) {
var e, n;
if (t) for (e in t) n = t[e], t[e] = {
installed: !!n,
mtime: n
};
o(t);
});
}, e.prototype.checkForUpdates = function(r) {
var s;
this.getInstallStatuses((s = this, function(t) {
var e, n, o;
if (e = 0, t) for (n in t) o = t[n], s.findBy("slug", n).isOutdated(o) && (e += 1);
r(e);
}));
}, e.prototype.updateInBackground = function() {
var r;
this.getInstallStatuses((r = this, function(t) {
var e, n, o;
if (t) for (n in t) o = t[n], (e = r.findBy("slug", n)).isOutdated(o) && e.install($.noop, $.noop);
}));
}, e;
}(app.Collection);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.collections.Entries = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.model = "Entry", e;
}(app.Collection);
}.call(this), function() {
var r = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) s.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, s = {}.hasOwnProperty;
app.collections.Types = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
var n, o;
return r(e, t), e.model = "Type", e.prototype.groups = function() {
var t, e, n, o, r, s;
for (r = [], t = 0, e = (o = this.models).length; t < e; t++) s = o[t], (r[n = this._groupFor(s)] || (r[n] = [])).push(s);
return r.filter(function(t) {
return 0 < t.length;
});
}, o = /(^|\()(guides?|tutorials?|reference|book|getting\ started|manual|examples)($|[\):])/i, 
n = /appendix/i, e.prototype._groupFor = function(t) {
return o.test(t.name) ? 0 : n.test(t.name) ? 2 : 1;
}, e;
}(app.Collection);
}.call(this), function() {
app.Model = function() {
function t(t) {
var e, n;
for (e in t) n = t[e], this[e] = n;
}
return t;
}();
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.models.Doc = function(t) {
function e() {
e.__super__.constructor.apply(this, arguments), this.reset(this), this.slug_without_version = this.slug.split("~")[0], 
this.fullName = this.name + (this.version ? " " + this.version : ""), this.icon = this.slug_without_version, 
this.version && (this.short_version = this.version.split(" ")[0]), this.text = this.toEntry().text;
}
return n(e, t), e.prototype.reset = function(t) {
this.resetEntries(t.entries), this.resetTypes(t.types);
}, e.prototype.resetEntries = function(t) {
var e;
this.entries = new app.collections.Entries(t), this.entries.each((e = this, function(t) {
return t.doc = e;
}));
}, e.prototype.resetTypes = function(t) {
var e;
this.types = new app.collections.Types(t), this.types.each((e = this, function(t) {
return t.doc = e;
}));
}, e.prototype.fullPath = function(t) {
return null == t && (t = ""), "/" !== t[0] && (t = "/" + t), "/" + this.slug + t;
}, e.prototype.fileUrl = function(t) {
return "" + app.config.docs_origin + this.fullPath(t) + "?" + this.mtime;
}, e.prototype.dbUrl = function() {
return app.config.docs_origin + "/" + this.slug + "/" + app.config.db_filename + "?" + this.mtime;
}, e.prototype.indexUrl = function() {
return app.indexHost() + "/" + this.slug + "/" + app.config.index_filename + "?" + this.mtime;
}, e.prototype.toEntry = function() {
return this.entry || (this.entry = new app.models.Entry({
doc: this,
name: this.fullName,
path: "index"
}), this.version && this.entry.addAlias(this.name)), this.entry;
}, e.prototype.findEntryByPathAndHash = function(t, e) {
var n;
return e && (n = this.entries.findBy("path", t + "#" + e)) ? n : "index" === t ? this.toEntry() : this.entries.findBy("path", t);
}, e.prototype.load = function(e, t, n) {
var o, r;
if (null == n && (n = {}), !n.readCache || !this._loadFromCache(e)) return r = this, 
o = function(t) {
r.reset(t), e(), n.writeCache && r._setCache(t);
}, ajax({
url: this.indexUrl(),
success: o,
error: t
});
}, e.prototype.clearCache = function() {
app.localStorage.del(this.slug);
}, e.prototype._loadFromCache = function(t) {
var e, n;
if (e = this._getCache()) return n = this, setTimeout(function() {
n.reset(e), t();
}, 0), !0;
}, e.prototype._getCache = function() {
var t;
if (t = app.localStorage.get(this.slug)) return t[0] === this.mtime ? t[1] : void this.clearCache();
}, e.prototype._setCache = function(t) {
app.localStorage.set(this.slug, [ this.mtime, t ]);
}, e.prototype.install = function(e, t, n) {
var o, r, s, i;
this.installing || (this.installing = !0, o = function() {
s.installing = null, t();
}, i = s = this, r = function(t) {
i.installing = null, app.db.store(i, t, e, o);
}, ajax({
url: this.dbUrl(),
success: r,
error: o,
progress: n,
timeout: 3600
}));
}, e.prototype.uninstall = function(t, e) {
var n, o, r, s;
this.installing || (this.installing = !0, o = function() {
r.installing = null, t();
}, s = r = this, n = function() {
s.installing = null, e();
}, app.db.unstore(this, o, n));
}, e.prototype.getInstallStatus = function(e) {
app.db.version(this, function(t) {
return e({
installed: !!t,
mtime: t
});
});
}, e.prototype.isOutdated = function(t) {
return !!t && ((t.installed || app.settings.get("autoInstall")) && this.mtime !== t.mtime);
}, e;
}(app.Model);
}.call(this), function() {
var o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.models.Entry = function(t) {
function e() {
e.__super__.constructor.apply(this, arguments), this.text = n(app.Searcher.normalizeString(this.name));
}
var i, n;
return o(e, t), e.prototype.addAlias = function(t) {
var e;
e = n(app.Searcher.normalizeString(t)), Array.isArray(this.text) || (this.text = [ this.text ]), 
this.text.push(Array.isArray(e) ? e[1] : e);
}, e.prototype.fullPath = function() {
return this.doc.fullPath(this.isIndex() ? "" : this.path);
}, e.prototype.dbPath = function() {
return this.path.replace(/#.*/, "");
}, e.prototype.filePath = function() {
return this.doc.fullPath(this._filePath());
}, e.prototype.fileUrl = function() {
return this.doc.fileUrl(this._filePath());
}, e.prototype._filePath = function() {
var t;
return ".html" !== (t = this.path.replace(/#.*/, "")).slice(-5) && (t += ".html"), 
t;
}, e.prototype.isIndex = function() {
return "index" === this.path;
}, e.prototype.getType = function() {
return this.doc.types.findBy("name", this.type);
}, e.prototype.loadFile = function(t, e) {
return app.db.load(this, t, e);
}, n = function(t) {
var e, n, o, r, s;
if (i.hasOwnProperty(t)) return [ t, i[t] ];
for (e = n = 0, o = (s = t.split(".")).length; n < o; e = ++n) if (r = s[e], i.hasOwnProperty(r)) return s[e] = i[r], 
[ t, s.join(".") ];
return t;
}, e.ALIASES = i = {
angular: "ng",
"angular.js": "ng",
"backbone.js": "bb",
"c++": "cpp",
coffeescript: "cs",
crystal: "cr",
elixir: "ex",
javascript: "js",
julia: "jl",
jquery: "$",
"knockout.js": "ko",
less: "ls",
lodash: "_",
"l\xf6ve": "love",
marionette: "mn",
markdown: "md",
matplotlib: "mpl",
modernizr: "mdr",
"moment.js": "mt",
openjdk: "java",
nginx: "ngx",
numpy: "np",
pandas: "pd",
postgresql: "pg",
python: "py",
"ruby.on.rails": "ror",
ruby: "rb",
rust: "rs",
sass: "scss",
tensorflow: "tf",
typescript: "ts",
"underscore.js": "_"
}, e;
}(app.Model);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.models.Type = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.prototype.fullPath = function() {
return "/" + this.doc.slug + "-" + this.slug + "/";
}, e.prototype.entries = function() {
return this.doc.entries.findAllBy("type", this.name);
}, e.prototype.toEntry = function() {
return new app.models.Entry({
doc: this.doc,
name: this.doc.name + " / " + this.name,
path: ".." + this.fullPath()
});
}, e;
}(app.Model);
}.call(this), function() {
var r = [].slice;
app.View = function() {
function t() {
this.setupElement(), this.el.className && (this.originalClassName = this.el.className), 
this.constructor.className && this.resetClass(), this.refreshElements(), "function" == typeof this.init && this.init(), 
this.refreshElements();
}
return $.extend(t.prototype, Events), t.prototype.setupElement = function() {
var t, e, n;
if (null == this.el && (this.el = "string" == typeof this.constructor.el ? $(this.constructor.el) : this.constructor.el ? this.constructor.el : document.createElement(this.constructor.tagName || "div")), 
this.constructor.attributes) for (t in e = this.constructor.attributes) n = e[t], 
this.el.setAttribute(t, n);
}, t.prototype.refreshElements = function() {
var t, e, n;
if (this.constructor.elements) for (t in e = this.constructor.elements) n = e[t], 
this[t] = this.find(n);
}, t.prototype.addClass = function(t) {
this.el.classList.add(t);
}, t.prototype.removeClass = function(t) {
this.el.classList.remove(t);
}, t.prototype.toggleClass = function(t) {
this.el.classList.toggle(t);
}, t.prototype.hasClass = function(t) {
return this.el.classList.contains(t);
}, t.prototype.resetClass = function() {
var t, e, n, o;
if (this.el.className = this.originalClassName || "", this.constructor.className) for (t = 0, 
e = (o = this.constructor.className.split(" ")).length; t < e; t++) n = o[t], this.addClass(n);
}, t.prototype.find = function(t) {
return $(t, this.el);
}, t.prototype.findAll = function(t) {
return $$(t, this.el);
}, t.prototype.findByClass = function(t) {
return this.findAllByClass(t)[0];
}, t.prototype.findLastByClass = function(t) {
var e;
return (e = this.findAllByClass(t)[0])[e.length - 1];
}, t.prototype.findAllByClass = function(t) {
return this.el.getElementsByClassName(t);
}, t.prototype.findByTag = function(t) {
return this.findAllByTag(t)[0];
}, t.prototype.findLastByTag = function(t) {
var e;
return (e = this.findAllByTag(t))[e.length - 1];
}, t.prototype.findAllByTag = function(t) {
return this.el.getElementsByTagName(t);
}, t.prototype.append = function(t) {
$.append(this.el, t.el || t);
}, t.prototype.appendTo = function(t) {
$.append(t.el || t, this.el);
}, t.prototype.prepend = function(t) {
$.prepend(this.el, t.el || t);
}, t.prototype.prependTo = function(t) {
$.prepend(t.el || t, this.el);
}, t.prototype.before = function(t) {
$.before(this.el, t.el || t);
}, t.prototype.after = function(t) {
$.after(this.el, t.el || t);
}, t.prototype.remove = function(t) {
$.remove(t.el || t);
}, t.prototype.empty = function() {
$.empty(this.el), this.refreshElements();
}, t.prototype.html = function(t) {
this.empty(), this.append(t);
}, t.prototype.tmpl = function() {
var t, e;
return t = 1 <= arguments.length ? r.call(arguments, 0) : [], (e = app.templates).render.apply(e, t);
}, t.prototype.delay = function(t) {
var e, n, o;
return o = t, n = "number" == typeof (e = 2 <= arguments.length ? r.call(arguments, 1) : [])[e.length - 1] ? e.pop() : 0, 
setTimeout(o.bind.apply(o, [ this ].concat(r.call(e))), n);
}, t.prototype.onDOM = function(t, e) {
$.on(this.el, t, e);
}, t.prototype.offDOM = function(t, e) {
$.off(this.el, t, e);
}, t.prototype.bindEvents = function() {
var t, e, n, o, r;
if (this.constructor.events) for (e in n = this.constructor.events) t = n[e], this.onDOM(e, this[t]);
if (this.constructor.routes) for (e in o = this.constructor.routes) t = o[e], app.router.on(e, this[t]);
if (this.constructor.shortcuts) for (e in r = this.constructor.shortcuts) t = r[e], 
app.shortcuts.on(e, this[t]);
}, t.prototype.unbindEvents = function() {
var t, e, n, o, r;
if (this.constructor.events) for (e in n = this.constructor.events) t = n[e], this.offDOM(e, this[t]);
if (this.constructor.routes) for (e in o = this.constructor.routes) t = o[e], app.router.off(e, this[t]);
if (this.constructor.shortcuts) for (e in r = this.constructor.shortcuts) t = r[e], 
app.shortcuts.off(e, this[t]);
}, t.prototype.addSubview = function(t) {
return (this.subviews || (this.subviews = [])).push(t);
}, t.prototype.activate = function() {
var t, e, n;
if (!this.activated) {
if (this.bindEvents(), this.subviews) for (t = 0, e = (n = this.subviews).length; t < e; t++) n[t].activate();
return this.activated = !0;
}
}, t.prototype.deactivate = function() {
var t, e, n;
if (this.activated) {
if (this.unbindEvents(), this.subviews) for (t = 0, e = (n = this.subviews).length; t < e; t++) n[t].deactivate();
return !(this.activated = !1);
}
}, t.prototype.detach = function() {
this.deactivate(), $.remove(this.el);
}, t;
}();
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Content = function(t) {
function e() {
return this.onAltF = n(this.onAltF, this), this.onClick = n(this.onClick, this), 
this.afterRoute = n(this.afterRoute, this), this.beforeRoute = n(this.beforeRoute, this), 
this.onEntryLoaded = n(this.onEntryLoaded, this), this.onEntryLoading = n(this.onEntryLoading, this), 
this.onBootError = n(this.onBootError, this), this.onReady = n(this.onReady, this), 
this.scrollPageDown = n(this.scrollPageDown, this), this.scrollPageUp = n(this.scrollPageUp, this), 
this.scrollStepDown = n(this.scrollStepDown, this), this.scrollStepUp = n(this.scrollStepUp, this), 
this.scrollToBottom = n(this.scrollToBottom, this), this.scrollToTop = n(this.scrollToTop, this), 
e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.el = "._content", e.loadingClass = "_content-loading", e.events = {
click: "onClick"
}, e.shortcuts = {
altUp: "scrollStepUp",
altDown: "scrollStepDown",
pageUp: "scrollPageUp",
pageDown: "scrollPageDown",
pageTop: "scrollToTop",
pageBottom: "scrollToBottom",
altF: "onAltF"
}, e.routes = {
before: "beforeRoute",
after: "afterRoute"
}, e.prototype.init = function() {
this.scrollEl = app.isMobile() ? document.scrollingElement || document.body : this.el, 
this.scrollMap = {}, this.scrollStack = [], this.rootPage = new app.views.RootPage(), 
this.staticPage = new app.views.StaticPage(), this.settingsPage = new app.views.SettingsPage(), 
this.offlinePage = new app.views.OfflinePage(), this.typePage = new app.views.TypePage(), 
this.entryPage = new app.views.EntryPage(), this.entryPage.on("loading", this.onEntryLoading).on("loaded", this.onEntryLoaded), 
app.on("ready", this.onReady).on("bootError", this.onBootError);
}, e.prototype.show = function(t) {
var e;
this.hideLoading(), t !== this.view && (null != (e = this.view) && e.deactivate(), 
this.html(this.view = t), this.view.activate());
}, e.prototype.showLoading = function() {
this.addClass(this.constructor.loadingClass);
}, e.prototype.isLoading = function() {
return this.el.classList.contains(this.constructor.loadingClass);
}, e.prototype.hideLoading = function() {
this.removeClass(this.constructor.loadingClass);
}, e.prototype.scrollTo = function(t) {
this.scrollEl.scrollTop = t || 0;
}, e.prototype.smoothScrollTo = function(t) {
app.settings.get("fastScroll") ? this.scrollTo(t) : $.smoothScroll(this.scrollEl, t || 0);
}, e.prototype.scrollBy = function(t) {
this.smoothScrollTo(this.scrollEl.scrollTop + t);
}, e.prototype.scrollToTop = function() {
this.smoothScrollTo(0);
}, e.prototype.scrollToBottom = function() {
this.smoothScrollTo(this.scrollEl.scrollHeight);
}, e.prototype.scrollStepUp = function() {
this.scrollBy(-80);
}, e.prototype.scrollStepDown = function() {
this.scrollBy(80);
}, e.prototype.scrollPageUp = function() {
this.scrollBy(40 - this.scrollEl.clientHeight);
}, e.prototype.scrollPageDown = function() {
this.scrollBy(this.scrollEl.clientHeight - 40);
}, e.prototype.scrollToTarget = function() {
var t;
this.routeCtx.hash && (t = this.findTargetByHash(this.routeCtx.hash)) ? ($.scrollToWithImageLock(t, this.scrollEl, "top", {
margin: this.scrollEl === this.el ? 0 : $.offset(this.el).top
}), $.highlight(t, {
className: "_highlight"
})) : this.scrollTo(this.scrollMap[this.routeCtx.state.id]);
}, e.prototype.onReady = function() {
this.hideLoading();
}, e.prototype.onBootError = function() {
this.hideLoading(), this.html(this.tmpl("bootError"));
}, e.prototype.onEntryLoading = function() {
this.showLoading(), this.scrollToTargetTimeout && (clearTimeout(this.scrollToTargetTimeout), 
this.scrollToTargetTimeout = null);
}, e.prototype.onEntryLoaded = function() {
this.hideLoading(), this.scrollToTargetTimeout && (clearTimeout(this.scrollToTargetTimeout), 
this.scrollToTargetTimeout = null), this.scrollToTarget();
}, e.prototype.beforeRoute = function(t) {
this.cacheScrollPosition(), this.routeCtx = t, this.scrollToTargetTimeout = this.delay(this.scrollToTarget);
}, e.prototype.cacheScrollPosition = function() {
if (this.routeCtx && !this.routeCtx.hash && "/" !== this.routeCtx.path) {
if (null == this.scrollMap[this.routeCtx.state.id]) for (this.scrollStack.push(this.routeCtx.state.id); this.scrollStack.length > app.config.history_cache_size; ) delete this.scrollMap[this.scrollStack.shift()];
this.scrollMap[this.routeCtx.state.id] = this.scrollEl.scrollTop;
}
}, e.prototype.afterRoute = function(t, e) {
var n;
switch ("entry" !== t && "type" !== t && resetFavicon(), t) {
case "root":
this.show(this.rootPage);
break;

case "entry":
this.show(this.entryPage);
break;

case "type":
this.show(this.typePage);
break;

case "settings":
this.show(this.settingsPage);
break;

case "offline":
this.show(this.offlinePage);
break;

default:
this.show(this.staticPage);
}
this.view.onRoute(e), app.document.setTitle("function" == typeof (n = this.view).getTitle ? n.getTitle() : void 0);
}, e.prototype.onClick = function(t) {
var e;
(e = $.closestLink($.eventTarget(t), this.el)) && this.isExternalUrl(e.getAttribute("href")) && ($.stopEvent(t), 
$.popup(e));
}, e.prototype.onAltF = function(t) {
var e;
if (!document.activeElement || !$.hasChild(this.el, document.activeElement)) return null != (e = this.find("a:not(:empty)")) && e.focus(), 
$.stopEvent(t);
}, e.prototype.findTargetByHash = function(t) {
var e;
return (e = function() {
try {
return $.id(decodeURIComponent(t));
} catch (error) {}
}()) || (e = function() {
try {
return $.id(t);
} catch (error) {}
}()), e;
}, e.prototype.isExternalUrl = function(t) {
var e;
return "http:/" === (e = null != t ? t.slice(0, 6) : void 0) || "https:" === e;
}, e;
}(app.View);
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.EntryPage = function(t) {
function n() {
return this.onAltO = e(this.onAltO, this), this.onAltC = e(this.onAltC, this), this.onClick = e(this.onClick, this), 
this.onError = e(this.onError, this), this.onSuccess = e(this.onSuccess, this), 
this.beforeRoute = e(this.beforeRoute, this), n.__super__.constructor.apply(this, arguments);
}
var r;
return o(n, t), n.className = "_page", n.errorClass = "_page-error", n.events = {
click: "onClick"
}, n.shortcuts = {
altC: "onAltC",
altO: "onAltO"
}, n.routes = {
before: "beforeRoute"
}, n.prototype.init = function() {
this.cacheMap = {}, this.cacheStack = [];
}, n.prototype.deactivate = function() {
n.__super__.deactivate.apply(this, arguments) && (this.empty(), this.entry = null);
}, n.prototype.loading = function() {
this.empty(), this.trigger("loading");
}, n.prototype.render = function(t, e) {
var n;
(null == t && (t = ""), null == e && (e = !1), this.activated) && (this.empty(), 
this.subview = new (this.subViewClass())(this.el, this.entry), $.batchUpdate(this.el, (n = this, 
function() {
n.subview.render(t, e), e || n.addCopyButtons();
})), app.disabledDocs.findBy("slug", this.entry.doc.slug) && (this.hiddenView = new app.views.HiddenPage(this.el, this.entry)), 
setFaviconForDoc(this.entry.doc), this.delay(this.polyfillMathML), this.trigger("loaded"));
}, n.prototype.addCopyButtons = function() {
var t, e, n;
for (this.copyButton || (this.copyButton = document.createElement("button"), this.copyButton.innerHTML = '<svg><use xlink:href="#icon-copy"/></svg>', 
this.copyButton.type = "button", this.copyButton.className = "_pre-clip", this.copyButton.title = "Copy to clipboard", 
this.copyButton.setAttribute("aria-label", "Copy to clipboard")), t = 0, e = (n = this.findAllByTag("pre")).length; t < e; t++) n[t].appendChild(this.copyButton.cloneNode(!0));
}, n.prototype.polyfillMathML = function() {
!1 === window.supportsMathML && !this.polyfilledMathML && this.findByTag("math") && (this.polyfilledMathML = !0, 
$.append(document.head, '<link rel="stylesheet" href="' + app.config.mathml_stylesheet + '">'));
}, r = {
home: "Homepage",
code: "Source code"
}, n.prototype.prepareContent = function(t) {
var n, o;
return this.entry.isIndex() && this.entry.doc.links ? '<p class="_links">' + function() {
var t, e;
for (n in e = [], t = this.entry.doc.links) o = t[n], e.push('<a href="' + o + '" class="_links-link">' + r[n] + "</a>");
return e;
}.call(this).join("") + "</p>" + t : t;
}, n.prototype.empty = function() {
var t, e;
null != (t = this.subview) && t.deactivate(), (this.subview = null) != (e = this.hiddenView) && e.deactivate(), 
this.hiddenView = null, this.resetClass(), n.__super__.empty.apply(this, arguments);
}, n.prototype.subViewClass = function() {
return app.views[$.classify(this.entry.doc.type) + "Page"] || app.views.BasePage;
}, n.prototype.getTitle = function() {
return this.entry.doc.fullName + (this.entry.isIndex() ? " documentation" : " / " + this.entry.name);
}, n.prototype.beforeRoute = function() {
this.cache(), this.abort();
}, n.prototype.onRoute = function(t) {
var e, n;
e = t.entry.filePath() === (null != (n = this.entry) ? n.filePath() : void 0), this.entry = t.entry, 
e || this.restore() || this.load();
}, n.prototype.load = function() {
this.loading(), this.xhr = this.entry.loadFile(this.onSuccess, this.onError);
}, n.prototype.abort = function() {
this.xhr && (this.xhr.abort(), this.xhr = this.entry = null);
}, n.prototype.onSuccess = function(t) {
this.activated && (this.xhr = null, this.render(this.prepareContent(t)));
}, n.prototype.onError = function() {
var t;
this.xhr = null, this.render(this.tmpl("pageLoadError")), this.resetClass(), this.addClass(this.constructor.errorClass), 
null != (t = app.serviceWorker) && t.update();
}, n.prototype.cache = function() {
var t;
if (!this.xhr && this.entry && !this.cacheMap[t = this.entry.filePath()]) for (this.cacheMap[t] = this.el.innerHTML, 
this.cacheStack.push(t); this.cacheStack.length > app.config.history_cache_size; ) delete this.cacheMap[this.cacheStack.shift()];
}, n.prototype.restore = function() {
var t;
if (this.cacheMap[t = this.entry.filePath()]) return this.render(this.cacheMap[t], !0), 
!0;
}, n.prototype.onClick = function(t) {
var e;
(e = $.eventTarget(t)).hasAttribute("data-retry") ? ($.stopEvent(t), this.load()) : e.classList.contains("_pre-clip") && ($.stopEvent(t), 
e.classList.add($.copyToClipboard(e.parentNode.textContent) ? "_pre-clip-success" : "_pre-clip-error"), 
setTimeout(function() {
return e.className = "_pre-clip";
}, 2e3));
}, n.prototype.onAltC = function() {
var t;
(t = this.find("._attribution:last-child ._attribution-link")) && (console.log(t.href + location.hash), 
navigator.clipboard.writeText(t.href + location.hash));
}, n.prototype.onAltO = function() {
var t;
(t = this.find("._attribution:last-child ._attribution-link")) && this.delay(function() {
return $.popup(t.href + location.hash);
});
}, n;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.OfflinePage = function(t) {
function e() {
return this.onClick = n(this.onClick, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.className = "_static", e.events = {
click: "onClick",
change: "onChange"
}, e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && this.empty();
}, e.prototype.render = function() {
var i;
app.cookieBlocked ? this.html(this.tmpl("offlineError", "cookie_blocked")) : app.docs.getInstallStatuses((i = this, 
function(t) {
var e, n, o, r, s;
if (i.activated) if (!1 === t) i.html(i.tmpl("offlineError", app.db.reason, app.db.error)); else {
for (n = "", o = 0, r = (s = app.docs.all()).length; o < r; o++) e = s[o], n += i.renderDoc(e, t[e.slug]);
i.html(i.tmpl("offlinePage", n)), i.refreshLinks();
}
}));
}, e.prototype.renderDoc = function(t, e) {
return app.templates.render("offlineDoc", t, e);
}, e.prototype.getTitle = function() {
return "Offline";
}, e.prototype.refreshLinks = function() {
var t, e, n, o;
for (e = 0, n = (o = [ "install", "update", "uninstall" ]).length; e < n; e++) t = o[e], 
this.find("[data-action-all='" + t + "']").classList[this.find("[data-action='" + t + "']") ? "add" : "remove"]("_show");
}, e.prototype.docByEl = function(t) {
for (var e; !(e = t.getAttribute("data-slug")); ) t = t.parentNode;
return app.docs.findBy("slug", e);
}, e.prototype.docEl = function(t) {
return this.find("[data-slug='" + t.slug + "']");
}, e.prototype.onRoute = function() {
this.render();
}, e.prototype.onClick = function(t) {
var e, n, o, r, s, i;
if (e = (o = $.eventTarget(t)).getAttribute("data-action")) "update" === e && (e = "install"), 
(n = this.docByEl(o))[e](this.onInstallSuccess.bind(this, n), this.onInstallError.bind(this, n), this.onInstallProgress.bind(this, n)), 
o.parentNode.innerHTML = o.textContent.replace(/e$/, "") + "ing\u2026"; else if (e = o.getAttribute("data-action-all") || o.parentElement.getAttribute("data-action-all")) {
if ("uninstall" === e && !window.confirm("Uninstall all docs?")) return;
for (app.db.migrate(), r = 0, s = (i = this.findAll("[data-action='" + e + "']")).length; r < s; r++) o = i[r], 
$.click(o);
}
}, e.prototype.onInstallSuccess = function(n) {
var o;
this.activated && n.getInstallStatus((o = this, function(t) {
var e;
o.activated && (e = o.docEl(n)) && (e.outerHTML = o.renderDoc(n, t), $.highlight(e, {
className: "_highlight"
}), o.refreshLinks());
}));
}, e.prototype.onInstallError = function(t) {
var e;
this.activated && (e = this.docEl(t)) && (e.lastElementChild.textContent = "Error");
}, e.prototype.onInstallProgress = function(t, e) {
var n, o;
this.activated && e.lengthComputable && (n = this.docEl(t)) && (o = Math.round(100 * e.loaded / e.total), 
n.lastElementChild.textContent = n.lastElementChild.textContent.replace(/(\s.+)?$/, " (" + o + "%)"));
}, e.prototype.onChange = function(t) {
"autoUpdate" === t.target.name && app.settings.set("manualUpdate", !t.target.checked);
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.RootPage = function(t) {
function e() {
return this.onClick = n(this.onClick, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.events = {
click: "onClick"
}, e.prototype.init = function() {
this.isHidden() || this.setHidden(!1), this.render();
}, e.prototype.render = function() {
var t;
this.empty(), t = app.isAndroidWebview() ? "androidWarning" : this.isHidden() ? "splash" : app.isMobile() ? "mobileIntro" : "intro", 
this.append(this.tmpl(t));
}, e.prototype.hideIntro = function() {
this.setHidden(!0), this.render();
}, e.prototype.setHidden = function(t) {
app.settings.set("hideIntro", t);
}, e.prototype.isHidden = function() {
return app.isSingleDoc() || app.settings.get("hideIntro");
}, e.prototype.onRoute = function() {}, e.prototype.onClick = function(t) {
$.eventTarget(t).hasAttribute("data-hide-intro") && ($.stopEvent(t), this.hideIntro());
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.SettingsPage = function(t) {
function e() {
return this.onClick = n(this.onClick, this), this.onChange = n(this.onChange, this), 
e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.className = "_static", e.events = {
click: "onClick",
change: "onChange"
}, e.prototype.render = function() {
this.html(this.tmpl("settingsPage", this.currentSettings()));
}, e.prototype.currentSettings = function() {
var t, e, n, o, r;
for ((r = {}).theme = app.settings.get("theme"), r.smoothScroll = !app.settings.get("fastScroll"), 
r.arrowScroll = app.settings.get("arrowScroll"), r.autoInstall = app.settings.get("autoInstall"), 
r.analyticsConsent = app.settings.get("analyticsConsent"), r.spaceScroll = app.settings.get("spaceScroll"), 
r.spaceTimeout = app.settings.get("spaceTimeout"), r.autoSupported = app.settings.autoSupported, 
t = 0, n = (o = app.settings.LAYOUTS).length; t < n; t++) r[e = o[t]] = app.settings.hasLayout(e);
return r;
}, e.prototype.getTitle = function() {
return "Preferences";
}, e.prototype.setTheme = function(t) {
app.settings.set("theme", t);
}, e.prototype.toggleLayout = function(t, e) {
app.settings.setLayout(t, e);
}, e.prototype.toggleSmoothScroll = function(t) {
app.settings.set("fastScroll", !t);
}, e.prototype.toggleAnalyticsConsent = function(t) {
app.settings.set("analyticsConsent", t ? "1" : "0"), t || resetAnalytics();
}, e.prototype.toggleSpaceScroll = function(t) {
app.settings.set("spaceScroll", t ? 1 : 0);
}, e.prototype.setScrollTimeout = function(t) {
return app.settings.set("spaceTimeout", t);
}, e.prototype.toggle = function(t, e) {
app.settings.set(t, e);
}, e.prototype["export"] = function() {
var t, e;
t = new Blob([ JSON.stringify(app.settings["export"]()) ], {
type: "application/json"
}), (e = document.createElement("a")).href = URL.createObjectURL(t), e.download = "devdocs.json", 
e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e);
}, e.prototype["import"] = function(t, e) {
var n;
t && "application/json" === t.type ? ((n = new FileReader()).onloadend = function() {
var t;
(t = function() {
try {
return JSON.parse(n.result);
} catch (error) {}
}()) && t.constructor === Object ? (app.settings["import"](t), $.trigger(e.form, "import")) : new app.views.Notif("ImportInvalid", {
autoHide: !1
});
}, n.readAsText(t)) : new app.views.Notif("ImportInvalid", {
autoHide: !1
});
}, e.prototype.onChange = function(t) {
var e;
switch ((e = t.target).name) {
case "theme":
this.setTheme(e.value);
break;

case "layout":
this.toggleLayout(e.value, e.checked);
break;

case "smoothScroll":
this.toggleSmoothScroll(e.checked);
break;

case "import":
this["import"](e.files[0], e);
break;

case "analyticsConsent":
this.toggleAnalyticsConsent(e.checked);
break;

case "spaceScroll":
this.toggleSpaceScroll(e.checked);
break;

case "spaceTimeout":
this.setScrollTimeout(e.value);
break;

default:
this.toggle(e.name, e.checked);
}
}, e.prototype.onClick = function(t) {
switch ($.eventTarget(t).getAttribute("data-action")) {
case "export":
$.stopEvent(t), this["export"]();
}
}, e.prototype.onRoute = function() {
this.render();
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.StaticPage = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.className = "_static", e.titles = {
about: "About",
news: "News",
help: "User Guide",
notFound: "404"
}, e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && (this.empty(), this.page = null);
}, e.prototype.render = function(t) {
this.page = t, this.html(this.tmpl(this.page + "Page"));
}, e.prototype.getTitle = function() {
return this.constructor.titles[this.page];
}, e.prototype.onRoute = function(t) {
this.render(t.page || "notFound");
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.TypePage = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.className = "_page", e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && (this.empty(), this.type = null);
}, e.prototype.render = function(t) {
this.type = t, this.html(this.tmpl("typePage", this.type)), setFaviconForDoc(this.type.doc);
}, e.prototype.getTitle = function() {
return this.type.doc.fullName + " / " + this.type.name;
}, e.prototype.onRoute = function(t) {
this.render(t.type);
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Document = function(t) {
function e() {
return this.onVisibilityChange = n(this.onVisibilityChange, this), this.afterRoute = n(this.afterRoute, this), 
e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.el = document, e.events = {
visibilitychange: "onVisibilityChange"
}, e.shortcuts = {
help: "onHelp",
preferences: "onPreferences",
escape: "onEscape",
superLeft: "onBack",
superRight: "onForward"
}, e.routes = {
after: "afterRoute"
}, e.prototype.init = function() {
this.addSubview(this.menu = new app.views.Menu(), this.addSubview(this.sidebar = new app.views.Sidebar())), 
app.views.Resizer.isSupported() && this.addSubview(this.resizer = new app.views.Resizer()), 
this.addSubview(this.content = new app.views.Content()), app.isSingleDoc() || app.isMobile() || this.addSubview(this.path = new app.views.Path()), 
app.isSingleDoc() || (this.settings = new app.views.Settings()), $.on(document.body, "click", this.onClick), 
this.activate();
}, e.prototype.setTitle = function(t) {
return this.el.title = t ? t + " \u2014 DevDocs" : "DevDocs API Documentation";
}, e.prototype.afterRoute = function(t) {
var e, n;
"settings" === t ? null != (e = this.settings) && e.activate() : null != (n = this.settings) && n.deactivate();
}, e.prototype.onVisibilityChange = function() {
"visible" === this.el.visibilityState && this.delay(function() {
app.isMobile() !== app.views.Mobile.detect() && location.reload();
}, 300);
}, e.prototype.onHelp = function() {
app.router.show("/help#shortcuts");
}, e.prototype.onPreferences = function() {
app.router.show("/settings");
}, e.prototype.onEscape = function() {
var t;
t = app.isSingleDoc() && location.pathname !== app.doc.fullPath() ? app.doc.fullPath() : "/", 
app.router.show(t);
}, e.prototype.onBack = function() {
history.back();
}, e.prototype.onForward = function() {
history.forward();
}, e.prototype.onClick = function(t) {
var e;
if ((e = $.eventTarget(t)).hasAttribute("data-behavior")) switch ($.stopEvent(t), 
e.getAttribute("data-behavior")) {
case "back":
history.back();
break;

case "reload":
window.location.reload();
break;

case "reboot":
app.reboot();
break;

case "hard-reload":
app.reload();
break;

case "reset":
confirm("Are you sure you want to reset DevDocs?") && app.reset();
break;

case "accept-analytics":
Cookies.set("analyticsConsent", "1", {
expires: 1e8
}) && app.reboot();
break;

case "decline-analytics":
Cookies.set("analyticsConsent", "0", {
expires: 1e8
}) && app.reboot();
}
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Menu = function(t) {
function e() {
return this.onGlobalClick = n(this.onGlobalClick, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.el = "._menu", e.activeClass = "active", e.events = {
click: "onClick"
}, e.prototype.init = function() {
$.on(document.body, "click", this.onGlobalClick);
}, e.prototype.onClick = function(t) {
var e;
"A" === (e = $.eventTarget(t)).tagName && e.blur();
}, e.prototype.onGlobalClick = function(t) {
var e;
1 === t.which && (("function" == typeof (e = t.target).hasAttribute ? e.hasAttribute("data-toggle-menu") : void 0) ? this.toggleClass(this.constructor.activeClass) : this.hasClass(this.constructor.activeClass) && this.removeClass(this.constructor.activeClass));
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Mobile = function(t) {
function e() {
this.afterRoute = n(this.afterRoute, this), this.onEscape = n(this.onEscape, this), 
this.onTapSearch = n(this.onTapSearch, this), this.onClickSettingsTab = n(this.onClickSettingsTab, this), 
this.onClickDocPickerTab = n(this.onClickDocPickerTab, this), this.onClickToggleSidebar = n(this.onClickToggleSidebar, this), 
this.onClickForward = n(this.onClickForward, this), this.onClickBack = n(this.onClickBack, this), 
this.hideSidebar = n(this.hideSidebar, this), this.showSidebar = n(this.showSidebar, this), 
this.el = document.documentElement, e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.className = "_mobile", e.elements = {
body: "body",
content: "._container",
sidebar: "._sidebar",
docPicker: "._settings ._sidebar"
}, e.shortcuts = {
escape: "onEscape"
}, e.routes = {
after: "afterRoute"
}, e.detect = function() {
if (null != Cookies.get("override-mobile-detect")) return JSON.parse(Cookies.get("override-mobile-detect"));
try {
return window.matchMedia("(max-width: 480px)").matches || window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(max-height: 767px) and (max-width: 1024px)").matches || -1 !== navigator.userAgent.indexOf("Android") && -1 !== navigator.userAgent.indexOf("Mobile") || -1 !== navigator.userAgent.indexOf("IEMobile");
} catch (error) {
return !1;
}
}, e.detectAndroidWebview = function() {
try {
return /(Android).*( Version\/.\.. ).*(Chrome)/.test(navigator.userAgent);
} catch (error) {
return !1;
}
}, e.prototype.init = function() {
var t;
null != (t = window.FastClick) && t.attach(this.body), $.on($("._search"), "touchend", this.onTapSearch), 
this.toggleSidebar = $("button[data-toggle-sidebar]"), this.toggleSidebar.removeAttribute("hidden"), 
$.on(this.toggleSidebar, "click", this.onClickToggleSidebar), this.back = $("button[data-back]"), 
this.back.removeAttribute("hidden"), $.on(this.back, "click", this.onClickBack), 
this.forward = $("button[data-forward]"), this.forward.removeAttribute("hidden"), 
$.on(this.forward, "click", this.onClickForward), this.docPickerTab = $('button[data-tab="doc-picker"]'), 
this.docPickerTab.removeAttribute("hidden"), $.on(this.docPickerTab, "click", this.onClickDocPickerTab), 
this.settingsTab = $('button[data-tab="settings"]'), this.settingsTab.removeAttribute("hidden"), 
$.on(this.settingsTab, "click", this.onClickSettingsTab), app.document.sidebar.search.on("searching", this.showSidebar), 
this.activate();
}, e.prototype.showSidebar = function() {
var t, e;
this.isSidebarShown() ? window.scrollTo(0, 0) : (this.contentTop = window.scrollY, 
this.content.style.display = "none", this.sidebar.style.display = "block", (e = this.findByClass(app.views.ListSelect.activeClass)) ? (t = window.scrollY === this.body.scrollTop ? this.body : document.documentElement, 
$.scrollTo(e, t, "center")) : window.scrollTo(0, this.findByClass(app.views.ListFold.activeClass) && this.sidebarTop || 0));
}, e.prototype.hideSidebar = function() {
this.isSidebarShown() && (this.sidebarTop = window.scrollY, this.sidebar.style.display = "none", 
this.content.style.display = "block", window.scrollTo(0, this.contentTop || 0));
}, e.prototype.isSidebarShown = function() {
return "none" !== this.sidebar.style.display;
}, e.prototype.onClickBack = function() {
return history.back();
}, e.prototype.onClickForward = function() {
return history.forward();
}, e.prototype.onClickToggleSidebar = function() {
this.isSidebarShown() ? this.hideSidebar() : this.showSidebar();
}, e.prototype.onClickDocPickerTab = function(t) {
$.stopEvent(t), this.showDocPicker();
}, e.prototype.onClickSettingsTab = function(t) {
$.stopEvent(t), this.showSettings();
}, e.prototype.showDocPicker = function() {
window.scrollTo(0, 0), this.docPickerTab.classList.add("active"), this.settingsTab.classList.remove("active"), 
this.docPicker.style.display = "block", this.content.style.display = "none";
}, e.prototype.showSettings = function() {
window.scrollTo(0, 0), this.docPickerTab.classList.remove("active"), this.settingsTab.classList.add("active"), 
this.docPicker.style.display = "none", this.content.style.display = "block";
}, e.prototype.onTapSearch = function() {
return window.scrollTo(0, 0);
}, e.prototype.onEscape = function() {
return this.hideSidebar();
}, e.prototype.afterRoute = function(t) {
this.hideSidebar(), "settings" === t ? this.showDocPicker() : this.content.style.display = "block", 
page.canGoBack() ? this.back.removeAttribute("disabled") : this.back.setAttribute("disabled", "disabled"), 
page.canGoForward() ? this.forward.removeAttribute("disabled") : this.forward.setAttribute("disabled", "disabled");
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty, s = [].slice;
app.views.Path = function(t) {
function e() {
return this.afterRoute = n(this.afterRoute, this), this.onClick = n(this.onClick, this), 
e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.className = "_path", e.attributes = {
role: "complementary"
}, e.events = {
click: "onClick"
}, e.routes = {
after: "afterRoute"
}, e.prototype.render = function() {
var t;
t = 1 <= arguments.length ? s.call(arguments, 0) : [], this.html(this.tmpl.apply(this, [ "path" ].concat(s.call(t)))), 
this.show();
}, e.prototype.show = function() {
this.el.parentNode || this.prependTo(app.el);
}, e.prototype.hide = function() {
this.el.parentNode && $.remove(this.el);
}, e.prototype.onClick = function(t) {
$.closestLink(t.target, this.el) && (this.clicked = !0);
}, e.prototype.afterRoute = function(t, e) {
e.type ? this.render(e.doc, e.type) : e.entry ? e.entry.isIndex() ? this.render(e.doc) : this.render(e.doc, e.entry.getType(), e.entry) : this.hide(), 
this.clicked && (this.clicked = null, app.document.sidebar.reset());
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, s = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Resizer = function(t) {
function e() {
return this.onDragEnd = n(this.onDragEnd, this), this.onDrag = n(this.onDrag, this), 
this.onDragStart = n(this.onDragStart, this), e.__super__.constructor.apply(this, arguments);
}
var o, r;
return s(e, t), e.className = "_resizer", e.events = {
dragstart: "onDragStart",
dragend: "onDragEnd"
}, e.isSupported = function() {
return "ondragstart" in document.createElement("div") && !app.isMobile();
}, e.prototype.init = function() {
this.el.setAttribute("draggable", "true"), this.appendTo($("._app"));
}, r = 260, o = 600, e.prototype.resize = function(t, e) {
var n;
0 < (t -= app.el.offsetLeft) && (n = (t = Math.min(Math.max(Math.round(t), r), o)) + "px", 
document.documentElement.style.setProperty("--sidebarWidth", n), e && app.settings.setSize(t));
}, e.prototype.onDragStart = function(t) {
t.dataTransfer.effectAllowed = "link", t.dataTransfer.setData("Text", ""), $.on(window, "dragover", this.onDrag);
}, e.prototype.onDrag = function(t) {
var e;
0 < (e = t.pageX) && (this.lastDragValue = e, this.lastDrag && this.lastDrag > Date.now() - 50 || (this.lastDrag = Date.now(), 
this.resize(e, !1)));
}, e.prototype.onDragEnd = function(t) {
var e;
$.off(window, "dragover", this.onDrag), e = t.pageX || t.screenX - window.screenX, 
!this.lastDragValue || this.lastDragValue - 5 < e && e < this.lastDragValue + 5 || (e = this.lastDragValue), 
this.resize(e, !0);
}, e;
}(app.View);
}.call(this), function() {
var o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, r = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) s.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, s = {}.hasOwnProperty;
app.views.Settings = function(t) {
function e() {
return this.onClick = o(this.onClick, this), this.onImport = o(this.onImport, this), 
this.onSubmit = o(this.onSubmit, this), this.onEnter = o(this.onEnter, this), this.onChange = o(this.onChange, this), 
e.__super__.constructor.apply(this, arguments);
}
var n;
return r(e, t), n = "_sidebar-hidden", e.el = "._settings", e.elements = {
sidebar: "._sidebar",
saveBtn: 'button[type="submit"]',
backBtn: "button[data-back]"
}, e.events = {
"import": "onImport",
change: "onChange",
submit: "onSubmit",
click: "onClick"
}, e.shortcuts = {
enter: "onEnter"
}, e.prototype.init = function() {
this.addSubview(this.docPicker = new app.views.DocPicker());
}, e.prototype.activate = function() {
e.__super__.activate.apply(this, arguments) && (this.render(), document.body.classList.remove(n));
}, e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && (this.resetClass(), this.docPicker.detach(), 
app.settings.hasLayout(n) && document.body.classList.add(n));
}, e.prototype.render = function() {
this.docPicker.appendTo(this.sidebar), this.refreshElements(), this.addClass("_in");
}, e.prototype.save = function(t) {
var r, s;
null == t && (t = {}), this.saving || (this.saving = !0, t["import"] ? s = app.settings.getDocs() : (s = this.docPicker.getSelectedDocs(), 
app.settings.setDocs(s)), this.saveBtn.textContent = "Saving\u2026", new app.collections.Docs(function() {
var t, e, n, o;
for (o = [], t = 0, e = (n = app.docs.all()).length; t < e; t++) r = n[t], -1 === s.indexOf(r.slug) && o.push(r);
return o;
}()).uninstall(function() {
return app.db.migrate(), app.reload();
}));
}, e.prototype.onChange = function() {
this.addClass("_dirty");
}, e.prototype.onEnter = function() {
this.save();
}, e.prototype.onSubmit = function(t) {
t.preventDefault(), this.save();
}, e.prototype.onImport = function() {
this.addClass("_dirty"), this.save({
"import": !0
});
}, e.prototype.onClick = function(t) {
1 === t.which && t.target === this.backBtn && ($.stopEvent(t), app.router.show("/"));
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.ListFocus = function(t) {
function e(t) {
this.el = t, this.onClick = n(this.onClick, this), this.onSuperEnter = n(this.onSuperEnter, this), 
this.onEnter = n(this.onEnter, this), this.onLeft = n(this.onLeft, this), this.onUp = n(this.onUp, this), 
this.onDown = n(this.onDown, this), this.blur = n(this.blur, this), e.__super__.constructor.apply(this, arguments), 
this.focusOnNextFrame = $.framify(this.focus, this);
}
return o(e, t), e.activeClass = "focus", e.events = {
click: "onClick"
}, e.shortcuts = {
up: "onUp",
down: "onDown",
left: "onLeft",
enter: "onEnter",
superEnter: "onSuperEnter",
escape: "blur"
}, e.prototype.focus = function(t, e) {
null == e && (e = {}), t && !t.classList.contains(this.constructor.activeClass) && (this.blur(), 
t.classList.add(this.constructor.activeClass), !0 !== e.silent && $.trigger(t, "focus"));
}, e.prototype.blur = function() {
var t;
(t = this.getCursor()) && (t.classList.remove(this.constructor.activeClass), $.trigger(t, "blur"));
}, e.prototype.getCursor = function() {
return this.findByClass(this.constructor.activeClass) || this.findByClass(app.views.ListSelect.activeClass);
}, e.prototype.findNext = function(t) {
var e;
if (e = t.nextSibling) {
if ("A" === e.tagName) return e;
if ("SPAN" === e.tagName) return $.click(e), this.findNext(t);
if ("DIV" === e.tagName) return 0 <= t.className.indexOf(" open") && this.findFirst(e) || this.findNext(e);
if ("H6" === e.tagName) return this.findNext(e);
} else if (t.parentNode !== this.el) return this.findNext(t.parentNode);
}, e.prototype.findFirst = function(t) {
var e;
if (e = t.firstChild) return "A" === e.tagName ? e : "SPAN" === e.tagName ? ($.click(e), 
this.findFirst(t)) : void 0;
}, e.prototype.findPrev = function(t) {
var e;
if (e = t.previousSibling) {
if ("A" === e.tagName) return e;
if ("SPAN" === e.tagName) return $.click(e), this.findPrev(t);
if ("DIV" === e.tagName) return 0 <= e.previousSibling.className.indexOf("open") && this.findLast(e) || this.findPrev(e);
if ("H6" === e.tagName) return this.findPrev(e);
} else if (t.parentNode !== this.el) return this.findPrev(t.parentNode);
}, e.prototype.findLast = function(t) {
var e;
if (e = t.lastChild) return "A" === e.tagName ? e : "SPAN" === e.tagName || "H6" === e.tagName ? this.findPrev(e) : "DIV" === e.tagName ? this.findLast(e) : void 0;
}, e.prototype.onDown = function() {
var t;
(t = this.getCursor()) ? this.focusOnNextFrame(this.findNext(t)) : this.focusOnNextFrame(this.findByTag("a"));
}, e.prototype.onUp = function() {
var t;
(t = this.getCursor()) ? this.focusOnNextFrame(this.findPrev(t)) : this.focusOnNextFrame(this.findLastByTag("a"));
}, e.prototype.onLeft = function() {
var t, e;
(t = this.getCursor()) && !t.classList.contains(app.views.ListFold.activeClass) && t.parentNode !== this.el && (e = t.parentNode.previousSibling) && e.classList.contains(app.views.ListFold.targetClass) && this.focusOnNextFrame(t.parentNode.previousSibling);
}, e.prototype.onEnter = function() {
var t;
(t = this.getCursor()) && $.click(t);
}, e.prototype.onSuperEnter = function() {
var t;
(t = this.getCursor()) && $.popup(t);
}, e.prototype.onClick = function(t) {
var e;
1 !== t.which || t.metaKey || t.ctrlKey || "A" === (e = $.eventTarget(t)).tagName && this.focus(e, {
silent: !0
});
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.ListFold = function(t) {
function e(t) {
this.el = t, this.onClick = n(this.onClick, this), this.onRight = n(this.onRight, this), 
this.onLeft = n(this.onLeft, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.targetClass = "_list-dir", e.handleClass = "_list-arrow", e.activeClass = "open", 
e.events = {
click: "onClick"
}, e.shortcuts = {
left: "onLeft",
right: "onRight"
}, e.prototype.open = function(t) {
t && !t.classList.contains(this.constructor.activeClass) && (t.classList.add(this.constructor.activeClass), 
$.trigger(t, "open"));
}, e.prototype.close = function(t) {
t && t.classList.contains(this.constructor.activeClass) && (t.classList.remove(this.constructor.activeClass), 
$.trigger(t, "close"));
}, e.prototype.toggle = function(t) {
t.classList.contains(this.constructor.activeClass) ? this.close(t) : this.open(t);
}, e.prototype.reset = function() {
for (var t; t = this.findByClass(this.constructor.activeClass); ) this.close(t);
}, e.prototype.getCursor = function() {
return this.findByClass(app.views.ListFocus.activeClass) || this.findByClass(app.views.ListSelect.activeClass);
}, e.prototype.onLeft = function() {
var t;
(null != (t = this.getCursor()) ? t.classList.contains(this.constructor.activeClass) : void 0) && this.close(t);
}, e.prototype.onRight = function() {
var t;
(null != (t = this.getCursor()) ? t.classList.contains(this.constructor.targetClass) : void 0) && this.open(t);
}, e.prototype.onClick = function(t) {
var e;
1 !== t.which || t.metaKey || t.ctrlKey || t.pageY && ("SVG" === (e = $.eventTarget(t)).parentNode.tagName.toUpperCase() && (e = e.parentNode), 
e.classList.contains(this.constructor.handleClass) ? ($.stopEvent(t), this.toggle(e.parentNode)) : e.classList.contains(this.constructor.targetClass) && (e.hasAttribute("href") ? e.classList.contains(this.constructor.activeClass) ? e.classList.contains(app.views.ListSelect.activeClass) && this.close(e) : this.open(e) : this.toggle(e)));
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.ListSelect = function(t) {
function e(t) {
this.el = t, this.onClick = n(this.onClick, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.activeClass = "active", e.events = {
click: "onClick"
}, e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && this.deselect();
}, e.prototype.select = function(t) {
this.deselect(), t && (t.classList.add(this.constructor.activeClass), $.trigger(t, "select"));
}, e.prototype.deselect = function() {
var t;
(t = this.getSelection()) && (t.classList.remove(this.constructor.activeClass), 
$.trigger(t, "deselect"));
}, e.prototype.selectByHref = function(t) {
var e;
(null != (e = this.getSelection()) ? e.getAttribute("href") : void 0) !== t && this.select(this.find("a[href='" + t + "']"));
}, e.prototype.selectCurrent = function() {
this.selectByHref(location.pathname + location.hash);
}, e.prototype.getSelection = function() {
return this.findByClass(this.constructor.activeClass);
}, e.prototype.onClick = function(t) {
var e;
1 !== t.which || t.metaKey || t.ctrlKey || "A" === (e = $.eventTarget(t)).tagName && this.select(e);
}, e;
}(app.View);
}.call(this), function() {
var s = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.PaginatedList = function(t) {
function o(t) {
var e, n;
this.data = t, this.onClick = s(this.onClick, this), null == (e = (n = this.constructor).events || (n.events = {})).click && (e.click = "onClick"), 
o.__super__.constructor.apply(this, arguments);
}
var r;
return e(o, t), r = app.config.max_results, o.prototype.renderPaginated = function() {
this.page = 0, 1 < this.totalPages() ? this.paginateNext() : this.html(this.renderAll());
}, o.prototype.renderAll = function() {
return this.render(this.data);
}, o.prototype.renderPage = function(t) {
return this.render(this.data.slice((t - 1) * r, t * r));
}, o.prototype.renderPageLink = function(t) {
return this.tmpl("sidebarPageLink", t);
}, o.prototype.renderPrevLink = function(t) {
return this.renderPageLink((t - 1) * r);
}, o.prototype.renderNextLink = function(t) {
return this.renderPageLink(this.data.length - t * r);
}, o.prototype.totalPages = function() {
return Math.ceil(this.data.length / r);
}, o.prototype.paginate = function(t) {
var e;
$.lockScroll(t.nextSibling || t.previousSibling, (e = this, function() {
$.batchUpdate(e.el, function() {
t.nextSibling ? e.paginatePrev(t) : e.paginateNext(t);
});
}));
}, o.prototype.paginateNext = function() {
this.el.lastChild && this.remove(this.el.lastChild), 2 <= this.page && this.hideTopPage(), 
this.page++, this.append(this.renderPage(this.page)), this.page < this.totalPages() && this.append(this.renderNextLink(this.page));
}, o.prototype.paginatePrev = function() {
this.remove(this.el.firstChild), this.hideBottomPage(), this.page--, this.prepend(this.renderPage(this.page - 1)), 
3 <= this.page && this.prepend(this.renderPrevLink(this.page - 1));
}, o.prototype.paginateTo = function(t) {
var e, n, o;
if (n = this.data.indexOf(t), r <= n) for (e = 0, o = Math.floor(n / r); 0 <= o ? e < o : o < e; 0 <= o ? e++ : e--) this.paginateNext();
}, o.prototype.hideTopPage = function() {
var t, e;
for (t = 0, e = this.page <= 2 ? r : r + 1; 0 <= e ? t < e : e < t; 0 <= e ? t++ : t--) this.remove(this.el.firstChild);
this.prepend(this.renderPrevLink(this.page));
}, o.prototype.hideBottomPage = function() {
var t, e;
for (t = 0, e = this.page === this.totalPages() ? this.data.length % r || r : r + 1; 0 <= e ? t < e : e < t; 0 <= e ? t++ : t--) this.remove(this.el.lastChild);
this.append(this.renderNextLink(this.page - 1));
}, o.prototype.onClick = function(t) {
var e;
"SPAN" === (e = $.eventTarget(t)).tagName && ($.stopEvent(t), this.paginate(e));
}, o;
}(app.View);
}.call(this), function() {
var o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Notif = function(t) {
function n(t, e) {
this.type = t, this.options = null != e ? e : {}, this.onClick = o(this.onClick, this), 
this.options = $.extend({}, this.constructor.defautOptions, this.options), n.__super__.constructor.apply(this, arguments);
}
return e(n, t), n.className = "_notif", n.activeClass = "_in", n.attributes = {
role: "alert"
}, n.defautOptions = {
autoHide: 15e3
}, n.events = {
click: "onClick"
}, n.prototype.init = function() {
this.show();
}, n.prototype.show = function() {
this.timeout ? (clearTimeout(this.timeout), this.timeout = this.delay(this.hide, this.options.autoHide)) : (this.render(), 
this.position(), this.activate(), this.appendTo(document.body), this.el.offsetWidth, 
this.addClass(this.constructor.activeClass), this.options.autoHide && (this.timeout = this.delay(this.hide, this.options.autoHide)));
}, n.prototype.hide = function() {
clearTimeout(this.timeout), this.timeout = null, this.detach();
}, n.prototype.render = function() {
this.html(this.tmpl("notif" + this.type));
}, n.prototype.position = function() {
var t, e;
(e = $$("." + app.views.Notif.className)).length && (t = e[e.length - 1], this.el.style.top = t.offsetTop + t.offsetHeight + 16 + "px");
}, n.prototype.onClick = function(t) {
var e;
1 === t.which && ((e = $.eventTarget(t)).hasAttribute("data-behavior") || ("A" !== e.tagName || e.classList.contains("_notif-close")) && ($.stopEvent(t), 
this.hide()));
}, n;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.News = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.className += " _notif-news", e.defautOptions = {
autoHide: 3e4
}, e.prototype.init = function() {
this.unreadNews = this.getUnreadNews(), this.unreadNews.length && this.show(), this.markAllAsRead();
}, e.prototype.render = function() {
this.html(app.templates.notifNews(this.unreadNews));
}, e.prototype.getUnreadNews = function() {
var t, e, n, o, r, s;
if (!(s = this.getLastReadTime())) return [];
for (r = [], t = 0, e = (o = app.news).length; t < e && (n = o[t], !(new Date(n[0]).getTime() <= s)); t++) r.push(n);
return r;
}, e.prototype.getLastNewsTime = function() {
return new Date(app.news[0][0]).getTime();
}, e.prototype.getLastReadTime = function() {
return app.settings.get("news");
}, e.prototype.markAllAsRead = function() {
app.settings.set("news", this.getLastNewsTime());
}, e;
}(app.views.Notif);
}.call(this), function() {
var e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty, s = [].slice;
app.views.Notice = function(t) {
function o(t) {
var e, n;
n = t, e = 2 <= arguments.length ? s.call(arguments, 1) : [], this.type = n, this.args = e, 
o.__super__.constructor.apply(this, arguments);
}
return e(o, t), o.className = "_notice", o.attributes = {
role: "alert"
}, o.prototype.init = function() {
this.activate();
}, o.prototype.activate = function() {
o.__super__.activate.apply(this, arguments) && this.show();
}, o.prototype.deactivate = function() {
o.__super__.deactivate.apply(this, arguments) && this.hide();
}, o.prototype.show = function() {
this.html(this.tmpl.apply(this, [ this.type + "Notice" ].concat(s.call(this.args)))), 
this.prependTo(app.el);
}, o.prototype.hide = function() {
$.remove(this.el);
}, o;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Tip = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.className = "_notif _notif-tip", e.defautOptions = {
autoHide: !1
}, e.prototype.render = function() {
this.html(this.tmpl("tip" + this.type));
}, e;
}(app.views.Notif);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Updates = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.className += " _notif-news", e.defautOptions = {
autoHide: 3e4
}, e.prototype.init = function() {
this.lastUpdateTime = this.getLastUpdateTime(), this.updatedDocs = this.getUpdatedDocs(), 
this.updatedDisabledDocs = this.getUpdatedDisabledDocs(), (0 < this.updatedDocs.length || 0 < this.updatedDisabledDocs.length) && this.show(), 
this.markAllAsRead();
}, e.prototype.render = function() {
this.html(app.templates.notifUpdates(this.updatedDocs, this.updatedDisabledDocs));
}, e.prototype.getUpdatedDocs = function() {
var t, e, n, o, r;
if (!this.lastUpdateTime) return [];
for (r = [], e = 0, n = (o = app.docs.all()).length; e < n; e++) (t = o[e]).mtime > this.lastUpdateTime && r.push(t);
return r;
}, e.prototype.getUpdatedDisabledDocs = function() {
var t, e, n, o, r;
if (!this.lastUpdateTime) return [];
for (r = [], e = 0, n = (o = app.disabledDocs.all()).length; e < n; e++) (t = o[e]).mtime > this.lastUpdateTime && app.docs.findBy("slug_without_version", t.slug_without_version) && r.push(t);
return r;
}, e.prototype.getLastUpdateTime = function() {
return app.settings.get("version");
}, e.prototype.markAllAsRead = function() {
app.settings.set("version", "production" === app.config.env ? app.config.version : Math.floor(Date.now() / 1e3));
}, e;
}(app.views.Notif);
}.call(this), function() {
var o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.BasePage = function(t) {
function n(t, e) {
this.el = t, this.entry = e, this.paintCode = o(this.paintCode, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, t), n.prototype.deactivate = function() {
if (n.__super__.deactivate.apply(this, arguments)) return this.highlightNodes = [];
}, n.prototype.render = function(t, e) {
var n;
null == e && (e = !1), this.highlightNodes = [], this.previousTiming = null, this.constructor.className || this.addClass("_" + this.entry.doc.type), 
this.html(t), e || this.highlightCode(), this.activate(), this.afterRender && this.delay(this.afterRender), 
0 < this.highlightNodes.length && $.requestAnimationFrame((n = this, function() {
return $.requestAnimationFrame(n.paintCode);
}));
}, n.prototype.highlightCode = function() {
var t, e, n, o, r;
for (e = 0, o = (r = this.findAll("pre[data-language]")).length; e < o; e++) n = (t = r[e]).getAttribute("data-language"), 
t.classList.add("language-" + n), this.highlightNodes.push(t);
}, n.prototype.paintCode = function(t) {
var e, n, o, r, s;
for (this.previousTiming ? 50 < Math.round(1e3 / (t - this.previousTiming)) ? this.nodesPerFrame = Math.round(Math.min(1.25 * this.nodesPerFrame, 50)) : this.nodesPerFrame = Math.round(Math.max(.8 * this.nodesPerFrame, 10)) : this.nodesPerFrame = 10, 
o = 0, r = (s = this.highlightNodes.splice(0, this.nodesPerFrame)).length; o < r; o++) (e = (n = s[o]).lastElementChild) && $.remove(e), 
Prism.highlightElement(n), e && $.append(n, e);
0 < this.highlightNodes.length && $.requestAnimationFrame(this.paintCode), this.previousTiming = t;
}, n;
}(app.View);
}.call(this), function() {
var o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.HiddenPage = function(t) {
function n(t, e) {
this.el = t, this.entry = e, this.onClick = o(this.onClick, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, t), n.events = {
click: "onClick"
}, n.prototype.init = function() {
this.addSubview(this.notice = new app.views.Notice("disabledDoc")), this.activate();
}, n.prototype.onClick = function(t) {
var e;
(e = $.closestLink(t.target, this.el)) && ($.stopEvent(t), $.popup(e));
}, n;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.JqueryPage = function(t) {
function e() {
return this.onIframeLoaded = n(this.onIframeLoaded, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.demoClassName = "_jquery-demo", e.prototype.afterRender = function() {
var t, e, n, o;
for (t = 0, n = (o = this.findAllByTag("iframe")).length; t < n; t++) (e = o[t]).style.display = "none", 
$.on(e, "load", this.onIframeLoaded);
return this.runExamples();
}, e.prototype.onIframeLoaded = function(t) {
t.target.style.display = "", $.off(t.target, "load", this.onIframeLoaded);
}, e.prototype.runExamples = function() {
var t, e, n, o;
for (e = 0, n = (o = this.findAllByClass("entry-example")).length; e < n; e++) {
t = o[e];
try {
this.runExample(t);
} catch (error) {}
}
}, e.prototype.runExample = function(t) {
var e, n, o;
(o = t.getElementsByClassName("syntaxhighlighter")[0]) && -1 !== o.innerHTML.indexOf("!doctype") && ((n = t.getElementsByClassName(this.constructor.demoClassName)[0]) || ((n = document.createElement("iframe")).className = this.constructor.demoClassName, 
n.width = "100%", n.height = 200, t.appendChild(n)), (e = n.contentDocument).write(this.fixIframeSource(o.textContent)), 
e.close());
}, e.prototype.fixIframeSource = function(t) {
return (t = (t = t.replace('"/resources/', '"https://api.jquery.com/resources/')).replace("</head>", "<style>\n  html, body { border: 0; margin: 0; padding: 0; }\n  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n</style>\n<script>\n  $.ajaxPrefilter(function(opt, opt2, xhr) {\n    if (opt.url.indexOf('http') !== 0) {\n      xhr.abort();\n      document.body.innerHTML = \"<p><strong>This demo cannot run inside DevDocs.</strong></p>\";\n    }\n  });\n</script>\n</head>")).replace(/<script>/gi, '<script nonce="devdocs">');
}, e;
}(app.views.BasePage);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.RdocPage = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.events = {
click: "onClick"
}, e.prototype.onClick = function(t) {
var e, n;
if (t.target.classList.contains("method-click-advice")) return $.stopEvent(t), e = "block" === (n = $(".method-source-code", t.target.parentNode.parentNode)).style.display, 
n.style.display = e ? "none" : "block", t.target.textContent = e ? "Show source" : "Hide source";
}, e;
}(app.views.BasePage);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.SqlitePage = function(t) {
function e() {
return this.onClick = n(this.onClick, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.events = {
click: "onClick"
}, e.prototype.onClick = function(t) {
var e, n;
(n = t.target.getAttribute("data-toggle")) && (e = this.find("#" + n)) && ($.stopEvent(t), 
"none" === e.style.display ? (e.style.display = "block", t.target.textContent = "hide") : (e.style.display = "none", 
t.target.textContent = "show"));
}, e;
}(app.views.BasePage);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.SupportTablesPage = function(t) {
function e() {
return e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.events = {
click: "onClick"
}, e.prototype.onClick = function(t) {
var e;
if (t.target.classList.contains("show-all")) {
for ($.stopEvent(t), e = t.target; "TABLE" !== e.tagName; ) e = e.parentNode;
e.classList.add("show-all");
}
}, e;
}(app.views.BasePage);
}.call(this), function() {
var r = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, s = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) i.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, i = {}.hasOwnProperty;
app.views.Search = function(t) {
function e() {
return this.afterRoute = r(this.afterRoute, this), this.onScopeChange = r(this.onScopeChange, this), 
this.onClick = r(this.onClick, this), this.onEnd = r(this.onEnd, this), this.onResults = r(this.onResults, this), 
this.duckduckgo = r(this.duckduckgo, this), this.stackoverflow = r(this.stackoverflow, this), 
this.google = r(this.google, this), this.searchUrl = r(this.searchUrl, this), this.onInput = r(this.onInput, this), 
this.onReady = r(this.onReady, this), this.onWindowFocus = r(this.onWindowFocus, this), 
this.autoFocus = r(this.autoFocus, this), this.focus = r(this.focus, this), e.__super__.constructor.apply(this, arguments);
}
var n, o;
return s(e, t), o = app.config.search_param, e.el = "._search", e.activeClass = "_search-active", 
e.elements = {
input: "._search-input",
resetLink: "._search-clear"
}, e.events = {
input: "onInput",
click: "onClick",
submit: "onSubmit"
}, e.shortcuts = {
typing: "focus",
altG: "google",
altS: "stackoverflow",
altD: "duckduckgo"
}, e.routes = {
after: "afterRoute"
}, e.prototype.init = function() {
this.addSubview(this.scope = new app.views.SearchScope(this.el)), this.searcher = new app.Searcher(), 
this.searcher.on("results", this.onResults).on("end", this.onEnd), this.scope.on("change", this.onScopeChange), 
app.on("ready", this.onReady), $.on(window, "hashchange", this.searchUrl), $.on(window, "focus", this.onWindowFocus);
}, e.prototype.focus = function() {
document.activeElement !== this.input && this.input.focus();
}, e.prototype.autoFocus = function() {
var t;
app.isMobile() || $.isAndroid() || $.isIOS() || "INPUT" !== (null != (t = document.activeElement) ? t.tagName : void 0) && this.input.focus();
}, e.prototype.onWindowFocus = function(t) {
if (t.target === window) return this.autoFocus();
}, e.prototype.getScopeDoc = function() {
if (this.scope.isActive()) return this.scope.getScope();
}, e.prototype.reset = function(t) {
!t && this.input.value || this.scope.reset(), this.el.reset(), this.onInput(), this.autoFocus();
}, e.prototype.onReady = function() {
this.value = "", this.delay(this.onInput);
}, e.prototype.onInput = function() {
null != this.value && this.value !== this.input.value && (this.value = this.input.value, 
this.value.length ? this.search() : this.clear());
}, e.prototype.search = function(t) {
null == t && (t = !1), this.addClass(this.constructor.activeClass), this.trigger("searching"), 
this.hasResults = null, this.flags = {
urlSearch: t,
initialResults: !0
}, this.searcher.find(this.scope.getScope().entries.all(), "text", this.value);
}, e.prototype.searchUrl = function() {
var t;
if ("/" === location.pathname) this.scope.searchUrl(); else if (!app.router.isIndex()) return;
if (t = this.extractHashValue()) return this.input.value = this.value = t, this.input.setSelectionRange(t.length, t.length), 
this.search(!0), !0;
}, e.prototype.clear = function() {
this.removeClass(this.constructor.activeClass), this.trigger("clear");
}, e.prototype.externalSearch = function(t) {
var e;
(e = this.value) && (this.scope.name() && (e = this.scope.name() + " " + e), $.popup("" + t + encodeURIComponent(e)), 
this.reset());
}, e.prototype.google = function() {
this.externalSearch("https://www.google.com/search?q=");
}, e.prototype.stackoverflow = function() {
this.externalSearch("https://stackoverflow.com/search?q=");
}, e.prototype.duckduckgo = function() {
this.externalSearch("https://duckduckgo.com/?t=devdocs&q=");
}, e.prototype.onResults = function(t) {
t.length && (this.hasResults = !0), this.trigger("results", t, this.flags), this.flags.initialResults = !1;
}, e.prototype.onEnd = function() {
this.hasResults || this.trigger("noresults");
}, e.prototype.onClick = function(t) {
t.target === this.resetLink && ($.stopEvent(t), this.reset());
}, e.prototype.onSubmit = function(t) {
$.stopEvent(t);
}, e.prototype.onScopeChange = function() {
this.value = "", this.onInput();
}, e.prototype.afterRoute = function(t, e) {
var n;
"escape" !== (null != (n = app.shortcuts.eventInProgress) ? n.name : void 0) && (!e.init && app.router.isIndex() && this.reset(!0), 
e.hash && this.delay(this.searchUrl), $.requestAnimationFrame(this.autoFocus));
}, e.prototype.extractHashValue = function() {
var t;
if (null != (t = this.getHashValue())) return app.router.replaceHash(), t;
}, n = new RegExp("^#" + o + "=(.*)"), e.prototype.getHashValue = function() {
var t;
try {
return null != (t = n.exec($.urlDecode(location.hash))) ? t[1] : void 0;
} catch (error) {}
}, e;
}(app.View);
}.call(this), function() {
var r = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, s = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) i.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, i = {}.hasOwnProperty;
app.views.SearchScope = function(t) {
function e(t) {
this.el = t, this.afterRoute = r(this.afterRoute, this), this.onTextInput = r(this.onTextInput, this), 
this.onKeydown = r(this.onKeydown, this), this.onClick = r(this.onClick, this), 
this.doScopeSearch = r(this.doScopeSearch, this), this.reset = r(this.reset, this), 
this.onResults = r(this.onResults, this), e.__super__.constructor.apply(this, arguments);
}
var n, o;
return s(e, t), o = app.config.search_param, e.elements = {
input: "._search-input",
tag: "._search-tag"
}, e.events = {
click: "onClick",
keydown: "onKeydown",
textInput: "onTextInput"
}, e.routes = {
after: "afterRoute"
}, e.prototype.init = function() {
this.placeholder = this.input.getAttribute("placeholder"), this.searcher = new app.SynchronousSearcher({
fuzzy_min_length: 2,
max_results: 1
}), this.searcher.on("results", this.onResults);
}, e.prototype.getScope = function() {
return this.doc || app;
}, e.prototype.isActive = function() {
return !!this.doc;
}, e.prototype.name = function() {
var t;
return null != (t = this.doc) ? t.name : void 0;
}, e.prototype.search = function(t, e) {
null == e && (e = !1), this.doc || (this.searcher.find(app.docs.all(), "text", t), 
!this.doc && e && this.searcher.find(app.disabledDocs.all(), "text", t));
}, e.prototype.searchUrl = function() {
var t;
(t = this.extractHashValue()) && this.search(t, !0);
}, e.prototype.onResults = function(t) {
var e;
(e = t[0]) && (app.docs.contains(e) ? this.selectDoc(e) : this.redirectToDoc(e));
}, e.prototype.selectDoc = function(t) {
var e;
t !== (e = this.doc) && (this.doc = t, this.tag.textContent = t.fullName, this.tag.style.display = "block", 
this.input.removeAttribute("placeholder"), this.input.value = this.input.value.slice(this.input.selectionStart), 
this.input.style.paddingLeft = this.tag.offsetWidth + 10 + "px", $.trigger(this.input, "input"), 
this.trigger("change", this.doc, e));
}, e.prototype.redirectToDoc = function(t) {
var e;
e = location.hash, app.router.replaceHash(""), location.assign(t.fullPath() + e);
}, e.prototype.reset = function() {
var t;
this.doc && (t = this.doc, this.doc = null, this.tag.textContent = "", this.tag.style.display = "none", 
this.input.setAttribute("placeholder", this.placeholder), this.input.style.paddingLeft = "", 
this.trigger("change", null, t));
}, e.prototype.doScopeSearch = function(t) {
this.search(this.input.value.slice(0, this.input.selectionStart)), this.doc && $.stopEvent(t);
}, e.prototype.onClick = function(t) {
t.target === this.tag && (this.reset(), $.stopEvent(t));
}, e.prototype.onKeydown = function(t) {
if (8 === t.which) this.doc && 0 === this.input.selectionEnd && (this.reset(), $.stopEvent(t)); else if (!this.doc && this.input.value && !$.isChromeForAndroid()) {
if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey) return;
(9 === t.which || 32 === t.which && app.isMobile()) && this.doScopeSearch(t);
}
}, e.prototype.onTextInput = function(t) {
$.isChromeForAndroid() && !this.doc && this.input.value && " " === t.data && this.doScopeSearch(t);
}, e.prototype.extractHashValue = function() {
var t, e;
if (e = this.getHashValue()) return t = $.urlDecode(location.hash).replace("#" + o + "=" + e + " ", "#" + o + "="), 
app.router.replaceHash(t), e;
}, n = new RegExp("^#" + o + "=(.+?) ."), e.prototype.getHashValue = function() {
var t;
try {
return null != (t = n.exec($.urlDecode(location.hash))) ? t[1] : void 0;
} catch (error) {}
}, e.prototype.afterRoute = function(t, e) {
!app.isSingleDoc() && e.init && e.doc && this.selectDoc(e.doc);
}, e;
}(app.View);
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.DocList = function(t) {
function n() {
return this.afterRoute = e(this.afterRoute, this), this.onEnabled = e(this.onEnabled, this), 
this.onClick = e(this.onClick, this), this.onClose = e(this.onClose, this), this.onOpen = e(this.onOpen, this), 
this.render = e(this.render, this), n.__super__.constructor.apply(this, arguments);
}
return o(n, t), n.className = "_list", n.attributes = {
role: "navigation"
}, n.events = {
open: "onOpen",
close: "onClose",
click: "onClick"
}, n.routes = {
after: "afterRoute"
}, n.elements = {
disabledTitle: "._list-title",
disabledList: "._disabled-list"
}, n.prototype.init = function() {
this.lists = {}, this.addSubview(this.listFocus = new app.views.ListFocus(this.el)), 
this.addSubview(this.listFold = new app.views.ListFold(this.el)), this.addSubview(this.listSelect = new app.views.ListSelect(this.el)), 
app.on("ready", this.render);
}, n.prototype.activate = function() {
var t, e;
if (n.__super__.activate.apply(this, arguments)) {
for (e in t = this.lists) t[e].activate();
this.listSelect.selectCurrent();
}
}, n.prototype.deactivate = function() {
var t, e;
if (n.__super__.deactivate.apply(this, arguments)) for (e in t = this.lists) t[e].deactivate();
}, n.prototype.render = function() {
var t, e, n, o, r;
for (e = "", n = 0, o = (r = app.docs.all()).length; n < o; n++) t = r[n], e += this.tmpl("sidebarDoc", t, {
fullName: 1 < app.docs.countAllBy("name", t.name)
});
this.html(e), app.isSingleDoc() || 0 === app.disabledDocs.size() || this.renderDisabled();
}, n.prototype.renderDisabled = function() {
this.append(this.tmpl("sidebarDisabled", {
count: app.disabledDocs.size()
})), this.refreshElements(), this.renderDisabledList();
}, n.prototype.renderDisabledList = function() {
app.settings.get("hideDisabled") ? this.removeDisabledList() : this.appendDisabledList();
}, n.prototype.appendDisabledList = function() {
var t, e, n, o, r, s;
for (n = "", e = (o = []).concat.apply(o, app.disabledDocs.all()); t = e.shift(); ) if (null != t.version) {
for (s = ""; s += this.tmpl("sidebarDoc", t, {
disabled: !0
}), (null != (r = e[0]) ? r.name : void 0) === t.name; ) t = e.shift();
n += this.tmpl("sidebarDisabledVersionedDoc", t, s);
} else n += this.tmpl("sidebarDoc", t, {
disabled: !0
});
this.append(this.tmpl("sidebarDisabledList", n)), this.disabledTitle.classList.add("open-title"), 
this.refreshElements();
}, n.prototype.removeDisabledList = function() {
this.disabledList && $.remove(this.disabledList), this.disabledTitle.classList.remove("open-title"), 
this.refreshElements();
}, n.prototype.reset = function(t) {
var e;
null == t && (t = {}), this.listSelect.deselect(), null != (e = this.listFocus) && e.blur(), 
this.listFold.reset(), (t.revealCurrent || app.isSingleDoc()) && this.revealCurrent();
}, n.prototype.onOpen = function(t) {
var e;
$.stopEvent(t), (e = app.docs.findBy("slug", t.target.getAttribute("data-slug"))) && !this.lists[e.slug] && (this.lists[e.slug] = e.types.isEmpty() ? new app.views.EntryList(e.entries.all()) : new app.views.TypeList(e), 
$.after(t.target, this.lists[e.slug].el));
}, n.prototype.onClose = function(t) {
var e;
$.stopEvent(t), (e = app.docs.findBy("slug", t.target.getAttribute("data-slug"))) && this.lists[e.slug] && (this.lists[e.slug].detach(), 
delete this.lists[e.slug]);
}, n.prototype.select = function(t) {
this.listSelect.selectByHref(null != t ? t.fullPath() : void 0);
}, n.prototype.reveal = function(t) {
this.openDoc(t.doc), t.type && this.openType(t.getType()), this.focus(t), this.paginateTo(t), 
this.scrollTo(t);
}, n.prototype.focus = function(t) {
var e;
null != (e = this.listFocus) && e.focus(this.find("a[href='" + t.fullPath() + "']"));
}, n.prototype.revealCurrent = function() {
var t;
(t = app.router.context.type || app.router.context.entry) && (this.reveal(t), this.select(t));
}, n.prototype.openDoc = function(t) {
app.disabledDocs.contains(t) && t.version && this.listFold.open(this.find("[data-slug='" + t.slug_without_version + "']")), 
this.listFold.open(this.find("[data-slug='" + t.slug + "']"));
}, n.prototype.closeDoc = function(t) {
this.listFold.close(this.find("[data-slug='" + t.slug + "']"));
}, n.prototype.openType = function(t) {
this.listFold.open(this.lists[t.doc.slug].find("[data-slug='" + t.slug + "']"));
}, n.prototype.paginateTo = function(t) {
var e;
null != (e = this.lists[t.doc.slug]) && e.paginateTo(t);
}, n.prototype.scrollTo = function(t) {
$.scrollTo(this.find("a[href='" + t.fullPath() + "']"), null, "top", {
margin: app.isMobile() ? 48 : 0
});
}, n.prototype.toggleDisabled = function() {
this.disabledTitle.classList.contains("open-title") ? (this.removeDisabledList(), 
app.settings.set("hideDisabled", !0)) : (this.appendDisabledList(), app.settings.set("hideDisabled", !1));
}, n.prototype.onClick = function(t) {
var e, n, o;
o = $.eventTarget(t), this.disabledTitle && $.hasChild(this.disabledTitle, o) && "A" !== o.tagName ? ($.stopEvent(t), 
this.toggleDisabled()) : (n = o.getAttribute("data-enable")) && ($.stopEvent(t), 
(e = app.disabledDocs.findBy("slug", n)) && app.enableDoc(e, this.onEnabled, this.onEnabled));
}, n.prototype.onEnabled = function() {
this.reset(), this.render();
}, n.prototype.afterRoute = function(t, e) {
e.init ? this.activated && this.reset({
revealCurrent: !0
}) : this.select(e.type || e.entry);
}, n;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.DocPicker = function(t) {
function e() {
return this.onDOMFocus = n(this.onDOMFocus, this), this.onMouseUp = n(this.onMouseUp, this), 
this.onMouseDown = n(this.onMouseDown, this), e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.className = "_list _list-picker", e.events = {
mousedown: "onMouseDown",
mouseup: "onMouseUp"
}, e.prototype.init = function() {
this.addSubview(this.listFold = new app.views.ListFold(this.el));
}, e.prototype.activate = function() {
e.__super__.activate.apply(this, arguments) && (this.render(), $.on(this.el, "focus", this.onDOMFocus, !0));
}, e.prototype.deactivate = function() {
e.__super__.deactivate.apply(this, arguments) && (this.empty(), $.off(this.el, "focus", this.onDOMFocus, !0), 
this.focusEl = null);
}, e.prototype.render = function() {
var t, e, n, o, r, s, i;
for (n = this.tmpl("docPickerHeader"), e = (o = app.docs.all()).concat.apply(o, app.disabledDocs.all()); t = e.shift(); ) null != t.version ? (e = (r = this.extractVersions(e, t))[0], 
s = r[1], n += this.tmpl("sidebarVersionedDoc", t, this.renderVersions(s), {
open: app.docs.contains(t)
})) : n += this.tmpl("sidebarLabel", t, {
checked: app.docs.contains(t)
});
this.html(n + this.tmpl("docPickerNote")), $.requestAnimationFrame((i = this, function() {
var t;
return null != (t = i.findByTag("input")) ? t.focus() : void 0;
}));
}, e.prototype.renderVersions = function(t) {
var e, n, o, r;
for (n = "", o = 0, r = t.length; o < r; o++) e = t[o], n += this.tmpl("sidebarLabel", e, {
checked: app.docs.contains(e)
});
return n;
}, e.prototype.extractVersions = function(t, e) {
var n, o, r, s, i;
for (o = [], i = [ e ], r = 0, s = t.length; r < s; r++) ((n = t[r]).name === e.name ? i : o).push(n);
return [ o, i ];
}, e.prototype.empty = function() {
this.resetClass(), e.__super__.empty.apply(this, arguments);
}, e.prototype.getSelectedDocs = function() {
var t, e, n, o, r;
for (r = [], t = 0, n = (o = this.findAllByTag("input")).length; t < n; t++) (null != (e = o[t]) ? e.checked : void 0) && r.push(e.name);
return r;
}, e.prototype.onMouseDown = function() {
this.mouseDown = Date.now();
}, e.prototype.onMouseUp = function() {
this.mouseUp = Date.now();
}, e.prototype.onDOMFocus = function(t) {
var e, n;
if ("INPUT" === (n = t.target).tagName) this.mouseDown && Date.now() < this.mouseDown + 100 || this.mouseUp && Date.now() < this.mouseUp + 100 || $.scrollTo(n.parentNode, null, "continuous"); else if (n.classList.contains(app.views.ListFold.targetClass) && (n.blur(), 
!(this.mouseDown && Date.now() < this.mouseDown + 100))) if (this.focusEl === $("input", n.nextElementSibling)) {
for (n.classList.contains(app.views.ListFold.activeClass) && this.listFold.close(n), 
e = n.previousElementSibling; "LABEL" !== e.tagName && !e.classList.contains(app.views.ListFold.targetClass); ) e = e.previousElementSibling;
e.classList.contains(app.views.ListFold.activeClass) && (e = $.makeArray($$("input", e.nextElementSibling)).pop()), 
this.delay(function() {
return e.focus();
});
} else n.classList.contains(app.views.ListFold.activeClass) || this.listFold.open(n), 
this.delay(function() {
return $("input", n.nextElementSibling).focus();
});
this.focusEl = n;
}, e;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.EntryList = function(t) {
function e(t) {
this.entries = t, e.__super__.constructor.apply(this, arguments);
}
return n(e, t), e.tagName = "div", e.className = "_list _list-sub", e.prototype.init = function() {
this.renderPaginated(), this.activate();
}, e.prototype.render = function(t) {
return this.tmpl("sidebarEntry", t);
}, e;
}(app.views.PaginatedList);
}.call(this), function() {
var o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Results = function(t) {
function n(t, e) {
this.sidebar = t, this.search = e, this.onClick = o(this.onClick, this), this.afterRoute = o(this.afterRoute, this), 
this.onClear = o(this.onClear, this), this.onNoResults = o(this.onNoResults, this), 
this.onResults = o(this.onResults, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, t), n.className = "_list", n.events = {
click: "onClick"
}, n.routes = {
after: "afterRoute"
}, n.prototype.deactivate = function() {
n.__super__.deactivate.apply(this, arguments) && this.empty();
}, n.prototype.init = function() {
this.addSubview(this.listFocus = new app.views.ListFocus(this.el)), this.addSubview(this.listSelect = new app.views.ListSelect(this.el)), 
this.search.on("results", this.onResults).on("noresults", this.onNoResults).on("clear", this.onClear);
}, n.prototype.onResults = function(t, e) {
var n;
e.initialResults && null != (n = this.listFocus) && n.blur(), e.initialResults && this.empty(), 
this.append(this.tmpl("sidebarResult", t)), e.initialResults && (e.urlSearch ? this.openFirst() : this.focusFirst());
}, n.prototype.onNoResults = function() {
this.html(this.tmpl("sidebarNoResults"));
}, n.prototype.onClear = function() {
this.empty();
}, n.prototype.focusFirst = function() {
var t;
app.isMobile() || null != (t = this.listFocus) && t.focusOnNextFrame(this.el.firstElementChild);
}, n.prototype.openFirst = function() {
var t;
null != (t = this.el.firstElementChild) && t.click();
}, n.prototype.onDocEnabled = function(t) {
return app.router.show(t.fullPath()), this.sidebar.onDocEnabled();
}, n.prototype.afterRoute = function(t, e) {
"entry" === t ? this.listSelect.selectByHref(e.entry.fullPath()) : this.listSelect.deselect();
}, n.prototype.onClick = function(t) {
var e, n;
if (1 === t.which) return (n = $.eventTarget(t).getAttribute("data-enable")) && ($.stopEvent(t), 
e = app.disabledDocs.findBy("slug", n)) ? app.enableDoc(e, this.onDocEnabled.bind(this, e), $.noop) : void 0;
}, n;
}(app.View);
}.call(this), function() {
var n = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.Sidebar = function(t) {
function e() {
return this.afterRoute = n(this.afterRoute, this), this.onEscape = n(this.onEscape, this), 
this.onAltR = n(this.onAltR, this), this.onClick = n(this.onClick, this), this.onSelect = n(this.onSelect, this), 
this.onFocus = n(this.onFocus, this), this.onSearchClear = n(this.onSearchClear, this), 
this.onSearching = n(this.onSearching, this), this.onScopeChange = n(this.onScopeChange, this), 
this.onReady = n(this.onReady, this), this.showResults = n(this.showResults, this), 
this.resetHover = n(this.resetHover, this), this.resetHoverOnMouseMove = n(this.resetHoverOnMouseMove, this), 
e.__super__.constructor.apply(this, arguments);
}
return o(e, t), e.el = "._sidebar", e.events = {
focus: "onFocus",
select: "onSelect",
click: "onClick"
}, e.routes = {
after: "afterRoute"
}, e.shortcuts = {
altR: "onAltR",
escape: "onEscape"
}, e.prototype.init = function() {
var t, e;
app.isMobile() || this.addSubview(this.hover = new app.views.SidebarHover(this.el)), 
this.addSubview(this.search = new app.views.Search()), this.search.on("searching", this.onSearching).on("clear", this.onSearchClear).scope.on("change", this.onScopeChange), 
this.results = new app.views.Results(this, this.search), this.docList = new app.views.DocList(), 
app.on("ready", this.onReady), $.on(document.documentElement, "mouseleave", (t = this, 
function() {
return t.hide();
})), $.on(document.documentElement, "mouseenter", (e = this, function() {
return e.resetDisplay({
forceNoHover: !1
});
}));
}, e.prototype.hide = function() {
this.removeClass("show");
}, e.prototype.display = function() {
this.addClass("show");
}, e.prototype.resetDisplay = function(t) {
null == t && (t = {}), this.hasClass("show") && (this.removeClass("show"), !1 === t.forceNoHover || this.hasClass("no-hover") || (this.addClass("no-hover"), 
$.on(window, "mousemove", this.resetHoverOnMouseMove)));
}, e.prototype.resetHoverOnMouseMove = function() {
return $.off(window, "mousemove", this.resetHoverOnMouseMove), $.requestAnimationFrame(this.resetHover);
}, e.prototype.resetHover = function() {
return this.removeClass("no-hover");
}, e.prototype.showView = function(t) {
var e, n;
this.view !== t && (null != (e = this.hover) && e.hide(), this.saveScrollPosition(), 
null != (n = this.view) && n.deactivate(), this.view = t, this.render(), this.view.activate(), 
this.restoreScrollPosition());
}, e.prototype.render = function() {
this.html(this.view);
}, e.prototype.showDocList = function() {
this.showView(this.docList);
}, e.prototype.showResults = function() {
this.display(), this.showView(this.results);
}, e.prototype.reset = function() {
this.display(), this.showDocList(), this.docList.reset(), this.search.reset();
}, e.prototype.onReady = function() {
this.view = this.docList, this.render(), this.view.activate();
}, e.prototype.onScopeChange = function(t, e) {
e && this.docList.closeDoc(e), t ? this.docList.reveal(t.toEntry()) : this.scrollToTop();
}, e.prototype.saveScrollPosition = function() {
this.view === this.docList && (this.scrollTop = this.el.scrollTop);
}, e.prototype.restoreScrollPosition = function() {
this.view === this.docList && this.scrollTop ? (this.el.scrollTop = this.scrollTop, 
this.scrollTop = null) : this.scrollToTop();
}, e.prototype.scrollToTop = function() {
this.el.scrollTop = 0;
}, e.prototype.onSearching = function() {
this.showResults();
}, e.prototype.onSearchClear = function() {
this.resetDisplay(), this.showDocList();
}, e.prototype.onFocus = function(t) {
this.display(), t.target !== this.el && $.scrollTo(t.target, this.el, "continuous", {
bottomGap: 2
});
}, e.prototype.onSelect = function() {
this.resetDisplay();
}, e.prototype.onClick = function(t) {
var e;
1 === t.which && ("function" == typeof (e = $.eventTarget(t)).hasAttribute ? e.hasAttribute("data-reset-list") : void 0) && ($.stopEvent(t), 
this.onAltR());
}, e.prototype.onAltR = function() {
this.reset(), this.docList.reset({
revealCurrent: !0
}), this.display();
}, e.prototype.onEscape = function() {
var t;
this.reset(), this.resetDisplay(), (t = this.search.getScopeDoc()) ? this.docList.reveal(t.toEntry()) : this.scrollToTop();
}, e.prototype.onDocEnabled = function() {
this.docList.onEnabled(), this.reset();
}, e.prototype.afterRoute = function(t, e) {
var n;
"escape" !== (null != (n = app.shortcuts.eventInProgress) ? n.name : void 0) && (!e.init && app.router.isIndex() && this.reset(), 
this.resetDisplay());
}, e;
}(app.View);
}.call(this), function() {
var n, o = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, r = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) s.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, s = {}.hasOwnProperty;
app.views.SidebarHover = function(t) {
function e(t) {
this.el = t, this.onRoute = o(this.onRoute, this), this.onClick = o(this.onClick, this), 
this.onScroll = o(this.onScroll, this), this.onMouseout = o(this.onMouseout, this), 
this.onMouseover = o(this.onMouseover, this), this.onBlur = o(this.onBlur, this), 
this.onFocus = o(this.onFocus, this), this.position = o(this.position, this), n() || delete this.constructor.events.mouseover, 
e.__super__.constructor.apply(this, arguments);
}
return r(e, t), e.itemClass = "_list-hover", e.events = {
focus: "onFocus",
blur: "onBlur",
mouseover: "onMouseover",
mouseout: "onMouseout",
scroll: "onScroll",
click: "onClick"
}, e.routes = {
after: "onRoute"
}, e.prototype.show = function(t) {
t !== this.cursor && (this.hide(), this.isTarget(t) && this.isTruncated(t.lastElementChild || t) && (this.cursor = t, 
this.clone = this.makeClone(this.cursor), $.append(document.body, this.clone), null == this.offsetTop && (this.offsetTop = this.el.offsetTop), 
this.position()));
}, e.prototype.hide = function() {
this.cursor && ($.remove(this.clone), this.cursor = this.clone = null);
}, e.prototype.position = function() {
var t;
this.cursor && ((t = $.rect(this.cursor)).top >= this.offsetTop ? (this.clone.style.top = t.top + "px", 
this.clone.style.left = t.left + "px") : this.hide());
}, e.prototype.makeClone = function(t) {
var e;
return (e = t.cloneNode(!0)).classList.add("clone"), e;
}, e.prototype.isTarget = function(t) {
var e;
return null != t && null != (e = t.classList) ? e.contains(this.constructor.itemClass) : void 0;
}, e.prototype.isSelected = function(t) {
return t.classList.contains("active");
}, e.prototype.isTruncated = function(t) {
return t.scrollWidth > t.offsetWidth;
}, e.prototype.onFocus = function(t) {
this.focusTime = Date.now(), this.show(t.target);
}, e.prototype.onBlur = function() {
this.hide();
}, e.prototype.onMouseover = function(t) {
this.isTarget(t.target) && !this.isSelected(t.target) && this.mouseActivated() && this.show(t.target);
}, e.prototype.onMouseout = function(t) {
this.isTarget(t.target) && this.mouseActivated() && this.hide();
}, e.prototype.mouseActivated = function() {
return !this.focusTime || 500 < Date.now() - this.focusTime;
}, e.prototype.onScroll = function() {
this.position();
}, e.prototype.onClick = function(t) {
t.target === this.clone && $.click(this.cursor);
}, e.prototype.onRoute = function() {
this.hide();
}, e;
}(app.View), n = function() {
var t;
return (t = document.createElement("div")).style.cssText = "pointer-events: auto", 
"auto" === t.style.pointerEvents;
};
}.call(this), function() {
var e = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, o = function(t, e) {
function n() {
this.constructor = t;
}
for (var o in e) r.call(e, o) && (t[o] = e[o]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, r = {}.hasOwnProperty;
app.views.TypeList = function(t) {
function n(t) {
this.doc = t, this.onClose = e(this.onClose, this), this.onOpen = e(this.onOpen, this), 
n.__super__.constructor.apply(this, arguments);
}
return o(n, t), n.tagName = "div", n.className = "_list _list-sub", n.events = {
open: "onOpen",
close: "onClose"
}, n.prototype.init = function() {
this.lists = {}, this.render(), this.activate();
}, n.prototype.activate = function() {
var t, e;
if (n.__super__.activate.apply(this, arguments)) for (e in t = this.lists) t[e].activate();
}, n.prototype.deactivate = function() {
var t, e;
if (n.__super__.deactivate.apply(this, arguments)) for (e in t = this.lists) t[e].deactivate();
}, n.prototype.render = function() {
var t, e, n, o, r;
for (e = "", n = 0, o = (r = this.doc.types.groups()).length; n < o; n++) t = r[n], 
e += this.tmpl("sidebarType", t);
return this.html(e);
}, n.prototype.onOpen = function(t) {
var e;
$.stopEvent(t), (e = this.doc.types.findBy("slug", t.target.getAttribute("data-slug"))) && !this.lists[e.slug] && (this.lists[e.slug] = new app.views.EntryList(e.entries()), 
$.after(t.target, this.lists[e.slug].el));
}, n.prototype.onClose = function(t) {
var e;
$.stopEvent(t), (e = this.doc.types.findBy("slug", t.target.getAttribute("data-slug"))) && this.lists[e.slug] && (this.lists[e.slug].detach(), 
delete this.lists[e.slug]);
}, n.prototype.paginateTo = function(t) {
var e;
t.type && null != (e = this.lists[t.getType().slug]) && e.paginateTo(t);
}, n;
}(app.View);
}.call(this), function() {
var u = [].slice;
app.templates.render = function(t, e) {
var n, o, r, s, i, a, c, l;
if (s = t, l = e, n = 3 <= arguments.length ? u.call(arguments, 2) : [], a = app.templates[s], 
Array.isArray(l)) {
for (i = "", o = 0, r = l.length; o < r; o++) c = l[o], i += a.apply(null, [ c ].concat(u.call(n)));
return i;
}
return "function" == typeof a ? a.apply(null, [ l ].concat(u.call(n))) : a;
};
}.call(this), function() {
var t, n;
n = function(t, e, n) {
return null == e && (e = ""), null == n && (n = ""), e && (e = '<p class="_error-text">' + e + "</p>"), 
n && (n = '<p class="_error-links">' + n + "</p>"), '<div class="_error"><h1 class="_error-title">' + t + "</h1>" + e + n + "</div>";
}, t = '<a href="#" data-behavior="back" class="_error-link">Go back</a>', app.templates.notFoundPage = function() {
return n(" Page not found. ", " It may be missing from the source documentation or this could be a bug. ", t);
}, app.templates.pageLoadError = function() {
return n(" The page failed to load. ", " It may be missing from the server (try reloading the app) or you could be offline (try <a href=\"/offline\">installing the documentation for offline usage</a> when online again).<br>\nIf you're online and you keep seeing this, you're likely behind a proxy or firewall that blocks cross-domain requests. ", " " + t + ' &middot; <a href="/#' + location.pathname + '" target="_top" class="_error-link">Reload</a>\n&middot; <a href="#" class="_error-link" data-retry>Retry</a> ');
}, app.templates.bootError = function() {
return n(" The app failed to load. ", ' Check your Internet connection and try <a href="#" data-behavior="reload">reloading</a>.<br>\nIf you keep seeing this, you\'re likely behind a proxy or firewall that blocks cross-domain requests. ');
}, app.templates.offlineError = function(t, e) {
return "cookie_blocked" === t ? n(" Cookies must be enabled to use offline mode. ") : (t = function() {
switch (t) {
case "not_supported":
return " DevDocs requires IndexedDB to cache documentations for offline access.<br>\nUnfortunately your browser either doesn't support IndexedDB or doesn't make it available. ";

case "buggy":
return " DevDocs requires IndexedDB to cache documentations for offline access.<br>\nUnfortunately your browser's implementation of IndexedDB contains bugs that prevent DevDocs from using it. ";

case "private_mode":
return " Your browser appears to be running in private mode.<br>\nThis prevents DevDocs from caching documentations for offline access.";

case "exception":
return ' An error occurred when trying to open the IndexedDB database:<br>\n<code class="_label">' + e.name + ": " + e.message + "</code> ";

case "cant_open":
return ' An error occurred when trying to open the IndexedDB database:<br>\n<code class="_label">' + e.name + ": " + e.message + "</code><br>\nThis could be because you're browsing in private mode or have disallowed offline storage on the domain. ";

case "version":
return ' The IndexedDB database was modified with a newer version of the app.<br>\n<a href="#" data-behavior="reload">Reload the page</a> to use offline mode. ';

case "empty":
return ' The IndexedDB database appears to be corrupted. Try <a href="#" data-behavior="reset">resetting the app</a>. ';
}
}(), n("Offline mode is unavailable.", t));
}, app.templates.unsupportedBrowser = '<div class="_fail">\n  <h1 class="_fail-title">Your browser is unsupported, sorry.</h1>\n  <p class="_fail-text">DevDocs is an API documentation browser which supports the following browsers:\n  <ul class="_fail-list">\n    <li>Recent versions of Firefox, Chrome, or Opera\n    <li>Safari 11.1+\n    <li>Edge 17+\n    <li>iOS 11.3+\n  </ul>\n  <p class="_fail-text">\n    If you\'re unable to upgrade, we apologize.\n    We decided to prioritize speed and new features over support for older browsers.\n  <p class="_fail-text">\n    Note: if you\'re already using one of the browsers above, check your settings and add-ons.\n    The app uses feature detection, not user agent sniffing.\n  <p class="_fail-text">\n    &mdash; <a href="https://twitter.com/DevDocs">@DevDocs</a>\n</div>';
}.call(this), function() {
var e;
e = function(t) {
return '<p class="_notice-text">' + t + "</p>";
}, app.templates.singleDocNotice = function(t) {
return e(" You're browsing the " + t.fullName + ' documentation. To browse all docs, go to\n<a href="//' + app.config.production_host + '" target="_top">' + app.config.production_host + "</a> (or press <code>esc</code>). ");
}, app.templates.disabledDocNotice = function() {
return e(' <strong>This documentation is disabled.</strong>\nTo enable it, go to <a href="/settings" class="_notice-link">Preferences</a>. ');
};
}.call(this), function() {
var c, t;
c = function(t, e) {
return ' <h5 class="_notif-title">' + t + "</h5>\n" + (e = e.replace(/<a /g, '<a class="_notif-link" ')) + '\n<button type="button" class="_notif-close" title="Close"><svg><use xlink:href="#icon-close"/></svg>Close</a>';
}, t = function(t, e) {
return c(t, '<p class="_notif-text">' + e);
}, app.templates.notifUpdateReady = function() {
return t('<span data-behavior="reboot">DevDocs has been updated.</span>', '<span data-behavior="reboot"><a href="#" data-behavior="reboot">Reload the page</a> to use the new version.</span>');
}, app.templates.notifError = function() {
return t(" Oops, an error occurred. ", ' Try <a href="#" data-behavior="hard-reload">reloading</a>, and if the problem persists,\n<a href="#" data-behavior="reset">resetting the app</a>.<br>\nYou can also report this issue on <a href="https://github.com/freeCodeCamp/devdocs/issues/new" target="_blank" rel="noopener">GitHub</a>. ');
}, app.templates.notifQuotaExceeded = function() {
return t(" The offline database has exceeded its size limitation. ", " Unfortunately this quota can't be detected programmatically, and the database can't be opened while over the quota, so it had to be reset. ");
}, app.templates.notifCookieBlocked = function() {
return t(" Please enable cookies. ", " DevDocs will not work properly if cookies are disabled. ");
}, app.templates.notifInvalidLocation = function() {
return t(" DevDocs must be loaded from " + app.config.production_host + " ", " Otherwise things are likely to break. ");
}, app.templates.notifImportInvalid = function() {
return t(" Oops, an error occurred. ", " The file you selected is invalid. ");
}, app.templates.notifNews = function(t) {
return c("Changelog", '<div class="_notif-content _notif-news">' + app.templates.newsList(t, {
years: !1
}) + "</div>");
}, app.templates.notifUpdates = function(t, e) {
var n, o, r, s, i, a;
if (o = '<div class="_notif-content _notif-news">', 0 < t.length) {
for (o += '<div class="_news-row">', o += '<ul class="_notif-list">', r = 0, i = t.length; r < i; r++) o += "<li>" + (n = t[r]).name, 
n.release && (o += " <code>&rarr;</code> " + n.release);
o += "</ul></div>";
}
if (0 < e.length) {
for (o += '<div class="_news-row"><p class="_news-title">Disabled:', o += '<ul class="_notif-list">', 
s = 0, a = e.length; s < a; s++) o += "<li>" + (n = e[s]).name, n.release && (o += " <code>&rarr;</code> " + n.release), 
o += '<span class="_notif-info"><a href="/settings">Enable</a></span>';
o += "</ul></div>";
}
return c("Updates", o + "</div>");
}, app.templates.notifShare = function() {
return t(" Hi there! ", ' Like DevDocs? Help us reach more developers by sharing the link with your friends on\n<a href="https://out.devdocs.io/s/tw" target="_blank" rel="noopener">Twitter</a>, <a href="https://out.devdocs.io/s/fb" target="_blank" rel="noopener">Facebook</a>,\n<a href="https://out.devdocs.io/s/re" target="_blank" rel="noopener">Reddit</a>, etc.<br>Thanks :) ');
}, app.templates.notifUpdateDocs = function() {
return t(" Documentation updates available. ", ' <a href="/offline">Install them</a> as soon as possible to avoid broken pages. ');
}, app.templates.notifAnalyticsConsent = function() {
return t(" Tracking cookies ", ' We would like to gather usage data about how DevDocs is used through Google Analytics and Gauges. We only collect anonymous traffic information.\nPlease confirm if you accept our tracking cookies. You can always change your decision in the settings.\n<br><span class="_notif-right"><a href="#" data-behavior="accept-analytics">Accept</a> or <a href="#" data-behavior="decline-analytics">Decline</a></span> ');
};
}.call(this), function() {
var r;
app.templates.aboutPage = function() {
var o;
return '<nav class="_toc" role="directory">\n  <h3 class="_toc-title">Table of Contents</h3>\n  <ul class="_toc-list">\n    <li><a href="#copyright">Copyright</a>\n    <li><a href="#plugins">Plugins</a>\n    <li><a href="#faq">FAQ</a>\n    <li><a href="#credits">Credits</a>\n    <li><a href="#privacy">Privacy Policy</a>\n  </ul>\n</nav>\n\n<h1 class="_lined-heading">DevDocs: API Documentation Browser</h1>\n<p>DevDocs combines multiple developer documentations in a clean and organized web UI with instant search, offline support, mobile version, dark theme, keyboard shortcuts, and more.\n<p>DevDocs is free and <a href="https://github.com/freeCodeCamp/devdocs">open source</a>. It was created by <a href="https://thibaut.me">Thibaut Courouble</a> and is operated by <a href="https://www.freecodecamp.org/">freeCodeCamp</a>.\n<p>To keep up-to-date with the latest news:\n<ul>\n  <li>Follow <a href="https://twitter.com/DevDocs">@DevDocs</a> on Twitter\n  <li>Watch the repository on <a href="https://github.com/freeCodeCamp/devdocs/subscription">GitHub</a> <iframe class="_github-btn" src="https://ghbtns.com/github-btn.html?user=freeCodeCamp&repo=devdocs&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20" tabindex="-1"></iframe>\n  <li>Join the <a href="https://gitter.im/FreeCodeCamp/DevDocs">Gitter</a> chat room\n</ul>\n\n<h2 class="_block-heading" id="copyright">Copyright and License</h2>\n<p class="_note">\n  <strong>Copyright 2013&ndash;2021 Thibaut Courouble and <a href="https://github.com/freeCodeCamp/devdocs/graphs/contributors">other contributors</a></strong><br>\n  This software is licensed under the terms of the Mozilla Public License v2.0.<br>\n  You may obtain a copy of the source code at <a href="https://github.com/freeCodeCamp/devdocs">github.com/freeCodeCamp/devdocs</a>.<br>\n  For more information, see the <a href="https://github.com/freeCodeCamp/devdocs/blob/main/COPYRIGHT">COPYRIGHT</a>\n  and <a href="https://github.com/freeCodeCamp/devdocs/blob/main/LICENSE">LICENSE</a> files.\n\n<h2 class="_block-heading" id="plugins">Plugins and Extensions</h2>\n<ul>\n  <li><a href="https://chrome.google.com/webstore/detail/devdocs/mnfehgbmkapmjnhcnbodoamcioleeooe">Chrome web app</a>\n  <li><a href="https://github.com/egoist/devdocs-app">Desktop app</a>\n  <li><a href="https://sublime.wbond.net/packages/DevDocs">Sublime Text package</a>\n  <li><a href="https://atom.io/packages/devdocs">Atom package</a>\n  <li><a href="https://marketplace.visualstudio.com/items?itemName=deibit.devdocs">Visual Studio Code extension</a>\n  <li><a href="https://github.com/yannickglt/alfred-devdocs">Alfred workflow</a>\n  <li><a href="https://github.com/search?q=topic%3Adevdocs&type=Repositories">More\u2026</a>\n</ul>\n\n<h2 class="_block-heading" id="faq">Questions & Answers</h2>\n<dl>\n  <dt>Where can I suggest new docs and features?\n  <dd>You can suggest and vote for new docs on the <a href="https://trello.com/b/6BmTulfx/devdocs-documentation">Trello board</a>.<br>\n      If you have a specific feature request, add it to the <a href="https://github.com/freeCodeCamp/devdocs/issues">issue tracker</a>.<br>\n      Otherwise, come talk to us in the <a href="https://gitter.im/FreeCodeCamp/DevDocs">Gitter</a> chat room.\n  <dt>Where can I report bugs?\n  <dd>In the <a href="https://github.com/freeCodeCamp/devdocs/issues">issue tracker</a>. Thanks!\n</dl>\n\n<h2 class="_block-heading" id="credits">Credits</h2>\n\n<p><strong>Special thanks to:</strong>\n<ul>\n  <li><a href="https://sentry.io/">Sentry</a> and <a href="https://get.gaug.es/?utm_source=devdocs&utm_medium=referral&utm_campaign=sponsorships" title="Real Time Web Analytics">Gauges</a> for offering a free account to DevDocs\n  <li><a href="https://out.devdocs.io/s/maxcdn">MaxCDN</a>, <a href="https://out.devdocs.io/s/shopify">Shopify</a>, <a href="https://out.devdocs.io/s/jetbrains">JetBrains</a> and <a href="https://out.devdocs.io/s/code-school">Code School</a> for sponsoring DevDocs in the past\n  <li><a href="https://www.heroku.com">Heroku</a> and <a href="https://newrelic.com/">New Relic</a> for providing awesome free service\n  <li><a href="https://www.jeremykratz.com/">Jeremy Kratz</a> for the C/C++ logo\n</ul>\n\n<div class="_table">\n  <table class="_credits">\n    <tr>\n      <th>Documentation\n      <th>Copyright\n      <th>License\n    ' + function() {
var t, e, n;
for (n = [], t = 0, e = r.length; t < e; t++) o = r[t], n.push("<tr><td>" + o[0] + "<td>&copy; " + o[1] + '<td><a href="' + o[3] + '">' + o[2] + "</a>");
return n;
}().join("") + '\n  </table>\n</div>\n\n<h2 class="_block-heading" id="privacy">Privacy Policy</h2>\n<ul>\n  <li><a href="https://devdocs.io">devdocs.io</a> ("App") is operated by <a href="https://www.freecodecamp.org/">freeCodeCamp</a> ("We").\n  <li>We do not collect personal information through the app.\n  <li>We use Google Analytics and Gauges to collect anonymous traffic information if you have given consent to this. You can change your decision in the <a href="/settings">settings</a>.\n  <li>We use Sentry to collect crash data and improve the app.\n  <li>The app uses cookies to store user preferences.\n  <li>By using the app, you signify your acceptance of this policy. If you do not agree to this policy, please do not use the app.\n  <li>If you have any questions regarding privacy, please email <a href="mailto:privacy@freecodecamp.org">privacy@freecodecamp.org</a>.\n</ul>';
}, r = [ [ "Angular.js", "2010-2020 Google, Inc.", "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/" ], [ "Angular", "2010-2021 Google, Inc.", "CC BY", "https://creativecommons.org/licenses/by/4.0/" ], [ "Ansible", "2012-2018 Michael DeHaan<br>&copy; 2018\u20132021 Red Hat, Inc.", "GPLv3", "https://raw.githubusercontent.com/ansible/ansible/devel/COPYING" ], [ "Apache HTTP Server<br>Apache Pig", "2018 The Apache Software Foundation<br>Apache and the Apache feather logo are trademarks of The Apache Software Foundation.", "Apache", "https://www.apache.org/licenses/LICENSE-2.0" ], [ "Async", "2010-2018 Caolan McMahon", "MIT", "https://raw.githubusercontent.com/caolan/async/master/LICENSE" ], [ "Babel", "2018 Sebastian McKenzie", "MIT", "https://raw.githubusercontent.com/babel/website/master/LICENSE" ], [ "Backbone.js", "2010-2019 Jeremy Ashkenas, DocumentCloud", "MIT", "https://raw.githubusercontent.com/jashkenas/backbone/master/LICENSE" ], [ "Bash", "2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.", "GFDL", "https://www.gnu.org/licenses/fdl-1.3.en.html" ], [ "Bluebird", "2013-2018 Petka Antonov", "MIT", "https://raw.githubusercontent.com/petkaantonov/bluebird/master/LICENSE" ], [ "Bootstrap", "2011-2021 Twitter, Inc.<br>2011-2021 The Bootstrap Authors", "CC BY", "https://creativecommons.org/licenses/by/3.0/" ], [ "Bottle", "2009-2017 Marcel Hellkamp", "MIT", "https://raw.githubusercontent.com/bottlepy/bottle/master/LICENSE" ], [ "Bower", "2018 Bower contributors", "MIT", "https://github.com/bower/bower.github.io/blob/1057905c18d899106f91372e6cca7ef54a91d60f/package.json#L20" ], [ "C<br>C++", "cppreference.com", "CC BY-SA", "http://en.cppreference.com/w/Cppreference:Copyright/CC-BY-SA" ], [ "CakePHP", "2005-present The Cake Software Foundation, Inc.", "MIT", "https://raw.githubusercontent.com/cakephp/cakephp/master/LICENSE" ], [ "Chai", "2017 Chai.js Assertion Library", "MIT", "https://raw.githubusercontent.com/chaijs/chai/master/LICENSE" ], [ "Chef&trade;", "Chef Software, Inc.", "CC BY", "https://raw.githubusercontent.com/chef/chef-web-docs-2016/master/LICENSE" ], [ "Clojure", "Rich Hickey", "EPL", "https://github.com/clojure/clojure/blob/master/epl-v10.html" ], [ "CMake", "2000-2019 Kitware, Inc. and Contributors", "BSD", "https://cmake.org/licensing/" ], [ "Codeception", "2011 Michael Bodnarchuk and contributors", "MIT", "https://raw.githubusercontent.com/Codeception/Codeception/master/LICENSE" ], [ "CodeceptJS", "2015 DavertMik", "MIT", "https://raw.githubusercontent.com/Codeception/CodeceptJS/master/LICENSE" ], [ "CodeIgniter", "2014-2020 British Columbia Institute of Technology", "MIT", "https://raw.githubusercontent.com/bcit-ci/CodeIgniter/develop/license.txt" ], [ "CoffeeScript", "2009-2020 Jeremy Ashkenas", "MIT", "https://raw.githubusercontent.com/jashkenas/coffeescript/master/LICENSE" ], [ "Composer", "Nils Adermann, Jordi Boggiano", "MIT", "https://raw.githubusercontent.com/composer/composer/master/LICENSE" ], [ "Cordova", "2012, 2013, 2015 The Apache Software Foundation", "Apache", "https://raw.githubusercontent.com/apache/cordova-docs/master/LICENSE" ], [ "CSS<br>DOM<br>HTTP<br>HTML<br>JavaScript<br>SVG<br>XPath", "2005-2021 MDN contributors", "CC BY-SA", "https://creativecommons.org/licenses/by-sa/2.5/" ], [ "Crystal", "2012-2021 Manas Technology Solutions", "Apache", "https://raw.githubusercontent.com/crystal-lang/crystal/master/LICENSE" ], [ "Cypress", "2017 Cypress.io", "MIT", "https://raw.githubusercontent.com/cypress-io/cypress-documentation/develop/LICENSE.md" ], [ "D", "1999-2021 The D Language Foundation", "Boost", "https://raw.githubusercontent.com/dlang/phobos/master/LICENSE_1_0.txt" ], [ "D3.js", "2010-2020 Michael Bostock", "BSD", "https://raw.githubusercontent.com/d3/d3/master/LICENSE" ], [ "Dart", "2012 the Dart project authors", "CC BY-SA", "https://creativecommons.org/licenses/by-sa/4.0/" ], [ "Django", "Django Software Foundation and individual contributors", "BSD", "https://raw.githubusercontent.com/django/django/master/LICENSE" ], [ "Django REST Framework", "2011-present Encode OSS Ltd.", "BSD", "https://raw.githubusercontent.com/encode/django-rest-framework/master/LICENSE.md" ], [ "Docker", "2019 Docker, Inc.<br>Docker and the Docker logo are trademarks of Docker, Inc.", "Apache", "https://raw.githubusercontent.com/docker/docker.github.io/master/LICENSE" ], [ "Dojo", "2005-2017 JS Foundation", "BSD + AFL", "http://dojotoolkit.org/license.html" ], [ "Drupal", "2001-2015 by the original authors<br>Drupal is a registered trademark of Dries Buytaert.", "GPLv2", "https://api.drupal.org/api/drupal/LICENSE.txt" ], [ "Electron", "GitHub Inc.", "MIT", "https://raw.githubusercontent.com/electron/electron/master/LICENSE" ], [ "Elixir", "2012 Plataformatec", "Apache", "https://raw.githubusercontent.com/elixir-lang/elixir/master/LICENSE" ], [ "Elisp", "1990-1996, 1998-2021 Free Software Foundation, Inc.", "GPLv3", "https://www.gnu.org/licenses/gpl-3.0.html" ], [ "Ember.js", "2020 Yehuda Katz, Tom Dale and Ember.js contributors", "MIT", "https://raw.githubusercontent.com/emberjs/ember.js/master/LICENSE" ], [ "Enzyme", "2015 Airbnb, Inc.", "MIT", "https://raw.githubusercontent.com/airbnb/enzyme/master/LICENSE.md" ], [ "Erlang", "2010-2021 Ericsson AB", "Apache", "https://raw.githubusercontent.com/erlang/otp/maint/LICENSE.txt" ], [ "ESLint", "JS Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/eslint/eslint/master/LICENSE" ], [ "Express", "2017 StrongLoop, IBM, and other expressjs.com contributors.", "CC BY-SA", "https://raw.githubusercontent.com/expressjs/expressjs.com/gh-pages/LICENSE.md" ], [ "Falcon", "2019 by Falcon contributors", "Apache", "https://raw.githubusercontent.com/falconry/falcon/master/LICENSE" ], [ "Fish", "2005\u20132009 Axel Liljencrantz, 2009\u20132021 fish-shell contributors", "GPLv2", "https://fishshell.com/docs/current/license.html" ], [ "Flask", "2007-2021 Pallets", "BSD", "https://github.com/pallets/flask/blob/master/LICENSE.rst" ], [ "GCC<br>GNU Fortran", "Free Software Foundation", "GFDL", "https://www.gnu.org/licenses/fdl-1.3.en.html" ], [ "Git", "2012-2021 Scott Chacon and others", "MIT", "https://raw.githubusercontent.com/git/git-scm.com/master/MIT-LICENSE.txt" ], [ "GnuCOBOL", "Free Software Foundation", "GFDL", "https://www.gnu.org/licenses/fdl-1.3.en.html" ], [ "Gnuplot", "Copyright 1986 - 1993, 1998, 2004 Thomas Williams, Colin Kelley", "gnuplot license", "https://sourceforge.net/p/gnuplot/gnuplot-main/ci/master/tree/Copyright" ], [ "Go", "Google, Inc.", "CC BY", "https://creativecommons.org/licenses/by/3.0/" ], [ "Godot", "2014-2021 Juan Linietsky, Ariel Manzur, Godot Engine contributors", "MIT", "https://raw.githubusercontent.com/godotengine/godot/master/LICENSE.txt" ], [ "Graphite", "2008-2012 Chris Davis<br>&copy; 2011-2016 The Graphite Project", "Apache", "https://raw.githubusercontent.com/graphite-project/graphite-web/master/LICENSE" ], [ "Groovy", "2003-2020 The Apache Software Foundation", "Apache", "https://github.com/apache/groovy-website/blob/asf-site/LICENSE" ], [ "Grunt", "GruntJS Team", "MIT", "https://github.com/gruntjs/grunt-docs/blob/master/package.json#L10" ], [ "GTK", "The GNOME Project", "LGPLv2.1+", "https://gitlab.gnome.org/GNOME/gtk/-/blob/master/COPYING" ], [ "Handlebars", "2011-2017 Yehuda Katz", "MIT", "https://raw.githubusercontent.com/wycats/handlebars.js/master/LICENSE" ], [ "HAProxy", "2021 Willy Tarreau, HAProxy contributors", "GPLv2", "https://raw.githubusercontent.com/haproxy/haproxy/master/LICENSE" ], [ "Haskell", "The University of Glasgow", "BSD", "https://www.haskell.org/ghc/license" ], [ "Haxe", "2005-2018 Haxe Foundation", "MIT", "https://haxe.org/foundation/open-source.html" ], [ "Homebrew", "2009-present Homebrew contributors", "BSD", "https://raw.githubusercontent.com/Homebrew/brew/master/LICENSE.txt" ], [ "Immutable.js", "2014-2016 Facebook, Inc.", "BSD", "https://raw.githubusercontent.com/facebook/immutable-js/master/LICENSE" ], [ "InfluxData", "2015 InfluxData, Inc.", "MIT", "https://github.com/influxdata/docs.influxdata.com/blob/master/LICENSE" ], [ "Jasmine", "2008-2019 Pivotal Labs", "MIT", "https://raw.githubusercontent.com/jasmine/jasmine/main/MIT.LICENSE" ], [ "Jekyll", "2020 Jekyll Core Team and contributors", "MIT", "https://raw.githubusercontent.com/jekyll/jekyll/master/LICENSE" ], [ "Jest", "2021 Facebook, Inc.", "MIT", "https://raw.githubusercontent.com/facebook/jest/master/LICENSE" ], [ "Jinja", "2007-2021 Pallets", "BSD", "https://github.com/pallets/jinja/blob/master/LICENSE.rst" ], [ "jq", "Stephen Dolan", "CC-BY-3.0", "https://github.com/stedolan/jq/blob/master/COPYING#L24-L28" ], [ "jQuery", "Packt Publishing<br>&copy; jQuery Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/jquery/api.jquery.com/master/LICENSE.txt" ], [ "jQuery Mobile", "jQuery Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/jquery/api.jquerymobile.com/master/LICENSE.txt" ], [ "jQuery UI", "jQuery Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/jquery/api.jqueryui.com/master/LICENSE.txt" ], [ "Julia", "2009-2021 Jeff Bezanson, Stefan Karpinski, Viral B. Shah, and other contributors", "MIT", "https://raw.githubusercontent.com/JuliaLang/julia/master/LICENSE.md" ], [ "JSDoc", "2011-2017 the contributors to the JSDoc 3 documentation project", "CC BY-SA", "https://raw.githubusercontent.com/jsdoc3/jsdoc3.github.com/master/LICENSE" ], [ "Knockout.js", "Steven Sanderson, the Knockout.js team, and other contributors", "MIT", "https://raw.githubusercontent.com/knockout/knockout/master/LICENSE" ], [ "Koa", "2020 Koa contributors", "MIT", "https://raw.githubusercontent.com/koajs/koa/master/LICENSE" ], [ "Kotlin", "2010-2020 JetBrains s.r.o. and Kotlin Programming Language contributors", "Apache", "https://raw.githubusercontent.com/JetBrains/kotlin/master/license/LICENSE.txt" ], [ "Laravel", "Taylor Otwell", "MIT", "https://raw.githubusercontent.com/laravel/framework/master/LICENSE.txt" ], [ "LaTeX", "Karl Berry", "Public Domain", "https://ctan.org/pkg/latex2e-help-texinfo/" ], [ "Leaflet", "2010-2019 Vladimir Agafonkin<br>&copy; 2010-2011, CloudMade<br>Maps &copy; OpenStreetMap contributors.", "BSD", "https://raw.githubusercontent.com/Leaflet/Leaflet/master/LICENSE" ], [ "Less", "2009-2020 The Core Less Team", "CC BY", "https://creativecommons.org/licenses/by/3.0/" ], [ "Liquid", "2005, 2006 Tobias Luetke", "MIT", "https://raw.githubusercontent.com/Shopify/liquid/master/LICENSE" ], [ "Lo-Dash", "JS Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/lodash/lodash/master/LICENSE" ], [ "Lua", "1994\u20132020 Lua.org, PUC-Rio", "MIT", "http://www.lua.org/license.html" ], [ "L&Ouml;VE", "2006-2020 L&Ouml;VE Development Team", "GFDL", "http://www.gnu.org/copyleft/fdl.html" ], [ "MariaDB", "2019 MariaDB", "CC BY-SA & GFDL", "https://mariadb.com/kb/en/library/documentation/+license/" ], [ "Marionette.js", "2017 Muted Solutions, LLC", "MIT", "https://mutedsolutions.mit-license.org/" ], [ "Markdown", "2004 John Gruber", "BSD", "https://daringfireball.net/projects/markdown/license" ], [ "Matplotlib", "2012-2021 Matplotlib Development Team. All rights reserved.", "Custom", "https://raw.githubusercontent.com/matplotlib/matplotlib/master/LICENSE/LICENSE" ], [ "Meteor", "2011-2017 Meteor Development Group, Inc.", "MIT", "https://raw.githubusercontent.com/meteor/meteor/master/LICENSE" ], [ "Minitest", "Ryan Davis, seattle.rb", "MIT", "https://github.com/seattlerb/minitest/blob/master/README.rdoc#license" ], [ "Mocha", "2011-2021 JS Foundation and contributors", "CC BY", "https://creativecommons.org/licenses/by/4.0/" ], [ "Modernizr", "2009-2020 The Modernizr team", "MIT", "https://modernizr.com/license/" ], [ "Moment.js", "JS Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/moment/moment/master/LICENSE" ], [ "Mongoose", "2010 LearnBoost", "MIT", "https://github.com/LearnBoost/mongoose/blob/master/README.md#license" ], [ "nginx", "2002-2021 Igor Sysoev<br>&copy; 2011-2021 Nginx, Inc.", "BSD", "http://nginx.org/LICENSE" ], [ "nginx / Lua Module", '2009-2017 Xiaozhe Wang (chaoslawful)<br>&copy; 2009-2018 Yichun "agentzh" Zhang (\u7ae0\u4ea6\u6625), OpenResty Inc.', "BSD", "https://github.com/openresty/lua-nginx-module#copyright-and-license" ], [ "Nim", "2006-2021 Andreas Rumpf", "MIT", "https://github.com/nim-lang/Nim#license" ], [ "Node.js", "Joyent, Inc. and other Node contributors<br>Node.js is a trademark of Joyent, Inc.", "MIT", "https://raw.githubusercontent.com/nodejs/node/master/LICENSE" ], [ "Nokogiri", "2008-2018 Aaron Patterson, Mike Dalessio, Charles Nutter, Sergio Arbeo, Patrick Mahoney, Yoko Harada, Akinori MUSHA, John Shahid, Lars Kanis", "MIT", "https://raw.githubusercontent.com/sparklemotion/nokogiri/master/LICENSE.md" ], [ "npm", "npm, Inc. and Contributors<br>npm is a trademark of npm, Inc.", "npm", "https://raw.githubusercontent.com/npm/npm/master/LICENSE" ], [ "NumPy", "2005-2021 NumPy Developers", "BSD", "https://raw.githubusercontent.com/numpy/numpy/master/LICENSE.txt" ], [ "OCaml", "1995-2021 INRIA", "CC BY-SA", "https://ocaml.org/docs/" ], [ "Octave", "1996-2018 John W. Eaton", "Octave", "https://octave.org/doc/interpreter/" ], [ "OpenJDK", "1993, 2020, Oracle and/or its affiliates. All rights reserved.<br>Licensed under the GNU General Public License, version 2, with the Classpath Exception.<br>Various third party code in OpenJDK is licensed under different licenses.<br>Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.", "GPLv2", "http://openjdk.java.net/legal/gplv2+ce.html" ], [ "OpenTSDB", "2010-2016 The OpenTSDB Authors", "LGPLv2.1", "https://raw.githubusercontent.com/OpenTSDB/opentsdb.net/gh-pages/COPYING.LESSER" ], [ "Padrino", "2010-2020 Padrino", "MIT", "https://raw.githubusercontent.com/padrino/padrino-framework/master/padrino/LICENSE.txt" ], [ "pandas", "2008-2020, AQR Capital Management, LLC, Lambda Foundry, Inc. and PyData Development Team", "BSD", "https://raw.githubusercontent.com/pydata/pandas/master/LICENSE" ], [ "Perl", "1993-2020 Larry Wall and others", "GPLv1", "https://perldoc.perl.org/index-licence.html" ], [ "Phalcon", "2011-2017 Phalcon Framework Team", "CC BY", "https://docs.phalconphp.com/en/latest/reference/license.html" ], [ "Phaser", "2016 Richard Davey, Photon Storm Ltd.", "MIT", "https://raw.githubusercontent.com/photonstorm/phaser/master/license.txt" ], [ "Phoenix", "2014 Chris McCord", "MIT", "https://raw.githubusercontent.com/phoenixframework/phoenix/master/LICENSE.md" ], [ "PHP", "1997-2018 The PHP Documentation Group", "CC BY", "https://secure.php.net/manual/en/copyright.php" ], [ "PHPUnit", "2005-2017 Sebastian Bergmann", "CC BY", "https://creativecommons.org/licenses/by/3.0/" ], [ "Pony", "2016-2020, The Pony Developers & 2014-2015, Causality Ltd.", "BSD", "https://raw.githubusercontent.com/ponylang/ponyc/master/LICENSE" ], [ "PostgreSQL", "1996-2021 The PostgreSQL Global Development Group<br>&copy; 1994 The Regents of the University of California", "PostgreSQL", "https://www.postgresql.org/about/licence/" ], [ "Puppeteer", "2021 Google Inc", "Apache", "https://raw.githubusercontent.com/puppeteer/puppeteer/master/LICENSE" ], [ "Pygame", "Pygame Developers", "LGPLv2.1", "https://raw.githubusercontent.com/pygame/pygame/master/LICENSE" ], [ "Python", "2001-2021 Python Software Foundation<br>Python is a trademark of the Python Software Foundation.", "PSFL", "https://docs.python.org/3/license.html" ], [ "PyTorch", "2019 Torch Contributors", "BSD", "https://raw.githubusercontent.com/pytorch/pytorch/master/LICENSE" ], [ "Q", "2009-2017 Kristopher Michael Kowal", "MIT", "https://raw.githubusercontent.com/kriskowal/q/master/LICENSE" ], [ "Qt", "2012-2018 The Qt Company Ltd", "GFDL", "https://doc.qt.io/qt-5/licensing.html" ], [ "R", "1999\u20132012 R Foundation for Statistical Computing", "GPL", "https://svn.r-project.org/R/trunk/COPYING" ], [ "Ramda", "2013-2020 Scott Sauyet and Michael Hurley", "MIT", "https://raw.githubusercontent.com/ramda/ramda/master/LICENSE.txt" ], [ "React, React Native, Flow, Relay", "2013-present Facebook Inc.", "MIT", "https://raw.githubusercontent.com/facebook/react/master/LICENSE" ], [ "React Bootstrap", "2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff", "MIT", "https://raw.githubusercontent.com/react-bootstrap/react-bootstrap/master/LICENSE" ], [ "ReactiveX", "ReactiveX contributors", "Apache", "https://raw.githubusercontent.com/ReactiveX/reactivex.github.io/develop/LICENSE" ], [ "Redis", "2009-2020 Salvatore Sanfilippo", "CC BY-SA", "https://creativecommons.org/licenses/by-sa/4.0/" ], [ "Redux", "2015-2020 Dan Abramov", "MIT", "https://raw.githubusercontent.com/reactjs/redux/master/LICENSE.md" ], [ "RequireJS", "jQuery Foundation and other contributors", "MIT", "https://raw.githubusercontent.com/requirejs/requirejs/master/LICENSE" ], [ "RethinkDB", "RethinkDB contributors", "CC BY-SA", "https://raw.githubusercontent.com/rethinkdb/docs/master/LICENSE" ], [ "Ruby", "1993-2017 Yukihiro Matsumoto", "Ruby", "https://www.ruby-lang.org/en/about/license.txt" ], [ "Ruby on Rails", "2004-2020 David Heinemeier Hansson<br>Rails, Ruby on Rails, and the Rails logo are trademarks of David Heinemeier Hansson.", "MIT", "https://raw.githubusercontent.com/rails/rails/master/activerecord/MIT-LICENSE" ], [ "Rust", "2010 The Rust Project Developers", "MIT", "https://raw.githubusercontent.com/rust-lang/book/master/LICENSE-MIT" ], [ "RxJS", "2015-2021 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors", "Apache", "https://raw.githubusercontent.com/ReactiveX/rxjs/master/LICENSE.txt" ], [ "Salt Stack", "2021 SaltStack", "Apache", "https://raw.githubusercontent.com/saltstack/salt/develop/LICENSE" ], [ "Sass", "2006-2020 Hampton Catlin, Nathan Weizenbaum, and Chris Eppstein", "MIT", "https://raw.githubusercontent.com/sass/sass/stable/MIT-LICENSE" ], [ "Scala", "2002-2019 EPFL, with contributions from Lightbend", "Apache", "https://raw.githubusercontent.com/scala/scala-lang/master/license.md" ], [ "scikit-image", "2019 the scikit-image team", "BSD", "https://scikit-image.org/docs/dev/license.html" ], [ "scikit-learn", "2007-2020 The scikit-learn developers", "BSD", "https://raw.githubusercontent.com/scikit-learn/scikit-learn/master/COPYING" ], [ "Sinon", "2010-2021 Christian Johansen", "BSD", "https://raw.githubusercontent.com/sinonjs/sinon/master/LICENSE" ], [ "Sequelize", "2014\u2014present Sequelize contributors", "MIT", "https://raw.githubusercontent.com/sequelize/sequelize/master/LICENSE" ], [ "Socket.io", "2014-2018 Automattic", "MIT", "https://raw.githubusercontent.com/Automattic/socket.io/master/LICENSE" ], [ "SQLite", "n/a", "Public Domain", "https://sqlite.org/copyright.html" ], [ "Statsmodels", "2009-2012 Statsmodels Developers<br>&copy; 2006-2008 Scipy Developers<br>&copy; 2006 Jonathan E. Taylor", "BSD", "https://raw.githubusercontent.com/statsmodels/statsmodels/master/LICENSE.txt" ], [ "Symfony", "2004-2017 Fabien Potencier", "MIT", "https://symfony.com/doc/current/contributing/code/license.html" ], [ "Tcl/Tk", "The Regents of the University of California, Sun Microsystems, Inc., Scriptics Corporation, and other parties", "Tcl/Tk", "http://tcl.tk/software/tcltk/license.html" ], [ "TensorFlow", "2020 The TensorFlow Authors", "CC BY", "https://creativecommons.org/licenses/by/4.0/" ], [ "Terraform", "2018 HashiCorp", "MPL", "https://raw.githubusercontent.com/hashicorp/terraform-website/master/LICENSE.md" ], [ "Trio", "2017 Nathaniel J. Smith", "MIT", "https://raw.githubusercontent.com/python-trio/trio/master/LICENSE.MIT" ], [ "Twig", "2009-2020 The Twig Team", "BSD", "https://twig.symfony.com/license" ], [ "TypeScript", "2012-2021 Microsoft", "Apache", "https://raw.githubusercontent.com/Microsoft/TypeScript-Handbook/master/LICENSE" ], [ "Underscore.js", "2009-2021 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors", "MIT", "https://raw.githubusercontent.com/jashkenas/underscore/master/LICENSE" ], [ "Vagrant", "2010-2018 Mitchell Hashimoto", "MPL", "https://raw.githubusercontent.com/mitchellh/vagrant/master/website/LICENSE.md" ], [ "Vue Router", "2013-present Evan You", "MIT", "https://raw.githubusercontent.com/vuejs/vue-router/dev/LICENSE" ], [ "Vue.js", "2013-present Yuxi Evan You", "MIT", "https://raw.githubusercontent.com/vuejs/vuejs.org/master/LICENSE" ], [ "Vuex", "2015-present Evan You", "MIT", "https://raw.githubusercontent.com/vuejs/vuex/dev/LICENSE" ], [ "Vulkan", "2014-2017 Khronos Group Inc.<br>Vulkan and the Vulkan logo are registered trademarks of the Khronos Group Inc.", "CC BY", "https://creativecommons.org/licenses/by/4.0/" ], [ "webpack", "JS Foundation and other contributors", "CC BY", "https://creativecommons.org/licenses/by/4.0/" ], [ "Werkzeug", "2007-2021 Pallets", "BSD", "https://github.com/pallets/werkzeug/blob/master/LICENSE.rst" ], [ "Wordpress", "2003-2021 WordPress Foundation", "GPLv2+", "https://wordpress.org/about/license/" ], [ "Yarn", "2016-present Yarn Contributors", "BSD", "https://raw.githubusercontent.com/yarnpkg/yarn/master/LICENSE" ], [ "Yii", "2008-2017 by Yii Software LLC", "BSD", "https://raw.githubusercontent.com/yiisoft/yii/master/LICENSE" ], [ "Spring Boot", "2002-2020 Pivotal, Inc. All Rights Reserved.", "Apache License 2.0", "https://raw.githubusercontent.com/spring-projects/spring-boot/master/LICENSE.txt" ] ];
}.call(this), function() {
app.templates.helpPage = function() {
var e, n, t, o, r, s, i, a, c, l, u, p;
for (o = $.isMac() ? "cmd" : "ctrl", u = $.isMac() ? "cmd" : "alt", t = app.settings.get("arrowScroll"), 
e = {}, n = {}, a = Object.keys(app.models.Entry.ALIASES), l = Math.ceil(a.length / 2) - 1, 
r = s = 0, c = a.length; s < c; r = ++s) i = a[r], (l < r ? n : e)[i] = app.models.Entry.ALIASES[i];
return '<nav class="_toc" role="directory">\n  <h3 class="_toc-title">Table of Contents</h3>\n  <ul class="_toc-list">\n    <li><a href="#managing-documentations">Managing Documentations</a>\n    <li><a href="#search">Search</a>\n    <li><a href="#shortcuts">Keyboard Shortcuts</a>\n    <li><a href="#aliases">Search Aliases</a>\n  </ul>\n</nav>\n\n<h1 class="_lined-heading">User Guide</h1>\n\n<h2 class="_block-heading" id="managing-documentations">Managing Documentations</h2>\n<p>\n  Documentations can be enabled and disabled in the <a href="/settings">Preferences</a>.\n  Alternatively, you can enable a documentation by searching for it in the main search\n  and clicking the "Enable" link in the results.\n  For faster and better search, only enable the documentations you plan on actively using.\n<p>\n  Once a documentation is enabled, it becomes part of the search and its content can be downloaded for offline access \u2014 and faster page loads when online \u2014 in the <a href="/offline">Offline</a> area.\n\n<h2 class="_block-heading" id="search">Search</h2>\n<p>\n  The search is case-insensitive and ignores whitespace. It supports fuzzy matching\n  (e.g. <code class="_label">bgcp</code> matches <code class="_label">background-clip</code>)\n  as well as aliases (full list <a href="#aliases">below</a>).\n<dl>\n  <dt id="doc_search">Searching a single documentation\n  <dd>\n    The search can be scoped to a single documentation by typing its name (or an abbreviation)\n    and pressing <code class="_label">tab</code> (<code class="_label">space</code>&nbsp;on mobile).\n    For example, to search the JavaScript documentation, enter <code class="_label">javascript</code>\n    or <code class="_label">js</code>, then <code class="_label">tab</code>.<br>\n    To clear the current scope, empty the search field and hit <code class="_label">backspace</code> or\n    <code class="_label">esc</code>.\n  <dt id="url_search">Prefilling the search field\n  <dd>\n    The search can be prefilled from the URL by visiting <a href="/#q=keyword" target="_top">devdocs.io/#q=keyword</a>.\n    Characters after <code class="_label">#q=</code> will be used as search query.<br>\n    To search a single documentation, add its name (or an abbreviation) and a space before the keyword:\n    <a href="/#q=js%20date" target="_top">devdocs.io/#q=js date</a>.\n  <dt id="browser_search">Searching using the address bar\n  <dd>\n    DevDocs supports OpenSearch. It can easily be installed as a search engine on most web browsers:\n    <ul>\n      <li>On Chrome, the setup is done automatically. Simply press <code class="_label">tab</code> when devdocs.io is autocompleted\n          in the omnibox (to set a custom keyword, click <em>Manage search engines\u2026</em> in Chrome\'s settings).\n      <li>On Firefox, <a href="https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox#w_add-a-search-engine-from-the-address-bar">add the search from the address bar</a>:\n          Click \u2022\u2022\u2022 in the address bar, and select <em>Add Search Engine</em>. Then, you can add a keyword for this search engine in the preferences.\n</dl>\n<p>\n  <i>Note: the above search features only work for documentations that are enabled.</i>\n\n<h2 class="_block-heading" id="shortcuts">Keyboard Shortcuts</h2>\n<h3 class="_shortcuts-title">Sidebar</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    ' + (t ? '<code class="_shortcut-code">shift</code> + ' : "") + '\n    <code class="_shortcut-code">&darr;</code>\n    <code class="_shortcut-code">&uarr;</code>\n  <dd class="_shortcuts-dd">Move selection\n  <dt class="_shortcuts-dt">\n    ' + (t ? '<code class="_shortcut-code">shift</code> + ' : "") + '\n    <code class="_shortcut-code">&rarr;</code>\n    <code class="_shortcut-code">&larr;</code>\n  <dd class="_shortcuts-dd">Show/hide sub-list\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">enter</code>\n  <dd class="_shortcuts-dd">Open selection\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">' + o + ' + enter</code>\n  <dd class="_shortcuts-dd">Open selection in a new tab\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + r</code>\n  <dd class="_shortcuts-dd">Reveal current page in sidebar\n</dl>\n<h3 class="_shortcuts-title">Browsing</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">' + u + ' + &larr;</code>\n    <code class="_shortcut-code">' + u + ' + &rarr;</code>\n  <dd class="_shortcuts-dd">Go back/forward\n  <dt class="_shortcuts-dt">\n    ' + (t ? '<code class="_shortcut-code">&darr;</code> <code class="_shortcut-code">&uarr;</code>' : '<code class="_shortcut-code">alt + &darr;</code> <code class="_shortcut-code">alt + &uarr;</code><br><code class="_shortcut-code">shift + &darr;</code> <code class="_shortcut-code">shift + &uarr;</code>') + '\n  <dd class="_shortcuts-dd">Scroll step by step<br><br>\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">space</code>\n    <code class="_shortcut-code">shift + space</code>\n  <dd class="_shortcuts-dd">Scroll screen by screen\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">' + o + ' + &uarr;</code>\n    <code class="_shortcut-code">' + o + ' + &darr;</code>\n  <dd class="_shortcuts-dd">Scroll to the top/bottom\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + f</code>\n  <dd class="_shortcuts-dd">Focus first link in the content area<br>(press tab to focus the other links)\n</dl>\n<h3 class="_shortcuts-title">App</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">ctrl + ,</code>\n  <dd class="_shortcuts-dd">Open preferences\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">esc</code>\n  <dd class="_shortcuts-dd">Clear search field / reset UI\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">?</code>\n  <dd class="_shortcuts-dd">Show this page\n</dl>\n<h3 class="_shortcuts-title">Miscellaneous</h3>\n<dl class="_shortcuts-dl">\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + c</code>\n  <dd class="_shortcuts-dd">Copy URL of original page\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + o</code>\n  <dd class="_shortcuts-dd">Open original page\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + g</code>\n  <dd class="_shortcuts-dd">Search on Google\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + s</code>\n  <dd class="_shortcuts-dd">Search on Stack Overflow\n  <dt class="_shortcuts-dt">\n    <code class="_shortcut-code">alt + d</code>\n  <dd class="_shortcuts-dd">Search on DuckDuckGo\n</dl>\n<p class="_note _note-green">\n  <strong>Tip:</strong> If the cursor is no longer in the search field, press <code class="_label">/</code> or\n  continue to type and it will refocus the search field and start showing new results.\n\n<h2 class="_block-heading" id="aliases">Search Aliases</h2>\n<div class="_aliases">\n  <table>\n    <tr>\n      <th>Word\n      <th>Alias\n    ' + function() {
var t;
for (i in t = [], e) p = e[i], t.push('<tr><td class="_code">' + i + '<td class="_code">' + p);
return t;
}().join("") + "\n  </table>\n  <table>\n    <tr>\n      <th>Word\n      <th>Alias\n    " + function() {
var t;
for (i in t = [], n) p = n[i], t.push('<tr><td class="_code">' + i + '<td class="_code">' + p);
return t;
}().join("") + '\n  </table>\n</div>\n<p>Feel free to suggest new aliases on <a href="https://github.com/freeCodeCamp/devdocs/issues/new">GitHub</a>.';
};
}.call(this), function() {
var a, c;
app.templates.newsPage = function() {
return ' <h1 class="_lined-heading">Changelog</h1>\n<p class="_note">\n  For the latest news, follow <a href="https://twitter.com/DevDocs">@DevDocs</a>.<br>\n  For development updates, follow the project on <a href="https://github.com/freeCodeCamp/devdocs">GitHub</a>.\n<div class="_news">' + app.templates.newsList(app.news) + "</div> ";
}, app.templates.newsList = function(t, e) {
var n, o, r, s, i, a;
for (null == e && (e = {}), a = new Date().getUTCFullYear(), s = "", o = 0, r = t.length; o < r; o++) i = t[o], 
n = new Date(i[0]), !1 !== e.years && a !== n.getUTCFullYear() && (s += '<h2 class="_block-heading">' + (a = n.getUTCFullYear()) + "</h2>"), 
s += c(n, i.slice(1));
return s;
}, a = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], 
c = function(t, e) {
var n, o, r, s, i;
for (t = '<span class="_news-date">' + a[t.getUTCMonth()] + " " + t.getUTCDate() + "</span>", 
s = "", n = o = 0, r = e.length; o < r; n = ++o) s += '<div class="_news-row">' + (0 === n ? t : "") + " " + ('<span class="_news-title">' + (i = (i = e[n]).split("\n")).shift() + "</span>") + " " + i.join("<br>") + "</div>";
return s;
}, app.news = [ [ "2021-06-09", 'New documentation: <a href="/r/">R</a>' ], [ "2021-05-31", 'New documentation: <a href="/web_extensions/">Web Extensions</a>' ], [ "2021-05-26", 'New documentations: <a href="/latex/">LaTeX</a>, <a href="/jq/">jq</a>' ], [ "2021-04-29", 'Added <code class="_label">alt + c</code> shortcut to copy URL of original page.' ], [ "2021-02-26", 'New documentation: <a href="/react_bootstrap/">React Bootstrap</a>' ], [ "2021-01-03", 'New documentation: <a href="/ocaml/">OCaml</a>' ], [ "2020-12-23", 'New documentation: <a href="/gtk/">GTK</a>' ], [ "2020-12-07", 'New documentations: <a href="/flask/">Flask</a>, <a href="/groovy/">Groovy</a>, <a href="/jinja/">Jinja</a>, <a href="/werkzeug/">Werkzeug</a>' ], [ "2020-12-04", 'New documentation: <a href="/haproxy/">HAProxy</a>' ], [ "2020-11-17", 'TensorFlow has been split into <a href="/tensorflow/">TensorFlow Python</a>, <a href="/tensorflow_cpp/">TensorFlow C++</a>' ], [ "2020-11-14", 'New documentations: <a href="/pytorch/">PyTorch</a>, <a href="/spring_boot/">Spring Boot</a>' ], [ "2020-01-13", 'New \u201cAutomatic\u201d theme: match your browser or system dark mode setting. <a href="/settings">Enable it in preferences</a>.' ], [ "2020-01-13", 'New documentation: <a href="/gnuplot/">Gnuplot</a>' ], [ "2019-10-26", 'New documentation: <a href="/sequelize/">Sequelize</a>' ], [ "2019-10-20", 'New documentations: <a href="/mariadb/">MariaDB</a> and <a href="/reactivex/">ReactiveX</a>' ], [ "2019-09-02", 'New documentations added over the last 3 weeks: <a href="/scala~2.13_library/">Scala</a>, <a href="/wordpress/">WordPress</a>, <a href="/cypress/">Cypress</a>, <a href="/saltstack/">SaltStack</a>, <a href="/composer/">Composer</a>, <a href="/vue_router/">Vue Router</a>, <a href="/vuex/">Vuex</a>, <a href="/pony/">Pony</a>, <a href="/rxjs/">RxJS</a>, <a href="/octave/">Octave</a>, <a href="/trio/">Trio</a>, <a href="/django_rest_framework/">Django REST Framework</a>, <a href="/enzyme/">Enzyme</a> and <a href="/gnu_cobol/">GnuCOBOL</a>' ], [ "2019-07-21", 'Fixed several bugs, added an option to automatically download documentation and <a href="https://github.com/freeCodeCamp/devdocs/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc+closed%3A%3E2019-07-18+977+988+986+870+886+1024+979+975+941+831+1005+848+942" target="_blank">more</a>.' ], [ "2019-07-19", "Replaced the AppCache with a Service Worker (which makes DevDocs an installable PWA) and fixed layout preferences on Firefox." ], [ "2018-09-23", 'New documentations: <a href="/puppeteer/">Puppeteer</a> and <a href="/handlebars/">Handlebars.js</a>' ], [ "2018-08-12", 'New documentations: <a href="/dart/">Dart</a> and <a href="/qt/">Qt</a>' ], [ "2018-07-29", 'New documentations: <a href="/bash/">Bash</a>, <a href="/graphite/">Graphite</a> and <a href="/pygame/">Pygame</a>' ], [ "2018-07-08", 'New documentations: <a href="/leaflet/">Leaflet</a>, <a href="/terraform/">Terraform</a> and <a href="/koa/">Koa</a>' ], [ "2018-03-26", 'DevDocs is joining the freeCodeCamp community. Read the announcement <a href="https://medium.freecodecamp.org/devdocs-is-joining-the-freecodecamp-community-ae185a1c14a6" target="_blank">here</a>.' ], [ "2018-02-04", 'New documentations: <a href="/babel/">Babel</a>, <a href="/jekyll/">Jekyll</a> and <a href="/jsdoc/">JSDoc</a>' ], [ "2017-11-26", 'New documentations: <a href="/bluebird/">Bluebird</a>, <a href="/eslint/">ESLint</a> and <a href="/homebrew/">Homebrew</a>' ], [ "2017-11-18", 'Added print & PDF stylesheet.\nFeedback welcome on <a href="https://twitter.com/DevDocs" target="_blank" rel="noopener">Twitter</a> and <a href="https://github.com/freeCodeCamp/devdocs" target="_blank" rel="noopener">GitHub</a>.' ], [ "2017-09-10", '<a href="/settings">Preferences</a> can now be exported and imported.' ], [ "2017-09-03", 'New documentations: <a href="/d/">D</a>, <a href="/nim/">Nim</a> and <a href="/vulkan/">Vulkan</a>' ], [ "2017-07-23", 'New documentation: <a href="/godot/">Godot</a>' ], [ "2017-06-04", 'New documentations: <a href="/electron/">Electron</a>, <a href="/pug/">Pug</a>, and <a href="/falcon/">Falcon</a>' ], [ "2017-05-14", 'New documentations: <a href="/jest/">Jest</a>, <a href="/jasmine/">Jasmine</a> and <a href="/liquid/">Liquid</a>' ], [ "2017-04-30", 'New documentation: <a href="/openjdk/">OpenJDK</a>' ], [ "2017-02-26", "Refreshed design.", 'Added <a href="/settings">Preferences</a>.' ], [ "2017-01-22", 'New <a href="/http/">HTTP</a> documentation (thanks Mozilla)' ], [ "2016-12-04", 'New documentations: <a href="/sqlite/">SQLite</a>, <a href="/codeception/">Codeception</a> and <a href="/codeceptjs/">CodeceptJS</a>' ], [ "2016-11-20", 'New documentations: <a href="/yarn/">Yarn</a>, <a href="/immutable/">Immutable.js</a> and <a href="/async/">Async</a>' ], [ "2016-10-10", 'New documentations: <a href="/scikit_learn/">scikit-learn</a> and <a href="/statsmodels/">Statsmodels</a>' ], [ "2016-09-18", 'New documentations: <a href="/pandas/">pandas</a> and <a href="/twig/">Twig</a>' ], [ "2016-09-05", 'New documentations: <a href="/fish/">Fish</a>, <a href="/bottle/">Bottle</a> and <a href="/scikit_image/">scikit-image</a>' ], [ "2016-08-07", 'New documentation: <a href="/docker/">Docker</a>' ], [ "2016-07-31", 'New documentations: <a href="/bootstrap~3/">Bootstrap 3</a> and <a href="/bootstrap~4/">Bootstrap 4</a>' ], [ "2016-07-24", 'New documentations: <a href="/julia/">Julia</a>, <a href="/crystal/">Crystal</a> and <a href="/redux/">Redux</a>' ], [ "2016-07-03", 'New documentations: <a href="/cmake/">CMake</a> and <a href="/matplotlib/">Matplotlib</a>' ], [ "2016-06-19", 'New documentation: <a href="/love/">L&Ouml;VE</a>' ], [ "2016-06-12", 'New documentation: <a href="/angular/">Angular 2</a>' ], [ "2016-06-05", 'New documentations: <a href="/kotlin/">Kotlin</a> and <a href="/padrino/">Padrino</a>' ], [ "2016-04-24", 'New documentations: <a href="/numpy/">NumPy</a> and <a href="/apache_pig/">Apache Pig</a>' ], [ "2016-04-17", 'New documentation: <a href="/perl/">Perl</a>' ], [ "2016-04-10", 'New documentations: <a href="/browser_support_tables/">Support tables (caniuse.com)</a>, <a href="/gcc/">GCC</a> and <a href="/gnu_fortran/">GNU Fortran</a>' ], [ "2016-03-27", 'New documentation: <a href="/typescript/">TypeScript</a>' ], [ "2016-03-06", 'New documentations: <a href="/tensorflow/">TensorFlow</a>, <a href="/haxe/">Haxe</a> and <a href="/ansible/">Ansible</a>' ], [ "2016-02-28", 'New documentations: <a href="/codeigniter/">CodeIgniter</a>, <a href="/nginx_lua_module/">nginx Lua Module</a> and <a href="/influxdata/">InfluxData</a>' ], [ "2016-02-15", 'New documentations: <a href="/cakephp/">CakePHP</a>, <a href="/chef/">Chef</a> and <a href="/ramda/">Ramda</a>' ], [ "2016-01-31", 'New documentations: <a href="/erlang/">Erlang</a> and <a href="/tcl_tk/">Tcl/Tk</a>' ], [ "2016-01-24", "&ldquo;Multi-version support&rdquo; has landed!" ], [ "2015-11-22", 'New documentations: <a href="/phoenix/">Phoenix</a>, <a href="/dojo/">Dojo</a>, <a href="/relay/">Relay</a> and <a href="/flow/">Flow</a>' ], [ "2015-11-08", 'New documentations: <a href="/elixir/">Elixir</a> and <a href="/vagrant/">Vagrant</a>' ], [ "2015-10-18", 'Added a "Copy to clipboard" button inside each code block.' ], [ "2015-09-13", 'New documentation: <a href="/phalcon/">Phalcon</a>' ], [ "2015-08-09", 'New documentation: <a href="/react_native/">React Native</a>' ], [ "2015-08-03", "Added an icon in the sidebar to constrain the width of the UI (visible when applicable)." ], [ "2015-08-02", 'New documentations: <a href="/q/">Q</a> and <a href="/opentsdb/">OpenTSDB</a>' ], [ "2015-07-26", 'Added search aliases (e.g. <code class="_label">$</code> is an alias for <code class="_label">jQuery</code>).\n<a href="/help#aliases">Click here</a> to see the full list. Feel free to suggest more on <a href="https://github.com/freeCodeCamp/devdocs/issues/new" target="_blank" rel="noopener">GitHub</a>.', 'Added <code class="_label">shift + &darr;/&uarr;</code> shortcut for scrolling (same as <code class="_label">alt + &darr;/&uarr;</code>).' ], [ "2015-07-05", 'New documentations: <a href="/drupal/">Drupal</a>, <a href="/vue/">Vue.js</a>, <a href="/phaser/">Phaser</a> and <a href="/webpack/">webpack</a>' ], [ "2015-05-24", 'New <a href="/rust/">Rust</a> documentation' ], [ "2015-04-26", 'New <a href="/apache_http_server/">Apache HTTP Server</a> and <a href="/npm/">npm</a> documentations' ], [ "2015-03-22", 'New <a href="/meteor/">Meteor</a> and <a href="/mocha/">mocha</a> documentations' ], [ "2015-02-22", 'Improved <a href="/http/">HTTP</a> documentation', 'New <a href="/minitest/">Minitest</a> documentation' ], [ "2015-02-16", "The sidebar is now resizable (drag & drop)." ], [ "2015-02-15", 'New <a href="/iojs/">io.js</a>, <a href="/symfony/">Symfony</a>, <a href="/clojure/">Clojure</a>, <a href="/lua/">Lua</a> and <a href="/yii1/">Yii 1.1</a> documentations' ], [ "2015-02-08", "New dark theme" ], [ "2015-01-13", '<a href="/offline">Offline mode</a> has landed!' ], [ "2014-12-21", 'New <a href="/react/">React</a>, <a href="/rethinkdb/">RethinkDB</a>, <a href="/socketio/">Socket.IO</a>, <a href="/modernizr/">Modernizr</a> and <a href="/bower/">Bower</a> documentations' ], [ "2014-11-30", 'New <a href="/phpunit/">PHPUnit</a> and <a href="/nokogiri/">Nokogiri</a> documentations' ], [ "2014-11-16", 'New <a href="/python2/">Python 2</a> documentation' ], [ "2014-11-09", 'New design\nFeedback welcome on <a href="https://twitter.com/DevDocs" target="_blank" rel="noopener">Twitter</a> and <a href="https://github.com/freeCodeCamp/devdocs" target="_blank" rel="noopener">GitHub</a>.' ], [ "2014-10-19", 'New <a href="/svg/">SVG</a>, <a href="/marionette/">Marionette.js</a>, and <a href="/mongoose/">Mongoose</a> documentations' ], [ "2014-10-18", 'New <a href="/nginx/">nginx</a> documentation' ], [ "2014-10-13", 'New <a href="/xpath/">XPath</a> documentation' ], [ "2014-09-07", "Updated the HTML, CSS, JavaScript, and DOM documentations with additional content." ], [ "2014-08-04", 'New <a href="/django/">Django</a> documentation' ], [ "2014-07-27", 'New <a href="/markdown/">Markdown</a> documentation' ], [ "2014-07-05", 'New <a href="/cordova/">Cordova</a> documentation' ], [ "2014-07-01", 'New <a href="/chai/">Chai</a> and <a href="/sinon/">Sinon</a> documentations' ], [ "2014-06-15", 'New <a href="/requirejs/">RequireJS</a> documentation' ], [ "2014-06-14", 'New <a href="/haskell/">Haskell</a> documentation' ], [ "2014-05-25", 'New <a href="/laravel/">Laravel</a> documentation' ], [ "2014-05-04", 'New <a href="/express/">Express</a>, <a href="/grunt/">Grunt</a>, and <a href="/maxcdn/">MaxCDN</a> documentations' ], [ "2014-04-06", 'New <a href="/go/">Go</a> documentation' ], [ "2014-03-30", 'New <a href="/cpp/">C++</a> documentation' ], [ "2014-03-16", 'New <a href="/yii/">Yii</a> documentation' ], [ "2014-03-08", "Added path bar." ], [ "2014-02-22", 'New <a href="/c/">C</a> documentation' ], [ "2014-02-16", 'New <a href="/moment/">Moment.js</a> documentation' ], [ "2014-02-12", 'The root/category pages are now included in the search index (e.g. <a href="/#q=CSS">CSS</a>)' ], [ "2014-01-19", 'New <a href="/d3/">D3.js</a> and <a href="/knockout/">Knockout.js</a> documentations' ], [ "2014-01-18", 'DevDocs is now available as a <a href="https://marketplace.firefox.com/app/devdocs/">Firefox web app</a>.' ], [ "2014-01-12", 'Added <code class="_label">alt + g</code> shortcut for searching on Google.', 'Added <code class="_label">alt + r</code> shortcut for revealing the current page in the sidebar.' ], [ "2013-12-14", 'New <a href="/postgresql/">PostgreSQL</a> documentation' ], [ "2013-12-13", 'New <a href="/git/">Git</a> and <a href="/redis/">Redis</a> documentations' ], [ "2013-11-26", 'New <a href="/python/">Python</a> documentation' ], [ "2013-11-19", 'New <a href="/rails/">Ruby on Rails</a> documentation' ], [ "2013-11-16", 'New <a href="/ruby/">Ruby</a> documentation' ], [ "2013-10-24", 'DevDocs is now <a href="https://github.com/freeCodeCamp/devdocs">open source</a>.' ], [ "2013-10-09", 'DevDocs is now available as a <a href="https://chrome.google.com/webstore/detail/devdocs/mnfehgbmkapmjnhcnbodoamcioleeooe">Chrome web app</a>.' ], [ "2013-09-22", 'New <a href="/php/">PHP</a> documentation' ], [ "2013-09-06", 'New <a href="/lodash/">Lo-Dash</a> documentation ', 'On mobile devices you can now search a specific documentation by typing its name and <code class="_label">Space</code>.' ], [ "2013-09-01", 'New <a href="/jqueryui/">jQuery UI</a> and <a href="/jquerymobile/">jQuery Mobile</a> documentations' ], [ "2013-08-28", "New smartphone interface\nTested on iOS 6+ and Android 4.1+" ], [ "2013-08-25", 'New <a href="/ember/">Ember.js</a> documentation' ], [ "2013-08-18", 'New <a href="/coffeescript/">CoffeeScript</a> documentation', "URL search now automatically opens the first result." ], [ "2013-08-13", 'New <a href="/angularjs/">Angular.js</a> documentation' ], [ "2013-08-11", 'New <a href="/sass/">Sass</a> and <a href="/less/">Less</a> documentations' ], [ "2013-08-05", 'New <a href="/node/">Node.js</a> documentation' ], [ "2013-08-03", "Added support for OpenSearch" ], [ "2013-07-30", 'New <a href="/backbone/">Backbone.js</a> documentation' ], [ "2013-07-27", "You can now customize the list of documentations.\nNew docs will be hidden by default, but you'll see a notification when there are new releases.", 'New <a href="/http/">HTTP</a> documentation' ], [ "2013-07-15", 'URL search now works with single documentations: <a href="/#q=js%20sort">devdocs.io/#q=js sort</a>' ], [ "2013-07-13", "Added syntax highlighting", "Added documentation versions" ], [ "2013-07-11", 'New <a href="/underscore/">Underscore.js</a> documentation ', "Improved compatibility with tablets\nA mobile version is planned as soon as other high priority features have been implemented." ], [ "2013-07-10", 'You can now search specific documentations.\nSimply type the documentation\'s name and press <code class="_label">Tab</code>.\nThe name is fuzzy matched so you can use abbreviations like <code>js</code> for <code>JavaScript</code>.' ], [ "2013-07-08", "Improved search with fuzzy matching and better results\nFor example, searching <code>jqmka</code> now returns <code>jQuery.makeArray()</code>.", "DevDocs finally has an icon.", '<code class="_label">space</code> has replaced <code class="_label">alt + space</code> for scrolling down.' ], [ "2013-07-06", 'New <a href="/dom/">DOM</a> and <a href="/dom_events/">DOM Events</a> documentations\nDevDocs now includes almost all reference documents available on the Mozilla Developer Network.\nBig thank you to Mozilla and all the people that contributed to MDN.', 'Implemented URL search: <a href="/#q=sort">devdocs.io/#q=sort</a>' ], [ "2013-07-02", 'New <a href="/javascript/">JavaScript</a> documentation' ], [ "2013-06-28", "DevDocs made the front page of Hacker News!\nHi everyone &mdash; thanks for trying DevDocs.\nPlease bear with me while I fix bugs and scramble to add more docs.\nThis is only v1. There's a lot more to come." ], [ "2013-06-18", "Initial release" ] ];
}.call(this), function() {
var e;
app.templates.offlinePage = function(t) {
return '<h1 class="_lined-heading">Offline Documentation</h1>\n\n<div class="_docs-tools">\n  <label>\n    <input type="checkbox" name="autoUpdate" value="1" ' + (app.settings.get("manualUpdate") ? "" : "checked") + '>Install updates automatically\n  </label>\n  <div class="_docs-links">\n    <button type="button" class="_btn-link" data-action-all="install">Install all</button><button type="button" class="_btn-link" data-action-all="update"><strong>Update all</strong></button><button type="button" class="_btn-link" data-action-all="uninstall">Uninstall all</button>\n  </div>\n</div>\n\n<div class="_table">\n  <table class="_docs">\n    <tr>\n      <th>Documentation</th>\n      <th class="_docs-size">Size</th>\n      <th>Status</th>\n      <th>Action</th>\n    </tr>\n    ' + t + '\n  </table>\n</div>\n<p class="_note"><strong>Note:</strong> your browser may delete DevDocs\'s offline data if your computer is running low on disk space and you haven\'t used the app in a while. Load this page before going offline to make sure the data is still there.\n<h2 class="_block-heading">Questions & Answers</h2>\n<dl>\n  <dt>How does this work?\n  <dd>Each page is cached as a key-value pair in <a href="https://devdocs.io/dom/indexeddb_api">IndexedDB</a> (downloaded from a single file).<br>\n      The app also uses <a href="https://devdocs.io/dom/service_worker_api/using_service_workers">Service Workers</a> and <a href="https://devdocs.io/dom/web_storage_api">localStorage</a> to cache the assets and index files.\n  <dt>Can I close the tab/browser?\n  <dd>' + e() + '\n  <dt>What if I don\'t update a documentation?\n  <dd>You\'ll see outdated content and some pages will be missing or broken, because the rest of the app (including data for the search and sidebar) uses a different caching mechanism that\'s updated automatically.\n  <dt>I found a bug, where do I report it?\n  <dd>In the <a href="https://github.com/freeCodeCamp/devdocs/issues">issue tracker</a>. Thanks!\n  <dt>How do I uninstall/reset the app?\n  <dd>Click <a href="#" data-behavior="reset">here</a>.\n  <dt>Why aren\'t all documentations listed above?\n  <dd>You have to <a href="/settings">enable</a> them first.\n</dl>';
}, e = function() {
var t;
return app.ServiceWorker.isEnabled() ? ' Yes! Even offline, you can open a new tab, go to <a href="//devdocs.io">devdocs.io</a>, and everything will work as if you were online (provided you installed all the documentations you want to use beforehand). ' : (t = "aren't available in your browser (or are disabled)", 
"production" !== app.config.env && (t = "are disabled in your development instance of DevDocs (enable them by setting the <code>ENABLE_SERVICE_WORKER</code> environment variable to <code>true</code>)"), 
" No. Service Workers " + t + ', so loading <a href="//devdocs.io">devdocs.io</a> offline won\'t work.<br>\nThe current tab will continue to function even when you go offline (provided you installed all the documentations beforehand). ');
}, app.templates.offlineDoc = function(t, e) {
var n, o;
return o = t.isOutdated(e), n = '<tr data-slug="' + t.slug + '"' + (o ? ' class="_highlight"' : "") + '>\n  <td class="_docs-name _icon-' + t.icon + '">' + t.fullName + '</td>\n  <td class="_docs-size">' + Math.ceil(t.db_size / 1e5) / 10 + "&nbsp;<small>MB</small></td>", 
(n += e && e.installed ? o ? '<td><strong>Outdated</strong></td>\n<td><button type="button" class="_btn-link _bold" data-action="update">Update</button> - <button type="button" class="_btn-link" data-action="uninstall">Uninstall</button></td>' : '<td>Up&#8209;to&#8209;date</td>\n<td><button type="button" class="_btn-link" data-action="uninstall">Uninstall</button></td>' : '<td>-</td>\n<td><button type="button" class="_btn-link" data-action="install">Install</button></td>') + "</tr>";
};
}.call(this), function() {
app.templates.splash = '<div class="_splash-title">DevDocs</div>', app.templates.intro = '<div class="_intro"><div class="_intro-message">\n  <a href="#" class="_intro-hide" data-hide-intro>Stop showing this message</a>\n  <h2 class="_intro-title">Welcome!</h2>\n  <p>DevDocs combines multiple API documentations in a fast, organized, and searchable interface.\n     Here\'s what you should know before you start:\n  <ol class="_intro-list">\n    <li>Open the <a href="/settings">Preferences</a> to enable more docs and customize the UI.\n    <li>You don\'t have to use your mouse &mdash; see the list of <a href="/help#shortcuts">keyboard shortcuts</a>.\n    <li>The search supports fuzzy matching (e.g. "bgcp" brings up "background-clip").\n    <li>To search a specific documentation, type its name (or an abbr.), then Tab.\n    <li>You can search using your browser\'s address bar &mdash; <a href="/help#browser_search">learn how</a>.\n    <li>DevDocs works <a href="/offline">offline</a>, on mobile, and can be installed on <a href="https://chrome.google.com/webstore/detail/devdocs/mnfehgbmkapmjnhcnbodoamcioleeooe">Chrome</a>.\n    <li>For the latest news, follow <a href="https://twitter.com/DevDocs">@DevDocs</a>.\n    <li>DevDocs is free and <a href="https://github.com/freeCodeCamp/devdocs">open source</a>.\n        <object data="https://img.shields.io/github/stars/freeCodeCamp/devdocs.svg?style=social" type="image/svg+xml" aria-hidden="true" height="20"></object>\n    <li>And if you\'re new to coding, check out <a href="https://www.freecodecamp.org/">freeCodeCamp\'s open source curriculum</a>.\n  </ol>\n  <p>Happy coding!\n</div></div>', 
app.templates.mobileIntro = '<div class="_mobile-intro">\n  <h2 class="_intro-title">Welcome!</h2>\n  <p>DevDocs combines multiple API documentations in a fast, organized, and searchable interface.\n     Here\'s what you should know before you start:\n  <ol class="_intro-list">\n    <li>Pick your docs in the <a href="/settings">Preferences</a>.\n    <li>The search supports fuzzy matching.\n    <li>To search a specific documentation, type its name (or an abbr.), then Space.\n    <li>For the latest news, follow <a href="https://twitter.com/DevDocs">@DevDocs</a>.\n    <li>DevDocs is <a href="https://github.com/freeCodeCamp/devdocs">open source</a>.\n  </ol>\n  <p>Happy coding!\n  <a class="_intro-hide" data-hide-intro>Stop showing this message</a>\n</div>', 
app.templates.androidWarning = '<div class="_mobile-intro">\n  <h2 class="_intro-title">Hi there</h2>\n  <p>DevDocs is running inside an Android WebView. Some features may not work properly.\n  <p>If you downloaded an app called DevDocs on the Play Store, please uninstall it \u2014 it\'s made by someone who is using (and profiting from) the name DevDocs without permission.\n  <p>To install DevDocs on your phone, visit <a href="https://devdocs.io" target="_blank" rel="noopener">devdocs.io</a> in Chrome and select "Add to home screen" in the menu.\n</div>';
}.call(this), function() {
var e;
e = function(t, e) {
var n, o;
return n = t.label, '<label class="_settings-label _theme-label">\n  <input type="radio" name="theme" value="' + (o = t.value) + '"' + (e.theme === o ? " checked" : "") + ">\n  " + n + "\n</label>";
}, app.templates.settingsPage = function(t) {
return '<h1 class="_lined-heading">Preferences</h1>\n\n<div class="_settings-fieldset">\n  <h2 class="_settings-legend">Theme:</h2>\n  <div class="_settings-inputs">\n    ' + (t.autoSupported ? e({
label: "Automatic <small>Matches system setting</small>",
value: "auto"
}, t) : "") + "\n    " + e({
label: "Light",
value: "default"
}, t) + "\n    " + e({
label: "Dark",
value: "dark"
}, t) + '\n  </div>\n</div>\n\n<div class="_settings-fieldset">\n  <h2 class="_settings-legend">General:</h2>\n\n  <div class="_settings-inputs">\n    <label class="_settings-label _setting-max-width">\n      <input type="checkbox" form="settings" name="layout" value="_max-width"' + (t["_max-width"] ? " checked" : "") + '>Enable fixed-width layout\n    </label>\n    <label class="_settings-label _hide-on-mobile">\n      <input type="checkbox" form="settings" name="layout" value="_sidebar-hidden"' + (t["_sidebar-hidden"] ? " checked" : "") + '>Automatically hide and show the sidebar\n      <small>Tip: drag the edge of the sidebar to resize it.</small>\n    </label>\n    <label class="_settings-label">\n      <input type="checkbox" form="settings" name="autoInstall" value="_auto-install"' + (t.autoInstall ? " checked" : "") + '>Automatically download documentation for offline use\n      <small>Only enable this when bandwidth isn\'t a concern to you.</small>\n    </label>\n    <label class="_settings-label _hide-in-development">\n      <input type="checkbox" form="settings" name="analyticsConsent"' + (t.analyticsConsent ? " checked" : "") + '>Enable tracking cookies\n      <small>With this checked, we enable Google Analytics and Gauges to collect anonymous traffic information.</small>\n    </label>\n  </div>\n</div>\n\n<div class="_settings-fieldset _hide-on-mobile">\n  <h2 class="_settings-legend">Scrolling:</h2>\n\n  <div class="_settings-inputs">\n    <label class="_settings-label">\n      <input type="checkbox" form="settings" name="smoothScroll" value="1"' + (t.smoothScroll ? " checked" : "") + '>Use smooth scrolling\n    </label>\n    <label class="_settings-label _setting-native-scrollbar">\n      <input type="checkbox" form="settings" name="layout" value="_native-scrollbars"' + (t["_native-scrollbars"] ? " checked" : "") + '>Use native scrollbars\n    </label>\n    <label class="_settings-label">\n      <input type="checkbox" form="settings" name="arrowScroll" value="1"' + (t.arrowScroll ? " checked" : "") + '>Use arrow keys to scroll the main content area\n      <small>With this checked, use <code class="_label">shift</code> + <code class="_label">&uarr;</code><code class="_label">&darr;</code><code class="_label">&larr;</code><code class="_label">&rarr;</code> to navigate the sidebar.</small>\n    </label>\n    <label class="_settings-label">\n      <input type="checkbox" form="settings" name="spaceScroll" value="1"' + (t.spaceScroll ? " checked" : "") + '>Use spacebar to scroll during search\n    </label>\n    <label class="_settings-label">\n      <input type="number" step="0.1" form="settings" name="spaceTimeout" min="0" max="5" value="' + t.spaceTimeout + '"> Delay until you can scroll by pressing space\n      <small>Time in seconds</small>\n    </label>\n  </div>\n</div>\n\n<p class="_hide-on-mobile">\n  <button type="button" class="_btn" data-action="export">Export</button>\n  <label class="_btn _file-btn"><input type="file" form="settings" name="import" accept=".json">Import</label>\n\n<p>\n  <button type="button" class="_btn-link _reset-btn" data-behavior="reset">Reset all preferences and data</button>';
};
}.call(this), function() {
app.templates.typePage = function(t) {
return " <h1>" + t.doc.fullName + " / " + t.name + '</h1>\n<ul class="_entry-list">' + app.templates.render("typePageEntry", t.entries()) + "</ul> ";
}, app.templates.typePageEntry = function(t) {
return '<li><a href="' + t.fullPath() + '">' + $.escape(t.name) + "</a></li>";
};
}.call(this), function() {
var r;
r = '<svg class="_path-arrow"><use xlink:href="#icon-dir"/></svg>', app.templates.path = function(t, e, n) {
var o;
return o = '<a href="' + t.fullPath() + '" class="_path-item _icon-' + t.icon + '">' + t.fullName + "</a>", 
e && (o += r + '<a href="' + e.fullPath() + '" class="_path-item">' + e.name + "</a>"), 
n && (o += r + '<span class="_path-item">' + $.escape(n.name) + "</span>"), o;
};
}.call(this), function() {
var r, t;
t = app.templates, r = '<svg class="_list-arrow"><use xlink:href="#icon-dir"/></svg>', 
t.sidebarDoc = function(t, e) {
var n;
return null == e && (e = {}), n = '<a href="' + t.fullPath() + '" class="_list-item _icon-' + t.icon + " ", 
n += e.disabled ? "_list-disabled" : "_list-dir", n += '" data-slug="' + t.slug + '" title="' + t.fullName + '" tabindex="-1">', 
e.disabled ? n += '<span class="_list-enable" data-enable="' + t.slug + '">Enable</span>' : n += r, 
t.release && (n += '<span class="_list-count">' + t.release + "</span>"), n += '<span class="_list-text">' + t.name, 
(e.fullName || e.disabled && t.version) && (n += " " + t.version), n + "</span></a>";
}, t.sidebarType = function(t) {
return '<a href="' + t.fullPath() + '" class="_list-item _list-dir" data-slug="' + t.slug + '" tabindex="-1">' + r + '<span class="_list-count">' + t.count + '</span><span class="_list-text">' + $.escape(t.name) + "</span></a>";
}, t.sidebarEntry = function(t) {
return '<a href="' + t.fullPath() + '" class="_list-item _list-hover" tabindex="-1">' + $.escape(t.name) + "</a>";
}, t.sidebarResult = function(t) {
var e;
return e = t.isIndex() && app.disabledDocs.contains(t.doc) ? '<span class="_list-enable" data-enable="' + t.doc.slug + '">Enable</span>' : '<span class="_list-reveal" data-reset-list title="Reveal in list"></span>', 
t.doc.version && !t.isIndex() && (e += '<span class="_list-count">' + t.doc.short_version + "</span>"), 
'<a href="' + t.fullPath() + '" class="_list-item _list-hover _list-result _icon-' + t.doc.icon + '" tabindex="-1">' + e + '<span class="_list-text">' + $.escape(t.name) + "</span></a>";
}, t.sidebarNoResults = function() {
var t;
return t = ' <div class="_list-note">No results.</div> ', app.isSingleDoc() || app.disabledDocs.isEmpty() || (t += '<div class="_list-note">Note: documentations must be <a href="/settings" class="_list-note-link">enabled</a> to appear in the search.</div>'), 
t;
}, t.sidebarPageLink = function(t) {
return '<span role="link" class="_list-item _list-pagelink">Show more\u2026 (' + t + ")</span>";
}, t.sidebarLabel = function(t, e) {
var n;
return null == e && (e = {}), n = '<label class="_list-item', t.version || (n += " _icon-" + t.icon), 
n += '"><input type="checkbox" name="' + t.slug + '" class="_list-checkbox" ', e.checked && (n += "checked"), 
n + '><span class="_list-text">' + t.fullName + "</span></label>";
}, t.sidebarVersionedDoc = function(t, e, n) {
var o;
return null == n && (n = {}), o = '<div class="_list-item _list-dir _list-rdir _icon-' + t.icon, 
n.open && (o += " open"), o + '" tabindex="0">' + r + t.name + '</div><div class="_list _list-sub">' + e + "</div>";
}, t.sidebarDisabled = function(t) {
return '<h6 class="_list-title">' + r + "Disabled (" + t.count + ') <a href="/settings" class="_list-title-link" tabindex="-1">Customize</a></h6>';
}, t.sidebarDisabledList = function(t) {
return '<div class="_disabled-list">' + t + "</div>";
}, t.sidebarDisabledVersionedDoc = function(t, e) {
return '<a class="_list-item _list-dir _icon-' + t.icon + ' _list-disabled" data-slug="' + t.slug_without_version + '" tabindex="-1">' + r + t.name + '</a><div class="_list _list-sub">' + e + "</div>";
}, t.docPickerHeader = '<div class="_list-picker-head"><span>Documentation</span> <span>Enable</span></div>', 
t.docPickerNote = '<div class="_list-note">Tip: for faster and better search results, select only the docs you need.</div>\n<a href="https://trello.com/b/6BmTulfx/devdocs-documentation" class="_list-link" target="_blank" rel="noopener">Vote for new documentation</a>';
}.call(this), function() {
app.templates.tipKeyNav = function() {
return '<p class="_notif-text">\n  <strong>ProTip</strong>\n  <span class="_notif-info">(click to dismiss)</span>\n<p class="_notif-text">\n  Hit ' + (app.settings.get("arrowScroll") ? '<code class="_label">shift</code> +' : "") + ' <code class="_label">&darr;</code> <code class="_label">&uarr;</code> <code class="_label">&larr;</code> <code class="_label">&rarr;</code> to navigate the sidebar.<br>\n  Hit <code class="_label">space / shift space</code>' + (app.settings.get("arrowScroll") ? ' or <code class="_label">&darr;/&uarr;</code>' : ', <code class="_label">alt &darr;/&uarr;</code> or <code class="_label">shift &darr;/&uarr;</code>') + ' to scroll the page.\n<p class="_notif-text">\n  <a href="/help#shortcuts" class="_notif-link">See all keyboard shortcuts</a>';
};
}.call(this);

try {
"production" === app.config.env && ("1" === Cookies.get("analyticsConsent") ? (!function(t, e, n, o, r, s, i) {
t.GoogleAnalyticsObject = r, t[r] = t[r] || function() {
(t[r].q = t[r].q || []).push(arguments);
}, t[r].l = 1 * new Date(), s = e.createElement(n), i = e.getElementsByTagName(n)[0], 
s.async = 1, s.src = o, i.parentNode.insertBefore(s, i);
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), 
ga("create", "UA-5544833-12", "devdocs.io"), page.track(function() {
ga("send", "pageview", {
page: location.pathname + location.search + location.hash,
dimension1: app.router.context && app.router.context.doc && app.router.context.doc.slug_without_version
});
}), page.track(function() {
window._gauges ? _gauges.push([ "track" ]) : function() {
var t = document.createElement("script");
t.type = "text/javascript", t.async = !0, t.id = "gauges-tracker", t.setAttribute("data-site-id", "51c15f82613f5d7819000067"), 
t.src = "https://secure.gaug.es/track.js";
var e = document.getElementsByTagName("script")[0];
e.parentNode.insertBefore(t, e);
}();
})) : resetAnalytics());
} catch (e) {}

(function() {
var t;
t = function() {
return document.removeEventListener("DOMContentLoaded", t, !1), document.body ? app.init() : setTimeout(t, 42);
}, document.addEventListener("DOMContentLoaded", t, !1);
}).call(this);