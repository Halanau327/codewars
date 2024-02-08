function filter_list(array) {
    return array.filter((number) => {
        return typeof number === "number";
    });
};

