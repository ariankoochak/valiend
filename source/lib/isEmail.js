const checkRegex = require('../utils/checkRegex');

/**
 * With this method, you can check whether your string is email or not
 * @param {string} str Write the string you want to check whether it is an email or not in this parameter and pass it to the function
 * @return {boolean} If the input string is an email, it returns true and if the input string is not an email, it returns false.
 */
function isEmail(str) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return false;
        }
        const emailRegex =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return checkRegex(str, emailRegex);
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isEmail;
