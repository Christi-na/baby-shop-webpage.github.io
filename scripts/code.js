// Toggle Menu
let navBar = document.getElementById('nav-bar');
let pageBody = document.getElementsByTagName('body');
//let showIcon = document.getElementById('mobile-menu_show');
let hideIcon = document.getElementById('mobile-menu_hide');


function showMenu(){
    navBar.style.left = '0';
    pageBody[0].style.overflow = 'hidden';
    //showIcon.style.display = 'none';
    hideIcon.style.display = 'block';
}
function hideMenu(){
    navBar.style.left = '-1000px';
    //showIcon.style.display = 'block';
    hideIcon.style.display = 'none';
    pageBody[0].style.overflow = 'scroll';
}

//Popup window
let popupWindow = document.getElementById("popup");

function openPopup() {
    popupWindow.style.visibility = "visible";
    popupWindow.style.top = "50%";
}

function closePopup() {
    popupWindow.style.visibility = "hidden";
    popupWindow.style.top = "-50%";
}

//Collection title

const headerTitle = document.getElementById("collectionsTitle");

let collectionsTitle = localStorage.getItem("collectionsTitle");

if (!collectionsTitle) {
    collectionsTitle = "New In";
}

function renameHeader(title) {
    localStorage.setItem("collectionsTitle", title);
    collectionsTitle = localStorage.getItem("collectionsTitle");
    headerTitle.innerText = collectionsTitle;
}