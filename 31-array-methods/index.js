
// function heavyCalculations(cb = () => {}) {
//   console.log(`I'm doing heavy calcs...`);
//   console.log(`Still doing heavy calcs...`);
//   console.log(`Still doing heavy calcs...`);
//   console.log(`I'm done`);
//   cb && cb();
// }

// function sayHello() {
//   console.log('hello');
// }

// heavyCalculations();
// heavyCalculations(sayHello);

// heavyCalculations(() => alert('hurray'));





// const displayAsList = (item, i) => {
//   console.log(1 + i + '. ' + 'item ', item);
// };



// let numbers = [1, 232, 545];

// iterateOverArray(numbers, displayAsList);


// iterateOverArray(numbers, (item) => console.log(item));

// const teachers = ['Ivan', 'Bogdan', 'Yevhenia'];

// iterateOverArray(teachers, );





// teachers.forEach((item) => console.log(item.toLowerCase()));



// function ownMap(arr, cb) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {

//     newArray.push(cb(arr[i], i));
//   }
//   return newArray;
// }







// function double(n) {
//   return n * 2;
// }


// function doubleArray(arr) {
//   return arr.map(double);
// }

// const numbers = [2.1, 5, 6, 11, 3, 99];
// console.log(doubleArray(numbers));


// const numbersBiggerThen10 = numbers.filter((el) => {
//   if (!Number.isInteger(el)) return false;

//   return el > 0;
// });

// console.log('numbersBiggerThen10: ', numbersBiggerThen10);


// const users = [['Rachel',  'Green'], ['Monica',  'Geller'], ['Phoebe', 'Buffay']];
// const test = users.map(el => {
//   console.log('el: ', el);
//   return el[0] + ' ' + el[1];
// });
// // console.log('users: ', users);
// console.log('test: ', test);

// const teachers = ['Ivan', undefined, 'Vlad', null, 'Bogdan', ''];

// console.log(teachers.filter(el => el));


// const users = [['Rachel',  'Green'], ['Monica',  'Geller'], ['Phoebe', 'Buffay']];0

// let rachel = users.find(user => {
//   console.log('user: ', user);
//   return user[0] ==='Rachel';
// });
// console.log('rachel: ', rachel);



// const numberSets = [[0, 1, 5], [2, 2, 1], [1, 4, 9]];

// let result = numberSets.find(function(set) {
//   let sum = 0;
//   set.forEach(n => sum += n);

//   return sum > 10;
// });
// console.log('result: ', result);

// const numbers = [1, 2, 3, 22, 33, 11, 77];

// console.log( numbers.some(n => n < 0) );

// const sum = numbers.reduce((accumulator, el, i, arr) => {
//   if (el > 5) return accumulator + el;
//   return accumulator;
// }, 0);


// const sumOfNeighbours = numbers.reduce((accumulator, el, i, arr) => {
//   if (!(i % 2)) {
//     accumulator.push(el + (arr[i + 1] || 0));
//   }
//   return accumulator;
// }, []);

// console.log('sum: ', sumOfNeighbours);



// const numbers = [1, 2, 4, 3];

// const sorted = numbers.sort((a, b) => {
//   console.log('a, b: ', a, b);
//   return a - b;
// });

// console.log('sorted: ', sorted);

let teachers = ['Ivan', 'Vlad', 'bogdan', 'Yevhenia', 'Daria'];

// let result = teachers.sort((a, b) => {
//   console.log('a, b: ', a, b);
//   return b.length - a.length;
// });

// let result = teachers.sort((a, b) => {
//   if (a.toLowerCase() < b.toLowerCase()) {
//     return -1;
//   } else if (a.toLowerCase() > b.toLowerCase()) return 1;

//   return 0;
// });

// console.log('result: ', result);


let prices = [10, 100, null, undefined, 333, null, 22, 0, 400, 230];

let result = prices.filter(price => price)
                   .sort((a, b) => a - b)
                   .map(el => 'Price: ' + el);

console.log('result: ', result);
