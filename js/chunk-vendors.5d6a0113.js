(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var i=n("e330"),r=n("59ed"),s=n("40d5"),o=i(i.bind);t.exports=function(t,e){return r(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},"04d1":function(t,e,n){var i=n("342f"),r=i.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"06cf":function(t,e,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),l=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!r(s.f,t,e),t[e])}},"0789":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var i=n("d9f7");function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"}),o.on.afterLeave=r(o.on.afterLeave,t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}})),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,t=>{t.style.setProperty("display","none","important")})),e(s,Object(i["a"])(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",Object(i["a"])(r.data,{props:{name:t},on:e}),r.children)}}}var a=n("80d2"),c=function(t="",e=!1){const n=e?"width":"height",i="offset"+Object(a["A"])(n);return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=e[i]+"px";e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[n]=s})},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=t[i]+"px",t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const l=s("fade-transition"),u=s("scale-transition"),h=(s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),p=o("expand-x-transition",c("",!0))},"07fa":function(t,e,n){var i=n("50c4");t.exports=function(t){return i(t.length)}},"0b42":function(t,e,n){var i=n("da84"),r=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),l=i.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,s(e)&&(e===l||r(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"0bc6":function(t,e,n){},"0cfb":function(t,e,n){var i=n("83ab"),r=n("d039"),s=n("cc12");t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var i=n("da84"),r=i.String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},"0fd9":function(t,e,n){"use strict";n("4b85");var i=n("2b0e"),r=n("d9f7"),s=n("80d2");const o=["sm","md","lg","xl"],a=["start","end","center"];function c(t,e){return o.reduce((n,i)=>(n[t+Object(s["A"])(i)]=e(),n),{})}const l=t=>[...a,"baseline","stretch"].includes(t),u=c("align",()=>({type:String,default:null,validator:l})),h=t=>[...a,"space-between","space-around"].includes(t),d=c("justify",()=>({type:String,default:null,validator:h})),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=c("alignContent",()=>({type:String,default:null,validator:p})),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,n){let i=v[t];if(null!=n){if(e){const n=e.replace(t,"");i+="-"+n}return i+="-"+n,i.toLowerCase()}}const y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=y.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach(n=>{const i=e[n],r=g(t,n,i);r&&o.push(r)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(s,o)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:o}),i)}})},"10d2":function(t,e,n){"use strict";var i=n("8dd9");e["a"]=i["a"]},"132d":function(t,e,n){"use strict";n("4804");var i,r=n("7e2b"),s=n("a9ad"),o=n("af2b"),a=n("7560"),c=n("80d2"),l=n("2b0e"),u=n("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some(e=>t.includes(e))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=Object(u["a"])(r["a"],s["a"],o["a"],a["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["z"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["v"])(t).find(e=>t[e]);return e&&i[e]||Object(c["g"])(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"166a":function(t,e,n){},"169a":function(t,e,n){"use strict";n("368e");var i=n("480e"),r=n("4ad4"),s=n("b848"),o=n("75eb"),a=n("e707"),c=n("e4d3"),l=n("21be"),u=n("f2e7"),h=n("a293"),d=n("58df"),p=n("d9bd"),f=n("80d2");const m=Object(d["a"])(r["a"],s["a"],o["a"],a["a"],c["a"],l["a"],u["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===f["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog",tabindex:this.isActive?0:void 0,"aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(f["g"])(this.maxWidth),width:Object(f["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}})},1800:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const i=n.filter(t=>!1===t.isComment&&" "!==t.text);return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}})},"19aa":function(t,e,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},"1abc":function(t,e,n){"use strict";var i=n("a797");e["a"]=i["a"]},"1b2c":function(t,e,n){},"1baa":function(t,e,n){"use strict";n("899c");var i=n("604c"),r=n("a9ad"),s=n("58df");e["a"]=Object(s["a"])(i["a"],r["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...i["a"].options.methods.genData.call(this),attrs:{role:"listbox"}})}}})},"1be4":function(t,e,n){var i=n("d066");t.exports=i("document","documentElement")},"1c7e":function(t,e,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(c){}return n}},"1c87":function(t,e,n){"use strict";var i=n("2b0e"),r=n("5607"),s=n("80d2");e["a"]=i["a"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick(()=>{!Object(s["n"])(this.$refs.link,n)===this.isActive&&this.toggle()})},toggle(){this.isActive=!this.isActive}}})},"1cdc":function(t,e,n){var i=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(t,e,n){var i=n("da84"),r=i.TypeError;t.exports=function(t){if(void 0==t)throw r("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");function i(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(l){return void n(l)}a.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var o=t.apply(e,n);function a(t){i(o,r,s,a,c,"next",t)}function c(t){i(o,r,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return W})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return R})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return q})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return B})),n.d(e,"p",(function(){return X})),n.d(e,"q",(function(){return H})),n.d(e,"r",(function(){return Q})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return N})),n.d(e,"u",(function(){return b})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return k})),n.d(e,"y",(function(){return y})),n.d(e,"z",(function(){return C})),n.d(e,"A",(function(){return _})),n.d(e,"B",(function(){return L})),n.d(e,"C",(function(){return $})),n.d(e,"D",(function(){return F})),n.d(e,"E",(function(){return U})),n.d(e,"F",(function(){return z})),n.d(e,"G",(function(){return D})),n.d(e,"H",(function(){return Z})),n.d(e,"I",(function(){return J})),n.d(e,"J",(function(){return j})),n.d(e,"K",(function(){return S}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},a=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const l=r<t.length,u=l?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},l=function(t){const e=o(t);return c.encodeByteArray(e,!0)},u=function(t){return l(t).replace(/\./g,"")},h=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&f(n)&&(t[n]=p(t[n],e[n]));return t}function f(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function b(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const t=g();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function k(){return"object"===typeof indexedDB}function S(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function O(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=I,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?E(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new x(i,o,n);return a}}function E(t,e){return t.replace(A,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return JSON.parse(t)}function j(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=$(h(s[0])||""),n=$(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:e,claims:n,data:i,signature:r}},L=function(t){const e=P(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},N=function(t){const e=P(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function D(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function B(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(V(n)&&V(s)){if(!B(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function V(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function z(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function H(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<e){if(0===s)while(i<=n)this.compress_(t,i),i+=this.blockSize;if("string"===typeof t){while(i<e)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<e)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[i]>>e&255,++n;return t}}function q(t,e){const n=new K(t,e);return n.subscribe.bind(n)}class K{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=G(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Y),void 0===i.error&&(i.error=Y),void 0===i.complete&&(i.complete=Y);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Y(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const e=s-55296;i++,r(i<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(i)-56320;s=65536+(e<<10)+n}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},Z=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"20f6":function(t,e,n){},"21be":function(t,e,n){"use strict";var i=n("2b0e"),r=n("80d2");e["a"]=i["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(r["r"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,Object(r["r"])(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let s=0;s<i.length;s++)t.includes(i[s])||n.push(Object(r["r"])(i[s]));return Math.max(...n)}}})},2266:function(t,e,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),l=n("07fa"),u=n("3a9b"),h=n("9a1f"),d=n("35a1"),p=n("2a62"),f=i.TypeError,m=function(t,e){this.stopped=t,this.result=e},v=m.prototype;t.exports=function(t,e,n){var i,g,y,b,_,w,C,k=n&&n.that,S=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),x=r(e,k),T=function(t){return i&&p(i,"normal",t),new m(!0,t)},E=function(t){return S?(o(t),I?x(t[0],t[1],T):x(t[0],t[1])):I?x(t,T):x(t)};if(O)i=t;else{if(g=d(t),!g)throw f(a(t)+" is not iterable");if(c(g)){for(y=0,b=l(t);b>y;y++)if(_=E(t[y]),_&&u(v,_))return _;return new m(!1)}i=h(t,g)}w=i.next;while(!(C=s(w,i)).done){try{_=E(C.value)}catch(A){p(i,"throw",A)}if("object"==typeof _&&_&&u(v,_))return _}return new m(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var i=n("1fd5");class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23a7":function(t,e,n){"use strict";n("5803");var i=n("2677"),r=n("cc20"),s=n("80d2"),o=n("d9bd"),a=n("d9f7");e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(s["B"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(s["s"])(e,1024===this.base))},internalArrayValue(){return Object(s["B"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:n=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${Object(s["s"])(n,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(o["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(s["j"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(r["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(a["b"])(t.data.style,{display:"none"})),t},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,n)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[n],file:e,index:n}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=i["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},"23cb":function(t,e,n){var i=n("5926"),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},"23e7":function(t,e,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var n,u,h,d,p,f,m=t.target,v=t.global,g=t.stat;if(u=v?i:g?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in e){if(p=e[h],t.noTargetGet?(f=r(u,h),d=f&&f.value):d=u[h],n=l(v?h:m+(g?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&s(p,"sham",!0),o(u,h,p,t)}}},"241c":function(t,e,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},"24b2":function(t,e,n){"use strict";var i=n("80d2"),r=n("2b0e");e["a"]=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(i["g"])(this.height),n=Object(i["g"])(this.minHeight),r=Object(i["g"])(this.minWidth),s=Object(i["g"])(this.maxHeight),o=Object(i["g"])(this.maxWidth),a=Object(i["g"])(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},"24e2":function(t,e,n){"use strict";var i=n("e0c7");e["a"]=i["a"]},"25a8":function(t,e,n){},"260b":function(t,e,n){"use strict";var i=n("589b");n.d(e,"a",(function(){return i["e"]}));var r="firebase",s="9.6.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(i["f"])(r,s,"app")},2626:function(t,e,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=i(t),n=r.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2677:function(t,e,n){"use strict";var i=n("8654");e["a"]=i["a"]},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return i}))},"297c":function(t,e,n){"use strict";var i=n("2b0e"),r=(n("6ece"),n("0789")),s=n("90a2"),o=n("a9ad"),a=n("fe6c"),c=n("a452"),l=n("7560"),u=n("80d2"),h=n("58df");const d=Object(h["a"])(o["a"],Object(a["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]);var p=d.extend({name:"v-progress-linear",directives:{intersect:s["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:Object(u["g"])(this.normalizedValue,"%"),width:Object(u["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r["c"]:r["e"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(u["p"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2a62":function(t,e,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;r(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=i(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return r(o),n}},"2a7f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("71d9"),r=n("80d2");const s=Object(r["i"])("v-toolbar__title"),o=Object(r["i"])("v-toolbar__items");i["a"]},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function f(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var g=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var C=/-(\w)/g,k=w((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),S=w((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,I=w((function(t){return t.replace(O,"-$1").toLowerCase()}));function x(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function T(t,e){return t.bind(e)}var E=Function.prototype.bind?T:x;function A(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function $(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&$(e,t[n]);return e}function P(t,e,n){}var L=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return R(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return R(t[n],e[n])}))}catch(l){return!1}}function D(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:P,parsePlatformTagName:N,mustUseProp:L,async:!0,_lifecycleHooks:V},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var q=new RegExp("[^"+z.source+".$_\\d]");function K(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,Y="__proto__"in{},X="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=J&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),tt=Q&&/msie|trident/.test(Q),et=Q&&Q.indexOf("msie 9.0")>0,nt=Q&&Q.indexOf("edge/")>0,it=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),rt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(So){}var ct=function(){return void 0===G&&(G=!X&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},lt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ut(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&ut(Symbol)&&"undefined"!==typeof Reflect&&ut(Reflect.ownKeys);ht="undefined"!==typeof Set&&ut(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=P,ft=0,mt=function(){this.id=ft++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var vt=[];function gt(t){vt.push(t),mt.target=t}function yt(){vt.pop(),mt.target=vt[vt.length-1]}var bt=function(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,_t);var wt=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Ct(t){return new bt(void 0,void 0,void 0,String(t))}function kt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=Array.prototype,Ot=Object.create(St),It=["push","pop","shift","unshift","splice","sort","reverse"];It.forEach((function(t){var e=St[t];W(Ot,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var xt=Object.getOwnPropertyNames(Ot),Tt=!0;function Et(t){Tt=t}var At=function(t){this.value=t,this.dep=new mt,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(Y?$t(t,Ot):jt(t,Ot,xt),this.observeArray(t)):this.walk(t)};function $t(t,e){t.__proto__=e}function jt(t,e,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];W(t,s,e[s])}}function Pt(t,e){var n;if(c(t)&&!(t instanceof bt))return _(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Tt&&!ct()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Lt(t,e,n,i,r){var s=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var l=!r&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Dt(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!c||(c?c.call(t,e):n=e,l=!r&&Pt(e),s.notify())}})}}function Nt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Lt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Rt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Dt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Dt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Lt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var Mt=U.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,r,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],_(t,n)?i!==r&&u(i)&&u(r)&&Ft(i,r):Nt(t,n,r));return t}function Bt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Ft(i,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ut(n):n}function Ut(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function zt(t,e,n,i){var r=Object.create(t||null);return e?$(r,e):r}Mt.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},V.forEach((function(t){Mt[t]=Vt})),B.forEach((function(t){Mt[t+"s"]=zt})),Mt.watch=function(t,e,n,i){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var s in $(r,t),e){var o=r[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},Mt.props=Mt.methods=Mt.inject=Mt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return $(r,t),e&&$(r,e),r},Mt.provide=Bt;var Ht=function(t,e){return void 0===e?t:e};function Wt(t,e){var n=t.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=k(r),o[s]={type:null})}else if(u(n))for(var a in n)r=n[a],s=k(a),o[s]=u(r)?r:{type:r};else 0;t.props=o}}function qt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var s in n){var o=n[s];i[s]=u(o)?$({from:s},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Wt(e,n),qt(e,n),Kt(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Gt(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)_(t,s)||a(s);function a(i){var r=Mt[i]||Ht;o[i]=r(t[i],e[i],n,i)}return o}function Yt(t,e,n,i){if("string"===typeof n){var r=t[e];if(_(r,n))return r[n];var s=k(n);if(_(r,s))return r[s];var o=S(s);if(_(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Xt(t,e,n,i){var r=e[t],s=!_(n,t),o=n[t],a=ee(Boolean,r.type);if(a>-1)if(s&&!_(r,"default"))o=!1;else if(""===o||o===I(t)){var c=ee(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Jt(i,r,t);var l=Tt;Et(!0),Pt(o),Et(l)}return o}function Jt(t,e,n){if(_(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Qt(e.type)?i.call(t):i}}var Zt=/^\s*function (\w+)/;function Qt(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function te(t,e){return Qt(t)===Qt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){gt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(So){re(So,i,"errorCaptured hook")}}}re(t,e,n)}finally{yt()}}function ie(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(t){return ne(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(So){ne(So,i,r)}return s}function re(t,e,n){if(U.errorHandler)try{return U.errorHandler.call(null,t,e,n)}catch(So){So!==t&&se(So,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!X&&!J||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],le=!1;function ue(){le=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ut(Promise)){var he=Promise.resolve();oe=function(){he.then(ue),it&&setTimeout(P)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!ut(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&ut(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var de=1,pe=new MutationObserver(ue),fe=document.createTextNode(String(de));pe.observe(fe,{characterData:!0}),oe=function(){de=(de+1)%2,fe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(So){ne(So,e,"nextTick")}else n&&n(e)})),le||(le=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ht;function ge(t){ye(t,ve),ve.clear()}function ye(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r){n=t.length;while(n--)ye(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)ye(t[i[n]],e)}}}var be=w((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function _e(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return ie(i,null,arguments,e,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)ie(r[s],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,r,o,a){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=be(c),i(l)||(i(u)?(i(l.fns)&&(l=t[c]=_e(l,a)),s(h.once)&&(l=t[c]=o(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)i(t[c])&&(h=be(c),r(h.name,e[c],h.capture))}function Ce(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(o.fns,c)}i(a)?o=_e([c]):r(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=_e([a,c]),o.merged=!0,t[e]=o}function ke(t,e,n){var s=e.options.props;if(!i(s)){var o={},a=t.attrs,c=t.props;if(r(a)||r(c))for(var l in s){var u=I(l);Se(o,c,l,u,!0)||Se(o,a,l,u,!1)}return o}}function Se(t,e,n,i,s){if(r(e)){if(_(e,n))return t[n]=e[n],s||delete e[n],!0;if(_(e,i))return t[n]=e[i],s||delete e[i],!0}return!1}function Oe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ie(t){return a(t)?[Ct(t)]:Array.isArray(t)?Te(t):void 0}function xe(t){return r(t)&&r(t.text)&&o(t.isComment)}function Te(t,e){var n,o,c,l,u=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(c=u.length-1,l=u[c],Array.isArray(o)?o.length>0&&(o=Te(o,(e||"")+"_"+n),xe(o[0])&&xe(l)&&(u[c]=Ct(l.text+o[0].text),o.shift()),u.push.apply(u,o)):a(o)?xe(l)?u[c]=Ct(l.text+o):""!==o&&u.push(Ct(o)):xe(o)&&xe(l)?u[c]=Ct(l.text+o.text):(s(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function Ee(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=$e(t.$options.inject,t);e&&(Et(!1),Object.keys(e).forEach((function(n){Lt(t,n,e[n])})),Et(!0))}function $e(t,e){if(t){for(var n=Object.create(null),i=dt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function je(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(Pe)&&delete n[l];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Le(t){return t.isComment&&t.asyncFactory}function Ne(t,e,i){var r,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&a===i.$key&&!s&&!i.$hasNormal)return i;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Re(e,c,t[c]))}else r={};for(var l in e)l in r||(r[l]=De(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",o),W(r,"$key",a),W(r,"$hasNormal",s),r}function Re(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ie(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Le(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function De(t,e){return function(){return t[e]}}function Me(t,e){var n,i,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,s=t.length;i<s;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=e(t[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=$($({},i),n)),r=s(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Be(t){return Yt(this.$options,"filters",t,!0)||N}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ue(t,e,n,i,r){var s=U.keyCodes[e]||n;return r&&i&&!U.keyCodes[e]?Ve(r,i):s?Ve(s,t):i?I(i)!==e:void 0===t}function ze(t,e,n,i,r){if(n)if(c(n)){var s;Array.isArray(n)&&(n=j(n));var o=function(o){if("class"===o||"style"===o||g(o))s=t;else{var a=t.attrs&&t.attrs.type;s=i||U.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=k(o),l=I(o);if(!(c in s)&&!(l in s)&&(s[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),qe(i,"__static__"+t,!1)),i}function We(t,e,n){return qe(t,"__once__"+e+(n?"_"+n:""),!0),t}function qe(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ke(t[i],e+"_"+i,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(u(e)){var n=t.on=t.on?$({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function Ye(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var s=t[r];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=We,t._n=m,t._s=f,t._l=Me,t._t=Fe,t._q=R,t._i=D,t._m=He,t._f=Be,t._k=Ue,t._b=ze,t._v=Ct,t._e=wt,t._u=Ye,t._g=Ge,t._d=Xe,t._p=Je}function Qe(t,e,i,r,o){var a,c=this,l=o.options;_(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var u=s(l._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=$e(l.inject,r),this.slots=function(){return c.$slots||Ne(t.scopedSlots,c.$slots=je(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ne(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ne(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var s=pn(a,t,e,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=l._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,i){return pn(a,t,e,n,i,h)}}function tn(t,e,i,s,o){var a=t.options,c={},l=a.props;if(r(l))for(var u in l)c[u]=Xt(u,l,e||n);else r(i.attrs)&&nn(c,i.attrs),r(i.props)&&nn(c,i.props);var h=new Qe(i,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,i,h.parent,a,h);if(Array.isArray(d)){for(var p=Ie(d)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=en(p[m],i,h.parent,a,h);return f}}function en(t,e,n,i,r){var s=kt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[k(n)]=e[n]}Ze(Qe.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var i=t.componentInstance=an(t,$n);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Rn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Bn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):Mn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!i(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=kn(u,l),void 0===t))return Cn(u,e,n,o,a);e=e||{},Ci(t),r(e.model)&&un(t.options,e);var h=ke(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}cn(e);var f=t.options.name||a,m=new bt("vue-component-"+t.cid+(f?"-"+f:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},u);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var i=sn[n],r=e[i],s=rn[i];r===s||r&&r._merged||(e[i]=r?ln(s,r):s)}}function ln(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function un(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[i],a=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var hn=1,dn=2;function pn(t,e,n,i,r,o){return(Array.isArray(n)||a(n))&&(r=i,i=n,n=void 0),s(o)&&(r=dn),fn(t,e,n,i,r)}function fn(t,e,n,i,s){if(r(n)&&r(n.__ob__))return wt();if(r(n)&&r(n.is)&&(e=n.is),!e)return wt();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===dn?i=Ie(i):s===hn&&(i=Oe(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||U.getTagNamespace(e),o=U.isReservedTag(e)?new bt(U.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(c=Yt(t.$options,"components",e))?new bt(e,n,i,void 0,void 0,t):on(c,n,t,i,e)):o=on(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(a)&&mn(o,a),r(n)&&vn(n),o):wt()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];r(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function vn(t){c(t.style)&&ge(t.style),c(t.class)&&ge(t.class)}function gn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=je(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return pn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return pn(t,e,n,i,r,!0)};var s=i&&i.data;Lt(t,"$attrs",s&&s.attrs||n,null,!0),Lt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function _n(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Ne(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{bn=e,t=i.call(e._renderProxy,e.$createElement)}catch(So){ne(So,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=wt()),t.parent=r,t}}function wn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Cn(t,e,n,i,r){var s=wt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function kn(t,e){if(s(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=bn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],a=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=M((function(n){t.resolved=wn(n,e),a?o.length=0:h(!0)})),f=M((function(e){r(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,f);return c(m)&&(p(m)?i(t.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),r(m.error)&&(t.errorComp=wn(m.error,e)),r(m.loading)&&(t.loadingComp=wn(m.loading,e),0===m.delay?t.loading=!0:l=setTimeout((function(){l=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(u=setTimeout((function(){u=null,i(t.resolved)&&f(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||Le(n)))return n}}function On(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&En(t,e)}function In(t,e){yn.$on(t,e)}function xn(t,e){yn.$off(t,e)}function Tn(t,e){var n=yn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function En(t,e,n){yn=t,we(e,n||{},In,xn,Tn,t),yn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?A(n):n;for(var i=A(arguments,1),r='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)ie(n[s],e,i,e,r)}return e}}var $n=null;function jn(t){var e=$n;return $n=t,function(){$n=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ln(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=jn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Bn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Bn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Nn(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=wt),Bn(t,"beforeMount"),i=function(){t._update(t._render(),n)},new ii(t,i,P,{before:function(){t._isMounted&&!t._isDestroyed&&Bn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Bn(t,"mounted")),t}function Rn(t,e,i,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Et(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=t.$options.props;u[p]=Xt(p,f,e,t)}Et(!0),t.$options.propsData=e}i=i||n;var m=t.$options._parentListeners;t.$options._parentListeners=i,En(t,i,m),l&&(t.$slots=je(s,r.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Mn(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Bn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Bn(t,"deactivated")}}function Bn(t,e){gt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,s=n.length;r<s;r++)ie(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Vn=[],Un=[],zn={},Hn=!1,Wn=!1,qn=0;function Kn(){qn=Vn.length=Un.length=0,zn={},Hn=Wn=!1}var Gn=0,Yn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Jn(){var t,e;for(Gn=Yn(),Wn=!0,Vn.sort((function(t,e){return t.id-e.id})),qn=0;qn<Vn.length;qn++)t=Vn[qn],t.before&&t.before(),e=t.id,zn[e]=null,t.run();var n=Un.slice(),i=Vn.slice();Kn(),ti(n),Zn(i),lt&&U.devtools&&lt.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Bn(i,"updated")}}function Qn(t){t._inactive=!1,Un.push(t)}function ti(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Mn(t[e],!0)}function ei(t){var e=t.id;if(null==zn[e]){if(zn[e]=!0,Wn){var n=Vn.length-1;while(n>qn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);Hn||(Hn=!0,me(Jn))}}var ni=0,ii=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ni,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};ii.prototype.get=function(){var t;gt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(So){if(!this.user)throw So;ne(So,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ge(t),yt(),this.cleanupDeps()}return t},ii.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ii.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ii.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ei(this)},ii.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ii.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ii.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ii.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:P,set:P};function si(t,e,n){ri.get=function(){return this[e][n]},ri.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ri)}function oi(t){t._watchers=[];var e=t.$options;e.props&&ai(t,e.props),e.methods&&mi(t,e.methods),e.data?ci(t):Pt(t._data={},!0),e.computed&&hi(t,e.computed),e.watch&&e.watch!==st&&vi(t,e.watch)}function ai(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],s=!t.$parent;s||Et(!1);var o=function(s){r.push(s);var o=Xt(s,e,n,t);Lt(i,s,o),s in t||si(t,"_props",s)};for(var a in e)o(a);Et(!0)}function ci(t){var e=t.$options.data;e=t._data="function"===typeof e?li(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&_(i,s)||H(s)||si(t,"_data",s)}Pt(e,!0)}function li(t,e){gt();try{return t.call(e,e)}catch(So){return ne(So,e,"data()"),{}}finally{yt()}}var ui={lazy:!0};function hi(t,e){var n=t._computedWatchers=Object.create(null),i=ct();for(var r in e){var s=e[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ii(t,o||P,P,ui)),r in t||di(t,r,s)}}function di(t,e,n){var i=!ct();"function"===typeof n?(ri.get=i?pi(e):fi(n),ri.set=P):(ri.get=n.get?i&&!1!==n.cache?pi(e):fi(n.get):P,ri.set=n.set||P),Object.defineProperty(t,e,ri)}function pi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function fi(t){return function(){return t.call(this,this)}}function mi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:E(e[n],t)}function vi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)gi(t,n,i[r]);else gi(t,n,i)}}function gi(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function yi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Nt,t.prototype.$delete=Rt,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return gi(i,t,e,n);n=n||{},n.user=!0;var r=new ii(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';gt(),ie(e,i,[r.value],i,s),yt()}return function(){r.teardown()}}}var bi=0;function _i(t){t.prototype._init=function(t){var e=this;e._uid=bi++,e._isVue=!0,t&&t._isComponent?wi(e,t):e.$options=Gt(Ci(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),On(e),gn(e),Bn(e,"beforeCreate"),Ae(e),oi(e),Ee(e),Bn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function wi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Ci(t){var e=t.options;if(t.super){var n=Ci(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=ki(t);r&&$(t.extendOptions,r),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ki(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Si(t){this._init(t)}function Oi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ii(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Gt(n.options,t),o["super"]=n,o.options.props&&Ti(o),o.options.computed&&Ei(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,B.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=$({},o.options),r[i]=o,o}}function Ti(t){var e=t.options.props;for(var n in e)si(t.prototype,"_props",n)}function Ei(t){var e=t.options.computed;for(var n in e)di(t.prototype,n,e[n])}function Ai(t){B.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function $i(t){return t&&(t.Ctor.options.name||t.tag)}function ji(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Pi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Li(n,s,i,r)}}}function Li(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}_i(Si),yi(Si),An(Si),Ln(Si),_n(Si);var Ni=[String,RegExp,Array],Ri={name:"keep-alive",abstract:!0,props:{include:Ni,exclude:Ni,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:$i(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Li(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Li(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Pi(t,(function(t){return ji(e,t)}))})),this.$watch("exclude",(function(e){Pi(t,(function(t){return!ji(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var i=$i(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!ji(s,i))||o&&i&&ji(o,i))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,y(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Di={KeepAlive:Ri};function Mi(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:$,mergeOptions:Gt,defineReactive:Lt},t.set=Nt,t.delete=Rt,t.nextTick=me,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),B.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,$(t.options.components,Di),Oi(t),Ii(t),xi(t),Ai(t)}Mi(Si),Object.defineProperty(Si.prototype,"$isServer",{get:ct}),Object.defineProperty(Si.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Si,"FunctionalRenderContext",{value:Qe}),Si.version="2.6.14";var Fi=v("style,class"),Bi=v("input,textarea,option,select,progress"),Vi=function(t,e,n){return"value"===n&&Bi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Ui=v("contenteditable,draggable,spellcheck"),zi=v("events,caret,typing,plaintext-only"),Hi=function(t,e){return Yi(e)||"false"===e?"false":"contenteditable"===t&&zi(e)?e:"true"},Wi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),qi="http://www.w3.org/1999/xlink",Ki=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Gi=function(t){return Ki(t)?t.slice(6,t.length):""},Yi=function(t){return null==t||!1===t};function Xi(t){var e=t.data,n=t,i=t;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Ji(i.data,e));while(r(n=n.parent))n&&n.data&&(e=Ji(e,n.data));return Zi(e.staticClass,e.class)}function Ji(t,e){return{staticClass:Qi(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Zi(t,e){return r(t)||r(e)?Qi(t,tr(e)):""}function Qi(t,e){return t?e?t+" "+e:t:e||""}function tr(t){return Array.isArray(t)?er(t):c(t)?nr(t):"string"===typeof t?t:""}function er(t){for(var e,n="",i=0,s=t.length;i<s;i++)r(e=tr(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function nr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),sr=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(t){return rr(t)||sr(t)};function ar(t){return sr(t)?"svg":"math"===t?"math":void 0}var cr=Object.create(null);function lr(t){if(!X)return!0;if(or(t))return!1;if(t=t.toLowerCase(),null!=cr[t])return cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cr[t]=/HTMLUnknownElement/.test(e.toString())}var ur=v("text,number,password,search,email,tel,url");function hr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function dr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pr(t,e){return document.createElementNS(ir[t],e)}function fr(t){return document.createTextNode(t)}function mr(t){return document.createComment(t)}function vr(t,e,n){t.insertBefore(e,n)}function gr(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function br(t){return t.parentNode}function _r(t){return t.nextSibling}function wr(t){return t.tagName}function Cr(t,e){t.textContent=e}function kr(t,e){t.setAttribute(e,"")}var Sr=Object.freeze({createElement:dr,createElementNS:pr,createTextNode:fr,createComment:mr,insertBefore:vr,removeChild:gr,appendChild:yr,parentNode:br,nextSibling:_r,tagName:wr,setTextContent:Cr,setStyleScope:kr}),Or={create:function(t,e){Ir(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ir(t,!0),Ir(e))},destroy:function(t){Ir(t,!0)}};function Ir(t,e){var n=t.data.ref;if(r(n)){var i=t.context,s=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var xr=new bt("",{},[]),Tr=["create","activate","update","remove","destroy"];function Er(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&Ar(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ar(t,e){if("input"!==t.tag)return!0;var n,i=r(n=t.data)&&r(n=n.attrs)&&n.type,s=r(n=e.data)&&r(n=n.attrs)&&n.type;return i===s||ur(i)&&ur(s)}function $r(t,e,n){var i,s,o={};for(i=e;i<=n;++i)s=t[i].key,r(s)&&(o[s]=i);return o}function jr(t){var e,n,o={},c=t.modules,l=t.nodeOps;for(e=0;e<Tr.length;++e)for(o[Tr[e]]=[],n=0;n<c.length;++n)r(c[n][Tr[e]])&&o[Tr[e]].push(c[n][Tr[e]]);function u(t){return new bt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);r(e)&&l.removeChild(e,t)}function p(t,e,n,i,o,a,c){if(r(t.elm)&&r(a)&&(t=a[c]=kt(t)),t.isRootInsert=!o,!f(t,e,n,i)){var u=t.data,h=t.children,d=t.tag;r(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),C(t),b(t,h,e),r(u)&&w(t,e),y(n,t.elm,i)):s(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,i)):(t.elm=l.createTextNode(t.text),y(n,t.elm,i))}}function f(t,e,n,i){var o=t.data;if(r(o)){var a=r(t.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(t,!1),r(t.componentInstance))return m(t,e),y(n,t.elm,i),s(a)&&g(t,e,n,i),!0}}function m(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(w(t,e),C(t)):(Ir(t),e.push(t))}function g(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,r(s=a.data)&&r(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](xr,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){r(t)&&(r(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)p(e[i],n,t.elm,null,!0,e,i)}else a(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return r(t.tag)}function w(t,n){for(var i=0;i<o.create.length;++i)o.create[i](xr,t);e=t.data.hook,r(e)&&(r(e.create)&&e.create(xr,t),r(e.insert)&&n.push(t))}function C(t){var e;if(r(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)r(e=n.context)&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}r(e=$n)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function k(t,e,n,i,r,s){for(;i<=r;++i)p(n[i],s,t,e,!1,n,i)}function S(t){var e,n,i=t.data;if(r(i))for(r(e=i.hook)&&r(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function O(t,e,n){for(;e<=n;++e){var i=t[e];r(i)&&(r(i.tag)?(I(i),S(i)):d(i.elm))}}function I(t,e){if(r(e)||r(t.data)){var n,i=o.remove.length+1;for(r(e)?e.listeners+=i:e=h(t.elm,i),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&I(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else d(t.elm)}function x(t,e,n,s,o){var a,c,u,h,d=0,f=0,m=e.length-1,v=e[0],g=e[m],y=n.length-1,b=n[0],_=n[y],w=!o;while(d<=m&&f<=y)i(v)?v=e[++d]:i(g)?g=e[--m]:Er(v,b)?(E(v,b,s,n,f),v=e[++d],b=n[++f]):Er(g,_)?(E(g,_,s,n,y),g=e[--m],_=n[--y]):Er(v,_)?(E(v,_,s,n,y),w&&l.insertBefore(t,v.elm,l.nextSibling(g.elm)),v=e[++d],_=n[--y]):Er(g,b)?(E(g,b,s,n,f),w&&l.insertBefore(t,g.elm,v.elm),g=e[--m],b=n[++f]):(i(a)&&(a=$r(e,d,m)),c=r(b.key)?a[b.key]:T(b,e,d,m),i(c)?p(b,s,t,v.elm,!1,n,f):(u=e[c],Er(u,b)?(E(u,b,s,n,f),e[c]=void 0,w&&l.insertBefore(t,u.elm,v.elm)):p(b,s,t,v.elm,!1,n,f)),b=n[++f]);d>m?(h=i(n[y+1])?null:n[y+1].elm,k(t,h,n,f,y,s)):f>y&&O(e,d,m)}function T(t,e,n,i){for(var s=n;s<i;s++){var o=e[s];if(r(o)&&Er(t,o))return s}}function E(t,e,n,a,c,u){if(t!==e){r(e.elm)&&r(a)&&(e=a[c]=kt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?j(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;r(p)&&r(d=p.hook)&&r(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(r(p)&&_(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);r(d=p.hook)&&r(d=d.update)&&d(t,e)}i(e.text)?r(f)&&r(m)?f!==m&&x(h,f,m,n,u):r(m)?(r(t.text)&&l.setTextContent(h,""),k(h,null,m,0,m.length-1,n)):r(f)?O(f,0,f.length-1):r(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),r(p)&&r(d=p.hook)&&r(d=d.postpatch)&&d(t,e)}}}function A(t,e,n){if(s(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var $=v("attrs,class,staticClass,staticStyle,key");function j(t,e,n,i){var o,a=e.tag,c=e.data,l=e.children;if(i=i||c&&c.pre,e.elm=t,s(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(o=c.hook)&&r(o=o.init)&&o(e,!0),r(o=e.componentInstance)))return m(e,n),!0;if(r(a)){if(r(l))if(t.hasChildNodes())if(r(o=c)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!j(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(e,l,n);if(r(c)){var p=!1;for(var f in c)if(!$(f)){p=!0,w(e,n);break}!p&&c["class"]&&ge(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,p(e,h);else{var d=r(t.nodeType);if(!d&&Er(t,e))E(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),s(n)&&j(t,e,h))return A(e,h,!0),t;t=u(t)}var f=t.elm,m=l.parentNode(f);if(p(e,h,f._leaveCb?null:m,l.nextSibling(f)),r(e.parent)){var v=e.parent,g=_(e);while(v){for(var y=0;y<o.destroy.length;++y)o.destroy[y](v);if(v.elm=e.elm,g){for(var b=0;b<o.create.length;++b)o.create[b](xr,v);var w=v.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Ir(v);v=v.parent}}r(m)?O([t],0,0):r(t.tag)&&S(t)}}return A(e,h,c),e.elm}r(t)&&S(t)}}var Pr={create:Lr,update:Lr,destroy:function(t){Lr(t,xr)}};function Lr(t,e){(t.data.directives||e.data.directives)&&Nr(t,e)}function Nr(t,e){var n,i,r,s=t===xr,o=e===xr,a=Dr(t.data.directives,t.context),c=Dr(e.data.directives,e.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Fr(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(Fr(r,"bind",e,t),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)Fr(l[n],"inserted",e,t)};s?Ce(e,"insert",h):h()}if(u.length&&Ce(e,"postpatch",(function(){for(var n=0;n<u.length;n++)Fr(u[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Fr(a[n],"unbind",t,t,o)}var Rr=Object.create(null);function Dr(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Rr),r[Mr(i)]=i,i.def=Yt(e.$options,"directives",i.name,!0);return r}function Mr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fr(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(So){ne(So,n.context,"directive "+t.name+" "+e+" hook")}}var Br=[Or,Pr];function Vr(t,e){var n=e.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var s,o,a,c=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(s in r(u.__ob__)&&(u=e.data.attrs=$({},u)),u)o=u[s],a=l[s],a!==o&&Ur(c,s,o,e.data.pre);for(s in(tt||nt)&&u.value!==l.value&&Ur(c,"value",u.value),l)i(u[s])&&(Ki(s)?c.removeAttributeNS(qi,Gi(s)):Ui(s)||c.removeAttribute(s))}}function Ur(t,e,n,i){i||t.tagName.indexOf("-")>-1?zr(t,e,n):Wi(e)?Yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Ui(e)?t.setAttribute(e,Hi(e,n)):Ki(e)?Yi(n)?t.removeAttributeNS(qi,Gi(e)):t.setAttributeNS(qi,e,n):zr(t,e,n)}function zr(t,e,n){if(Yi(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var Hr={create:Vr,update:Vr};function Wr(t,e){var n=e.elm,s=e.data,o=t.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Xi(e),c=n._transitionClasses;r(c)&&(a=Qi(a,tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var qr,Kr={create:Wr,update:Wr},Gr="__r",Yr="__c";function Xr(t){if(r(t[Gr])){var e=tt?"change":"input";t[e]=[].concat(t[Gr],t[e]||[]),delete t[Gr]}r(t[Yr])&&(t.change=[].concat(t[Yr],t.change||[]),delete t[Yr])}function Jr(t,e,n){var i=qr;return function r(){var s=e.apply(null,arguments);null!==s&&ts(t,r,n,i)}}var Zr=ae&&!(rt&&Number(rt[1])<=53);function Qr(t,e,n,i){if(Zr){var r=Gn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}qr.addEventListener(t,e,ot?{capture:n,passive:i}:n)}function ts(t,e,n,i){(i||qr).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};qr=e.elm,Xr(n),we(n,r,Qr,ts,Jr,e.context),qr=void 0}}var ns,is={create:es,update:es};function rs(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in r(c.__ob__)&&(c=e.data.domProps=$({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var l=i(s)?"":String(s);ss(o,l)&&(o.value=l)}else if("innerHTML"===n&&sr(o.tagName)&&i(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var u=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(s!==a[n])try{o[n]=s}catch(So){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(So){}return n&&t.value!==e}function as(t,e){var n=t.value,i=t._vModifiers;if(r(i)){if(i.number)return m(n)!==m(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:rs,update:rs},ls=w((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function us(t){var e=hs(t.style);return t.staticStyle?$(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?j(t):"string"===typeof t?ls(t):t}function ds(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=us(r.data))&&$(i,n)}(n=us(t.data))&&$(i,n);var s=t;while(s=s.parent)s.data&&(n=us(s.data))&&$(i,n);return i}var ps,fs=/^--/,ms=/\s*!important$/,vs=function(t,e,n){if(fs.test(e))t.style.setProperty(e,n);else if(ms.test(n))t.style.setProperty(I(e),n.replace(ms,""),"important");else{var i=ys(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},gs=["Webkit","Moz","ms"],ys=w((function(t){if(ps=ps||document.createElement("div").style,t=k(t),"filter"!==t&&t in ps)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<gs.length;n++){var i=gs[n]+e;if(i in ps)return i}}));function bs(t,e){var n=e.data,s=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(s.staticStyle)&&i(s.style))){var o,a,c=e.elm,l=s.staticStyle,u=s.normalizedStyle||s.style||{},h=l||u,d=hs(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?$({},d):d;var p=ds(e,!0);for(a in h)i(p[a])&&vs(c,a,"");for(a in p)o=p[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var _s={create:bs,update:bs},ws=/\s+/;function Cs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ws).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ks(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(ws).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ss(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&$(e,Os(t.name||"v")),$(e,t),e}return"string"===typeof t?Os(t):void 0}}var Os=w((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Is=X&&!et,xs="transition",Ts="animation",Es="transition",As="transitionend",$s="animation",js="animationend";Is&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Es="WebkitTransition",As="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&($s="WebkitAnimation",js="webkitAnimationEnd"));var Ps=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ls(t){Ps((function(){Ps(t)}))}function Ns(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Cs(t,e))}function Rs(t,e){t._transitionClasses&&y(t._transitionClasses,e),ks(t,e)}function Ds(t,e,n){var i=Fs(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===xs?As:js,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),t.addEventListener(a,u)}var Ms=/\b(transform|all)(,|$)/;function Fs(t,e){var n,i=window.getComputedStyle(t),r=(i[Es+"Delay"]||"").split(", "),s=(i[Es+"Duration"]||"").split(", "),o=Bs(r,s),a=(i[$s+"Delay"]||"").split(", "),c=(i[$s+"Duration"]||"").split(", "),l=Bs(a,c),u=0,h=0;e===xs?o>0&&(n=xs,u=o,h=s.length):e===Ts?l>0&&(n=Ts,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?xs:Ts:null,h=n?n===xs?s.length:c.length:0);var d=n===xs&&Ms.test(i[Es+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Bs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Vs(e)+Vs(t[n])})))}function Vs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Us(t,e){var n=t.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Ss(t.data.transition);if(!i(s)&&!r(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,l=s.enterClass,u=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,p=s.appearToClass,f=s.appearActiveClass,v=s.beforeEnter,g=s.enter,y=s.afterEnter,b=s.enterCancelled,_=s.beforeAppear,w=s.appear,C=s.afterAppear,k=s.appearCancelled,S=s.duration,O=$n,I=$n.$vnode;while(I&&I.parent)O=I.context,I=I.parent;var x=!O._isMounted||!t.isRootInsert;if(!x||w||""===w){var T=x&&d?d:l,E=x&&f?f:h,A=x&&p?p:u,$=x&&_||v,j=x&&"function"===typeof w?w:g,P=x&&C||y,L=x&&k||b,N=m(c(S)?S.enter:S);0;var R=!1!==o&&!et,D=Ws(j),F=n._enterCb=M((function(){R&&(Rs(n,A),Rs(n,E)),F.cancelled?(R&&Rs(n,T),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||Ce(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),j&&j(n,F)})),$&&$(n),R&&(Ns(n,T),Ns(n,E),Ls((function(){Rs(n,T),F.cancelled||(Ns(n,A),D||(Hs(N)?setTimeout(F,N):Ds(n,a,F)))}))),t.data.show&&(e&&e(),j&&j(n,F)),R||D||F()}}}function zs(t,e){var n=t.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Ss(t.data.transition);if(i(s)||1!==n.nodeType)return e();if(!r(n._leaveCb)){var o=s.css,a=s.type,l=s.leaveClass,u=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,p=s.leave,f=s.afterLeave,v=s.leaveCancelled,g=s.delayLeave,y=s.duration,b=!1!==o&&!et,_=Ws(p),w=m(c(y)?y.leave:y);0;var C=n._leaveCb=M((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Rs(n,u),Rs(n,h)),C.cancelled?(b&&Rs(n,l),v&&v(n)):(e(),f&&f(n)),n._leaveCb=null}));g?g(k):k()}function k(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ns(n,l),Ns(n,h),Ls((function(){Rs(n,l),C.cancelled||(Ns(n,u),_||(Hs(w)?setTimeout(C,w):Ds(n,a,C)))}))),p&&p(n,C),b||_||C())}}function Hs(t){return"number"===typeof t&&!isNaN(t)}function Ws(t){if(i(t))return!1;var e=t.fns;return r(e)?Ws(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function qs(t,e){!0!==e.data.show&&Us(e)}var Ks=X?{create:qs,activate:qs,remove:function(t,e){!0!==t.data.show?zs(t,e):e()}}:{},Gs=[Hr,Kr,is,cs,_s,Ks],Ys=Gs.concat(Br),Xs=jr({nodeOps:Sr,modules:Ys});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ro(t,"input")}));var Js={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Ce(n,"postpatch",(function(){Js.componentUpdated(t,e,n)})):Zs(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||ur(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",io),t.addEventListener("change",io),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zs(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,eo);if(r.some((function(t,e){return!R(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,r)})):e.value!==e.oldValue&&to(e.value,r);s&&ro(t,"change")}}}};function Zs(t,e,n){Qs(t,e,n),(tt||nt)&&setTimeout((function(){Qs(t,e,n)}),0)}function Qs(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=D(i,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(R(eo(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!R(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function io(t){t.target.composing&&(t.target.composing=!1,ro(t.target,"input"))}function ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var i=e.value;n=so(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,Us(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?Us(n,(function(){t.style.display=t.__vOriginalDisplay})):zs(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},ao={model:Js,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(Sn(e.children)):t}function uo(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var s in r)e[k(s)]=r[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function fo(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Le(t)},vo=function(t){return"show"===t.name},go={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var i=this.mode;0;var r=n[0];if(po(this.$vnode))return r;var s=lo(r);if(!s)return r;if(this._leaving)return ho(t,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=uo(this),l=this._vnode,u=lo(l);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),u&&u.data&&!fo(s,u)&&!Le(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=$({},c);if("out-in"===i)return this._leaving=!0,Ce(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,r);if("in-out"===i){if(Le(s))return l;var d,p=function(){d()};Ce(c,"afterEnter",p),Ce(c,"enterCancelled",p),Ce(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=$({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=jn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=uo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var l=[],u=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=t(e,null,l),this.removed=u}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_o),t.forEach(wo),t.forEach(Co),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;Ns(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(As,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(As,t),n._moveCb=null,Rs(n,e))})}})))},methods:{hasMove:function(t,e){if(!Is)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){ks(n,t)})),Cs(n,e),n.style.display="none",this.$el.appendChild(n);var i=Fs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function _o(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function wo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Co(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var ko={Transition:go,TransitionGroup:bo};Si.config.mustUseProp=Vi,Si.config.isReservedTag=or,Si.config.isReservedAttr=Fi,Si.config.getTagNamespace=ar,Si.config.isUnknownElement=lr,$(Si.options.directives,ao),$(Si.options.components,ko),Si.prototype.__patch__=X?Xs:P,Si.prototype.$mount=function(t,e){return t=t&&X?hr(t):void 0,Nn(this,t,e)},X&&setTimeout((function(){U.devtools&&lt&&lt.emit("init",Si)}),0),e["a"]=Si}).call(this,n("c8ba"))},"2ba4":function(t,e,n){var i=n("40d5"),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},"2bfd":function(t,e,n){},"2cf4":function(t,e,n){var i,r,s,o,a=n("da84"),c=n("2ba4"),l=n("0366"),u=n("1626"),h=n("1a2d"),d=n("d039"),p=n("1be4"),f=n("f36a"),m=n("cc12"),v=n("d6d6"),g=n("1cdc"),y=n("605d"),b=a.setImmediate,_=a.clearImmediate,w=a.process,C=a.Dispatch,k=a.Function,S=a.MessageChannel,O=a.String,I=0,x={},T="onreadystatechange";try{i=a.location}catch(P){}var E=function(t){if(h(x,t)){var e=x[t];delete x[t],e()}},A=function(t){return function(){E(t)}},$=function(t){E(t.data)},j=function(t){a.postMessage(O(t),i.protocol+"//"+i.host)};b&&_||(b=function(t){v(arguments.length,1);var e=u(t)?t:k(t),n=f(arguments,1);return x[++I]=function(){c(e,void 0,n)},r(I),I},_=function(t){delete x[t]},y?r=function(t){w.nextTick(A(t))}:C&&C.now?r=function(t){C.now(A(t))}:S&&!g?(s=new S,o=s.port2,s.port1.onmessage=$,r=l(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(j)?(r=j,a.addEventListener("message",$,!1)):r=T in m("script")?function(t){p.appendChild(m("script"))[T]=function(){p.removeChild(this),E(t)}}:function(t){setTimeout(A(t),0)}),t.exports={set:b,clear:_}},"2d00":function(t,e,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},r=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){r.emit("vuex:action",t,e)}),{prepend:!0}))}function o(t,e){return t.filter(e)[0]}function a(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=o(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=a(t[n],e)})),i}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function h(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var f=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;m(t.concat(i),e.getChild(i),n.modules[i])}}f.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},f.prototype.update=function(t){m([],this.root,t)},f.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new d(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},f.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var g=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&$(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var l=this._modules.root.state;C(this,l,[],this._modules.root),w(this,l),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:v.config.devtools;u&&s(this)},y={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};c(r,(function(e,n){s[n]=h(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&T(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function C(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=E(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,i.state)}))}var l=i.context=k(t,o,n);i.forEachMutation((function(e,n){var i=o+n;O(t,i,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;I(t,i,r,l)})),i.forEachGetter((function(e,n){var i=o+n;x(t,i,e,l)})),i.forEachChild((function(i,s){C(t,e,n.concat(s),i,r)}))}function k(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return E(t.state,n)}}}),r}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function O(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function I(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return u(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function x(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function T(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function E(t,e){return e.reduce((function(t,e){return t[e]}),t)}function A(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function $(t){v&&t===v||(v=t,n(v))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},g.prototype.commit=function(t,e,n){var i=this,r=A(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},g.prototype.dispatch=function(t,e){var n=this,i=A(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(l){0}e(t)}))}))}},g.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},g.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},g.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},g.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},g.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},g.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=E(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},g.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},g.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},g.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(g.prototype,y);var j=F((function(t,e){var n={};return D(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=B(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),P=F((function(t,e){var n={};return D(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=B(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),L=F((function(t,e){var n={};return D(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||B(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),N=F((function(t,e){var n={};return D(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=B(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),R=function(t){return{mapState:j.bind(null,t),mapGetters:L.bind(null,t),mapMutations:P.bind(null,t),mapActions:N.bind(null,t)}};function D(t){return M(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function M(t){return Array.isArray(t)||l(t)}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function B(t,e,n){var i=t._modulesNamespaceMap[n];return i}function V(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var c=t.logMutations;void 0===c&&(c=!0);var l=t.logActions;void 0===l&&(l=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=a(t.state);"undefined"!==typeof u&&(c&&t.subscribe((function(t,s){var o=a(s);if(n(t,h,o)){var c=H(),l=r(t),d="mutation "+t.type+c;U(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",l),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),z(u)}h=o})),l&&t.subscribeAction((function(t,n){if(s(t,n)){var i=H(),r=o(t),a="action "+t.type+i;U(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),z(u)}})))}}function U(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+q(t.getHours(),2)+":"+q(t.getMinutes(),2)+":"+q(t.getSeconds(),2)+"."+q(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function q(t,e){return W("0",e-t.toString().length)+t}var K={Store:g,install:$,version:"3.6.2",mapState:j,mapMutations:P,mapGetters:L,mapActions:N,createNamespacedHelpers:R,createLogger:V};e["a"]=K}).call(this,n("c8ba"))},"2fa4":function(t,e,n){"use strict";n("20f6");var i=n("80d2");e["a"]=Object(i["i"])("spacer","div","v-spacer")},3206:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var i=n("2b0e"),r=n("d9bd");function s(t,e){return()=>Object(r["c"])(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i["a"].extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function a(t,e=!1){return i["a"].extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},"326d":function(t,e,n){"use strict";var i=n("e449");e["a"]=i["a"]},3408:function(t,e,n){},"342f":function(t,e,n){var i=n("d066");t.exports=i("navigator","userAgent")||""},"34c3":function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,n)}})},"34ef":function(t,e,n){"use strict";var i=n("cc20");e["a"]=i["a"]},"35a1":function(t,e,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return r(t,a)||r(t,"@@iterator")||s[i(t)]}},"368e":function(t,e,n){},"36a7":function(t,e,n){},"37e8":function(t,e,n){var i=n("83ab"),r=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=c(e),l=r.length,u=0;while(l>u)s.f(t,n=r[u++],i[n]);return t}},"38cb":function(t,e,n){"use strict";var i=n("a9ad"),r=n("7560"),s=n("3206"),o=n("80d2"),a=n("d9bd"),c=n("58df");const l=Object(c["a"])(i["a"],Object(s["a"])("form"),r["a"]);e["a"]=l.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(o["j"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&Object(a["b"])(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fe6c"),r=n("58df");function s(t,e=[]){return Object(r["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"3a9b":function(t,e,n){var i=n("e330");t.exports=i({}.isPrototypeOf)},"3ad0":function(t,e,n){},"3bbe":function(t,e,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3c93":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,l=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:r(t),index:0})}),(function(){var t,e=l(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"40d5":function(t,e,n){var i=n("d039");t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"40dc":function(t,e,n){"use strict";n("8b0d");var i=n("71d9");function r(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function s(t,e,n){var i;if(null==(i=t._onScroll)||!i[n.context._uid])return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}const o={inserted:r,unbind:s};var a=o,c=n("3a66"),l=n("d9bd"),u=n("2b0e"),h=u["a"].extend({name:"scrollable",directives:{Scroll:o},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(l["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),d=n("d10f"),p=n("f2e7"),f=n("80d2"),m=n("58df");const v=Object(m["a"])(i["a"],h,d["a"],p["a"],Object(c["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=v.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return i["a"].options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=i["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i["a"].options.computed.isCollapsed.call(this)},isProminent(){return i["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i["a"].options.computed.styles.call(this),fontSize:Object(f["g"])(this.computedFontSize,"rem"),marginTop:Object(f["g"])(this.computedMarginTop),transform:`translateY(${Object(f["g"])(this.computedTransform)})`,left:Object(f["g"])(this.computedLeft),right:Object(f["g"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=i["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=i["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,c=r("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var i=n("da84");t.exports=function(t,e){var n=i.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4804:function(t,e,n){},"480e":function(t,e,n){"use strict";var i=n("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},4840:function(t,e,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},"485a":function(t,e,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&s(n=t.toString)&&!o(i=r(n,t)))return i;if(s(n=t.valueOf)&&!o(i=r(n,t)))return i;if("string"!==e&&s(n=t.toString)&&!o(i=r(n,t)))return i;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var i=n("2d00"),r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"4ad4":function(t,e,n){"use strict";var i=n("16b7"),r=n("f2e7"),s=n("58df"),o=n("80d2"),a=n("d9bd");const c=Object(s["a"])(i["a"],r["a"]);e["a"]=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(o["q"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(a["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(o["p"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){var e;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const t=this.internalActivator?this.$el:document;n="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;n=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return Object(o["p"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4b85":function(t,e,n){},"4bd4":function(t,e,n){"use strict";var i=n("58df"),r=n("7e2b"),s=n("3206");e["a"]=Object(i["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))}):n.valid=e(t),n},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const n=this.watchers.find(t=>t._uid===e._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"4ca6":function(t,e,n){"use strict";n("ff44");var i=n("132d"),r=n("a9ad"),s=n("7560"),o=n("f2e7"),a=n("2b0e"),c=a["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),l=n("fe6c"),u=n("58df"),h=n("80d2");e["a"]=Object(u["a"])(r["a"],Object(l["b"])(["left","bottom"]),s["a"],o["a"],c).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${Object(h["g"])(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),n=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",n,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const t=Object(h["p"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(i["a"],this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],n=[Object(h["p"])(this)],{"aria-atomic":i,"aria-label":r,"aria-live":s,role:o,title:a,...c}=this.$attrs;return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:c,class:this.classes},n)}})},"4d64":function(t,e,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=i(e),l=s(c),u=r(o,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(t,e,n){var i=n("da84"),r=n("23cb"),s=n("07fa"),o=n("8418"),a=i.Array,c=Math.max;t.exports=function(t,e,n){for(var i=s(t),l=r(e,i),u=r(void 0===n?i:n,i),h=a(c(u-l,0)),d=0;l<u;l++,d++)o(h,d,t[l]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,s=n("1dde"),o=s("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("3206");function r(t,e,n){return Object(i["a"])(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},"4e827":function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),c=n("577e"),l=n("d039"),u=n("addb"),h=n("a640"),d=n("04d1"),p=n("d998"),f=n("2d00"),m=n("512c"),v=[],g=r(v.sort),y=r(v.push),b=l((function(){v.sort(void 0)})),_=l((function(){v.sort(null)})),w=h("sort"),C=!l((function(){if(f)return f<70;if(!(d&&d>3)){if(p)return!0;if(m)return m<603;var t,e,n,i,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)v.push({k:e+i,v:n})}for(v.sort((function(t,e){return e.v-t.v})),i=0;i<v.length;i++)e=v[i].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})),k=b||!_||!w||!C,S=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};i({target:"Array",proto:!0,forced:k},{sort:function(t){void 0!==t&&s(t);var e=o(this);if(C)return void 0===t?g(e):g(e,t);var n,i,r=[],c=a(e);for(i=0;i<c;i++)i in e&&y(r,e[i]);u(r,S(t)),n=r.length,i=0;while(i<n)e[i]=r[i++];while(i<c)delete e[i++];return e}})},"4ff9":function(t,e,n){},5087:function(t,e,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var i=n("5926"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},"512c":function(t,e,n){var i=n("342f"),r=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},"51b0":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return _o})),n.d(e,"b",(function(){return To})),n.d(e,"c",(function(){return vo})),n.d(e,"d",(function(){return fo})),n.d(e,"e",(function(){return go})),n.d(e,"f",(function(){return yo})),n.d(e,"g",(function(){return bo}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(t){l=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Object(s["J"])(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Object(s["C"])(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Object(s["k"])(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},f=p("localStorage"),m=p("sessionStorage"),v=new o["b"]("@firebase/database"),g=function(){let t=1;return function(){return t++}}(),y=function(t){const e=Object(s["I"])(t),n=new s["d"];n.update(e);const i=n.digest();return s["h"].encodeByteArray(i)},b=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?e+=b.apply(null,i):e+="object"===typeof i?Object(s["J"])(i):i,e+=" "}return e};let _=null,w=!0;const C=function(t,e){Object(s["f"])(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(v.logLevel=o["a"].VERBOSE,_=v.log.bind(v),e&&m.set("logging_enabled",!0)):"function"===typeof t?_=t:(_=null,m.remove("logging_enabled"))},k=function(...t){if(!0===w&&(w=!1,null===_&&!0===m.get("logging_enabled")&&C(!0)),_){const e=b.apply(null,t);_(e)}},S=function(t){return function(...e){k(t,...e)}},O=function(...t){const e="FIREBASE INTERNAL ERROR: "+b(...t);v.error(e)},I=function(...t){const e="FIREBASE FATAL ERROR: "+b(...t);throw v.error(e),new Error(e)},x=function(...t){const e="FIREBASE WARNING: "+b(...t);v.warn(e)},T=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},E=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A=function(t){if(Object(s["z"])()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},$="[MIN_NAME]",j="[MAX_NAME]",P=function(t,e){if(t===e)return 0;if(t===$||e===j)return-1;if(e===$||t===j)return 1;{const n=W(t),i=W(e);return null!==n?null!==i?n-i===0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},L=function(t,e){return t===e?0:t<e?-1:1},N=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Object(s["J"])(e))},R=function(t){if("object"!==typeof t||null===t)return Object(s["J"])(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=Object(s["J"])(e[i]),n+=":",n+=R(t[e[i]]);return n+="}",n},D=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function M(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F=function(t){Object(s["f"])(!E(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,a,c,l;0===t?(o=0,a=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),i),o=c+i,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},B=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},V=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const U=new RegExp("^-?(0*)\\d{1,10}$"),z=-2147483648,H=2147483647,W=function(t){if(U.test(t)){const e=Number(t);if(e>=z&&e<=H)return e}return null},q=function(t){try{t()}catch(e){setTimeout(()=>{const t=e.stack||"";throw x("Exception was thrown by user callback.",t),e},Math.floor(0))}},K=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(t,e){const n=setTimeout(t,e);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(t=>this.appCheck=t)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,n)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(t))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(t=>this.auth_=t)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(t=>t&&"auth/token-not-initialized"===t.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((e,n)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,n):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",Q="v",tt="s",et="r",nt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rt="ls",st="p",ot="ac",at="websocket",ct="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(t,e,n,i,r=!1,s="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${t}${this.host}/${e}`}}function ut(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ht(t,e,n){let i;if(Object(s["f"])("string"===typeof e,"typeof type must == string"),Object(s["f"])("object"===typeof n,"typeof params must == object"),e===at)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==ct)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ut(t)&&(n["ns"]=t.namespace);const r=[];return M(n,(t,e)=>{r.push(t+"="+e)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.counters_={}}incrementCounter(t,e=1){Object(s["k"])(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return Object(s["n"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},ft={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new dt),pt[e]}function vt(t,e){const n=t.toString();return ft[n]||(ft[n]=e()),ft[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&q(()=>{this.onMessage_(t[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="start",bt="close",_t="pLPCommand",wt="pRTLPCB",Ct="id",kt="pw",St="ser",Ot="cb",It="seg",xt="ts",Tt="d",Et="dframe",At=1870,$t=30,jt=At-$t,Pt=25e3,Lt=3e4;class Nt{constructor(t,e,n,i,r,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[ot]=this.appCheckToken),ht(e,ct,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lt)),A(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rt((...t)=>{const[e,n,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===yt)this.id=n,this.password=i;else{if(e!==bt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)},()=>{this.onClosed_()},this.urlFn);const t={};t[yt]="t",t[St]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[Ot]=this.scriptTagHolder.uniqueCallbackIdentifier),t[Q]=Z,this.transportSessionId&&(t[tt]=this.transportSessionId),this.lastSessionId&&(t[rt]=this.lastSessionId),this.applicationId&&(t[st]=this.applicationId),this.appCheckToken&&(t[ot]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[et]=nt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nt.forceAllow_=!0}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){return!Object(s["z"])()&&(!!Nt.forceAllow_||!Nt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!B()&&!V())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Object(s["J"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Object(s["j"])(e),i=D(n,jt);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Object(s["z"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Et]="t",n[Ct]=t,n[kt]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Object(s["J"])(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Rt{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["z"])())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=g(),window[_t+this.uniqueCallbackIdentifier]=t,window[wt+this.uniqueCallbackIdentifier]=e,this.myIFrame=Rt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){k("frame writing exception"),r.stack&&k(r.stack),k(r)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||k("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ct]=this.myID,t[kt]=this.myPW,t[St]=this.currentSerial;let e=this.urlFn(t),n="",i=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+$t+n.length<=At))break;{const t=this.pendingSegs.shift();n=n+"&"+It+i+"="+t.seg+"&"+xt+i+"="+t.ts+"&"+Tt+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(Pt)),r=()=>{clearTimeout(i),n()};this.addTag(t,r)}addTag(t,e){Object(s["z"])()?this.doNodeLongPoll(t,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{k("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=16384,Mt=45e3;let Ft=null;"undefined"!==typeof MozWebSocket?Ft=MozWebSocket:"undefined"!==typeof WebSocket&&(Ft=WebSocket);class Bt{constructor(t,e,n,i,r,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=mt(e),this.connURL=Bt.connectionURL_(e,s,o,i),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i){const r={};return r[Q]=Z,!Object(s["z"])()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(r[et]=nt),e&&(r[tt]=e),n&&(r[rt]=n),i&&(r[ot]=i),ht(t,at,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{if(Object(s["z"])()){const e=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${t.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyDxbMGWiD2Wr9qy8wrxA4VkI581EgKPj4s",VUE_APP_AUTH_DOMAIN:"advr-consultores.firebaseapp.com",VUE_APP_DATABASE_URL:"https://advr-consultores-default-rtdb.firebaseio.com",VUE_APP_PROJECT_ID:"advr-consultores",VUE_APP_STORAGE_BUCKET:"advr-consultores.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"950650780471",VUE_APP_APP_ID:"1:950650780471:web:6bbc43f41d56abc9fcf8b2",VUE_APP_MEASUREMENT_ID:"G-SRQCGWSDVY",BASE_URL:"/REPO_NAME/"}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r}),this.mySock=new Ft(this.connURL,[],n)}else{const t={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ft(this.connURL,[],t)}}catch(i){this.log_("Error instantiating WebSocket.");const t=i.message||i.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Ft&&!Bt.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Object(s["C"])(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Object(s["f"])(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Object(s["J"])(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=D(e,Dt);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mt))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2,Bt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Nt,Bt]}initTransports_(t){const e=Bt&&Bt["isAvailable"]();let n=e&&!Bt.previouslyFailed();if(t.webSocketOnly&&(e||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Bt];else{const t=this.transports_=[];for(const e of Vt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=6e4,zt=5e3,Ht=10240,Wt=102400,qt="t",Kt="d",Gt="s",Yt="r",Xt="e",Jt="o",Zt="a",Qt="n",te="p",ee="h";class ne{constructor(t,e,n,i,r,s,o,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new Vt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,n)},Math.floor(0));const i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ht?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(qt in t){const e=t[qt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Yt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=N("t",t),n=N("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:te,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=N("t",t),n=N("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=N(qt,t);if(Kt in t){const n=t[Kt];if(e===ee)this.onHandshake_(n);else if(e===Qt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Gt?this.onConnectionShutdown_(n):e===Yt?this.onReset_(n):e===Xt?O("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):O("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),G(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ut))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zt))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:te,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.allowedEvents_=t,this.listeners_={},Object(s["f"])(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let r=0;r<i.length;r++)if(i[r].callback===e&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(t){Object(s["f"])(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends re{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["y"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(t){return Object(s["f"])("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=32,ae=768;class ce{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function le(){return new ce("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function he(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fe(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ve(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function ge(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new ce(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=ue(t),i=ue(e);if(null===n)return e;if(n===i)return be(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _e(t,e){const n=me(t,0),i=me(e,0);for(let r=0;r<n.length&&r<i.length;r++){const t=P(n[r],i[r]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function we(t,e){if(he(t)!==he(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ce(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(he(t)>he(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ke{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["H"])(this.parts_[n]);Ie(this)}}function Se(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Object(s["H"])(e),Ie(t)}function Oe(t){const e=t.parts_.pop();t.byteLength_-=Object(s["H"])(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ie(t){if(t.byteLength_>ae)throw new Error(t.errorPrefix_+"has a key path longer than "+ae+" bytes ("+t.byteLength_+").");if(t.parts_.length>oe)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oe+") or object contains a cycle "+xe(t))}function xe(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends re{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Te}getInitialEvent(t){return Object(s["f"])("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=1e3,Ae=3e5,$e=3e3,je=3e4,Pe=1.3,Le=3e4,Ne="server_kill",Re=3;class De extends ie{constructor(t,e,n,i,r,o,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=De.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ee,this.maxReconnectDelay_=Ae,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s["z"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Te.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_(Object(s["J"])(r)),Object(s["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new s["a"],n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const i=t["d"];"ok"===t["s"]?(this.onDataUpdate_(n["p"],i,!1,null),e.resolve(i)):e.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const t=this.outstandingGets_[r];void 0!==t&&i===t&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),e.reject(new Error("Client is offline.")))},$e),this.connected_&&this.sendGet_(r),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["f"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["f"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)})}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";t.tag&&(r["q"]=e._queryObject,r["t"]=t.tag),r["h"]=t.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];De.warnOnListenWarnings_(s,e);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,s))})}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&Object(s["k"])(t,"w")){const n=Object(s["G"])(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||Object(s["t"])(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=je)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Object(s["B"])(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,e=>{const n=e["s"],i=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)})}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["f"])(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const r={p:e,d:n};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,t=>{i&&setTimeout(()=>{i(t["s"],t["d"])},Math.floor(0))})}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,r){this.initConnection_();const s={p:e,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Object(s["J"])(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):O("Unrecognized action received from server: "+Object(s["J"])(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Object(s["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Le&&(this.reconnectDelay_=Ee),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pe)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+De.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(t){Object(s["f"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new ne(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,t=>{x(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ne)},r))}catch(O){this.log_("Failed to get token: "+O),o||(this.repoInfo_.nodeAdmin&&x(O),c())}}}interrupt(t){k("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){k("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Object(s["v"])(this.interruptReasons_)&&(this.reconnectDelay_=Ee,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map(t=>R(t)).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new ce(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){k("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Re&&(this.reconnectDelay_=je,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){k("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Re&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Object(s["z"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(s["y"])()?t["framework.cordova"]=1:Object(s["A"])()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=se.getInstance().currentlyOnline();return Object(s["v"])(this.interruptReasons_)&&t}}De.nextPersistentConnectionId_=0,De.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Me(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Me($,t),i=new Me($,e);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be;class Ve extends Fe{static get __EMPTY_NODE(){return Be}static set __EMPTY_NODE(t){Be=t}compare(t,e){return P(t.name,e.name)}isDefinedOn(t){throw Object(s["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Me.MIN}maxPost(){return new Me(j,Be)}makePost(t,e){return Object(s["f"])("string"===typeof t,"KeyIndex indexValue must always be a string."),new Me(t,Be)}toString(){return".key"}}const Ue=new Ve;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!t.isEmpty())if(t=t,s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class He{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:He.RED,this.left=null!=i?i:qe.EMPTY_NODE,this.right=null!=r?r:qe.EMPTY_NODE}copy(t,e,n,i,r){return new He(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return qe.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}He.RED=!0,He.BLACK=!1;class We{copy(t,e,n,i,r){return this}insert(t,e,n){return new He(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(t,e=qe.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new qe(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(t){return new qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,He.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ze(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new ze(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new ze(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new ze(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(t,e){return P(t.name,e.name)}function Ge(t,e){return P(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye;function Xe(t){Ye=t}qe.EMPTY_NODE=new We;const Je=function(t){return"number"===typeof t?"number:"+F(t):"string:"+t},Ze=function(t){if(t.isLeafNode()){const e=t.val();Object(s["f"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(s["k"])(e,".sv"),"Priority must be a string or number.")}else Object(s["f"])(t===Ye||t.isEmpty(),"priority of unexpected type.");Object(s["f"])(t===Ye||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qe,tn,en;class nn{constructor(t,e=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,Object(s["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ze(this.priorityNode_)}static set __childrenNodeConstructor(t){Qe=t}static get __childrenNodeConstructor(){return Qe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nn(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ye(t)?this:".priority"===ue(t)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=ue(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(Object(s["f"])(".priority"!==n||1===he(t),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Je(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?F(this.value_):this.value_,this.lazyHash_=y(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nn.__childrenNodeConstructor?-1:(Object(s["f"])(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(e),r=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["f"])(i>=0,"Unknown leaf type: "+e),Object(s["f"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function rn(t){tn=t}function sn(t){en=t}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends Fe{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),r=n.compareTo(i);return 0===r?P(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(j,new nn("[PRIORITY-POST]",en))}makePost(t,e){const n=tn(t);return new Me(e,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){const e=t=>parseInt(Math.log(t)/cn,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=n(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const un=function(t,e,n,i){t.sort(e);const r=function(e,i){const s=i-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new He(a,o.node,He.BLACK,null,null);{const c=parseInt(s/2,10)+e,l=r(e,c),u=r(c+1,i);return o=t[c],a=n?n(o):o,new He(a,o.node,He.BLACK,l,u)}},s=function(e){let i=null,s=null,o=t.length;const a=function(e,i){const s=o-e,a=o;o-=e;const l=r(s+1,a),u=t[s],h=n?n(u):u;c(new He(h,u.node,i,null,l))},c=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,He.BLACK):(a(i,He.BLACK),a(i,He.RED))}return s},o=new ln(t.length),a=s(o);return new qe(i||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class pn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return Object(s["f"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new pn({".priority":dn},{".priority":an}),hn}get(t){const e=Object(s["G"])(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof qe?e:null}hasIndex(t){return Object(s["k"])(this.indexSet_,t.toString())}addIndex(t,e){Object(s["f"])(t!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(Me.Wrap);let o,a=r.getNext();while(a)i=i||t.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?un(n,t.getCompare()):dn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(t,e){const n=Object(s["D"])(this.indexes_,(n,i)=>{const r=Object(s["G"])(this.indexSet_,i);if(Object(s["f"])(r,"Missing index implementation for "+i),n===dn){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(Me.Wrap);let s=i.getNext();while(s)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),un(n,r.getCompare())}return dn}{const i=e.get(t.name);let r=n;return i&&(r=r.remove(new Me(t.name,i))),r.insert(t,t.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(t,e){const n=Object(s["D"])(this.indexes_,n=>{if(n===dn)return n;{const i=e.get(t.name);return i?n.remove(new Me(t.name,i)):n}});return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class mn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ze(this.priorityNode_),this.children_.isEmpty()&&Object(s["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new mn(new qe(Ge),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(t){return this.children_.isEmpty()?this:new mn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?fn:e}}getChild(t){const e=ue(t);return null===e?this:this.getImmediateChild(e).getChild(de(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(Object(s["f"])(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Me(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?fn:this.priorityNode_;return new mn(i,s,r)}}updateChild(t,e){const n=ue(t);if(null===n)return e;{Object(s["f"])(".priority"!==ue(t)||1===he(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(de(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,r=!0;if(this.forEachChild(an,(s,o)=>{e[s]=o.val(t),n++,r&&mn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!t&&r&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Je(this.getPriority().val())+":"),this.forEachChild(an,(e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)}),this.lazyHash_=""===t?"":y(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Me(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Me(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal(t=>e(t.name,t.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,t=>t);{const n=this.children_.getIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,t=>t);{const n=this.children_.getReverseIteratorFrom(t.name,Me.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)>0)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===gn?-1:0}withIndex(t){if(t===Ue||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new mn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Ue||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(an),n=e.getIterator(an);let i=t.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===Ue?null:this.indexMap_.get(t.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends mn{constructor(){super(new qe(Ge),mn.EMPTY_NODE,pn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return mn.EMPTY_NODE}isEmpty(){return!1}}const gn=new vn;Object.defineProperties(Me,{MIN:{value:new Me($,mn.EMPTY_NODE)},MAX:{value:new Me(j,gn)}}),Ve.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Xe(gn),sn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function bn(t,e=null){if(null===t)return mn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),Object(s["f"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new nn(n,bn(e))}if(t instanceof Array||!yn){let n=mn.EMPTY_NODE;return M(t,(e,i)=>{if(Object(s["k"])(t,e)&&"."!==e.substring(0,1)){const t=bn(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}}),n.updatePriority(bn(e))}{const n=[];let i=!1;const r=t;if(M(r,(t,e)=>{if("."!==t.substring(0,1)){const r=bn(e);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Me(t,r)))}}),0===n.length)return mn.EMPTY_NODE;const s=un(n,Ke,t=>t.name,Ge);if(i){const t=un(n,an.getCompare());return new mn(s,bn(e),new pn({".priority":t},{".priority":an}))}return new mn(s,bn(e),pn.Default)}}rn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends Fe{constructor(t){super(),this.indexPath_=t,Object(s["f"])(!ye(t)&&".priority"!==ue(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),r=n.compareTo(i);return 0===r?P(t.name,e.name):r}makePost(t,e){const n=bn(t),i=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(e,i)}maxPost(){const t=mn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Me(j,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Fe{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?P(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(t,e){const n=bn(t);return new Me(e,n)}toString(){return".value"}}const Cn=new wn,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sn=function(){let t=0;const e=[];return function(n){const i=n===t;let r;t=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=kn.charAt(n%64),n=Math.floor(n/64);Object(s["f"])(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===e[r];r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=kn.charAt(e[r]);return Object(s["f"])(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Tn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function En(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.index_=t}updateChild(t,e,n,i,r,o){Object(s["f"])(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(xn(e,a)):Object(s["f"])(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(In(e,n)):o.trackChildChange(Tn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(an,(t,i)=>{e.hasChild(t)||n.trackChildChange(xn(t,i))}),e.isLeafNode()||e.forEachChild(an,(e,i)=>{if(t.hasChild(e)){const r=t.getImmediateChild(e);r.equals(i)||n.trackChildChange(Tn(e,i,r))}else n.trackChildChange(In(e,i))})),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?mn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.indexedFilter_=new An(t.getIndex()),this.index_=t.getIndex(),this.startPost_=$n.getStartPost_(t),this.endPost_=$n.getEndPost_(t)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){return this.index_.compare(this.getStartPost(),t)<=0&&this.index_.compare(t,this.getEndPost())<=0}updateChild(t,e,n,i,r,s){return this.matches(new Me(e,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,i,r,s)}updateFullNode(t,e,n){e.isLeafNode()&&(e=mn.EMPTY_NODE);let i=e.withIndex(this.index_);i=i.updatePriority(mn.EMPTY_NODE);const r=this;return e.forEachChild(an,(t,e)=>{r.matches(new Me(t,e))||(i=i.updateImmediateChild(t,mn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.rangedFilter_=new $n(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft()}updateChild(t,e,n,i,r,s){return this.rangedFilter_.matches(new Me(e,n))||(n=mn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,i,r,s):this.fullLimitUpdateChild_(t,e,n,r,s)}updateFullNode(t,e,n){let i;if(e.isLeafNode()||e.isEmpty())i=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;i=mn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(e.name,e.node),n++}}else{let t,n,r,s;if(i=e.withIndex(this.index_),i=i.updatePriority(mn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),t=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else s=i.getIterator(this.index_),t=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const e=s.getNext();!a&&r(t,e)<=0&&(a=!0);const c=a&&o<this.limit_&&r(e,n)<=0;c?o++:i=i.updateImmediateChild(e.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,i,r){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const a=t;Object(s["f"])(a.numChildren()===this.limit_,"");const c=new Me(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===e||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(Tn(e,n,t)),a.updateImmediateChild(e,n);{null!=r&&r.trackChildChange(xn(e,t));const n=a.updateImmediateChild(e,mn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(In(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?t:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(xn(l.name,l.node)),r.trackChildChange(In(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:j}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const t=new Pn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Ln(t){return t.loadsAllData()?new An(t.getIndex()):t.hasLimit()?new jn(t):new $n(t)}function Nn(t){const e={};if(t.isDefault())return e;let n;return t.index_===an?n="$priority":t.index_===Cn?n="$value":t.index_===Ue?n="$key":(Object(s["f"])(t.index_ instanceof _n,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=Object(s["J"])(n),t.startSet_&&(e["startAt"]=Object(s["J"])(t.indexStartValue_),t.startNameSet_&&(e["startAt"]+=","+Object(s["J"])(t.indexStartName_))),t.endSet_&&(e["endAt"]=Object(s["J"])(t.indexEndValue_),t.endNameSet_&&(e["endAt"]+=","+Object(s["J"])(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function Rn(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_)),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_)),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==an&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ie{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=S("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(Object(s["f"])(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=Dn.getListenId_(t,n),a={};this.listens_[o]=a;const c=Nn(t._queryParams);this.restRequest_(r+".json",c,(t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(r,c,!1,n),Object(s["G"])(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}})}unlisten(t,e){const n=Dn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Nn(t._queryParams),n=t._path.toString(),i=new s["a"];return this.restRequest_(n+".json",e,(t,e)=>{let r=e;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(e["auth"]=i.accessToken),r&&r.token&&(e["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Object(s["E"])(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(s["C"])(a.responseText)}catch(t){x("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Bn(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=ue(e);t.children.has(i)||t.children.set(i,Fn());const r=t.children.get(i);e=de(e),Bn(r,e,n)}}function Vn(t,e,n){null!==t.value?n(e,t.value):Un(t,(t,i)=>{const r=new ce(e.toString()+"/"+t);Vn(i,r,n)})}function Un(t,e){t.children.forEach((t,n)=>{e(n,t)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&M(this.last_,(t,n)=>{e[t]=e[t]-n}),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e4,Wn=3e4,qn=3e5;class Kn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new zn(t);const n=Hn+(Wn-Hn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;M(t,(t,i)=>{i>0&&Object(s["k"])(this.statsToReport_,t)&&(e[t]=i,n=!0)}),n&&this.server_.reportStats(e),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*qn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Yn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Zn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Yn()}operationForChild(t){if(ye(this.path)){if(null!=this.affectedTree.value)return Object(s["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new ce(t));return new Zn(le(),e,this.revert)}}return Object(s["f"])(ue(this.path)===t,"operationForChild called for unrelated child."),new Zn(de(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(t){return ye(this.path)?new Qn(this.source,le(),this.snap.getImmediateChild(t)):new Qn(this.source,de(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Gn.MERGE}operationForChild(t){if(ye(this.path)){const e=this.children.subtree(new ce(t));return e.isEmpty()?null:e.value?new Qn(this.source,le(),e.value):new ti(this.source,le(),e)}return Object(s["f"])(ue(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ye(t))return this.isFullyInitialized()&&!this.filtered_;const e=ue(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function ii(t,e,n,i){const r=[],s=[];return e.forEach(e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push(En(e.childName,e.snapshotNode))}),ri(t,r,"child_removed",e,i,n),ri(t,r,"child_added",e,i,n),ri(t,r,"child_moved",s,i,n),ri(t,r,"child_changed",e,i,n),ri(t,r,"value",e,i,n),r}function ri(t,e,n,i,r,s){const o=i.filter(t=>t.type===n);o.sort((e,n)=>oi(t,e,n)),o.forEach(n=>{const i=si(t,n,s);r.forEach(r=>{r.respondsTo(n.type)&&e.push(r.createEvent(i,t.query_))})})}function si(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oi(t,e,n){if(null==e.childName||null==n.childName)throw Object(s["g"])("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),r=new Me(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){return{eventCache:t,serverCache:e}}function ci(t,e,n,i){return ai(new ei(e,n,i),t.serverCache)}function li(t,e,n,i){return ai(t.eventCache,new ei(e,n,i))}function ui(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const pi=()=>(di||(di=new qe(L)),di);class fi{constructor(t,e=pi()){this.value=t,this.children=e}static fromObject(t){let e=new fi(null);return M(t,(t,n)=>{e=e.set(new ce(t),n)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:le(),value:this.value};if(ye(t))return null;{const n=ue(t),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(de(t),e);if(null!=r){const t=ge(new ce(n),r.path);return{path:t,value:r.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ye(t))return this;{const e=ue(t),n=this.children.get(e);return null!==n?n.subtree(de(t)):new fi(null)}}set(t,e){if(ye(t))return new fi(e,this.children);{const n=ue(t),i=this.children.get(n)||new fi(null),r=i.set(de(t),e),s=this.children.insert(n,r);return new fi(this.value,s)}}remove(t){if(ye(t))return this.children.isEmpty()?new fi(null):new fi(null,this.children);{const e=ue(t),n=this.children.get(e);if(n){const i=n.remove(de(t));let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&r.isEmpty()?new fi(null):new fi(this.value,r)}return this}}get(t){if(ye(t))return this.value;{const e=ue(t),n=this.children.get(e);return n?n.get(de(t)):null}}setTree(t,e){if(ye(t))return e;{const n=ue(t),i=this.children.get(n)||new fi(null),r=i.setTree(de(t),e);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new fi(this.value,s)}}fold(t){return this.fold_(le(),t)}fold_(t,e){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(ge(t,i),e)}),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,le(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(ye(t))return null;{const i=ue(t),r=this.children.get(i);return r?r.findOnPath_(de(t),ge(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,le(),e)}foreachOnPath_(t,e,n){if(ye(t))return this;{this.value&&n(e,this.value);const i=ue(t),r=this.children.get(i);return r?r.foreachOnPath_(de(t),ge(e,i),n):new fi(null)}}foreach(t){this.foreach_(le(),t)}foreach_(t,e){this.children.inorderTraversal((n,i)=>{i.foreach_(ge(t,n),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,n)=>{n.value&&t(e,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.writeTree_=t}static empty(){return new mi(new fi(null))}}function vi(t,e,n){if(ye(e))return new mi(new fi(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const r=i.path;let s=i.value;const o=be(r,e);return s=s.updateChild(o,n),new mi(t.writeTree_.set(r,s))}{const i=new fi(n),r=t.writeTree_.setTree(e,i);return new mi(r)}}}function gi(t,e,n){let i=t;return M(n,(t,n)=>{i=vi(i,ge(e,t),n)}),i}function yi(t,e){if(ye(e))return mi.empty();{const n=t.writeTree_.setTree(e,new fi(null));return new mi(n)}}function bi(t,e){return null!=_i(t,e)}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function wi(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(t,n)=>{e.push(new Me(t,n))}):t.writeTree_.children.inorderTraversal((t,n)=>{null!=n.value&&e.push(new Me(t,n.value))}),e}function Ci(t,e){if(ye(e))return t;{const n=_i(t,e);return new mi(null!=n?new fi(n):t.writeTree_.subtree(e))}}function ki(t){return t.writeTree_.isEmpty()}function Si(t,e){return Oi(le(),t.writeTree_,e)}function Oi(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((e,r)=>{".priority"===e?(Object(s["f"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Oi(ge(t,e),r,n)}),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(ge(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e){return Yi(e,t)}function xi(t,e,n,i,r){Object(s["f"])(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=vi(t.visibleWrites,e,n)),t.lastWriteId=i}function Ti(t,e,n,i){Object(s["f"])(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=gi(t.visibleWrites,e,n),t.lastWriteId=i}function Ei(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ai(t,e){const n=t.allWrites.findIndex(t=>t.writeId===e);Object(s["f"])(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,o=!1,a=t.allWrites.length-1;while(r&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&$i(e,i.path)?r=!1:Ce(i.path,e.path)&&(o=!0)),a--}if(r){if(o)return ji(t),!0;if(i.snap)t.visibleWrites=yi(t.visibleWrites,i.path);else{const e=i.children;M(e,e=>{t.visibleWrites=yi(t.visibleWrites,ge(i.path,e))})}return!0}return!1}function $i(t,e){if(t.snap)return Ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ce(ge(t.path,n),e))return!0;return!1}function ji(t){t.visibleWrites=Li(t.allWrites,Pi,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pi(t){return t.visible}function Li(t,e,n){let i=mi.empty();for(let r=0;r<t.length;++r){const o=t[r];if(e(o)){const t=o.path;let e;if(o.snap)Ce(n,t)?(e=be(n,t),i=vi(i,e,o.snap)):Ce(t,n)&&(e=be(t,n),i=vi(i,le(),o.snap.getChild(e)));else{if(!o.children)throw Object(s["g"])("WriteRecord should have .snap or .children");if(Ce(n,t))e=be(n,t),i=gi(i,e,o.children);else if(Ce(t,n))if(e=be(t,n),ye(e))i=gi(i,le(),o.children);else{const t=Object(s["G"])(o.children,ue(e));if(t){const n=t.getChild(de(e));i=vi(i,le(),n)}}}}}return i}function Ni(t,e,n,i,r){if(i||r){const s=Ci(t.visibleWrites,e);if(!r&&ki(s))return n;if(r||null!=n||bi(s,le())){const s=function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(Ce(t.path,e)||Ce(e,t.path))},o=Li(t.allWrites,s,e),a=n||mn.EMPTY_NODE;return Si(o,a)}return null}{const i=_i(t.visibleWrites,e);if(null!=i)return i;{const i=Ci(t.visibleWrites,e);if(ki(i))return n;if(null!=n||bi(i,le())){const t=n||mn.EMPTY_NODE;return Si(i,t)}return null}}}function Ri(t,e,n){let i=mn.EMPTY_NODE;const r=_i(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(an,(t,e)=>{i=i.updateImmediateChild(t,e)}),i;if(n){const r=Ci(t.visibleWrites,e);return n.forEachChild(an,(t,e)=>{const n=Si(Ci(r,new ce(t)),e);i=i.updateImmediateChild(t,n)}),wi(r).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}{const n=Ci(t.visibleWrites,e);return wi(n).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}}function Di(t,e,n,i,r){Object(s["f"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=ge(e,n);if(bi(t.visibleWrites,o))return null;{const e=Ci(t.visibleWrites,o);return ki(e)?r.getChild(n):Si(e,r.getChild(n))}}function Mi(t,e,n,i){const r=ge(e,n),s=_i(t.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const e=Ci(t.visibleWrites,r);return Si(e,i.getNode().getImmediateChild(n))}return null}function Fi(t,e){return _i(t.visibleWrites,e)}function Bi(t,e,n,i,r,s,o){let a;const c=Ci(t.visibleWrites,e),l=_i(c,le());if(null!=l)a=l;else{if(null==n)return[];a=Si(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&t.length<r)0!==e(c,i)&&t.push(c),c=n.getNext();return t}}function Vi(){return{visibleWrites:mi.empty(),allWrites:[],lastWriteId:-1}}function Ui(t,e,n,i){return Ni(t.writeTree,t.treePath,e,n,i)}function zi(t,e){return Ri(t.writeTree,t.treePath,e)}function Hi(t,e,n,i){return Di(t.writeTree,t.treePath,e,n,i)}function Wi(t,e){return Fi(t.writeTree,ge(t.treePath,e))}function qi(t,e,n,i,r,s){return Bi(t.writeTree,t.treePath,e,n,i,r,s)}function Ki(t,e,n){return Mi(t.writeTree,t.treePath,e,n)}function Gi(t,e){return Yi(ge(t.treePath,e),t.writeTree)}function Yi(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;Object(s["f"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(s["f"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,Tn(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,xn(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,In(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw Object(s["g"])("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,Tn(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Zi=new Ji;class Qi{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ki(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hi(this.viewCache_),r=qi(this.writes_,i,e,1,n,t);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){return{filter:t}}function er(t,e){Object(s["f"])(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Object(s["f"])(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nr(t,e,n,i,r){const o=new Xi;let a,c;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?a=or(t,e,l.path,l.snap,i,r,o):(Object(s["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),a=sr(t,e,l.path,l.snap,i,r,c,o))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?a=cr(t,e,l.path,l.children,i,r,o):(Object(s["f"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=ur(t,e,l.path,l.children,i,r,c,o))}else if(n.type===Gn.ACK_USER_WRITE){const s=n;a=s.revert?pr(t,e,s.path,i,r,o):hr(t,e,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(s["g"])("Unknown operation type: "+n.type);a=dr(t,e,n.path,i,o)}const l=o.getChanges();return ir(e,a,l),{viewCache:a,changes:l}}function ir(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ui(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(On(ui(e)))}}function rr(t,e,n,i,r,o){const a=e.eventCache;if(null!=Wi(i,n))return e;{let c,l;if(ye(n))if(Object(s["f"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=hi(e),r=n instanceof mn?n:mn.EMPTY_NODE,s=zi(i,r);c=t.filter.updateFullNode(e.eventCache.getNode(),s,o)}else{const n=Ui(i,hi(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const u=ue(n);if(".priority"===u){Object(s["f"])(1===he(n),"Can't have a priority with additional path components");const r=a.getNode();l=e.serverCache.getNode();const o=Hi(i,n,r,l);c=null!=o?t.filter.updatePriority(r,o):a.getNode()}else{const s=de(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=Hi(i,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(s,t):a.getNode().getImmediateChild(u)}else h=Ki(i,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ci(e,c,a.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function sr(t,e,n,i,r,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),t,null)}else{const t=ue(n);if(!c.isCompleteForPath(n)&&he(n)>1)return e;const r=de(n),s=c.getNode().getImmediateChild(t),o=s.updateChild(r,i);l=".priority"===t?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),t,o,r,Zi,null)}const h=li(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Qi(r,h,s);return rr(t,h,n,r,d,a)}function or(t,e,n,i,r,s,o){const a=e.eventCache;let c,l;const u=new Qi(r,e,s);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ci(e,l,!0,t.filter.filtersNodes());else{const r=ue(n);if(".priority"===r)l=t.filter.updatePriority(e.eventCache.getNode(),i),c=ci(e,l,a.isFullyInitialized(),a.isFiltered());else{const s=de(n),l=a.getNode().getImmediateChild(r);let h;if(ye(s))h=i;else{const t=u.getCompleteChild(r);h=null!=t?".priority"===pe(s)&&t.getChild(ve(s)).isEmpty()?t:t.updateChild(s,i):mn.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),r,h,s,u,o);c=ci(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ar(t,e){return t.eventCache.isCompleteForChild(e)}function cr(t,e,n,i,r,s,o){let a=e;return i.foreach((i,c)=>{const l=ge(n,i);ar(e,ue(l))&&(a=or(t,a,l,c,r,s,o))}),i.foreach((i,c)=>{const l=ge(n,i);ar(e,ue(l))||(a=or(t,a,l,c,r,s,o))}),a}function lr(t,e,n){return n.foreach((t,n)=>{e=e.updateChild(t,n)}),e}function ur(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=ye(n)?i:new fi(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=lr(t,c,i);l=sr(t,l,new ce(n),u,r,s,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=lr(t,c,i);l=sr(t,l,new ce(n),u,r,s,o,a)}}),l}function hr(t,e,n,i,r,s,o){if(null!=Wi(r,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=i.value){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return sr(t,e,n,c.getNode().getChild(n),r,s,a,o);if(ye(n)){let i=new fi(null);return c.getNode().forEachChild(Ue,(t,e)=>{i=i.set(new ce(t),e)}),ur(t,e,n,i,r,s,a,o)}return e}{let l=new fi(null);return i.foreach((t,e)=>{const i=ge(n,t);c.isCompleteForPath(i)&&(l=l.set(t,c.getNode().getChild(i)))}),ur(t,e,n,l,r,s,a,o)}}function dr(t,e,n,i,r){const s=e.serverCache,o=li(e,s.getNode(),s.isFullyInitialized()||ye(n),s.isFiltered());return rr(t,o,n,i,Zi,r)}function pr(t,e,n,i,r,o){let a;if(null!=Wi(i,n))return e;{const c=new Qi(i,e,r),l=e.eventCache.getNode();let u;if(ye(n)||".priority"===ue(n)){let n;if(e.serverCache.isFullyInitialized())n=Ui(i,hi(e));else{const t=e.serverCache.getNode();Object(s["f"])(t instanceof mn,"serverChildren would be complete if leaf node"),n=zi(i,t)}n=n,u=t.filter.updateFullNode(l,n,o)}else{const r=ue(n);let s=Ki(i,r,e.serverCache);null==s&&e.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?t.filter.updateChild(l,r,s,de(n),c,o):e.eventCache.getNode().hasChild(r)?t.filter.updateChild(l,r,mn.EMPTY_NODE,de(n),c,o):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Ui(i,hi(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=Wi(i,le()),ci(e,u,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new An(n.getIndex()),r=Ln(n);this.processor_=tr(r);const s=e.serverCache,o=e.eventCache,a=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),l=new ei(a,s.isFullyInitialized(),i.filtersNodes()),u=new ei(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(u,l),this.eventGenerator_=new ni(this.query_)}get query(){return this.query_}}function mr(t){return ui(t.viewCache_)}function vr(t,e){const n=hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function gr(t,e,n,i){e.type===Gn.MERGE&&null!==e.source.queryId&&(Object(s["f"])(hi(t.viewCache_),"We should always have a full cache before handling merges"),Object(s["f"])(ui(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,o=nr(t.processor_,r,e,n,i);return er(t.processor_,o.viewCache),Object(s["f"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,yr(t,o.changes,o.viewCache.eventCache.getNode(),null)}function yr(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return ii(t.eventGenerator_,e,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br,_r;class wr{constructor(){this.views=new Map}}function Cr(t){Object(s["f"])(!br,"__referenceConstructor has already been defined"),br=t}function kr(t,e,n,i){const r=e.source.queryId;if(null!==r){const o=t.views.get(r);return Object(s["f"])(null!=o,"SyncTree gave us an op for an invalid query."),gr(o,e,n,i)}{let r=[];for(const s of t.views.values())r=r.concat(gr(s,e,n,i));return r}}function Sr(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=Ui(n,r?i:null),s=!1;t?s=!0:i instanceof mn?(t=zi(n,i),s=!1):(t=mn.EMPTY_NODE,s=!1);const o=ai(new ei(t,s,!1),new ei(i,r,!1));return new fr(e,o)}return o}function Or(t,e){let n=null;for(const i of t.views.values())n=n||vr(i,e);return n}function Ir(t){Object(s["f"])(!_r,"__referenceConstructor has already been defined"),_r=t}class xr{constructor(t){this.listenProvider_=t,this.syncPointTree_=new fi(null),this.pendingWriteTree_=Vi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tr(t,e,n,i,r){return xi(t.pendingWriteTree_,e,n,i,r),r?Dr(t,new Qn(Yn(),e,n)):[]}function Er(t,e,n,i){Ti(t.pendingWriteTree_,e,n,i);const r=fi.fromObject(n);return Dr(t,new ti(Yn(),e,r))}function Ar(t,e,n=!1){const i=Ei(t.pendingWriteTree_,e),r=Ai(t.pendingWriteTree_,e);if(r){let e=new fi(null);return null!=i.snap?e=e.set(le(),!0):M(i.children,t=>{e=e.set(new ce(t),!0)}),Dr(t,new Zn(i.path,e,n))}return[]}function $r(t,e,n){return Dr(t,new Qn(Xn(),e,n))}function jr(t,e,n){const i=fi.fromObject(n);return Dr(t,new ti(Xn(),e,i))}function Pr(t,e,n,i){const r=Br(t,i);if(null!=r){const i=Vr(r),s=i.path,o=i.queryId,a=be(s,e),c=new Qn(Jn(o),a,n);return Ur(t,s,c)}return[]}function Lr(t,e,n,i){const r=Br(t,i);if(r){const i=Vr(r),s=i.path,o=i.queryId,a=be(s,e),c=fi.fromObject(n),l=new ti(Jn(o),a,c);return Ur(t,s,l)}return[]}function Nr(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(t,n)=>{const i=be(t,e),r=Or(n,i);if(r)return r});return Ni(r,e,s,n,i)}function Rr(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(t,e)=>{const r=be(t,n);i=i||Or(e,r)});let r=t.syncPointTree_.get(n);r?i=i||Or(r,le()):(r=new wr,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=null!=i,o=s?new ei(i,!0,!1):null,a=Ii(t.pendingWriteTree_,e._path),c=Sr(r,e,a,s?o.getNode():mn.EMPTY_NODE,s);return mr(c)}function Dr(t,e){return Mr(e,t.syncPointTree_,null,Ii(t.pendingWriteTree_,le()))}function Mr(t,e,n,i){if(ye(t.path))return Fr(t,e,n,i);{const r=e.get(le());null==n&&null!=r&&(n=Or(r,le()));let s=[];const o=ue(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=Gi(i,o);s=s.concat(Mr(a,c,t,e))}return r&&(s=s.concat(kr(r,t,i,n))),s}}function Fr(t,e,n,i){const r=e.get(le());null==n&&null!=r&&(n=Or(r,le()));let s=[];return e.children.inorderTraversal((e,r)=>{const o=n?n.getImmediateChild(e):null,a=Gi(i,e),c=t.operationForChild(e);c&&(s=s.concat(Fr(c,r,o,a)))}),r&&(s=s.concat(kr(r,t,i,n))),s}function Br(t,e){return t.tagToQueryMap.get(e)}function Vr(t){const e=t.indexOf("$");return Object(s["f"])(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Ur(t,e,n){const i=t.syncPointTree_.get(e);Object(s["f"])(i,"Missing sync point for query tag that we're tracking");const r=Ii(t.pendingWriteTree_,e);return kr(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new zr(e)}node(){return this.node_}}class Hr{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ge(this.path_,t);return new Hr(this.syncTree_,e)}node(){return Nr(this.syncTree_,this.path_)}}const Wr=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},qr=function(t,e,n){return t&&"object"===typeof t?(Object(s["f"])(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?Kr(t[".sv"],e,n):"object"===typeof t[".sv"]?Gr(t[".sv"],e):void Object(s["f"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Kr=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:Object(s["f"])(!1,"Unexpected server value: "+t)}},Gr=function(t,e,n){t.hasOwnProperty("increment")||Object(s["f"])(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t["increment"];"number"!==typeof i&&Object(s["f"])(!1,"Unexpected increment value: "+i);const r=e.node();if(Object(s["f"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Yr=function(t,e,n,i){return Jr(e,new Hr(n,t),i)},Xr=function(t,e,n){return Jr(t,new zr(e),n)};function Jr(t,e,n){const i=t.getPriority().val(),r=qr(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,s=qr(i.getValue(),e,n);return s!==i.getValue()||r!==i.getPriority().val()?new nn(s,bn(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new nn(r))),i.forEachChild(an,(t,i)=>{const r=Jr(i,e.getImmediateChild(t),n);r!==i&&(s=s.updateImmediateChild(t,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Qr(t,e){let n=e instanceof ce?e:new ce(e),i=t,r=ue(n);while(null!==r){const t=Object(s["G"])(i.node.children,r)||{children:{},childCount:0};i=new Zr(r,i,t),n=de(n),r=ue(n)}return i}function ts(t){return t.node.value}function es(t,e){t.node.value=e,cs(t)}function ns(t){return t.node.childCount>0}function is(t){return void 0===ts(t)&&!ns(t)}function rs(t,e){M(t.node.children,(n,i)=>{e(new Zr(n,t,i))})}function ss(t,e,n,i){n&&!i&&e(t),rs(t,t=>{ss(t,e,!0,i)}),n&&i&&e(t)}function os(t,e,n){let i=n?t:t.parent;while(null!==i){if(e(i))return!0;i=i.parent}return!1}function as(t){return new ce(null===t.parent?t.name:as(t.parent)+"/"+t.name)}function cs(t){null!==t.parent&&ls(t.parent,t.name,t)}function ls(t,e,n){const i=is(n),r=Object(s["k"])(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,cs(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,cs(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=/[\[\].#$\/\u0000-\u001F\u007F]/,hs=/[\[\].#$\u0000-\u001F\u007F]/,ds=10485760,ps=function(t){return"string"===typeof t&&0!==t.length&&!us.test(t)},fs=function(t){return"string"===typeof t&&0!==t.length&&!hs.test(t)},ms=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fs(t)},vs=function(t){return null===t||"string"===typeof t||"number"===typeof t&&!E(t)||t&&"object"===typeof t&&Object(s["k"])(t,".sv")},gs=function(t,e,n,i){i&&void 0===e||ys(Object(s["p"])(t,"value"),e,n)},ys=function(t,e,n){const i=n instanceof ce?new ke(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+xe(i));if("function"===typeof e)throw new Error(t+"contains a function "+xe(i)+" with contents = "+e.toString());if(E(e))throw new Error(t+"contains "+e.toString()+" "+xe(i));if("string"===typeof e&&e.length>ds/3&&Object(s["H"])(e)>ds)throw new Error(t+"contains a string greater than "+ds+" utf8 bytes "+xe(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,r=!1;if(M(e,(e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!ps(e)))throw new Error(t+" contains an invalid key ("+e+") "+xe(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Se(i,e),ys(t,s,i),Oe(i)}),n&&r)throw new Error(t+' contains ".value" child '+xe(i)+" in addition to actual children.")}},bs=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=me(i);for(let e=0;e<r.length;e++)if(".priority"===r[e]&&e===r.length-1);else if(!ps(r[e]))throw new Error(t+"contains an invalid key ("+r[e]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}e.sort(_e);let r=null;for(n=0;n<e.length;n++){if(i=e[n],null!==r&&Ce(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},_s=function(t,e,n,i){if(i&&void 0===e)return;const r=Object(s["p"])(t,"values");if(!e||"object"!==typeof e||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const o=[];M(e,(t,e)=>{const i=new ce(t);if(ys(r,e,ge(n,i)),".priority"===pe(i)&&!vs(e))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),bs(r,o)},ws=function(t,e,n,i){if((!i||void 0!==n)&&!fs(n))throw new Error(Object(s["p"])(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Cs=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ws(t,e,n,i)},ks=function(t,e){if(".info"===ue(e))throw new Error(t+" failed = Can't modify data under /.info/")},Ss=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!ps(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!ms(n))throw new Error(Object(s["p"])(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Is(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();null===n||we(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function xs(t,e,n){Is(t,n),Es(t,t=>we(t,e))}function Ts(t,e,n){Is(t,n),Es(t,t=>Ce(t,e)||Ce(e,t))}function Es(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(As(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function As(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();_&&k("event: "+n.toString()),q(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="repo_interrupt",js=25;class Ps{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Os,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Zr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ls(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||K())t.server_=new Dn(t.repoInfo_,(e,n,i,r)=>{Ds(t,e,n,i,r)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ms(t,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["J"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new De(t.repoInfo_,e,(e,n,i,r)=>{Ds(t,e,n,i,r)},e=>{Ms(t,e)},e=>{Fs(t,e)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(e=>{t.server_.refreshAuthToken(e)}),t.appCheckProvider_.addTokenChangeListener(e=>{t.server_.refreshAppCheckToken(e.token)}),t.statsReporter_=vt(t.repoInfo_,()=>new Kn(t.stats_,t.server_)),t.infoData_=new Mn,t.infoSyncTree_=new xr({startListening:(e,n,i,r)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=$r(t.infoSyncTree_,e._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),Bs(t,"connected",!1),t.serverSyncTree_=new xr({startListening:(e,n,i,r)=>(t.server_.listen(e,i,n,(n,i)=>{const s=r(n,i);Ts(t.eventQueue_,e._path,s)}),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Ns(t){const e=t.infoData_.getNode(new ce(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function Rs(t){return Wr({timestamp:Ns(t)})}function Ds(t,e,n,i,r){t.dataUpdateCount++;const o=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(r)if(i){const e=Object(s["D"])(n,t=>bn(t));a=Lr(t.serverSyncTree_,o,e,r)}else{const e=bn(n);a=Pr(t.serverSyncTree_,o,e,r)}else if(i){const e=Object(s["D"])(n,t=>bn(t));a=jr(t.serverSyncTree_,o,e)}else{const e=bn(n);a=$r(t.serverSyncTree_,o,e)}let c=o;a.length>0&&(c=Zs(t,o)),Ts(t.eventQueue_,c,a)}function Ms(t,e){Bs(t,"connected",e),!1===e&&Ws(t)}function Fs(t,e){M(e,(e,n)=>{Bs(t,e,n)})}function Bs(t,e,n){const i=new ce("/.info/"+e),r=bn(n);t.infoData_.updateSnapshot(i,r);const s=$r(t.infoSyncTree_,i,r);Ts(t.eventQueue_,i,s)}function Vs(t){return t.nextWriteId_++}function Us(t,e){const n=Rr(t.serverSyncTree_,e);return null!=n?Promise.resolve(n):t.server_.get(e).then(n=>{const i=bn(n).withIndex(e._queryParams.getIndex()),r=$r(t.serverSyncTree_,e._path,i);return xs(t.eventQueue_,e._path,r),Promise.resolve(i)},n=>(Ks(t,"get for query "+Object(s["J"])(e)+" failed: "+n),Promise.reject(new Error(n))))}function zs(t,e,n,i,r){Ks(t,"set",{path:e.toString(),value:n,priority:i});const s=Rs(t),o=bn(n,i),a=Nr(t.serverSyncTree_,e),c=Xr(o,a,s),l=Vs(t),u=Tr(t.serverSyncTree_,e,c,l,!0);Is(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||x("set at "+e+" failed: "+n);const o=Ar(t.serverSyncTree_,l,!s);Ts(t.eventQueue_,e,o),Gs(t,r,n,i)});const h=ro(t,e);Zs(t,h),Ts(t.eventQueue_,h,[])}function Hs(t,e,n,i){Ks(t,"update",{path:e.toString(),value:n});let r=!0;const s=Rs(t),o={};if(M(n,(n,i)=>{r=!1,o[n]=Yr(ge(e,n),bn(i),t.serverSyncTree_,s)}),r)k("update() called with empty data.  Don't do anything."),Gs(t,i,"ok",void 0);else{const r=Vs(t),s=Er(t.serverSyncTree_,e,o,r);Is(t.eventQueue_,s),t.server_.merge(e.toString(),n,(n,s)=>{const o="ok"===n;o||x("update at "+e+" failed: "+n);const a=Ar(t.serverSyncTree_,r,!o),c=a.length>0?Zs(t,e):e;Ts(t.eventQueue_,c,a),Gs(t,i,n,s)}),M(n,n=>{const i=ro(t,ge(e,n));Zs(t,i)}),Ts(t.eventQueue_,e,[])}}function Ws(t){Ks(t,"onDisconnectEvents");const e=Rs(t),n=Fn();Vn(t.onDisconnect_,le(),(i,r)=>{const s=Yr(i,r,t.serverSyncTree_,e);Bn(n,i,s)});let i=[];Vn(n,le(),(e,n)=>{i=i.concat($r(t.serverSyncTree_,e,n));const r=ro(t,e);Zs(t,r)}),t.onDisconnect_=Fn(),Ts(t.eventQueue_,le(),i)}function qs(t){t.persistentConnection_&&t.persistentConnection_.interrupt($s)}function Ks(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),k(n,...e)}function Gs(t,e,n,i){e&&q(()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let r=t;i&&(r+=": "+i);const s=new Error(r);s.code=t,e(s)}})}function Ys(t,e,n){return Nr(t.serverSyncTree_,e,n)||mn.EMPTY_NODE}function Xs(t,e=t.transactionQueueTree_){if(e||io(t,e),ts(e)){const n=eo(t,e);Object(s["f"])(n.length>0,"Sending zero length transaction queue");const i=n.every(t=>0===t.status);i&&Js(t,as(e),n)}else ns(e)&&rs(e,e=>{Xs(t,e)})}function Js(t,e,n){const i=n.map(t=>t.currentWriteId),r=Ys(t,e,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const t=n[u];Object(s["f"])(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const i=be(e,t.path);o=o.updateChild(i,t.currentOutputSnapshotRaw)}const c=o.val(!0),l=e;t.server_.put(l.toString(),c,i=>{Ks(t,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,r=r.concat(Ar(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();io(t,Qr(t.transactionQueueTree_,e)),Xs(t,t.transactionQueueTree_),Ts(t.eventQueue_,e,r);for(let t=0;t<i.length;t++)q(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{x("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Zs(t,e)}},a)}function Zs(t,e){const n=to(t,e),i=as(n),r=eo(t,n);return Qs(t,r,i),i}function Qs(t,e,n){if(0===e.length)return;const i=[];let r=[];const o=e.filter(t=>0===t.status),a=o.map(t=>t.currentWriteId);for(let c=0;c<e.length;c++){const o=e[c],l=be(n,o.path);let u,h=!1;if(Object(s["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Ar(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=js)h=!0,u="maxretry",r=r.concat(Ar(t.serverSyncTree_,o.currentWriteId,!0));else{const n=Ys(t,o.path,a);o.currentInputSnapshot=n;const i=e[c].update(n.val());if(void 0!==i){ys("transaction failed: Data returned ",i,o.path);let e=bn(i);const c="object"===typeof i&&null!=i&&Object(s["k"])(i,".priority");c||(e=e.updatePriority(n.getPriority()));const l=o.currentWriteId,u=Rs(t),h=Xr(e,n,u);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=h,o.currentWriteId=Vs(t),a.splice(a.indexOf(l),1),r=r.concat(Tr(t.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Ar(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(Ar(t.serverSyncTree_,o.currentWriteId,!0))}Ts(t.eventQueue_,n,r),r=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(u),!1,null))))}io(t,t.transactionQueueTree_);for(let s=0;s<i.length;s++)q(i[s]);Xs(t,t.transactionQueueTree_)}function to(t,e){let n,i=t.transactionQueueTree_;n=ue(e);while(null!==n&&void 0===ts(i))i=Qr(i,n),e=de(e),n=ue(e);return i}function eo(t,e){const n=[];return no(t,e,n),n.sort((t,e)=>t.order-e.order),n}function no(t,e,n){const i=ts(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);rs(e,e=>{no(t,e,n)})}function io(t,e){const n=ts(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,es(e,n.length>0?n:void 0)}rs(e,e=>{io(t,e)})}function ro(t,e){const n=as(to(t,e)),i=Qr(t.transactionQueueTree_,e);return os(i,e=>{so(t,e)}),so(t,i),ss(i,e=>{so(t,e)}),n}function so(t,e){const n=ts(e);if(n){const i=[];let r=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(Object(s["f"])(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):(Object(s["f"])(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(Ar(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?es(e,void 0):n.length=o+1,Ts(t.eventQueue_,as(e),r);for(let t=0;t<i.length;t++)q(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let t=n[r];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(i){}e+="/"+t}return e}function ao(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):x(`Invalid query segment '${n}' in query '${t}'`)}return e}const co=function(t,e){const n=lo(t),i=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new lt(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new ce(n.pathString)}},lo=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=oo(t.substring(u,h)));const d=ao(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=i}"ns"in d&&(s=d["ns"])}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return ye(this._path)?null:pe(this._path)}get ref(){return new ho(this._repo,this._path)}get _queryIdentifier(){const t=Rn(this._queryParams),e=R(t);return"{}"===e?"default":e}get _queryObject(){return Rn(this._queryParams)}isEqual(t){if(t=Object(s["r"])(t),!(t instanceof uo))return!1;const e=this._repo===t._repo,n=we(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fe(this._path)}}class ho extends uo{constructor(t,e){super(t,e,new Pn,!1)}get parent(){const t=ve(this._path);return null===t?null:new ho(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class po{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new ce(t),n=mo(this.ref,t);return new po(this._node.getChild(e),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,n)=>t(new po(n,mo(this.ref,e),an)))}hasChild(t){const e=new ce(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fo(t,e){return t=Object(s["r"])(t),t._checkNotDeleted("ref"),void 0!==e?mo(t._root,e):t._root}function mo(t,e){return t=Object(s["r"])(t),null===ue(t._path)?Cs("child","path",e,!1):ws("child","path",e,!1),new ho(t._repo,ge(t._path,e))}function vo(t,e){t=Object(s["r"])(t),ks("push",t._path),gs("push",e,t._path,!0);const n=Ns(t._repo),i=Sn(n),r=mo(t,i),o=mo(t,i);let a;return a=null!=e?yo(o,e).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function go(t){return ks("remove",t._path),yo(t,null)}function yo(t,e){t=Object(s["r"])(t),ks("set",t._path),gs("set",e,t._path,!1);const n=new s["a"];return zs(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bo(t,e){_s("update",e,t._path,!1);const n=new s["a"];return Hs(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function _o(t){return t=Object(s["r"])(t),Us(t._repo,t).then(e=>new po(e,new ho(t._repo,t._path),t._queryParams.getIndex()))}Cr(ho),Ir(ho);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wo="FIREBASE_DATABASE_EMULATOR_HOST",Co={};let ko=!1;function So(e,n,i,r,s){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");let a,c=co(o,s),l=c.repoInfo,u=void 0;"undefined"!==typeof t&&(u=Object({NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyDxbMGWiD2Wr9qy8wrxA4VkI581EgKPj4s",VUE_APP_AUTH_DOMAIN:"advr-consultores.firebaseapp.com",VUE_APP_DATABASE_URL:"https://advr-consultores-default-rtdb.firebaseio.com",VUE_APP_PROJECT_ID:"advr-consultores",VUE_APP_STORAGE_BUCKET:"advr-consultores.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"950650780471",VUE_APP_APP_ID:"1:950650780471:web:6bbc43f41d56abc9fcf8b2",VUE_APP_MEASUREMENT_ID:"G-SRQCGWSDVY",BASE_URL:"/REPO_NAME/"})[wo]),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=co(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new J(J.OWNER):new X(e.name,e.options,n);Ss("Invalid Firebase Database URL",c),ye(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Io(l,e,h,new Y(e.name,i));return new xo(d,e)}function Oo(t,e){const n=Co[e];n&&n[t.key]===t||I(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qs(t),delete n[t.key]}function Io(t,e,n,i){let r=Co[e.name];r||(r={},Co[e.name]=r);let s=r[t.toURLString()];return s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Ps(t,ko,n,i),r[t.toURLString()]=s,s}class xo{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ls(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ho(this._repo,le())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Oo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&I("Cannot call "+t+" on a deleted database.")}}function To(t=Object(i["d"])(),e){return Object(i["b"])(t,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Eo(t){u(i["a"]),Object(i["c"])(new r["a"]("database",(t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return So(n,i,r,e)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,t),Object(i["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},De.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Eo()}).call(this,n("4362"))},5607:function(t,e,n){"use strict";n("7435");var i=n("80d2");const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const c=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=(e.clientWidth-2*s)/2+"px",u=(e.clientHeight-2*s)/2+"px",h=n.center?l:i-s+"px",d=n.center?u:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:l,centerY:u}},l={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=" "+n.class);const{radius:o,scale:a,x:l,y:u,centerX:h,centerY:d}=c(t,e,n),p=2*o+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${l}, ${u}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)},0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)},300)},r)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{l.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},r)}else l.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout(()=>{d(t)}));window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),l.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i["u"].enter&&t.keyCode!==i["u"].space||(f=!0,h(t))}function v(t){f=!1,d(t)}function g(t){!0===f&&(f=!1,d(t))}function y(t,e,n){const i=u(e.value);i||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",v),t.addEventListener("blur",g),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",v),t.removeEventListener("dragstart",d),t.removeEventListener("blur",g)}function _(t,e,n){y(t,e,!1)}function w(t){delete t._ripple,b(t)}function C(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);y(t,e,n)}const k={bind:_,unbind:w,update:C};e["a"]=k},5692:function(t,e,n){var i=n("c430"),r=n("c6cd");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.0",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var i=n("da84"),r=n("f5df"),s=i.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},5803:function(t,e,n){},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return ne})),n.d(e,"b",(function(){return ee})),n.d(e,"c",(function(){return re})),n.d(e,"d",(function(){return ie})),n.d(e,"e",(function(){return te}));var i=n("589b"),r=n("1fd5"),s=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends r["c"]{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new u("unknown",t)}function p(t){return new u("object-not-found","Object '"+t+"' does not exist.")}function f(t){return new u("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",t)}function v(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function g(t){return new u("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new u("canceled","User canceled the upload/download.")}function _(t){return new u("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function C(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function k(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new u("no-download-url","The given file does not have any download URLs.")}function O(t){return new u("invalid-argument",t)}function I(){return new u("app-deleted","The Firebase app was deleted.")}function x(t){return new u("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function T(t,e){return new u("invalid-format","String does not match format '"+t+"': "+e)}function E(t){throw new u("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=A.makeFromUrl(t,e)}catch(i){return new A(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),f={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,v="([^?#]*)",g=new RegExp(`^https?://${m}/${i}/${v}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:c,postModify:r},{regex:p,indices:f,postModify:l},{regex:g,indices:y,postModify:l}];for(let o=0;o<b.length;o++){const e=b[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new A(t,r),e.postModify(n);break}}if(null==n)throw _(t);return n}}class ${constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout(()=>{r=null,t(p,c())},e)}function d(){s&&clearTimeout(s)}function p(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let f=!1;function m(t){f||(f=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function P(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return void 0!==t}function N(t){return"object"===typeof t&&!Array.isArray(t)}function R(t){return"string"===typeof t||t instanceof String}function D(t){return M()&&t instanceof Blob}function M(){return"undefined"!==typeof Blob}function F(t,e,n,i){if(i<e)throw O(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw O(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e,n){let i=e;return null==n&&(i="https://"+e),`${n}://${i}/v0${t}`}function V(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(U||(U={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n,i,r,s,o,a,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===U.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===U.ABORT;return void t(!1,new H(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new H(s,n))})},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());L(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=d();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?I():b();i(t)}else{const t=y();i(t)}};this.canceled_?e(!1,new H(!1,null,!0)):this.backoffId_=j(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class H{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function K(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,i,r,s){const o=V(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return K(c,e),W(c,n),q(c,s),G(c,i),new z(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=X();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(M())return new Blob(t);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Z(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(t,e){this.data=t,this.contentType=e||null}}function nt(t,e){switch(t){case tt.RAW:return new et(it(e));case tt.BASE64:case tt.BASE64URL:return new et(st(t,e));case tt.DATA_URL:return new et(at(e),ct(e))}throw d()}function it(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function rt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw T(tt.DATA_URL,"Malformed data URL.")}return it(e)}function st(t,e){switch(t){case tt.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw T(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case tt.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw T(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Q(e)}catch(r){throw T(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ot{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw T(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=lt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function at(t){const e=new ot(t);return e.base64?st(tt.BASE64,e.rest):rt(e.rest)}function ct(t){const e=new ot(t);return e.contentType}function lt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){let n=0,i="";D(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(D(this.data_)){const n=this.data_,i=Z(n,t,e);return null===i?null:new ut(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ut(n,!0)}}static getBlob(...t){if(M()){const e=t.map(t=>t instanceof ut?t.data_:t);return new ut(J.apply(null,e))}{const e=t.map(t=>R(t)?nt(tt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const i=new Uint8Array(n);let r=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]}),new ut(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){let e;try{e=JSON.parse(t)}catch(n){return null}return N(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function pt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function ft(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return e}class vt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||mt}}let gt=null;function yt(t){return!R(t)||t.length<2?t:ft(t)}function bt(){if(gt)return gt;const t=[];function e(t,e){return yt(e)}t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));const n=new vt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new vt("size");return r.xform=i,t.push(r),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),gt=t,gt}function _t(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new A(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function wt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return _t(i,t),i}function Ct(t,e,n){const i=ht(e);if(null===i)return null;const r=i;return wt(t,r,n)}function kt(t,e,n,i){const r=ht(e);if(null===r)return null;if(!R(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=B(a,n,i),l=V({alt:"media",token:e});return c+l});return c[0]}function St(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){if(!t)throw d()}function xt(t,e){function n(n,i){const r=Ct(t,i,e);return It(null!==r),r}return n}function Tt(t,e){function n(n,i){const r=Ct(t,i,e);return It(null!==r),kt(r,i,t.host,t._protocol)}return n}function Et(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():m():402===e.getStatus()?f(t.bucket):403===e.getStatus()?g(t.path):n,i.serverResponse=n.serverResponse,i}return e}function At(t){const e=Et(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=p(t.path)),r.serverResponse=i.serverResponse,r}return n}function $t(t,e,n){const i=e.fullServerUrl(),r=B(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ot(r,s,Tt(t,n),o);return a.errorHandler=At(e),a}function jt(t,e){const n=e.fullServerUrl(),i=B(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Ot(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=At(e),a}function Pt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Lt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Pt(null,e)),i}function Nt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Lt(e,i,r),u=St(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",p=ut.getBlob(h,i,d);if(null===p)throw k();const f={name:l["fullPath"]},m=B(s,t.host,t._protocol),v="POST",g=t.maxUploadRetryTime,y=new Ot(m,v,xt(t,n),g);return y.urlParams=f,y.headers=o,y.body=p.uploadData(),y.errorHandler=Et(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rt=null;class Dt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,i){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Mt extends Dt{initXhr(){this.xhr_.responseType="text"}}function Ft(){return Rt?Rt():new Mt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t,e){this._service=t,this._location=e instanceof A?e:A.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Bt(t,e)}get root(){const t=new A(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ft(this._location.path)}get storage(){return this._service}get parent(){const t=dt(this._location.path);if(null===t)return null;const e=new A(this._location.bucket,t);return new Bt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function Vt(t,e,n){t._throwIfRoot("uploadBytes");const i=Nt(t.storage,t._location,bt(),new ut(e,!0),n);return t.storage.makeRequestWithTokens(i,Ft).then(e=>({metadata:e,ref:t}))}function Ut(t){t._throwIfRoot("getDownloadURL");const e=$t(t.storage,t._location,bt());return t.storage.makeRequestWithTokens(e,Ft).then(t=>{if(null===t)throw S();return t})}function zt(t){t._throwIfRoot("deleteObject");const e=jt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ft)}function Ht(t,e){const n=pt(t._location.path,e),i=new A(t._location.bucket,n);return new Bt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return/^[A-Za-z]+:\/\//.test(t)}function qt(t,e){return new Bt(t,e)}function Kt(t,e){if(t instanceof Xt){const n=t;if(null==n._bucket)throw C();const i=new Bt(n,n._bucket);return null!=e?Kt(i,e):i}return void 0!==e?Ht(t,e):t}function Gt(t,e){if(e&&Wt(e)){if(t instanceof Xt)return qt(t,e);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return Kt(t,e)}function Yt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:A.makeFromBucketSpec(n,t)}class Xt{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?A.makeFromBucketSpec(i,this._host):Yt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,t):this._bucket=Yt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Bt(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new $(I());{const r=Y(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Jt="@firebase/storage",Zt="0.9.2",Qt="storage";function te(t,e,n){return t=Object(r["r"])(t),Vt(t,e,n)}function ee(t){return t=Object(r["r"])(t),Ut(t)}function ne(t){return t=Object(r["r"])(t),zt(t)}function ie(t,e){return t=Object(r["r"])(t),Gt(t,e)}function re(t=Object(i["d"])(),e){t=Object(r["r"])(t);const n=Object(i["b"])(t,Qt),s=n.getImmediate({identifier:e});return s}function se(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Xt(n,r,s,e,i["a"])}function oe(){Object(i["c"])(new s["a"](Qt,se,"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(Jt,Zt,""),Object(i["f"])(Jt,Zt,"esm2017")}oe()},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return q})),n.d(e,"b",(function(){return U})),n.d(e,"c",(function(){return V})),n.d(e,"d",(function(){return G})),n.d(e,"e",(function(){return K})),n.d(e,"f",(function(){return Y}));var i=n("22e5"),r=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",l="0.7.16",u=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",k="@firebase/installations-compat",S="@firebase/messaging",O="@firebase/messaging-compat",I="@firebase/performance",x="@firebase/performance-compat",T="@firebase/remote-config",E="@firebase/remote-config-compat",A="@firebase/storage",$="@firebase/storage-compat",j="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",N="9.6.6",R="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[f]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[k]:"fire-iid-compat",[S]:"fire-fcm",[O]:"fire-fcm-compat",[I]:"fire-perf",[x]:"fire-perf-compat",[T]:"fire-rc",[E]:"fire-rc-compat",[A]:"fire-gcs",[$]:"fire-gcs-compat",[j]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},M=new Map,F=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t){const e=t.name;if(F.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of M.values())B(n,t);return!0}function U(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new s["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=N;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:R,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw H.create("bad-app-name",{appName:String(r)});const o=M.get(r);if(o){if(Object(s["o"])(t,o.options)&&Object(s["o"])(n,o.config))return o;throw H.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of F.values())a.addComponent(i);const c=new W(t,n,a);return M.set(r,c),c}function G(t=R){const e=M.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function Y(t,e,n){var r;let s=null!==(r=D[t])&&void 0!==r?r:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}V(new i["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){V(new i["a"]("platform-logger",t=>new o(t),"PRIVATE")),Y(c,l,t),Y(c,l,"esm2017"),Y("fire-js","")}X("")},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e");function r(...t){return i["a"].extend({mixins:t})}},5926:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?i:n)(e)}},"59ed":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("0d51"),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a function")}},"5bc1":function(t,e,n){"use strict";var i=n("9d26"),r=n("8336"),s=n("2b0e");e["a"]=s["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:s,data:o}){const a=Object.assign(o,{staticClass:("v-app-bar__nav-icon "+(o.staticClass||"")).trim(),props:{...s,icon:!0},on:n}),c=e().default;return t(r["a"],a,c||[t(i["a"],"$menu")])}})},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5d23":function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return k})),n.d(e,"c",(function(){return S}));var i=n("80d2"),r=n("8860"),s=(n("db42"),n("9d26")),o=n("da13"),a=n("34c3"),c=n("7e2b"),l=n("9d65"),u=n("a9ad"),h=n("f2e7"),d=n("3206"),p=n("5607"),f=n("0789"),m=n("58df");const v=Object(m["a"])(c["a"],l["a"],u["a"],Object(d["a"])("list"),h["a"]);var g=v.extend().extend({name:"v-list-group",directives:{ripple:p["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(s["a"],t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(a["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},Object(i["p"])(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(a["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(f["a"],this.genItems())])}}),y=n("1baa"),b=n("1800"),_=n("8270");const w=Object(i["i"])("v-list-item__action-text","span"),C=Object(i["i"])("v-list-item__content","div"),k=Object(i["i"])("v-list-item__title","div"),S=Object(i["i"])("v-list-item__subtitle","div");r["a"],o["a"],b["a"],_["a"],y["a"],a["a"]},"5e23":function(t,e,n){},"5e77":function(t,e,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},"604c":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("166a");var i=n("8547"),r=n("a452"),s=n("7560"),o=n("58df"),a=n("d9bd");const c=Object(o["a"])(i["a"],r["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some(t=>this.valueComparator(t,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(a["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==n):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find(t=>!t.disabled);if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex(e=>e===t);this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});e["b"]=c.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"605d":function(t,e,n){var i=n("c6b6"),r=n("da84");t.exports="process"==i(r.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var i=n("83ab"),r=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),l=n("d1e7"),u=n("7b0b"),h=n("44ad"),d=Object.assign,p=Object.defineProperty,f=r([].concat);t.exports=!d||o((function(){if(i&&1!==d({b:1},d(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=r}))?function(t,e){var n=u(t),r=arguments.length,o=1,d=c.f,p=l.f;while(r>o){var m,v=h(arguments[o++]),g=d?f(a(v),d(v)):a(v),y=g.length,b=0;while(y>b)m=g[b++],i&&!s(p,v,m)||(n[m]=v[m])}return n}:d},"615b":function(t,e,n){},"61d2":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("4b85");var i=n("2b0e"),r=n("d9f7"),s=n("80d2");const o=["sm","md","lg","xl"],a=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>o.reduce((t,e)=>(t["offset"+Object(s["A"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>o.reduce((t,e)=>(t["order"+Object(s["A"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+="-"+n}return"col"!==t||""!==n&&!0!==n?(i+="-"+n,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach(n=>{const i=e[n],r=h(t,n,i);r&&a.push(r)});const n=a.some(t=>t.startsWith("col-"));a.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(o,a)}return t(e.tag,Object(r["a"])(n,{class:a}),i)}})},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},6547:function(t,e,n){var i=n("e330"),r=n("5926"),s=n("577e"),o=n("1d80"),a=i("".charAt),c=i("".charCodeAt),l=i("".slice),u=function(t){return function(e,n){var i,u,h=s(o(e)),d=r(n),p=h.length;return d<0||d>=p?t?"":void 0:(i=c(h,d),i<55296||i>56319||d+1===p||(u=c(h,d+1))<56320||u>57343?t?a(h,d):i:t?l(h,d,d+2):u-56320+(i-55296<<10)+65536)}};t.exports={codeAt:u(!1),charAt:u(!0)}},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"66ce":function(t,e,n){"use strict";var i=n("51b0");n.d(e,"a",(function(){return i["a"]})),n.d(e,"b",(function(){return i["b"]})),n.d(e,"c",(function(){return i["c"]})),n.d(e,"d",(function(){return i["d"]})),n.d(e,"e",(function(){return i["e"]})),n.d(e,"f",(function(){return i["f"]})),n.d(e,"g",(function(){return i["g"]}))},"68dd":function(t,e,n){},"68ee":function(t,e,n){var i=n("e330"),r=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),l=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=i(d.exec),f=!d.exec(l),m=function(t){if(!s(t))return!1;try{return h(l,u,t),!0}catch(e){return!1}},v=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!p(d,c(t))}catch(e){return!0}};v.sham=!0,t.exports=!h||r((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?v:m},"69f3":function(t,e,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("e330"),l=n("861d"),u=n("9112"),h=n("1a2d"),d=n("c6cd"),p=n("f772"),f=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},b=function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var _=d.state||(d.state=new g),w=c(_.get),C=c(_.has),k=c(_.set);i=function(t,e){if(C(_,t))throw new v(m);return e.facade=t,k(_,t,e),e},r=function(t){return w(_,t)||{}},s=function(t){return C(_,t)}}else{var S=p("state");f[S]=!0,i=function(t,e){if(h(t,S))throw new v(m);return e.facade=t,u(t,S,e),e},r=function(t){return h(t,S)?t[S]:{}},s=function(t){return h(t,S)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:b}},"6b53":function(t,e,n){"use strict";n("36a7");var i=n("24b2"),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"6ca7":function(t,e,n){},"6ece":function(t,e,n){},"6eeb":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,p=String(String).split("String");(t.exports=function(t,e,n,c){var l,h=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:e;r(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==v)&&o(n,"name",v),l=d(n),l.source||(l.source=p.join("string"==typeof v?v:""))),t!==i?(h?!m&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},"713a":function(t,e,n){"use strict";var i=n("8212");e["a"]=i["a"]},"71d9":function(t,e,n){"use strict";n("5e23");var i=n("8dd9"),r=n("adda"),s=n("80d2"),o=n("d9bd");e["a"]=i["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(s["g"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(o["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(s["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(s["g"])(this.computedContentHeight)}},Object(s["p"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(s["g"])(this.extensionHeight)}},Object(s["p"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"741f":function(t,e,n){"use strict";n.d(e,"a",(function(){return mt}));n("bd5a");var i=n("22e5"),r=n("9dbb"),s=n("1fd5"),o=n("589b");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",h="google.c.a.c_id",d="google.c.a.c_l",p="google.c.a.ts",f="google.c.a.e";var m,v;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function y(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(m||(m={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(v||(v={}));const b="fcm_token_details_db",_=5,w="fcm_token_object_Store";async function C(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map(t=>t.name);if(!e.includes(b))return null}let e=null;const n=await Object(r["openDb"])(b,_,async n=>{var i;if(n.oldVersion<2)return;if(!n.objectStoreNames.contains(w))return;const r=n.transaction.objectStore(w),s=await r.index("fcmSenderId").get(t);if(await r.clear(),s)if(2===n.oldVersion){const t=s;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(i=t.createTime)&&void 0!==i?i:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:g(t.vapidKey)}}}else if(3===n.oldVersion){const t=s;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:g(t.auth),p256dh:g(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:g(t.vapidKey)}}}else if(4===n.oldVersion){const t=s;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:g(t.auth),p256dh:g(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:g(t.vapidKey)}}}});return n.close(),await Object(r["deleteDb"])(b),await Object(r["deleteDb"])("fcm_vapid_details_db"),await Object(r["deleteDb"])("undefined"),k(e)?e:null}function k(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="firebase-messaging-database",O=1,I="firebase-messaging-store";let x=null;function T(){return x||(x=Object(r["openDb"])(S,O,t=>{switch(t.oldVersion){case 0:t.createObjectStore(I)}})),x}async function E(t){const e=j(t),n=await T(),i=await n.transaction(I).objectStore(I).get(e);if(i)return i;{const e=await C(t.appConfig.senderId);if(e)return await A(t,e),e}}async function A(t,e){const n=j(t),i=await T(),r=i.transaction(I,"readwrite");return await r.objectStore(I).put(e,n),await r.complete,e}async function $(t){const e=j(t),n=await T(),i=n.transaction(I,"readwrite");await i.objectStore(I).delete(e),await i.complete}function j({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},L=new s["b"]("messaging","Messaging",P);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function N(t,e){const n=await F(t),i=B(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const e=await fetch(M(t.appConfig),r);s=await e.json()}catch(o){throw L.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw L.create("token-subscribe-failed",{errorInfo:t})}if(!s.token)throw L.create("token-subscribe-no-token");return s.token}async function R(t,e){const n=await F(t),i=B(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${M(t.appConfig)}/${e.token}`,r);s=await n.json()}catch(o){throw L.create("token-update-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw L.create("token-update-failed",{errorInfo:t})}if(!s.token)throw L.create("token-update-no-token");return s.token}async function D(t,e){const n=await F(t),i={method:"DELETE",headers:n};try{const n=await fetch(`${M(t.appConfig)}/${e}`,i),r=await n.json();if(r.error){const t=r.error.message;throw L.create("token-unsubscribe-failed",{errorInfo:t})}}catch(r){throw L.create("token-unsubscribe-failed",{errorInfo:r})}}function M({projectId:t}){return`${u}/projects/${t}/registrations`}async function F({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function B({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==l&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=6048e5;async function U(t){const e=await q(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:g(e.getKey("auth")),p256dh:g(e.getKey("p256dh"))},i=await E(t.firebaseDependencies);if(i){if(K(i.subscriptionOptions,n))return Date.now()>=i.createTime+V?H(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await D(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return W(t.firebaseDependencies,n)}return W(t.firebaseDependencies,n)}async function z(t){const e=await E(t.firebaseDependencies);e&&(await D(t.firebaseDependencies,e.token),await $(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function H(t,e){try{const n=await R(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await A(t.firebaseDependencies,i),n}catch(n){throw await z(t),n}}async function W(t,e){const n=await N(t,e),i={token:n,createTime:Date.now(),subscriptionOptions:e};return await A(t,i),i.token}async function q(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:y(e)})}function K(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Y(e,t),X(e,t),J(e,t),e}function Y(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r)}function X(t,e){e.data&&(t.data=e.data)}function J(t,e){if(!e.fcmOptions)return;t.fcmOptions={};const n=e.fcmOptions.link;n&&(t.fcmOptions.link=n);const i=e.fcmOptions.analytics_label;i&&(t.fcmOptions.analyticsLabel=i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return"object"===typeof t&&!!t&&h in t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){if(!t||!t.options)throw et("App Configuration Object");if(!t.name)throw et("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw et(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function et(t){return L.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Q("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Q("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class nt{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=tt(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t){try{t.swRegistration=await navigator.serviceWorker.register(a,{scope:c}),t.swRegistration.update().catch(()=>{})}catch(e){throw L.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){if(e||t.swRegistration||await it(t),e||!t.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw L.create("invalid-sw-registration");t.swRegistration=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=l)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e){if(!navigator)throw L.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw L.create("permission-blocked");return await st(t,null===e||void 0===e?void 0:e.vapidKey),await rt(t,null===e||void 0===e?void 0:e.serviceWorkerRegistration),U(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e,n){const i=ct(e),r=await t.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[h],message_name:n[d],message_time:n[p],message_device_time:Math.floor(Date.now()/1e3)})}function ct(t){switch(t){case v.NOTIFICATION_CLICKED:return"notification_open";case v.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===v.PUSH_RECEIVED&&("function"===typeof t.onMessageHandler?t.onMessageHandler(G(n)):t.onMessageHandler.next(G(n)));const i=n.data;Z(i)&&"1"===i[f]&&await at(t,n.messageType,i)}const ut="@firebase/messaging",ht="0.9.8",dt=t=>{const e=new nt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>lt(e,t)),e},pt=t=>{const e=t.getProvider("messaging").getImmediate(),n={getToken:t=>ot(e,t)};return n};function ft(){Object(o["c"])(new i["a"]("messaging",dt,"PUBLIC")),Object(o["c"])(new i["a"]("messaging-internal",pt,"PRIVATE")),Object(o["f"])(ut,ht),Object(o["f"])(ut,ht,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t,e){return t=Object(s["r"])(t),ot(t,e)}ft()},7435:function(t,e,n){},7496:function(t,e,n){"use strict";n("df86");var i=n("7560"),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var i=n("2b0e");const r=i["a"].extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["a"]=r},"75eb":function(t,e,n){"use strict";var i=n("9d65"),r=n("80d2"),s=n("58df"),o=n("d9bd");function a(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function c(t){t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}e["a"]=Object(s["a"])(i["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:a},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver(n=>{n.some(t=>Array.from(t.removedNodes).includes(this.$el))&&(e.disconnect(),c(t))});e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else c(t)}},methods:{getScopeIdAttrs(){const t=Object(r["n"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(o["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}})},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var i=n("cc12"),r=i("span").classList,s=r&&r.constructor&&r.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"78d7":function(t,e,n){"use strict";var i=n("6b53");e["a"]=i["a"]},7958:function(t,e,n){},"7b0b":function(t,e,n){var i=n("da84"),r=n("1d80"),s=i.Object;t.exports=function(t){return s(r(t))}},"7bc6":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=n("d9bd");n("80d2"),n("8da5");function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map(t=>t+t).join("")),6!==n.length&&Object(i["c"])(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?(Object(i["c"])(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&(Object(i["c"])(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},"7c73":function(t,e,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",p="prototype",f="script",m=u("IE_PROTO"),v=function(){},g=function(t){return d+f+h+t+d+"/"+f+h},y=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=l("iframe"),n="java"+f+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},_=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&i?y(i):b():y(i);var t=o.length;while(t--)delete _[p][o[t]];return _()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[p]=r(t),n=new v,v[p]=null,n[m]=t):n=_(),void 0===e?n:s.f(n,e)}},"7d8f":function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return k}));var i={};n.r(i),n.d(i,"linear",(function(){return s})),n.d(i,"easeInQuad",(function(){return o})),n.d(i,"easeOutQuad",(function(){return a})),n.d(i,"easeInOutQuad",(function(){return c})),n.d(i,"easeInCubic",(function(){return l})),n.d(i,"easeOutCubic",(function(){return u})),n.d(i,"easeInOutCubic",(function(){return h})),n.d(i,"easeInQuart",(function(){return d})),n.d(i,"easeOutQuart",(function(){return p})),n.d(i,"easeInOutQuart",(function(){return f})),n.d(i,"easeInQuint",(function(){return m})),n.d(i,"easeOutQuint",(function(){return v})),n.d(i,"easeInOutQuint",(function(){return g}));var r=n("fff9");const s=t=>t,o=t=>t**2,a=t=>t*(2-t),c=t=>t<.5?2*t**2:(4-2*t)*t-1,l=t=>t**3,u=t=>--t**3+1,h=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,d=t=>t**4,p=t=>1- --t**4,f=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,m=t=>t**5,v=t=>1+--t**5,g=t=>t<.5?16*t**5:1+16*--t**5;function y(t){if("number"===typeof t)return t;let e=w(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${_(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function b(t){const e=w(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${_(t)} instead.`)}function _(t){return null==t?t:t.constructor.name}function w(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function C(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=b(n.container);if(n.appOffset&&C.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=C.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?y(t)-n.offset:y(t)-y(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise(t=>requestAnimationFrame((function e(i){const l=i-s,u=Math.abs(n.duration?Math.min(l/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(u));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===u||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)})))}C.framework={},C.init=()=>{};class k extends r["a"]{constructor(){return super(),C}}k.property="goTo"},"7db0":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(t,e,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),l=n("e163"),u=n("d2bb"),h=n("d44e"),d=n("9112"),p=n("6eeb"),f=n("b622"),m=n("3f8c"),v=n("ae93"),g=o.PROPER,y=o.CONFIGURABLE,b=v.IteratorPrototype,_=v.BUGGY_SAFARI_ITERATORS,w=f("iterator"),C="keys",k="values",S="entries",O=function(){return this};t.exports=function(t,e,n,o,f,v,I){c(n,e,o);var x,T,E,A=function(t){if(t===f&&N)return N;if(!_&&t in P)return P[t];switch(t){case C:return function(){return new n(this,t)};case k:return function(){return new n(this,t)};case S:return function(){return new n(this,t)}}return function(){return new n(this)}},$=e+" Iterator",j=!1,P=t.prototype,L=P[w]||P["@@iterator"]||f&&P[f],N=!_&&L||A(f),R="Array"==e&&P.entries||L;if(R&&(x=l(R.call(new t)),x!==Object.prototype&&x.next&&(s||l(x)===b||(u?u(x,b):a(x[w])||p(x,w,O)),h(x,$,!0,!0),s&&(m[$]=O))),g&&f==k&&L&&L.name!==k&&(!s&&y?d(P,"name",k):(j=!0,N=function(){return r(L,this)})),f)if(T={values:A(k),keys:v?N:A(C),entries:A(S)},I)for(E in T)(_||j||!(E in P))&&p(P,E,T[E]);else i({target:e,proto:!0,forced:_||j},T);return s&&!I||P[w]===N||p(P,w,N,{name:f}),m[e]=N,T}},"7e2b":function(t,e,n){"use strict";var i=n("2b0e");function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["a"]=i["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},"7f9a":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},"80d2":function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"y",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"m",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"n",(function(){return u})),n.d(e,"o",(function(){return h})),n.d(e,"h",(function(){return d})),n.d(e,"r",(function(){return p})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return v})),n.d(e,"g",(function(){return g})),n.d(e,"t",(function(){return y})),n.d(e,"u",(function(){return _})),n.d(e,"z",(function(){return w})),n.d(e,"v",(function(){return C})),n.d(e,"c",(function(){return S})),n.d(e,"A",(function(){return O})),n.d(e,"B",(function(){return I})),n.d(e,"q",(function(){return x})),n.d(e,"p",(function(){return T})),n.d(e,"e",(function(){return E})),n.d(e,"x",(function(){return A})),n.d(e,"d",(function(){return $})),n.d(e,"s",(function(){return j})),n.d(e,"w",(function(){return P})),n.d(e,"f",(function(){return L}));var i=n("2b0e");function r(t,e="div",n){return i["a"].extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(N){console.warn(N)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function c(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function l(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every(n=>l(t[n],e[n]))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c(t,e.split("."),n)):n}function h(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return u(t,e,n);if(Array.isArray(e))return c(t,e,n);if("function"!==typeof e)return n;const i=e(t,n);return"undefined"===typeof i?n:i}function d(t){return Array.from({length:t},(t,e)=>e)}function p(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||p(t.parentNode)}const f={"&":"&amp;","<":"&lt;",">":"&gt;"};function m(t){return t.replace(/[&<>]/g,t=>f[t]||t)}function v(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function g(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function y(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function b(t){return null!==t&&"object"===typeof t}const _=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function w(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n="$vuetify.icons.values."+e.split("$").pop().split(".").pop(),i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function C(t){return Object.keys(t)}const k=/-(\w)/g,S=t=>t.replace(k,(t,e)=>e?e.toUpperCase():"");function O(t){return t.charAt(0).toUpperCase()+t.slice(1)}function I(t){return null!=t?Array.isArray(t)?t:[t]:[]}function x(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function T(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function E(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function A(t,e,n="0"){return t+n.repeat(Math.max(0,e-t.length))}function $(t,e=1){const n=[];let i=0;while(i<t.length)n.push(t.substr(i,e)),i+=e;return n}function j(t,e=!1){const n=e?1024:1e3;if(t<n)return t+" B";const i=e?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(t)>=n&&r<i.length-1)t/=n,++r;return`${t.toFixed(1)} ${i[r]}B`}function P(t={},e={}){for(const n in e){const i=t[n],r=e[n];b(i)&&b(r)?t[n]=P(i,r):t[n]=r}return t}function L(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},8212:function(t,e,n){"use strict";n("3408");var i=n("a9ad"),r=n("24b2"),s=n("a236"),o=n("80d2"),a=n("58df");e["a"]=Object(a["a"])(i["a"],r["a"],s["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(o["g"])(this.size),minWidth:Object(o["g"])(this.size),width:Object(o["g"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"825a":function(t,e,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not an object")}},8270:function(t,e,n){"use strict";var i=n("713a");e["a"]=i["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...i["a"].options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=i["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8336:function(t,e,n){"use strict";n("86cc");var i=n("10d2"),r=(n("8d4f"),n("90a2")),s=n("a9ad"),o=n("80d2"),a=s["a"].extend({name:"v-progress-circular",directives:{intersect:r["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(o["g"])(this.calculatedSize),width:Object(o["g"])(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=a,l=n("4e82"),u=n("f2e7"),h=n("c995"),d=n("fe6c"),p=n("1c87"),f=n("af2b"),m=n("58df"),v=n("d9bd");const g=Object(m["a"])(i["a"],p["a"],d["a"],f["a"],Object(l["a"])("btnToggle"),Object(u["b"])("inputValue"));e["a"]=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p["a"].options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h["a"].options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(v["a"])(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},"83ab":function(t,e,n){var i=n("d039");t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var i=n("a04b"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,s(0,n)):t[o]=n}},8547:function(t,e,n){"use strict";var i=n("2b0e"),r=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["j"]}}})},"861d":function(t,e,n){var i=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},8654:function(t,e,n){"use strict";n("4ff9");var i=n("c37a"),r=(n("e9b1"),n("7560")),s=n("58df"),o=Object(s["a"])(r["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),s=parseInt(n.value,10),o=i?`${s} / ${i}`:String(n.value),a=i&&s>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...Object(r["b"])(e)}},o)}}),a=o,c=n("ba87"),l=n("90a2"),u=n("d9bd"),h=n("2b0e");function d(t){return h["a"].extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){l["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){l["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?Object(u["c"])(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var p=n("297c"),f=n("38cb"),m=n("dc22"),v=n("5607"),g=n("dd89"),y=n("80d2");const b=Object(s["a"])(i["a"],d({onVisible:["onResize","tryAutofocus"]}),p["a"]),_=["color","file","time","date","datetime-local","week","month"];e["a"]=b.extend().extend({name:"v-text-field",directives:{resize:m["a"],ripple:v["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=f["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||_.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&Object(u["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(u["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(u["c"])("shaped should be used with either filled or outlined",this)},mounted(){this.$watch(()=>this.labelValue,this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame(()=>{this.isBooted=!0,requestAnimationFrame(()=>{this.isIntersecting||this.onResize()})})},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick(()=>this.internalValue=null)},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:r}))?t:this.$createElement(a,{props:r})},genControl(){return i["a"].options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(c["a"],t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(y["g"])(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=i["a"].options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=Object(g["a"])(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===y["u"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i["a"].options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=Object(g["a"])(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},"86cc":function(t,e,n){},8860:function(t,e,n){"use strict";n("3ad0");var i=n("8dd9");e["a"]=i["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},8925:function(t,e,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"899c":function(t,e,n){},"8adc":function(t,e,n){},"8b0d":function(t,e,n){},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function i(t,e){for(var n in e)t[n]=e[n];return t}var r=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(r,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var i,r=n||h;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=c(n.shift()),r=n.length>0?c(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(a(e)):i.push(a(e)+"="+a(t)))})),i.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function f(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=y(n,r)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var v=f(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||d;return(n||"/")+s(i)+r}function b(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function w(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}function k(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var f=u[c],m=f&&f.component;return m?(f.configProps&&O(m,o,f.route,f.configProps),a(m,o,r)):a()}var v=l.matched[h],g=v&&v.components[c];if(!v||!g)return u[c]=null,a();u[c]={component:g},o.registerRouteInstance=function(t,e){var n=v.instances[c];(e&&n!==t||!e&&n===t)&&(v.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){v.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==v.instances[c]&&(v.instances[c]=t.componentInstance),k(l)};var y=v.props&&v.props[c];return y&&(i(u[c],{route:l,configProps:y}),O(g,o,l,y)),a(g,o,r)}};function O(t,e,n,r){var s=e.props=I(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function I(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function x(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function T(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function E(t){return t.replace(/\/+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},$=X,j=D,P=M,L=V,N=Y,R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=R.exec(t))){var c=n[0],l=n[1],u=n.index;if(o+=t.slice(s,u),s=u+c.length,l)o+=l[1];else{var h=t[s],d=n[2],p=n[3],f=n[4],m=n[5],v=n[6],g=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===v||"*"===v,_="?"===v||"*"===v,w=n[2]||a,C=f||m;i.push({name:p||r++,prefix:d||"",delimiter:w,optional:_,repeat:b,partial:y,asterisk:!!g,pattern:C?z(C):g?".*":"[^"+U(w)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function M(t,e){return V(D(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",W(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?F:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=s[l.name];if(null==h){if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(A(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?B(h):a(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');r+=l.prefix+u}}else r+=l}return r}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function q(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function K(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(X(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",W(n));return H(s,e)}function G(t,e,n){return Y(D(t,n),e,n)}function Y(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=U(a);else{var c=U(a.prefix),l="(?:"+a.pattern+")";e.push(a),a.repeat&&(l+="(?:"+c+l+")*"),l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",s+=l}}var u=U(n.delimiter||"/"),h=s.slice(-u.length)===u;return i||(s=(h?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+u+"|$)",H(new RegExp("^"+s,W(n)),e)}function X(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?q(t,e):A(t)?K(t,e,n):G(t,e,n)}$.parse=j,$.compile=P,$.tokensToFunction=L,$.tokensToRegExp=N;var J=Object.create(null);function Z(t,e,n){e=e||{};try{var i=J[t]||(J[t]=$.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function Q(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Z(c,a,"path "+e.path)}else 0;return s}var u=T(s.path||""),h=e&&e.path||"/",d=u.path?x(u.path,h,n||s.append):h,p=l(u.query,s.query,r&&r.options.parseQuery),f=s.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var tt,et=[String,Object],nt=[String,Array],it=function(){},rt={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?p:this.exactActiveClass,g=a.redirectedFrom?f(null,Q(a.redirectedFrom),null,n):a;l[v]=b(r,g,this.exactPath),l[m]=this.exact||this.exactPath?l[v]:w(r,g);var y=l[v]?this.ariaCurrentValue:null,_=function(t){st(t)&&(e.replace?n.replace(o,it):n.push(o,it))},C={click:st};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=_})):C[this.event]=_;var k={class:l},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:l[m],isExactActive:l[v]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?t():t("span",{},S)}if("a"===this.tag)k.on=C,k.attrs={href:c,"aria-current":y};else{var O=ot(this.$slots.default);if(O){O.isStatic=!1;var I=O.data=i({},O.data);for(var x in I.on=I.on||{},I.on){var T=I.on[x];x in C&&(I.on[x]=Array.isArray(T)?T:[T])}for(var E in C)E in I.on?I.on[E].push(C[E]):I.on[E]=_;var A=O.data.attrs=i({},O.data.attrs);A.href=c,A["aria-current"]=y}else k.on=C}return t(this.tag,k,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",rt);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ct="undefined"!==typeof window;function lt(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ut(s,o,a,t,r)}));for(var c=0,l=s.length;c<l;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ut(t,e,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},l=dt(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var u={path:l,regex:ht(l,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?E(s+"/"+i.path):void 0;ut(t,e,n,i,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};ut(t,e,n,f,r,u.path||"/")}a&&(n[a]||(n[a]=u))}function ht(t,e){var n=$(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:E(e.path+"/"+t)}function pt(t,e){var n=lt(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){lt(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],i,r,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function c(){return i.map((function(t){return r[t]}))}function l(t,n,o){var a=Q(t,n,!1,e),c=a.name;if(c){var l=s[c];if(!l)return d(null,a);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(l.path,a.params,'named route "'+c+'"'),d(l,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=r[f];if(ft(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,r="function"===typeof i?i(f(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,u=n.query,h=n.hash,p=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){s[a];return l({_normalized:!0,name:a,query:u,hash:h,params:p},void 0,n)}if(c){var m=mt(c,t),v=Z(m,p,'redirect route with path "'+m+'"');return l({_normalized:!0,path:v,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=Z(n,e.params,'aliased route with path "'+n+'"'),r=l({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):f(t,n,i,e)}return{match:l,addRoute:a,getRoutes:c,addRoutes:o}}function ft(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?c(i[r]):i[r])}return!0}function mt(t,e){return x(t,e.parent?e.parent.path:"/",!0)}var vt=ct&&window.performance&&window.performance.now?window.performance:Date;function gt(){return vt.now().toFixed(3)}var yt=gt();function bt(){return yt}function _t(t){return yt=t}var wt=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ot),function(){window.removeEventListener("popstate",Ot)}}function kt(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=It(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){Pt(t,s)})).catch((function(t){0})):Pt(o,s))}))}}function St(){var t=bt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ot(t){St(),t.state&&t.state.key&&_t(t.state.key)}function It(){var t=bt();if(t)return wt[t]}function xt(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function Tt(t){return $t(t.x)||$t(t.y)}function Et(t){return{x:$t(t.x)?t.x:window.pageXOffset,y:$t(t.y)?t.y:window.pageYOffset}}function At(t){return{x:$t(t.x)?t.x:0,y:$t(t.y)?t.y:0}}function $t(t){return"number"===typeof t}var jt=/^#\d/;function Pt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=jt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=At(r),e=xt(i,r)}else Tt(t)&&(e=Et(t))}else n&&Tt(t)&&(e=Et(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Nt(t,e){St();var n=window.history;try{if(e){var r=i({},n.state);r.key=bt(),n.replaceState(r,"",t)}else n.pushState({key:_t(gt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Rt(t){Nt(t,!0)}function Dt(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return zt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Wt(e)+'" via a navigation guard.')}function Bt(t,e){var n=zt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return zt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return zt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var Ht=["params","query","hash"];function Wt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t){return function(e,n,i){var r=!1,s=0,o=null;Yt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var c,l=Qt((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&i()})),u=Qt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=qt(t)?t:new Error(e),i(o))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),r||i()}}function Yt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,i){var r=Yt(t,(function(t,i,r,s){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Xt(i?r.reverse():r)}function re(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return ie(t,"beforeRouteLeave",ae,!0)}function oe(t){return ie(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return ie(t,"beforeRouteEnter",(function(t,e,n,i){return le(t,n,i)}))}function le(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Kt(t,Mt.redirected)&&s===v||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Kt(t)&&qt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(b(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&kt(this.router,r,t,!1),s(Bt(r,t));var c=ne(this.current.matched,t.matched),l=c.updated,u=c.deactivated,h=c.activated,d=[].concat(se(u),this.router.beforeHooks,oe(l),h.map((function(t){return t.beforeEnter})),Gt(h)),p=function(e,n){if(i.pending!==t)return s(Vt(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(Ut(r,t))):qt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ft(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};Dt(d,p,(function(){var n=ce(h),o=n.concat(i.router.resolveHooks);Dt(o,p,(function(){if(i.pending!==t)return s(Vt(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){k(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(Ct());var r=function(){var n=t.current,r=he(t.base);t.current===v&&r===t._startLocation||t.transitionTo(r,(function(t){i&&kt(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Nt(E(i.base+t.fullPath)),kt(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Rt(E(i.base+t.fullPath)),kt(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?Nt(e):Rt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(E(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,i){t.call(this,e,n),i&&pe(this.base)||fe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Lt&&n;i&&this.listeners.push(Ct());var r=function(){var e=t.current;fe()&&t.transitionTo(me(),(function(n){i&&kt(t.router,n,e,!0),Lt||ye(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),kt(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ye(t.fullPath),kt(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ge(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function pe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}function fe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ge(t){Lt?Nt(ve(t)):window.location.hash=t}function ye(t){Lt?Rt(ve(t)):window.location.replace(ve(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Kt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Ce(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function ke(t,e,n){var i="hash"===n?"#"+e:e;return t?E(t+"/"+i):i}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=Lt&&r;s&&"fullPath"in t&&kt(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Ce(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Ce(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Ce(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=Q(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=ke(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,we),_e.install=at,_e.version="3.5.3",_e.isNavigationFailure=Kt,_e.NavigationFailureType=Mt,_e.START_LOCATION=v,ct&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"8ce9":function(t,e,n){},"8d4f":function(t,e,n){},"8da5":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var i=n("80d2");const r=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],s=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],a=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function c(t){const e=Array(3),n=s,o=r;for(let r=0;r<3;++r)e[r]=Math.round(255*Object(i["e"])(n(o[r][0]*t[0]+o[r][1]*t[1]+o[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function l(t){const e=[0,0,0],n=a,i=o,r=n((t>>16&255)/255),s=n((t>>8&255)/255),c=n((t>>0&255)/255);for(let o=0;o<3;++o)e[o]=i[o][0]*r+i[o][1]*s+i[o][2]*c;return e}},"8dd9":function(t,e,n){"use strict";n("25a8");var i=n("7e2b"),r=n("a9ad"),s=n("c995"),o=n("24b2"),a=n("a236"),c=n("7560"),l=n("58df");e["a"]=Object(l["a"])(i["a"],r["a"],s["a"],o["a"],a["a"],c["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8efc":function(t,e,n){},"8ff2":function(t,e,n){},"90a2":function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver((s=[],a)=>{var c;const l=null==(c=t._observe)?void 0:c[n.context._uid];if(!l)return;const u=s.some(t=>t.isIntersecting);!o||i.quiet&&!l.init||i.once&&!u&&!l.init||o(s,a,u),u&&i.once?r(t,e,n):l.init=!0},a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,n){var i;const r=null==(i=t._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e["a"]=s},"90e3":function(t,e,n){var i=n("e330"),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},9112:function(t,e,n){var i=n("83ab"),r=n("9bf2"),s=n("5c6c");t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var i=n("d039"),r=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==u||n!=l&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"95ed":function(t,e,n){},"96cf":function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,s=Object.create(r.prototype),o=new E(i||[]);return s._invoke=O(t,n,o),s}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",p="executing",f="completed",m={};function v(){}function g(){}function y(){}var b={};c(b,s,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(A([])));w&&w!==n&&i.call(w,s)&&(b=w);var C=y.prototype=v.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(r,s,o,a){var c=u(t[r],t,s);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var r;function s(t,i){function s(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(s,s):s()}this._invoke=s}function O(t,e,n){var i=h;return function(r,s){if(i===p)throw new Error("Generator is already running");if(i===f){if("throw"===r)throw s;return $()}n.method=r,n.arg=s;while(1){var o=n.delegate;if(o){var a=I(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?f:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}function I(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var s=r.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function A(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:$}}function $(){return{value:e,done:!0}}return g.prototype=y,c(C,"constructor",y),c(y,"constructor",g),g.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,i,r,s){void 0===s&&(s=Promise);var o=new S(l(e,n,i,r),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(C),c(C,a,"Generator"),c(C,s,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return a.type="throw",a.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:A(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=i}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c}));var i=n("b0af"),r=n("80d2");const s=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),a=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");i["a"]},"9a1f":function(t,e,n){var i=n("da84"),r=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),l=i.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(r(n,t));throw l(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var i=n("da84"),r=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),l=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";e.f=r?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=h(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:p in n?n[p]:i[p],enumerable:d in n?n[d]:i[d],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},"9d65":function(t,e,n){"use strict";var i=n("d9bd"),r=n("2b0e");e["a"]=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(i["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},"9dbb":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function i(t,e,i){var r,s=new Promise((function(s,o){r=t[e].apply(t,i),n(r).then(s,o)}));return s.request=r,s}function r(t,e,n){var r=i(t,e,n);return r.then((function(t){if(t)return new u(t,r.request)}))}function s(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function o(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function a(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})}))}function c(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function l(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function p(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function f(t){this._db=t}function m(t,e,n){var r=i(indexedDB,"open",[t,e]),s=r.request;return s&&(s.onupgradeneeded=function(t){n&&n(new p(s.result,t.oldVersion,s.transaction))}),r.then((function(t){return new f(t)}))}function v(t){return i(indexedDB,"deleteDatabase",[t])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,i=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,i),n(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[h,l].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),i=n[n.length-1],r=this._store||this._index,s=r[t].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,i=[];return new Promise((function(r){n.iterateCursor(t,(function(t){t?(i.push(t.value),void 0===e||i.length!=e?t.continue():r(i)):r(i)}))}))})})),t.openDb=m,t.deleteDb=v,Object.defineProperty(t,"__esModule",{value:!0})}))},"9e29":function(t,e,n){},"9ed3":function(t,e,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,l){var u=e+" Iterator";return t.prototype=r(i,{next:s(+!l,n)}),o(t,u,!1,!0),a[u]=c,t}},a04b:function(t,e,n){var i=n("c04e"),r=n("d9b5");t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},a236:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},a293:function(t,e,n){"use strict";var i=n("dd89");function r(){return!0}function s(t,e,n){if(!t||!1===o(t,n))return!1;const r=Object(i["a"])(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(e),!s.some(e=>e.contains(t.target))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||r;return n(t)}function a(t,e,n,i){const r="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,n)&&setTimeout(()=>{o(t,n)&&r&&r(t)},0)}function c(t,e){const n=Object(i["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const l={inserted(t,e,n){const i=i=>a(i,t,e,n),r=n=>{t._clickOutside.lastMousedownWasOutside=s(n,t,e)};c(t,t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(c(t,e=>{var i;if(!e||null==(i=t._clickOutside)||!i[n.context._uid])return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)}),delete t._clickOutside[n.context._uid])}};e["a"]=l},a434:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),l=n("65f0"),u=n("8418"),h=n("1dde"),d=h("splice"),p=r.TypeError,f=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,i,r,h,d,y,b=c(this),_=a(b),w=s(t,_),C=arguments.length;if(0===C?n=i=0:1===C?(n=0,i=_-w):(n=C-2,i=m(f(o(e),0),_-w)),_+n-i>v)throw p(g);for(r=l(b,i),h=0;h<i;h++)d=w+h,d in b&&u(r,h,b[d]);if(r.length=i,n<i){for(h=w;h<_-i;h++)d=h+i,y=h+n,d in b?b[y]=b[d]:delete b[y];for(h=_;h>_-i+n;h--)delete b[h-1]}else if(n>i)for(h=_-i;h>w;h--)d=h+i-1,y=h+n-1,d in b?b[y]=b[d]:delete b[y];for(h=0;h<n;h++)b[h+w]=arguments[h+2];return b.length=_-i+n,r}})},a452:function(t,e,n){"use strict";var i=n("2b0e");function r(t="value",e="change"){return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e["a"]=s},a4b4:function(t,e,n){var i=n("342f");t.exports=/web0s(?!.*chrome)/i.test(i)},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var i=n("2b0e");function r(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},a797:function(t,e,n){"use strict";n("3c93");var i=n("a9ad"),r=n("7560"),s=n("f2e7"),o=n("58df");e["a"]=Object(o["a"])(i["a"],r["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},a79d:function(t,e,n){"use strict";var i=n("23e7"),r=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(i({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=l(this,a("Promise")),n=c(t);return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!r&&c(s)){var p=a("Promise").prototype["finally"];s.prototype["finally"]!==p&&h(s.prototype,"finally",p,{unsafe:!0})}},a9ad:function(t,e,n){"use strict";var i=n("2b0e"),r=n("d9bd"),s=n("7bc6");e["a"]=i["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(r["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(r["b"])("class must be an object",this),e):(Object(s["d"])(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(r["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(r["b"])("class must be an object",this),e;if(Object(s["d"])(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},ac7c:function(t,e,n){"use strict";n("6ca7"),n("ec29");var i=n("9d26"),r=n("c37a"),s=n("5607"),o=n("2b0e"),a=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),c=n("8547"),l=n("58df");function u(t){t.preventDefault()}var h=Object(l["a"])(r["a"],a,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=r["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...r["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},adda:function(t,e,n){"use strict";n("8efc");var i=n("90a2"),r=n("78d7"),s=n("7560"),o=n("58df"),a=n("d9f7"),c=n("d9bd");const l="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(r["a"],s["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!l||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=r["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=r["a"].options.render.call(this,t),n=Object(a["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:l?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},addb:function(t,e,n){var i=n("4dae"),r=Math.floor,s=function(t,e){var n=t.length,c=r(n/2);return n<8?o(t,e):a(t,s(i(t,0,c),e),s(i(t,c),e),e)},o=function(t,e){var n,i,r=t.length,s=1;while(s<r){i=s,n=t[s];while(i&&e(t[i-1],n)>0)t[i]=t[--i];i!==s++&&(t[i]=n)}return t},a=function(t,e,n,i){var r=e.length,s=n.length,o=0,a=0;while(o<r||a<s)t[o+a]=o<r&&a<s?i(e[o],n[a])<=0?e[o++]:n[a++]:o<r?e[o++]:n[a++];return t};t.exports=s},ade3:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},ae93:function(t,e,n){"use strict";var i,r,s,o=n("d039"),a=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),p=h("iterator"),f=!1;[].keys&&(s=[].keys(),"next"in s?(r=l(l(s)),r!==Object.prototype&&(i=r)):f=!0);var m=void 0==i||o((function(){var t={};return i[p].call(t)!==t}));m?i={}:d&&(i=c(i)),a(i[p])||u(i,p,(function(){return this})),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:f}},aed9:function(t,e,n){var i=n("83ab"),r=n("d039");t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},af2b:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},b041:function(t,e,n){"use strict";var i=n("00ee"),r=n("f5df");t.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},b0af:function(t,e,n){"use strict";n("615b");var i=n("10d2"),r=n("297c"),s=n("1c87"),o=n("58df");e["a"]=Object(o["a"])(r["a"],s["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b0c0:function(t,e,n){var i=n("83ab"),r=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=s(l.exec),h="name";i&&!r&&o(a,h,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var i,r,s,o,a,c,l,u,h=n("da84"),d=n("0366"),p=n("06cf").f,f=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,_=h.document,w=h.process,C=h.Promise,k=p(h,"queueMicrotask"),S=k&&k.value;S||(i=function(){var t,e;y&&(t=w.domain)&&t.exit();while(r){e=r.fn,r=r.next;try{e()}catch(n){throw r?o():s=void 0,n}}s=void 0,t&&t.enter()},m||y||g||!b||!_?!v&&C&&C.resolve?(l=C.resolve(void 0),l.constructor=C,u=d(l.then,l),o=function(){u(i)}):y?o=function(){w.nextTick(i)}:(f=d(f,h),o=function(){f(i)}):(a=!0,c=_.createTextNode(""),new b(i).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=S||function(t){var e={fn:t,next:void 0};s&&(s.next=e),r||(r=e,o()),s=e}},b622:function(t,e,n){var i=n("da84"),r=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;t.exports=function(t){if(!s(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&s(u,t)?l[t]=u[t]:l[t]=c&&h?h(e):d(e)}return l[t]}},b727:function(t,e,n){var i=n("0366"),r=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),l=r([].push),u=function(t){var e=1==t,n=2==t,r=3==t,u=4==t,h=6==t,d=7==t,p=5==t||h;return function(f,m,v,g){for(var y,b,_=o(f),w=s(_),C=i(m,v),k=a(w),S=0,O=g||c,I=e?O(f,k):n||d?O(f,0):void 0;k>S;S++)if((p||S in w)&&(y=w[S],b=C(y,S,_),t))if(e)I[S]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:l(I,y)}else switch(t){case 4:return!1;case 7:l(I,y)}return h?-1:r||u?u:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b810:function(t,e,n){"use strict";var i=n("ce7e");e["a"]=i["a"]},b848:function(t,e,n){"use strict";var i=n("58df");function r(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...r(i.$children))}return e}e["a"]=Object(i["a"])().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},ba0d:function(t,e,n){"use strict";n("9e29");var i=n("c37a"),r=n("0789"),s=n("58df"),o=n("297c"),a=n("a293"),c=n("80d2"),l=n("d9bd");e["a"]=Object(s["a"])(i["a"],o["a"]).extend({name:"v-slider",directives:{ClickOutside:a["a"]},mixins:[o["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",n=this.vertical?"height":"width",i=this.$vuetify.rtl?"auto":"0",r=this.$vuetify.rtl?"0":"auto",s=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:i,[e]:r,[n]:s}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",n="0px",i=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:n,[e]:i}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t}}},beforeMount(){this.internalValue=this.value},mounted(){this.app=document.querySelector("[data-app]")||Object(l["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=Object(c["h"])(this.numTicks+1),n=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",i=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const r=e.map(e=>{const r=[];this.tickLabels[e]&&r.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const s=e*(100/this.numTicks),o=this.$vuetify.rtl?100-this.inputWidth<s:s<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":o},style:{width:t+"px",height:t+"px",[n]:`calc(${s}% - ${t/2}px)`,[i]:`calc(50% - ${t/2}px)`}},r)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},r)},genThumbContainer(t,e,n,i,r,s,o="thumb"){const a=[this.genThumb()],c=this.genThumbLabelContent(t);return this.showThumbLabel&&a.push(this.genThumbLabel(c)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:o,key:o,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":n,"v-slider__thumb-container--focused":i,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:r,blur:s,keydown:this.onKeyDown}}),a)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=Object(c["g"])(this.thumbSize),n=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(r["d"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:n}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let n=this.$vuetify.rtl?100-t:t;return n=this.vertical?100-n:n,{transition:this.trackTransition,[e]:n+"%"}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null!=(e=t.target)&&e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),n="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?n.clientY-(e.top+e.height/2):n.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const n=!c["y"]||{passive:!0,capture:!0},i=!!c["y"]&&{passive:!0},r="touches"in t;this.onMouseMove(t),this.app.addEventListener(r?"touchmove":"mousemove",this.onMouseMove,i),Object(c["a"])(this.app,r?"touchend":"mouseup",this.onSliderMouseUp,n),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!c["y"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(c["j"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",n=this.vertical?"height":"width",i=this.vertical?"clientY":"clientX",{[e]:r,[n]:s}=this.$refs.track.getBoundingClientRect(),o="touches"in t?t.touches[0][i]:t[i];let a=Math.min(Math.max((o-r-this.startOffset)/s,0),1)||0;return this.vertical&&(a=1-a),this.$vuetify.rtl&&(a=1-a),parseFloat(this.min)+a*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:n,pagedown:i,end:r,home:s,left:o,right:a,down:l,up:u}=c["u"];if(![n,i,r,s,o,a,l,u].includes(t.keyCode))return;t.preventDefault();const h=this.stepNumeric||1,d=(this.maxValue-this.minValue)/h;if([o,a,l,u].includes(t.keyCode)){const n=this.$vuetify.rtl?[o,u]:[a,u],i=n.includes(t.keyCode)?1:-1,r=t.shiftKey?3:t.ctrlKey?2:1;e+=i*h*r}else if(t.keyCode===s)e=this.minValue;else if(t.keyCode===r)e=this.maxValue;else{const n=t.keyCode===i?1:-1;e-=n*h*(d>100?d/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),n=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,i=this.minValue%this.stepNumeric,r=Math.round((t-i)/this.stepNumeric)*this.stepNumeric+i;return parseFloat(Math.min(r,this.maxValue).toFixed(n))}}})},ba87:function(t,e,n){"use strict";n("1b2c");var i=n("a9ad"),r=n("7560"),s=n("58df"),o=n("80d2"),a=Object(s["a"])(r["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:s,props:a}=e,c={staticClass:"v-label",class:{"v-label--active":a.value,"v-label--is-disabled":a.disabled,...Object(r["b"])(e)},attrs:{for:a.for,"aria-hidden":!a.for},on:s,style:{left:Object(o["g"])(a.left),right:Object(o["g"])(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(a.focused&&a.color,c),n)}});e["a"]=a},bd0c:function(t,e,n){},bd5a:function(t,e,n){"use strict";var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("9dbb");const a="@firebase/installations",c="0.5.5",l=1e4,u="w:"+c,h="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,f="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},g=new s["b"](f,m,v);function y(t){return t instanceof s["c"]&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:t}){return`${d}/projects/${t}/installations`}function _(t){return{token:t.token,requestStatus:2,expiresIn:O(t.expiresIn),creationTime:Date.now()}}async function w(t,e){const n=await e.json(),i=n.error;return g.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function C({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k(t,{refreshToken:e}){const n=C(t);return n.append("Authorization",I(e)),n}async function S(t){const e=await t();return e.status>=500&&e.status<600?t():e}function O(t){return Number(t.replace("s","000"))}function I(t){return`${h} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(t,{fid:e}){const n=b(t),i=C(t),r={fid:e,authVersion:h,appId:t.appId,sdkVersion:u},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await S(()=>fetch(n,s));if(o.ok){const t=await o.json(),n={fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:_(t.authToken)};return n}throw await w("Create Installation",o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=/^[cdef][\w-]{21}$/,$="";function j(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=P(t);return A.test(n)?n:$}catch(t){return $}}function P(t){const e=E(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Map;function R(t,e){const n=L(t);D(n,e),M(n,e)}function D(t,e){const n=N.get(t);if(n)for(const i of n)i(e)}function M(t,e){const n=B();n&&n.postMessage({key:t,fid:e}),V()}let F=null;function B(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=t=>{D(t.data.key,t.data.fid)}),F}function V(){0===N.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="firebase-installations-database",z=1,H="firebase-installations-store";let W=null;function q(){return W||(W=Object(o["openDb"])(U,z,t=>{switch(t.oldVersion){case 0:t.createObjectStore(H)}})),W}async function K(t,e){const n=L(t),i=await q(),r=i.transaction(H,"readwrite"),s=r.objectStore(H),o=await s.get(n);return await s.put(e,n),await r.complete,o&&o.fid===e.fid||R(t,e.fid),e}async function G(t){const e=L(t),n=await q(),i=n.transaction(H,"readwrite");await i.objectStore(H).delete(e),await i.complete}async function Y(t,e){const n=L(t),i=await q(),r=i.transaction(H,"readwrite"),s=r.objectStore(H),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.complete,!a||o&&o.fid===a.fid||R(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){let e;const n=await Y(t,n=>{const i=J(n),r=Z(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===$?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J(t){const e=t||{fid:j(),registrationStatus:0};return nt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(g.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Q(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}async function Q(t,e){try{const n=await x(t,e);return K(t,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await G(t):await K(t,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await et(t);while(1===e.registrationStatus)await T(100),e=await et(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await X(t);return n||e}return e}function et(t){return Y(t,t=>{if(!t)throw g.create("installation-not-found");return nt(t)})}function nt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt({appConfig:t,platformLoggerProvider:e},n){const i=st(t,n),r=k(t,n),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:u}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await S(()=>fetch(i,a));if(c.ok){const t=await c.json(),e=_(t);return e}throw await w("Generate Auth Token",c)}function st(t,{fid:e}){return`${b(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e=!1){let n;const i=await Y(t.appConfig,i=>{if(!ut(i))throw g.create("not-registered");const r=i.authToken;if(!e&&ht(r))return i;if(1===r.requestStatus)return n=at(t,e),i;{if(!navigator.onLine)throw g.create("app-offline");const e=pt(i);return n=lt(t,e),e}}),r=n?await n:i.authToken;return r}async function at(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await T(100),n=await ct(t.appConfig);const i=n.authToken;return 0===i.requestStatus?ot(t,e):i}function ct(t){return Y(t,t=>{if(!ut(t))throw g.create("not-registered");const e=t.authToken;return ft(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lt(t,e){try{const n=await rt(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,i),n}catch(n){if(!y(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await G(t.appConfig);throw n}}function ut(t){return void 0!==t&&2===t.registrationStatus}function ht(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ft(t){return 1===t.requestStatus&&t.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:i}=await X(e.appConfig);return i?i.catch(console.error):ot(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e=!1){const n=t;await gt(n.appConfig);const i=await ot(n,e);return i.token}async function gt(t){const{registrationPromise:e}=await X(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(t){if(!t||!t.options)throw bt("App Configuration");if(!t.name)throw bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bt(t){return g.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="installations",wt="installations-internal",Ct=t=>{const e=t.getProvider("app").getImmediate(),n=yt(e),r=Object(i["b"])(e,"platform-logger"),s={app:e,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()};return s},kt=t=>{const e=t.getProvider("app").getImmediate(),n=Object(i["b"])(e,_t).getImmediate(),r={getId:()=>mt(n),getToken:t=>vt(n,t)};return r};function St(){Object(i["c"])(new r["a"](_t,Ct,"PUBLIC")),Object(i["c"])(new r["a"](wt,kt,"PRIVATE"))}St(),Object(i["f"])(a,c),Object(i["f"])(a,c,"esm2017")},c04e:function(t,e,n){var i=n("da84"),r=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),l=n("b622"),u=i.TypeError,h=l("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,i=a(t,h);if(i){if(void 0===e&&(e="default"),n=r(i,t,e),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c37a:function(t,e,n){"use strict";n("d191");var i=n("9d26"),r=n("ba87"),s=(n("8ff2"),n("a9ad")),o=n("7560"),a=n("58df"),c=n("80d2"),l=Object(a["a"])(s["a"],o["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(c["p"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=l,h=n("7e2b"),d=n("38cb"),p=n("d9f7");const f=Object(a["a"])(h["a"],d["a"]);var m=f.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const r=this[t+"Icon"],s="click:"+Object(c["t"])(t),o=!(!this.listeners$[s]&&!e),a=Object(p["a"])({attrs:{"aria-label":o?Object(c["t"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(s,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Object(c["t"])(t):void 0},[this.$createElement(i["a"],a,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(c["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(r["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(c["p"])(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e["a"]=m},c430:function(t,e){t.exports=!1},c65b:function(t,e,n){var i=n("40d5"),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},c6a6:function(t,e,n){"use strict";n("2bfd"),n("4ff9"),n("68dd");var i=n("34ef"),r=n("326d"),s=(n("cf36"),n("5607")),o=n("2b0e"),a=n("132d"),c=n("a9ad"),l=n("7560"),u=n("d9f7"),h=n("80d2"),d=o["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:s["a"]},props:{...c["a"].options.props,...l["a"].options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:n,listeners:i}){const r=[];let s=e.offIcon;if(e.indeterminate?s=e.indeterminateIcon:e.value&&(s=e.onIcon),r.push(t(a["a"],c["a"].options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),s)),e.ripple&&!e.disabled){const n=t("div",c["a"].options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));r.push(n)}return t("div",Object(u["a"])(n,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),n.on&&n.on.input&&!e.disabled&&Object(h["B"])(n.on.input).forEach(t=>t(!e.value))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},r)])}}),p=n("b810"),f=n("24e2"),m=n("da13"),v=n("1800"),g=n("5d23"),y=n("8860"),b=n("58df"),_=Object(b["a"])(c["a"],l["a"]).extend({name:"v-select-list",directives:{ripple:s["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(t=>this.getValue(t))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(m["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(v["a"],[this.$createElement(d,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(p["a"],{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(h["k"])(t);const{start:e,middle:n,end:i}=this.getMaskedCharacters(t);return`${Object(h["k"])(e)}${this.genHighlight(n)}${Object(h["k"])(i)}`},genHeader(t){return this.$createElement(f["a"],{props:t},t.header)},genHighlight(t){return`<span class="v-list-item__mask">${Object(h["k"])(t)}</span>`},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),n=t.toLocaleLowerCase().indexOf(e);if(n<0)return{start:t,middle:"",end:""};const i=t.slice(0,n),r=t.slice(n,n+e.length),s=t.slice(n+e.length);return{start:i,middle:r,end:s}},genTile({item:t,index:e,disabled:n=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(n=null!==n?n:this.getDisabled(t));const r={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>n||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:n,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(m["a"],r,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const s=this,o=this.$scopedSlots.item({parent:s,item:t,attrs:{...r.attrs,...r.props},on:r.on});return this.needsTile(o)?this.$createElement(m["a"],r,o):o},genTileContent(t,e=0){const n=this.genFilteredText(this.getText(t));return this.$createElement(g["b"],[this.$createElement(g["d"],{domProps:{innerHTML:n}})])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean(Object(h["o"])(t,this.itemDisabled,!1))},getText(t){return String(Object(h["o"])(t,this.itemText,t))},getValue(t){return Object(h["o"])(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let n=0;n<e;n++){const e=this.items[n];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:n})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:n})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(y["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),w=n("c37a"),C=n("8654"),k=n("8547"),S=n("b848"),O=o["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),I=n("a293"),x=n("d9bd");const T={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},E=Object(b["a"])(C["a"],k["a"],S["a"],O);var A=E.extend().extend({name:"v-select",directives:{ClickOutside:I["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>T},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...C["a"].options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return"list-"+this._uid},computedCounterValue(){const t=this.multiple?this.selectedItems:(this.getText(this.selectedItems[0])||"").toString();return"function"===typeof this.counterValue?this.counterValue(t):t.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(x["b"])("assert: staticList should not be called if slots are used"),this.$createElement(_,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((t,e)=>(t[e.trim()]=!0,t),{})),{...T,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems()},isMenuActive(t){window.setTimeout(()=>this.onMenuActiveChange(t))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))}),this.setSelectedItems()}}},methods:{blur(t){C["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let n=0;n<t.length;++n){const i=t[n];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const r=this.getValue(i);!e.has(r)&&e.set(r,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex(t=>this.valueComparator(this.getValue(t),e))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const n=this.isDisabled||this.getDisabled(t),r=!n&&this.isInteractive;return this.$createElement(i["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&r,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{r&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,n){const i=e===this.selectedIndex&&this.computedColor,r=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":r},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${n?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,n){const i=w["a"].options.methods.genIcon.call(this,t,e,n);return"append"===t&&(i.children[0].data=Object(u["a"])(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=C["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(u["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(h["n"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(h["n"])(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=C["a"].options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter(t=>this.$slots[t]).map(t=>this.$createElement("template",{slot:t},this.$slots[t]));return this.$createElement(_,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(r["a"],{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let n;n=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=n(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return Object(h["o"])(t,this.itemDisabled,!1)},getText(t){return Object(h["o"])(t,this.itemText,t)},getValue(t){return Object(h["o"])(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup)return;const e=1e3,n=performance.now();n-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;const i=this.allItems.findIndex(t=>{const e=(this.getText(t)||"").toString();return e.toLowerCase().startsWith(this.keyboardLookupPrefix)}),r=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?r:this.getValue(r)),this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(i)))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==h["u"].tab)return;const e=t.keyCode,n=this.$refs.menu;return this.$emit("keydown",t),n?(this.isMenuActive&&[h["u"].up,h["u"].down,h["u"].home,h["u"].end,h["u"].enter].includes(e)&&this.$nextTick(()=>{n.changeListIndex(t),this.$emit("update:list-index",n.listIndex)}),[h["u"].enter,h["u"].space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[h["u"].up,h["u"].down,h["u"].home,h["u"].end].includes(e)?this.onUpDown(t):e===h["u"].esc?this.onEscDown(t):e===h["u"].tab?this.onTabDown(t):e===h["u"].space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick(()=>this.isMenuActive=!this.isMenuActive),C["a"].options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.getContent().scrollTop=0)},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const n=e.activeTile;!this.multiple&&n&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),n.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const n=t.keyCode;e.isBooted=!0,window.requestAnimationFrame(()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(n){case h["u"].up:e.prevTile();break;case h["u"].down:e.nextTile();break;case h["u"].home:e.firstTile();break;case h["u"].end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])})},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?e.splice(n,1):e.push(t),this.setValue(e.map(t=>this.returnObject?t:this.getValue(t))),this.$nextTick(()=>{this.$refs.menu&&this.$refs.menu.updateDimensions()}),this.hideSelected)this.setMenuIndex(-1);else{const e=this.allItems.indexOf(t);~e&&(this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(e)))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const n of e){const e=this.allItems.findIndex(t=>this.valueComparator(this.getValue(t),this.getValue(n)));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}});const $={...T,offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=A.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,n)=>n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:A.options.props.menuProps.type,default:()=>$},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...A.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(h["o"])(t,this.itemText),n=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),n)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=A.options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...$,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=A.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const n=e[this.$refs.menu.listIndex];n?this.setMenuIndex(t.findIndex(t=>t===n)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===h["u"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h["u"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h["u"].backspace&&t!==h["u"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const n=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==n)return void(this.selectedIndex=n);const i=this.selectedItems.length,r=t!==i-1?t:t-1,s=this.selectedItems[r];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r},clearableCallback(){this.internalSearch=null,A.options.methods.clearableCallback.call(this)},genInput(){const t=C["a"].options.methods.genInput.call(this);return t.data=Object(u["a"])(t.data,{attrs:{"aria-activedescendant":Object(h["n"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(h["n"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=A.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?A.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[h["u"].home,h["u"].end].includes(e)||A.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){A.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){A.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){A.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,n;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],r=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}})},c6b6:function(t,e,n){var i=n("e330"),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},c6cd:function(t,e,n){var i=n("da84"),r=n("ce4e"),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},c995:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}})},ca84:function(t,e,n){var i=n("e330"),r=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=i([].push);t.exports=function(t,e){var n,i=s(t),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(e.length>l)r(i,n=e[l++])&&(~o(u,n)||c(u,n));return u}},cc12:function(t,e,n){var i=n("da84"),r=n("861d"),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cc20:function(t,e,n){"use strict";n("8adc");var i=n("58df"),r=n("0789"),s=n("9d26"),o=n("a9ad"),a=n("4e82"),c=n("7560"),l=n("f2e7"),u=n("1c87"),h=n("af2b"),d=n("d9bd");e["a"]=Object(i["a"])(o["a"],h["a"],u["a"],c["a"],Object(a["a"])("chipGroup"),Object(l["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(s["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose(){return this.$createElement(s["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,i),e)}})},cca6:function(t,e,n){var i=n("23e7"),r=n("60da");i({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(t,e,n){var i=n("825a"),r=n("861d"),s=n("f069");t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var i=n("da84"),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},ce7e:function(t,e,n){"use strict";n("8ce9");var i=n("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},cf36:function(t,e,n){},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var i=n("da84"),r=n("1626"),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},d10f:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},d191:function(t,e,n){},d1e7:function(t,e,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!i.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:i},d2bb:function(t,e,n){var i=n("e330"),r=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),e?t(n,i):n.__proto__=i,n}}():void 0)},d2e8:function(t,e,n){"use strict";n.d(e,"a",(function(){return bt}));n("bd5a");var i=n("22e5"),r=n("9dbb"),s=n("1fd5"),o=n("589b");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",c="https://fcmregistrations.googleapis.com/v1",l="FCM_MSG",u="google.c.a.c_id",h=3,d=1;var p,f;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(p||(p={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(f||(f={}));const g="fcm_token_details_db",y=5,b="fcm_token_object_Store";async function _(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map(t=>t.name);if(!e.includes(g))return null}let e=null;const n=await Object(r["openDb"])(g,y,async n=>{var i;if(n.oldVersion<2)return;if(!n.objectStoreNames.contains(b))return;const r=n.transaction.objectStore(b),s=await r.index("fcmSenderId").get(t);if(await r.clear(),s)if(2===n.oldVersion){const t=s;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(i=t.createTime)&&void 0!==i?i:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:m(t.vapidKey)}}}else if(3===n.oldVersion){const t=s;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:m(t.auth),p256dh:m(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:m(t.vapidKey)}}}else if(4===n.oldVersion){const t=s;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:m(t.auth),p256dh:m(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:m(t.vapidKey)}}}});return n.close(),await Object(r["deleteDb"])(g),await Object(r["deleteDb"])("fcm_vapid_details_db"),await Object(r["deleteDb"])("undefined"),w(e)?e:null}function w(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="firebase-messaging-database",k=1,S="firebase-messaging-store";let O=null;function I(){return O||(O=Object(r["openDb"])(C,k,t=>{switch(t.oldVersion){case 0:t.createObjectStore(S)}})),O}async function x(t){const e=A(t),n=await I(),i=await n.transaction(S).objectStore(S).get(e);if(i)return i;{const e=await _(t.appConfig.senderId);if(e)return await T(t,e),e}}async function T(t,e){const n=A(t),i=await I(),r=i.transaction(S,"readwrite");return await r.objectStore(S).put(e,n),await r.complete,e}async function E(t){const e=A(t),n=await I(),i=n.transaction(S,"readwrite");await i.objectStore(S).delete(e),await i.complete}function A({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},j=new s["b"]("messaging","Messaging",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function P(t,e){const n=await D(t),i=M(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const e=await fetch(R(t.appConfig),r);s=await e.json()}catch(o){throw j.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw j.create("token-subscribe-failed",{errorInfo:t})}if(!s.token)throw j.create("token-subscribe-no-token");return s.token}async function L(t,e){const n=await D(t),i=M(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${R(t.appConfig)}/${e.token}`,r);s=await n.json()}catch(o){throw j.create("token-update-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw j.create("token-update-failed",{errorInfo:t})}if(!s.token)throw j.create("token-update-no-token");return s.token}async function N(t,e){const n=await D(t),i={method:"DELETE",headers:n};try{const n=await fetch(`${R(t.appConfig)}/${e}`,i),r=await n.json();if(r.error){const t=r.error.message;throw j.create("token-unsubscribe-failed",{errorInfo:t})}}catch(r){throw j.create("token-unsubscribe-failed",{errorInfo:r})}}function R({projectId:t}){return`${c}/projects/${t}/registrations`}async function D({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function M({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==a&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=6048e5;async function B(t){const e=await H(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:m(e.getKey("auth")),p256dh:m(e.getKey("p256dh"))},i=await x(t.firebaseDependencies);if(i){if(W(i.subscriptionOptions,n))return Date.now()>=i.createTime+F?U(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await N(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return z(t.firebaseDependencies,n)}return z(t.firebaseDependencies,n)}async function V(t){const e=await x(t.firebaseDependencies);e&&(await N(t.firebaseDependencies,e.token),await E(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function U(t,e){try{const n=await L(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await T(t.firebaseDependencies,i),n}catch(n){throw await V(t),n}}async function z(t,e){const n=await P(t,e),i={token:n,createTime:Date.now(),subscriptionOptions:e};return await T(t,i),i.token}async function H(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:v(e)})}function W(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return K(e,t),G(e,t),Y(e,t),e}function K(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r)}function G(t,e){e.data&&(t.data=e.data)}function Y(t,e){if(!e.fcmOptions)return;t.fcmOptions={};const n=e.fcmOptions.link;n&&(t.fcmOptions.link=n);const i=e.fcmOptions.analytics_label;i&&(t.fcmOptions.analyticsLabel=i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return"object"===typeof t&&!!t&&u in t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){const n=Q(e,await t.firebaseDependencies.installations.getId());tt(t,n)}function Q(t,e){var n,i;const r={};return t.from&&(r.project_number=t.from),t.fcmMessageId&&(r.message_id=t.fcmMessageId),r.instance_id=e,t.notification?r.message_type=p.DISPLAY_NOTIFICATION.toString():r.message_type=p.DATA_MESSAGE.toString(),r.sdk_platform=h.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(r.collapse_key=t.collapse_key),r.event=d.toString(),(null===(n=t.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(r.analytics_label=null===(i=t.fcmOptions)||void 0===i?void 0:i.analytics_label),r}function tt(t,e){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(e),t.logEvents.push(n)}function et(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){var n,i;const{newSubscription:r}=t;if(!r)return void await V(e);const s=await x(e.firebaseDependencies);await V(e),e.vapidKey=null!==(i=null===(n=null===s||void 0===s?void 0:s.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:a,await B(e)}async function it(t,e){const n=ot(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await Z(e,n);const i=await ut();if(ct(i))return lt(i,n);if(n.notification&&await ht(st(n)),e&&e.onBackgroundMessageHandler){const t=q(n);"function"===typeof e.onBackgroundMessageHandler?e.onBackgroundMessageHandler(t):e.onBackgroundMessageHandler.next(t)}}async function rt(t){var e,n;const i=null===(n=null===(e=t.notification)||void 0===e?void 0:e.data)||void 0===n?void 0:n[l];if(!i)return;if(t.action)return;t.stopImmediatePropagation(),t.notification.close();const r=dt(i);if(!r)return;const s=new URL(r,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await at(s);return a?a=await a.focus():(a=await self.clients.openWindow(r),await J(3e3)),a?(i.messageType=f.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,a.postMessage(i)):void 0}function st(t){const e=Object.assign({},t.notification);return e.data={[l]:t},e}function ot({data:t}){if(!t)return null;try{return t.json()}catch(e){return null}}async function at(t){const e=await ut();for(const n of e){const e=new URL(n.url,self.location.href);if(t.host===e.host)return n}return null}function ct(t){return t.some(t=>"visible"===t.visibilityState&&!t.url.startsWith("chrome-extension://"))}function lt(t,e){e.isFirebaseMessaging=!0,e.messageType=f.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function ut(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function ht(t){var e;const{actions:n}=t,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(e=t.title)&&void 0!==e?e:"",t)}function dt(t){var e,n,i;const r=null!==(n=null===(e=t.fcmOptions)||void 0===e?void 0:e.link)&&void 0!==n?n:null===(i=t.notification)||void 0===i?void 0:i.click_action;return r||(X(t.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(!t||!t.options)throw ft("App Configuration Object");if(!t.name)throw ft("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw ft(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ft(t){return j.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),et("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class mt{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=pt(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=t=>{const e=new mt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",t=>{t.waitUntil(it(t,e))}),self.addEventListener("pushsubscriptionchange",t=>{t.waitUntil(nt(t,e))}),self.addEventListener("notificationclick",t=>{t.waitUntil(rt(t))}),e};function gt(){Object(o["c"])(new i["a"]("messaging-sw",vt,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(){return Object(s["x"])()&&await Object(s["K"])()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t=Object(o["d"])()){return yt().then(t=>{if(!t)throw j.create("unsupported-browser")},t=>{throw j.create("indexed-db-unsupported")}),Object(o["b"])(Object(s["r"])(t),"messaging-sw").getImmediate()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
gt()},d3b7:function(t,e,n){var i=n("00ee"),r=n("6eeb"),s=n("b041");i||r(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var i=n("9bf2").f,r=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!r(t,o)&&i(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var i=n("342f"),r=n("da84");t.exports=/ipad|iphone|ipod/i.test(i)&&void 0!==r.Pebble},d6d6:function(t,e,n){var i=n("da84"),r=i.TypeError;t.exports=function(t,e){if(t<e)throw r("Not enough arguments");return t}},d903:function(t,e,n){"use strict";var i=n("4e82"),r=n("58df"),s=n("d9bd"),o=n("2b0e");const a=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(s["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(s["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(r["a"])(a,Object(i["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},d998:function(t,e,n){var i=n("342f");t.exports=/MSIE|Trident/.test(i)},d9b5:function(t,e,n){var i=n("da84"),r=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&o(e.prototype,c(t))}},d9bd:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l}));var i=n("f309");function r(t,e,n){if(!i["a"].config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return"[Vuetify] "+t+(e?p(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){s(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function c(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function l(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const u=/(?:^|[-_])(\w)/g,h=t=>t.replace(u,t=>t.toUpperCase()).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==e?" at "+r:"")}function p(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`).join("\n")}return`\n\n(found in ${d(t)})`}},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var i=n("80d2");const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[Object(i["c"])(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=Object(i["B"])("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function c(t,e){return e?t&&t?Object(i["B"])(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},da13:function(t,e,n){"use strict";n("61d2");var i=n("a9ad"),r=n("1c87"),s=n("4e82"),o=n("7560"),a=n("f2e7"),c=n("5607"),l=n("80d2"),u=n("d9bd"),h=n("58df");const d=Object(h["a"])(i["a"],r["a"],o["a"],Object(s["a"])("listItemGroup"),Object(a["b"])("inputValue"));e["a"]=d.extend().extend({name:"v-list-item",directives:{Ripple:c["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r["a"].options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&Object(u["e"])("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===l["u"].enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},db42:function(t,e,n){},dc22:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,n){var i;if(null==(i=t._onResize)||!i[n.context._uid])return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const s={inserted:i,unbind:r};e["a"]=s},dc4a:function(t,e,n){var i=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},dd89:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),l=c("iterator"),u=c("toStringTag"),h=o.values,d=function(t,e){if(t){if(t[l]!==h)try{a(t,l,h)}catch(i){t[l]=h}if(t[u]||a(t,u,e),r[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(i){t[n]=o[n]}}};for(var p in r)d(i[p]&&i[p].prototype,p);d(s,"DOMTokenList")},df75:function(t,e,n){var i=n("ca84"),r=n("7839");t.exports=Object.keys||function(t){return i(t,r)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function i(t){"string"!==typeof t&&(t+="");var e,n=0,i=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===i&&(r=!1,i=e+1);return-1===i?"":t.slice(n,i)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,i="/"===o.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===s(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var l=[];for(c=a;c<r.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,i=-1,r=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":t.slice(0,i)},e.basename=function(t,e){var n=i(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,i=-1,r=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!r){n=o+1;break}}return-1===e||-1===i||0===s||1===s&&e===i-1&&e===n+1?"":t.slice(e,i)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},df86:function(t,e,n){},e0c7:function(t,e,n){"use strict";n("0bc6");var i=n("7560"),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e163:function(t,e,n){var i=n("da84"),r=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),l=a("IE_PROTO"),u=i.Object,h=u.prototype;t.exports=c?u.getPrototypeOf:function(t){var e=o(t);if(r(e,l))return e[l];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},e177:function(t,e,n){var i=n("d039");t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var i=n("fc6a"),r=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),l=n("c430"),u=n("83ab"),h="Array Iterator",d=o.set,p=o.getterFor(h);t.exports=c(Array,"Array",(function(t,e){d(this,{type:h,target:i(t),index:0,kind:e})}),(function(){var t=p(this),e=t.target,n=t.kind,i=t.index++;return!e||i>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:e[i],done:!1}:{value:[i,e[i]],done:!1}}),"values");var f=s.Arguments=s.Array;if(r("keys"),r("values"),r("entries"),!l&&u&&"values"!==f.name)try{a(f,"name",{value:"values"})}catch(m){}},e2cc:function(t,e,n){var i=n("6eeb");t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},e330:function(t,e,n){var i=n("40d5"),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},e449:function(t,e,n){"use strict";n("ee6f");var i=n("480e"),r=n("4ad4"),s=n("16b7"),o=n("b848"),a=n("21be"),c=n("fe6c"),l=n("75eb"),u=n("58df"),h=n("80d2");const d=Object(u["a"])(a["a"],Object(c["b"])(["top","right","bottom","left","absolute"]),r["a"],l["a"]);var p=d.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width);let r=0;if(r+=n,(this.left||this.$vuetify.rtl&&!this.right)&&(r-=i-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));r+=this.left?-e:t.width}return this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),r},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(h["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(h["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),n=this.absoluteYOffset+e,i=this.dimensions.activator,r=this.dimensions.content.height,s=t+r,o=n<s;return o&&this.offsetOverflow&&i.top>r?t=this.pageYOffset+(i.top-r):o&&!this.allowOverflow?t=n-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=r["a"].options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t})}}}),f=n("e4d3"),m=n("a236"),v=n("f2e7"),g=n("7560"),y=n("a293"),b=n("dc22"),_=n("d9bd"),w=n("7d8f");const C=Object(u["a"])(o["a"],s["a"],p,f["a"],m["a"],v["a"],g["a"]);e["a"]=C.extend({name:"v-menu",directives:{ClickOutside:y["a"],Resize:b["a"]},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(h["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(h["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(h["g"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(h["g"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(h["g"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(h["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const n=this.$refs.content.scrollTop,i=this.$refs.content.clientHeight;n>e.offsetTop-8?Object(w["b"])(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+i<e.offsetTop+e.clientHeight+8&&Object(w["b"])(e.offsetTop-i+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(_["e"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const n=e.offsetTop-this.calcScrollPosition(),i=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==h["u"].tab){if(t.keyCode===h["u"].down)this.nextTile();else if(t.keyCode===h["u"].up)this.prevTile();else if(t.keyCode===h["u"].end)this.lastTile();else if(t.keyCode===h["u"].home)this.firstTile();else{if(t.keyCode!==h["u"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=p.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{var e;null!=(e=this.$refs.content)&&e.contains(t.relatedTarget)||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===h["u"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[h["u"].up,h["u"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}})},e4d3:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function u(t){i.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var i,r,s,o,a=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("c65b"),d=n("fea9"),p=n("6eeb"),f=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),y=n("59ed"),b=n("1626"),_=n("861d"),w=n("19aa"),C=n("8925"),k=n("2266"),S=n("1c7e"),O=n("4840"),I=n("2cf4").set,x=n("b575"),T=n("cdf9"),E=n("44de"),A=n("f069"),$=n("e667"),j=n("01b4"),P=n("69f3"),L=n("94ca"),N=n("b622"),R=n("6069"),D=n("605d"),M=n("2d00"),F=N("species"),B="Promise",V=P.getterFor(B),U=P.set,z=P.getterFor(B),H=d&&d.prototype,W=d,q=H,K=l.TypeError,G=l.document,Y=l.process,X=A.f,J=X,Z=!!(G&&G.createEvent&&l.dispatchEvent),Q=b(l.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,it=1,rt=2,st=1,ot=2,at=!1,ct=L(B,(function(){var t=C(W),e=t!==String(W);if(!e&&66===M)return!0;if(c&&!q["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new W((function(t){t(1)})),i=function(t){t((function(){}),(function(){}))},r=n.constructor={};return r[F]=i,at=n.then((function(){}))instanceof i,!at||!e&&R&&!Q})),lt=ct||!S((function(t){W.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!_(t)||!b(e=t.then))&&e},ht=function(t,e){var n,i,r,s=e.value,o=e.state==it,a=o?t.ok:t.fail,c=t.resolve,l=t.reject,u=t.domain;try{a?(o||(e.rejection===ot&&vt(e),e.rejection=st),!0===a?n=s:(u&&u.enter(),n=a(s),u&&(u.exit(),r=!0)),n===t.promise?l(K("Promise-chain cycle")):(i=ut(n))?h(i,n,c,l):c(n)):l(s)}catch(d){u&&!r&&u.exit(),l(d)}},dt=function(t,e){t.notified||(t.notified=!0,x((function(){var n,i=t.reactions;while(n=i.get())ht(n,t);t.notified=!1,e&&!t.rejection&&ft(t)})))},pt=function(t,e,n){var i,r;Z?(i=G.createEvent("Event"),i.promise=e,i.reason=n,i.initEvent(t,!1,!0),l.dispatchEvent(i)):i={promise:e,reason:n},!Q&&(r=l["on"+t])?r(i):t===tt&&E("Unhandled promise rejection",n)},ft=function(t){h(I,l,(function(){var e,n=t.facade,i=t.value,r=mt(t);if(r&&(e=$((function(){D?Y.emit("unhandledRejection",i,n):pt(tt,n,i)})),t.rejection=D||mt(t)?ot:st,e.error))throw e.value}))},mt=function(t){return t.rejection!==st&&!t.parent},vt=function(t){h(I,l,(function(){var e=t.facade;D?Y.emit("rejectionHandled",e):pt(et,e,t.value)}))},gt=function(t,e,n){return function(i){t(e,i,n)}},yt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,dt(t,!0))},bt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw K("Promise can't be resolved itself");var i=ut(e);i?x((function(){var n={done:!1};try{h(i,e,gt(bt,n,t),gt(yt,n,t))}catch(r){yt(n,r,t)}})):(t.value=e,t.state=it,dt(t,!1))}catch(r){yt({done:!1},r,t)}}};if(ct&&(W=function(t){w(this,q),y(t),h(i,this);var e=V(this);try{t(gt(bt,e),gt(yt,e))}catch(n){yt(e,n)}},q=W.prototype,i=function(t){U(this,{type:B,done:!1,notified:!1,parent:!1,reactions:new j,rejection:!1,state:nt,value:void 0})},i.prototype=f(q,{then:function(t,e){var n=z(this),i=X(O(this,W));return n.parent=!0,i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=D?Y.domain:void 0,n.state==nt?n.reactions.add(i):x((function(){ht(i,n)})),i.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new i,e=V(t);this.promise=t,this.resolve=gt(bt,e),this.reject=gt(yt,e)},A.f=X=function(t){return t===W||t===s?new r(t):J(t)},!c&&b(d)&&H!==Object.prototype)){o=H.then,at||(p(H,"then",(function(t,e){var n=this;return new W((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),p(H,"catch",q["catch"],{unsafe:!0}));try{delete H.constructor}catch(_t){}m&&m(H,q)}a({global:!0,wrap:!0,forced:ct},{Promise:W}),v(W,B,!1,!0),g(B),s=u(B),a({target:B,stat:!0,forced:ct},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:B,stat:!0,forced:c||ct},{resolve:function(t){return T(c&&this===s?W:this,t)}}),a({target:B,stat:!0,forced:lt},{all:function(t){var e=this,n=X(e),i=n.resolve,r=n.reject,s=$((function(){var n=y(e.resolve),s=[],o=0,a=1;k(t,(function(t){var c=o++,l=!1;a++,h(n,e,t).then((function(t){l||(l=!0,s[c]=t,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(t){var e=this,n=X(e),i=n.reject,r=$((function(){var r=y(e.resolve);k(t,(function(t){h(r,e,t).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e707:function(t,e,n){"use strict";var i=n("1abc"),r=n("80d2"),s=n("2b0e");e["a"]=s["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new i["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(r["r"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(r["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[r["u"].up,r["u"].pageup],n=[r["u"].down,r["u"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(r["f"])(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(r["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e893:function(t,e,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=r(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||c(t,h,l(e,h))}}},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},e95a:function(t,e,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[s]===t)}},e9b1:function(t,e,n){},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return de})),n.d(e,"b",(function(){return fi})),n.d(e,"c",(function(){return me})),n.d(e,"d",(function(){return fe})),n.d(e,"e",(function(){return he})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return ve}));var i=n("1fd5"),r=n("589b");function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${r["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function f(t,...e){return v(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},l()),{[e]:n}),s=new i["b"]("auth","Firebase",r);return s.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw v(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(t){b(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){const n=Object(r["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Object(i["o"])(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function k(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||Object(i["u"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i["y"])()||Object(i["A"])()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function N(t,e,n,r,s={}){return R(t,s,async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=Object(i["E"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function R(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},j),e);try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw B(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw B(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof i["c"])throw s;p(t,"network-request-failed")}}async function D(t,e,n,i,r={}){const s=await N(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?A(t.config,r):`${t.config.apiScheme}://${r}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(f(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=f(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e){return N(t,"POST","/v1/accounts:delete",e)}async function U(t,e){return N(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=Object(i["r"])(t),r=await n.getIdToken(e),s=q(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:z(W(s.auth_time)),issuedAtTime:z(W(s.iat)),expirationTime:z(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(t){return 1e3*Number(t)}function q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i["i"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function K(t){const e=q(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i["c"]&&Y(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){var e;const n=t.auth,i=await t.getIdToken(),r=await G(t,U(n,{idToken:i}));g(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Q(t){const e=Object(i["r"])(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await R(t,{},async()=>{const n=Object(i["E"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=M(t,r,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new it;return n&&(g("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(g("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(g("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,V(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:C,stsTokenManager:k}=e;g(b&&k,t,"internal-error");const S=it.fromJSON(this.name,k);g("string"===typeof b,t,"internal-error"),rt(u,t.name),rt(h,t.name),g("boolean"===typeof _,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(p,t.name),rt(f,t.name),rt(m,t.name),rt(v,t.name),rt(y,t.name);const O=new st({uid:b,auth:t,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:v,lastLoginAt:y});return C&&Array.isArray(C)&&(O.providerData=C.map(t=>Object.assign({},t))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(t,e,n=!1){const i=new it;i.updateFromServerResponse(e);const r=new st({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Z(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ct(this.userKey,i.apiKey,r),this.fullPersistenceKey=ct("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(w(at),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=i[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=st._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(s)}catch(c){}})),new lt(r,t,n)):new lt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(i["s"])()){return/firefox\//i.test(t)}function dt(t=Object(i["s"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=Object(i["s"])()){return/crios\//i.test(t)}function ft(t=Object(i["s"])()){return/iemobile/i.test(t)}function mt(t=Object(i["s"])()){return/android/i.test(t)}function vt(t=Object(i["s"])()){return/blackberry/i.test(t)}function gt(t=Object(i["s"])()){return/webos/i.test(t)}function yt(t=Object(i["s"])()){return/iphone|ipad|ipod/i.test(t)}function bt(t=Object(i["s"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return Object(i["w"])()&&10===document.documentMode}function wt(t=Object(i["s"])()){return yt(t)||mt(t)||gt(t)||vt(t)||/windows phone/i.test(t)||ft(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=ut(Object(i["s"])());break;case"Worker":n=`${ut(Object(i["s"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Z(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i["r"])(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Ot(t){return Object(i["r"])(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i["m"])(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return N(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}async function At(t,e){return N(t,"POST","/v1/accounts:sendOobCode",L(t,e))}async function $t(t,e){return At(t,e)}async function jt(t,e){return At(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Lt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends xt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Nt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Nt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Et(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Tt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="http://localhost";class Mt extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Mt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:Dt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(i["E"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return N(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function Bt(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Vt(t,e){const n=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw B(t,"account-exists-with-different-credential",n);return n}const Ut={["USER_NOT_FOUND"]:"user-not-found"};async function zt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Ut)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends xt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ht({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ht({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Bt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Vt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return zt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Ht({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qt(t){const e=Object(i["F"])(Object(i["q"])(t))["link"],n=e?Object(i["F"])(Object(i["q"])(e))["deep_link_id"]:null,r=Object(i["F"])(Object(i["q"])(t))["deep_link_id"],s=r?Object(i["F"])(Object(i["q"])(r))["link"]:null;return s||r||n||e||t}class Kt{constructor(t){var e,n,r,s,o,a;const c=Object(i["F"])(Object(i["q"])(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Wt(null!==(r=c["mode"])&&void 0!==r?r:null);g(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=qt(t);try{return new Kt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(t,e){return Nt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Kt.parseLink(e);return g(n,"argument-error"),Nt._fromEmailAndCode(t,n.code,n.tenantId)}}Gt.PROVIDER_ID="password",Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Yt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Xt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch(e){return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends Xt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Zt.credential(e,n)}catch(i){return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com",Zt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Xt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch(e){return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com",Qt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Xt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return te.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(t,e){return D(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te.TWITTER_SIGN_IN_METHOD="twitter.com",te.PROVIDER_ID="twitter.com";class ne{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await st._fromIdTokenResponse(t,n,i),s=ie(n),o=new ne({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ie(n);return new ne({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ie(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends i["c"]{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,re.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new re(t,e,n,i)}}function se(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw re._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const i=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ne._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ae(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await G(t,se(i,r,e,t),n);g(s.idToken,i,"internal-error");const o=q(s.idToken);g(o,i,"internal-error");const{sub:a}=o;return g(t.uid===a,i,"user-mismatch"),ne._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e,n=!1){const i="signIn",r=await se(t,i,e),s=await ne._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function le(t,e){return ce(Ot(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e,n){var i;g((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),g("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n){const r=Object(i["r"])(t),s={requestType:"PASSWORD_RESET",email:e};n&&ue(r,s,n),await jt(r,s)}async function de(t,e,n){const i=Ot(t),r=await ee(i,{returnSecureToken:!0,email:e,password:n}),s=await ne._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function pe(t,e,n){return le(Object(i["r"])(t),Gt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e){const n=Object(i["r"])(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&ue(n.auth,s,e);const{email:o}=await $t(n.auth,s);o!==t.email&&await t.reload()}function me(t,e,n,r){return Object(i["r"])(t).onAuthStateChanged(e,n,r)}function ve(t){return Object(i["r"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function ye(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const be="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(be,"1"),this.storage.removeItem(be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){const t=Object(i["s"])();return dt(t)||yt(t)}const Ce=1e3,ke=10;class Se extends _e{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=we()&&Ct(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);_t()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ke):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Ce)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Se.type="LOCAL";const Oe=Se;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends _e{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ie.type="SESSION";const xe=Ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Ee(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async t=>t(e.origin,r)),a=await Te(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.receivers=[];class $e{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Ae("",20);i.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function Pe(t){je().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return"undefined"!==typeof je()["WorkerGlobalScope"]&&"function"===typeof je()["importScripts"]}async function Ne(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Re(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function De(){return Le()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="firebaseLocalStorageDb",Fe=1,Be="firebaseLocalStorage",Ve="fbase_key";class Ue{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ze(t,e){return t.transaction([Be],e?"readwrite":"readonly").objectStore(Be)}function He(){const t=indexedDB.deleteDatabase(Me);return new Ue(t).toPromise()}function We(){const t=indexedDB.open(Me,Fe);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Be,{keyPath:Ve})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Be)?e(n):(n.close(),await He(),e(await We()))})})}async function qe(t,e,n){const i=ze(t,!0).put({[Ve]:e,value:n});return new Ue(i).toPromise()}async function Ke(t,e){const n=ze(t,!1).get(e),i=await new Ue(n).toPromise();return void 0===i?null:i.value}function Ge(t,e){const n=ze(t,!0).delete(e);return new Ue(n).toPromise()}const Ye=800,Xe=3;class Je{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await We()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Xe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Le()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ee._getInstance(De()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ne(),!this.activeServiceWorker)return;this.sender=new $e(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Re()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await We();return await qe(t,be,"1"),await Ge(t,be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qe(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Ke(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ge(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ze(t,!1).getAll();return new Ue(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ye)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Je.type="LOCAL";const Ze=Je;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function tn(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function nn(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=f("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",en().appendChild(i)})}function rn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rn("rcb"),new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function on(t,e,n){var i;const r=await n.verify();try{let s;if(g("string"===typeof r,t,"argument-error"),g(n.type===sn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){g("enroll"===e.type,t,"internal-error");const n=await ge(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await Qe(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ft(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(t){this.providerId=an.PROVIDER_ID,this.auth=Ot(t)}verifyPhoneNumber(t,e){return on(this.auth,t,Object(i["r"])(e))}static credential(t,e){return Ht._fromVerification(t,e)}static credentialFromResult(t){const e=t;return an.credentialFromTaggedObject(e)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ht._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.PROVIDER_ID="phone",an.PHONE_SIGN_IN_METHOD="phone";class ln extends xt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function un(t){return ce(t.auth,new ln(t),t.bypassAuthState)}function hn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ae(n,new ln(t),t.bypassAuthState)}async function dn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),oe(n,new ln(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return un;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return hn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new E(2e3,1e4);class mn extends pn{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Ae();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(f(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,fn.get())};t()}}mn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="pendingRedirect",gn=new Map;class yn extends pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=gn.get(this.auth._key());if(!t){try{const e=await bn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}gn.set(this.auth._key(),t)}return this.bypassAuthState||gn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bn(t,e){const n=wn(e),i=_n(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function _n(t){return w(t._redirectPersistence)}function wn(t){return ct(vn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e,n=!1){const i=Ot(t),r=cn(i,e),s=new yn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=6e5;class Sn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!In(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(f(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(t))}saveEventToCache(t){this.cachedEventUids.add(On(t)),this.lastProcessedEventTime=Date.now()}}function On(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function In({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(t,e={}){return N(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,An=/^https?/;async function $n(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tn(t);for(const i of e)try{if(jn(i))return}catch(n){}p(t,"unauthorized-domain")}function jn(t){const e=S(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!An.test(n))return!1;if(En.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new E(3e4,6e4);function Ln(){const t=je().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Nn(t){return new Promise((e,n)=>{var i,r,s;function o(){Ln(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(f(t,"network-request-failed"))},timeout:Pn.get()})}if(null===(r=null===(i=je().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=je().gapi)||void 0===s?void 0:s.load)){const e=rn("iframefcb");return je()[e]=()=>{gapi.load?o():n(f(t,"network-request-failed"))},nn("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw Rn=null,t})}let Rn=null;function Dn(t){return Rn=Rn||Nn(t),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new E(5e3,15e3),Fn="__/auth/iframe",Bn="emulator/auth/iframe",Vn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,Bn):`https://${t.config.authDomain}/${Fn}`,s={apiKey:e.apiKey,appName:t.name,v:r["a"]},o=Un.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["E"])(s).slice(1)}`}async function Hn(t){const e=await Dn(t),n=je().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:zn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vn,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=f(t,"network-request-failed"),s=je().setTimeout(()=>{i(r)},Mn.get());function o(){je().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Kn=600,Gn="_blank",Yn="http://localhost";class Xn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Jn(t,e,n,r=qn,s=Kn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Wn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i["s"])().toLowerCase();n&&(c=pt(u)?Gn:n),ht(u)&&(e=e||Yn,l.scrollbars="yes");const h=Object.entries(l).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(bt(u)&&"_self"!==c)return Zn(e||"",c),new Xn(null);const d=window.open(e||"",c,h);g(d,t,"popup-blocked");try{d.focus()}catch(p){}return new Xn(d)}function Zn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="__/auth/handler",ti="emulator/auth/handler";function ei(t,e,n,s,o,a){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r["a"],eventId:o};if(e instanceof Yt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i["v"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Xt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${ni(t)}?${Object(i["E"])(l).slice(1)}`}function ni({config:t}){return t.emulator?A(t,ti):`https://${t.authDomain}/${Qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="webStorageSupport";class ri{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xe,this._completeRedirectFn=Cn}async _openPopup(t,e,n,i){var r;b(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=ei(t,e,n,S(),i);return Jn(t,s,Ae())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Pe(ei(t,e,n,S(),i)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Hn(t),n=new Sn(t);return e.register("authEvent",e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ii,{type:ii},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ii];void 0!==r&&e(!!r),p(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=$n(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const si=ri;class oi{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ai extends oi{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ai(t)}_finalizeEnroll(t,e,n){return ye(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return tn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ci{constructor(){}static assertion(t){return ai._fromCredential(t)}}ci.FACTOR_ID="phone";var li="@firebase/auth",ui="0.19.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pi(t){Object(r["c"])(new a["a"]("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(e=>{g(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},o=new St(e,i);return k(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()})),Object(r["c"])(new a["a"]("auth-internal",t=>{const e=Ot(t.getProvider("auth").getImmediate());return(t=>new hi(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["f"])(li,ui,di(t)),Object(r["f"])(li,ui,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t=Object(r["d"])()){const e=Object(r["b"])(t,"auth");return e.isInitialized()?e.getImmediate():C(t,{popupRedirectResolver:si,persistence:[Ze,Oe,xe]})}pi("Browser")},ec29:function(t,e,n){},ee6f:function(t,e,n){},f069:function(t,e,n){"use strict";var i=n("59ed"),r=function(t){var e,n;this.promise=new t((function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i})),this.resolve=i(e),this.reject=i(n)};t.exports.f=function(t){return new r(t)}},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var i=n("2b0e");function r(t="value",e="input"){return i["a"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e["a"]=s},f309:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var i=n("2b0e"),r=n("d9bd");function s(t,e={}){if(s.installed)return;s.installed=!0,i["a"]!==t&&Object(r["b"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},o=e.directives||{};for(const i in o){const e=o[i];t.directive(i,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}n("95ed");var o={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:o},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var c=n("80d2"),l=n("fff9");class u extends l["a"]{constructor(t,e){super();const n=Object(c["w"])({},a),{userPreset:i}=e,{preset:s={},...o}=i;null!=s.preset&&Object(r["c"])("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=Object(c["w"])(Object(c["w"])(n,s),o)}}u.property="presets";class h extends l["a"]{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce((t,e)=>t+e,0)}}h.property="application";class d extends l["a"]{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[d.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},l=c[this.name],u=c[this.mobileBreakpoint];this.mobile=l<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";var p=n("7d8f");const f={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var m=f;const v={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var g=v;const y={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var b=y;const _={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var w=_;const C={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var k=C;function S(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var O=S("font-awesome-icon",w),I=Object.freeze({mdiSvg:m,md:g,mdi:b,fa:w,fa4:k,faSvg:O});class x extends l["a"]{constructor(t){super();const{iconfont:e,values:n,component:i}=t[x.property];this.component=i,this.iconfont=e,this.values=Object(c["w"])(I[e],n)}}x.property="icons";const T="$vuetify.",E=Symbol("Lang fallback");function A(t,e,n=!1,i){const s=e.replace(T,"");let o=Object(c["n"])(t,s,E);return o===E&&(n?(Object(r["b"])(`Translation key "${s}" not found in fallback`),o=e):(Object(r["c"])(`Translation key "${s}" not found, falling back to default`),o=A(i,e,!0,i))),o}class $ extends l["a"]{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[$.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return A(e,t,!1,n)}t(t,...e){return t.startsWith(T)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,(t,n)=>String(e[+n]))}}$.property="lang";var j=n("7bc6"),P=n("8da5");const L=.20689655172413793,N=t=>t>L**3?Math.cbrt(t):t/(3*L**2)+4/29,R=t=>t>L?t**3:3*L**2*(t-4/29);function D(t){const e=N,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function M(t){const e=R,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function F(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=Object(j["a"])(r)):o[i]="object"===typeof r?F(r,!0,n):W(i,Object(j["b"])(r)):o[i]={base:Object(j["c"])(Object(j["b"])(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const B=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,V=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},U=(t,e="base")=>`--v-${t}-${e}`,z=(t,e="base")=>`var(${U(t,e)})`;function H(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?z("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${U("anchor")}: ${n};\n`);for(let l=0;l<r.length;++l){const n=r[l],i=t[n];o+=B(n,e?z(n):i.base),e&&(s+=`  ${U(n)}: ${i.base};\n`);const a=Object(c["v"])(i);for(let t=0;t<a.length;++t){const r=a[t],c=i[r];"base"!==r&&(o+=V(n,r,e?z(n,r):c),e&&(s+=`  ${U(n,r)}: ${c};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function W(t,e){const n={base:Object(j["c"])(e)};for(let i=5;i>0;--i)n["lighten"+i]=Object(j["c"])(q(e,i));for(let i=1;i<=4;++i)n["darken"+i]=Object(j["c"])(K(e,i));return n}function q(t,e){const n=D(P["b"](t));return n[0]=n[0]+10*e,P["a"](M(n))}function K(t,e){const n=D(P["b"](t));return n[0]=n[0]-10*e,P["a"](M(n))}class G extends l["a"]{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[G.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick(()=>{this.applyVueMeta23()});const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find(t=>"vuetify-theme-stylesheet"===t.id);return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",()=>{const e=i["a"].observable({themes:this.themes});this.unwatch=t.$watch(()=>e.themes,()=>this.applyTheme(),{deep:!0})}),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=H(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return F(this.currentTheme||{},void 0,Object(c["m"])(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}G.property="theme";class Y{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(u),this.use(h),this.use(d),this.use(p["a"]),this.use(x),this.use($),this.use(G)}init(t,e){this.installed.forEach(n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)}),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}Y.install=s,Y.installed=!1,Y.version="2.6.3",Y.config={silent:!1}},f36a:function(t,e,n){var i=n("e330");t.exports=i([].slice)},f5df:function(t,e,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),l=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=l(t),c))?n:u?o(e):"Object"==(i=o(e))&&s(e.callee)?"Arguments":i}},f6c4:function(t,e,n){"use strict";n("bd0c");var i=n("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:n+"px",paddingBottom:i+r+s+"px",paddingLeft:o+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},f772:function(t,e,n){var i=n("5692"),r=n("90e3"),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},f774:function(t,e,n){"use strict";n("7958");var i=n("adda"),r=n("3a66"),s=n("a9ad"),o=n("b848"),a=n("d9bd"),c=n("2b0e"),l=c["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?e<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(a["d"])("mobile-break-point","mobile-breakpoint",this)}}),u=n("e707"),h=n("d10f"),d=n("7560"),p=n("a293"),f=n("dc22"),m=n("80d2");const v=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function g(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function y(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),v(e)}function b(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function _(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>g(t,e),touchend:t=>y(t,e),touchmove:t=>b(t,e)}}function w(t,e,n){const i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(!r)return;const o=_(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,Object(m["v"])(o).forEach(t=>{r.addEventListener(t,o[t],s)})}function C(t,e,n){const i=e.value.parent?t.parentElement:t;if(!i||!i._touchHandlers)return;const r=i._touchHandlers[n.context._uid];Object(m["v"])(r).forEach(t=>{i.removeEventListener(t,r[t])}),delete i._touchHandlers[n.context._uid]}const k={inserted:w,unbind:C};var S=k,O=n("58df");const I=Object(O["a"])(Object(r["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),s["a"],o["a"],l,u["a"],h["a"],d["a"]);e["a"]=I.extend({name:"v-navigation-drawer",directives:{ClickOutside:p["a"],Resize:f["a"],Touch:S},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&l.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:Object(m["g"])(this.height),top:this.isBottom?"auto":Object(m["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(m["g"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(m["g"])(this.computedTransform,"%")})`,width:Object(m["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=Object(m["p"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__"+t},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(m["p"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("23cb"),l=n("07fa"),u=n("fc6a"),h=n("8418"),d=n("b622"),p=n("1dde"),f=n("f36a"),m=p("slice"),v=d("species"),g=r.Array,y=Math.max;i({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var n,i,r,d=u(this),p=l(d),m=c(t,p),b=c(void 0===e?p:e,p);if(s(d)&&(n=d.constructor,o(n)&&(n===g||s(n.prototype))?n=void 0:a(n)&&(n=n[v],null===n&&(n=void 0)),n===g||void 0===n))return f(d,m,b);for(i=new(void 0===n?g:n)(y(b-m,0)),r=0;m<b;m++,r++)m in d&&h(i,r,d[m]);return i.length=r,i}})},fc6a:function(t,e,n){var i=n("44ad"),r=n("1d80");t.exports=function(t){return i(r(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var i=n("4930");t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe6c:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n("2b0e"),r=n("80d2");const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i["a"].extend({name:"positionable",props:t.length?Object(r["l"])(s,t):s})}e["a"]=o()},fea9:function(t,e,n){var i=n("da84");t.exports=i.Promise},ff44:function(t,e,n){},fff9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(){this.framework={}}init(t,e){}}}}]);
//# sourceMappingURL=chunk-vendors.5d6a0113.js.map