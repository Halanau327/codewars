arr = [1, 2, 3, 4, 5, 6]

function divisibleBy(numbers, divisor) {
    let newArray = numbers.map((d) => {
        return d / divisor === Number.isInteger ? d : NaN
    })
    return newArray.filter(Number.isInteger)
}

divisibleBy(arr, 2)