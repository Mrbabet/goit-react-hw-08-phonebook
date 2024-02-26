import{r as A,h as J,f as P,k as K,p as q,c as _,j as C,a as N,d as te,V as w,U as ue,W,e as ne,X as ee,Y as Ie,Z as Pe,R as M}from"./index-QG5OlEuZ.js";function Oe(a){return A.Children.toArray(a).filter(e=>A.isValidElement(e))}var[Re,ce]=J({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[_e,Y]=J({strict:!1,name:"FormControlContext"});function we(a){const{id:e,isRequired:r,isInvalid:n,isDisabled:t,isReadOnly:o,...u}=a,s=A.useId(),i=e||`field-${s}`,l=`${i}-label`,c=`${i}-feedback`,d=`${i}-helptext`,[f,m]=A.useState(!1),[h,g]=A.useState(!1),[y,S]=A.useState(!1),x=A.useCallback((b={},O=null)=>({id:d,...b,ref:te(O,z=>{z&&g(!0)})}),[d]),U=A.useCallback((b={},O=null)=>({...b,ref:O,"data-focus":w(y),"data-disabled":w(t),"data-invalid":w(n),"data-readonly":w(o),id:b.id!==void 0?b.id:l,htmlFor:b.htmlFor!==void 0?b.htmlFor:i}),[i,t,y,n,o,l]),$=A.useCallback((b={},O=null)=>({id:c,...b,ref:te(O,z=>{z&&m(!0)}),"aria-live":"polite"}),[c]),Ce=A.useCallback((b={},O=null)=>({...b,...u,ref:O,role:"group","data-focus":w(y),"data-disabled":w(t),"data-invalid":w(n),"data-readonly":w(o)}),[u,t,y,n,o]),Se=A.useCallback((b={},O=null)=>({...b,ref:O,role:"presentation","aria-hidden":!0,children:b.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!o,isDisabled:!!t,isFocused:!!y,onFocus:()=>S(!0),onBlur:()=>S(!1),hasFeedbackText:f,setHasFeedbackText:m,hasHelpText:h,setHasHelpText:g,id:i,labelId:l,feedbackId:c,helpTextId:d,htmlProps:u,getHelpTextProps:x,getErrorMessageProps:$,getRootProps:Ce,getLabelProps:U,getRequiredIndicatorProps:Se}}var Ne=P(function(e,r){const n=K("Form",e),t=q(e),{getRootProps:o,htmlProps:u,...s}=we(t),i=_("chakra-form-control",e.className);return C.jsx(_e,{value:s,children:C.jsx(Re,{value:n,children:C.jsx(N.div,{...o({},r),className:i,__css:n.container})})})});Ne.displayName="FormControl";var xe=P(function(e,r){const n=Y(),t=ce(),o=_("chakra-form__helper-text",e.className);return C.jsx(N.div,{...n==null?void 0:n.getHelpTextProps(e,r),__css:t.helperText,className:o})});xe.displayName="FormHelperText";var Le=P(function(e,r){var n;const t=ue("FormLabel",e),o=q(e),{className:u,children:s,requiredIndicator:i=C.jsx(de,{}),optionalIndicator:l=null,...c}=o,d=Y(),f=(n=d==null?void 0:d.getLabelProps(c,r))!=null?n:{ref:r,...c};return C.jsxs(N.label,{...f,className:_("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...t},children:[s,d!=null&&d.isRequired?i:l]})});Le.displayName="FormLabel";var de=P(function(e,r){const n=Y(),t=ce();if(!(n!=null&&n.isRequired))return null;const o=_("chakra-form__required-indicator",e.className);return C.jsx(N.span,{...n==null?void 0:n.getRequiredIndicatorProps(e,r),__css:t.requiredIndicator,className:o})});de.displayName="RequiredIndicator";function Fe(a){const{isDisabled:e,isInvalid:r,isReadOnly:n,isRequired:t,...o}=je(a);return{...o,disabled:e,readOnly:n,required:t,"aria-invalid":W(r),"aria-required":W(t),"aria-readonly":W(n)}}function je(a){var e,r,n;const t=Y(),{id:o,disabled:u,readOnly:s,required:i,isRequired:l,isInvalid:c,isReadOnly:d,isDisabled:f,onFocus:m,onBlur:h,...g}=a,y=a["aria-describedby"]?[a["aria-describedby"]]:[];return t!=null&&t.hasFeedbackText&&(t!=null&&t.isInvalid)&&y.push(t.feedbackId),t!=null&&t.hasHelpText&&y.push(t.helpTextId),{...g,"aria-describedby":y.join(" ")||void 0,id:o??(t==null?void 0:t.id),isDisabled:(e=u??f)!=null?e:t==null?void 0:t.isDisabled,isReadOnly:(r=s??d)!=null?r:t==null?void 0:t.isReadOnly,isRequired:(n=i??l)!=null?n:t==null?void 0:t.isRequired,isInvalid:c??(t==null?void 0:t.isInvalid),onFocus:ne(t==null?void 0:t.onFocus,m),onBlur:ne(t==null?void 0:t.onBlur,h)}}var fe={exports:{}},He="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ke=He,Me=ke;function pe(){}function me(){}me.resetWarningCache=pe;var De=function(){function a(n,t,o,u,s,i){if(i!==Me){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}a.isRequired=a;function e(){return a}var r={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:e,element:a,elementType:a,instanceOf:e,node:a,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:me,resetWarningCache:pe};return r.PropTypes=r,r};fe.exports=De();var qe=fe.exports;const T=ee(qe);var[Ue,Be]=J({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),Ye=P(function(e,r){const n=K("Input",e),{children:t,className:o,...u}=q(e),s=_("chakra-input__group",o),i={},l=Oe(t),c=n.field;l.forEach(f=>{var m,h;n&&(c&&f.type.id==="InputLeftElement"&&(i.paddingStart=(m=c.height)!=null?m:c.h),c&&f.type.id==="InputRightElement"&&(i.paddingEnd=(h=c.height)!=null?h:c.h),f.type.id==="InputRightAddon"&&(i.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(i.borderStartRadius=0))});const d=l.map(f=>{var m,h;const g=Ie({size:((m=f.props)==null?void 0:m.size)||e.size,variant:((h=f.props)==null?void 0:h.variant)||e.variant});return f.type.id!=="Input"?A.cloneElement(f,g):A.cloneElement(f,Object.assign(g,i,f.props))});return C.jsx(N.div,{className:s,ref:r,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...u,children:C.jsx(Ue,{value:n,children:d})})});Ye.displayName="InputGroup";var Ge=N("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),G=P(function(e,r){var n,t;const{placement:o="left",...u}=e,s=Be(),i=s.field,c={[o==="left"?"insetStart":"insetEnd"]:"0",width:(n=i==null?void 0:i.height)!=null?n:i==null?void 0:i.h,height:(t=i==null?void 0:i.height)!=null?t:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...s.element};return C.jsx(Ge,{ref:r,__css:c,...u})});G.id="InputElement";G.displayName="InputElement";var Te=P(function(e,r){const{className:n,...t}=e,o=_("chakra-input__left-element",n);return C.jsx(G,{ref:r,placement:"left",className:o,...t})});Te.id="InputLeftElement";Te.displayName="InputLeftElement";var ve=P(function(e,r){const{className:n,...t}=e,o=_("chakra-input__right-element",n);return C.jsx(G,{ref:r,placement:"right",className:o,...t})});ve.id="InputRightElement";ve.displayName="InputRightElement";var he=P(function(e,r){const{htmlSize:n,...t}=e,o=K("Input",t),u=q(t),s=Fe(u),i=_("chakra-input",e.className);return C.jsx(N.input,{size:n,...s,__css:o.field,ref:r,className:i})});he.displayName="Input";he.id="Input";var $e=P(function(e,r){const n=ue("Heading",e),{className:t,...o}=q(e);return C.jsx(N.h2,{ref:r,className:_("chakra-heading",e.className),...o,__css:n})});$e.displayName="Heading";function ze(a){return a&&typeof a=="object"&&"default"in a?a.default:a}var ye=A,We=ze(ye);function re(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function Xe(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var Ve=!!(typeof window<"u"&&window.document&&window.document.createElement);function Qe(a,e,r){if(typeof a!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof r<"u"&&typeof r!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function n(t){return t.displayName||t.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],s;function i(){s=a(u.map(function(c){return c.props})),l.canUseDOM?e(s):r&&(s=r(s))}var l=function(c){Xe(d,c);function d(){return c.apply(this,arguments)||this}d.peek=function(){return s},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var h=s;return s=void 0,u=[],h};var f=d.prototype;return f.UNSAFE_componentWillMount=function(){u.push(this),i()},f.componentDidUpdate=function(){i()},f.componentWillUnmount=function(){var h=u.indexOf(this);u.splice(h,1),i()},f.render=function(){return We.createElement(o,this.props)},d}(ye.PureComponent);return re(l,"displayName","SideEffect("+n(o)+")"),re(l,"canUseDOM",Ve),l}}var Ze=Qe;const Je=ee(Ze);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ae=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;function tt(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function nt(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(n.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(o){t[o]=o}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var rt=nt()?Object.assign:function(a,e){for(var r,n=tt(a),t,o=1;o<arguments.length;o++){r=Object(arguments[o]);for(var u in r)Ke.call(r,u)&&(n[u]=r[u]);if(ae){t=ae(r);for(var s=0;s<t.length;s++)et.call(r,t[s])&&(n[t[s]]=r[t[s]])}}return n};const at=ee(rt);var L={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},p={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(p).map(function(a){return p[a]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},ot=Object.keys(B).reduce(function(a,e){return a[B[e]]=e,a},{}),it=[p.NOSCRIPT,p.SCRIPT,p.STYLE],I="data-react-helmet",st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},lt=function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")},ut=function(){function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,r,n){return r&&a(e.prototype,r),n&&a(e,n),e}}(),E=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},ct=function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)},oe=function(a,e){var r={};for(var n in a)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(a,n)&&(r[n]=a[n]);return r},dt=function(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:a},V=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ft=function(e){var r=j(e,p.TITLE),n=j(e,D.TITLE_TEMPLATE);if(n&&r)return n.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var t=j(e,D.DEFAULT_TITLE);return r||t||void 0},pt=function(e){return j(e,D.ON_CHANGE_CLIENT_STATE)||function(){}},X=function(e,r){return r.filter(function(n){return typeof n[e]<"u"}).map(function(n){return n[e]}).reduce(function(n,t){return E({},n,t)},{})},mt=function(e,r){return r.filter(function(n){return typeof n[p.BASE]<"u"}).map(function(n){return n[p.BASE]}).reverse().reduce(function(n,t){if(!n.length)for(var o=Object.keys(t),u=0;u<o.length;u++){var s=o[u],i=s.toLowerCase();if(e.indexOf(i)!==-1&&t[i])return n.concat(t)}return n},[])},H=function(e,r,n){var t={};return n.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&yt("Helmet: "+e+' should be of type "Array". Instead found type "'+st(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,u){var s={};u.filter(function(f){for(var m=void 0,h=Object.keys(f),g=0;g<h.length;g++){var y=h[g],S=y.toLowerCase();r.indexOf(S)!==-1&&!(m===v.REL&&f[m].toLowerCase()==="canonical")&&!(S===v.REL&&f[S].toLowerCase()==="stylesheet")&&(m=S),r.indexOf(y)!==-1&&(y===v.INNER_HTML||y===v.CSS_TEXT||y===v.ITEM_PROP)&&(m=y)}if(!m||!f[m])return!1;var x=f[m].toLowerCase();return t[m]||(t[m]={}),s[m]||(s[m]={}),t[m][x]?!1:(s[m][x]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var i=Object.keys(s),l=0;l<i.length;l++){var c=i[l],d=at({},t[c],s[c]);t[c]=d}return o},[]).reverse()},j=function(e,r){for(var n=e.length-1;n>=0;n--){var t=e[n];if(t.hasOwnProperty(r))return t[r]}return null},Tt=function(e){return{baseTag:mt([v.HREF,v.TARGET],e),bodyAttributes:X(L.BODY,e),defer:j(e,D.DEFER),encode:j(e,D.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:X(L.HTML,e),linkTags:H(p.LINK,[v.REL,v.HREF],e),metaTags:H(p.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:H(p.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:pt(e),scriptTags:H(p.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:H(p.STYLE,[v.CSS_TEXT],e),title:ft(e),titleAttributes:X(L.TITLE,e)}},Q=function(){var a=Date.now();return function(e){var r=Date.now();r-a>16?(a=r,e(r)):setTimeout(function(){Q(e)},0)}}(),ie=function(e){return clearTimeout(e)},vt=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:global.requestAnimationFrame||Q,ht=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:global.cancelAnimationFrame||ie,yt=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},k=null,gt=function(e){k&&ht(k),e.defer?k=vt(function(){se(e,function(){k=null})}):(se(e),k=null)},se=function(e,r){var n=e.baseTag,t=e.bodyAttributes,o=e.htmlAttributes,u=e.linkTags,s=e.metaTags,i=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,m=e.titleAttributes;Z(p.BODY,t),Z(p.HTML,o),bt(f,m);var h={baseTag:F(p.BASE,n),linkTags:F(p.LINK,u),metaTags:F(p.META,s),noscriptTags:F(p.NOSCRIPT,i),scriptTags:F(p.SCRIPT,c),styleTags:F(p.STYLE,d)},g={},y={};Object.keys(h).forEach(function(S){var x=h[S],U=x.newTags,$=x.oldTags;U.length&&(g[S]=U),$.length&&(y[S]=h[S].oldTags)}),r&&r(),l(e,g,y)},ge=function(e){return Array.isArray(e)?e.join(""):e},bt=function(e,r){typeof e<"u"&&document.title!==e&&(document.title=ge(e)),Z(p.TITLE,r)},Z=function(e,r){var n=document.getElementsByTagName(e)[0];if(n){for(var t=n.getAttribute(I),o=t?t.split(","):[],u=[].concat(o),s=Object.keys(r),i=0;i<s.length;i++){var l=s[i],c=r[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var d=u.indexOf(l);d!==-1&&u.splice(d,1)}for(var f=u.length-1;f>=0;f--)n.removeAttribute(u[f]);o.length===u.length?n.removeAttribute(I):n.getAttribute(I)!==s.join(",")&&n.setAttribute(I,s.join(","))}},F=function(e,r){var n=document.head||document.querySelector(p.HEAD),t=n.querySelectorAll(e+"["+I+"]"),o=Array.prototype.slice.call(t),u=[],s=void 0;return r&&r.length&&r.forEach(function(i){var l=document.createElement(e);for(var c in i)if(i.hasOwnProperty(c))if(c===v.INNER_HTML)l.innerHTML=i.innerHTML;else if(c===v.CSS_TEXT)l.styleSheet?l.styleSheet.cssText=i.cssText:l.appendChild(document.createTextNode(i.cssText));else{var d=typeof i[c]>"u"?"":i[c];l.setAttribute(c,d)}l.setAttribute(I,"true"),o.some(function(f,m){return s=m,l.isEqualNode(f)})?o.splice(s,1):u.push(l)}),o.forEach(function(i){return i.parentNode.removeChild(i)}),u.forEach(function(i){return n.appendChild(i)}),{oldTags:o,newTags:u}},be=function(e){return Object.keys(e).reduce(function(r,n){var t=typeof e[n]<"u"?n+'="'+e[n]+'"':""+n;return r?r+" "+t:t},"")},Et=function(e,r,n,t){var o=be(n),u=ge(r);return o?"<"+e+" "+I+'="true" '+o+">"+V(u,t)+"</"+e+">":"<"+e+" "+I+'="true">'+V(u,t)+"</"+e+">"},At=function(e,r,n){return r.reduce(function(t,o){var u=Object.keys(o).filter(function(l){return!(l===v.INNER_HTML||l===v.CSS_TEXT)}).reduce(function(l,c){var d=typeof o[c]>"u"?c:c+'="'+V(o[c],n)+'"';return l?l+" "+d:d},""),s=o.innerHTML||o.cssText||"",i=it.indexOf(e)===-1;return t+"<"+e+" "+I+'="true" '+u+(i?"/>":">"+s+"</"+e+">")},"")},Ee=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,t){return n[B[t]||t]=e[t],n},r)},Ct=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,t){return n[ot[t]||t]=e[t],n},r)},St=function(e,r,n){var t,o=(t={key:r},t[I]=!0,t),u=Ee(n,o);return[M.createElement(p.TITLE,u,r)]},It=function(e,r){return r.map(function(n,t){var o,u=(o={key:t},o[I]=!0,o);return Object.keys(n).forEach(function(s){var i=B[s]||s;if(i===v.INNER_HTML||i===v.CSS_TEXT){var l=n.innerHTML||n.cssText;u.dangerouslySetInnerHTML={__html:l}}else u[i]=n[s]}),M.createElement(e,u)})},R=function(e,r,n){switch(e){case p.TITLE:return{toComponent:function(){return St(e,r.title,r.titleAttributes)},toString:function(){return Et(e,r.title,r.titleAttributes,n)}};case L.BODY:case L.HTML:return{toComponent:function(){return Ee(r)},toString:function(){return be(r)}};default:return{toComponent:function(){return It(e,r)},toString:function(){return At(e,r,n)}}}},Ae=function(e){var r=e.baseTag,n=e.bodyAttributes,t=e.encode,o=e.htmlAttributes,u=e.linkTags,s=e.metaTags,i=e.noscriptTags,l=e.scriptTags,c=e.styleTags,d=e.title,f=d===void 0?"":d,m=e.titleAttributes;return{base:R(p.BASE,r,t),bodyAttributes:R(L.BODY,n,t),htmlAttributes:R(L.HTML,o,t),link:R(p.LINK,u,t),meta:R(p.META,s,t),noscript:R(p.NOSCRIPT,i,t),script:R(p.SCRIPT,l,t),style:R(p.STYLE,c,t),title:R(p.TITLE,{title:f,titleAttributes:m},t)}},Pt=function(e){var r,n;return n=r=function(t){ct(o,t);function o(){return lt(this,o),dt(this,t.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!Pe(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,i){if(!i)return null;switch(s.type){case p.SCRIPT:case p.NOSCRIPT:return{innerHTML:i};case p.STYLE:return{cssText:i}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var i,l=s.child,c=s.arrayTypeChildren,d=s.newChildProps,f=s.nestedChildren;return E({},c,(i={},i[l.type]=[].concat(c[l.type]||[],[E({},d,this.mapNestedChildrenToProps(l,f))]),i))},o.prototype.mapObjectTypeChildren=function(s){var i,l,c=s.child,d=s.newProps,f=s.newChildProps,m=s.nestedChildren;switch(c.type){case p.TITLE:return E({},d,(i={},i[c.type]=m,i.titleAttributes=E({},f),i));case p.BODY:return E({},d,{bodyAttributes:E({},f)});case p.HTML:return E({},d,{htmlAttributes:E({},f)})}return E({},d,(l={},l[c.type]=E({},f),l))},o.prototype.mapArrayTypeChildrenToProps=function(s,i){var l=E({},i);return Object.keys(s).forEach(function(c){var d;l=E({},l,(d={},d[c]=s[c],d))}),l},o.prototype.warnOnInvalidChildren=function(s,i){return!0},o.prototype.mapChildrenToProps=function(s,i){var l=this,c={};return M.Children.forEach(s,function(d){if(!(!d||!d.props)){var f=d.props,m=f.children,h=oe(f,["children"]),g=Ct(h);switch(l.warnOnInvalidChildren(d,m),d.type){case p.LINK:case p.META:case p.NOSCRIPT:case p.SCRIPT:case p.STYLE:c=l.flattenArrayTypeChildren({child:d,arrayTypeChildren:c,newChildProps:g,nestedChildren:m});break;default:i=l.mapObjectTypeChildren({child:d,newProps:i,newChildProps:g,nestedChildren:m});break}}}),i=this.mapArrayTypeChildrenToProps(c,i),i},o.prototype.render=function(){var s=this.props,i=s.children,l=oe(s,["children"]),c=E({},l);return i&&(c=this.mapChildrenToProps(i,c)),M.createElement(e,c)},ut(o,null,[{key:"canUseDOM",set:function(s){e.canUseDOM=s}}]),o}(M.Component),r.propTypes={base:T.object,bodyAttributes:T.object,children:T.oneOfType([T.arrayOf(T.node),T.node]),defaultTitle:T.string,defer:T.bool,encodeSpecialCharacters:T.bool,htmlAttributes:T.object,link:T.arrayOf(T.object),meta:T.arrayOf(T.object),noscript:T.arrayOf(T.object),onChangeClientState:T.func,script:T.arrayOf(T.object),style:T.arrayOf(T.object),title:T.string,titleAttributes:T.object,titleTemplate:T.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var t=e.rewind();return t||(t=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},Ot=function(){return null},Rt=Je(Tt,gt,Ae)(Ot),le=Pt(Rt);le.renderStatic=le.rewind;export{Ne as F,le as H,he as I,T as P,Le as a,Ye as b,Te as c,$e as d,ve as e,Oe as g,Y as u};