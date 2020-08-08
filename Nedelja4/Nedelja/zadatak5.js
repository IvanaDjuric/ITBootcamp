let pokemon1 = {
    name : 'Pikachu',
    species : 'electric',
    abilities : ['quick attack', 'tunderbolt', 'volt tackle'],
    chars : {
            attack : 112,
            defense : 96,
            stamina : 111
    },
    image : 'img/pikachu.png'
}

let pokemon2 = {
    name : 'Pidgey',
    species : 'flying',
    abilities : ['quick attack', 'tackle', 'aerial ice'],
    chars : {
        attack : 85,
        defense : 73,
        stamina : 120
    },
    image : 'img/pidgey.png'
}

let pokemon3 = {
    name : 'Charmeleon',
    species : 'fire',
    abilities : ['fire fang', 'scratch', 'ember'],
    chars : {
        attack : 158,
        defense : 126,
        stamina : 151
    },
    image : 'img/charmeleon.png'
}

let pokemon4 = {
    name : 'Poliwag',
    species : 'water',
    abilities : ['bubble', 'bubble beam', 'mud shot'],
    chars : {
        attack : 101,
        defense : 82,
        stamina : 121
    },
    image : 'img/poliwag.png'
}

let pokemons = [pokemon1, pokemon2, pokemon3, pokemon4]

const body = document.querySelector('body')
const divWrapper = document.querySelector('.wrapper')
const dugme = document.getElementById('pobednik')
const dugme1 = document.getElementById('prikaz')
const divPok = document.createElement('div') //prikaz svih
const divPok1 = document.createElement('div') //prikaz pobednika


dugme1.addEventListener('click',() => {
pokemons.forEach(el =>{
    
    const par = document.createElement('p')
    par.textContent = el.name
    const images = document.createElement('img')
    images.src = el.image
    divPok1.classList.add('hide')
    divPok1.textContent = ''
    divPok.classList.remove('hide')
    divPok.appendChild(par)
    divPok.appendChild(images)

})
})

dugme.addEventListener('click',() =>{
    pokemons.sort((a,b) => b.chars.attack - a.chars.attack)
    const par1 = document.createElement('p')
    par1.textContent = pokemons[0].name
    const images1 = document.createElement('img')
    images1.src = pokemons[0].image
    divPok.classList.add('hide')
    divPok.textContent = ''
    divPok1.classList.remove('hide')
    divPok1.appendChild(par1)
    divPok1.appendChild(images1)
})

    body.appendChild(divPok)
    body.appendChild(divPok1)
