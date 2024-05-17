let arr = [123, 2, 5, 22, 1]

function smallEnough(a, limit) {
    return a.every(f => {
        if (f <= limit) {
            return true
        } else return false
    })
}

console.log(smallEnough(arr, 125))