"use strict";

var _LaunchList = require("./components/LaunchList");

var _service = require("./service");

var app = document.querySelector('#app');
(0, _service.getAllLaunches)().then(function (res) {
  app.appendChild((0, _LaunchList.LaunchList)(res.data));
});