var but = document.getElementById("navBut");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var line1 = document.getElementById("lin1");
var line2 = document.getElementById("lin2");
var nav = document.getElementById("nav");


but.addEventListener("click",()=>{
    nav.classList.toggle("right");
    span1.classList.toggle("span1Style");
    span2.classList.toggle("span2Style");
    line1.classList.toggle("hide");
    line2.classList.toggle("hide");
})