// Say hello! A tiny module!
var helloWorld = function() {
  console.log("Hello from inside the spatial manipulation demo module");

  var button1 = document.querySelector('#smd-block1-get');
  button1.addEventListener('click', function(el) {

    let winsize;
    const calcWinsize = function () {
      winsize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
    calcWinsize();

    if ('content' in document.createElement('template')) {
      // Instantiate the table with the existing HTML tbody
      // and the row with the template
      var template = document.querySelector('#result_box');

      // Clone the new row and insert it into the table
      var output_box = document.querySelector("#smd-block1-output");
      var clone = document.importNode(template.content, true);

      var winsizeOutput = clone.querySelector('#results-winsize');
      winsizeOutput.textContent = `Width: ${winsize.width} / Height: ${winsize.height}`;
      output_box.appendChild(clone);
    };

  });
};

module.exports = helloWorld;
