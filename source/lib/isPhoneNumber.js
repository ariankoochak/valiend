const checkRegex = require("../utils/checkRegex");
const regionMobileRegexObject = require("../utils/regionMobileRegex");

/**
 * With this method, you can check whether your string is phone number or not
 * @param {string} str Write the string you want to check whether it is an phone number or not in this parameter and pass it to the function
 * @param {object} options phone number checking options
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
                if (
                    regexOfRegion !== undefined &&
                    checkRegex(str, regexOfRegion)
                ) {
                    return true;
                }
            }
            return false;
        } else {
            for (const region in regionMobileRegexObject) {
                let regexOfRegion = regionMobileRegexObject[region];
                if (
                    regexOfRegion !== undefined &&
                    checkRegex(str, regexOfRegion)
                ) {
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

module.exports = isPhoneNumber;
