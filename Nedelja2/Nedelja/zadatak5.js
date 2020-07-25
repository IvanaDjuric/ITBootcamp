let n = 5

let red = ' '.repeat(n - 1)+'#'+' '+'#'+' '.repeat(n -1)


for(let i = 1; i<= n; i++){
    red = ' '.repeat(n - i)+('#'.repeat(i))+' '+('#'.repeat(i))+' '.repeat(n -i)
    console.log(red)
 }


