function red(znak, N) {

    return znak.repeat(N)

}

​

function trougao(visina) {

    let trougao = ''

    for (let i = 1; i <= visina; i++) {

        trougao += ' '.repeat(50 - visina) + ' '.repeat(visina - i) + red('*', 2 * i - 1) + '\n'

    }

    return trougao;

}

//console.log(trougao(2) + trougao(3) + trougao(4));


let slika = ''

for (let i = 2; i < 30; i++) {

    slika += trougao(i);

}

console.log(slika);

//ternarni operator za punoletan

function racun(punoletan) {

​

    punoletan ? cena = '2.00' : cena = '10.00'

​

}

​

​