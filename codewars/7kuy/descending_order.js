function descendingOrder(numb) {
    let numbersArray = String(numb).split("").map(Number);
    numbersArray.sort((a, b) => b - a);
    return numbersArray.join("");
}   
