const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenue = document.querySelector(".navbar-menue");

navbarToggle.addEventListener("click", () => {
    navbarMenue.classList.toggle("active")

    navbarToggle.classList.toggle("active")
})



const typed1 = new Typed(".text1", { 
    strings: ["Undergraduate IT Student", "Frontend Developer", "Web Developer"], 
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

