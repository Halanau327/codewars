let original = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 4,
        e: 5
    }
};

const copy = {...original, b: [...original.b], c: {...original.c}}

console.log(original)
console.log(copy)