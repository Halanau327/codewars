function fakeBin(x) {
    let split = x.split("");
    let arr = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] < 5) {
            split[i] = 0;
            arr.push(split[i]);
        } else if (split[i] >= 5) {
            split[i] = 1;
            arr.push(split[i]);
        }
    }
    return arr.join("");
}

