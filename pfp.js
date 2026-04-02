const cat = document.getElementById("pfp");

cat.addEventListener("mouseover", ()=>{
    cat.setAttribute("src", "https://i.pinimg.com/474x/e0/51/9e/e0519efc2ab6f5d7f6e83f0f8416f97d.jpg");

} );

cat.addEventListener("mouseout", ()=>{
    cat.setAttribute("src", "Images/pfp.png");

} );