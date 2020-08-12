
function sposobnosti(pokemons) {
    let niz = []
   
    pokemons.forEach(element => {
        niz.push(element.abilities)
        
    }) 
    return niz
}

export {sposobnosti}