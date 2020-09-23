"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LaunchList = void 0;

var _service = require("../service");

var _Launch = require("./Launch");

var LaunchList = function LaunchList() {
  var launchList = document.createElement('div');
  launchList.className = 'launch-list';
  (0, _service.getAllLaunches)().then(function (res) {
    res.data.forEach(function (launch) {
      if (launch.launch_year == '2019') {
        launchList.appendChild((0, _Launch.Launch)(launch));
      }
    });
  });
  setTimeout(function () {}, 1000); //     arr.forEach(launch => {
  //         launchList.appendChild(Launch(launch))
  //     })

  return launchList;
}; // 1. Узети податке са сервера
// 2. Прођемо кроз низ, правимо компоненте за сваки елемент *и убацимо их у launch-list
// 3. Враћамо launch-list


exports.LaunchList = LaunchList;