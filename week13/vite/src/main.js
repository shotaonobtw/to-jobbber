import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="counter">
    <p class="eyebrow">WEEK 13 · VITE</p>
    <h1>カウンター</h1>
    <p class="description">ボタンを押して数字を増やそう。</p>
    <output id="count" class="count" aria-live="polite">0</output>
    <button id="increment" type="button">増やす</button>
    <a class="back-link" href="../">Week 13のページに戻る</a>
  </main>
`;

const countEl = document.querySelector('#count');
const incrementButton = document.querySelector('#increment');
let count = 0;

incrementButton.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});
