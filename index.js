// let currOffset = 0;

// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowUp") {
//     event.preventDefault();
//     const currentSection = document.querySelector(".section.active");
//     const previousSection = currentSection.previousElementSibling;
//     if (previousSection) {
//       currentSection.classList.remove("active");
//       previousSection.classList.add("active");
//       window.scrollTo({
//         left: previousSection.offsetLeft,
//         behavior: "smooth",
//       });
//     }
//   } else if (event.key === "ArrowDown") {
//     event.preventDefault();
//     const currentSection = document.querySelector(".section.active");
//     const nextSection = currentSection.nextElementSibling;
//     if (nextSection) {
//       currentSection.classList.remove("active");
//       nextSection.classList.add("active");
//       window.scrollTo({
//         top: 250,
//         behavior: "smooth",
//       });
//     }
//   }
// });
