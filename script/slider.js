const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");
const images = [
  "./image/image-1.jpg",
  "./image/image-2.jpg",
  "./image/image-3.jpg",
];
const sliderImage = document.getElementById("slider");
const dots = document.querySelectorAll(".slider__dot--item");

let currentPosition = 0;

const changeDot = () => {
  dots.forEach((item) => {
    item.classList.remove("active");
  });
  dots.forEach((item, index) => {
    if (index === currentPosition) {
      item.classList.add("active");
    }
  });
};

leftBtn.addEventListener("click", () => {
  if (currentPosition <= 0) {
    currentPosition = images.length - 1;
    sliderImage.style.backgroundImage = "url(" + images[currentPosition] + ")";
    changeDot();
  } else {
    currentPosition--;
    sliderImage.style.backgroundImage = "url(" + images[currentPosition] + ")";
    changeDot();
  }
});

rightBtn.addEventListener("click", () => {
  if (currentPosition >= images.length - 1) {
    currentPosition = 0;
    sliderImage.style.backgroundImage = "url(" + images[currentPosition] + ")";
    changeDot();
  } else {
    currentPosition++;
    sliderImage.style.backgroundImage = "url(" + images[currentPosition] + ")";
    changeDot();
  }
});
