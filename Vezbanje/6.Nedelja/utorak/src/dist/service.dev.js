"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLaunches = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllLaunches = function getAllLaunches() {
  return _axios["default"].get('https://api.spacexdata.com/v3/launches');
};

exports.getAllLaunches = getAllLaunches;