"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{7607:function(e,n,t){var i=t(5893),r=(t(7294),t(5697)),c=t.n(r),o=t(450),a=t(2125),s=t(1677),l=t(6077),u=t(714),h=t(8585);function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function d(){var e=f(["\n  padding-left: 0.5em !important;\n  font-size: 18pt;\n"]);return d=function(){return e},e}function p(){var e=f(["\n  width: 100%;\n  max-height: 150px;\n  height: auto;\n"]);return p=function(){return e},e}function m(){var e=f(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return m=function(){return e},e}function g(){var e=f(["-ms-flex: 0 0 50% !important;flex: 0 0 50% !important;max-width: 50% !important;"]);return g=function(){return e},e}function x(){var e=f(["\n  padding: 2px 2px;\n  -ms-flex: 0 0 33.33333%;\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n  ",";\n"]);return x=function(){return e},e}(0,a.ZP)(o.JX)(d()),a.ZP.img(p()),a.ZP.div(m()),a.ZP.div(x(),s.Z.sm(g()));var b=function(e){var n=e.modal,t=e.toggle,r=e.modalChuHan,c=e.modalHanViet,a=e.modalCacNetBo;return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"btnChuHan inline",onClick:t,children:r}),(0,i.jsxs)(o.u_,{isOpen:n,toggle:t,children:[(0,i.jsxs)(o.xB,{toggle:t,children:[(0,h.kL)(r)," - ",c," (C\xe1ch vi\u1ebft: ",a,")"]}),(0,i.jsx)(o.fe,{children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)("img",{src:(0,u.g)(r),width:"60px",height:"60px",srcSet:(0,u.g)(r),alt:"bar"}),(0,i.jsx)("iframe",{className:"frameTudien",src:"".concat(l.uD,"/dictHtmls/").concat((0,h.kL)(r),".htm")})]})})]})]})};b.propTypes={modal:c().bool.isRequired,toggle:c().func.isRequired,modalChuHan:c().string.isRequired,modalHanViet:c().string.isRequired,modalCacNetBo:c().string.isRequired},b.defaultProps={},n.Z=b},9718:function(e,n,t){t.d(n,{Z:function(){return B}});var i=t(5893),r=t(7294),c=t(2125),o=(t(262),t(8341),t(1662),t(1677),t(6456)),a=t(5697),s=t.n(a),l=(t(9669),t(6486)),u=t.n(l),h=t(450),f=t(894),d=t(5172),p=t(8585),m=t(6077),g=(t(5267),t(714));function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,n){return!n||"object"!==w(n)&&"function"!==typeof n?x(e):n}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function C(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=v(e);if(n){var r=v(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return j(this,t)}}function O(){var e=C(["\n  width: 70%;\n  font-size: 14pt;\n"]);return O=function(){return e},e}function H(){var e=C(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);return H=function(){return e},e}var P=c.ZP.span(O()),S=c.ZP.iframe(H());var N=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(o,e);var n,t,r,c=k(o);function o(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(n=c.call(this,e)).state={modal:!1,selectedChinese:""},n.handleClick=n.handleClick.bind(x(n)),n.toggle=n.toggle.bind(x(n)),n.toggleChinese=n.toggleChinese.bind(x(n)),n}return n=o,(t=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal}),f.L9("ChuHan","Han",this.props.selectedChinese)}},{key:"toggleChinese",value:function(e){this.setState({selectedChinese:e,modal:!this.state.modal}),f.L9("ChuHan","Han",this.props.selectedChinese)}},{key:"handleClick",value:function(){var e=(0,p.FA)(this.props.bacKinh);new Audio("".concat(m.uD,"/BasicSound/").concat(e)).play(),f.L9("ChuHan","BacKinh",this.props.bacKinh)}},{key:"render",value:function(){try{var e=this.props,n=(e.baiHocid,e.chinesse),t=e.hanViet,r=e.bacKinh,c=(e.playCallback,e.folderPath,e.curUrl,e.tuDienBo),o=this.state,a=o.modal,s=o.selectedChinese,l=c[s],f="";l&&(f="C\u1ea5u t\u1ea1o: "+l.bo);var x="ChuHanCom";u().isNil(n)||(x=function(e,n,t,r,c,o,a,s){return(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:e}),(0,i.jsx)("span",{children:"(".concat(n," - ").concat(t,") ")})]})}(n,t,r,0,this.toggleChinese));var b=a&&(0,i.jsxs)(h.u_,{isOpen:a,toggle:this.toggle,className:this.props.className,children:[(0,i.jsx)(h.xB,{toggle:this.toggle,children:(0,p.kL)(s)}),(0,i.jsxs)(h.fe,{children:[(0,i.jsx)("img",{src:(0,g.g)(s),width:"60px",height:"60px",srcSet:(0,g.g)(s),alt:""}),(0,i.jsx)(P,{children:f}),(0,i.jsx)(S,{src:"".concat(m.uD,"/dictHtmls/").concat((0,p.kL)(s),".htm")})]})]});return console.log("modal",a,"selectedChinese",s,"moda",b),(0,i.jsxs)("div",{style:{alignItems:"center"},children:[(0,i.jsx)("div",{className:"chuHanListComponentDiv",style:{alignItems:"center"},children:x}),b]})}catch(v){return console.log("error",v),(0,i.jsx)(d.Z,{title:"Ch\u1eef H\xe1n",content:v+""})}}}])&&b(n.prototype,t),r&&b(n,r),o}(r.Component);N.propTypes={chinesse:s().string,hanViet:s().string,bacKinh:s().string,baiHocid:s().string,playCallback:s().func,curUrl:s().string},N.defaultProps={chinesse:"",hanViet:"",bacKinh:"",baiHocid:"",curUrl:""};(0,o.$j)((function(e){return{tuDienBo:e.tuDienReducer.data}}),(function(e){return{}}))(N);function _(){var e,n,t=(e=["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return _=function(){return t},t}var R=c.ZP.div(_()),T=function(e){var n=e.tuMoi,t=e.edit,r=e.clickSuaTuMoi,c=e.toggle,o=e.handleClick;if(!n)return"";var a=(0,p.$V)(n.chuHan),s=(0,p.r9)(n.bacKinh),l=a.map((function(e){return(0,i.jsx)("button",{className:"btnChuHanSmall",id:e,onClick:function(){return c(e)},children:e},e)})),u=s.map((function(e){return(0,i.jsx)("button",{className:"btnBacKinh",onClick:function(){return o(e)},children:e})}));return(0,i.jsxs)("div",{className:"tuMoiItem",children:[(0,i.jsx)("span",{className:"lblChuHan",children:l}),(0,i.jsx)("span",{children:"(".concat(n.hanViet," - ")}),u,(0,i.jsx)("span",{children:") : ".concat(n.nghiaViet)}),t&&(0,i.jsx)("button",{className:"btnTuMoiSua",onClick:function(){return r(n)},children:"S\u1eeda"})]})},B=function(e){var n=e.wordList,t=e.edit,r=e.clickSuaTuMoi,c=e.toggle,o=e.handleClick,a=0;console.log("wordList",n,t);var s="";return(0,p.le)(n)||(s=n.map((function(e){return(0,i.jsx)(T,{tuMoi:e,edit:t,clickSuaTuMoi:function(){return r(e)},toggle:c,handleClick:o},"bhi".concat(++a))}))),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\u751f\u8a5e (T\u1eeb m\u1edbi)"}),t&&(0,i.jsx)("span",{children:"\u0110\u1ec3 s\u1eeda, x\xf3a m\u1ed9t t\u1eeb th\xec click n\xfat S\u1eeda c\u1ee7a t\u1eeb sau \u0111\xf3 S\u1eeda l\u1ea1i n\u1ed9i dung r\u1ed3i b\u1ea5m Th\xeam T\u1eeb/ \u0110\u1ec3 x\xf3a th\xec b\u1ea5m x\xf3a"}),(0,i.jsx)(R,{children:(0,i.jsx)("div",{children:s})})]})}}}]);