function openOrSenior(data) {
return  data.map(([age, handicap]) => data[age] >= 55 && data[handicap] > 7 ? "Senior" : "Open")
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])

// let newArr = []
// data.map(t => {
//         if (t[0] >= 55 && t[1] > 7) {
//             newArr.push("Senior")
//         } else newArr.push("Open")
//     }
// )
// return newArr