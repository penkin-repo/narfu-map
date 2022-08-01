"use strict";
const scaleMaster = document.querySelector(".scale-master");

const sm100 = document.querySelector("#sm100");
const func100 = () => {
  scaleMaster.style.width = "100%";
};
sm100.addEventListener("click", func100);

const sm130 = document.querySelector("#sm130");
const func130 = () => {
  scaleMaster.style.width = "130%";
};
sm130.addEventListener("click", func130);

const sm160 = document.querySelector("#sm160");
const func160 = () => {
  scaleMaster.style.width = "160%";
};
sm160.addEventListener("click", func160);
//------------------------
const buttons = document.querySelectorAll(".btn-scale");
buttons.forEach((element) => {
  element.addEventListener("click", funcActive);
});
function funcActive(e) {
  if (!e.target.classList.contains("active")) {
    buttons.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  } else {
    // console.log('true');
    // buttons.forEach((element) => {
    //   element.classList.remove("active");
    // });
    // e.target.classList.add("active, bbb");
  }

  //   buttons.classList.toggle("active");
  //   buttons.forEach((element) => {
  //     element.classList.toggle("active");
  //   });
}
