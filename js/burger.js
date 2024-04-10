const burger = () => {
  const burgerButton = document.querySelector(".header__burger");
  const navLinks = document.querySelector(".header__links");

  if (!burgerButton && !navLinks) {
    return;
  }

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("header__burger--open");
    navLinks.classList.toggle("header__links--open");
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.classList.contains("header__link")) {
      burgerButton.classList.remove("header__burger--open");
      navLinks.classList.remove("header__links--open");
    }
  });
};

export default burger;
