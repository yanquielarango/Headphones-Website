/* SHOW MENU*/

const navMenu = document.querySelector('.nav-menu')
const navToggle = document.querySelector('.nav-toggle')
const navClose = document.querySelector('.nav-close')
  
/* MENU SHOW */ 

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})


/*/ MENU HIDDEN */ 
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})