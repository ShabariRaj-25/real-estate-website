/* Image Gallery click zoom */
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
img.addEventListener("click", () => {
img.classList.toggle("zoom");
});
});



/* Project page modal */

function openModal(img){
document.getElementById("imageModal").style.display = "block";
document.getElementById("modalImage").src = img.src;
}

function closeModal(){
document.getElementById("imageModal").style.display = "none";
}


/* Mobile menu toggle */
document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if(toggle && menu){

toggle.addEventListener("click", function(){
menu.classList.toggle("active");
});

}

});


/* Contact Form Validation */
const form = document.querySelector(".contact-form");
if(form){

form.addEventListener("submit", function(e){

const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;

if(name === "" || email === ""){
alert("Please fill all required fields");
e.preventDefault();
}
}
);
}


/* ---- Smooth Scroll --- */

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

if(this.hash !== ""){

e.preventDefault();

const target = document.querySelector(this.hash);

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* ----- Floating Button scroll effect----- */

window.addEventListener("scroll", () => {

const floating = document.querySelector(".floating-panel");

if(window.scrollY > 300){
floating.style.opacity = "1";
}else{
floating.style.opacity = "0.7";
}

});