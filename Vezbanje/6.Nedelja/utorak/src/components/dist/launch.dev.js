"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Launch = void 0;

// Функција (Компонента) Launch враћа хтмл елемент
var Launch = function Launch(launch) {
  // launch.launch_year
  // launch.rocket.rocket_name
  // launch.links.mission_patch  // slika
  var launchContainer = document.createElement('div');
  launchContainer.className = 'launch'; // launchContainer.innerHTML = `
  // <div class="inner-div-0">
  //     <img src="${launch.links.mission_patch}" alt="">
  // </div>
  // <div class="inner-div-1">
  //     <span>${launch.rocket.rocket_name}</span>
  // </div>
  // <div class="inner-div-2">
  //     <span>${launch.launch_year}</span>
  // </div>
  // `

  var inn0 = document.createElement('div');
  inn0.className = 'inner-div-0';
  var image = document.createElement('img');
  image.src = launch.links.mission_patch;
  inn0.append(image);
  var inn1 = document.createElement('div');
  inn1.className = 'inner-div-1';
  var spanF = document.createElement('span');
  spanF.textContent = launch.rocket.rocket_name;
  inn1.appendChild(spanF);
  var inn2 = document.createElement('div');
  inn2.className = 'inner-div-2';
  var spanY = document.createElement('span');
  spanY.textContent = launch.launch_year;
  inn2.appendChild(spanY);
  launchContainer.append(inn0, inn1, inn2);
  return launchContainer;
};

exports.Launch = Launch;