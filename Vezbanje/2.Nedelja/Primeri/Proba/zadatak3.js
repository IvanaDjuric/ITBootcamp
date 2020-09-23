// Аритметичка средина  - од K до N
{
    let K = 1
    let N = 5

    if(K > N){
        let tmp = K
        K = N
        N = tmp
    }

    // let count = 0
    let zbir = 0
    for(let i = K; i <= N; i++){
        zbir += i
        // count++
    }

    console.log(`Аритметичка средина бројева између ${K} и ${N} укључујући ${N} је: ${zbir / (N - K + 1)}`)
}