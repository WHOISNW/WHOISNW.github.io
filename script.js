// script.js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Assuming 'bx-x' is a class you want to toggle
    navbar.classList.toggle('active'); // Assuming 'active' is a class you want to toggle
}
document.getElementById('contact-btn').addEventListener('click', function() {
    console.log("Button clicked!"); // This should show in the console when you click the button
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
});


