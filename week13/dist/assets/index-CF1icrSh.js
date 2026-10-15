(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <main class="counter">
    <p class="eyebrow">WEEK 13 · VITE</p>
    <h1>カウンター</h1>
    <p class="description">ボタンを押して数字を増やそう。</p>
    <output id="count" class="count" aria-live="polite">0</output>
    <button id="increment" type="button">増やす</button>
    <a class="back-link" href="../">Week 13のページに戻る</a>
  </main>
`;var e=document.querySelector(`#count`),t=document.querySelector(`#increment`),n=0;t.addEventListener(`click`,()=>{n+=1,e.textContent=n});