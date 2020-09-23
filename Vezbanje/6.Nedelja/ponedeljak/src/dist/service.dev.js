"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.postUser2 = exports.postUser = exports.getUser = exports.getAllUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllUsers = function getAllUsers() {
  return _axios["default"].get('https://reqres.in/api/users');
};

exports.getAllUsers = getAllUsers;

var getUser = function getUser(x) {
  return _axios["default"].get("https://reqres.in/api/users/".concat(x));
};

exports.getUser = getUser;

var postUser = function postUser(name, job) {
  return _axios["default"].post('https://reqres.in/api/users', {
    name: name,
    job: job
  });
};

exports.postUser = postUser;

var postUser2 = function postUser2(user) {
  return _axios["default"].post('https://reqres.in/api/users', user);
};

exports.postUser2 = postUser2;

var registerUser = function registerUser(email, password) {
  return _axios["default"].post('https://reqres.in/api/register', {
    email: email,
    password: password
  });
};

exports.registerUser = registerUser;