
function func(pokemons) {
    let brzina = []
    pokemons.forEach(element => {
        brzina.push(element.chars.stamina)
        brzina.sort((a,b) => a - b)
    }) 
    return brzina
}

export {func}