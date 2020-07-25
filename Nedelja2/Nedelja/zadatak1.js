let cena1 = 250
let cena2 = 350
let cena3 = 450

let R1 = 28
let R2 = 32
let R3 = 44

let r1 = R1 / 2
let r2 = R2 / 2
let r3 = R3 / 2

let P1 = r1**2 * Math.PI
let P2 = r2**2 * Math.PI
let P3 = r3**2 * Math.PI

let cena1_cm = cena1 / P1
let cena2_cm = cena2 / P2
let cena3_cm = cena3 / P3

console.log(cena1_cm, cena2_cm, cena3_cm)