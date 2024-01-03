function intersection(a, b) {
    const map = new Map();
    const set = new Set();
    a.forEach((element) => map.set(element));
    b.forEach((element) => {
        if (map.has(element)) {
            set.add(element);
        } 
    })
    const newArray = [...set];
    return newArray;
}

module.exports = intersection;
