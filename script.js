window.onload = () => {
  const header = document.querySelector(".header");
  const menuArrow = document.querySelector(".menu-arrow");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavContent = document.querySelector(".mobile-nav-content");

  menuArrow.onclick = () => {
    if (mobileNav.style.display == "flex") {
      setTimeout(() => {
        mobileNav.style.display = "none";
      },320);
      mobileNav.style.height = "0";
      menuArrow.classList.remove('menu-open');
      mobileNavContent.classList.remove('nav-content-transition');
      document.documentElement.style.overflow = 'auto';
     
    } else {
      setTimeout(() => {
        mobileNav.style.height = "80vh";
        mobileNavContent.classList.add('nav-content-transition');
      });
      mobileNav.style.display = "flex";
      menuArrow.classList.add('menu-open');
      document.documentElement.style.overflow = 'hidden';
    }
  };
};
