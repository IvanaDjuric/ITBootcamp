let godina = 1972;

if(godina %4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
    console.log('Godina je prestupna')
} else{
    console.log('Godina nije prestupna')
}