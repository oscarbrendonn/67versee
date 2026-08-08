import{i as e}from"./registry-CJLgdOlc.js";import{n as t}from"./hava-durumu-DOwTpmvf.js";var n=[{id:`no67`,ad:`No. 67`},{id:`no100`,ad:`No. 100`},{id:`no500`,ad:`No. 500`},{id:`no777`,ad:`No. 777`}],r=[`On my way to the funfair — race you there.`,`The pool water is PERFECT today.`,`Just lost at Hoop Shot again. Rematch?`,`Meet me on the dance floor tonight.`,`Did you see the new pieces at Boutique 67?`,`Kart 67 lap record. It is mine now.`],i=`
#tf-dugme { position: fixed; right: 18px; bottom: 18px; z-index: 90; width: 52px; height: 52px;
  border-radius: 16px; border: none; cursor: pointer; background: #17223a; color: #fff;
  box-shadow: 0 10px 26px #17223a66; display: flex; align-items: center; justify-content: center;
  transition: transform .12s; }
#tf-dugme:hover { transform: scale(1.06); }
#tf-dugme svg { width: 24px; height: 24px; }
#tf-rozet { position: absolute; top: -5px; right: -5px; min-width: 18px; height: 18px;
  border-radius: 9px; background: #d0584e; color: #fff; font-size: 11px; font-weight: 700;
  display: none; align-items: center; justify-content: center; padding: 0 4px; }
#tf-bildirim { position: fixed; right: 18px; bottom: 82px; z-index: 95; max-width: 300px;
  background: #fffffff2; border-radius: 14px; padding: 12px 14px; box-shadow: 0 14px 34px #0005;
  font-size: 13px; color: #17223a; display: none; }
#tf-bildirim b { display: block; font-size: 12px; letter-spacing: .04em; margin-bottom: 3px; }
#telefon { position: fixed; right: 18px; bottom: 82px; z-index: 96; width: 300px; height: 540px;
  background: #101623; border-radius: 34px; padding: 12px; box-shadow: 0 30px 70px #000a;
  display: none; font-family: inherit; }
#telefon.acik { display: block; }
#tf-ekran { width: 100%; height: 100%; background: #f4f6fa; border-radius: 24px; overflow: hidden;
  display: flex; flex-direction: column; }
#tf-ust { padding: 12px 14px 8px; display: flex; justify-content: space-between; align-items: center; }
#tf-saat { font-size: 12px; font-weight: 700; color: #17223a; }
#tf-kapat { border: none; background: none; cursor: pointer; color: #6b7280; font-size: 15px; }
#tf-icerik { flex: 1; overflow: auto; padding: 4px 12px 12px; }
.tf-baslik { font-size: 17px; font-weight: 800; color: #111827; margin: 4px 2px 10px; }
.tf-izgara { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.tf-app { background: #fff; border: none; border-radius: 16px; padding: 14px 10px; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  box-shadow: 0 4px 14px #0000000d; font-size: 12.5px; font-weight: 650; color: #17223a; }
.tf-app svg { width: 26px; height: 26px; }
.tf-geri { border: none; background: none; color: #2d6cdf; font-weight: 650; font-size: 13px;
  cursor: pointer; padding: 2px; margin-bottom: 6px; }
.tf-kisi { width: 100%; text-align: left; background: #fff; border: none; border-radius: 12px;
  padding: 11px 12px; margin-bottom: 8px; cursor: pointer; font-size: 13.5px; font-weight: 650;
  color: #17223a; box-shadow: 0 3px 10px #0000000a; }
.tf-balon { max-width: 82%; border-radius: 14px; padding: 8px 11px; margin: 4px 0; font-size: 13px;
  line-height: 1.4; }
.tf-balon.ben { margin-left: auto; background: #2d6cdf; color: #fff; border-bottom-right-radius: 4px; }
.tf-balon.o { margin-right: auto; background: #e8ecf3; color: #17223a; border-bottom-left-radius: 4px; }
#tf-yaz { display: flex; gap: 6px; padding: 8px 10px; background: #fff; }
#tf-yaz input { flex: 1; border: 1px solid #dde3ec; border-radius: 999px; padding: 8px 12px;
  font-size: 13px; outline: none; }
#tf-yaz button { border: none; border-radius: 999px; background: #2d6cdf; color: #fff;
  padding: 8px 14px; font-weight: 650; font-size: 13px; cursor: pointer; }
.tf-foto { width: 100%; border-radius: 12px; margin-bottom: 8px; display: block; }
.tf-not { font-size: 12.5px; color: #6b7280; margin: 6px 2px; line-height: 1.5; }
.tf-buyuk { width: 100%; border: none; border-radius: 14px; background: #17223a; color: #fff;
  padding: 12px; font-size: 14px; font-weight: 700; cursor: pointer; margin-top: 4px; }
/* Phones: the JUMP/GRAB cluster owns the bottom-right corner, so the phone
   button, its notification and the device itself ride above it. */
@media (max-width: 600px) {
  #tf-dugme { right: calc(env(safe-area-inset-right) + 16px);
    bottom: calc(env(safe-area-inset-bottom) + 132px); width: 46px; height: 46px; }
  #tf-bildirim { right: calc(env(safe-area-inset-right) + 16px);
    bottom: calc(env(safe-area-inset-bottom) + 188px);
    max-width: calc(100vw - 32px); }
  #telefon { right: 50%; transform: translateX(50%);
    bottom: calc(env(safe-area-inset-bottom) + 16px);
    width: min(320px, calc(100vw - 20px));
    height: min(560px, calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px)); }
}
`,a={telefon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="7" y="2.5" width="10" height="19" rx="3"/><path d="M11 18.5h2"/></svg>`,mesaj:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2.4-2.7A8 8 0 1 1 21 12z"/></svg>`,kamera:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="14" r="3.4"/></svg>`,hava:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17a5 5 0 1 1 1-9.9A6 6 0 1 1 18 17z"/><path d="M8 20.5v.01M12 21.5v.01M16 20.5v.01"/></svg>`,galeri:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17.5 9.5 13l4 3.5 3-2.5 3.5 3"/></svg>`};e(`boot`,e=>{if(typeof document>`u`)return;let o=document.createElement(`style`);o.textContent=i,document.head.appendChild(o);let s=new Map(n.map(e=>[e.id,[]])),c=0,l=[],u=()=>{let t=e.save.get(`populerlik`,0);return Number.isFinite(t)?t:0},d=t=>{e.save.set(`populerlik`,u()+t)},f=document.createElement(`button`);f.id=`tf-dugme`,f.type=`button`,f.setAttribute(`aria-label`,`Phone`),f.innerHTML=`${a.telefon}<span id="tf-rozet"></span>`,document.body.appendChild(f);let p=f.querySelector(`#tf-rozet`),m=document.createElement(`div`);m.id=`tf-bildirim`,document.body.appendChild(m);let h=null;function g(e,t){m.innerHTML=`<b>${e}</b>${t}`,m.style.display=`block`,clearTimeout(h),h=setTimeout(()=>{m.style.display=`none`},7e3)}function _(){p.style.display=c>0?`flex`:`none`,p.textContent=c>9?`9+`:String(c)}let v=document.createElement(`div`);v.id=`telefon`,v.innerHTML=`
    <div id="tf-ekran">
      <div id="tf-ust">
        <span id="tf-saat"></span>
        <button id="tf-kapat" type="button" aria-label="Close phone">Close</button>
      </div>
      <div id="tf-icerik"></div>
    </div>`,document.body.appendChild(v);let y=v.querySelector(`#tf-icerik`),b=v.querySelector(`#tf-saat`);setInterval(()=>{let e=new Date;b.textContent=`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`},1e3);function x(){c=0,_(),y.innerHTML=`<div class="tf-baslik">67 Phone</div>
      <p class="tf-not" style="margin-top:-6px;">Popularity ${u()}</p>`;let e=document.createElement(`div`);e.className=`tf-izgara`;let t=[[`Messages`,a.mesaj,C],[`Camera`,a.kamera,E],[`Weather`,a.hava,A],[`Photos`,a.galeri,D]];for(let[n,r,i]of t){let t=document.createElement(`button`);t.type=`button`,t.className=`tf-app`,t.innerHTML=`${r}<span>${n}</span>`,t.addEventListener(`click`,i),e.appendChild(t)}y.appendChild(e)}let S=e=>{let t=document.createElement(`button`);return t.type=`button`,t.className=`tf-geri`,t.textContent=`Back`,t.addEventListener(`click`,e),t};function C(){y.innerHTML=``,y.append(S(x));let e=document.createElement(`div`);e.className=`tf-baslik`,e.textContent=`Messages`,y.appendChild(e);for(let e of n){let t=document.createElement(`button`);t.type=`button`,t.className=`tf-kisi`;let n=s.get(e.id).at(-1);t.innerHTML=`${e.ad}<br><span style="font-weight:400;color:#6b7280;font-size:12px;">${n?n.metin.slice(0,34):`Say hi`}</span>`,t.addEventListener(`click`,()=>w(e)),y.appendChild(t)}}function w(e){y.innerHTML=``,y.append(S(C));let t=document.createElement(`div`);t.className=`tf-baslik`,t.textContent=e.ad,y.appendChild(t);let n=document.createElement(`div`);y.appendChild(n);let i=()=>{n.innerHTML=``;for(let t of s.get(e.id)){let e=document.createElement(`div`);e.className=`tf-balon ${t.benden?`ben`:`o`}`,e.textContent=t.metin,n.appendChild(e)}n.lastChild?.scrollIntoView?.({block:`nearest`})};i();let a=document.createElement(`div`);a.id=`tf-yaz`;let o=document.createElement(`input`);o.placeholder=`Message`,o.maxLength=90;let l=document.createElement(`button`);l.type=`button`,l.textContent=`Send`;let u=()=>{let t=o.value.trim();t&&(o.value=``,s.get(e.id).push({benden:!0,metin:t}),i(),setTimeout(()=>{let t=r[Math.floor(Math.random()*r.length)];s.get(e.id).push({benden:!1,metin:t}),v.classList.contains(`acik`)?i():(c+=1,_(),g(e.ad,t))},1400+Math.random()*1800))};l.addEventListener(`click`,u),o.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&u()}),o.addEventListener(`keyup`,e=>e.stopPropagation()),a.append(o,l),y.appendChild(a)}function T(){let e=document.querySelector(`canvas`);if(!e)return null;try{let t=document.createElement(`canvas`),n=Math.min(1,900/e.width);return t.width=Math.round(e.width*n),t.height=Math.round(e.height*n),t.getContext(`2d`).drawImage(e,0,0,t.width,t.height),t.toDataURL(`image/jpeg`,.82)}catch{return null}}function E(){y.innerHTML=``,y.append(S(x));let t=document.createElement(`div`);t.className=`tf-baslik`,t.textContent=`Camera`;let n=document.createElement(`p`);n.className=`tf-not`,n.textContent=`Frames the park exactly as you see it. Photos land in the gallery.`;let r=document.createElement(`button`);r.type=`button`,r.className=`tf-buyuk`,r.textContent=`Take photo`,r.addEventListener(`click`,()=>{let t=T();if(!t){e.ui.toast(`The camera could not read the frame.`);return}l.unshift({veri:t,paylasildi:!1}),l.length>10&&l.pop(),e.ui.toast(`Saved to Photos.`),D()}),y.append(t,n,r)}function D(){y.innerHTML=``,y.append(S(x));let t=document.createElement(`div`);if(t.className=`tf-baslik`,t.textContent=`Photos`,y.appendChild(t),!l.length){let e=document.createElement(`p`);e.className=`tf-not`,e.textContent=`No photos yet — the camera is one tap away.`,y.appendChild(e);return}for(let t of l){let r=document.createElement(`img`);r.src=t.veri,r.className=`tf-foto`,r.alt=`Park photo`,r.style.marginBottom=`4px`,y.appendChild(r);let i=document.createElement(`button`);i.type=`button`,i.className=`tf-buyuk`,i.style.cssText=`margin:0 0 12px;padding:9px;font-size:12.5px;`,t.paylasildi?(i.textContent=`Shared`,i.disabled=!0,i.style.opacity=`0.55`):(i.textContent=`Share`,i.addEventListener(`click`,()=>{t.paylasildi=!0,D(),e.ui.toast(`Shared with the park.`),[...n].sort(()=>Math.random()-.5).slice(0,1+Math.floor(Math.random()*3)).forEach((t,n)=>{setTimeout(()=>{d(1),c+=1,_(),g(t.ad,`liked your photo.`),e.bus.emit(`sfx`,`notify`)},2200+n*2600+Math.random()*1200)})})),y.appendChild(i)}}let O={gunes:`Sunny`,bulut:`Clouding over`,yagmur:`Raining`},k={yaz:`Summer`,sonbahar:`Autumn`,kis:`Winter`,ilkbahar:`Spring`};function A(){y.innerHTML=``,y.append(S(x));let e=document.createElement(`div`);e.className=`tf-baslik`,e.textContent=`Weather`;let n=document.createElement(`p`);n.className=`tf-not`,n.style.fontSize=`15px`;let r=document.createElement(`p`);r.className=`tf-not`;let i=()=>{n.textContent=`67 Park — ${O[t.simdiki]||t.simdiki} · ${k[t.mevsim]||``}`,r.textContent=`Next change in about ${Math.max(0,Math.round(t.kalan))} seconds.`};i();let a=setInterval(()=>{if(!document.body.contains(n)){clearInterval(a);return}i()},1e3);y.append(e,n,r)}function j(){v.classList.add(`acik`),x()}function M(){v.classList.remove(`acik`)}f.addEventListener(`click`,()=>{v.classList.contains(`acik`)?M():j()}),v.querySelector(`#tf-kapat`).addEventListener(`click`,M),window.addEventListener(`keydown`,e=>{let t=e.target===document.body||e.target===window||e.target===document;e.code===`KeyP`&&!e.repeat&&t&&(v.classList.contains(`acik`)?M():j())}),t.dinleyiciler.add((t,n)=>{t===`uyari`&&(c+=1,_(),g(`Weather`,n.mesaj),e.bus.emit(`sfx`,`notify`))})},{replay:!0});