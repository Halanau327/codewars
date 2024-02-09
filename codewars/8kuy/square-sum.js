function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let sq = numbers[i] * numbers[i];
        sum += sq;
    }
    return sum;
}

