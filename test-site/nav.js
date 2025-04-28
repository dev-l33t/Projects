// Fetch the navbar.html and inject it into the placeholder
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // Inject navbar HTML into the placeholder
    document.getElementById('header-nav').innerHTML = data;
    
    // After the navbar is loaded, add the event listeners
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Hamburger menu toggle action
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close the menu when any link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  })
  .catch(error => console.error('Error loading navbar:', error)); // Log any errors that occur
