// main scripts
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // about link
    const aboutLink = document.getElementById("aboutLink");
    const aboutDialog = document.getElementById("about");

    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      aboutDialog.showModal();
    });
  });
})();
