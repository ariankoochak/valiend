const regionVATRegex = require("../utils/regionVATRegex");
const checkRegex = require("../utils/checkRegex");
// todo : add description for isVAT
// todo : add Array suggestion for regions
// todo : add VAT regex to <../utils/regionVATRegex>
/**
 * 
 * @param {string} VAT
 * @param {Array<"">} regions An array of the list of valid regions where the VAT code can be in one of the entered regions
 * @returns {boolean}
 */
function isVAT(VAT, regions = []) {
    try {
        if (
            typeof VAT !== "string" ||
            VAT.length === 0 ||
            regions === undefined ||
            regions.length === 0
        ) {
            return false;
        }
        for (const region of regions) {
            let regexOfRegion = regionVATRegex[region];
            if (
                regexOfRegion !== undefined &&
                checkRegex(VAT, regexOfRegion)
            ) {
                return true;
            }
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isVAT;
