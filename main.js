/* SHOW MENU*/

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLink = document.querySelectorAll('.nav__link');
/* MENU SHOW */ 
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});



/*/ MENU HIDDEN */ 
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});


/* REMOVE FROM MOBILE */
const  linkAction = () => {
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* SWIPER FAVORITE */

let swiperFavorite = new Swiper('.favorite__swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
 
});