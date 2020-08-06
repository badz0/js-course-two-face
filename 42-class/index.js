
const userObj = {
  firstName: ' Rachel',
  lastName: 'Green',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

// const user1 = new User('Monica', 'Geller', 1990);
// const user2 = new User('Monica2', 'Geller2', 2000);
// console.log('user2: ', user2);


// console.log('user: ', user1.fullName);
// user2.fullName = 'Phoebe Buffay';

// console.log('user: ', user1.age);

// console.log('user2.age : ', user2.age );

// user2.birthYear = 2010;

// console.log('user2.age : ', user2.age );


// console.log(user2.__proto__.__proto__ === Object.prototype);


function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  const _sensitiveInfo = 'ddfsd';
  const _privateMethod = () => {
    console.log('hello', _sensitiveInfo);
  };

  this.test = function() {
    _privateMethod();
  }
}

Student.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

String.prototype.cursor = function() {
  console.log('Hello from Ivan');
}

if (!Array.prototype.find) {
  Array.prototype.find = function() {
    console.log('yes we have find.');
  }
}

const student = new Student('Ivan','Ivan');
// student._privateMethod();
// student.test();
// console.log('student: ', student);



const userInput = 'Rachel Green, Monica Geller, Phoebe Buffay';

const users = new Users();

userInput.split(', ').forEach((name) => {
  users.addUser(new User(name));
});

// console.log('users: ', users);


// users.addUser(new User('FDDD Buffay'));



class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.name + ' ' + this.age;
  }
}

class SuperHero extends Human {
  static superPowers = ['richness', 'mindreading'];

  constructor(superPower, name, age) {
    super(name, age);
    this.superPower = superPower;
  }

  get info() {
    return super.info + ' ' + this.superPower;
  }

  useSuperPower() {

  }
}

const human1 = new Human('Rachel', 25);

// console.log('human1: ', human1);
// console.log(human1.info);

const hero = new SuperHero('Js understanding ability', 'Ivan', 22);

// console.log(SuperHero.superPowers);
// console.log('hero: ', hero);

// console.log(hero.info);



class ContactBook {
  static sos = 911;

  constructor() {
    this._list = {};
    this._countryCode = '+38';
  }
  
  addContact(key, number) {
    if (this._includes(key, number)) {

    }
    this._list[key] = number;
  }

  _includes() {

  }

  removeContact(key) {
    if (key in this._list) {
      const removed = {[key]: this._list[key]};
      delete this._list[key];
      return removed;
    }
  }

  getContact(key) {
    return this._list[key] || 'no such contact';
  }

  get length() {
    return Object.keys(this._list).length;
  }

  get contacts() {
    return Object.keys(this._list).sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
}

const contactBook = new ContactBook();
contactBook.addContact('ivan', '7777777')
contactBook.addContact('rachel', '1111111')
contactBook.addContact('bogdan', '000000')
console.log('contactBook: ', contactBook);
console.log('length ', contactBook.length);
console.log(contactBook.getContact('ivan'));
// console.log(contactBook.removeContact('ivan'));
console.log(contactBook.getContact('ivan'));
console.log(contactBook.getContact('ivaasdfasdfn'));

console.log(contactBook.contacts);

