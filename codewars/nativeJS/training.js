const matches = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]
let x = 0;
let y = 0;
let totalPoints = 0;

function points(games) {
    games.forEach((t) => {
        let [scoreX, scoreY] = t.split(":")
        x = parseFloat(scoreX);
        y = parseFloat(scoreY)
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