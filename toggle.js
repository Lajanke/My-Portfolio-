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
    var number = Math.floor(pageYOffset);
    console.log(number);
    console.log(pageYOffset);
    if (number === (Math.floor(pageYOffset - 45))) {
        scrollBy(0, 0);
        number = Math.floor(pageYOffset);
    }
    else if ((window.innerHeight + window.pageYOffset) <= document.body.scrollHeight) {
        scrollBy(0, -45);
        number = Math.floor((pageYOffset));
        console.log(number);
    }
    navBarLinks.classList.toggle("active");
    toggleicon.classList.toggle("fa-times");
};

if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

/*countdown*/

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jun 12, 2020 17:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)


