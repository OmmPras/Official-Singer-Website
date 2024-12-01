// Example: Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  