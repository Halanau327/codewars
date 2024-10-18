function findShort(s) {
    const splitArray = s.split(' ')
    let shortest = splitArray[0].length
    for (let i = 0; i < splitArray.length; i++) {
        let wordLength = splitArray[i].length;
        if (wordLength < shortest) {
            shortest = wordLength
        }
    }
    return shortest
}

findShort("bitcoin take over the world maybe who knows perhaps")