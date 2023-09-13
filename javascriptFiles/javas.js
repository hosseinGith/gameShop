const gifLoadDocument = document.querySelector(".gifLoadDocument");

function main() {
  const checkShopeds = document.querySelector(".checkShopPcs"),
    pcsShoped = document.querySelector(".pcsShoped"),
    menuBtn = document.querySelector(".menuBtn"),
    menuContainer = document.querySelector(".menuContainer"),
    chooseOptionMenu = document.querySelector(".chooseOptionMenu"),
    optionMenuBtn = document.querySelector(".optionMenu"),
    sortByBtn = document.querySelector(".sortByBtn"),
    cartShop = document.querySelector(".cartShop"),
    navChild = document.querySelector(".navChild"),
    moveIMGScrolling = document.querySelector(".moveIMGScrolling"),
    toFirstPage = document.querySelector(".toFirstPage"),
    dayNBtn = document.querySelector(".dayNBtn"),
    dayAudio = document.querySelector(".dayAudio"),
    nightAudio = document.querySelector(".nightAudio");
  
  let checkDayNight = false;
  //------------------function for add class to display element with animation----------------------
  function displayElementWithAnimateHover(element) {
    element.classList.add("active");
  }
  function displayElementWithAnimateMouseLeave(element) {
    element.classList.remove("active");
    element.classList.add("unActive");
    element.addEventListener("animationend", () => {
      element.classList.remove("unActive");
    });
  }
  //----------------------------------------------------------
  if (
    localStorage.getItem("checkDayNight") &&
    localStorage.getItem("checkDayNight") === "true"
  ) {
    document.body.classList.add("light");
  } else document.body.classList.remove("light");
  menuBtn.addEventListener("click", () => {
    document.body.classList.add("blur");
    menuContainer.classList.add("active");
    menuContainer.classList.remove("unActive");
  });
  menuContainer.addEventListener("animationend", () => {
    if (menuContainer.classList.contains("unActive")) {
      menuContainer.classList.remove("unActive");
    }
  });
  dayNBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      checkDayNight = true;
      dayAudio.currentTime = 0;
      nightAudio.currentTime = 0;
      dayAudio.play();
      nightAudio.pause();
    } else {
      checkDayNight = false;
      dayAudio.currentTime = 0;
      nightAudio.currentTime = 0;
      nightAudio.play();
      dayAudio.pause();
    }
    localStorage.setItem("checkDayNight", checkDayNight);
  });
  optionMenuBtn.addEventListener("click", () => {
    chooseOptionMenu.classList.remove("active");
  });

  sortByBtn.addEventListener("click", () => {
    chooseOptionMenu.classList.add("active");
  });

  cartShop.addEventListener("mouseover", () => {
    if (checkShopeds.classList.contains("active"))
      displayElementWithAnimateHover(cartShop);
  });
  cartShop.addEventListener("mouseleave", (e) => {
    if (
      checkShopeds.classList.contains("active") &&
      cartShop.parentElement.children[3] !== e.target
    )
      displayElementWithAnimateMouseLeave(cartShop);
  });
  if (Number(pcsShoped.innerHTML) === 0) {
    checkShopeds.classList.add("empty");
  }
  navChild.addEventListener("mouseover", () => {
    displayElementWithAnimateHover(navChild);
  });
  navChild.addEventListener("mouseleave", () => {
    displayElementWithAnimateMouseLeave(navChild);
  });
  toFirstPage.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  toFirstPage.addEventListener("mouseover", () => {
    toFirstPage.classList.add("active");
  });
  toFirstPage.addEventListener("mouseleave", () => {
    toFirstPage.classList.remove("active");
  });
  window.addEventListener("click", (e) => {
    if (e.target === menuContainer) {
      menuContainer.classList.add("unActive");
      menuContainer.classList.remove("active");
      document.body.classList.remove("blur");
    }
  });
  if (scrollY > 100) {
    displayElementWithAnimateHover(toFirstPage.parentElement);
  } else if (toFirstPage.parentElement.classList.contains("active")) {
    displayElementWithAnimateMouseLeave(toFirstPage.parentElement);
  }
  window.addEventListener("scroll", () => {
    if (scrollY > 100) {
      displayElementWithAnimateHover(toFirstPage.parentElement);
    } else if (toFirstPage.parentElement.classList.contains("active")) {
      displayElementWithAnimateMouseLeave(toFirstPage.parentElement);
    }
    if (window.innerWidth < 1000 || scrollY > 40) return;
    moveIMGScrolling.style.transform = `translateY(-${scrollY}px)`;
  });
  // for check the window if the width under 1050 the cartshop not displayed
  if (window.innerWidth > 1050) checkShopeds.classList.add("active");
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) checkShopeds.classList.add("active");
    else checkShopeds.classList.remove("active");
  });

  $(document).ready(function () {
    $(".aboutWebsiteOptions").owlCarousel({
      buttons: false,
      dots: false,
      responsiveRefreshRate: 200,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 10000,
      responsive: {
        0: { items: 1 },
        400: { items: 2 },
        1000: { items: 3 },
      },
    });
    $(".sect3Slider").owlCarousel({
      buttons: true,
      responsiveRefreshRate: 200,
      margin: 50,
      responsiveClass: true,
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
    $(".sect4Slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        500: {
          items: 4,
        },
        1000: {
          items: 8,
        },
      },
    });
    $(".section5Div .leftContainer").owlCarousel({
      loop: true,
      margin: 20,
      responsive: {
        0: {
          items: 2,
        },
        700: {
          items: 3,
        },
      },
    });
    $(".sect6Slider").owlCarousel({
      loop: true,
      margin: 20,
      responsive: {
        0: {
          items: 2,
        },
        700: {
          items: 4,
        },
      },
    });
    $(".sect8Slider").owlCarousel({
      loop: true,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 4,
        },
      },
    });
  });
  //-----for remove loading page when the all images are loaded-------------
   gifLoadDocument.classList.add("animation");
    gifLoadDocument.addEventListener("animationend", () =>
      gifLoadDocument.remove()
    );
}
document.addEventListener("DOMContentLoaded", main);
