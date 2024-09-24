const passwordContains = require('./passwordContains');
const passwordQuality = require('./passwordQuality');

/**
 * With this method, you can check whether the password is safe or not
 * @param {string} inputPassword
 * @param {boolean} options.strictMode Strict mode means that there must be at least 3 uppercase letters, 3 lowercase letters, 3 numbers, 3 characters in the password.
 * @returns {boolean}
 */
function isSafePassword(inputPassword, options = { strictMode: false }) {
    try {
        if (typeof inputPassword !== "string" || inputPassword.length === 0) {
            return false;
        }
        if (options.strictMode === true) {
            let passwordDatas = passwordContains(inputPassword);
            if (
                (passwordDatas.capitalLetterCount > 3 &&
                passwordDatas.smallLetterCount > 3 &&
                passwordDatas.numberCount > 3 &&
                passwordDatas.characterCount > 3) || (
                    passwordQuality(inputPassword) === 100
                )
            ) {
                return true;
            }
            return false;
        }
        return passwordQuality(inputPassword) >= 80 ? true : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isSafePassword;