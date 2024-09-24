/**
 * This method creates a schema for the valiendCheck method to validate the data
 * @param {Object} schema This object contains three main keys, usernameSchema, passwordSchema, phoneNumberSchema, each of these keys has an object value.
 * @param {keyof} schema.usernameSchema {validChars : ["_", "."]}
 * @param {keyof} schema.passwordSchema {safePassword : false , safePasswordStrictMode : false , minPasswordScore : 50}
 * @param {keyof} schema.phoneNumberSchema {regions : []}
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
            phoneNumberRegions: [],
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

module.exports = schemaMaker;