function zero(operation) {
    if (!operation) return 0;
    return operation(0);
}

function one(operation) {
    if (!operation) return 1;
    return operation(1);
}

function two(operation) {
    if (!operation) return 2;
    return operation(2);
}

function three(operation) {
    if (!operation) return 3;
    return operation(3);
}

function four(operation) {
    if (!operation) return 4;
    return operation(4);
}

function five(operation) {
    if (!operation) return 5;
    return operation(5);
}

function six(operation) {
    if (!operation) return 6;
    return operation(6);
}

function seven(operation) {
    if (!operation) return 7;
    return operation(7);
}

function eight(operation) {
    if (!operation) return 8;
    return operation(8);
}

function nine(operation) {
    if (!operation) return 9;
    return operation(9);
}

function plus(secondNumber) {
    return function (firstNumber) {
        return firstNumber + secondNumber;
    }
}

function minus(secondNumber) {
    return function (firstNumber) {
        return firstNumber - secondNumber;
    }
}

function times(secondNumber) {
    return function (firstNumber) {
        return firstNumber * secondNumber;
    }
}

function dividedBy(secondNumber) {
    return function (firstNumber) {
        return Math.floor(firstNumber / secondNumber);
    }
}

console.log(four(dividedBy(three())))