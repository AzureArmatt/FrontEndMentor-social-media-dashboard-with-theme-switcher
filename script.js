const pageSelector = document.querySelector(".page");
const switchSelector = document.querySelector(".switch");
const checkboxSelector = document.getElementById("checkbox");
const sliderSelector = document.querySelector(".slider");
const cardSelector = document.querySelectorAll(".card");
const contMainSelect = document.querySelector(".container__main");
const labelSelector = document.querySelector(".label");
//console.log(cardSelector);
switchSelector.addEventListener("click", function (e) {
  if (checkboxSelector.checked == true) {
    pageSelector.style.backgroundImage =
      "linear-gradient(to bottom,hsl(225, 100%, 98%) 30%,hsl(0, 0%, 100%) 30%)";
    pageSelector.style.color = "hsl(230, 17%, 14%)";
    sliderSelector.style.transform = "translateX(140%)";
    cardSelector.forEach(
      (el) => (el.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    sliderSelector.style.backgroundColor = "hsl(0, 0%, 100%)";
    //
    switchSelector.style.backgroundImage = "none";
    switchSelector.style.backgroundColor = "hsl(228, 12%, 44%)";
    //
    labelSelector.style.color = "hsl(228, 12%, 44%)";
    return;
  }

  sliderSelector.style.transform = "translateX(0%)";
  pageSelector.style.backgroundImage =
    "linear-gradient(to bottom,hsl(230, 17%, 14%) 30%,hsl(232, 19%, 15%) 30%)";
  pageSelector.style.color = "hsl(0, 0%, 100%)";
  cardSelector.forEach(
    (el) => (el.style.backgroundColor = "hsl(228, 28%, 20%)")
  );
  sliderSelector.style.backgroundColor = "hsl(228, 28%, 20%)";
  //
  switchSelector.style.backgroundImage =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  switchSelector.style.backgroundColor = "none";
  //
  labelSelector.style.color = "hsl(0, 0%, 100%)";
});

cardSelector.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    if (checkboxSelector.checked == true) {
      el.style.backgroundColor = "hsl(228, 34%, 66%)";
      return;
    }
    el.style.backgroundColor = "hsl(226, 36%, 91%)";
  });
});

cardSelector.forEach((el) => {
  el.addEventListener("mouseout", function (e) {
    if (checkboxSelector.checked == true) {
      el.style.backgroundColor = "hsl(228, 28%, 20%)";
      return;
    }
    el.style.backgroundColor = "hsl(227, 47%, 96%)";
  });
});

switchSelector.addEventListener("mouseover", function (e) {
  if (checkboxSelector.checked == false) {
    switchSelector.style.backgroundImage =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    switchSelector.style.backgroundColor = "none";
  }
});

switchSelector.addEventListener("mouseout", function (e) {
  if (checkboxSelector.checked == false) {
    switchSelector.style.backgroundImage = "none";
    switchSelector.style.backgroundColor = "hsl(228, 12%, 44%)";
  }
});
