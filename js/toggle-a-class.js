(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#addClass');
    const box = document.querySelector('.simple-box');

    button.addEventListener('click', function() {
      box.classList.toggle('active');
    })
  });
})();
