const slider = document.querySelector('.slider');
const tranperttext = document.querySelector('.tranperttext ');
const maintext = document.querySelector('.maintext ');
const btn = document.querySelector('.btn ');
const logo = document.querySelector('.logo ');
const menu = document.querySelector('.menu ');
const abouttext = document.querySelector('.textabout ');
const switchtodark = document.querySelector('.switchtodark ');




var tl = new TimelineMax();

tl.fromTo(
        slider,
        3, {
            height: "0%"
        }, {
            height: "100%",
            ease: Power3.easeInOut
        }
    )
    .fromTo(
        tranperttext, 2, {
            y: "-100%"
        }, {
            y: "0%",
            ease: Power2.easeInOut
        },
        "-=2"
    )

    .fromTo(
        maintext, 2, {
            opacity: 0,
            y: "100%"
        }, {
            opacity: 1,
            y: "0%",
            ease: Power2.easeInOut
        },
        "-=2"

    )
    .fromTo(
        btn, 2, {
            opacity: 0,
            x: "100%"
        }, {
            opacity: 1,
            x: "0%",
            ease: Power2.easeInOut
        },
        "-=2"

    )
    .fromTo(
        logo, 2, {
            opacity: 0,
            x: "-100%"
        }, {
            opacity: 1,
            x: "0%",
            ease: Power2.easeInOut
        },
        "-=2"
    )
    .fromTo(
        menu, 2, {
            opacity: 0,
            x: "100%"
        }, {
            opacity: 1,
            x: "0%",
            ease: Power2.easeInOut
        },
        "-=2"
    )
    .fromTo(
        switchtodark, 2, {
            opacity: 0,
            y: "100%"
        }, {
            opacity: 1,
            y: "0%",
            ease: Power2.easeInOut
        },
        "-=2"
    )


function change() {
    const darkMode = document.getElementById("dark");

    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

};
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

function about() {
    document.querySelector("#home").style.display = "none";
    document.querySelector("#about").style.display = "block";
    document.getElementById('about').classList.add('animate'); //add
}

$('.js-tilt').tilt({
    scale: 1.2
})