function friend(friends) {
    let newArr = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            newArr.push(friends[i])
        }

    }
    return newArr
}

friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])