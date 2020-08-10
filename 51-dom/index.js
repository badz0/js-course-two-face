const element = {
  tagName: 'div',
  classList: 'container',
};

const element2 = {
  tagName: 'h1',
  id: 'main-title',
  textContent: 'Title'
};

element2.parent = element;

element.child = element2;






// const title = document.querySelector('#main-title');
// const title = document.getElementById('main-title');

// const index = title.querySelector('.index');
// if (index) {
//   index.innerText = 1111;
// }




const titles = document.querySelectorAll('.title');

// titles.forEach((title, index) => {
//   title.innerText = 'hello ' + (index + 1);
// });
// console.log('titles: ', titles);


const titles2 = document.getElementsByClassName('title');

[...titles2].forEach((title, index) => {
  title.innerText = 'hello ' + (index + 1);
});
// console.log('titles2: ', titles2);


// const link = document.querySelector('.link');

// link.href = 'facebook';


// console.log('nameInput: ', nameInput.value);

// nameInput.value = 'vlad';

const users = ['Rachel Green', 'Monica Geller', 'Phoebe Buffay'];

users.forEach((user, index) => {
  const userList = document.querySelector('.user-list');
  userList.innerHTML += `
    <p data-user-id="${index}">${user}</p>
  `;
})

function addUser() {
  const nameInput =  document.querySelector('#name-input');

  if (!nameInput.value) {
    nameInput.classList.add('invalid');
    return;
  } else {
    nameInput.classList.remove('invalid');
  }


  const userList = document.querySelector('.user-list');
  userList.innerHTML += `
    <p>${nameInput.value}</p>
  `;
  nameInput.value = '';
}

// function toggleClass() {
//   const nameInput =  document.querySelector('#name-input');
//   nameInput.classList.toggle('invalid');
// }


// const userList = document.querySelector('.user-list');

// console.log(userList.removeAttribute('custom-attr'));
// console.log(userList.attributes);



// const userList = document.querySelector('.user-list');

// userList.className += ' new-class';






function changeFontSize(increase) {
  const title = document.getElementById('main-title');

  const currentFontSize = getComputedStyle(title).fontSize;

  const newValue = parseInt(currentFontSize) + (increase ? 1 : -1);

  title.style.fontSize = newValue + 'px';
}


const title = document.getElementById('main-title');

// title.style.color = 'red';
// title.style.background = 'red';
title.style.cssText += 'color: red !important;'
// console.log('title.cssText: ', title.style.cssText);


// title.outerHTML = '';

title.remove();

// console.log(title);

// document.body.replaceWith(title);

const lastTitle = document.createElement('h1');
lastTitle.classList.add('hehe');
lastTitle.innerText = 'last title';


// document.body.innerHTML += `<h1>one more title</h1>`;

// document.body.append(lastTitle);
document.body.insertAdjacentHTML('afterbegin', '<h1>one more title</h1>');


let styles = `
  <style>
    .user-list {
      border: 2px solid yellow;
    }
  </style>
`;


document.body.innerHTML += styles;

