function rgb(r, g, b) {
    const clamp = (num) => Math.max(0, Math.min(255, num));
    const toHex = (num) => {
        num = clamp(num);
        const hex = num.toString(16).toUpperCase()
        return hex.length === 1 ? "0" + hex : hex
    }
    return `${toHex(r)}${toHex(g)}${toHex(b)}`
}

rgb(255,0,52)