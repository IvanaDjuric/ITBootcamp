let n = 6
let k = 1
let j = n - 2
let t = 0
let m = 2*n - 3

let vrh = " ".repeat(n - 1) + '*'
console.log(vrh)

for (let i = 0; i < 2*n - 1; i++) {
    if (i < n - 1) {
        let red = " ".repeat(j) + "*" + " ".repeat(k) + "*"
        j--
        k += 2
        console.log(red)}
        else{
            while(m > 0){
                let red = " ".repeat(t) + "*" + " ".repeat(m) + "*"
                t++
                m -= 2
                console.log(red)}}}
                console.log(vrh);