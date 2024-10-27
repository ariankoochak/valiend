const regionsPostalCodesRegex = require('../utils/regionPostalCodeRegex');
const checkRegex = require("../utils/checkRegex");
/**
 * With this method, you can check whether the zip code entered is valid or not
 * @param {string} postalCode
 * @param {Array} options.regions An array of the list of valid regions where the postal code can be in one of the entered regions
 * @returns {boolean}
 */
function isPostalCode(postalCode,options = {regions : []}) {
    try {        
        const {regions} = options;
        if (typeof postalCode !== "string" || postalCode.length === 0 || regions === undefined ||regions.length === 0) {
            return false;
        }
        for(const region of regions){
            let regexOfRegion = regionsPostalCodesRegex[region];
            if (regexOfRegion !== undefined && checkRegex(postalCode, regexOfRegion)) {
                return true;
            }
        }
        return false
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isPostalCode;
