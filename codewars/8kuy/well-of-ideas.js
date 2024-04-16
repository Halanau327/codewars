function well(x) {
    let count = 0;
    x.forEach(n => n === 'good' ? count++ : undefined);
    return count >= 1 && count <= 2 ? 'Publish!' : count === 0 ? 'Fail!' : 'I smell a series!';
}

well(['bad', 'bad', 'bad'])

