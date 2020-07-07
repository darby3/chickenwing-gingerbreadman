(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const { gsap } = require("gsap/dist/gsap");

    const button = document.querySelector('#addClass');

    button.addEventListener('click', function () {
      gsap.to("#gsapBox", {
        duration: 1,
        x: 300,
        y: 10,
        rotation: 145,
        opacity: 0.15,
        ease: "back.inOut"
      });
    })
  });
})();
