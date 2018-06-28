//
// Open/close mobile menu
//

const headerMenu = document.querySelector('.header__menu');

if (headerMenu) {
  headerMenu.addEventListener('click', function() {
    document
      .querySelector('.header__nav')
      .classList.toggle('header__nav--open');
  });
}

//
// Set body padding-top for fixed header
//

const setBodyPaddingTop = function() {
  let headerHeight = document.querySelector('.header').clientHeight;
  document.querySelector('body').style.paddingTop = headerHeight + 'px';
};

window.addEventListener('resize', setBodyPaddingTop);
window.addEventListener('DOMContentLoaded', setBodyPaddingTop);

//
// Dots generate for sliders
//

const sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function(dotBlock) {
    let sliderSlides = dotBlock.parentNode.querySelector('.glide__slides');

    for (let i = 0; i < sliderSlides.children.length; i++) {
      let sliderDot = document.createElement('div');
      sliderDot.classList.add('glide__bullet');
      sliderDot.setAttribute('data-glide-dir', '=' + i);

      dotBlock.appendChild(sliderDot);
    }
  });
}

//
// Hero slider
//

const heroSlider = document.querySelector('.hero__slider .glide');

if (heroSlider) {
  const heroSliderG = new Glide(heroSlider, {
    perView: 1,
    gap: 0
  });

  heroSliderG.on('move', function() {
    let bullets = document.querySelectorAll('.glide__bullet');
    bullets.forEach(function(elem) {
      elem.classList.remove('glide__bullet--active');
    });

    let activeBullet = document.querySelector(
      '.glide__bullet[data-glide-dir="=' + heroSliderG.index + '"]'
    );
    activeBullet.classList.add('glide__bullet--active');
  });

  heroSliderG.mount();
}

//
// Schedule slider
//

const scheduleSlider = document.querySelector('.schedule__slider .glide');

if (scheduleSlider) {
  const scheduleSliderG = new Glide(scheduleSlider, {
    type: 'carousel',
    perView: 4,
    gap: 21,
    breakpoints: {
      385: { perView: 1, peek: 10 },
      580: { perView: 1, peek: 50 },
      991: { perView: 2, peek: 0 },
      1200: { perView: 3 }
    }
  }).mount();
}

//
// Action block on mobile
//

const actionBlock = document.querySelector('.blog-new__action');

if (actionBlock) {
  const blogNew = document.querySelector('.blog-new');
  const newActionBlock = actionBlock.cloneNode(true);

  newActionBlock.classList.add('blog-new__action--mobile');
  blogNew.insertBefore(newActionBlock, blogNew.children[0]);
}

//
// Reviews slider
//

const reviewsSlider = document.querySelector('.reviews__slider .glide');

if (reviewsSlider) {
  const reviewsSliderG = new Glide(reviewsSlider, {
    type: 'carousel',
    perView: 2,
    gap: 20,
    breakpoints: {
      385: { perView: 1, peek: 0 },
      580: { perView: 1, peek: 0 },
      991: { perView: 1, peek: 0 },
      1200: { perView: 2 }
    }
  }).mount();
}
