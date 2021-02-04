const greeter = require('./greeter');

greeter('bla-bla');
const validator = require('validator');
console.log(validator.isEmail('foo@bar.com'));

class User {
  static hello = console.log('hello');
  constructor(name) {
    this.name = name;
  }
}
const mango = new User('Mango');
console.log(mango);
