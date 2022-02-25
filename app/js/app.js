// Header background change

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// services modal
const modalViews = document.querySelectorAll('.services_modal'),
  modalBtn = document.querySelectorAll('.services_button'),
  modalClose = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtn.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal');
    });
  });
});

// portfolio filter

let mixerPortfolio = mixitup('.work_container', {
  selectors: {
    target: '.work_card'
  },
  animation: {
    duration: 300
  }
});

const linkWork = document.querySelectorAll('.work_item');

function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((l) => l.addEventListener('click', activeWork));

// testimonials

let swiperTestimonials = new Swiper('.testimonial_container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPreviews: 2
    },
    768: {
      slidesPreviews: 2,
      spaceBetween: 48
    }
  }
});

// Scroll active
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);
