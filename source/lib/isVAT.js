const regionVATRegex = require("../utils/regionVATRegex");
const checkRegex = require("../utils/checkRegex");
// todo : add description for isVAT
/**
 * 
 * @param {string} VAT
 * @param {Array<"fi-AX" | "sq-AL" | "ca-AD" | "de-AT" | "be-BY" | "nl-BE" | "fr-BE" | "bg-BG" | "hr-HR" | "el-CY" | "cs-CZ" | "da-DK" | "et-EE" | "fo-FO" | "fi-FI" | "fr-FR" | "de-DE" | "el-GR" | "hu-HU" | "is-IS" | "en-IE" | "ga-IE" | "it-IT" | "sq-XK" | "lv-LV" | "de-LI" | "lt-LT" | "de-LU" | "en-MT" | "ro-MD" | "sr-ME" | "nl-NL" | "mk-MK" | "nb-NO" | "nn-NO" | "pl-PL" | "pt-PT" | "ro-RO" | "it-SM" | "sr-RS" | "sk-SK" | "sl-SI" | "es-ES" | "sv-SE" | "de-CH" | "fr-CH" | "it-CH" | "uk-UA" | "en-GB">} regions An array of the list of valid regions where the VAT code can be in one of the entered regions
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
