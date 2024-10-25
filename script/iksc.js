document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const crossIcon = document.querySelector(".cross-icon");

  // Toggle mobile menu and icons
  mobileMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();

    // Toggle the menu visibility
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("max-h-screen");

    // Toggle between hamburger and cross icons
    hamburgerIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("hidden");
  });

  // Close menu on clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      mobileMenu.classList.add("max-h-0");
      mobileMenu.classList.remove("max-h-screen");
      hamburgerIcon.classList.remove("hidden");
      crossIcon.classList.add("hidden");
    }
  });
});

