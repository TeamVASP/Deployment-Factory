// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Add any client-side scripting here

  // For example, you can add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // You can add more client-side functionality as needed
  // For a static site on GitHub Pages, keep it lightweight and focused on user interactions.
});
