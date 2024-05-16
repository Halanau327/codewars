let array = [6,19,22,592,2]

function minMax(arr){
    let minNumber = arr.reduce((a,b) => Math.min(a,b))
        let maxNumber = arr.reduce((a,b) => Math.max(a,b))
    return [minNumber, maxNumber]
}

console.log(minMax(array))