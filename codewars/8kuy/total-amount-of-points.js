const matches = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]


function points(games) {
    let totalPoints = 0;
    games.forEach((t) => {
        let [scoreX, scoreY] = t.split(":")
        let x = parseFloat(scoreX);
        let y = parseFloat(scoreY)
        if (x > y) {
            totalPoints += 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    })
    return totalPoints
}

const result = points(matches)
console.log(result)