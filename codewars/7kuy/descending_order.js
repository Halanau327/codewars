function descendingOrder(numb) {
    let numbersArray = String(numb).split("");
    numbersArray.sort((a, b) => b - a);
    return Number(numbersArray.join(""));
}

descendingOrder(215432562);