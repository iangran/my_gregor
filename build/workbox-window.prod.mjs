try{self["workbox:window:6.5.2"]&&_()}catch(t){}function t(t,s){return new Promise((i=>{const e=new MessageChannel;e.port1.onmessage=t=>{i(t.data)},t.postMessage(s,[e.port2])}))}try{self["workbox:core:6.5.2"]&&_()}catch(t){}class s{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}}function i(t,s){const{href:i}=location;return new URL(t,i).href===new URL(s,i).href}class e{constructor(t,s){this.type=t,Object.assign(this,s)}}const h={type:"SKIP_WAITING"};class n extends class{constructor(){this.St=new Map}addEventListener(t,s){this.Lt(t).add(s)}removeEventListener(t,s){this.Lt(t).delete(s)}dispatchEvent(t){t.target=this;const s=this.Lt(t.type);for(const i of s)i(t)}Lt(t){return this.St.has(t)||this.St.set(t,new Set),this.St.get(t)}}{constructor(t,h={}){super(),this.It={},this.Bt=0,this.Tt=new s,this.Mt=new s,this.At=new s,this.Gt=0,this.Kt=new Set,this.Nt=()=>{const t=this.zt,s=t.installing;this.Bt>0||!i(s.scriptURL,this.Dt.toString())||performance.now()>this.Gt+6e4?(this.Ft=s,t.removeEventListener("updatefound",this.Nt)):(this.Ht=s,this.Kt.add(s),this.Tt.resolve(s)),++this.Bt,s.addEventListener("statechange",this.Jt)},this.Jt=t=>{const s=this.zt,i=t.target,{state:h}=i,n=i===this.Ft,a={sw:i,isExternal:n,originalEvent:t};!n&&this.Qt&&(a.isUpdate=!0),this.dispatchEvent(new e(h,a)),"installed"===h?this.Vt=self.setTimeout((()=>{"installed"===h&&s.waiting===i&&this.dispatchEvent(new e("waiting",a))}),200):"activating"===h&&(clearTimeout(this.Vt),n||this.Mt.resolve(i))},this.Xt=t=>{const s=this.Ht,i=s!==navigator.serviceWorker.controller;this.dispatchEvent(new e("controlling",{isExternal:i,originalEvent:t,sw:s,isUpdate:this.Qt})),i||this.At.resolve(s)},this.Yt=async t=>{const{data:s,ports:i,source:h}=t;await this.getSW(),this.Kt.has(h)&&this.dispatchEvent(new e("message",{data:s,originalEvent:t,ports:i,sw:h}))},this.Dt=t,this.It=h,navigator.serviceWorker.addEventListener("message",this.Yt)}async register({immediate:t=!1}={}){t||"complete"===document.readyState||await new Promise((t=>window.addEventListener("load",t))),this.Qt=Boolean(navigator.serviceWorker.controller),this.Zt=this.ts(),this.zt=await this.ss(),this.Zt&&(this.Ht=this.Zt,this.Mt.resolve(this.Zt),this.At.resolve(this.Zt),this.Zt.addEventListener("statechange",this.Jt,{once:!0}));const s=this.zt.waiting;return s&&i(s.scriptURL,this.Dt.toString())&&(this.Ht=s,Promise.resolve().then((()=>{this.dispatchEvent(new e("waiting",{sw:s,wasWaitingBeforeRegister:!0}))})).then((()=>{}))),this.Ht&&(this.Tt.resolve(this.Ht),this.Kt.add(this.Ht)),this.zt.addEventListener("updatefound",this.Nt),navigator.serviceWorker.addEventListener("controllerchange",this.Xt),this.zt}async update(){this.zt&&await this.zt.update()}get active(){return this.Mt.promise}get controlling(){return this.At.promise}getSW(){return void 0!==this.Ht?Promise.resolve(this.Ht):this.Tt.promise}async messageSW(s){return t(await this.getSW(),s)}messageSkipWaiting(){this.zt&&this.zt.waiting&&t(this.zt.waiting,h)}ts(){const t=navigator.serviceWorker.controller;return t&&i(t.scriptURL,this.Dt.toString())?t:void 0}async ss(){try{const t=await navigator.serviceWorker.register(this.Dt,this.It);return this.Gt=performance.now(),t}catch(t){throw t}}}export{n as Workbox,e as WorkboxEvent,t as messageSW};
//# sourceMappingURL=workbox-window.prod.mjs.map
