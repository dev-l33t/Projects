// Load navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-nav').innerHTML = data;
  })
  .then(() => {
    // After navbar is loaded, run the hamburger script
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close menu when any link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  });
