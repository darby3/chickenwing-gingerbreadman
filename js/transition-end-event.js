(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#addClass');
    const box = document.querySelector('.simple-box');

    button.addEventListener('click', function () {
      box.classList.toggle('active');
    })

    box.addEventListener('transitionend', function () {
      if (box.classList.contains('active')) {
        box.innerHTML = 'Transition ended';
      } else {
        box.innerHTML = 'Hi hi hi'
      }
    })
  });
})();
