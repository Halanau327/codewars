function areYouPlayingBanjo(name) {
    let split = name.split("");
    if (split[0] === "R" || split[0] === "r") {
        return name + " plays banjo"
    } else return name + " does not play banjo"
}

areYouPlayingBanjo("Rames");