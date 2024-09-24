/**
 * With this method, you can check whether the username entered is correct and valid
 * @param {string} inputUsername Username
 * @param {Array} options.validChars An array of valid and usable characters in the username text
 * @returns {boolean}
 */
function isUsername(inputUsername, options = { validChars: [".", "_"] }) {
    try {
        if (typeof inputUsername !== "string" || inputUsername.length === 0) {
            return false;
        }
        const usernameRegex = new RegExp(
            `[${options.validChars.join(
                ""
            )}A-Za-z][A-Za-z0-9${options.validChars.join("")}]{3,36}$`
        );
        const match = inputUsername.match(usernameRegex);
        return match !== null ? match.input === match[0] : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isUsername;