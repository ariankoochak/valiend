/**
 *
 * @param {String} input
 * @returns {String}
 */
module.exports = function (input) {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    const englishNumbers = "0123456789";

    const hasPersianNumbers = input
        .split("")
        .some((char) => persianNumbers.includes(char));

    if (hasPersianNumbers) {
        return input.replace(
            /[۰-۹]/g,
            (digit) => englishNumbers[persianNumbers.indexOf(digit)]
        );
    } else {
        return input;
    }
};
