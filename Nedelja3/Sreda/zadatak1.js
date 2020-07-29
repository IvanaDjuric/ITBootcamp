
function Max3(x,y,z) {
    if (x > y && x > z) {
        return x 
    } 
    else if (y > x && y > z) {
        return y    
    } 
    else if (z > x && z > y) {
        return z
    } else{
        return ('Niste uneli validan broj')
    }
}
console.log(Max3(150, 180, 170))