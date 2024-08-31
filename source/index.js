/**
 * With this method, you can check whether your string is email or not
 * @param {String} str Write the string you want to check whether it is an email or not in this parameter and pass it to the function
 * @return {Boolean} If the input string is an email, it returns true and if the input string is not an email, it returns false.
 */
function isEmail(str) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return false;
        }
        const emailRegex =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        const match = str.match(emailRegex);
        return match !== null ? match.input === match[0] : false;
    } catch (error) {
        return false
    }
}

/**
 * With this method, you can check whether your string is phone number or not
 * @param {String} str Write the string you want to check whether it is an phone number or not in this parameter and pass it to the function
 * @param {object} options phone number checking options
 * @param {boolean} options.ignoreCountryCode The entry should be checked without country code
 * @return {Boolean} If the input string is an phone number, it returns true and if the input string is not an phone number, it returns false.
 */
function isPhoneNumber(str, options = { ignoreCountryCode: false }) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return false;
        }
        const phoneNumberDefaultRegex =
            /(\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{6,14}$)/;
        const phoneNumberIgnoreCountryCodeRegex = /[0-9]{4,12}/;
        const match = options.ignoreCountryCode
            ? str.match(phoneNumberIgnoreCountryCodeRegex)
            : str.match(phoneNumberDefaultRegex);
        return match !== null ? match.input === match[0] : false;
    } catch (error) {
        return false
    }
}

/**
 * With this method, you can get useful information about the password entered as a string in this method
 * @param {String} str The string you want checked
 * @return {object} An object containing string information
 */
function passwordContains(str) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return {};
        }
        const isHaveCapitalLetter = /[A-Z]/.test(str);
        const isHaveSmallLetter = /[a-z]/.test(str);
        const isHaveNumber = /[0-9]/.test(str);
        const isHaveCharacter = /(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/.test(str);
        const passwordLength = str.length;
        const capitalLetterCount = isHaveCapitalLetter === true ? str.match(/[A-Z]/g).length : 0;
        const smallLetterCount = isHaveSmallLetter === true ? str.match(/[a-z]/g).length : 0;
        const numberCount = isHaveNumber === true ? str.match(/[0-9]/g).length : 0;
        const characterCount = isHaveCharacter === true ? str.match(/(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/g)?.length : 0;
        return {
            isHaveCapitalLetter,
            isHaveSmallLetter,
            isHaveNumber,
            isHaveCharacter,
            passwordLength,
            capitalLetterCount,
            smallLetterCount,
            numberCount,
            characterCount,
        };
    } catch (error) {
        return {}
    }
}

/**
 * With this method, you can convert the email you received as a string into separate parts
 * @param {String} str An email in the form of a string that you want to separate its parts
 * @return {object} An object containing Email information
 */
function separateEmail(str){
    try {
        if (isEmail(str) === false) {
            return {};
        }
        return {
            emailUsername: str.split("@")[0],
            emailSymbol: "@",
            emailMailServer: str.split("@")[1].split(".")[0],
            emailMailServerUrl: str.split("@")[1],
            emailDomain: str.split("@")[1].replace(str.split("@")[1].split(".")[0],''),
        };
    } catch (error) {
        return {}
    }
}


module.exports = {
    isEmail,
    isPhoneNumber,
    passwordContains,
    separateEmail,
};
