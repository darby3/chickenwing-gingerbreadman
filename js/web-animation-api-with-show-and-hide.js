(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log(new Date());

    const button = document.querySelector('#addClass');
    const box = document.querySelector('#webAnimApiBox');

    // Honestly I'm not sure if this is the best way to do this, but it sure is *a* way to do this.

    // We need the initial display values, assuming there's some CSS styling at play
    const boxRect = box.getBoundingClientRect();

    box.style.transform = `translate(${boxRect.width}px, 0)`;
    box.style.display = 'none';
    box.style.opacity = 0;

    box.dataset.active = 'false';

    button.addEventListener('click', function() {
      if (box.dataset.active === 'in-process') {
        console.log("do nothing");
      }
      else if (box.dataset.active === 'false') {
        // Animate in

        box.dataset.active = 'in-process'
        box.style.display = '';

        const animIn = box.animate([{
          transformOrigin: 'center center',
          transform: `translate(${boxRect.width * -3}px, 0)`,
          opacity: 0,
          backgroundColor: 'rgba(222,161,161,0.49)'
        }, {
          transformOrigin: 'center center',
          transform: 'translate(0, 0)',
          backgroundColor: 'rgba(255,0,234,0.16)',
          opacity: 1
        }], {
          duration: 200,
          easing: 'cubic-bezier(.99,0,.7,1)',
          fill: 'both'
        });

        animIn.onfinish = function() {
          box.dataset.active = 'true';
        }
      }
      else if (box.dataset.active === 'true') {
        // Animate out

        box.dataset.active = 'in-process'

        const animOut = box.animate([{
          transformOrigin: 'center center',
          transform: 'translate(0, 0)',
          opacity: 1,
          backgroundColor: 'rgba(255,0,234,0.16)',
        }, {
          transformOrigin: 'center center',
          transform: `translate(${boxRect.width * 3}px, 0)`,
          backgroundColor: 'rgb(255,0,234)',
          opacity: 0
        }], {
          duration: 2500,
          easing: 'cubic-bezier(0,.99,.81,1)',
          fill: 'both'
        });

        animOut.onfinish = function() {
          box.style.display = 'none';
          box.dataset.active = 'false';
        }
      }

    })
  });
})();
