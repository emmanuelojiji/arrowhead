window.onload = () => {
  const header = document.querySelector(".header");
  const menuArrow = document.querySelector(".menu-arrow");
  const mobileNav = document.querySelector(".mobile-nav");

  menuArrow.onclick = () => {
    if (mobileNav.style.display == "flex") {
      setTimeout(() => {
        mobileNav.style.display = "none";
      },320);
      mobileNav.style.height = "0";
      menuArrow.classList.remove('menu-open');
    } else {
      setTimeout(() => {
        mobileNav.style.height = "80vh";
      });
      mobileNav.style.display = "flex";
      menuArrow.classList.add('menu-open');
    }
  };
};
