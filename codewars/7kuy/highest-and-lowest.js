function highAndLow(numbers) {
  const numbersArr = numbers.split(' ').map(Number);
  let maxNumber = Number.NEGATIVE_INFINITY;
  let minNumber = Number.POSITIVE_INFINITY;

  for (let i = 0; i < numbersArr.length; i++) {
    const num = numbersArr[i];
    if (num > maxNumber) {
      maxNumber = num;
    };
    if (num < minNumber) {
      minNumber = num;
    };
  };

return maxNumber + ' ' + minNumber;
}
