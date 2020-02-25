const toggle = document.getElementsByClassName("toggle")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggle.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
});