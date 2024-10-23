function getSum(a, b) {
    let count = 0
    if (a > b) {
        [a, b] = [b, a];
    }

    for (let i = a; i <= b; i++) {
        count = count + i
    }


    return count
}

getSum(0, -41)