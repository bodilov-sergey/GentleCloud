const slider = () => {
  const reviews = document.querySelector(".reviews");

  if (!reviews) {
    return;
  }

  const slider = reviews.querySelector(".reviews__slides");
  const slides = reviews.querySelectorAll(".reviews__slide");
  const prevBtn = reviews.querySelector(".reviews__control--prev");
  const nextBtn = reviews.querySelector(".reviews__control--next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function goToSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function goToPrevSlide() {
    goToSlide(currentIndex - 1);
  }

  function goToNextSlide() {
    goToSlide(currentIndex + 1);
  }

  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);
};

export default slider;
