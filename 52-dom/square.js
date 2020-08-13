const square = document.getElementById('square');

square.addEventListener('click', function() {
  square.style.width = '100px';
  square.style.height = '100px';
  square.innerText = '';

  init();
}, {once: true});

function init() {

  function onMouseMove(event) {
    move(event.x, event.y);
  }

  square.addEventListener('mousedown', function() {
    document.addEventListener('mousemove', onMouseMove);
  });

  square.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', onMouseMove);
  });


  square.addEventListener('keydown', function(event) {
    const step = 30;
    switch(event.keyCode) {
      case 37:
        move(square.offsetLeft - step, square.offsetTop);
        break;
      case 38:
        move(square.offsetLeft, square.offsetTop - step);
        break;
      case 39:
        move(square.offsetLeft + step, square.offsetTop);
        break;
      case 40:
        move(square.offsetLeft, square.offsetTop + step);
        break;
    }
  });
}

function move(x, y) {

  const halfSize = 50;
  if (x + halfSize > window.innerWidth) x = window.innerWidth - halfSize;
  if (x - halfSize < 0 ) x = halfSize;

  square.style.left = x + 'px';

  if (y + halfSize > window.innerHeight) y = window.innerHeight - halfSize;
  if (y - halfSize < 0) y = halfSize;
  square.style.top = y + 'px';

}
