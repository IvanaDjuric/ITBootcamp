//Na osnovu dana u nedelji (zadatak brojem) treba napisati da li je radni dan ili vikend
//0-6 ili 1-7
//sa switch i sa if/else

let x = 1;

if(x < 5){
    console.log('Danas je radni dan')
} else if(x < 7){
    console.log('Danas je neradan dan')
} else{
    console.log('Ne znam koji je dan danas')
}

switch(x){
    case 0:
        console.log('Danas je radni dan')
        break
    case 1:
        console.log('Danas je radni dan')
        break
    case 2:
        console.log('Danas je radni dan')
        break
    case 3:
        console.log('Danas je radni dan')
        break
    case 4:
        console.log('Danas je radni dan')
        break
    case 5:
        console.log('Danas je neradan dan')
        break
    case 6:
        console.log('Danas je neradan dan')
        break
    default:
        console.log('Ne znam koji je dan danas')
        break
} 

//Na osnovu meseca ispisati koliko on ima dana
//0-11

let mesec = 1;
let godina = 1972;

switch(mesec){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log('Ovaj mesec ima 31 dan')
        break
    case 1:
        if(godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
            console.log('Godina je prestupna, ovaj mesec ima 29 dana')
        } else{
            console.log('Godina nije prestupna, ovaj mesec ima 28 dana')
        }
        break
    case 3:
    case 5:
    case 8:
    case 10:
        console.log('Ovaj mesec ima 30 dana')
        break
    default:
        console.log('Nije validan unos')
        break
}