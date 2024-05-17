let arr = [5,6,1]

function gimme(triplet) {
    let newValue = [...triplet].sort((a,b) => a-b)
    let middle = newValue[1]
    return triplet.indexOf(middle)
}

console.log(gimme(arr))