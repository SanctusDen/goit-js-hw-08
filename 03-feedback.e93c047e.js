function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function T(e){return c=e,a=setTimeout(h,t),l?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function h(){var e=p();if(j(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function w(e){return a=void 0,m&&r?y(e):(r=o=void 0,u)}function x(){var e=p(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return T(f);if(s)return a=setTimeout(h,t),y(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},x.flush=function(){return void 0===a?u:w(p())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),T=document.querySelector("textarea");y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state",y)})),T.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value,n=e.currentTarget.value;localStorage.setItem("feedback-form-state",{email:n,message:t})}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(T.value=e)}();
//# sourceMappingURL=03-feedback.e93c047e.js.map
