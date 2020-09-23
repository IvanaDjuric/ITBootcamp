//modul matematika:
//-povrsine kvadrata i pravougaonika
//-obimi kvadrata i pravougaonika
//-zbir brojeva izmedju N i M (sum(N,M))
//-prosek brojeva izmedju N i M (avg(N,M))
//-proizvod brojeva izmedju N i M (mul(N,M))

export function obimKvadrata(a){
    return a * 4
}

export function obimPr(a,b = a) {
    return 2*a + 2*b
}

export function povrsinaKvadrata(a){
    return a * a
}

export function povrsinaPr(a,b = a) {
    return a * b
}

export function avg(N,M) {
    let suma = 0
    let count = 0
    for (let i = N; i < M; i++) {
        suma+= i
        count++      
    }
    return suma/count
}