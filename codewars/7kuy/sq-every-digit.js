        
const array = [2,4,5,2,6]

function squareDigits(num){
    let newArr = []
  num.forEach(n=>{
      newArr.push(n*n)
  })
    return newArr.join('')
}

console.log(squareDigits(array))