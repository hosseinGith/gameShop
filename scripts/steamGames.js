function main() {
    const gifLoadDocument = document.querySelector(".gifLoadDocument"),
      checkShopeds = document.querySelector(".checkShopPcs"),
      pcsShoped = document.querySelector(".pcsShoped"),
      menuBtn = document.querySelector(".menuBtn"),
      menuContainer = document.querySelector(".menuContainer"),
      chooseOptionMenu = document.querySelector(".chooseOptionMenu"),
      optionMenuBtn = document.querySelector(".optionMenu"),
      sortByBtn = document.querySelector(".sortByBtn"),
      cartShop = document.querySelector(".cartShop"),
      navChild = document.querySelector(".navChild"),
      loginBtn = document.querySelector(".contact"),
      signUpSignInContainer = document.querySelector(".signUpSignInContainer"),
      dayNBtn = document.querySelector(".dayNBtn"),
      daySound = document.querySelector(".dayAudio"),
      nightSound = document.querySelector(".nightAudio");
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
        daySound.currentTime = 0;
        daySound.play();
        nightSound.pause();
      } else {
        checkDayNight = false;
        nightSound.currentTime = 0;
        nightSound.play();
        daySound.pause();
      }
      localStorage.setItem("checkDayNight", checkDayNight);
    });
    optionMenuBtn.addEventListener("click", () => {
      chooseOptionMenu.classList.remove("active");
    });
  
    sortByBtn.addEventListener("click", () => {
      chooseOptionMenu.classList.add("active");
    });
    loginBtn.addEventListener("click", () => {
      signUpSignInContainer.classList.add("active");
    });
    signUpSignInContainer.addEventListener("click", () => {
      displayElementWithAnimateMouseLeave(signUpSignInContainer);
    });
    navChild.addEventListener("mouseover", () => {
      displayElementWithAnimateHover(navChild);
    });
    navChild.addEventListener("mouseleave", () => {
      displayElementWithAnimateMouseLeave(navChild);
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
    gifLoadDocument.classList.add("animation");
    gifLoadDocument.addEventListener("animationend", () =>
      gifLoadDocument.remove()
    );
    window.addEventListener("click", (e) => {
      if (e.target === menuContainer) {
        menuContainer.classList.add("unActive");
        menuContainer.classList.remove("active");
        document.body.classList.remove("blur");
      }
    });
  }
  document.addEventListener("DOMContentLoaded", main);
  