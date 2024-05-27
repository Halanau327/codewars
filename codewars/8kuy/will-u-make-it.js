const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ((mpg * fuelLeft) >= distanceToPump) {
        return true
    } else if ((mpg * fuelLeft) < distanceToPump) {
    }
    return false
}

console.log(zeroFuel(100, 50, 3))