var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),m?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function S(){var e=d();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return b?s(n,i-(e-c)):n}(e))}function h(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function T(){var e=d(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(b)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:h(d())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector("form");console.dir(b),function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),console.log(e),Object.entries(e).forEach((([e,t])=>{b.elements[e].value=t})))}(),b.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),b.elements.email.value="",b.elements.message.value=""})),b.addEventListener("input",(e=>{let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}));
//# sourceMappingURL=03-feedback.15a1547a.js.map