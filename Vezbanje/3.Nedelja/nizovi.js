//Sta su nizovi?

// let x1 = 4
// let x2 = 5
// let x3 = 7

// let nizBrojeva = [4,5,7]

// console.log(typeof nizBrojeva, nizBrojeva)

// //Kako pristupamo elementima niza?

// console.log(nizBrojeva[2])

// //function f(x,y){
// // console.log()
// //} console.log(f())

// //console.log(nizBrojeva[broj][broj iz tog drugog niza])

// //Kako iteriramo (prolazimo) kroz niz?

// console.log(nizBrojeva.length)

// for (let i = 0; i < nizBrojeva.length; i++) {
//     console.log(i, nizBrojeva[i]);
// }

// Zbir brojeva u nizu

{
    let niz = [1,34,23,78,231,67,2,6,23,-234]

    let zbir = 0

    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i]
    }
    
        console.log(zbir)
    
}

//iz niza izvuci brojeve koji su deljivi sa 2

{
    let nizBrojeva = [1,2,3,4,24,24,654,123,566,78,23]
    let nizDeljivih = []

    for (let i = 0; i < nizBrojeva.length; i++) { //uvek izgleda ovako 
        
        if (nizBrojeva[i] % 2 === 0) { //ako gledamo svaki drugi, onda bez zagrade
            nizDeljivih.push(nizBrojeva[i])
        }
    }

    console.log(nizDeljivih)
}

//Kako prosledjujemo niz funkciji?