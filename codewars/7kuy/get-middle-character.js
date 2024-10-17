function getMiddle(s) {
    const split = s.split('')
    const mid = Math.floor(split.length / 2)
    if (split.length % 2 === 0) {
        return [split[mid - 1], split[mid]].join('')
    } else return split[mid]
}

getMiddle("Saksa")