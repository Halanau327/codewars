function squareDigits(num) {
    const numStr = num.toString();
    let result = 0;
    for (let i = 0; numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        const square = digit * digit;
        result += square;
    }
    return result;
}

squareDigits(255)