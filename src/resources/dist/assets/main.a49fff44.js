const I="modulepreload",V=function(e){return"/dist/"+e},S={},P=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=V(o),o in S)return;S[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":I,c||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),c)return new Promise((u,i)=>{s.addEventListener("load",u),s.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function k(){}function M(e){return e()}function j(){return Object.create(null)}function x(e){e.forEach(M)}function z(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function J(e,t,n){const r=K(e);if(!r.getElementById(t)){const o=f("style");o.id=t,o.textContent=n,Q(r,o)}}function K(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Q(e,t){_(e.head||e,t)}function b(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function X(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function $(){return U(" ")}function Y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function te(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let A;function v(e){A=e}const y=[],N=[],C=[],R=[],ne=Promise.resolve();let q=!1;function re(){q||(q=!0,ne.then(H))}function L(e){C.push(e)}const E=new Set;let w=0;function H(){const e=A;do{for(;w<y.length;){const t=y[w];w++,v(t),oe(t.$$)}for(v(null),y.length=0,w=0;N.length;)N.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];E.has(n)||(E.add(n),n())}C.length=0}while(y.length);for(;R.length;)R.pop()();q=!1,E.clear(),v(e)}function oe(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const le=new Set;function se(e,t){e&&e.i&&(le.delete(e),e.i(t))}function ce(e,t,n,r){const{fragment:o,on_mount:c,on_destroy:l,after_update:s}=e.$$;o&&o.m(t,n),r||L(()=>{const u=c.map(M).filter(z);l?l.push(...u):x(u),e.$$.on_mount=[]}),s.forEach(L)}function ie(e,t){const n=e.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(y.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,r,o,c,l,s=[-1]){const u=A;v(e);const i=e.$$={fragment:null,ctx:null,props:c,update:k,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:j(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};l&&l(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(d,m,...p)=>{const O=p.length?p[0]:m;return i.ctx&&o(i.ctx[d],i.ctx[d]=O)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](O),g&&ue(e,d)),m}):[],i.update(),g=!0,x(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const d=Z(t.target);i.fragment&&i.fragment.l(d),d.forEach(h)}else i.fragment&&i.fragment.c();t.intro&&se(e.$$.fragment),ce(e,t.target,t.anchor,t.customElement),H()}v(u)}class fe{$destroy(){ie(this,1),this.$destroy=k}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const T=document.createRange(),de=T.createContextualFragment.bind(T),me=(e,t={},n=!1)=>{const r=de(e).firstChild;return r?(Object.keys(t).forEach(o=>{r.setAttribute(o,t[o])}),n?r:r.outerHTML):""},_e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"/></svg>
`;function pe(e){J(e,"svelte-1ck72qd",`h2{margin-bottom:1.5rem
}ul.svelte-1ck72qd{display:grid;gap:0.25rem
}.meta.svelte-1ck72qd{margin-bottom:1.5rem;border-radius:0.25rem;padding:1rem;background-color:#F3F7FC;box-shadow:0 0 0 1px #cdd8e4, 0 2px 12px rgb(205 216 228 / 50%)
}.meta.svelte-1ck72qd a{cursor:pointer;border-radius:0.25rem;border-width:1px;border-color:transparent
}.meta.svelte-1ck72qd a:hover{--tw-border-opacity:1;border-color:rgb(228 228 231 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))
}.loader.svelte-1ck72qd svg{height:1.5rem;width:1.5rem
}@keyframes svelte-1ck72qd-spin{to{transform:rotate(360deg)
        }}.loader.svelte-1ck72qd svg{animation:svelte-1ck72qd-spin 1s linear infinite;fill:currentColor;--tw-text-opacity:1;color:rgb(82 82 91 / var(--tw-text-opacity))
}`)}function D(e,t,n){const r=e.slice();return r[4]=t[n],r}function B(e){let t,n,r;function o(s,u){return s[0].length?be:s[1]?ge:he}let c=o(e),l=c(e);return{c(){t=f("div"),n=f("h3"),n.textContent="Flagged Entries",r=$(),l.c(),a(t,"class","meta svelte-1ck72qd")},m(s,u){b(s,t,u),_(t,n),_(t,r),l.m(t,null)},p(s,u){c===(c=o(s))&&l?l.p(s,u):(l.d(1),l=c(s),l&&(l.c(),l.m(t,null)))},d(s){s&&h(t),l.d()}}}function he(e){let t,n=me(_e)+"";return{c(){t=f("span"),a(t,"class","loader svelte-1ck72qd")},m(r,o){b(r,t,o),t.innerHTML=n},p:k,d(r){r&&h(t)}}}function ge(e){let t;return{c(){t=f("p"),t.textContent="No duplicate block content found."},m(n,r){b(n,t,r)},p:k,d(n){n&&h(t)}}}function be(e){let t,n=e[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=F(D(e,n,o));return{c(){t=f("ul");for(let o=0;o<r.length;o+=1)r[o].c();a(t,"class","svelte-1ck72qd")},m(o,c){b(o,t,c);for(let l=0;l<r.length;l+=1)r[l].m(t,null)},p(o,c){if(c&1){n=o[0];let l;for(l=0;l<n.length;l+=1){const s=D(o,n,l);r[l]?r[l].p(s,c):(r[l]=F(s),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(o){o&&h(t),X(r,o)}}}function F(e){let t,n,r,o,c,l,s,u=e[4].title+"",i,g,d;return{c(){t=f("li"),n=f("a"),r=f("span"),c=$(),l=f("div"),s=f("span"),i=U(u),d=$(),a(r,"class",o="status "+(e[4].enabled?"enabled":"")),a(s,"class","title"),a(l,"class","label"),te(l,"padding","0"),a(n,"href",g=e[4].cpEditUrl),a(n,"class","element small hasstatus"),a(n,"target","_blank")},m(m,p){b(m,t,p),_(t,n),_(n,r),_(n,c),_(n,l),_(l,s),_(s,i),_(t,d)},p(m,p){p&1&&o!==(o="status "+(m[4].enabled?"enabled":""))&&a(r,"class",o),p&1&&u!==(u=m[4].title+"")&&ee(i,u),p&1&&g!==(g=m[4].cpEditUrl)&&a(n,"href",g)},d(m){m&&h(t)}}}function ke(e){let t,n,r,o,c=e[2]&&B(e);return{c(){c&&c.c(),t=$(),n=f("button"),n.textContent="Audit Blocks",a(n,"type","button"),a(n,"class","btn submit")},m(l,s){c&&c.m(l,s),b(l,t,s),b(l,n,s),r||(o=Y(n,"click",e[3]),r=!0)},p(l,[s]){l[2]?c?c.p(l,s):(c=B(l),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null)},i:k,o:k,d(l){c&&c.d(l),l&&h(t),l&&h(n),r=!1,o()}}}function ye(e,t,n){let r=[],o=!1,c=!1;function l(){n(2,c=!0),n(1,o=!1),n(0,r=[]),fetch("/admin/actions/block-audit/run").then(s=>s.json()).then(s=>{n(0,r=s),n(1,o=!0)})}return[r,o,c,l]}class ve extends fe{constructor(t){super(),ae(this,t,ye,ke,W,{},pe)}}Object.assign({"../img/clone.svg":()=>P(()=>import("./clone.430bcc02.js"),[]),"../img/spinner.svg":()=>P(()=>import("./spinner.ce09ad10.js"),[])});(e=>{document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)})(()=>{const e=document.querySelector("#blocks-audit");e.innerHTML="",new ve({target:e})});
