var summation = function (num) {
    let newNumber = 0;
    for (let i = 0; i < num; i++) {
        let numberArray = num[i];
        if (newNumber < numberArray) {
            newNumber += numberArray;
        }
        return newNumber
    }

}

summation(9);