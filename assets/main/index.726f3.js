window.__require=function e(t,o,c){function n(i,s){if(!o[i]){if(!t[i]){var u=i.split("/");if(u=u[u.length-1],!t[u]){var l="function"==typeof __require&&__require;if(!s&&l)return l(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var p=o[i]={exports:{}};t[i][0].call(p.exports,function(e){return n(t[i][1][e]||e)},p,p.exports,e,t,o,c)}return o[i].exports}for(var r="function"==typeof __require&&__require,i=0;i<c.length;i++)n(c[i]);return n}({EmailLianjie:[function(e,t){"use strict";cc._RF.push(t,"627fd9USCRIE75iN2a5Nbc5","EmailLianjie"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.sys.openURL("mailto:meichen.duan@hotmail.com")}}),cc._RF.pop()},{}],"ScrollViewHack 1":[function(e,t,o){"use strict";cc._RF.push(t,"b5e45VlgHBOB4nGJkAAQ5rc","ScrollViewHack 1");var c,n=this&&this.__extends||(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,c){var n,r=arguments.length,i=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,c);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,u=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mul=10,t}return n(t,e),t.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_WHEEL,this._onMouseWheel,this,!0)},t.prototype._onMouseWheel=function(e){e.setScrollData(e.getScrollX(),e.getScrollY()*this.mul),console.log(e.getScrollY())},r([u({tooltip:"\u6539\u53d8\u6eda\u8f6e\u79fb\u52a8\u8ddd\u79bb\u7684\u500d\u6570"})],t.prototype,"mul",void 0),r([s],t)}(cc.Component);o.default=l,cc._RF.pop()},{}],ScrollViewHack:[function(e,t,o){"use strict";cc._RF.push(t,"c9bf4nlfBpHOaah2sCvYuVq","ScrollViewHack");var c,n=this&&this.__extends||(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,c){var n,r=arguments.length,i=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,c);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,u=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mul=10,t}return n(t,e),t.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_WHEEL,this._onMouseWheel,this,!0)},t.prototype._onMouseWheel=function(e){e.setScrollData(e.getScrollX(),e.getScrollY()*this.mul),console.log(e.getScrollY())},r([u({tooltip:"\u6539\u53d8\u6eda\u8f6e\u79fb\u52a8\u8ddd\u79bb\u7684\u500d\u6570"})],t.prototype,"mul",void 0),r([s],t)}(cc.Component);o.default=l,cc._RF.pop()},{}],homeTiaozhuan:[function(e,t){"use strict";cc._RF.push(t,"8b44b+hTqBGj6+H6QoBSygT","homeTiaozhuan"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.director.loadScene("home")}}),cc._RF.pop()},{}],insLianjie:[function(e,t){"use strict";cc._RF.push(t,"b1ebaKRgMRLUJ5mDJWtv28Y","insLianjie"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.sys.openURL("https://instagram.com/meichend_?igshid=MzNlNGNkZWQ4Mg==")}}),cc._RF.pop()},{}],worksTiaozhuan:[function(e,t){"use strict";cc._RF.push(t,"29383TZtiNHx7lrNqOUK+lx","worksTiaozhuan"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.director.loadScene("works")}}),cc._RF.pop()},{}],yemianTiaozhuan:[function(e,t){"use strict";cc._RF.push(t,"4cb9bbdGGtHbJAn0rULdleP","yemianTiaozhuan"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.director.loadScene("thesis")}}),cc._RF.pop()},{}],zhuyeTiaozhuan:[function(e,t){"use strict";cc._RF.push(t,"b85504UV6NEnZMZ+0UXY4vZ","zhuyeTiaozhuan"),cc.Class({extends:cc.Component,properties:{},on_btn_onclick:function(){cc.director.loadScene("home")}}),cc._RF.pop()},{}]},{},["EmailLianjie","insLianjie","worksTiaozhuan","yemianTiaozhuan","ScrollViewHack","zhuyeTiaozhuan","ScrollViewHack 1","homeTiaozhuan"]);