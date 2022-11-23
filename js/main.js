// scroll to top btn 
const upBtn = document.getElementById("up-btn");
window.addEventListener("scroll", () => window.scrollY >= 300 ? upBtn.classList.add("show") : upBtn.classList.remove("show"));
upBtn.addEventListener("click", () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }))

// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".swiper")
const swiper = new Swiper(swiperElement, {
  // Optional parameters
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 7,
      spaceBetween: 15,
    },
  },
  pagination: {
    el: "",
  },
  navigation: {
    nextEl: "",
    prevEl: "",
  },
});

// Start set config of AOS Library
AOS.init();

// start counter number function
// const numsEle = document.querySelectorAll(".num");
// const sectionArrOne = document.querySelectorAll(".section-statistcs");

// function
