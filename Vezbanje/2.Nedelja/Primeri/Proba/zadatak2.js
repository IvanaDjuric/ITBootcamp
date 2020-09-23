// Осмица
// W = 6 , H = 10
//  ####
// #    #
// #    #
// #    #
//  ####
// #    #
// #    #
// #    #
// #    #
//  #### 

let W = 6
let H = 10

let poklopac = ' ' + '#'.repeat(W - 2)+' '
let red = '#' + ' '.repeat(W - 2) + '#'

console.log(poklopac)
for(let i = 0; i < Math.floor((H - 3) / 2) ; i++){
    console.log(red)
}
console.log(poklopac)
for(let i = 0; i < (H - 3) / 2; i++){
    console.log(red)
}
    console.log(poklopac)