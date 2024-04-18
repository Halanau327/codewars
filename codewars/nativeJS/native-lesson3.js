let str = 'Hello, world!';
let startIndex = 7;

const sliced = (string, stInd) => {
   return string.slice(stInd, 13)
}

let array = [1, 2, 3, 4, 5]

const sliced2 = (arr, ind) => {
   return arr.slice(ind)
}

console.log(sliced2(sliced(array, 2)))

const sliced3 = (url, ind) => {
   return url.slice(ind)
}

console.log(sliced3('https://example.com/blog/article', 19))