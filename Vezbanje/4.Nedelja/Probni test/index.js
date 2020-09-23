body = document.querySelector('body')
head = document.querySelector('header')
h1 = document.querySelector('h1')

section1 = document.querySelector('.input-container')
input1.document.querySelector('#txt-company-name')
input2.document.querySelector('#txt-company-pib')

div.document.querySelector('div')
label.document.querySelector('label')
input3.document.querySelector('#txt-time')

input4.document.querySelector('#txt-value')
input5.document.querySelector('#btn-add')

section2 = document.querySelector('#item-list')
divCont = document.querySelectorAll('.item-container')

divInfo = document.querySelectorAll('.item-info')

divAct = document.querySelectorAll('.item-action')

divInInfo = document.querySelectorAll('div')

labelName = document.querySelectorAll('.company-name')
labelPib = document.querySelectorAll('.company-pib')
labelTime = document.querySelectorAll('.time-created')
labelPrice = document.querySelectorAll('.price-value')

labelInsTime = document.querySelector('.insert-timestamp')
span = document.querySelectorAll('span')

labelInsTime1 = document.querySelector('.insert-timestamp')

button1 = document.querySelector('button')
button2 = document.querySelector('button')

let companies = [
    {
    name:"Ime kompanije",
    pib:"12345678",
    dateIssued:"2019-11-18",
    value:1000,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    },
    {
    name:"Ime kompanije",
    pib:"78945612",
    dateIssued:"2019-11-18",
    value:1500,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    }
    ]

    button1.addEventListener('click', e => {
        if (labelName.value.trim().length === 0) {
            alert('Ne sme prazan unos')
        }
    
        if(labelPib.length < 8){
            alert('Ne sme manje od 8 cifara')
        }
    
    })
    
    
   
