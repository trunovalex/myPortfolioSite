/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, and the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL SEND ===============*/
// Получаем форму и элемент сообщения
var form = document.getElementById("contact-form");
var message = document.getElementById("contact-message");

// Обработчик отправки формы
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Отменяем отправку формы

  // Добавляем текст в элемент сообщения
  message.textContent = "✔ Message sent successfully";

  form.reset() //Сбросили все данные в форме
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
                sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})

/*=============== MODAL WINDOW ===============*/

document.getElementById("openButton").addEventListener("click", function() {
    document.getElementById("about__background").style.display = "block";
    document.getElementById("about__modal").style.display = "block";
  
    setTimeout(function() {
      document.getElementById("about__background").style.opacity = "1";
      document.getElementById("about__modal").classList.add("show");
      document.body.classList.add("modal-open"); // Добавляем класс для блокировки прокрутки
    }, 10);
  
    document.getElementById("about__background").addEventListener("click", function(event) {
      if (event.target === this) {
        closeAboutModal();
      }
    });
  });
  
  document.getElementById("closeButton").addEventListener("click", closeAboutModal);
  
  function closeAboutModal() {
    document.getElementById("about__background").style.opacity = "0";
    document.getElementById("about__modal").classList.remove("show");
  
    setTimeout(function() {
      document.getElementById("about__background").style.display = "none";
      document.getElementById("about__modal").style.display = "none";
      document.body.classList.remove("modal-open"); // Удаляем класс для разблокировки прокрутки
    }, 300);
  }
  
  /*=============== LANGUAGE ===============*/
  function toggleLanguage() {
    var checkbox = document.getElementById('languageToggle');
    var label = document.querySelector('.label');
    var elements = document.querySelectorAll('[data-en], [data-ru]');
  
    if (checkbox.checked) {
      label.textContent = 'en';
      elements.forEach(function(element) {
        var enText = element.getAttribute('data-en');
        element.textContent = enText;
      });
    } else {
      label.textContent = 'ru';
      elements.forEach(function(element) {
        var ruText = element.getAttribute('data-ru');
        element.textContent = ruText;
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    toggleLanguage();
  });

  
  
  
  
  
