(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const $ = require('jquery');

    const $button = $('#addClass');
    const $box = $('#sampleBox');

    $button.click(function() {
      $box.toggle();
    });
  });
})();
