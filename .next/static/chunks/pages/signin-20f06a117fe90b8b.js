(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2176],{6495:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(8716)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(o){s=!0,a=o}finally{try{l||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},s=n(6273),o=n(387),c=n(7190);var u={};function f(e,r,n,t){if(e&&s.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=o.useRouter(),i=l.default.useMemo((function(){var r=a(s.resolveHref(t,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?s.resolveHref(t,e.as):i||n}}),[t,e.href,e.as]),d=i.href,m=i.as,h=e.children,p=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),g=j[0],N=j[1],w=l.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);l.default.useEffect((function(){var e=N&&n&&s.isLocalURL(d),r="undefined"!==typeof b?b:t&&t.locale,a=u[d+"%"+m+(r?"%"+r:"")];e&&!a&&f(t,d,m,{locale:r})}),[m,d,N,b,n,t]);var E={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,i,l,o){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),r[a?"replace":"push"](n,t,{shallow:i,locale:o,scroll:l}))}(e,t,d,m,p,v,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(d)&&f(t,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var S="undefined"!==typeof b?b:t&&t.locale,_=t&&t.isLocaleDomain&&s.getDomainLocale(m,S,t&&t.locales,t&&t.domainLocales);E.href=_||s.addBasePath(s.addLocale(m,S,t&&t.defaultLocale))}return l.default.cloneElement(r,E)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(o){s=!0,a=o}finally{try{l||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!s,t=i.useRef(),c=a(i.useState(!1),2),u=c[0],f=c[1],d=i.useCallback((function(e){t.current&&(t.current(),t.current=void 0),n||u||e&&e.tagName&&(t.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=o.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return o.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,i=t.observer,l=t.elements;return l.set(e,r),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return i.useEffect((function(){if(!s&&!u){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=n(7294),l=n(9311),s="undefined"!==typeof IntersectionObserver;var o=new Map},8716:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return u}});var t=n(5893),a=n(1664),i=n(2175),l=n(4231),s={email:"",password:""},o=l.Ry().shape({email:l.Z_().email("Email is invalid").required("Email is required"),password:l.Z_().min(6,"Password must be at least 6 characters").required("Password is required")});var c=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.J9,{initialValues:s,validationSchema:o,onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))},children:function(e){var r=e.errors,n=(e.status,e.touched);return(0,t.jsxs)(i.l0,{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Email"}),(0,t.jsx)(i.gN,{name:"email",type:"text",className:"form-control"+(r.email&&n.email?" is-invalid":"")}),(0,t.jsx)(i.Bc,{name:"email",component:"div",className:"invalid-feedback"})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Password"}),(0,t.jsx)(i.gN,{name:"password",type:"text",className:"form-control"+(r.password&&n.password?" is-invalid":"")}),(0,t.jsx)(i.Bc,{name:"password",component:"div",className:"invalid-feedback"})]}),(0,t.jsx)("div",{className:"col-6",children:(0,t.jsxs)("div",{className:"form-check",children:[(0,t.jsx)(i.gN,{type:"checkbox",name:"acceptTerms",className:"form-check-input "}),(0,t.jsx)("label",{className:"form-check-label",children:"Remember me"})]})}),(0,t.jsx)("div",{className:"col-6 text-end",children:(0,t.jsx)(a.default,{href:"/reset",children:(0,t.jsx)("a",{children:"Forgot Password?"})})})]}),(0,t.jsx)("div",{className:"mt-3 d-grid gap-2",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Sign In"})})]})}})})};var u=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"authincation section-padding",children:(0,t.jsx)("div",{className:"container h-100",children:(0,t.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,t.jsxs)("div",{className:"col-xl-5 col-md-6",children:[(0,t.jsxs)("div",{className:"mini-logo text-center my-4",children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"./images/logo.webp",alt:""})})}),(0,t.jsx)("h4",{className:"card-title mt-5",children:"Sign in to Neftify"})]}),(0,t.jsx)("div",{className:"auth-form card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)(c,{}),(0,t.jsxs)("p",{className:"mt-3 mb-0",children:["Don't have an account?",(0,t.jsx)(a.default,{href:"/signup",children:(0,t.jsx)("a",{className:"text-primary",children:"Sign up"})})]})]})}),(0,t.jsxs)("div",{className:"privacy-link",children:[(0,t.jsx)(a.default,{href:"#",children:(0,t.jsx)("a",{children:"Have an issue with 2-factor authentication?"})}),(0,t.jsx)("br",{}),(0,t.jsx)(a.default,{href:"#",children:(0,t.jsx)("a",{children:"Privacy Policy"})})]})]})})})})})}},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[350,1141,9774,2888,179],(function(){return r=6495,e(e.s=r);var r}));var r=e.O();_N_E=r}]);