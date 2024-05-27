    let arr1 = ["a", "a", "c", "b"]
    let arr2 = ["a", "a", "b",  ""]


    function checkExam(array1, array2) {
        let score = 0
        array1.forEach((value, index) => {
            if (array1[index] === array2[index]) {
                score += 4
            } else if (array1[index] !== array2[index] && array1[index] !== '' && array2[index] !== '' ) {
                score -= 1
            } else if (array1[index] === '' || array2[index] === '') {
                score += 0
            }
            return score
        })
     return score < 0 ? 0 : score
    }

    console.log(checkExam(arr1, arr2))