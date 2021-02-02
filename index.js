const express = require("express");
const greeter = require("./greeter");

greeter("bla-bla");
const validator = require("validator");
console.log(validator.isEmail("foo@bar.com"));
const app = express();
