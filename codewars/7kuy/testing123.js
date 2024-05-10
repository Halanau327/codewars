let arr = [1,65,2,5,8]

var number=function(array){
return  array.map((n, index) => `${index + 1}: ${n}`)
}

console.log(number(arr))