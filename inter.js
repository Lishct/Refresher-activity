let sliNdex = 1;
shoSli(sliNdex);

function plusLi(n) {
    shoSli(sliNdex += n);
}

function curSli(n) {
    shoSli(sliNdex = n);
}

function shoSli(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {sliNdex = 1}
  if (n < 1) {sliNdex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sliNdex-1].style.display = "block";
  dots[sliNdex-1].className += " active";
}