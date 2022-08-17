// main scripts
(function () {

    document.addEventListener('DOMContentLoaded', function () {

        // Let's get this party started.
        console.log("Hello from the main app file");

        // Requires and module initializations
        var hiThere = require("./modules/helloThere");
        hiThere();

        // uhm.js
        const y = 9;
        var x = a => 1 + 3 + a;
        var z = x(y);
        var q = x(25);

        console.log('z = ', z);
        console.log('q = ', q);


        // about link
        const aboutLink = document.getElementById('aboutLink');
        const aboutDialog = document.getElementById('about');

        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            aboutDialog.showModal();
        });


    });

}());
