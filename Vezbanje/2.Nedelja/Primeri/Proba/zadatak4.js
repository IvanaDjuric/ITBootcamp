let godina = 1234

for(i = 0; i < 30; godina++){
    
    
if(godina %4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
    i++
    console.log(godina)
} 

}