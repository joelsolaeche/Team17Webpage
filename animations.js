const cards = document.querySelectorAll('.card__inner');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
});


const cards1 = document.querySelectorAll('.card');
const fadeInCards = document.querySelectorAll('.fade-in');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkFadeIn() {
  fadeInCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (cardTop < window.innerHeight && cardBottom >= 0) {
      card.classList.add('is-visible');
    } else {
      card.classList.remove('is-visible');
    }
  });
}

window.addEventListener('scroll', debounce(checkFadeIn));

checkFadeIn();
// Path: animations.js

