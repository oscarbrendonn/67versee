import{At as e,D as t,G as n,Gt as r,L as i,N as a,T as ee,U as o,Ut as te,b as s,bt as c,fn as l,h as u,ht as d,k as f,m as p,on as m,qt as ne}from"./city-funfair-D4kXswn-.js";import{t as h}from"./RoomEnvironment-BmfbGfPd.js";import{t as re}from"./GLTFLoader-ByCnPVBP.js";var g=`/67versee/friendsies/`,ie=!0,_=Object.freeze([{id:`gorilla`,ad:`Gorilla`,dosya:null,fiyat:0},{id:`friendsie:fr_67.glb`,ad:`No. 67`,dosya:`fr_67.glb`,fiyat:0},{id:`friendsie:fr_1.glb`,ad:`No. 1`,dosya:`fr_1.glb`,fiyat:120},{id:`friendsie:fr_100.glb`,ad:`No. 100`,dosya:`fr_100.glb`,fiyat:120},{id:`friendsie:fr_500.glb`,ad:`No. 500`,dosya:`fr_500.glb`,fiyat:200},{id:`friendsie:fr_777.glb`,ad:`No. 777`,dosya:`fr_777.glb`,fiyat:250},{id:`friendsie:fr_1000.glb`,ad:`No. 1000`,dosya:`fr_1000.glb`,fiyat:300},{id:`friendsie:fr_2222.glb`,ad:`No. 2222`,dosya:`fr_2222.glb`,fiyat:400},{id:`friendsie:fr_4242.glb`,ad:`No. 4242`,dosya:`fr_4242.glb`,fiyat:500},{id:`friendsie:fr_8888.glb`,ad:`No. 8888`,dosya:`fr_8888.glb`,fiyat:888}]),ae=`
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
`;function v({ctx:v,onConfirm:y}){if(typeof document>`u`)return{show(){},hide(){}};let b=document.createElement(`style`);b.textContent=ae,document.head.appendChild(b);let x=document.createElement(`div`);x.id=`karakter-secim`,x.innerHTML=`
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
      <button id="ks-sec">SELECT</button>
    </div>`,document.body.appendChild(x);let S=x.querySelector(`#ks-canvas`),oe=x.querySelector(`#ks-ad`),C=x.querySelector(`#ks-durum`),w=x.querySelector(`#ks-nokta`),T=x.querySelector(`#ks-sec`);_.forEach(()=>{let e=document.createElement(`i`);w.appendChild(e)});let E=new u({canvas:S,antialias:!0,alpha:!0});E.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),E.outputColorSpace=te,E.toneMapping=4,E.toneMappingExposure=1.05,E.shadowMap.enabled=!0,E.shadowMap.type=2;let D=new r,O=new e(34,1,.1,100);O.position.set(0,1.55,4.7),O.lookAt(0,1.05,0);let k=new p(E),se=new h;D.environment=k.fromScene(se,.04).texture;let A=new i(16774114,2.1);A.position.set(3.2,5.4,3.6),A.castShadow=!0,A.shadow.mapSize.set(1024,1024),A.shadow.camera.near=1,A.shadow.camera.far=18,A.shadow.camera.left=-3,A.shadow.camera.right=3,A.shadow.camera.top=3,A.shadow.camera.bottom=-1,A.shadow.bias=-4e-4,A.shadow.radius=5,D.add(A);let j=new i(10470655,1.4);j.position.set(-3.5,3.2,-4),D.add(j),D.add(new n(16777215,9413312,.55));let M=new o,N=new d(new a(1.28,1.4,.42,64),new c({color:1317675,roughness:.18,metalness:.85}));N.position.y=.21,N.receiveShadow=!0,M.add(N);let P=new d(new a(1.16,1.2,.12,64),new c({color:15525338,roughness:.55,metalness:.05}));P.position.y=.47,P.receiveShadow=!0,M.add(P);let F=new d(new m(1.29,.028,16,80),new c({color:2976991,emissive:2976991,emissiveIntensity:2.4,roughness:.4}));F.rotation.x=Math.PI/2,F.position.y=.42,M.add(F),D.add(M);let I=new d(new t(9,48),new ne({opacity:.22}));I.rotation.x=-Math.PI/2,I.position.y=.02,I.receiveShadow=!0,D.add(I);let L=new o;D.add(L);let R=new re,z=new Map,B=null;function V(){let e=x.clientWidth||window.innerWidth,t=x.clientHeight||window.innerHeight;E.setSize(e,t,!1),O.aspect=e/t,O.updateProjectionMatrix()}function H(e){if(B&&=(L.remove(B),null),!e.dosya){let e=new d(new ee(.42,.9,6,12),new c({color:7297604,roughness:.8}));e.position.y=1.05,L.add(e),B=e;return}let t=`${g}${e.dosya}`,n=e=>{let t=e.scene;t.scale.setScalar(1),t.position.set(0,0,0),t.rotation.set(0,0,0),t.updateMatrixWorld(!0);let n=new s().setFromObject(t),r=1.7/(n.max.y-n.min.y||1);t.scale.setScalar(r);let i=n.getCenter(new l);t.position.set(-i.x*r,-n.min.y*r+.28,-i.z*r),L.add(t),B=t};if(z.has(t)){n(z.get(t));return}R.load(t,r=>{z.set(t,r),_[U].dosya===e.dosya&&n(r)})}let U=0,W=e=>e.fiyat===0||(v?.save?.get?.(`sahipKarakterler`,[])||[]).includes(e.id),G=e=>ie;function K(){let e=_[U];oe.textContent=e.ad,[...w.children].forEach((e,t)=>e.classList.toggle(`on`,t===U)),G(e)?(C.textContent=e.fiyat===0?`Unlocked`:W(e)?`Owned`:`Free — trial`,T.textContent=`SELECT`,T.classList.remove(`kilitli`),T.disabled=!1):(C.textContent=`Locked — ${e.fiyat} coins`,T.textContent=`BUY (${e.fiyat})`,T.classList.add(`kilitli`),T.disabled=!1),H(e)}function q(e){U=(U+e+_.length)%_.length,K()}x.querySelector(`#ks-sol`).addEventListener(`click`,()=>q(-1)),x.querySelector(`#ks-sag`).addEventListener(`click`,()=>q(1));let J=null,ce=e=>{J=e},le=e=>{if(J==null)return;let t=e-J;Math.abs(t)>45&&q(t<0?1:-1),J=null};S.addEventListener(`pointerdown`,e=>ce(e.clientX)),S.addEventListener(`pointerup`,e=>le(e.clientX)),T.addEventListener(`click`,()=>{let e=_[U];if(!G(e)){let t=v?.save?.get?.(`sahipKarakterler`,[])||[];t.includes(e.id)||v?.save?.set?.(`sahipKarakterler`,[...t,e.id]),K();return}v?.save?.set?.(`equipped`,e.id),v?.save?.set?.(`karakterSecildi`,!0),$(),y?.(e.id)});let Y=!1,X=new f;function Z(){Y&&(requestAnimationFrame(Z),L.rotation.y+=X.getDelta()*.6,E.render(D,O))}window.addEventListener(`resize`,()=>{Y&&V()});function ue(){x.classList.remove(`surum`),x.classList.add(`nft-secim`),Y=!0,V();let e=v?.save?.get?.(`equipped`,null),t=_.findIndex(t=>t.id===e);U=t>=0?t:1,K(),X.getDelta(),Z()}x.querySelectorAll(`[data-surum]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.surum;v?.save?.set?.(`oyunSurumu`,t),t===`normal`?(v?.save?.set?.(`equipped`,`gorilla`),v?.save?.set?.(`karakterSecildi`,!0),$(),y?.(`gorilla`)):ue()})});let Q=document.createElement(`button`);Q.id=`ks-geri`,Q.textContent=`‹ Back`,x.appendChild(Q),Q.addEventListener(`click`,()=>{Y=!1,x.classList.remove(`nft-secim`),x.classList.add(`surum`)});function de(){x.classList.add(`on`,`surum`),x.classList.remove(`nft-secim`),Y=!1}function $(){x.classList.remove(`on`,`surum`,`nft-secim`),Y=!1}return{show:de,hide:$,el:x}}export{_ as KARAKTERLER,v as buildKarakterSecim};