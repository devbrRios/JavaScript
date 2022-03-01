let fat = function(x) {
    let y = 1
    
    for (let c = x; c > 1 ; c--) {
        y *= c
    }
    return y
}

console.log(fat(9))