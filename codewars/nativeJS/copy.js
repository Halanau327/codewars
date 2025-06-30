// let obj = {
//     name: "John",
//     age: 30,
//     details: {
//         hobbies: ["reading", "games"],
//         location: [
//             {
//                 city1: "New York",
//                 city2: "Boston",
//                 city3: "Orlando",
//                 city4: "Los-Angeles"
//             },
//             {
//                 streetNy: "Wall Street",
//                 streetBst: "Newbury Street",
//                 streetOrl: "Orange Avenue",
//                 streetLa: "Rodeo Drive"
//
//             }
//         ],
//
//     },
//     favoriteFoods: ["pizza", "burgers"],
// };
//
// const newObj = {
//     ...obj,
//     ['details']: {
//     ...obj['details'],
//         ['location']: {
//         ...obj['details']['location'].map(f=> {
//             f.city1 ===
//         })
//         }
//     }
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reversed = s.split("").reverse().join("").toLowerCase();
    console.log(s)
    console.log(reversed)
    return reversed === s;

};

isPalindrome("A man, a plan, a canal: Panama")