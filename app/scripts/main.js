//
// Open/close mobile menu
//

var headerMenu = document.querySelector('.header__menu');

if (headerMenu) {
  headerMenu.addEventListener('click', function () {
    document
      .querySelector('.header__nav')
      .classList.toggle('header__nav--open');
  });
}

//
// Dots generate for sliders
//

var sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function (dotBlock) {
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

var heroSlider = document.querySelector('.hero__slider .glide');

if (heroSlider) {
  var heroSliderG = new Glide(heroSlider, {
    perView: 1,
    gap: 0
  });

  heroSliderG.on('move', function () {
    let bullets = document.querySelectorAll('.glide__bullet');
    bullets.forEach(function (elem) {
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

var scheduleSlider = document.querySelector('.schedule__slider .glide');

if (scheduleSlider) {
  var scheduleSliderOpt = {
    type: 'carousel',
    perView: 4,
    gap: 21,
    breakpoints: {
      320: {
        perView: 1,
        peek: 10
      },
      580: {
        perView: 1,
        peek: 50
      },
      991: {
        perView: 2,
        peek: 0
      },
      1200: {
        perView: 3
      }
    }
  };
  var scheduleSliderG = new Glide(scheduleSlider, scheduleSliderOpt).mount();
}

//
// Action block on mobile
//

var actionBlock = document.querySelector('.blog-new__action');

if (actionBlock) {
  var blogNew = document.querySelector('.blog-new');
  var newActionBlock = actionBlock.cloneNode(true);

  newActionBlock.classList.add('blog-new__action--mobile');
  blogNew.insertBefore(newActionBlock, blogNew.children[0]);
}

//
// Reviews slider
//

var reviewsSlider = document.querySelector('.reviews__slider .glide');

if (reviewsSlider) {
  var reviewsSliderOpt = {
    type: 'carousel',
    perView: 2,
    gap: 20,
    breakpoints: {
      385: {
        perView: 1,
        peek: 0
      },
      580: {
        perView: 1,
        peek: 0
      },
      991: {
        perView: 1,
        peek: 0
      },
      1200: {
        perView: 2
      }
    }
  };
  var reviewsSliderG = new Glide(reviewsSlider, reviewsSliderOpt).mount();
}

//
// Home gallery slider
//

var gallerySlider = document.querySelector('.last__gallery .glide');

if (gallerySlider) {
  var gallerySliderInit = false;

  var gallerySliderFn = function () {
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
// Expert gallery slider
//

var galleryExpertSlider = document.querySelector('.expert-gallery__photos-slider .glide');

if (galleryExpertSlider) {
  var galleryExpertSliderInit = false;

  var galleryExpertSliderFn = function () {
    if (window.innerWidth < 768) {
      if (!galleryExpertSliderInit) {
        galleryExpertSliderInit = new Glide(galleryExpertSlider, {
          perView: 1,
          gap: 20,
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
      if (typeof galleryExpertSliderInit === 'object') {
        galleryExpertSliderInit.destroy();
        galleryExpertSliderInit = false;
      }
    }
  };

  galleryExpertSliderFn();
  window.addEventListener('resize', galleryExpertSliderFn);
}


//
// Events slider
//

var eventsSlider = document.querySelector('.events__events-slider .glide');

if (eventsSlider) {
  var eventsSliderOpt = {
    type: 'carousel',
    perView: 1,
  };
  var eventsSliderG = new Glide(eventsSlider, eventsSliderOpt).mount();
}


//
// Experts slider
//

var expertsSlider = document.querySelector('.experts__slider .glide');

if (expertsSlider) {
  var expertsSliderOpt = {
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
      580: {
        perView: 2,
        peek: 0
      },
      991: {
        perView: 2,
        peek: 0
      },
      1200: {
        perView: 3
      }
    }
  };
  var expertsSliderG = new Glide(expertsSlider, expertsSliderOpt).mount();
}

//
// expert mini-preson slider
//

var expertRecomendedSlider = document.querySelector('.expert-recomended .glide');

if (expertRecomendedSlider) {
  var expertRecomendedSliderOpt = {
    type: 'carousel',
    perView: 4,
    gap: 20,
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
        perView: 2,
        peek: 0
      },
      991: {
        perView: 3,
        peek: 0
      },
      1200: {
        perView: 4
      }
    }
  };
  var expertRecomendedSliderG = new Glide(expertRecomendedSlider, expertRecomendedSliderOpt).mount();
}
//
// Subscribe block in blog page on mobile
//

var subscribeBlock = document.querySelector('.blog__aside');
var blog = document.querySelector('.blog__articles');

if (subscribeBlock && blog) {
  var newsubscribeBlock = subscribeBlock.cloneNode(true);

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
  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
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

var windowWidth = window.innerWidth;
var expertStatBlock = document.querySelector('.expert__stat-wrap');

if (expertStatBlock) {
  function getPageTopLeft(el) {
    var rect = el.getBoundingClientRect();
    var docEl = document.documentElement;
    return rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
  }

  function windowsSize() {
    if (expertStatBlock && windowWidth < 768) {
      // var windowWidth = window.innerWidth;
      var left = getPageTopLeft(expertStatBlock);
      var documentWidth = document.documentElement.clientWidth;
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
    throttle(function () {
      windowsSize();
    }, 500)
  );
}

//
// Init smoth scroll
//

var scroll = new SmoothScroll('.scroll-to[href*="#"]', {
  offset: 65
});

//
// Tabs
//

var tabsItem = document.querySelectorAll('.tabs__link');

if (tabsItem) {
  tabsItem.forEach(function (item, id, er) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      er.forEach(function (item) {
        var idDisactive = item.getAttribute('href').substring(1);
        var tabContentDisactive = document.getElementById(idDisactive);
        tabContentDisactive.classList.remove('tabs--active');
        item.classList.remove('tabs--active');
      });

      var idActive = this.getAttribute('href').substring(1);
      var tabContentActive = document.getElementById(idActive);
      tabContentActive.classList.add('tabs--active');
      this.classList.add('tabs--active');
    });
  });
}

//
// Tabs all
//

var tabsItem = document.querySelectorAll('[data-tabs]');

if (tabsItem) {
  tabsItem.forEach(function (item, id, er) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      er.forEach(function (item) {
        var idDisactive = item.getAttribute('data-tabs').substring(1);
        var tabContentDisactive = document.getElementById(idDisactive);
        tabContentDisactive.classList.remove('tabs--active');
        item.classList.remove('tabs--active');
      });

      var idActive = this.getAttribute('data-tabs').substring(1);
      var tabContentActive = document.getElementById(idActive);
      tabContentActive.classList.add('tabs--active');
      this.classList.add('tabs--active');
    });
  });
}

//
// About certs slider
//

var aboutSlider = document.querySelector('.about__gallery .glide');

if (aboutSlider) {
  var aboutSliderInit = false;

  var aboutSliderFn = function () {
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

var expertCertSlider = document.querySelector('.expert-certificate .glide');

if (expertCertSlider) {
  var expertCertSliderInit = false;

  var expertCertSliderFn = function () {
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

var getTargetHTML = function (elem) {
  let id = elem.getAttribute('data-show-id');
  if (id === null) {
    id = elem.getAttribute('data-show-id-white');
  }

  var target = document.querySelector(`[data-id="${id}"]`);

  if (target === null) return '';

  return target.outerHTML;
};

document.querySelectorAll('[data-show-id]').forEach(function (elem) {
  var html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html).show;
});

document.querySelectorAll('[data-show-id-white]').forEach(function (elem) {
  var html = getTargetHTML(elem);
  elem.onclick = basicLightbox.create(html, {
    className: 'modal--white'
  }).show;
});

//
// About photos slider
//

var photosSlider = document.querySelector('.about__photos-slider .glide');

if (photosSlider) {
  var photosSliderInit = false;

  var photosSliderFn = function () {
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

var stickyNav = document.querySelector('.header');

if (stickyNav) {
  stickyNav.classList.add('header--is-load');

  var headerScroll = function () {
    if (stickyNav && window.innerWidth >= 768) {
      this.scrollY < 8 ?
        stickyNav.classList.remove('header--minify') :
        stickyNav.classList.add('header--minify');
    } else {
      stickyNav.classList.remove('header--minify');
    }
  };
  headerScroll();

  window.addEventListener('scroll', headerScroll);
  window.addEventListener('resize', headerScroll);
}

//
// Custom select
//

var customSelects = document.querySelector('select');

if (customSelects) {
  var select = new CustomSelect({
    elem: 'select'
  });

  var selectCities = new CustomSelect({
    elem: 'select-events'
  });
}

//
// Accordion with one actiove element
//

const accordionsOne = document.querySelectorAll('[data-accordion-one]');

if (accordionsOne.length) {
  const accord = function (elem) {
    elem.classList.toggle('accordion__header_active');

    let panel = elem.nextElementSibling;

    panel.style.maxHeight ?
      (panel.style.maxHeight = null) :
      (panel.style.maxHeight = panel.scrollHeight + 'px');
  };

  accordionsOne.forEach(function (elem, key, array) {
    elem.addEventListener('click', function () {
      array.forEach(function (elem) {
        elem.classList.remove('accordion__header_active');

        let panel = elem.nextElementSibling;
        panel.style.maxHeight = null;
      });

      accord(this);
    });
  });
}

//
// Timer
//

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('[data-timer="days"]');
  var hoursSpan = clock.querySelector('[data-timer=hours]');
  var minutesSpan = clock.querySelector('[data-timer=minutes]');
  var secondsSpan = clock.querySelector('[data-timer=seconds]');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse('Mon Oct 11 2018 10:04:58 GMT+0300'));
initializeClock('timer', deadline);


//
// Calendar
//

var element = document.getElementById('calendar');

function getEvents(date) {
  var mydate = new Date(date),
    date_str = mydate.getFullYear() + '-' + (mydate.getMonth() + 1) + '-' + mydate.getDate();

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("events_list").innerHTML = this.responseText;
      //console.log(this.responseText);
    }
  };
  xhttp.open("GET", "/assets/components/ajax/action.php?action=getEvent&event_date=" + date_str, true);
  xhttp.setRequestHeader('X-REQUESTED-WITH', 'XMLHttpRequest');
  xhttp.send();
}

new niceDatePicker({
  dom: document.getElementById('calendar'),
  onClickDate: getEvents,
  mode: 'en',
  plainEvent: events
});

document.getElementById("select-events").addEventListener('change', function () {
  console.log(this.value);
  getEvents(this.value);
});