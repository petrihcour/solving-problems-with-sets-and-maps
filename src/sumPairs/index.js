/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();
    A.forEach((element) => numbers.set(element, element));
    A.forEach((element) => {
        const diff = N - element;
        if (diff !== element && numbers.has(diff)) {
            solution.set(Math.min(element, diff), Math.max(element, diff));
        }
    })
    const newArray = [...solution];
    return newArray;
}

module.exports = sumPairs;
