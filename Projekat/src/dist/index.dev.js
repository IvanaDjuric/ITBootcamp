"use strict";


var budzet = document.querySelector('#budzet');
var iznPri = document.querySelector('.izn-pri');
var iznRas = document.querySelector('.izn-ras'); 

var selBudz = document.querySelector('#selPriRas');
var opisTa = document.querySelector('#opis');
var iznosTa = document.querySelector('#iznos');
var butAdd = document.querySelector('#add'); 

var listPri = document.querySelector('.lista-prihodi');
var listRas = document.querySelector('.lista-rashodi');
var selektovani = '';
selBudz.addEventListener('change', function (e) {
  selektovani = e.target.value;
  console.log(selektovani);
});
var niz = [];
butAdd.addEventListener('click', function (e) {
  e.preventDefault(); 

  if (opisTa.value == '') {
    alert('Ne sme biti prazan unos');
    return;
  }

  if (iznosTa.value <= 0 || isNaN(iznosTa.value)) {
    alert('Unos mora biti broj, ne sme biti 0, negativan broj ili tekst');
    return;
  }

  var checkForma = {
    sel: selBudz.value,
    opis: opisTa.value,
    iznos: iznosTa.value
  }; 
  selBudz.value = '';
  opisTa.value = '';
  iznosTa.value = '';
  console.log(checkForma);
  niz.push(checkForma);
  console.log(niz);
  output(checkForma); 
});
var infoPri = 0;
var infoRas = 0;

function output(list) {
  var itemCon = document.createElement('div');
  itemCon.className = 'item'; 

  if (selektovani == 'lista-prihodi') {
    var opisIznos = document.createElement('p');
    opisIznos.innerHTML = "".concat(list.opis, " + ").concat(list.iznos);
    itemCon.appendChild(opisIznos);
    listPri.appendChild(itemCon);
    var x = parseInt(list.iznos);
    infoPri += x;
    iznPri.innerHTML = "+".concat(infoPri);
  } else {
    
    var perc = Math.round(list.iznos / 100);
    var opisCenaRas = document.createElement('p');
    opisCenaRas.innerHTML = "".concat(list.opis, " - ").concat(list.iznos, " ").concat(perc, "%");
    itemCon.appendChild(opisCenaRas);
    listRas.appendChild(itemCon);
    var y = parseInt(list.iznos);
    infoRas += y;
    iznRas.innerHTML = "-".concat(infoRas, " ").concat(perc, "%");
  }

  var btnDel = document.createElement('button');
  btnDel.innerText = 'X';
  btnDel.className = "btn";
  btnDel.addEventListener('click', function (e) {
    e.target.parentElement.remove();
  });
  itemCon.appendChild(btnDel);
  budzet.innerHTML = infoPri - infoRas;
}