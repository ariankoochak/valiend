const getRandomAlphabet = require("./utils/getRandomAlphabet");
const getRandomCharacter = require("./utils/getRandomCharacter");
const getRandomNumber = require("./utils/getRandomNumber");
const checkRepetitionChar = require("./utils/checkRepetitionChar");
const regionMobileRegexObject = require("./utils/regionMobileRegex");
const checkRegex = require("./utils/checkRegex");
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
        return checkRegex(str,emailRegex);
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * With this method, you can check whether your string is phone number or not
 * @param {string} str Write the string you want to check whether it is an phone number or not in this parameter and pass it to the function
 * @param {object} options phone number checking options
 * @param {boolean} options.ignoreCountryCode The entry should be checked without country code
 * @param {[string]} options.regions Array of regions for check mobile number on regions
 * @return {boolean} If the input string is an phone number, it returns true and if the input string is not an phone number, it returns false.
 */
function isPhoneNumber(str, options = { regions: [] }) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return false;
        }
        if (options.regions?.length > 0) {
            for (const region of options.regions) {
                let regexOfRegion = regionMobileRegexObject[region];
                if (regexOfRegion !== undefined && checkRegex(str,regexOfRegion)) {
                    return true;
                }
            }
            return false;
        } 
        else {
            for (const region in regionMobileRegexObject) {
                let regexOfRegion = regionMobileRegexObject[region];
                if ( regexOfRegion !== undefined && checkRegex(str, regexOfRegion)) {
                    return true;
                }
            }
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * With this method, you can get useful information about the password entered as a string in this method
 * @param {string} str The string you want checked
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
        const isHaveCharacter =
            /(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/.test(
                str
            );
        const passwordLength = str.length;
        const capitalLetterCount =
            isHaveCapitalLetter === true ? str.match(/[A-Z]/g).length : 0;
        const smallLetterCount =
            isHaveSmallLetter === true ? str.match(/[a-z]/g).length : 0;
        const numberCount =
            isHaveNumber === true ? str.match(/[0-9]/g).length : 0;
        const characterCount =
            isHaveCharacter === true
                ? str.match(
                      /(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/g
                  )?.length
                : 0;
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
        console.log(error);
        return {};
    }
}

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
            capitalLetterCount,
            smallLetterCount,
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

/**
 * With this method, you can check whether your variable is completely a numeric or not
 * @param {*} input
 * @return {Boolean}
 */
function isNumeric(input) {
    try {
        let numberDataTypeInput = Number(input);
        if (isNaN(numberDataTypeInput) || numberDataTypeInput === Infinity) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 *
 * @param {Number} inputNumber
 * @param {object} range have a min range and max range
 * @param {Number} options.minRange min range default => 0
 * @param {Number} options.maxRange max range default => 10
 * @returns {Boolean}
 */
function isInRange(inputNumber, options = { minRange: 0, maxRange: 10 }) {
    try {
        if (
            typeof inputNumber !== "number" ||
            typeof options.minRange !== "number" ||
            typeof options.maxRange !== "number" ||
            isNaN(inputNumber) ||
            isNaN(options.minRange) ||
            isNaN(options.maxRange) ||
            inputNumber < options.minRange ||
            inputNumber > options.maxRange
        ) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

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
        if (options.strictMode) {
            let passwordDatas = passwordContains(inputPassword);
            if (
                passwordDatas.capitalLetterCount < 3 ||
                passwordDatas.smallLetterCount < 3 ||
                passwordDatas.numberCount < 3 ||
                passwordDatas.characterCount < 3
            ) {
                return false;
            }
            return true;
        }
        return passwordQuality(inputPassword) >= 80 ? true : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

/**
 * This method can validate multiple data with the schema you give it
 * @param {Object} inputs We pass the input data in the form of value of keys of this object
 * @param {keyof} inputs.email To validate the email, put the email in this key
 * @param {keyof} inputs.username To validate the username, put the username in this key
 * @param {keyof} inputs.password To validate the password, put the password in this key
 * @param {keyof} inputs.phoneNumber To validate the phone number, put the phone number in this key
 * @param {Object} options You put the same schema that you have to pass to this method here, create the schema using the schemaMaker() method.
 * @returns {Object}
 */
function valiendCheck(
    inputs = {
        email,
        password,
        phoneNumber,
        username,
    },
    options = {}
) {
    try {
        if (Object.keys(inputs).length === 0) {
            return {
                result: false,
                errors: [],
            };
        }
        inputs.email = inputs.email ?? null;
        inputs.password = inputs.password ?? null;
        inputs.phoneNumber = inputs.phoneNumber ?? null;
        inputs.username = inputs.username ?? null;
        const { email, password, phoneNumber, username } = inputs;
        let returnObj = {
            result: true,
            errors: [],
        };
        if (email !== null && isEmail(email) === false) {
            returnObj.errors.push({ email: "email not valid" });
        }
        if (
            username !== null &&
            isUsername(username, {
                validChars: options.usernameSchema.validChars,
            }) === false
        ) {
            returnObj.errors.push({ username: "username not valid" });
        }
        if (password !== null) {
            if (options.passwordSchema.safePassword) {
                if (
                    options.passwordSchema.safePasswordStrictMode === true &&
                    isSafePassword(password, { strictMode: true }) === false
                ) {
                    returnObj.errors.push({ password: "password is not safe" });
                } else if (isSafePassword(password) === false) {
                    returnObj.errors.push({ password: "password is not safe" });
                }
            } else if (
                passwordQuality(password) <
                options.passwordSchema.minPasswordScore
            ) {
                returnObj.errors.push({ password: "password is not safe" });
            }
        }
        if (phoneNumber !== null) {
            if(options.phoneNumberSchema.regions.length > 0 && isPhoneNumber(phoneNumber,{regions : options.phoneNumberSchema.regions}) === false){
                returnObj.errors.push({
                    phoneNumber: "phone number is not valid",
                });
            } 
            else if (isPhoneNumber(phoneNumber) === false) {
                returnObj.errors.push({
                    phoneNumber: "phone number is not valid",
                });
            }
        }
        if (returnObj.errors.length > 0) {
            returnObj.result = false;
        }
        return returnObj;
    } catch (error) {
        return {
            result: false,
            errors: [error],
        };
    }
}

/**
 * This method creates a schema for the valiendCheck method to validate the data
 * @param {Object} schema This object contains three main keys, usernameSchema, passwordSchema, phoneNumberSchema, each of these keys has an object value.
 * @param {keyof} schema.usernameSchema {validChars : ["_", "."]}
 * @param {keyof} schema.passwordSchema {safePassword : false , safePasswordStrictMode : false , minPasswordScore : 50}
 * @param {keyof} schema.phoneNumberSchema {ignoreCountryCode : false}
 * @returns {object}
 */
function schemaMaker(
    schema = {
        usernameSchema: {},
        passwordSchema: {},
        phoneNumberSchema: {},
    }
) {
    try {
        const defaultObj = {
            usernameValidChars: ["_", "."],
            passwordSafePasswordCheck: false,
            passwordSafePasswordCheckStrictMode: false,
            minPasswordScore: 50,
            phoneNumberIgnoreCountryCode: false,
            phoneNumberRegions : [],
        };
        return {
            usernameSchema: {
                validChars:
                    schema.usernameSchema?.validChars ??
                    defaultObj.usernameValidChars,
            },
            passwordSchema: {
                safePassword:
                    schema.passwordSchema?.safePassword ??
                    defaultObj.passwordSafePasswordCheck,
                safePasswordStrictMode:
                    schema.passwordSchema?.safePasswordStrictMode ??
                    defaultObj.passwordSafePasswordCheckStrictMode,
                minPasswordScore:
                    schema.passwordSchema?.minPasswordScore ??
                    defaultObj.minPasswordScore,
            },
            phoneNumberSchema: {
                ignoreCountryCode:
                    schema.phoneNumberSchema?.ignoreCountryCode ??
                    defaultObj.phoneNumberIgnoreCountryCode,
                regions:
                    schema.phoneNumberSchema?.regions ??
                    defaultObj.phoneNumberRegions,
            },
        };
    } catch (error) {
        console.log(error);
        return error;
    }
}

/**
 * Otp (one time password) are used to verify mobile number or email. You can receive a numeric password with the desired number of digits from this method and send it to your user to confirm his mobile number or email.
 * @param {Number} options.otpLength You can enter the length of the otp you want to receive. By default, its value is 5
 * @returns {Number} Returns a number with the number of digits specified in the input
 */
function getOtpCode(options = { otpLength: 5 }) {
    try {
        let otp = "";
        for (let i = 0; i < options.otpLength; i++) {
            otp += getRandomNumber(0, 9);
        }
        return otp;
    } catch (error) {
        return error;
    }
}

module.exports = {
    isEmail,
    isPhoneNumber,
    passwordContains,
    separateEmail,
    passwordQuality,
    passwordGenerator,
    isNumeric,
    isInRange,
    isUsername,
    isSafePassword,
    schemaMaker,
    valiendCheck,
    getOtpCode,
};
