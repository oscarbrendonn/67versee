var e=!1;function t(){if(e)return;e=!0;let t=document.createElement(`style`);t.textContent=`
.ps-objective{position:fixed;left:50%;top:72px;z-index:54;width:min(330px,calc(100vw - 32px));
  padding:12px 14px;border:1px solid rgba(221,212,198,.9);border-radius:16px;
  background:rgba(251,248,242,.94);box-shadow:0 8px 24px rgba(60,50,35,.16);
  color:#2a2724;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,system-ui,sans-serif;
  pointer-events:none;transform:translateX(-50%);transition:opacity .2s ease,transform .2s ease}
.ps-objective.is-leaving{opacity:0;transform:translate(-50%,-6px)}
.ps-objective-head{display:flex;gap:8px;align-items:center;margin-bottom:4px;font-size:14px;font-weight:850}
.ps-objective-kicker{font-size:10px;font-weight:850;letter-spacing:.1em;text-transform:uppercase;color:#8a6fb0}
.ps-objective-copy{font-size:13px;font-weight:700;line-height:1.35}
.ps-objective-controls{margin-top:5px;color:#655f58;font-size:11px;line-height:1.35}
.ps-result-hero{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:center;margin:2px 0 14px}
.ps-result-icon{grid-row:1 / 3;font-size:38px;line-height:1}
.ps-result-outcome{font-size:20px;font-weight:850;letter-spacing:-.02em}
.ps-result-summary{color:#655f58;line-height:1.45}
.ps-result-note{display:inline-flex;margin:0 0 14px}
.ps-result-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-bottom:14px}
.ps-result-stat{padding:10px 12px;border:1px solid #ddd4c6;border-radius:14px;background:#f4efe7}
.ps-result-stat span{display:block;color:#7a736a;font-size:10px;font-weight:850;letter-spacing:.06em;text-transform:uppercase}
.ps-result-stat strong{display:block;margin-top:3px;font-size:16px}
.ps-result-details{margin-bottom:14px}
.ps-result-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.ps-result-actions .uv-btn{width:100%}
@media(max-width:620px){
  .ps-objective{left:calc(env(safe-area-inset-left) + 10px);top:calc(env(safe-area-inset-top) + 148px);width:calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right) - 20px);padding:8px 10px;transform:none}
  .ps-objective.is-leaving{transform:translateY(-6px)}
  .ps-objective-head{gap:6px;margin-bottom:2px;font-size:13px}
  .ps-objective-copy{font-size:12px}
  .ps-objective-controls{margin-top:3px;font-size:10px}
  .ps-result-stats,.ps-result-actions{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){.ps-objective{transition:none}}
`,document.head.appendChild(t)}function n(e){return t(),{objective({icon:e=`🎮`,title:t,objective:n,controls:r,kicker:i=`Round objective`,duration:a=6500}){let o=document.createElement(`section`);o.className=`ps-objective`,o.setAttribute(`role`,`status`),o.setAttribute(`aria-live`,`polite`);let s=document.createElement(`div`);s.className=`ps-objective-head`;let c=document.createElement(`span`);c.setAttribute(`aria-hidden`,`true`),c.textContent=e;let l=document.createElement(`div`),u=document.createElement(`div`);u.className=`ps-objective-kicker`,u.textContent=i;let d=document.createElement(`div`);d.textContent=t,l.append(u,d),s.append(c,l);let f=document.createElement(`div`);if(f.className=`ps-objective-copy`,f.textContent=n,o.append(s,f),r){let e=document.createElement(`div`);e.className=`ps-objective-controls`,e.textContent=r,o.appendChild(e)}document.body.appendChild(o);let p=!1,m=0,h=window.setTimeout(()=>{o.classList.add(`is-leaving`),m=window.setTimeout(()=>o.remove(),240)},a);return{el:o,close(){p||(p=!0,clearTimeout(h),clearTimeout(m),o.remove())}}},result({title:t,icon:n=`🏁`,outcome:r,summary:i,stats:a=[],note:o=`Local practice`,details:s=null,replayLabel:c=`Play Again`,homeLabel:l=`Return to 67 Park`,onReplay:u=null,onHome:d}){let f=!0,p=`home`,m=e.ui.panel({title:t,closeLabel:l,onClose:()=>{f&&(f=!1,p===`replay`&&u?u():d?.())}}),h=document.createElement(`div`);h.className=`ps-result-hero`;let g=document.createElement(`div`);g.className=`ps-result-icon`,g.setAttribute(`aria-hidden`,`true`),g.textContent=n;let _=document.createElement(`div`);_.className=`ps-result-outcome`,_.textContent=r;let v=document.createElement(`div`);if(v.className=`ps-result-summary`,v.textContent=i,h.append(g,_,v),m.body.appendChild(h),o){let e=document.createElement(`div`);e.className=`uv-chip ps-result-note`,e.textContent=o,m.body.appendChild(e)}if(a.length){let e=document.createElement(`div`);e.className=`ps-result-stats`;for(let{label:t,value:n}of a){let r=document.createElement(`div`);r.className=`ps-result-stat`;let i=document.createElement(`span`);i.textContent=t;let a=document.createElement(`strong`);a.textContent=n,r.append(i,a),e.appendChild(r)}m.body.appendChild(e)}if(s){let e=document.createElement(`div`);e.className=`ps-result-details`,e.appendChild(s),m.body.appendChild(e)}let y=document.createElement(`div`);y.className=`ps-result-actions`;let b=null;u&&(b=e.ui.button(c,()=>{p=`replay`,m.close()},{primary:!0}),y.appendChild(b));let x=e.ui.button(l,()=>{p=`home`,m.close()},{primary:!u});return y.appendChild(x),m.body.appendChild(y),queueMicrotask(()=>{let e=b||x;f&&e.isConnected&&e.focus()}),{el:m.el,body:m.body,close:m.close,destroy(){f&&(f=!1,m.close())}}}}}export{n as t};