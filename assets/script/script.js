const navBar = document.querySelector('header.navbar')
const buttonLinks = document.querySelectorAll(".nav-list a");

window.onscroll = function () {
  if (window.scrollY > 30) {
    navBar.classList.add('shadow-nav')
  } else {
    navBar.classList.remove('shadow-nav');
  }
}

for (const links of buttonLinks) {
  links.addEventListener('click', onclick)
};

function onclick(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const linkHref = document.querySelector(href).offsetTop - 180;
  scrollTo({
    top: linkHref,
    behavior: "smooth"
  })
}

const navbarMenu = document.querySelector('.nav-list')
document.querySelector('#hamburger-menu').onclick = () => {
  navbarMenu.classList.toggle('active');
}

const hamburgerMenu = document.querySelector('#hamburger-menu')
document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove('active');
  }
});


