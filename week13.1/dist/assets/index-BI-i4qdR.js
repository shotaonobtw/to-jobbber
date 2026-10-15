(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <main class="page">
    <header class="site-header">
      <a class="brand" href="./" aria-label="Week 13.1 ホーム">13.1</a>
      <span class="header-label">Vite Counter</span>
    </header>

    <section class="counter-card" aria-labelledby="page-title">
      <p class="eyebrow">POSSE CURRICULUM <span aria-hidden="true">/</span> WEEK 13</p>
      <h1 id="page-title">カウンター</h1>
      <p class="description">ボタンを押して、数字を動かしてみよう。</p>

      <div class="count-panel">
        <span class="count-label">現在のカウント</span>
        <output id="count" class="count" aria-live="polite" aria-atomic="true">0</output>
        <span id="count-message" class="count-message">ここからスタート</span>
      </div>

      <div class="controls" aria-label="カウンター操作">
        <button class="button button-secondary" type="button" data-action="decrement">
          <span class="button-symbol" aria-hidden="true">−</span>
          <span>減らす</span>
        </button>
        <button class="button button-primary" type="button" data-action="increment">
          <span class="button-symbol" aria-hidden="true">＋</span>
          <span>増やす</span>
        </button>
        <button class="button button-reset" type="button" data-action="reset">
          リセット
        </button>
      </div>

      <p class="hint">マイナスの数もカウントできます。</p>
    </section>

    <footer class="site-footer">
      <span>HTML <span aria-hidden="true">·</span> CSS <span aria-hidden="true">·</span> JavaScript</span>
      <span>Built with Vite</span>
    </footer>
  </main>
`;var e=document.querySelector(`#count`),t=document.querySelector(`#count-message`),n=0;function r(){e.textContent=n,e.classList.toggle(`is-positive`,n>0),e.classList.toggle(`is-negative`,n<0),t.textContent=n>0?`プラスです`:n<0?`マイナスです`:`ここからスタート`}document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{switch(e.dataset.action){case`increment`:n+=1;break;case`decrement`:--n;break;case`reset`:n=0;break;default:return}r()})});