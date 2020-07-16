
// let answer = prompt('who is the best teacher?').toLowerCase();

// if (answer === 'ivan') {
//   console.log('That is right');
// } else if (answer === 'vlad') {
//   console.log('That is right');
// } else if (answer === 'yevhenia') {
//   console.log('That is right');
// } else {
//   console.log('sorry that is wrong');
// }

// const hungry = confirm('Are you hungry?');

// if (hungry) {
//   const meal = prompt(`What'd you like to eat?`);
//   console.log('meal: ', meal);
// } else {
//   const thirsty = confirm('Are you thirsty?');
//   if (thirsty) {
//     const drink = prompt(`What'd you like to drink?`);

//     if (drink === 'beer') {
//       let age = +prompt(`how old are u?`);

//       if (age >= 18) {
//         console.log('here u go');
//       } else {
//         console.log('too young');
//       }
//     }
//   } else {
//     console.log('then get the hell out of here');
//   }
// }


// let answer = prompt('who is the best teacher?');

// if (answer === 'ivan') {
//   console.log('That is right');
// } else if (answer === 'vlad') {
//   console.log('That is right');
// } else if (answer === 'yevhenia') {
//   console.log('That is right');
// } else {
//   console.log('sorry that is wrong');
// }

// switch (answer.toLowerCase()) {
//   default:
//     console.log('wrong asnwer');
//     break;
//   case 'ivan':
//   case 'vlad':
//   case 'yevhenia':
//     console.log('That is right');
//     break;
// }



// if (answer !== 'ivan' && answer !== 'vlad') {
//   console.log('wrong answer');
// } else {
//   console.log('correct');
// }

// const secretWord = prompt('enter secret word');

// const condition = (answer === 'ivan' || answer === 'vlad') && secretWord === 'maryna';


// if (condition) {
//   console.log('correct');
// } else {
//   console.log('wrong answer');
// }


// let answer = '';

// let attempts = 0;

// do {
//   answer = prompt('which is the best school?');
//   if ('ivan' === answer) {
//     continue;
//   }
//   attempts++;
// } while (attempts < 3 && answer !== 'cursor')

// console.log('hey');

// for (let attempts = 0; attempts < 3; attempts++) {
//   let answer = prompt('which is the best school?');
//   if (answer === 'cursor') {
//     console.log('correct');
//     break;
//   }
// }

const str = prompt('enter string').toLowerCase();
const letter1 = prompt('enter letter').toLowerCase();
const letter2 = prompt('enter letter').toLowerCase();

let counter = 0;

for (let i = 0; i < str.length; i++) {
  if (letter1 === str[i] || letter2 === str[i]) {
    if (i !== 0 && str[i - 1] === ' ') continue;
    counter++;
  }
}

console.log('counter: ' + counter);

