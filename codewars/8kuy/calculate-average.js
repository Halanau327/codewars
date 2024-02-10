function findAverage(array) {
    let num = 0;
    let sumAv = 0;
    for (let i = 0; i < array.length; i++) {
        num += array[i];
        sumAv = num / array.length;
    }
    return sumAv;
}

