// PopUp

const btn = document.querySelector('.start');
const popUp = document.querySelector('.wrapper-popup');
const backgroundPopup = document.querySelector('.background-popup');
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', function () {
    popUp.classList.add('active');
    backgroundPopup.classList.add('active');
    wrapper.classList.add('blur');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
    popUp.classList.remove('active');
    backgroundPopup.classList.remove('active');
    wrapper.classList.remove('blur');
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
});

//Burger menu

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.burger-menu');
const starting = document.querySelector('.starting');
const education = document.querySelector('.education');
const logo = document.querySelector('.header__logo');
const body = document.querySelector('body');
const link = document.querySelectorAll('.navigation .link');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open');
    starting.classList.toggle('blur');
    education.classList.toggle('blur');
    logo.classList.toggle('blur');
    body.classList.toggle('block');
});