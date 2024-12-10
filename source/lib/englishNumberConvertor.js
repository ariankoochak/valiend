
/**
 * With this method, if you have a Persian or Arabic number in your text, you can convert it to an English number.
 * @param {string} input 
 * @returns {string} Same input but with numbers converted to English numbers
 */
function englishNumberConvertor(input) {
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
}

module.exports = englishNumberConvertor;
