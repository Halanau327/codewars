function abbrevName(name) {
    const abrev = name.split(" ");
    const firstName = abrev[0].toUpperCase();
    const secondName = abrev[1].toUpperCase();
    const fullName = firstName[0] + "." + secondName[0];
    return fullName
}

