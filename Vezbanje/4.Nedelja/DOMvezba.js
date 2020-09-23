const body = document.querySelector('body')
const navMenu = ['Home', 'About', 'Contact']
const divVezba = document.createElement('div')
divVezba.id = 'vezba'
body.appendChild(divVezba)

const navVezba = document.createElement('nav')
const ulVezba = document.createElement('ul')

navMenu.forEach(el => {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.textContent = el
    a.href = '#' + el.toLowerCase()

    li.appendChild(a)
    ulVezba.appendChild(li)
})

navVezba.appendChild(ulVezba)
divVezba.appendChild(navVezba)


const newForm = document.createElement('form')
const formP = document.createElement('p')
formP.innerText = 'Ово је неки параграф'
newForm.appendChild(formP)

const mainLabel = document.createElement('label')
mainLabel.htmlFor = 'cars'
mainLabel.innerText = 'Choose a car:'
newForm.appendChild(mainLabel)

const selection = document.createElement('select')
selection.name = 'cars'
selection.id = 'cars'

const opt1 = document.createElement('optgroup')
opt1.label = 'Swedish Cars'

const swedishCars = ['Volvo','Saab']
swedishCars.forEach(car => {
    const option = document.createElement('option')
    option.textContent = car
    option.value = car.toLowerCase()
    opt1.appendChild(option)
})
selection.appendChild(opt1)

const opt2 = document.createElement('optgroup')
opt2.label = 'German Cars'

const germanCars = ['Mercedes','Audi']
germanCars.forEach(car => {
    const option = document.createElement('option')
    option.textContent = car
    option.value = car.toLowerCase()
    opt2.appendChild(option)
})
selection.appendChild(opt2)

newForm.appendChild(selection)

const input1 = document.createElement('input')
input1.type = 'hidden'
input1.name = 'strana'
input1.value = '15'

divVezba.appendChild(newForm)





