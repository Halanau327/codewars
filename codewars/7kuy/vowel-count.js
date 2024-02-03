function getCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let strArr = str.split('');
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i].toLowerCase())) {
            count++
        }

    }
    return count;
}