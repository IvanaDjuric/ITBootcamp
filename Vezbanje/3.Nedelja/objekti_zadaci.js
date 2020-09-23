//Filtrirati samo pozitivne
//deljive sa 3

let niz = [234,123,5,532,32,23]

function filterPlus(niz){
    for (let index = 0; i < niz.length; i++) {
        return niz[i] > 0
    }
  
}

let filterPluses = niz.filter(filterPlus)

console.log(filterPluses)
