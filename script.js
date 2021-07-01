'use strict';

const section = document.querySelector('.services');
const client = document.querySelector('.clientel');
const review = document.querySelector('.review');
const cta = document.querySelector('.cta');
const footer = document.querySelector('.footer');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

sectionObserver.observe(section);
sectionObserver.observe(client);
sectionObserver.observe(review);
sectionObserver.observe(cta);
sectionObserver.observe(footer);
