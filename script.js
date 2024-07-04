document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation
  const links = document.querySelectorAll('nav a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});



function viewResume() {
  window.open(
    "https://drive.google.com/file/d/11Hp-Z-APLV03mU7sKapZrovW43X9vERM/view?usp=drive_link",
    "_blank"
  );
}


document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.getElementById("nav-toggle");
    var navMenu = document.getElementById("nav-menu");
    var navLinks = navMenu.querySelectorAll("a");
  
    // Function to toggle nav menu visibility
    function toggleNavMenu() {
      if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
      } else {
        navMenu.classList.add("hidden");
      }
    }
  
    // Click event for nav toggle button
    navToggle.onclick = function() {
      toggleNavMenu();
    };
  
    // Click event for each nav link
    navLinks.forEach(function(link) {
      link.onclick = function() {
        // Hide nav menu on smaller screens
        if (window.innerWidth <= 1024) {
          navMenu.classList.add("hidden");
        }
      };
    });
  
    // Close nav menu if user clicks outside of it on smaller screens
    document.addEventListener("click", function(event) {
      if (window.innerWidth <= 1024) {
        if (!event.target.closest("#nav-toggle") && !event.target.closest("#nav-menu")) {
          navMenu.classList.add("hidden");
        }
      }
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
  const glide = new Glide('#carousel-inventory-billing-app', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
  });

  glide.mount();
});




  
  
  
