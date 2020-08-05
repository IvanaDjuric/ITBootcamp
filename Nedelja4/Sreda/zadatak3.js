let pokemon1 = {
    name : 'Pikachu',
    species : 'electric',
    abilities : ['quick attack', 'tunderbolt', 'volt tackle'],
    chars : {
            attack : 112,
            defense : 96,
            stamina : 111
    }
}

let pokemon2 = {
    name : 'Pidgey',
    species : 'flying',
    abilities : ['quick attack', 'tackle', 'aerial ice'],
    chars : {
        attack : 85,
        defense : 73,
        stamina : 120
    }
}

let pokemon3 = {
    name : 'Charmeleon',
    species : 'fire',
    abilities : ['fire fang', 'scratch', 'ember'],
    chars : {
        attack : 158,
        defense : 126,
        stamina : 151
    }
}

let pokemon4 = {
    name : 'Poliwag',
    species : 'water',
    abilities : ['bubble', 'bubble beam', 'mud shot'],
    chars : {
        attack : 101,
        defense : 82,
        stamina : 121
    }
}

let pokemons = [pokemon1, pokemon2, pokemon3, pokemon4]

//odradila sam na 2 nacina jer nisam znala sta se tacno trazi u zadatku, samo brojevi ili samo objekti poredjani

function func(pokemons) {
    let brzina = []
    pokemons.forEach(element => {
        brzina.push(element.chars.stamina)
        brzina.sort((a,b) => a - b)
        
    }) 
    return brzina
}

console.log(func(pokemons))

pokemons.sort((a,b) => a.chars.stamina - b.chars.stamina)

console.log(pokemons)