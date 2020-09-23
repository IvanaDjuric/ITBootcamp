//Document object model

const divHello = document.getElementById('hello')
divHello.id = 'NESTO'

//divHello.className = ''

const paragrafi = document.getElementsByClassName('paragraf')
const paragrafiTest = document.querySelectorAll('.paragraf')

console.log(paragrafi)  //ispisace prvi paragraf
console.log(paragrafiTest)

const div2 = document.querySelector('.hello2') //Jedan element
console.log(div2)

///////////////////////////////////////////////////////////

console.log(divHello.parentElement)
console.log(divHello.children)
console.log(divHello.previousElementSibling)
console.log(divHello.nextElementSibling)

//////////////////////////////////////////////////

console.log(div2)
const noviParagraf = document.createElement('p')
noviParagraf.id = 'novi-paragraf'
noviParagraf.className = 'paragraf'
//noviParagraf.textContent = 'Hello from JS'
// noviParagraf.innerHTML = 'Hello from JS'
// noviParagraf.innerText = 'Hello from JS'
div2.appendChild(noviParagraf)
console.log(div2)
