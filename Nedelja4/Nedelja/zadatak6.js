//    1. Дугмићи за 'наручивање' повећавају бројач
// 2. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
// Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const body = document.querySelector('body')

const dugmeO1 = document.createElement('button')
const dugmeO2 = document.createElement('button')

const dugmeO1N = document.createElement('button')
const dugmeO2N = document.createElement('button')

const count = document.createElement('p')
const p = document.createElement('p')

dugmeO1.textContent = 'order'
dugmeO2.textContent = 'order'

dugmeO1N.textContent = 'order now'
dugmeO2N.textContent = 'order now'

let d = new Date()
let dateTime = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + d.getHours() + ":" + d.getMinutes()
let i = 0

dugmeO1.addEventListener('click',() => {  
    i++
 count.textContent = i
 
})

dugmeO2.addEventListener('click',() => {
    i++
 count.textContent = i

})

dugmeO1N.addEventListener('click',() => {

    if (i === 0) {
        p.textContent = 'greska'
    } else{
        p.textContent = 'Narucili ste: ' + i + ' pica ' + dateTime

        i = 0
       
    }

   
})

dugmeO2N.addEventListener('click',() => {

    if (i === 0) {
        p.textContent = 'greska'
    } else{
        p.textContent = 'Narucili ste: ' + i + ' pica ' + dateTime

        i = 0
    }

   
   
})


body.appendChild(count)
body.appendChild(p)
body.appendChild(dugmeO1)
body.appendChild(dugmeO2)
body.appendChild(dugmeO1N)
body.appendChild(dugmeO2N)