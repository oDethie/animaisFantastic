const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");

  function ativaTab(index) {
    tabContent.forEach((e) => {
      e.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((imgLi, i) => {
    imgLi.addEventListener("click", () => {
      ativaTab(i);
    });
  });
};

const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    accordionList.forEach((e) => {
      e.addEventListener("click", (event) => {
        const filhoDt = event.target.nextElementSibling;

        event.target.classList.toggle("ativo");

        filhoDt.classList.toggle("ativo");
      });
    });
  }
};

const scrollSmooth = () => {
  const menuInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  menuInterno.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const hrefItem = e.target.getAttribute("href");
      const section = document.querySelector(hrefItem);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};


const animaScroll = () => {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    };

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
};


initTabNav();
initAccordion();
scrollSmooth();
animaScroll();