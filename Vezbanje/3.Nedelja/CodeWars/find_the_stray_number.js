
// function stray(numbers) {
//     let prvi = numbes[0]
//     for (let i = 0; i < numbers.length; i++) {
//        if (prvi == numbers[i]) {
//            continue
//        } else{
//            if (i == 1 && numbers[1] == numbers[2]) {
//                return prvi 
//            }
//            return numbers[i]
//        }

        
//     }
    
//     return 0
// }

function stray(numbers) {
    let sortiranNiz = numbers.sort((a, b) => a - b)
    let min = sortiranNiz[0]
    let max = sortiranNiz[sortiranNiz.length - 1]
    return min == sortiranNiz[1] ? max : min
}

console.log(stray([3,17,17,17,17]))

