// let x = 123

// let j = x % 10
// console.log(j)

// let d = Math.floor (x / 10) % 10
// console.log(d)

// let s = Math.floor(x / (10 * 10)) % 10
// console.log(s)

//Odrediti da li je zadata cifra Armstrongov broj 
//Ako je jednak zbiru kubova njegovih cifara
//153 = 1 ** 3 + 5 ** 3 + 3**3

// //Prvi nacin
// let zbir = j ** 3 + Math.pow(d, 3) + s **3
// console.log(j,d,s,zbir)

// if(zbir === x){
//     console.log('jeste')
// } else{
//     console.log('nije')
// }


//Drugi nacin
// let x = 407
// let tmp = x
// let zbir = 0

// while(x !== 0){
//    let c = x % 10 //3
//     x = Math.floor(x / 10)
//     zbir += c ** 3
//     console.log(c)
// }

// console.log(x, zbir)

// if(tmp === zbir){
//     console.log('Jeste')
// } else {
//     console.log('nije')
// }