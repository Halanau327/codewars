function XO(str) {
    let splitStr = str.split('')
    let countX = 0
    let countO = 0
    for (let i = 0; i < str.length; i++) {
        if (splitStr[i].toLowerCase() === "x") {
            countX = countX + 1
        } else if (splitStr[i].toLowerCase() === "o") {
            countO = countO + 1
        }
    }

    return countX === countO
}

