
// const teachers = ['Ivan', 'Vlad', 'Bogdan'];

// const n = +prompt('enter teacher you want to see');

// console.log(teachers[teachers.length - 1]);


// const arr = [21, ['188', [true]]];
// console.log('arr: ', arr);
// console.log(arr[1][1]);

// let deletedEl = teachers.shift();
// console.log('deletedEl: ', deletedEl);


// let len = teachers.unshift(deletedEl);
// console.log('len: ', len);

// console.log('teachers: ', teachers);



// let a = parseInt(prompt('enter number'));

// let b = parseInt(prompt('enter number'));
// let c = parseInt(prompt('enter number'));
// console.log(a, b, c);

// if (a >= b && a >= c) {
//   console.log('A is the biggest', a);
// } else if (b >= c) {
//   console.log('B is the biggest', b);
// } else {
//   console.log('C is the biggest', c);
// }


function getUserNumbers1() {
  const numbers = [];
  let n;
  do {
    n = parseInt(prompt('enter number'));
    if (!isNaN(n)) {
      numbers.push(n);
    }
  } while(!isNaN(n))
  return numbers;
}

function getUserNumbers2() {
  const numbersStr = prompt('enter numbers like so 1, 2, 3');
  return numbersStr.split(', ');
}

function findBiggestUserN() {
  const numbers = getUserNumbers2();
  console.log('numbers: ', numbers);

  let biggestN = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentN = parseInt(numbers[i]);
    if (currentN > biggestN) {
      biggestN = currentN;
    }
  }
  return biggestN;
}

// console.log('the biggest is: ', findBiggestUserN());


// const str = 'hello';

// const arr = str.split('');
// arr.reverse();
// console.log('arr: ', arr.join(''));


// const arr = [22, 33];
// arr.push(55);
// console.log('arr: ', arr);

// if ([].length) {
//   console.log('true');
// }

let arr1 = [];

let arr2 = arr1;

// console.log(arr1 === arr2);

// const teachers = ['Ivan', 'Vlad', 'Bogdan'];

function toUpperCaseTeachers(arr) {
  let newArr = [...arr];
  for (let index = 0; index < newArr.length; index++) {
    newArr[index] = newArr[index].toUpperCase();
  }
  return newArr;
}

// console.log(toUpperCaseTeachers(teachers));


function countIvans(arr) {
  let count = 0;
  let index = 0;
  while (arr.includes('Ivan', index)) {
    index = arr.indexOf('Ivan', index) + 1;
    count++;
  }
  return count;
}

// console.log(countIvans(['Ivan', 'Vlad', 'Ivan', 'Ivan', 'Gdd']));


// let all = teachers.concat(['Yevhen', 'Vasyl'], [1, 3]);
// console.log('all: ', all);



const teachers = ['Ivan', 'Bogdan', 'Yevhenia'];

// let sliceCopy = teachers.slice(2);
// console.log('sliceCopy: ', sliceCopy);

// let removedEls = teachers.splice(2, 1, 'Ivan', 'Ivan');
// console.log('removedEls: ', removedEls);
// console.log('teachers: ', teachers);

function removeIvans(arr) {
  arr = [...arr];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'Ivan') {
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
  for (let i = arr.length - 1; i >= 0 ; i--) {
    if (arr[i] === 'Ivan') {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeIvans(teachers));


