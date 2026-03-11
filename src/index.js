'use strict';

// Add Active navigation color
const navLinks = document.querySelectorAll('.header__nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});
