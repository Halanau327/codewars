function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true && sheep[i] !== undefined && sheep[i] !== NaN) {
            count += 1;
        }
    }
    return count;
}

