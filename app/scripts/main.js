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
  const scheduleSliderOpt = {
    type: 'carousel',
    perView: 4,
    gap: 21,
    breakpoints: {
      385: { perView: 1, peek: 10 },
      580: { perView: 1, peek: 50 },
      991: { perView: 2, peek: 0 },
      1200: { perView: 3 }
    }
  };
  const scheduleSliderG = new Glide(scheduleSlider, scheduleSliderOpt).mount();
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
  const reviewsSliderOpt = {
    type: 'carousel',
    perView: 2,
    gap: 20,
    breakpoints: {
      385: { perView: 1, peek: 0 },
      580: { perView: 1, peek: 0 },
      991: { perView: 1, peek: 0 },
      1200: { perView: 2 }
    }
  };
  const reviewsSliderG = new Glide(reviewsSlider, reviewsSliderOpt).mount();
}

//
// Home gallery slider
//

const gallerySlider = document.querySelector('.last__gallery .glide');

if (gallerySlider) {
  var gallerySliderInit = false;

  const gallerySliderFn = function() {
    if (window.innerWidth < 768) {
      if (!gallerySliderInit) {
        gallerySliderInit = new Glide(gallerySlider, {
          perView: 1,
          gap: 10,
          peek: {
            after: 30,
            before: 0
          },
          breakpoints: {
            385: {
              perView: 1,
              peek: {
                after: 30,
                before: 0
              }
            },
            580: {
              perView: 1,
              peek: {
                after: 30,
                before: 0
              }
            },
            991: {
              perView: 1,
              peek: {
                after: 30,
                before: 0
              }
            }
          }
        }).mount();
      }
    } else {
      // destroy slider if init
      if (typeof gallerySliderInit === 'object') {
        gallerySliderInit.destroy();
        gallerySliderInit = false;
      }
    }
  };

  gallerySliderFn();
  window.addEventListener('resize', gallerySliderFn);
}

//
// Experts slider
//

const expertsSlider = document.querySelector('.experts__slider .glide');

if (expertsSlider) {
  const expertsSliderOpt = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      385: {
        perView: 1,
        gap: 0,
        peek: {
          after: 80,
          before: 0
        }
      },
      580: { perView: 2, peek: 0 },
      991: { perView: 2, peek: 0 },
      1200: { perView: 3 }
    }
  };
  const expertsSliderG = new Glide(expertsSlider, expertsSliderOpt).mount();
}

//
// Subscribe block in blog page on mobile
//

const subscribeBlock = document.querySelector('.blog__aside');
const blog = document.querySelector('.blog__articles');

if (subscribeBlock && blog) {
  const newsubscribeBlock = subscribeBlock.cloneNode(true);

  newsubscribeBlock.classList.add('blog__aside--mobile');
  blog.insertBefore(newsubscribeBlock, blog.children[2]);
}
//
// function throttle from underscroe
//

function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

//
// resize expert block
//

const windowWidth = window.innerWidth;
const expertStatBlock = document.querySelector('.expert__stat-wrap');

if (expertStatBlock) {
  function getPageTopLeft(el) {
    var rect = el.getBoundingClientRect();
    var docEl = document.documentElement;
    return rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
  }

  function windowsSize() {
    if (expertStatBlock && windowWidth < 768) {
      // const windowWidth = window.innerWidth;
      const left = getPageTopLeft(expertStatBlock);
      const documentWidth = document.documentElement.clientWidth;
      console.log(left);
      console.log(documentWidth);
      expertStatBlock.style.width = documentWidth + 'px';
      expertStatBlock.style.marginLeft = '-' + left + 'px';
    } else {
      //expertStatBlock.style.width = '100%';
      //expertStatBlock.style.marginLeft = '0';
    }
  }

  windowsSize();
  window.addEventListener(
    'resize',
    throttle(function() {
      windowsSize();
    }, 500)
  );
}

//
// Init smoth scroll
//

var scroll = new SmoothScroll('.scroll-to[href*="#"]');

//
// Tabs
//

const tabsItem = document.querySelectorAll('.tabs__link');

if (tabsItem) {
  tabsItem.forEach(function(item, id, er) {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      er.forEach(function(item) {
        const idDisactive = item.getAttribute('href').substring(1);
        const tabContentDisactive = document.getElementById(idDisactive);
        tabContentDisactive.classList.remove('tabs--active');
        item.classList.remove('tabs--active');
      });

      const idActive = this.getAttribute('href').substring(1);
      const tabContentActive = document.getElementById(idActive);
      tabContentActive.classList.add('tabs--active');
      this.classList.add('tabs--active');
    });
  });
}

//
// About certs slider
//

const aboutSlider = document.querySelector('.about__gallery .glide');

if (aboutSlider) {
  var aboutSliderInit = false;

  const aboutSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!aboutSliderInit) {
        aboutSliderInit = new Glide(aboutSlider, {
          perView: 1,
          gap: 10,
          peek: {
            after: 30,
            before: 0
          },
          breakpoints: {
            385: {
              perView: 1,
              gap: 10,
              peek: {
                after: 0,
                before: 0
              }
            },
            580: {
              gap: 20,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            },
            991: {
              gap: 20,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            }
          }
        }).mount();
      }
    } else {
      // destroy slider if init
      if (typeof aboutSliderInit === 'object') {
        aboutSliderInit.destroy();
        aboutSliderInit = false;
      }
    }
  };

  aboutSliderFn();
  window.addEventListener('resize', aboutSliderFn);
}

//
// expert certifica
//

const expertCertSlider = document.querySelector('.expert-certificate .glide');

if (expertCertSlider) {
  var expertCertSliderInit = false;

  const expertCertSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!expertCertSliderInit) {
        expertCertSliderInit = new Glide(expertCertSlider, {
          perView: 1,
          gap: 10,
          peek: {
            after: 30,
            before: 0
          },
          breakpoints: {
            385: {
              perView: 1,
              gap: 10,
              peek: {
                after: 0,
                before: 0
              }
            },
            580: {
              gap: 20,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            },
            991: {
              gap: 20,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            }
          }
        }).mount();
      }
    } else {
      // destroy slider if init
      if (typeof expertCertSliderInit === 'object') {
        expertCertSliderInit.destroy();
        expertCertSliderInit = false;
      }
    }
  };

  expertCertSliderFn();
  window.addEventListener('resize', expertCertSliderFn);
}

//
// Modals
//

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function closeModal() {
  eventFire(document.querySelector('.basicLightbox '), 'click');
}

const getTargetHTML = function(elem) {
  let id = elem.getAttribute('data-show-id');
  if (id === null) {
    id = elem.getAttribute('data-show-id-white');
  }

  const target = document.querySelector(`[data-id="${id}"]`);

  if (target === null) return '';

  return target.outerHTML;
};

document.querySelectorAll('[data-show-id]').forEach(function(elem) {
  const html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html).show;
});

document.querySelectorAll('[data-show-id-white]').forEach(function(elem) {
  const html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html, { className: 'modal--white' }).show;
});

//
// About photos slider
//

const photosSlider = document.querySelector('.about__photos-slider .glide');

if (photosSlider) {
  var photosSliderInit = false;

  const photosSliderFn = function() {
    if (window.innerWidth < 768) {
      if (!photosSliderInit) {
        photosSliderInit = new Glide(photosSlider, {
          perView: 1,
          gap: 0,
          peek: {
            after: 30,
            before: 0
          },
          breakpoints: {
            385: {
              perView: 1,
              gap: 0,
              peek: {
                after: 0,
                before: 0
              }
            },
            580: {
              gap: 0,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            },
            991: {
              gap: 0,
              perView: 2,
              peek: {
                after: 0,
                before: 0
              }
            }
          }
        }).mount();
      }
    } else {
      // destroy slider if init
      if (typeof photosSliderInit === 'object') {
        photosSliderInit.destroy();
        photosSliderInit = false;
      }
    }
  };

  photosSliderFn();
  window.addEventListener('resize', photosSliderFn);
}

//
// Minify header when page scroll
//

const stickyNav = document.querySelector('.header');

if (stickyNav) {
  stickyNav.classList.add('header--is-load');

  const headerScroll = function() {
    if (stickyNav && window.innerWidth >= 768) {
      this.scrollY < 8
        ? stickyNav.classList.remove('header--minify')
        : stickyNav.classList.add('header--minify');
    } else {
      stickyNav.classList.remove('header--minify');
    }
  };
  headerScroll();

  window.addEventListener('scroll', headerScroll);
  window.addEventListener('resize', headerScroll);
}
