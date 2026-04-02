const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenue = document.querySelector(".navbar-menue");

navbarToggle.addEventListener("click", ()=>{
    navbarMenue.classList.toggle("active")
    
    navbarToggle.classList.toggle("active")
})
    