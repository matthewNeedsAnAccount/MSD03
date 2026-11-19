const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventEvent?.();
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const revealTargets = document.querySelectorAll('.project, .about-copy, .contact-main');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(element => observer.observe(element));
