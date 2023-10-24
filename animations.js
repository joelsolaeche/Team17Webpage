const cards = document.querySelectorAll('.card__inner');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
  
   
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 