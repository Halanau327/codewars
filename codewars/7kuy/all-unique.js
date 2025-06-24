function hasUniqueChars(str){
    const charSet = new Set(str);
    return charSet.size === str.length;
}

console.log(hasUniqueChars('Aawg@bed++'))
