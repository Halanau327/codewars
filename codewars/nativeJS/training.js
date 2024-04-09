// // let fruits = ['apple', 'banana', 'orange'];
// // fruits.push('cherry')
// // console.log(fruits)
//
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// // const poppedElement = users.pop()
// // console.log(poppedElement)
//
// // const shiftedElement = users.shift()
// // console.log(shiftedElement)
// // console.log(users)
//
// const el = {
//     id: 0,
//     name: 'TestName',
//     isStudent: false
// }
// const unshiftedElement = users.unshift(el)
// console.log(unshiftedElement)
// console.log(users)

// // const str = 'JavaScript is awesome';
// // console.log(str.split(' ').reverse().join(' '))
//
// let fruits = ['apple', 'banana', 'orange'],["1", "2"];
//
// let games = ['cs 2', 'dota 2', 'wow'];
//
// // const mergeArrays = fruits.concat(games)
// console.log(mergeArrays)
//
// let flattenArray = [1,
//     [2, 3],
//     [[4], [5, 6]
//     ]
// ]
//
// let flatArr = flattenArray.flat(Infinity)
// console.log(flatArr)
//
// let flattenArray2 = [1,
//     [2,
//         [3,
//             [4,
//                 [5]
//             ]
//         ]
//     ]
// ]

// let flatArr2 = flattenArray2.flat(Infinity)
// console.log(flatArr2)

// let arr = [1, 2, 3, 4, 5];

// const calculateSquare = (array) => {
//     array.forEach((num) => {
//         let squaredNum = num ** 2;
//         console.log(`${num} squared is ${squaredNum}`)
//     })
// }

// calculateSquare(arr)

// let arr = [10, 20, 30, 40, 50]
//
// let elOfArr = arr.find(e => e > 25)
// console.log(elOfArr)

// // let fruits = ["яблоко", "банан", "апельсин", "киви"]
// //
// // let foundFruit = fruits.find(el => el.startsWith("а"))
// //
// // console.log(foundFruit)

// // let numbers = [10, 20, 30, 40, 50]
// const findFirstElement = (array, condition) => {
//     return array.find(condition)
// }
// // let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);

// // console.log(firstNumberGreaterThan25)

// let fruits = ["яблоко", "банан", "апельсин", "киви"]

// let fruitStartsWithO = findFirstElement(fruits, (fruit) => fruit.startsWith("а"));
// console.log(fruitStartsWithO)
// let array =  [1, 2, 3, 4, 5]
// let fruits =  ["яблоко", "банан", "апельсин", "киви"]
// const checkElement = (arr, el) => {
//     return arr.includes(el);
// }

// console.log(checkElement(fruits,"яблоко"))

// let numbers = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45]
//
// const filterGreaterThan = (array) => {
//     return array.filter(arr => arr > 20)
// }
// console.log(filterGreaterThan(numbers2))
//
// let people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
// ];

// const sortedPeople = (arr) => {
//     return arr.sort((a,b) => b-a)
// }
//
// console.log(sortedPeople(people))

//
// let numbers = [5, 2, 8, 1, 4];
//
// const sortedPeople = (arr) => {
//     return arr.sort((a,b) => b-a)
// }
//
// console.log(sortedPeople(numbers))
// let data = [
//     {value: 1, name: 'Option 1'},
//     {value: 2, name: 'Option 2'},
//     {value: 3, name: 'Option 3'},
// ];
//
// let formattedData = data.map((d) => {
//     return {
//         value: d.value,
//         label: d.name
//     }
// })
// console.log(formattedData)


let products = [
    {id: 1, name: 'Apple', price: 1.99},
    {id: 2, name: 'Banana', price: 0.99},
    {id: 3, name: 'Orange', price: 2.49},
];

const productsWithDiscount = products.map((discount) => {
    return {
        ...products,
        dicsountedPrice: discount.price * 0.9
    }
})

console.log(productsWithDiscount)