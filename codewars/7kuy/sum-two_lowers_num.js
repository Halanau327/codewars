let array = [5, 89, 2, 42, 4, 62]

function sumTwoSmallestNumbers(numbers) {

    let newArr = numbers.sort((a, b) => a - b)
    return newArr[0] + newArr[1]
}

console.log(sumTwoSmallestNumbers(array))