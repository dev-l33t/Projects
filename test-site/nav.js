// Load navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-nav').innerHTML = data;

    // After navbar is loaded, run the hamburger menu script
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from propagating to document click listener
      navLinks.classList.toggle('show');
    });

    // Close menu when any link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // Close menu if user clicks anywhere outside navLinks or hamburger
    document.addEventListener('click', (event) => {
      // Check if the click is outside the navLinks and hamburger
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('show');
      }
    });
  });
