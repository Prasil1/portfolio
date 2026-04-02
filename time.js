
const targetDate = new Date("july 2, 2026 17:50:50").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

   
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "Launched";
    }
}, 1000);


// ========================================

const cat = document.getElementById("change");

cat.addEventListener("mouseover", ()=>{
    cat.setAttribute("src", "https://i.pinimg.com/474x/e0/51/9e/e0519efc2ab6f5d7f6e83f0f8416f97d.jpg");

} );

cat.addEventListener("mouseout", ()=>{
    cat.setAttribute("src", "Images/bg-1.png");

} );



// -------------------------------------
const cat1 = document.getElementById("change-1");

cat1.addEventListener("mouseover", ()=>{
    cat1.setAttribute("src", "https://i.pinimg.com/474x/e0/51/9e/e0519efc2ab6f5d7f6e83f0f8416f97d.jpg");

} );

cat1.addEventListener("mouseout", ()=>{
    cat1.setAttribute("src", "https://shaynakit.com/storage/assets/cover_project/fMCumQyDj7Z3PQjY2fiaf9Me5h8fv8YDen06M1OU.png");

} );