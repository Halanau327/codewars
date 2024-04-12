let arr = [1, 3, 7, 5, 1, 3, 8, 2];

function getAverage(marks) {
    let count = 0;
    let sum = marks.reduce((acc, el) => {
        count++
        return acc + el
    }, 0)
    return Math.floor(sum / count)
}
getAverage(arr)