const getRandomAlphabet = require("../utils/getRandomAlphabet");
const getRandomCharacter = require("../utils/getRandomCharacter");
const getRandomNumber = require("../utils/getRandomNumber");

/**
 * With this method you can create a strong password
 * @param {number} passwordLength The length of the password you want to create must be between 8 and 64
 * @return {string} Random password
 */
function passwordGenerator(passwordLength = 8) {
    try {
        passwordLength =
            passwordLength < 8 ? 8 : passwordLength > 64 ? 64 : passwordLength;
        const passwordArr = [];
        passwordArr.push(getRandomNumber());
        passwordArr.push(getRandomNumber());
        passwordArr.push(getRandomAlphabet("up"));
        passwordArr.push(getRandomAlphabet("up"));
        passwordArr.push(getRandomAlphabet("lo"));
        passwordArr.push(getRandomAlphabet("lo"));
        passwordArr.push(getRandomCharacter());
        passwordArr.push(getRandomCharacter());
        for (let i = 0; i < passwordLength - 8; i++) {
            let dice = getRandomNumber(1, 3);
            switch (dice) {
                case 1:
                    passwordArr.push(getRandomNumber());
                    break;
                case 2:
                    passwordArr.push(getRandomAlphabet("both"));
                    break;
                case 3:
                    passwordArr.push(getRandomCharacter());
                    break;
                default:
                    passwordArr.push(getRandomAlphabet("both"));
                    break;
            }
        }
        let password = "";
        while (passwordArr.length > 0) {
            let index = getRandomNumber(0, passwordArr.length - 1);
            password += passwordArr[index];
            passwordArr.splice(index, 1);
        }
        return password;
    } catch (error) {
        console.log(error);
        return "";
    }
}

module.exports = passwordGenerator;