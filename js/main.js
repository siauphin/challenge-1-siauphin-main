document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuBtn = document.querySelector(".menu-close-btn");

  function closeMenu() {
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openMenu() {
    menuBtn.classList.add("active");
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }
});
