function longest(s1, s2) {
    return [...new Set(s1 + s2)].join('')
}

longest("aretheyhere", "yestheyarehere")