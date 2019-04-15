(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// main scripts
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Let's get this party started.
    console.log("Hello from the main app file"); // Requires and module initializations

    var hiThere = require("./modules/helloThere");

    hiThere(); // uhm.js

    var y = 9;

    var x = function x(a) {
      return 1 + 3 + a;
    };

    var z = x(y);
    var q = x(25);
    console.log('z = ', z);
    console.log('q = ', q);
  });
})();

},{"./modules/helloThere":2}],2:[function(require,module,exports){
"use strict";

// Say hello! A tiny module!
var helloWorld = function helloWorld() {
  console.log("Hello from inside a module");
};

module.exports = helloWorld;

},{}]},{},[1]);
