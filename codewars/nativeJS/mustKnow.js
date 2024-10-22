

const arr = [11,23,7633,-10,24,232,5,66,78]
let newValue = arr[0]

for (let i = 0; i<arr.length;i++) {
    if (newValue > arr[i]) {
        newValue = arr[i]
    }
}

console.log(newValue)