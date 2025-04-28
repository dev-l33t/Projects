fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-nav').innerHTML = data;
  });
