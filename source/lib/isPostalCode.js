const regionsPostalCodesRegex = require('../utils/regionPostalCodeRegex');
const checkRegex = require("../utils/checkRegex");
/**
 * With this method, you can check whether the zip code entered is valid or not
 * @param {string} postalCode
 * @param {Array<"am-AM" | "ar-BH" | "ar-DZ" | "ar-LB" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LY" | "ar-MA" | "ar-OM" | "ar-PS" | "ar-SA" | "ar-SD" | "ar-TN" | "az-AZ" | "bs-BA" | "be-BY" | "bg-BG" | "bn-BD" | "ca-AD" | "cs-CZ" | "da-DK" | "de-DE" | "de-AT" | "de-CH" | "de-LU" | "dv-MV" | "el-GR" | "el-CY" | "en-AI" | "en-AU" | "en-BM" | "en-GB" | "en-GG" | "en-IN" | "en-JM" | "en-KE" | "en-SS" | "en-LS" | "en-MT" | "en-NA" | "en-NG" | "en-NZ" | "en-PG" | "en-PK" | "en-PH" | "en-SG" | "en-US" | "en-ZM" | "es-AR" | "es-BO" | "es-CO" | "es-CL" | "es-CR" | "es-CU" | "es-DO" | "es-HN" | "es-EC" | "es-ES" | "es-PE" | "es-MX" | "es-NI" | "es-PA" | "es-PY" | "es-SV" | "es-UY" | "es-VE" | "et-EE" | "fa-IR" | "fi-FI" | "fo-FO" | "fr-FR" | "fr-GF" | "fr-GP" | "fr-MQ" | "fr-PF" | "fr-RE" | "fr-WF" | "hu-HU" | "id-ID" | "ir-IR" | "it-IT" | "it-SM" | "ja-JP" | "ka-GE" | "kk-KZ" | "kl-GL" | "ko-KR" | "ky-KG" | "lt-LT" | "lv-LV" | "mg-MG" | "mn-MN" | "my-MM" | "ms-MY" | "mz-MZ" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-MD" | "ro-RO" | "ru-RU" | "si-LK" | "sl-SI" | "sk-SK" | "sq-AL" | "sr-RS" | "sv-SE" | "tg-TJ" | "th-TH" | "tr-TR" | "tk-TM" | "uk-UA" | "uz-UZ" | "vi-VN" | "zh-CN" | "zh-TW" | "dz-BT" | "fa-AF" | "en-CA" | "fr-CA" | "fr-BE" | "fr-CH" | "it-CH">} regions An array of the list of valid regions where the postal code can be in one of the entered regions
 * @returns {boolean}
 */
function isPostalCode(postalCode,regions = []) {
    try {        
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
