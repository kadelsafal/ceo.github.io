function hamburger(){
const hamburger = document.querySelector(".hamburger");
const menu= document.querySelector(".menubar ul");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})
document.querySelectorAll(".menubar li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");

}))}


function togglebar(){
    var hamburger = document.querySelector(".hamburger");
    var menu = document.querySelector(".menubar ul");

    hamburger .classList.toggle('active');
    menu .classList.toggle('active')
}


hamburger()