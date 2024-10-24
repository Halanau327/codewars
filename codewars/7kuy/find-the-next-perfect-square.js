function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq)
    console.log(sqrt)
    if (Number.isInteger(sqrt)) {
        const nextInteger = sqrt + 1
        return nextInteger * nextInteger
    } else return -1
}

findNextSquare(16)