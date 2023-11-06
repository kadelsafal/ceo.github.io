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
function btn() {
    const icon1 = document.querySelector(".icon1");
    const icon2 = document.querySelector(".icon2");

    icon2.addEventListener('click', function() {
        window.location.href = 'tel:9840132781';
    }
    );

    // Trigger the click event for icon2 automatically
    
}
btn()
hamburger()
const navLinks = document.querySelectorAll('.menubar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the active class to the clicked link
        this.classList.add('active');
    });
});