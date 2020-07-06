(function () {
  document.addEventListener('DOMContentLoaded', function () {
    global.$ = global.jQuery = require('jquery');
    require('jquery.easing');

    const $button = $('#addClass');
    const $box = $('#sampleBox');

    $button.click(function() {
      $box.toggle(2000, "easeInOutQuint");
    });
  });
})();
