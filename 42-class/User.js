class User {
  constructor(name, birthYear) {
    this.fullName = name;
    // this.firstName = firstName;
    // this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2020 - this.birthYear;
  }

  set age(val) {
    this.birthYear = 2020 - val;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }

  changeName(newName) {
    this.firstName = newName;
  }
}

class Users {
  constructor() {
    this.users = [];
  }

  addUser(newUser) {
    if (this._includes(newUser)) return;

    this.users.push(newUser);
  }

  _includes(newUser) {
    if (this.users.some((user) => user.lastName === newUser.lastName)) {
      console.log('alredy exists');
      return true;
    } else return false;
  }
}
