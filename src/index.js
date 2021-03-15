module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const dozens10 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    //465
    const array = String(number).split("").reverse();
    //[5 6 4]
    let result = [];
    // result = "f
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            if (
                (+array[i] !== 0 && array.length >= 1) ||
                (+array[i] === 0 && array.length === 1)
            )
                result.push(units[+array[i]]);
        } else if (i === 1) {
            if (+array[i] === 1) {
                result.pop();
                result.push(dozens10[+array[i - 1]]);
            } else if (+array[i] !== 0) result.push(dozens[+array[i] - 2]);
        } else if (i === 2) {
            result.push(`${units[+array[i]]} hundred`);
        }
    }
    return result.reverse().join(" ");
};
