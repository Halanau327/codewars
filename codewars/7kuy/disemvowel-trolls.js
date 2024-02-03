function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      
      if (!vowels.includes(char)) {
        result += str[i];
      }
    }
  
    return result;
  }