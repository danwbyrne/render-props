!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","prop-types"],t):t(e.WillChange={},e.React,e.PropTypes)}(this,function(e,t,n){"use strict";var r;function o(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var l=Array(u),c=0;u>c;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function i(){return(i=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var l=a(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),c={}.hasOwnProperty,f=function(e,t){return c.call(e,t)},s=function(e){try{return!!e()}catch(e){return!0}};function p(){return 7}var v=!s(function(){return 7!=Object.defineProperty({},"a",{get:p}).a}),h=a(function(e){var t=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=t)}),y=function(e,t,n){if(function(t){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},d=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e){if(!d(e))throw TypeError(e+" is not an object!");return e},m=l.document,g=d(m)&&d(m.createElement),w=function(e){return g?m.createElement(e):{}};function O(){return 7}var S=!v&&!s(function(){return 7!=Object.defineProperty(w("div"),"a",{get:O}).a}),j=function(e,t){if(!d(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!d(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!d(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!d(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},_=Object.defineProperty,P={f:v?Object.defineProperty:function(e,t,n){if(b(e),t=j(t,!0),b(n),S)try{return _(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},E=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},T=v?function(e,t,n){return P.f(e,t,E(1,n))}:function(e,t,n){return e[t]=n,e},V="prototype";function A(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[V]=e[V],t}var C=function e(t,n,r){var o,i,u,a=t&e.F,c=t&e.G,f=t&e.S,s=t&e.P,p=t&e.B,v=t&e.W,d=c?h:h[n]||(h[n]={}),b=d[V],m=c?l:f?l[n]:(l[n]||{})[V];for(o in c&&(r=n),r)(i=!a&&m&&void 0!==m[o])&&o in d||(u=i?m[o]:r[o],d[o]=c&&"function"!=typeof m[o]?r[o]:p&&i?y(u,l):v&&m[o]==u?A(u):s&&"function"==typeof u?y(Function.call,u):u,s&&((d.virtual||(d.virtual={}))[o]=u,t&e.R&&b&&!b[o]&&T(b,o,u)))};C.F=1,C.G=2,C.S=4,C.P=8,C.B=16,C.W=32,C.U=64,C.R=128;var L=C,M=T,k=0,x=Math.random(),F=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++k+x).toString(36))};function R(){return!0}var N=a(function(e){var t=F("meta"),n=P.f,r=0,o=Object.isExtensible||R,i=!s(function(){return o(Object.preventExtensions({}))}),u=function(e){n(e,t,{value:{i:"O"+ ++r,w:{}}})},a=e.exports={KEY:t,NEED:!1,fastKey:function(e,n){if(!d(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!f(e,t)){if(!o(e))return"F";if(!n)return"E";u(e)}return e[t].i},getWeak:function(e,n){if(!f(e,t)){if(!o(e))return!0;if(!n)return!1;u(e)}return e[t].w},onFreeze:function(e){return i&&a.NEED&&o(e)&&!f(e,t)&&u(e),e}}}),I=l["__core-js_shared__"]||(l["__core-js_shared__"]={}),H=function(e){return I[e]||(I[e]={})},D=a(function(e){var t=H("wks"),n=l.Symbol,r="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=r&&n[e]||(r?n:F)("Symbol."+e))}).store=t}),G=P.f,W=D("toStringTag"),q=function(e,t,n){e&&!f(e=n?e:e.prototype,W)&&G(e,W,{configurable:!0,value:t})},z={f:D},U=P.f,$=function(e){var t=h.Symbol||(h.Symbol={});"_"==e.charAt(0)||e in t||U(t,e,{value:z.f(e)})},B={}.toString,J=function(e){return B.call(e).slice(8,-1)},K=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==J(e)?e.split(""):Object(e)},Y=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e},Q=function(e){return K(Y(e))},Z=Math.ceil,X=Math.floor,ee=function(e){return isNaN(e=+e)?0:(e>0?X:Z)(e)},te=Math.min,ne=Math.max,re=Math.min,oe=H("keys"),ie=function(e){return oe[e]||(oe[e]=F(e))},ue=function(e,t,n){for(var r,o=Q(e),i=(r=o.length)>0?te(ee(r),9007199254740991):0,u=function(e,t){return 0>(e=ee(e))?ne(e+t,0):re(e,t)}(n,i);i>u;u++)if(u in o&&o[u]===t)return u||0;return-1},ae=ie("IE_PROTO"),le=function(e,t){var n,r=Q(e),o=0,i=[];for(n in r)n!=ae&&f(r,n)&&i.push(n);for(;t.length>o;)f(r,n=t[o++])&&(~ue(i,n)||i.push(n));return i},ce="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),fe=Object.keys||function(e){return le(e,ce)},se={f:Object.getOwnPropertySymbols},pe={f:{}.propertyIsEnumerable},ve=Array.isArray||function(e){return"Array"==J(e)},he=v?Object.defineProperties:function(e,t){b(e);for(var n,r=fe(t),o=r.length,i=0;o>i;)P.f(e,n=r[i++],t[n]);return e},ye=l.document,de=ye&&ye.documentElement,be=ie("IE_PROTO"),me=function(){},ge=function(){var e,t=w("iframe"),n=ce.length;for(t.style.display="none",de.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ge=e.F;n--;)delete ge.prototype[ce[n]];return ge()},we=Object.create||function(e,t){var n;return null!==e?(me.prototype=b(e),n=new me,me.prototype=null,n[be]=e):n=ge(),void 0===t?n:he(n,t)},Oe=ce.concat("length","prototype"),Se={f:Object.getOwnPropertyNames||function(e){return le(e,Oe)}},je=Se.f,_e={}.toString,Pe="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ee={f:function(e){return Pe&&"[object Window]"==_e.call(e)?function(e){try{return je(e)}catch(e){return Pe.slice()}}(e):je(Q(e))}},Te=Object.getOwnPropertyDescriptor,Ve={f:v?Te:function(e,t){if(e=Q(e),t=j(t,!0),S)try{return Te(e,t)}catch(e){}if(f(e,t))return E(!pe.f.call(e,t),e[t])}},Ae=N.KEY,Ce=Ve.f,Le=P.f,Me=Ee.f,ke=l.Symbol,xe=l.JSON,Fe=xe&&xe.stringify,Re=D("_hidden"),Ne=D("toPrimitive"),Ie={}.propertyIsEnumerable,He=H("symbol-registry"),De=H("symbols"),Ge=H("op-symbols"),We=Object.prototype,qe="function"==typeof ke,ze=l.QObject,Ue=!ze||!ze.prototype||!ze.prototype.findChild;function $e(){return Le(this,"a",{value:7}).a}var Be=v&&s(function(){return 7!=we(Le({},"a",{get:$e})).a})?function(e,t,n){var r=Ce(We,t);r&&delete We[t],Le(e,t,n),r&&e!==We&&Le(We,t,r)}:Le,Je=function(e){var t=De[e]=we(ke.prototype);return t._k=e,t},Ke=qe&&"symbol"==typeof ke.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof ke},Ye=function(e,t,n){return e===We&&Ye(Ge,t,n),b(e),t=j(t,!0),b(n),f(De,t)?(n.enumerable?(f(e,Re)&&e[Re][t]&&(e[Re][t]=!1),n=we(n,{enumerable:E(0,!1)})):(f(e,Re)||Le(e,Re,E(1,{})),e[Re][t]=!0),Be(e,t,n)):Le(e,t,n)},Qe=function(e,t){b(e);for(var n,r=function(e){var t=fe(e),n=se.f;if(n)for(var r,o=n(e),i=pe.f,u=0;o.length>u;)i.call(e,r=o[u++])&&t.push(r);return t}(t=Q(t)),o=0,i=r.length;i>o;)Ye(e,n=r[o++],t[n]);return e},Ze=function(e,t){if(e=Q(e),t=j(t,!0),e!==We||!f(De,t)||f(Ge,t)){var n=Ce(e,t);return!n||!f(De,t)||f(e,Re)&&e[Re][t]||(n.enumerable=!0),n}},Xe=function(e){for(var t,n=Me(Q(e)),r=[],o=0;n.length>o;)f(De,t=n[o++])||t==Re||t==Ae||r.push(t);return r},et=function(e){for(var t,n=e===We,r=Me(n?Ge:Q(e)),o=[],i=0;r.length>i;)!f(De,t=r[i++])||n&&!f(We,t)||o.push(De[t]);return o};qe||(M((ke=function(){if(this instanceof ke)throw TypeError("Symbol is not a constructor!");var e=F(arguments.length>0?arguments[0]:void 0);return v&&Ue&&Be(We,e,{configurable:!0,set:function t(n){this===We&&t.call(Ge,n),f(this,Re)&&f(this[Re],e)&&(this[Re][e]=!1),Be(this,e,E(1,n))}}),Je(e)}).prototype,"toString",function(){return this._k}),Ve.f=Ze,P.f=Ye,Se.f=Ee.f=Xe,pe.f=function(e){var t=Ie.call(this,e=j(e,!0));return!(this===We&&f(De,e)&&!f(Ge,e))&&(!(t||!f(this,e)||!f(De,e)||f(this,Re)&&this[Re][e])||t)},se.f=et,z.f=function(e){return Je(D(e))}),L(L.G+L.W+L.F*!qe,{Symbol:ke});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)D(tt[nt++]);for(var rt=fe(D.store),ot=0;rt.length>ot;)$(rt[ot++]);L(L.S+L.F*!qe,"Symbol",{for:function(e){return f(He,e+="")?He[e]:He[e]=ke(e)},keyFor:function(e){if(!Ke(e))throw TypeError(e+" is not a symbol!");for(var t in He)if(He[t]===e)return t},useSetter:function(){Ue=!0},useSimple:function(){Ue=!1}}),L(L.S+L.F*!qe,"Object",{create:function(e,t){return void 0===t?we(e):Qe(we(e),t)},defineProperty:Ye,defineProperties:Qe,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Xe,getOwnPropertySymbols:et}),xe&&L(L.S+L.F*(!qe||s(function(){var e=ke();return"[null]"!=Fe([e])||"{}"!=Fe({a:e})||"{}"!=Fe(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(d(t)||void 0!==e)&&!Ke(e))return ve(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Ke(t))return t}),r[1]=t,Fe.apply(xe,r)}}),ke.prototype[Ne]||T(ke.prototype,Ne,ke.prototype.valueOf),q(ke,"Symbol"),q(Math,"Math",!0),q(l.JSON,"JSON",!0);var it=h.Symbol.for;$("asyncIterator"),$("observable");var ut,at=h.Symbol,lt=function(e,t,n,r){ut||(ut="function"==typeof at&&it&&it("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var a=Array(i),l=0;i>l;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:ut,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}},ct={},ft={};T(ft,D("iterator"),function(){return this});var st=function(e,t,n){e.prototype=we(ft,{next:E(1,n)}),q(e,t+" Iterator")},pt=function(e){return Object(Y(e))},vt=ie("IE_PROTO"),ht=Object.prototype,yt=Object.getPrototypeOf||function(e){return e=pt(e),f(e,vt)?e[vt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ht:null},dt=D("iterator"),bt=!([].keys&&"next"in[].keys()),mt=function(){return this},gt=function(e,t,n,r,o,i,u){st(n,t,r);var a,l,c,f=function(e){if(!bt&&e in h)return h[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},s=t+" Iterator",p="values"==o,v=!1,h=e.prototype,y=h[dt]||h["@@iterator"]||o&&h[o],d=!bt&&y||f(o),b=o?p?f("entries"):d:void 0,m="Array"==t&&h.entries||y;if(m&&(c=yt(m.call(new e)))!==Object.prototype&&c.next&&q(c,s,!0),p&&y&&"values"!==y.name&&(v=!0,d=function(){return y.call(this)}),u&&(bt||v||!h[dt])&&T(h,dt,d),ct[t]=d,ct[s]=mt,o)if(a={values:p?d:f("values"),keys:i?d:f("keys"),entries:b},u)for(l in a)l in h||M(h,l,a[l]);else L(L.P+L.F*(bt||v),t,a);return a},wt=function(e,t){var n,r,o=Y(e)+"",i=ee(t),u=o.length;return 0>i||i>=u?"":55296>(n=o.charCodeAt(i))||n>56319||i+1===u||56320>(r=o.charCodeAt(i+1))||r>57343?o.charAt(i):o.slice(i,i+2)};gt(String,"String",function(e){this._t=e+"",this._i=0},function(){var e,t=this._t,n=this._i;return t.length>n?(e=wt(t,n),this._i+=e.length,{value:e,done:!1}):{value:void 0,done:!0}});var Ot=function(e,t){return{value:t,done:!!e}};gt(Array,"Array",function(e,t){this._t=Q(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return e&&e.length>n?Ot(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]]):(this._t=void 0,Ot(1))},"values"),ct.Arguments=ct.Array;for(var St=D("toStringTag"),jt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),_t=0;jt.length>_t;_t++){var Pt=jt[_t],Et=l[Pt],Tt=Et&&Et.prototype;Tt&&!Tt[St]&&T(Tt,St,Pt),ct[Pt]=ct.Array}var Vt=z.f("iterator");function At(e){return typeof e}function Ct(e){return e&&"function"==typeof at&&e.constructor===at&&e!==at.prototype?"symbol":typeof e}var Lt,Mt,kt,xt=a(function(e){function t(e){return(t="function"==typeof at&&"symbol"==typeof Vt?At:Ct)(e)}function n(e){return t(e)}function r(e){return e&&"function"==typeof at&&e.constructor===at&&e!==at.prototype?"symbol":t(e)}function o(i){return e.exports=o="function"==typeof at&&"symbol"===t(Vt)?n:r,o(i)}e.exports=o});(kt={})[Lt="getPrototypeOf"]=(Mt=(h.Object||{})[Lt]||Object[Lt],function(e){return yt(pt(e))}),L(L.S+L.F*s(function(){Mt(1)}),"Object",kt);var Ft=h.Object.getPrototypeOf,Rt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};L(L.S+L.F*!v,"Object",{defineProperty:P.f});var Nt=h.Object,It=function(e,t,n){return Nt.defineProperty(e,t,n)};function Ht(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),It(e,r.key,r)}}var Dt=function(e,t,n){return t&&Ht(e.prototype,t),n&&Ht(e,n),e},Gt=function(e,t){if(t&&("object"===xt(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},Wt=function(e,t){if(b(e),!d(t)&&null!==t)throw TypeError(t+": can't set as prototype!")},qt={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=y(Function.call,Ve.f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return Wt(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:Wt};L(L.S,"Object",{setPrototypeOf:qt.set});var zt=h.Object.setPrototypeOf;L(L.S,"Object",{create:we});var Ut=h.Object,$t=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Ut.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(zt?zt(e,t):e.__proto__=t)},Bt=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};function Jt(e){return function(t,n){if(void 0===n.value){var r=e;return"function"==typeof r&&(r=e(t.value,n)),t.value===r?null:{value:r}}return"undefined"==typeof process||xt(process),null}}function Kt(e,t){t.value!==this.state.value&&function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];"function"==typeof e&&e.apply(void 0,n)}(this.props.onChange,this.state.value),void 0!==this.props.value&&this.props.value!==this.state.value&&this.setState({value:this.props.value})}function Yt(){return this.valueContext.value=this.state.value,this.props.children(this.valueContext)}var Qt=function(e){function n(e){var t;Rt(this,n),t=Gt(this,(n.__proto__||Ft(n)).call(this,e)),Zt.call(Bt(t));var r=e.value;return t.state={value:void 0===r?e.initialValue:r},t.valueContext={setValue:t.setValue,resetValue:t.resetValue,clearValue:t.clearValue},t}return $t(n,t.Component),Dt(n,[{key:"componentDidUpdate",value:Kt},{key:"render",value:Yt}]),n}(),Zt=function(){var e=this;Object.defineProperty(this,"setValue",{configurable:!0,enumerable:!0,writable:!0,value:function(t){return e.setState(Jt(t))}}),Object.defineProperty(this,"resetValue",{configurable:!0,enumerable:!0,writable:!0,value:function(){return e.setState(Jt(e.props.initialValue))}}),Object.defineProperty(this,"clearValue",{configurable:!0,enumerable:!0,writable:!0,value:function(t){return e.setState(Jt(void 0))}})};function Xt(e){var t=void 0===e.onValue||e.onValue,n=void 0!==e.offValue&&e.offValue,r=void 0===e.value?void 0===e.initialValue?t:e.initialValue:void 0;return"undefined"==typeof process||xt(process),lt(Qt,{initialValue:r,value:e.value,onChange:e.onChange},void 0,function(r){return function(e){function t(t){return t===e.onValue?e.offValue:e.onValue}return e.children({on:function(){e.setValue(e.onValue)},off:function(){e.setValue(e.offValue)},toggle:function(){e.setValue(t)},reset:function(){e.resetValue()},value:e.value})}({onValue:t,offValue:n,value:r.value,setValue:r.setValue,resetValue:r.resetValue,children:e.children})})}var en=D("toStringTag"),tn="Arguments"==J(function(){return arguments}()),nn=function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),en))?n:tn?J(t):"Object"==(r=J(t))&&"function"==typeof t.callee?"Arguments":r},rn=D("iterator"),on=h.isIterable=function(e){var t=Object(e);return void 0!==t[rn]||"@@iterator"in t||ct.hasOwnProperty(nn(t))},un=D("iterator"),an=h.getIteratorMethod=function(e){if(void 0!=e)return e[un]||e["@@iterator"]||ct[nn(e)]},ln=h.getIterator=function(e){var t=an(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return b(t.call(e))},cn=function(e,t){if(Array.isArray(e))return e;if(on(Object(e)))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=ln(e);!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function fn(){this.removeAllEvents()}function sn(){return this.props.children(this.renderProps)}var pn=function(e){function n(e){var t;return Rt(this,n),t=Gt(this,(n.__proto__||Ft(n)).call(this,e)),Object.defineProperty(Bt(t),"listeners",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(Bt(t),"addEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(e,n,r){t.listeners.push([e,n,r]),e.addEventListener(n,r)}}),Object.defineProperty(Bt(t),"removeEvent",{configurable:!0,enumerable:!0,writable:!0,value:function(e,n,r){e.removeEventListener(n,r);for(var o=0;t.listeners.length>o;o++){var i=cn(t.listeners[o],3);e===i[0]&&n===i[1]&&r===i[2]&&t.listeners.splice(o,1)}}}),Object.defineProperty(Bt(t),"removeAllEvents",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var n=0;t.listeners.length>n;n++){var r=cn(t.listeners[n],3),o=r[0];e&&o!==e||(o.removeEventListener(r[1],r[2]),t.listeners.splice(n,1))}}}),t.renderProps={addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents},t}return $t(n,t.Component),Dt(n,[{key:"componentWillUnmount",value:fn},{key:"render",value:sn}]),n}(),vn=function(e){return e.replace(/([A-Z]+)([a-z]+)?/g,"-$1$2").toLowerCase()},hn=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),yn=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window),dn=window&&window.performance?window.performance:Date,bn={onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchMove:"touchmove",onMouseMove:"mousemove",onClick:"mousedown",onHover:"mouseenter",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onScroll:"scroll",onResize:"resize",onFocus:"focus",onBlur:"blur",onDrag:"dragstart",onDrop:"drop"};function mn(e){this.setupHints(e)}function gn(){this.clearStaleTimeout()}function wn(e){for(var t in this.changeEvents=[],this.changeHints=[],e)void 0!==bn&&this.changeEvents.push(bn[t]);if(void 0!==this.props.eventTypes)for(var n=0;this.props.eventTypes.length>n;n++)this.changeEvents.push(this.props.eventTypes[n]);for(var r=0;this.props.properties.length>r;r++)this.changeHints.push(vn(this.props.properties[r]));0===this.changeHints.length&&this.changeHints.push("all"),e.all&&(this.changeHints=["all"])}function On(){var e;null!==this.staleTimeout&&(e=this.staleTimeout,hn?hn(e.value):window.clearTimeout(e),this.staleTimeout=null)}function Sn(){return this.props.children({style:!0===this.props.isOn?{willChange:this.changeHints.join(",")}:{},willChangeRef:this.willChangeRef,willChange:this.willChange})}var jn=function(e){var t,n;function r(t){var n;function r(){return n.started=!0}function o(){return n.started=!0}function i(){return n.off(!0)}return n=e.call(this,t)||this,Object.defineProperty(u(n),"changeElements",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(u(n),"changeHints",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(u(n),"changeEvents",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(u(n),"staleTimeout",{configurable:!0,enumerable:!0,writable:!0,value:null}),Object.defineProperty(u(n),"started",{configurable:!0,enumerable:!0,writable:!0,value:!1}),Object.defineProperty(u(n),"willChangeRef",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if(null!==e&&-1===n.changeElements.indexOf(e)){n.changeElements.push(e);for(var t=n.props.addEvent,i=0;n.changeEvents.length>i;i++)t(e,n.changeEvents[i],n.on);t(e,"animationstart",r),t(e,"transitionstart",o),t(e,"animationend",n.off),t(e,"transitionend",n.off)}}}),Object.defineProperty(u(n),"willChange",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.on(!0)}}),Object.defineProperty(u(n),"on",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=n.props,r=t.staleTimeout;n.props.isOn||((0,t.on)(),e&&(n.started=!0),r&&(n.staleTimeout=function(e,t){if(!yn)return window.setTimeout(e,t);var n=dn.now(),r={};return r.value=yn(function o(){var i=dn.now();t>i-n?r.value=yn(o):e.call()}),r}(i,r)))}}),Object.defineProperty(u(n),"off",{configurable:!0,enumerable:!0,writable:!0,value:function(e){void 0===e&&(e=!1),(!e||e&&n.started)&&(n.props.off(),n.clearStaleTimeout(),n.started=!1)}}),n.setupHints(t),n}(t=r).prototype=Object.create((n=e).prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidUpdate=mn,o.componentWillUnmount=gn,o.setupHints=wn,o.clearStaleTimeout=On,o.render=Sn,r}(t.Component);Object.defineProperty(jn,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{staleTimeout:1e3}}),e.default=function(e){return o(pn,{},void 0,function(n){return o(Xt,{initialValue:e.initialValue||!1},void 0,function(r){return t.createElement(jn,i({},e,n,{on:r.on,off:r.off,isOn:r.value,children:e.children}))})})},Object.defineProperty(e,"__esModule",{value:!0})});
