"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{2547:function(n,e,t){var r=t(5893),i=t(7294),o=t(5697),c=t.n(o),u=t(2125),a=t(2814),l=t(9398);t(894);function s(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function h(n,e){return!e||"object"!==C(e)&&"function"!==typeof e?s(n):e}function d(n,e){return(d=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var C=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=p(n);if(e){var i=p(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return h(this,t)}}function b(){var n,e,t=(n=["\n    font-weight: 600;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return b=function(){return t},t}u.ZP.i(b());var v=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&d(n,e)}(c,n);var e,t,i,o=y(c);function c(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this,n)).onClickPlay=e.onClickPlay.bind(s(e)),e}return e=c,(t=[{key:"onClickPlay",value:function(){var n=this.props,e=n.url,t=e===n.curUrl?"":e;this.props.playCallback(t)}},{key:"render",value:function(){var n=this.props,e=n.url,t=e===n.curUrl?l.Bg$:l.zc;return(0,r.jsx)("div",{onClick:this.onClickPlay,className:"btnPlay no-print",children:(0,r.jsx)(a.G,{size:"1x",icon:t})},e)}}])&&f(e.prototype,t),i&&f(e,i),c}(i.Component);v.propTypes={url:c().string,curUrl:c().string,playCallback:c().func},v.defaultProps={url:"",curUrl:""}},5267:function(n,e,t){t.d(e,{Z:function(){return k}});var r=t(5893),i=t(7294),o=t(5697),c=t.n(o),u=t(2125),a=(t(9669),t(894)),l=t(450),s=t(5172),f=t(8585),p=t(6077);t(2547);function h(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function C(n){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,e){return!e||"object"!==g(e)&&"function"!==typeof e?h(n):e}function b(n,e){return(b=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var g=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function B(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=C(n);if(e){var i=C(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return y(this,t)}}function j(){var n=v(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return j=function(){return n},n}function m(){var n=v(['\n  font-family: \'KaiTi\', "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif;\n  font-size: 400%;\n']);return m=function(){return n},n}function x(){var n=v(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);return x=function(){return n},n}var w=u.ZP.audio(j()),k=(u.ZP.span(m()),u.ZP.iframe(x()),function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&b(n,e)}(c,n);var e,t,i,o=B(c);function c(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this,n)).state={},e.handleClick=e.handleClick.bind(h(e)),e.toggle=e.toggle.bind(h(e)),e}return e=c,(t=[{key:"toggle",value:function(){var n=this.props,e=n.chinesse;(0,n.toggleChinese)(e)}},{key:"handleClick",value:function(){var n=(0,f.FA)(this.props.bacKinh);new Audio("".concat(p.uD,"/BasicSound/").concat(n)).play(),a.L9("ChuHan","BacKinh",this.props.bacKinh)}},{key:"render",value:function(){try{var n=this.props,e=n.error,t=n.id,i=n.chinesse,o=n.hanViet,c=n.bacKinh;if(n.toggleChinese,n.playCallback,n.curUrl,e)return(0,r.jsx)(s.Z,{content:e});if("\n"===i)return(0,r.jsx)("div",{className:"breakLine"});if(i.includes(".mp3"))return(0,r.jsx)(w,{className:"no-print",controls:!0,loop:!0,src:i,type:"audio/mp3"});if("#B"===i)return"";var u=c&&(0,r.jsx)(l.X2,{style:{padding:1,margin:1},children:(0,r.jsx)("button",{className:"btnBacKinh",onClick:this.handleClick,children:c})});return(0,r.jsx)("div",{children:(0,r.jsx)(l.Zb,{className:"chuHanPrint",style:{borderLeftWidth:0,borderRightWidth:0},children:(0,r.jsxs)(l.eW,{style:{padding:0},children:[(0,r.jsx)(l.Ol,{style:{padding:0},children:(0,r.jsx)("button",{className:"btnChuHan",id:"btnChuHan".concat(t),onClick:this.toggle,style:{borderLeftWidth:0,borderRightWidth:0},children:i})}),(0,r.jsx)(l.X2,{style:{padding:1,margin:1,fontSize:18},children:(0,r.jsx)("small",{children:o})}),u]})},"".concat(t))})}catch(a){return console.log("error",a),(0,r.jsx)(s.Z,{title:"Ch\u1eef H\xe1n",content:a+""})}}}])&&d(e.prototype,t),i&&d(e,i),c}(i.Component));k.propTypes={error:c().string,chinesse:c().string,chinessNoSign:c().string,hanViet:c().string,bacKinh:c().string,id:c().number,toggleChinese:c().func,playCallback:c().func,curUrl:c().string},k.defaultProps={error:null,chinesse:"",chinessNoSign:"",hanViet:"",bacKinh:"",id:"",curUrl:""}},5172:function(n,e,t){var r=t(5893),i=(t(7294),t(5697)),o=t.n(i),c=t(450),u=t(262),a=function(n){var e=n.title,t=n.content;return(0,r.jsx)(c.X2,{children:(0,r.jsxs)(c.JX,{lg:"4",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:t}),(0,r.jsx)("p",{children:(0,r.jsx)(u.Link,{to:"/",className:"btn btn-primary",children:"Trang ch\u1ee7"})})]})})};a.propTypes={title:o().string,content:o().string},a.defaultProps={title:"Xin l\u1ed7i",content:"An unexpected error came up"},e.Z=a},3033:function(n,e,t){var r=t(5893),i=(t(7294),t(450));e.Z=function(){return(0,r.jsx)(i.X2,{children:(0,r.jsx)(i.JX,{md:{size:6,offset:3},children:(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)(i.Ex,{bar:!0,animated:!0,value:"100",children:"Loading"})})})})}},714:function(n,e,t){t.d(e,{g:function(){return i}});var r=t(6077);var i=function(n){return r.uD+"/huongdanviet/"+function(n){if(!n||void 0===n)return"";var e=n.length;if(0==e)return 63;var t=n.charCodeAt(0);if(1==e)return t;var r=n.charCodeAt(1);if(2==e)return((31&t)<<6)+(63&r);var i=n.charCodeAt(2);if(3==e)return((15&t)<<12)+((63&r)<<6)+(63&i);var o=n.charCodeAt(3);return 4==e?((7&t)<<18)+((63&r)<<12)+((63&i)<<6)+(63&o):63}(n)+".svg"}},1310:function(n,e,t){t.d(e,{T:function(){return i}});t(6486);var r={C8B15:"1ssZaX2iAIY",C8B14:"zHuX-HRgm0s",C8B13:"hK6I_vNfpsU",C8B12:"eoZaeDGM6uw",C8B11:"ucjaYsew3IA",C8B10:"GBjaCwK2Mng",C8B09:"FcMnYQEjN5Q",C8B08:"aN5IKXA61ZY",C8B07:"kUAveKxrA_A",C8B06:"SeIKTrBwqMI",C8B05:"FYBpQpMp2Fo",C8B04:"JUJ1U-MLDJI",C8B03:"LoXCPp0a8HU",C8B02:"-w_yLEKbVyI",C8B01:"o3Y9D2v2fLY",C7B16:"Qfmkoz-n4xM",C7B15:"zKcvD7BbOwk",C7B14:"dUyNDCPhc-Q",C7B13:"xBueju5fGGE",C7B12:"Tuw1yXyWszA",C7B11:"zG944cAYn3o",C7B10:"-VICMwa3FDg",C7B09:"WOoIVY-fKOo",C7B08:"FCJiPzNVHA8",C7B07:"mc5dZ_3218U",C7B06:"wFu5E9f_gIw",C7B05:"c7QyEaW1Fd8",C7B04:"mUvQthq_-98",C7B03:"sxRgv6qHe2w",C7B02:"RAWp9FEHi-M",C7B01:"o7JRCjvyxCQ",C6B16:"VqvnykqWEEc",C6B15:"q_UXaM6Yv18",C6B14:"f66Y4A3ADCg",C6B13:"-7WNE98Kxs0",C6B12:"yRX31dwBGvg",C6B11:"tCU_2jGElsw",C6B10:"1R3aRXGUUsc",C6B09:"WO5qC5TSh2Y",C6B08:"BX6hDf1Psao",C6B07:"oVDMnK0n67c",C6B06:"3bvVBf0l-aI",C6B05:"vw9oJ-Q4kcI",C6B04:"VFrW6Vci3xQ",C4B07:"5w2RhsH2Ni8",C4B03:"dmyaGMF4iMQ",C4B02:"TClMlDAAXuI",C4B01:"QlVaPPCeNBc"},i=function(n){return r[n]}}}]);