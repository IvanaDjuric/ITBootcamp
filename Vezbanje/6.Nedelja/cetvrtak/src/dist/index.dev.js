// // селектујемо форму
// // селектујемо именик
// // додамо eventListener на форму
// let imenik = [
//     {
//         name: 'Пера',
//         number: '+381 614567891'
//     },
//     {
//         name: 'Жика',
//         number: '+381 614567821'
//     }
// ]
// // 1. Брише све постојеће
// // 2. Исписује све из низа
// // const renderList = (list) => {
// // }
// const isValid = () => {
//     name.value.trim() == ''
//     // && number.value.length == 12
//     // && number.value.
// }
// const isDuplicate = (name,number) => {
//     name.value == name.value && number.value == number.value
// }
// const errorMessage = () => {
// }
// const addItem = (name,number) => {
//     if(isValid()){
//        if(isDuplicate(name,number)){
//             if(confirm(`Да ли желите да замените број корисника ${name}`)){
//                 let index = imenik.findIndex(item => item.name == name)
//                 imenik.splice(index,1,{name,number})
//             }
//        } 
//        else{
//            imenik.push({name,number})
//        }
//     }
//     else{
//        console.log('грешка')
//        errorMessage()
//     }
//     renderList()
// }
// const app = document.querySelector('#app')
// const forma = document.createElement('form')
// forma.className = 'forma'
// const inputIme = document.createElement('input')
// inputIme.className = 'inputName'
// forma.appendChild(inputIme)
// const inputTel = document.createElement('input')
// inputTel.className = 'inputName'
// forma.appendChild(inputTel)
// const btn = document.createElement('button')
// btn.className = 'btnSub'
// btn.textContent = 'Submit'
// forma.appendChild(btn)
// let imenik = [
//     {
//         name: 'Pera',
//         number: '+381 614567891'
//     }
// ]
// const imenikList = document.createElement('div')
// imenikList.className = 'user-phone'
// let pUser = document.createElement('p')
// pUser.className = 'pUser'
// imenikList.appendChild(pUser)
// app.append(forma, imenikList)
// // btn.addEventListener('click', e => {
// //     e.preventDefault()
// //         pUser.textContent = inputIme.value + ' ' + inputTel.value
// //     if (inputIme.value == inputIme.value) {
// //         confirm('Da li zelite da promenite broj telefona?')
// //         if (confirm == 'true') {
// //             pUser.textContent = inputIme.value + ' ' + inputTel.value
// //         }
// //     }
// // })
"use strict";