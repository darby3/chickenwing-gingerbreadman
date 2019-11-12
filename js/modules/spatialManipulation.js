// Say hello! A tiny module!
var helloWorld = function() {
  console.log("Hello from inside the spatial manipulation demo module");

  // STEP 1
  const button1 = document.querySelector('#smd-block1-get');
  button1.addEventListener('click', function () {
    if ('content' in document.createElement('template')) {
      // Our reference block
      const refBlock = document.querySelector('#smd-block1');

      // Grab our template code, clone it, fill it, and place it.
      let template = document.querySelector('#result_box');
      let outputBox = document.importNode(template.content, true);

      // Window size
      let winsizeResults = outputBox.querySelector('#results-winsize');
      winsizeResults.textContent = `Width: ${window.innerWidth} / Height: ${window.innerHeight}`;

      // Docscroll (position)
      let docscrollResults = outputBox.querySelector('#results-docscroll');
      docscrollResults.textContent = `${window.pageYOffset} (pixels above the top of the visible window)`;

      // Text block offsets
      let offsetsResults = outputBox.querySelector('#results-offsets');
      offsetsResults.innerHTML = `
        offsetParent: ${refBlock.offsetParent.tagName} <br />
        offsetTop: ${refBlock.offsetTop} (distance of the current element relative to the top of the offsetParent node) <br />
        offsetLeft: ${refBlock.offsetLeft} <br />
        offsetWidth: ${refBlock.offsetWidth} <br />
        offsetHeight: ${refBlock.offsetHeight} <br />
      `;

      let output_box = document.querySelector("#smd-block1-output");
      output_box.appendChild(outputBox);
    }
    ;
  });


  // STEP 2
  const button2 = document.querySelector('#smd-block2-get');
  button2.addEventListener('click', function () {
    if ('content' in document.createElement('template')) {
      // Our reference block
      const refBlockB = document.querySelector('#smd-block2');

      // Grab our template code, clone it, fill it, and place it.
      let template = document.querySelector('#result_box_b');
      let outputBox = document.importNode(template.content, true);

      // Docscroll (position)
      let docscrollResults = outputBox.querySelector('#results-docscroll-b');
      docscrollResults.textContent = `${window.pageYOffset} (pixels above the top of the visible window)`;

      // Text block offsets
      let offsetsResultsB = outputBox.querySelector('#results-offsets-b');
      offsetsResultsB.innerHTML = `
        offsetParent: ${refBlockB.offsetParent.tagName}#${refBlockB.offsetParent.id} <br />
        offsetTop: ${refBlockB.offsetTop} (distance of the current element relative to the top of the offsetParent node) <br />
        offsetLeft: ${refBlockB.offsetLeft} <br />
        offsetWidth: ${refBlockB.offsetWidth} <br />
        offsetHeight: ${refBlockB.offsetHeight} <br />
      `;

      let output_box = document.querySelector("#smd-block2-output");
      output_box.appendChild(outputBox);
    }
    ;
  });


  // STEP 3
  const button3 = document.querySelector('#smd-block3-get');
  button3.addEventListener('click', function () {
    if ('content' in document.createElement('template')) {
      // Our reference block
      const refBlock = document.querySelector('#smd-block3');

      // Grab our template code, clone it, fill it, and place it.
      let template = document.querySelector('#result_box_c');
      let outputBox = document.importNode(template.content, true);

      // Window size
      let winsizeResults = outputBox.querySelector('#results-winsize-c');
      winsizeResults.textContent = `Width: ${window.innerWidth} / Height: ${window.innerHeight}`;

      // Docscroll (position)
      let docscrollResults = outputBox.querySelector('#results-docscroll-c');
      docscrollResults.textContent = `${window.pageYOffset} (pixels above the top of the visible window)`;

      // Text block offsets
      let offsetsResults = outputBox.querySelector('#results-offsets-c');
      offsetsResults.innerHTML = `
        offsetParent: ${refBlock.offsetParent.tagName} <br />
        offsetTop: ${refBlock.offsetTop} (distance of the current element relative to the top of the offsetParent node) <br />
        offsetLeft: ${refBlock.offsetLeft} <br />
        offsetWidth: ${refBlock.offsetWidth} <br />
        offsetHeight: ${refBlock.offsetHeight} <br />
      `;

      // Start calculating things
      let dElTopWindowTop = refBlock.offsetTop - window.pageYOffset;
      let dElTopWindowBottom = window.innerHeight - dElTopWindowTop;
      let dElBottomWindowTop = dElTopWindowTop + refBlock.offsetHeight;
      let dElBottomWindowBottom = window.innerHeight - dElBottomWindowTop;


      let fromTop = outputBox.querySelector('#results-fromtop');
      let fromBottom = outputBox.querySelector('#results-frombottom');
      let bottomToTop = outputBox.querySelector('#results-bottomtotop');
      let bottomToBottom = outputBox.querySelector('#results-bottomtobottom');

      fromTop.innerHTML = dElTopWindowTop;
      fromBottom.innerHTML = dElTopWindowBottom;
      bottomToTop.innerHTML = dElBottomWindowTop;
      bottomToBottom.innerHTML = dElBottomWindowBottom;

      // Fun facts
      let isItVisible = (dElTopWindowTop > 0 && dElTopWindowTop < window.innerHeight) || (dElBottomWindowBottom > 0 && dElBottomWindowBottom < window.innerHeight);

      let visibility = outputBox.querySelector('#results-visible');

      visibility.innerHTML = isItVisible;

      // Print the output
      let output_box = document.querySelector("#smd-block3-output");

      let oldResults = output_box.querySelector('.results_box');
      if (oldResults) {
        oldResults.parentNode.removeChild(oldResults);
      }

      output_box.appendChild(outputBox);
    };
  });


  // STEP 4
  const button4 = document.querySelector('#smd-block4-get');
  button4.addEventListener('click', function () {
    if ('content' in document.createElement('template')) {
      // Our reference block
      const refBlock = document.querySelector('#smd-block4');

      // Grab our template code, clone it, fill it, and place it.
      let template = document.querySelector('#result_box_d');
      let outputBox = document.importNode(template.content, true);

      let results = refBlock.getBoundingClientRect();
      console.dir(results);

      let offsetsResultsD = outputBox.querySelector('#results_box_d_results');
      offsetsResultsD.innerHTML = `
        top: ${results.top} <br />
        left: ${results.left}<br />
        right: ${results.right} <br />
        bottom: ${results.bottom} <br />
        height: ${results.height} <br />
        width: ${results.width}
      `;


      // Fun facts
      let isItVisible = (results.top > 0 && results.top < window.innerHeight) || (results.bottom > 0 && results.bottom < window.innerHeight);

      let visibility = outputBox.querySelector('#results-visible');

      visibility.innerHTML = isItVisible;


      // Print the output
      let output_box = document.querySelector("#smd-block4-output");

      let oldResults = output_box.querySelector('.results_box');
      if (oldResults) {
        oldResults.parentNode.removeChild(oldResults);
      }

      output_box.appendChild(outputBox);
    };
  });
};

module.exports = helloWorld;
