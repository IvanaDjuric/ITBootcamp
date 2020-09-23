"use strict";

var _service = require("./service");

console.log('Hello project'); // Promise
// Pending, Resolved
// fetch
// JSON - JavaScript Object Notation
// API - Application programming interface
// HTTP Захтеви
// GET - За дохватање података са сервера
// axios.get(link)
// POST - Слање података серверу
// axios.post(link,data)
// PUT - Слање података серверу
// axios.put(link,data)
// PATCH
// DELETE - Брисање неких података
// axios.delete(link)
// function dohvatiPodatke(){
//     ...
// }
// let objekat = dohvatiPodatke()

var app = document.querySelector('#app');
(0, _service.getUser)(10).then(function (res) {
  var p = document.createElement('p');
  p.textContent = res.data.data.email;
  app.appendChild(p);
  console.log(res.data.data);
  (0, _service.getAllUsers)().then(function (res) {
    res.data.data.forEach(function (el) {
      var p = document.createElement('p');
      p.textContent = el.email;
      app.appendChild(p);
    });
    console.log(res.data.data);
  });
});
(0, _service.postUser)('pera').then(function (res) {
  return console.log(res);
})["catch"](function (error) {
  return console.log(error);
});
(0, _service.postUser2)({
  name: 'pera',
  job: 'dskfs'
}).then(function (res) {
  console.log(res);
});
(0, _service.registerUser)('eve.holt@reqres.in').then(function (res) {
  return console.log(res.data.token);
})["catch"](function (error) {
  console.log(error.response);
  var p = document.createElement('p');
  p.textContent = error.response.data.error;
  app.appendChild(p);
});