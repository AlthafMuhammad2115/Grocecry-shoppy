const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

function prevSlide() {

  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  showSlide(prevIndex);
}

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

// Change slide every 3 seconds
setInterval(nextSlide,3000);


function changeRange(e) {
  var elem = document.getElementById('rangeDisplay');
  var value = e.target.value;
  elem.innerHTML = "$0 - $"+value;
}
function scrollr()
{
  var right=document.querySelector(".product_list");
 right.scrollBy(362,0);
}
function scrolll()
{
  var left=document.querySelector(".product_list");
 left.scrollBy(-362,0);
}
