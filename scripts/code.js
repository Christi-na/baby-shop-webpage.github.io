// Toggle Menu
let navBar = document.getElementById('nav-bar');
let pageBody = document.getElementsByTagName('body');
let showIcon = document.getElementById('mobile-menu_show');
let hideIcon = document.getElementById('mobile-menu_hide');


function showMenu(){
    navBar.style.left = '0';
    pageBody[0].style.overflow = 'hidden';
    showIcon.style.display = 'none';
    hideIcon.style.display = 'block';
}
function hideMenu(){
    navBar.style.left = '-1000px';
    showIcon.style.display = 'block';
    hideIcon.style.display = 'none';
}