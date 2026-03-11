import React from 'react';
import './Navbar.css';


function Navbar() {
        // Define the handleClick function to toggle the navigation menu
        function handleClick() {
            const navLinks = document.querySelector(".nav__links");
            const navIcon = document.querySelector(".nav__icon i");
            
            // Toggle the 'active' class on the navigation links
            navLinks.classList.toggle("active");
            
            // Toggle the Font Awesome icons (bars and times)
            if (navLinks.classList.contains("active")) {
                navIcon.classList.remove("fa-bars");
                navIcon.classList.add("fa-times");
            } else {
                navIcon.classList.remove("fa-times");
                navIcon.classList.add("fa-bars");
            }
        }

  return (
<nav className="navbar">
  <div className="nav-left">
    <a href="#logo">Logo/Brand</a>
  </div>
  <div className="nav-center">
    <a href="#home">Home</a>
    <a href="#appointments">Appointments</a>
  </div>
  <div className="nav-right">
    <a href="../signup/signup.html">Sing Up</a>
    <a href="../login/login.html">Login</a>
  </div>
</nav>
  );
}

export default Navbar;