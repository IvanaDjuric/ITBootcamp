

// let H = 5
// let poklopac = ' '

// for (let i = H; i > 0; i--) {
//     poklopac += ' '.repeat(i) + '# '.repeat(H - i)
//     poklopac += '\n'
// }
// for (let j = 0; j < H; j++) {
    
//     poklopac += ' '.repeat(j) + '# '.repeat(H - j)
//     poklopac += '\n'
// }

// console.log(poklopac);

let char = "*"
let H = 13

for (i = 1; i <= Math.floor(((H)/ 2)); i++) {
    console.log(" ".repeat(H - i) + char.repeat(i) + char.repeat(i - 1))
}
for (i = Math.ceil(H / 2); i > 0; i--) {
    console.log(" ".repeat(H - i) + char.repeat(i) + char.repeat(i - 1))
}