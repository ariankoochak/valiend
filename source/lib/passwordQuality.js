const passwordContains = require('./passwordContains');
const checkRepetitionChar = require("../utils/checkRepetitionChar");


/**
 * With this method, you can check the quality and strength of the password
 * @param {string} str The password you want to check the quality of
 * @return {number} A number from 0 to 100 that indicates the quality of the password
 */
function passwordQuality(str) {
    try {
        if (typeof str !== "string" || str.length < 8) {
            return 0;
        }
        let passwordScore = 0;
        const contains = passwordContains(str);
        const {
            isHaveCapitalLetter,
            isHaveSmallLetter,
            isHaveNumber,
            isHaveCharacter,
            passwordLength,
            numberCount,
            characterCount,
        } = contains;

        passwordScore += passwordLength * 4;
        passwordScore += checkRepetitionChar(1, str).length - str.length;
        passwordScore += checkRepetitionChar(2, str).length - str.length;
        passwordScore += checkRepetitionChar(3, str).length - str.length;
        passwordScore += checkRepetitionChar(4, str).length - str.length;

        if (numberCount === 3) {
            passwordScore += 5;
        }

        if (characterCount >= 2) {
            passwordScore += 5;
        }

        if (isHaveCapitalLetter === true && isHaveSmallLetter === true) {
            passwordScore += 10;
        }

        if (
            isHaveNumber === true &&
            isHaveCapitalLetter === true &&
            isHaveSmallLetter === true
        ) {
            passwordScore += 15;
        }

        if (isHaveNumber === true && isHaveCharacter === true) {
            passwordScore += 15;
        }

        if (
            isHaveCharacter === true &&
            isHaveCapitalLetter === true &&
            isHaveSmallLetter === true
        ) {
            passwordScore += 15;
        }

        if (
            (isHaveCapitalLetter === true &&
                isHaveSmallLetter === true &&
                isHaveNumber === false &&
                isHaveCharacter === false) ||
            (isHaveCapitalLetter === false &&
                isHaveSmallLetter === false &&
                isHaveNumber === true &&
                isHaveCharacter === false)
        ) {
            passwordScore -= 10;
        }

        if (passwordScore > 100) {
            passwordScore = 100;
        } else if (passwordScore < 0) {
            passwordScore = 0;
        }

        return passwordScore;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

module.exports = passwordQuality;