/*navbar toggle*/

const toggle = document.getElementsByClassName("toggle")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const toggleicon = document.getElementById("toggleicon");

toggle.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
    toggleicon.classList.toggle("fa-bars", "fa-times");
    toggleicon.classList.toggle("fa-times");
});

/*Scrolling*/

var shiftWindow = function () {
    
    /*var number = Math.floor(pageYOffset);
    console.log(number);
    console.log(pageYOffset);
    if (number === (Math.floor(pageYOffset - 45))) {
        scrollBy(0, 0);
        number = Math.floor(pageYOffset);
    }
    else if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
        scrollBy(0, -15);
        
       // number = Math.floor((pageYOffset));
       // console.log(number);
    }*/
    navBarLinks.classList.toggle("active");
    toggleicon.classList.toggle("fa-times");
};

if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);


