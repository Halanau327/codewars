let arr = [5,6,1]

function gimme(triplet) {
    let one = triplet[0]
    let two = triplet[1]
    let three = triplet[2]
    return triplet.map((t, index) => {
        if (two < one < three || two > one > three) {
            return one[index]
        } else if (one < two < three || one > two > three) {
            return two[index]
        } else if (one < three < two || one > three > two) {
            return three[index]
        }
    })
}

console.log(gimme(arr))