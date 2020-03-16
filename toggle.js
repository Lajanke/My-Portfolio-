const toggle = document.getElementsByClassName("toggle")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggle.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
});

var shiftWindow = function () {
    if ((window.innerHeight + window.pageYOffset) <= document.body.scrollHeight) {
        scrollBy(0, -45);
    }
    navBarLinks.classList.toggle("active");
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

