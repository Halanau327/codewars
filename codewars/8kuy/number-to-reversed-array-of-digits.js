function digitize(n) {
    let stringVar = String(n);
    let arrayVar = stringVar.split("");
    arrayVar.reverse();
    return arrayVar.map(Number);
  }

