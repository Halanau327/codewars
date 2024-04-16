arr = [1, 2, 3, 4, 5, 6]

function divisibleBy(numbers, divisor) {
    let newArray = numbers.map((d) => {
        debugger
        return Number.isInteger(d / divisor) ? d : NaN;
    })
    return newArray.filter(Number.isInteger)
}

divisibleBy(arr, 2)

// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
// }