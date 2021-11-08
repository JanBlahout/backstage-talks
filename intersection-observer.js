'use strict';

const sectionFive = document.querySelector('.section5');
const sectionFour = document.querySelector('.section4');
const sectionThree = document.querySelector('.section3');
const sectionTwo = document.querySelector('.section2');
const sectionOne = document.querySelector('.section1');

// const sectionContainer = document.querySelector('.section-container');
const sections = document.querySelectorAll('section');

const options = {
  root: null,
  treshold: 0,
  rootMargin: '-300px',
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    handleClass(entry.target.id);
    console.log(entry.target.id);
  });
}, options);

function handleClass(entry) {
  const links = document.querySelectorAll('.navigation__link');
  links.forEach(link => link.classList.remove('bold-text'));
  const link = document.querySelector('.navigation__link.' + entry);
  link.classList.add('bold-text');

  switch (entry) {
    case 'issue5':
      sections.forEach(section => (section.style.backgroundColor = '#00c1b5'));
      break;
    case 'issue4':
      sections.forEach(section => (section.style.backgroundColor = '#ff651a'));
      break;
    case 'issue3':
      sections.forEach(section => (section.style.backgroundColor = '#ffbe00'));
      break;
    case 'issue2':
      sections.forEach(section => (section.style.backgroundColor = '#1d3fbb'));
      break;
    case 'issue1':
      sections.forEach(section => (section.style.backgroundColor = '#e30512'));
      break;
  }
}

sections.forEach(section => observer.observe(section));
