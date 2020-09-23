let friends = ["Ryan", "Kieran", "Mark"]

function friend(friends) {
    let friend1 = []
    for (let i = 0; i < friends.length; i++) {

        if (friends[i].length == 4) {
            friend1.push(friends[i])
                
        } 
        
    }
    return friend1
}

console.log(friend(friends))