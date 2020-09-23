const f = (x,y,z) => (x >= y && x >= z) ? x : (y >= z) ? y : z

let niz = [5,234,6,2,-23,34]

console.log(niz.reduce((total,curr) => curr % 2 == 0 ? total + curr : total,0))
console.log(f(13,5,12))

let zbir = 0
niz.forEach(x => {
    zbir += x
    console.log(zbir)
})

niz.forEach(el => {
    console.log(el)
})

//isto kao i 

// for (let i = 0; i < niz.length; i++) {
//     console.log(niz[i])
    
// }