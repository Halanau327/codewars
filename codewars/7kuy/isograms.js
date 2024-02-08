function isIsogram(str) {
    const letters = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        if (letters.hasOwnProperty(letter)) {
            return false;
        } else letters[letter] = true;
        
    }
    return true;
};

