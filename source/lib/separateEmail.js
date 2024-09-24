const isEmail = require('./isEmail')
/**
 * With this method, you can convert the email you received as a string into separate parts
 * @param {string} str An email in the form of a string that you want to separate its parts
 * @return {object} An object containing Email information
 */
function separateEmail(str) {
    try {
        if (isEmail(str) === false) {
            return {};
        }
        return {
            emailUsername: str.split("@")[0],
            emailSymbol: "@",
            emailMailServer: str.split("@")[1].split(".")[0],
            emailMailServerUrl: str.split("@")[1],
            emailDomain: str
                .split("@")[1]
                .replace(str.split("@")[1].split(".")[0], ""),
        };
    } catch (error) {
        console.log(error);
        return {};
    }
}

module.exports = separateEmail;