//Napisati program koji ce za ucitanu vrednost K izracunati vrednost izraza i ispisati

//S = 1 ^ 2 + 3 ^ 2 + 5 ^ 2 + ... + k ^ 2

let K = 5

let S = 0

for (let i = 1; i <= K; i += 2) {

    S += i ** 2
}
    console.log(S)

