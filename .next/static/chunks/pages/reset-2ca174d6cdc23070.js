(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8711],{4934:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset",function(){return r(6489)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},c=r(6273),i=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var t=a(c.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,j=a(s.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],N=l.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);l.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,w,b,r,n]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}))}(e,n,d,p,m,v,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&c.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);E.href=M||c.addBasePath(c.addLocale(p,_,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=o.useRef(),s=a(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!c&&!u){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),l=r(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},6489:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(1664);t.default=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"authincation section-padding",children:(0,n.jsx)("div",{className:"container h-100",children:(0,n.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,n.jsxs)("div",{className:"col-xl-4 col-md-5",children:[(0,n.jsxs)("div",{className:"mini-logo text-center my-3",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"./images/logo.png",alt:""})})}),(0,n.jsx)("h4",{className:"card-title mt-5",children:"Reset Password"})]}),(0,n.jsx)("div",{className:"auth-form card",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("form",{className:"row g-3",children:[(0,n.jsxs)("div",{className:"col-12",children:[(0,n.jsx)("label",{className:"form-label",children:"Email"}),(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"***********"})]}),(0,n.jsx)("div",{className:"text-center mt-4",children:(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})})]}),(0,n.jsx)("div",{className:"new-account mt-3",children:(0,n.jsxs)("p",{children:["Don't get code?",(0,n.jsx)(a.default,{href:"/otp-1",children:(0,n.jsx)("a",{className:"text-primary",children:"Resend"})})]})})]})})]})})})})})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[9774,2888,179],(function(){return t=4934,e(e.s=t);var t}));var t=e.O();_N_E=t}]);