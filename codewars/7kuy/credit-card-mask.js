function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    } else {
        const lastFour = cc.slice(-4);
        const bString = '#'.repeat(cc.length - 4);
        return bString + lastFour;
    }
}


maskify('1111333344445555')
