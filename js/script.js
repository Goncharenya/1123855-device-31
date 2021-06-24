let activeSlider = document.querySelector('.active-slider'),
  slide = document.querySelector('.slide'),
  sliderNavItems = document.querySelectorAll('.slider-nav_item'),
  current = document.querySelector('.current'),
  sliderNav = document.querySelector('.slider-nav'),
  sliderBox = document.querySelector('.slider-first-box');


sliderNavItems.forEach((currentSlide, currentSlideIndex) => {
  currentSlide.addEventListener('click', event => {
    // проходим по всем слайдам
    const slides = sliderBox.querySelectorAll('.slider-first');

    slides.forEach((slide, slideIndex) => {
      // если это нужный слайд (совпадает порядковый номер)
      if (slideIndex === currentSlideIndex) {
        slide.classList.remove('slide');
        slide.classList.add('active-slider');
      } else {
        slide.classList.add('slide');
        slide.classList.remove('active-slider');
      }
    });

    // навигация
    sliderNavItems.forEach(item2 => {
      item2.classList.remove('current');
    });

    currentSlide.classList.add('current');
  })
})
