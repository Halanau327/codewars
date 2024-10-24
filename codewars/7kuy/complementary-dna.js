function dnaStrand(dna) {
    let newArr = []
    let newDna = dna.split('')
    for (let i = 0; i < newDna.length; i++) {
        if (newDna[i] === "A") {
            newArr.push("T")
        } else if (newDna[i] === "T") {
            newArr.push("A")
        } else if (newDna[i] === "C") {
            newArr.push("G")
        } else if (newDna[i] === "G") {
            newArr.push("C")
        } else  newArr.push(newDna[i])
    }
    return newArr.join('').toUpperCase()
}

dnaStrand("AATTCCGGQWE")