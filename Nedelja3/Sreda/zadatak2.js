
function PriceCm(r,price) {
    let P = Math.pow(r,2) * Math.PI
    price1 = price / P

    return price1
}

console.log(PriceCm(14, 250));