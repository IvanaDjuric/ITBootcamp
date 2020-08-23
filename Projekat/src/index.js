
let budzet = document.querySelector('#budzet');
let iznPri = document.querySelector('.izn-pri');
let iznRas = document.querySelector('.izn-ras');

let selBudz = document.querySelector('#selPriRas');
let opisTa = document.querySelector('#opis');
let iznosTa = document.querySelector('#iznos');
let butAdd = document.querySelector('#add');

let listPri = document.querySelector('.lista-prihodi');
let listRas = document.querySelector('.lista-rashodi');

let selektovani = '';

selBudz.addEventListener('change', e => {
    selektovani = e.target.value;
    console.log(selektovani);
})

let niz = [];

butAdd.addEventListener('click', (e) => {
    e.preventDefault();

    if (opisTa.value == '') {
        alert('Ne sme biti prazan unos')
        return;
    }
    if (iznosTa.value <= 0 || isNaN(iznosTa.value)) {
        alert('Unos mora biti broj, ne sme biti 0, negativan broj ili tekst');
        return;
    }

    let checkForma = {
        sel: selBudz.value,
        opis: opisTa.value,
        iznos: iznosTa.value

    }
  
    selBudz.value = '';
    opisTa.value = '';
    iznosTa.value = '';

    console.log(checkForma);
    niz.push(checkForma);
    console.log(niz);
    output(checkForma);
});

let infoPri = 0;
let infoRas = 0;

function output(list) {

    let itemCon = document.createElement('div');
    itemCon.className = 'item'
   
    if (selektovani == 'lista-prihodi') {
        let opisIznos = document.createElement('p');
        opisIznos.innerHTML = `${list.opis} + ${list.iznos}`;
        itemCon.appendChild(opisIznos);
        listPri.appendChild(itemCon);


        let x = parseInt(list.iznos);
        infoPri += x;
        iznPri.innerHTML = `+${infoPri}`;

    } else {
       
        let perc = Math.round(list.iznos / 100);
        let opisCenaRas = document.createElement('p');

        opisCenaRas.innerHTML = `${list.opis} - ${list.iznos} ${perc}%`;
        itemCon.appendChild(opisCenaRas);
        listRas.appendChild(itemCon);


        let y = parseInt(list.iznos);
        infoRas += y;
        iznRas.innerHTML = `-${infoRas} ${perc}%`;
    }

    let btnDel = document.createElement('button');
    btnDel.innerText = 'X';
    btnDel.className = "btn";
    btnDel.addEventListener('click', e => {
        e.target.parentElement.remove();
    });

    
    itemCon.appendChild(btnDel);

    budzet.innerHTML = infoPri-infoRas;
}

