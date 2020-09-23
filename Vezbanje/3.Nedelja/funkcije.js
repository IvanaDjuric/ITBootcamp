//Sintaksa

function jeDeljivSa5(x) {
    //telo funkcije
    return x % 5 === 0 //povratna vrednost, vraca Boolean (true, false)
}

//Zasto koristimo funkcije

// let x = 7
// if (jeDeljivSa5(x)) {
//     return x % 5 === 0
// } else{

// }

function sum(a,b) {
    // let sum = a + b
    // console.log(sum)
    console.log(a + b)
    return a + b
}

let y = sum(6,213)

console.log(y);

//Zadaci

//Funkcija koja vraca --- neka vrednost
//Funkcija koja ispisuje --- neka vrednost

function red(n) {
    return '*'.repeat(n)
}

function ispisiRedove(brojRedova,jedanRed) {
    for (let i = 0; i < brojRedova; i++) {
        console.log(jedanRed);
        
    }
}

ispisiRedove(5,red(5))

//Napisati funkciju koja ispisuje da li je broj deljiv sa 3

function jeDeljivSa3(a) {  //printDivisibleBy3

    if (a % 3 === 0) {
        return `Broj ${a} je deljiv sa 3`
    } else{
        return `Broj ${a} nije deljiv sa 3`
    }
    
}

console.log(jeDeljivSa3(15)); 

//Napisati funkciju koja proverava da li je broj deljiv sa 3

function isDivisibleBy3(num) {
    return num % 3 === 0
}



console.log(isDivisibleBy3(6))

//Napisati program koji izracunava zbir brojeva deljivih sa 3

let N = 100
let zbir = 0
for (let i = 0; i < N; i++) {
    if (isDivisibleBy3(i)) {
        zbir += 1
    }
    
}

console.log(zbir);
