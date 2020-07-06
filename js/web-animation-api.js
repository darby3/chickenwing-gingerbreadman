(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#addClass');
    const box = document.querySelector('#webAnimApiBox');

    button.addEventListener('click', function() {
      const animIn = box.animate([{
        transformOrigin: 'center center',
        transform: `translate(-350px, 0) scale(0.25, 0.25) rotate(0)`,
        backgroundColor: 'rgba(222,161,161,0.49)'
      }, {
        transformOrigin: 'center center',
        transform: 'translate(0, 0) scale(2.5, 2.5) rotate(-360deg)',
        backgroundColor: 'rgba(36,243,202,0.71)'
      }, {
        transformOrigin: 'center center',
        transform: 'translate(150px, 0) scale(0.5, 0.5) rotate(0)',
        backgroundColor: 'rgba(255,0,234,0.85)'
      }], {
        duration: 4000,
        easing: 'cubic-bezier(.99,0,.7,1)',
        iterations: Infinity
      });
    })
  });
})();
