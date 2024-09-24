const getRandomNumber = require("../utils/getRandomNumber");

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

module.exports = getOtpCode;