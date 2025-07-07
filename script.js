// Show button when user scrolls down 200px
window.onscroll = function() {
    const btn = document.getElementById("toTopBtn");
    if (btn) {
      btn.style.transition = "opacity 0.4s ease-in";
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
        btn.style.opacity = "1";
      } else {
        btn.style.opacity = "0";
      }
    }
  };
  
  // Scroll to top when button is clicked
  document.getElementById("toTopBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.querySelector('.nav-menu-full-page.utility-background-inverse.utility-text-inverse.w-nav-menu');
  if (menuBtn && navMenu) {
      menuBtn.addEventListener('click', function() {
          navMenu.style.display = 'block';
      });
  }
});
  document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.getElementById('closeMobileMenu');
  const navMenu = document.querySelector('.nav-menu-full-page.utility-background-inverse.utility-text-inverse.w-nav-menu');
  if (closeBtn && navMenu) {
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', function() {
        navMenu.style.display = 'none';
    });
}
});
// File: check-vpn.js

async function fetchData() {
  const response = await fetch('https://iplocate.io/api/lookup/17.253.0.0?apikey=6f87b02627eeecbfc174bfac42e7d843');
  const data = await response.json();
  console.log(data);
}

fetchData(); // Call the async function
