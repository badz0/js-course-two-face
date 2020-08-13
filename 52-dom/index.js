
document.addEventListener('DOMContentLoaded', function() {
  console.log('load');
});


// const button = document.getElementById('button')

// button.onclick = function() {
//   console.log('click');
// }




// button.removeEventListener('click', );

// let counter = 0;

// function clickCallback() {
//   console.log('click');
//   counter++;
//   if (counter > 3) {
//     button.removeEventListener('click', clickCallback);
//   }
// }

// button.addEventListener('click', clickCallback);

// const removeBtn = document.getElementById('remove');
// removeBtn.addEventListener('click', function() {
//   console.log('remove');
//   button.removeEventListener('click', clickCallback);
// });



document.querySelector('.button-wrapper')
  .addEventListener('click', function() {
    console.log('wrapper click');
  }, true);


document.getElementById('button')
  .addEventListener('click', function(event) {
    console.log('button click');
  });


const squares = document.getElementsByClassName('square');
console.log('squares: ', squares);

[...squares].forEach(square => {
  square.addEventListener('click', function(event) {
    console.log('square click');
    event.stopPropagation();
    // this.style.backgroundColor = 'red';
  });
});

document.querySelector('.wrapper').addEventListener('click', function(event) {
  const closestTarget = event.target.closest('.square');

  if (closestTarget) {
    if (closestTarget.style.backgroundColor === 'red') {
      closestTarget.style.backgroundColor = '';
    } else {
      closestTarget.style.backgroundColor = 'red';
    }
  }

  // if (event.target.matches('.square')) {
  //   event.target.style.backgroundColor = 'red';
  // }
});

// document.getElementById('google-link').addEventListener('click', event => {
//   event.preventDefault();
// });


const passwordInput = document.getElementById('password-input');

passwordInput.addEventListener('focus', function() {
  console.log('focus');
});

passwordInput.addEventListener('blur', function() {
  console.log('blur');
});


passwordInput.addEventListener('change', function(event) {
  console.log('event: ', event);
  console.log('change');
  // console.log(passwordInput.value);
  // console.log(this.value);
});

passwordInput.addEventListener('input', function(event) {
  console.log('event: ', event);
  console.log('input');
  // console.log(passwordInput.value);
  console.log(this.value);
});

