const hamburgerMenu = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav')


hamburgerMenu.addEventListener('click', function () {
  // give the hamburger menu a class to trigger the svg
  // animation
  hamburgerMenu.classList.toggle('hamburger--active');

  // show the responsive nav

  mobileNav.classList.toggle('mobile-nav--active');

  console.log('testing is this working?')
})