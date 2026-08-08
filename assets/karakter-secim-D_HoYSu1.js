import{A as e,E as t,Jt as n,K as r,Kt as i,O as a,P as o,R as s,W as c,Wt as ee,_ as te,g as ne,gt as l,h as u,jt as d,pn as f,sn as re,x as p,xt as m}from"./city-funfair-BXyWVcDk.js";import{t as ie}from"./RoomEnvironment-CdOJMQWH.js";import{t as ae}from"./GLTFLoader-uES3ShkA.js";import{t as h}from"./cosmetics-_eUJ0BSo.js";var oe=`/67versee/friendsies/`,se=!0,g=Object.freeze([{id:`gorilla`,ad:`Gorilla`,dosya:null,fiyat:0},{id:`friendsie:fr_67.glb`,ad:`No. 67`,dosya:`fr_67.glb`,fiyat:0},{id:`friendsie:fr_1.glb`,ad:`No. 1`,dosya:`fr_1.glb`,fiyat:120},{id:`friendsie:fr_100.glb`,ad:`No. 100`,dosya:`fr_100.glb`,fiyat:120},{id:`friendsie:fr_500.glb`,ad:`No. 500`,dosya:`fr_500.glb`,fiyat:200},{id:`friendsie:fr_777.glb`,ad:`No. 777`,dosya:`fr_777.glb`,fiyat:250},{id:`friendsie:fr_1000.glb`,ad:`No. 1000`,dosya:`fr_1000.glb`,fiyat:300},{id:`friendsie:fr_2222.glb`,ad:`No. 2222`,dosya:`fr_2222.glb`,fiyat:400},{id:`friendsie:fr_4242.glb`,ad:`No. 4242`,dosya:`fr_4242.glb`,fiyat:500},{id:`friendsie:fr_8888.glb`,ad:`No. 8888`,dosya:`fr_8888.glb`,fiyat:888}]),ce=`
#karakter-secim { position: fixed; inset: 0; z-index: 120; display: none;
  background: radial-gradient(120% 90% at 50% 15%, #eaf1fb 0%, #cdd9ec 60%, #b7c6e0 100%);
  font-family: inherit; color: #1a2740; }
#karakter-secim.on { display: block; }
#karakter-secim canvas { position: absolute; inset: 0; width: 100%; height: 100%; }

/* sürüm seçimi (oyunun ilk adımı) */
#ks-surum { position: absolute; inset: 0; display: none; flex-direction: column;
  align-items: center; justify-content: center; gap: 34px; padding: 24px;
  background: inherit; z-index: 2; }
#karakter-secim.surum #ks-surum { display: flex; }
#ks-surum-baslik { font-size: 24px; font-weight: 700; letter-spacing: 0.06em; }
#ks-surum-kartlar { display: flex; gap: 22px; flex-wrap: wrap; justify-content: center; }
.ks-kart { width: 260px; max-width: 42vw; background: #ffffffdd; border: 2px solid transparent;
  border-radius: 20px; padding: 26px 22px; cursor: pointer; text-align: center;
  transition: transform .14s, border-color .14s, box-shadow .14s; box-shadow: 0 8px 24px #0001; }
.ks-kart:hover { transform: translateY(-4px); border-color: #2d6cdf; box-shadow: 0 14px 30px #2d6cdf22; }
.ks-kart.nft:hover { border-color: #c8892f; box-shadow: 0 14px 30px #c8892f22; }
.ks-kart-ust { display: flex; justify-content: center; margin-bottom: 14px; }
.ks-kart-ust svg { width: 46px; height: 46px; }
.ks-kart[data-surum="normal"] .ks-kart-ust { color: #2d6cdf; }
.ks-kart[data-surum="nft"] .ks-kart-ust { color: #c8892f; }
.ks-kart b { display: block; font-size: 19px; margin-bottom: 8px; }
.ks-kart span { display: block; font-size: 13.5px; line-height: 1.5; opacity: 0.7; }
#ks-geri { position: absolute; top: 22px; left: 22px; z-index: 3; background: #ffffffcc;
  border: none; border-radius: 10px; padding: 9px 16px; font-size: 14px; cursor: pointer;
  display: none; }
#karakter-secim.nft-secim #ks-geri { display: block; }
#ks-baslik { position: absolute; top: 24px; left: 0; right: 0; text-align: center;
  font-size: 20px; font-weight: 700; letter-spacing: 0.08em; }
#ks-baslik span { display: block; font-size: 12px; font-weight: 500; opacity: 0.6;
  letter-spacing: 0.14em; margin-top: 4px; }
.ks-ok { position: absolute; top: 50%; transform: translateY(-50%);
  width: 58px; height: 58px; border-radius: 50%; border: none; cursor: pointer;
  background: #ffffffcc; color: #1a2740; font-size: 26px; line-height: 58px;
  box-shadow: 0 6px 18px #0002; transition: transform .12s, background .12s; }
.ks-ok:hover { background: #fff; transform: translateY(-50%) scale(1.06); }
#ks-sol { left: 5%; } #ks-sag { right: 5%; }
#ks-alt { position: absolute; left: 0; right: 0; bottom: 40px; text-align: center; }
#ks-ad { font-size: 26px; font-weight: 700; }
#ks-durum { margin-top: 6px; font-size: 15px; height: 22px; opacity: 0.85; }
#ks-nokta { display: flex; gap: 7px; justify-content: center; margin: 14px 0 18px; }
#ks-nokta i { width: 8px; height: 8px; border-radius: 50%; background: #1a274033; }
#ks-nokta i.on { background: #2d6cdf; }
#ks-sec { background: #17223a; color: #fff; border: none; border-radius: 14px;
  padding: 15px 46px; font-size: 17px; font-weight: 600; cursor: pointer;
  box-shadow: 0 8px 22px #17223a44; transition: transform .12s, opacity .12s; }
#ks-sec:hover { transform: scale(1.03); }
#ks-sec:disabled { opacity: 0.5; cursor: not-allowed; }
#ks-sec.kilitli { background: #c8892f; box-shadow: 0 8px 22px #c8892f55; }
#ks-bitti { display: none; margin-left: 10px; background: #ffffffd9; color: #17223a;
  border: none; border-radius: 14px; padding: 15px 34px; font-size: 16px; font-weight: 600;
  cursor: pointer; box-shadow: 0 6px 18px #0002; }
#karakter-secim.item-asamasi #ks-bitti { display: inline-block; }
/* Phones: tighter type, thumb-sized arrows kept clear of the edges, and the
   bottom block inside the safe area. */
@media (max-width: 600px) {
  #ks-surum { gap: 20px; padding: 18px; }
  #ks-surum-baslik { font-size: 18px; text-align: center; }
  #ks-surum-kartlar { gap: 12px; }
  .ks-kart { max-width: 44vw; padding: 18px 12px; border-radius: 16px; }
  .ks-kart-ust svg { width: 36px; height: 36px; }
  .ks-kart b { font-size: 15px; }
  .ks-kart span { font-size: 11.5px; }
  #ks-baslik { top: calc(env(safe-area-inset-top) + 15px); font-size: 15px; padding: 0 96px; }
  .ks-ok { width: 46px; height: 46px; font-size: 21px; line-height: 46px; }
  #ks-sol { left: 8px; } #ks-sag { right: 8px; }
  #ks-alt { bottom: calc(env(safe-area-inset-bottom) + 18px); }
  #ks-ad { font-size: 20px; }
  #ks-durum { font-size: 13px; }
  #ks-sec { padding: 13px 38px; font-size: 15px; }
  #ks-geri { top: calc(env(safe-area-inset-top) + 12px); left: 12px; }
}
`;function _({ctx:_,onConfirm:le}){if(typeof document>`u`)return{show(){},hide(){}};let v=document.createElement(`style`);v.textContent=ce,document.head.appendChild(v);let y=document.createElement(`div`);y.id=`karakter-secim`,y.innerHTML=`
    <div id="ks-surum">
      <div id="ks-surum-baslik">HOW DO YOU WANT TO PLAY?</div>
      <div id="ks-surum-kartlar">
        <button class="ks-kart" data-surum="normal">
          <div class="ks-kart-ust">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>
            </svg>
          </div>
          <b>Standard</b>
          <span>Jump in with a ready character. Free.</span>
        </button>
        <button class="ks-kart nft" data-surum="nft">
          <div class="ks-kart-ust">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 3h14l3 6-10 12L2 9z"/>
              <path d="M2 9h20"/>
              <path d="M8.5 3 6 9l6 12 6-12-2.5-6"/>
            </svg>
          </div>
          <b>NFT Edition</b>
          <span>Pick your character from the 67 collection. NFTs in your wallet unlock.</span>
        </button>
      </div>
    </div>
    <canvas id="ks-canvas"></canvas>
    <div id="ks-baslik">CHOOSE YOUR CHARACTER<span>Chosen once — saved to your account</span></div>
    <button class="ks-ok" id="ks-sol" aria-label="previous">‹</button>
    <button class="ks-ok" id="ks-sag" aria-label="next">›</button>
    <div id="ks-alt">
      <div id="ks-ad">—</div>
      <div id="ks-durum"></div>
      <div id="ks-nokta"></div>
      <button id="ks-sec">SELECT</button><button id="ks-bitti" type="button">DONE</button>
    </div>`,document.body.appendChild(y);let b=y.querySelector(`#ks-canvas`),x=y.querySelector(`#ks-ad`),S=y.querySelector(`#ks-durum`),C=y.querySelector(`#ks-nokta`),w=y.querySelector(`#ks-sec`);g.forEach(()=>{let e=document.createElement(`i`);C.appendChild(e)});let T=new ne({canvas:b,antialias:!0,alpha:!0});T.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),T.outputColorSpace=ee,T.toneMapping=4,T.toneMappingExposure=1.05,T.shadowMap.enabled=!0,T.shadowMap.type=2;let E=new i,D=new d(34,1,.1,100);D.position.set(0,1.55,4.7),D.lookAt(0,1.05,0);let ue=new u(T),de=new ie;E.environment=ue.fromScene(de,.04).texture;let O=new s(16774114,2.1);O.position.set(3.2,5.4,3.6),O.castShadow=!0,O.shadow.mapSize.set(1024,1024),O.shadow.camera.near=1,O.shadow.camera.far=18,O.shadow.camera.left=-3,O.shadow.camera.right=3,O.shadow.camera.top=3,O.shadow.camera.bottom=-1,O.shadow.bias=-4e-4,O.shadow.radius=5,E.add(O);let k=new s(10470655,1.4);k.position.set(-3.5,3.2,-4),E.add(k),E.add(new r(16777215,9413312,.55));let A=new c,j=new l(new o(1.28,1.4,.42,64),new m({color:1317675,roughness:.18,metalness:.85}));j.position.y=.21,j.receiveShadow=!0,A.add(j);let M=new l(new o(1.16,1.2,.12,64),new m({color:15525338,roughness:.55,metalness:.05}));M.position.y=.47,M.receiveShadow=!0,A.add(M);let N=new l(new re(1.29,.028,16,80),new m({color:2976991,emissive:2976991,emissiveIntensity:2.4,roughness:.4}));N.rotation.x=Math.PI/2,N.position.y=.42,A.add(N),E.add(A);let P=new l(new a(9,48),new n({opacity:.22}));P.rotation.x=-Math.PI/2,P.position.y=.02,P.receiveShadow=!0,E.add(P);let F=new c;E.add(F);let fe=new ae,I=new Map,L=null;function R(){let e=y.clientWidth||window.innerWidth,t=y.clientHeight||window.innerHeight;T.setSize(e,t,!1),D.aspect=e/t,D.updateProjectionMatrix()}function pe(e){if(L&&=(F.remove(L),null),!e.dosya){let e=new l(new t(.42,.9,6,12),new m({color:7297604,roughness:.8}));e.position.y=1.05,F.add(e),L=e;return}let n=`${oe}${e.dosya}`,r=e=>{let t=e.scene;t.scale.setScalar(1),t.position.set(0,0,0),t.rotation.set(0,0,0),t.updateMatrixWorld(!0);let n=new p().setFromObject(t),r=1.7/(n.max.y-n.min.y||1);t.scale.setScalar(r);let i=n.getCenter(new f);t.position.set(-i.x*r,-n.min.y*r+.28,-i.z*r),F.add(t),L=t};if(I.has(n)){r(I.get(n));return}fe.load(n,t=>{I.set(n,t),g[z].dosya===e.dosya&&r(t)})}let z=0,B=`karakter`,V=0,me=y.querySelector(`#ks-bitti`),he=()=>_?.save?.get?.(`ownedCosmetics`,[])||[],H=()=>({hat:null,glasses:null,backpack:null,..._?.save?.get?.(`equippedCosmetics`,{})||{}}),U={hat:`Hat`,glasses:`Glasses`,backpack:`Backpack`};function ge(e){L&&=(F.remove(L),null);let t=e.build(te),n=new p().setFromObject(t),r=n.getCenter(new f),i=n.getSize(new f),a=1.15/Math.max(i.x,i.y,i.z,.2);t.scale.setScalar(a),t.position.set(-r.x*a,-n.min.y*a+.72,-r.z*a),F.add(t),L=t}function W(e){C.innerHTML=``;for(let t=0;t<e;t+=1)C.appendChild(document.createElement(`i`))}let _e=e=>e.fiyat===0||(_?.save?.get?.(`sahipKarakterler`,[])||[]).includes(e.id),G=e=>se;function K(){if(B===`item`){let e=h[V],t=H()[e.slot]===e.id;x.textContent=e.name,[...C.children].forEach((e,t)=>e.classList.toggle(`on`,t===V)),S.textContent=t?`${U[e.slot]} — equipped`:`${U[e.slot]} — free during the trial`,w.textContent=t?`REMOVE`:`WEAR`,w.classList.toggle(`kilitli`,!t),w.disabled=!1,ge(e);return}let e=g[z];x.textContent=e.ad,[...C.children].forEach((e,t)=>e.classList.toggle(`on`,t===z)),G(e)?(S.textContent=e.fiyat===0?`Unlocked`:_e(e)?`Owned`:`Free — trial`,w.textContent=`SELECT`,w.classList.remove(`kilitli`),w.disabled=!1):(S.textContent=`Locked — ${e.fiyat} coins`,w.textContent=`BUY (${e.fiyat})`,w.classList.add(`kilitli`),w.disabled=!1),pe(e)}function q(e){B===`item`?V=(V+e+h.length)%h.length:z=(z+e+g.length)%g.length,K()}y.querySelector(`#ks-sol`).addEventListener(`click`,()=>q(-1)),y.querySelector(`#ks-sag`).addEventListener(`click`,()=>q(1));let J=null,ve=e=>{J=e},ye=e=>{if(J==null)return;let t=e-J;Math.abs(t)>45&&q(t<0?1:-1),J=null};b.addEventListener(`pointerdown`,e=>ve(e.clientX)),b.addEventListener(`pointerup`,e=>ye(e.clientX)),w.addEventListener(`click`,()=>{if(B===`item`){let e=h[V],t=H();if(t[e.slot]===e.id)t[e.slot]=null;else{t[e.slot]=e.id;let n=he();n.includes(e.id)||_?.save?.set?.(`ownedCosmetics`,[...n,e.id])}_?.save?.set?.(`equippedCosmetics`,t),K();return}let e=g[z];if(!G(e)){let t=_?.save?.get?.(`sahipKarakterler`,[])||[];t.includes(e.id)||_?.save?.set?.(`sahipKarakterler`,[...t,e.id]),K();return}_?.save?.set?.(`equipped`,e.id),B=`item`,V=0,y.classList.add(`item-asamasi`),y.querySelector(`#ks-baslik`).firstChild.textContent=`PICK YOUR ITEMS`,W(h.length),K()}),me.addEventListener(`click`,()=>{let e=g[z];_?.save?.set?.(`karakterSecildi`,!0),$(),le?.(e.id)});let Y=!1,X=new e;function Z(){Y&&(requestAnimationFrame(Z),F.rotation.y+=X.getDelta()*.6,T.render(E,D))}window.addEventListener(`resize`,()=>{Y&&R()});function be(){y.classList.remove(`surum`),y.classList.add(`nft-secim`),Y=!0,R();let e=_?.save?.get?.(`equipped`,null),t=g.findIndex(t=>t.id===e);z=t>=0?t:1,K(),X.getDelta(),Z()}y.querySelectorAll(`[data-surum]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.surum;_?.save?.set?.(`oyunSurumu`,t),be()})});let Q=document.createElement(`button`);Q.id=`ks-geri`,Q.textContent=`‹ Back`,y.appendChild(Q),Q.addEventListener(`click`,()=>{Y=!1,y.classList.remove(`nft-secim`),y.classList.add(`surum`)});function xe(){y.classList.add(`on`,`surum`),y.classList.remove(`nft-secim`,`item-asamasi`),B=`karakter`,y.querySelector(`#ks-baslik`).firstChild.textContent=`CHOOSE YOUR CHARACTER`,W(g.length),Y=!1}function $(){y.classList.remove(`on`,`surum`,`nft-secim`),Y=!1}return{show:xe,hide:$,el:y}}export{g as KARAKTERLER,_ as buildKarakterSecim};