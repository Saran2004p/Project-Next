const menu = document.queryselector('#mobile-menu')
const menuLinks = document.queryselector('.navbar__menu')

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});