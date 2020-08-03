
// foo();




function createFunction(str) {

  function print() {
    console.log(str);
  }

  return print;
}

// const test = createFunction('hurray');
// const test2 = createFunction('yeah');

function createCounter(count = 0) {
  return function(reset) {
    if (reset) {
      count = 0;
    } else {
      count++;
    }
    console.log('count: ', count);
  }
}

// const counter = createCounter(11);


const idGenerator = (function() {
  let id = 155573;
  return function() {
    id++;

    console.log('id: ', id);
    return id;
  }
})();

// idGenerator();
// idGenerator();
// idGenerator();




function test() {
  console.log(this);
}

let obj = {
  name: 'obj',
  test
};

// obj.test();

let group = {
  students: ['Roman', 'Vasyl', 'Ivan'],
  groupName: 'two face',
  printStudents() {
    // let self = this;

    function print(student) {
      console.log(student, this.groupName);
    }

    const binded = print.bind(this);

    this.students.forEach(binded);
  }
}


group.printStudents();



function printName(msg, msg2) {
  console.log(msg, msg2, this.firstName, this.lastName);
}

let user1 = {
  firstName: 'Oleh',
  lastName: 'Olovec',
};

let user2 = {
  firstName: 'Anton',
  lastName: 'Volovec',
};

// user1.printName();
// user2.printName();

// printName.call(user1, 'hello', 'aaa');
// printName.apply(user2, ['hey', 'dfdf']);

// [user1, user2].forEach((user) => {
//   printName.call(user);
// });

// let numbers = [2, 5, 11];

// console.log(Math.max.apply(null, numbers));

let printUser1Name = printName.bind(user1);

printUser1Name('hey', 'dddd');

let printUser2Name = printName.bind(user2);

printUser2Name('hello', '222');


function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

const constant = multiply.bind(null, 3);

console.log(double(10));
// console.log(triple(5));
// console.log(constant());
// console.log(constant());
// console.log(constant());




