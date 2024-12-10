/**
 * With this method, if you have an English number in your text, you can convert it to a Persian or Arabic number.
 * @param {string} input
 * @returns {string} Same input but with numbers converted to Persian or Arabic number
 */
function persianNumberConvertor(input) {
    const englishNumbers = "0123456789";
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";

    const hasEnglishNumbers = input
        .split("")
        .some((char) => englishNumbers.includes(char));

    if (hasEnglishNumbers) {
        return input.replace(/\d/g, (digit) => persianNumbers[digit]);
    } else {
        return input;
    }
}

module.exports = persianNumberConvertor;
