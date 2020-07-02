(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#addClass');
    const box = document.querySelector('.anim-box');

    button.addEventListener('click', function() {
      box.classList.add('active');
    })
  });
})();
