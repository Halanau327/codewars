function squareDigits(num) {
    const numStr = num.toString();
    let result = '';
    for (let i = 0; numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        const square = digit * digit;
        result += square;
    }
    return result;
}

