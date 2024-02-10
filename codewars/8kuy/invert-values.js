function invert(array) {
    let arr = [];
    array.forEach(element => {
        element *= -1;
        arr.push(element);
    });
    return arr;
}
