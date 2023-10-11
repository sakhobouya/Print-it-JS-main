const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}
const listdots = document.querySelectorAll(".dot");
listdots[0].classList.add("dot_selected");

let image1 = document.createElement("img");
image1.src = "assets/images/slideshow/slide1.jpg";
mabalisediv = document.getElementById("arrow");

document.body.appendChild(image1);
let image2 = document.createElement("img");

image2.src = "assets/images/slideshow/slide2.jpg";
document.body.appendChild(image2);

let currentslide = 0;
const tagLine = document.querySelector(".tagline");
const image = document.querySelector(".banner-img");

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
arrowleft.addEventListener("click", function () {
  if (currentslide == 0) {
    currentslide = slides.length - 1;
  } else {
    currentslide--;
  }
  tagLine.innerHTML = slides[currentslide].tagLine;
  image.src = "assets/images/slideshow/" + slides[currentslide].image;

  for (let i = 0; i < listdots.length; i++) {
    listdots[i].classList.remove("dot_selected");
  }
  listdots[currentslide].classList.add("dot_selected");
});

arrowright.addEventListener("click", function () {
  if (currentslide == slides.length - 1) {
    currentslide = 0;
  } else {
    currentslide++;
  }
  tagLine.innerHTML = slides[currentslide].tagLine;
  image.src = "assets/images/slideshow/" + slides[currentslide].image;
  for (let i = 0; i < listdots.length; i++) {
    listdots[i].classList.remove("dot_selected");
  }

  listdots[currentslide].classList.add("dot_selected");
});
