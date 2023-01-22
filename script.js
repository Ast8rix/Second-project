// объявляем переменную для хранения счётчика километров
let kmCounter = document.querySelector('#counter-km');
// объявляем переменную для хранения счётчика дней
let dayCounter = document.querySelector('#counter-days'); 


// смещение блока с видео про перегон Москва — Кострома
let kostromaOffset = document.querySelector('#city-kostroma').offsetTop;

// смещения остальных блоков
let ekbOffset = document.querySelector('#city-ekb').offsetTop;
let omskOffset = document.querySelector('#city-omsk').offsetTop;
let yablPerevalOffset = document.querySelector('#city-yablonovy-pereval').offsetTop;
let khabarovskOffset = document.querySelector('#city-khabarovsk').offsetTop; 


document.addEventListener('scroll', function () {
    // здесь будем сравнивать положения скролла и блоков

  let scrollY = window.pageYOffset;
// если позиция скролла меньше или равна позиции блока с городом Кострома
  if (scrollY <= kostromaOffset + 200) {
    // тогда в HTML переменных kmCounter и dayCounter записываем «ноль»
    kmCounter.textContent = 0;
    dayCounter.textContent = 0;
    // если позиция скролла меньше или равна позиции блока с городом Екатеринбург
  } else if (scrollY <= ekbOffset + 500) {
    // тогда в HTML переменных kmCounter и dayCounter записываем 376 (км) и 1 (первый день в пути)
    kmCounter.textContent = 376;
    dayCounter.textContent = 1;
    // а когда позиция скролла больше, чем у блока с Екатеринбургом, и меньше, чем у блока с Омском, сохраняем в переменных 1819 (км) и 2 (дня в пути)
  } else if (scrollY <= omskOffset + 500) {
    kmCounter.textContent = 1819;
    dayCounter.textContent = 2;
    // далее по аналогии
  } else if (scrollY <= yablPerevalOffset + 500) {
    kmCounter.textContent = 6110;
    dayCounter.textContent = 4;
  } else if (scrollY <= khabarovskOffset + 500) {
    kmCounter.textContent = 8534;
    dayCounter.textContent = 6;
    // если позиция скролла превысила координату блока с Хабаровском - мы на последнем перегоне
  } else {
    kmCounter.textContent = 9300;
    dayCounter.textContent = 6;
  }
});
