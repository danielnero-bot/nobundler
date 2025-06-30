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
