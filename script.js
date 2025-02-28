let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}