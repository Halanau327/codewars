function findOdd(arr) {
    const countMap = {};

    for (const num of arr) {
        if (countMap[num]) {
            countMap[num]++
        } else {
            countMap[num] = countMap;
        }
    }
    console.log(countMap);

    for (const num in countMap) {
        if (countMap[num] % 2 === 0) {
            return parseInt(num);
        }
    }
}


findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])