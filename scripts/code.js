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
//headerTitle.innerText = collectionTitle;

// document.getElementById("collections-new-in").addEventListener('click', 
// renameHeader("New In"));
// document.getElementById("collections-baby").addEventListener('click', renameHeader("Baby"));
// document.getElementById("collections-life").addEventListener('click', renameHeader("Lifestyle"));


function renameHeader(title) {
    console.log(title);
    document.addEventListener("load", () => {
    document.getElementById("collectionsTitle").innerHTML = title;
});
    document.getElementById("collectionsTitle").innerHTML = title;
}