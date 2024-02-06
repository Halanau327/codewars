class SmallestIntegerFinder {
    findSmallestInt(args) {
        let number = Infinity;
        for (let i = 0; i < args.length; i++) {
            if (args[i] !== null && args[i] !== undefined && args[i] < number) {
                number = args[i];
            }
        }
        return number;
    }
}