/*navbar toggle*/

const toggle = document.getElementsByClassName("toggle")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const toggleicon = document.getElementById("toggleicon");

toggle.addEventListener("click", () => {
    navBarLinks.classList.toggle("active" );
    toggleicon.classList.toggle("fa-bars", "fa-times");
    toggleicon.classList.toggle("fa-times");
});

/*Scrolling*/

var shiftWindow = function () {
    navBarLinks.classList.toggle("active");
    toggleicon.classList.toggle("fa-times");
};

if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);


