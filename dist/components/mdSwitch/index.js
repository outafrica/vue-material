/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var d=n[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=477)})({0:function(e,t){e.exports=function(e,t,n,i,d){var c,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(c=e,o=e.default);var r="function"==typeof o?o.options:o;t&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns),i&&(r._scopeId=i);var a;if(d?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},r._ssrRegister=a):n&&(a=n),a){var u=r.functional,l=u?r.render:r.beforeCreate;u?r.render=function(e,t){return a.call(t),l(e,t)}:r.beforeCreate=l?[].concat(l,a):[a]}return{esModule:c,exports:o,options:r}}},1:function(e,t,n){"use strict";function i(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||i(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},382:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function d(e){e.component("md-switch",o.default),e.material.styles.push(r.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var c=n(383),o=i(c),s=n(387),r=i(s);e.exports=t.default},383:function(e,t,n){function i(e){n(384)}var d=n(0)(n(385),n(386),i,null,null);e.exports=d.exports},384:function(e,t){},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),d=(function(e){return e&&e.__esModule?e:{default:e}})(i);t.default={name:"md-switch",props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[d.default],data:function(){return{leftPos:"-1px",checked:Boolean(this.value)}},computed:{classes:function(){return{"md-checked":this.checked,"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(e){this.changeState(e)}},methods:{setPosition:function(){this.leftPos=this.checked?"75%":"-1px"},changeState:function(e,t){void 0!==t?(this.$emit("change",e,t),t.defaultPrevented||(this.checked=e),this.$emit("input",this.checked,t)):this.checked=e},toggle:function(e){this.disabled||this.changeState(!this.checked,e)}},mounted:function(){this.$nextTick(this.setPosition)}},e.exports=t.default},386:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.themeClass,e.classes]},[n("div",{staticClass:"md-switch-container",on:{click:function(t){e.toggle(t)}}},[n("div",{staticClass:"md-switch-thumb",style:e.styles},[n("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.value}}),e._v(" "),n("button",{staticClass:"md-switch-holder",attrs:{type:e.type}}),e._v(" "),n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1)]),e._v(" "),e.$slots.default?n("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},387:function(e,t){e.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},477:function(e,t,n){e.exports=n(382)}})}));