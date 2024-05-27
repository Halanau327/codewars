let arr = [4,3,6,2,7]

function betterThanAverage(classPoints, yourPoints) {
    let newArr = [...classPoints, yourPoints]
    let sum = newArr.reduce((a,b) => a + b, 0)
    let avg = sum / newArr.length
        return yourPoints > avg;
}

console.log(betterThanAverage(arr,3))
