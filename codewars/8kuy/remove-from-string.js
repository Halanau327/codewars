function removeExclamationMarks(s) {
    const removeElement = "!";
    const filteredArray = s.split("").filter(item => item !== removeElement);
    return filteredArray.join("");
}
