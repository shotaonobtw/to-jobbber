import './style.css';

document.querySelector('#app').innerHTML = `
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
`;

const countEl = document.querySelector('#count');
const countMessageEl = document.querySelector('#count-message');
let count = 0;

function renderCount() {
  countEl.textContent = count;
  countEl.classList.toggle('is-positive', count > 0);
  countEl.classList.toggle('is-negative', count < 0);
  countMessageEl.textContent = count > 0
    ? 'プラスです'
    : count < 0
      ? 'マイナスです'
      : 'ここからスタート';
}

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.dataset.action) {
      case 'increment':
        count += 1;
        break;
      case 'decrement':
        count -= 1;
        break;
      case 'reset':
        count = 0;
        break;
      default:
        return;
    }

    renderCount();
  });
});
