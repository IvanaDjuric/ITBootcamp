// //var x
// //let x
// //const x

// //var x; //deklarisanje
// //x = 4; //definisanje
// //var x = 4; //deklarisanje + definisanje

// //var // moze svugde da se primeni, i u global i u local scope i moze vise puta da se deklarise
// //let // isto kao var, moze vise puta da se deklarise, ali funkcionise samo u local scope
// //const //isto kao let, funkcionise samo u local scope, i za razliku od let, ne moze vise puta da se deklarise.

// var x = 4;
// let y = 5;

// console.log(x + y); 

/*var x = 4;
const z = 3;
z = 5;

console.log(x + z);*/ //nece da radi jer ne mogu const vise puta

/*var x = 5;
{
    let x = 6;
    console.log(x); //prvo objavljuje x u zagradama, jer local scope ima prednost
} 
console.log(x); //uvek ce isto objaviti, 6 6, dok ne deklarisem kao let promenljivu unutar bloka.
*/

/*let y = 5;
{
     let y = 6; //ako ostavim bez const, izbacice error, ako stavim const,let,var, bice u redu.
    console.log(y);
}
console.log(y);  //kad su mi obe var, 2x ista vrednost ce se prikazati */

/*x = 5;
{
    var x = 4;
    {
       let x = 6; //1.nema nista,2.var,3.let - izlazi unutrasnji i ovaj iznad njega, spoljasnji ne
        console.log(x);
    }
    console.log(x);
} console.log(x); //sva tri dobijaju vrednosti iz local scope (var), let nece jer je x deklarisana vec,
*/


/*y = 5;
z = 6;
x = "Pera";

console.log( y + z + x);  //ovde u svakom slucaju ispada string i nadovezivanje, a ako dodam i trecu, i nju ce da gleda kao string, a ako prvo stavim 2 broja pa string, onda ce prvo njih da sabere pa onda string.*/