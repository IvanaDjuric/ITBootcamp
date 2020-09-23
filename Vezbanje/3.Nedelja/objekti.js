// let name1 = 'Pera'
// let age1 = 13
// let email = 'dskfjs'

// let name2 = 'jhf'
// let age2 = 34
// let email2 = 'dsjfksf'

// let person1 = {
//     name: 'Pera',
//     age: 13,
//     email: 'dskfjs'
// }

// let person2 = {
//     name: 'jhf',
//     age: 34,
//     email: 'dsjfksf'
// }

// console.log(person1.name);

let acc1 = {
    username: 'pera',
    age: 17
}
let acc2 = {
    username: 'zika',
    age: 32
}
let acc3 = {
    username: 'ana',
    age: 24
}
let acc4 = {
    username: 'lana',
    age: 37
}
let accounts = [acc1,acc2,acc3,acc4]

        // for (let i = 0; i <accounts.length; i++) {
        //     if (accounts[i].age >= 18) {
        //         console.log(accounts[i].age)
        //     }
            
        // }

function punoletan(acc) {
    return acc.age >= 18
}

let punoletni = accounts.filter(punoletan)

console.log(punoletni)

// accounts.forEach(el => {
//     username.push(el.username)
// })

// let username2 = accounts.map(acc => acc.username)

// console.log(username2)

