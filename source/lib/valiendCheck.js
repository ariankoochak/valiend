const isEmail = require("./isEmail");
const isPhoneNumber = require("./isPhoneNumber");
const passwordQuality = require("./passwordQuality");
const isUsername = require("./isUsername");
const isSafePassword = require("./isSafePassword");

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
            if (
                options.phoneNumberSchema.regions.length > 0 &&
                isPhoneNumber(phoneNumber,options.phoneNumberSchema.regions) === false
            ) {
                returnObj.errors.push({
                    phoneNumber: "phone number is not valid",
                });
            } else if (isPhoneNumber(phoneNumber) === false) {
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

module.exports = valiendCheck;
