//Piramida

let k = 5
let poklopac = ' '.repeat(k) + '#'

console.log(poklopac)

for (let i = 1; i < k; i++) {
    console.log(' '.repeat(k - i) + '#' + '#'.repeat(i + i))
    
}