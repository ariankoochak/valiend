const checkRegex = require("../utils/checkRegex");
const regionMobileRegexObject = require("../utils/regionMobileRegex");

/**
 * With this method, you can check whether your string is phone number or not
 * @param {string} str Write the string you want to check whether it is an phone number or not in this parameter and pass it to the function
 * @param {Array<"am-AM" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-LB" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LY" | "ar-MA" | "ar-OM" | "ar-PS" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "az-AZ" | "bs-BA" | "be-BY" | "bg-BG" | "bn-BD" | "ca-AD" | "cs-CZ" | "da-DK" | "de-DE" | "de-AT" | "de-CH" | "de-LU" | "dv-MV" | "el-GR" | "el-CY" | "en-AI" | "en-AU" | "en-AG" | "en-BM" | "en-BS" | "en-GB" | "en-GG" | "en-GH" | "en-GY" | "en-HK" | "en-MO" | "en-IE" | "en-IN" | "en-JM" | "en-KE" | "fr-CF" | "en-SS" | "en-KI" | "en-KN" | "en-LS" | "en-MT" | "en-MU" | "en-MW" | "en-NA" | "en-NG" | "en-NZ" | "en-PG" | "en-PK" | "en-PH" | "en-RW" | "en-SG" | "en-SL" | "en-TZ" | "en-UG" | "en-US" | "en-ZA" | "en-ZM" | "en-ZW" | "en-BW" | "es-AR" | "es-BO" | "es-CO" | "es-CL" | "es-CR" | "es-CU" | "es-DO" | "es-HN" | "es-EC" | "es-ES" | "es-PE" | "es-MX" | "es-NI" | "es-PA" | "es-PY" | "es-SV" | "es-UY" | "es-VE" | "et-EE" | "fa-IR" | "fi-FI" | "fj-FJ" | "fo-FO" | "fr-BF" | "fr-BJ" | "fr-CD" | "fr-CM" | "fr-FR" | "fr-GF" | "fr-GP" | "fr-MQ" | "fr-PF" | "fr-RE" | "fr-WF" | "hu-HU" | "id-ID" | "ir-IR" | "it-IT" | "it-SM" | "ja-JP" | "ka-GE" | "kk-KZ" | "kl-GL" | "ko-KR" | "ky-KG" | "lt-LT" | "lv-LV" | "mg-MG" | "mn-MN" | "my-MM" | "ms-MY" | "mz-MZ" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nl-AW" | "nn-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "pt-AO" | "ro-MD" | "ro-RO" | "ru-RU" | "si-LK" | "sl-SI" | "sk-SK" | "so-SO" | "sq-AL" | "sr-RS" | "sv-SE" | "tg-TJ" | "th-TH" | "tr-TR" | "tk-TM" | "uk-UA" | "uz-UZ" | "vi-VN" | "zh-CN" | "zh-TW" | "dz-BT" | "ar-YE" | "ar-EH" | "fa-AF" | "en-CA" | "fr-CA" | "fr-BE" | "zh-HK" | "zh-MO" | "ga-IE" | "fr-CH" | "it-CH">} regions Array of regions for check mobile number on regions
 * @return {boolean} If the input string is an phone number, it returns true and if the input string is not an phone number, it returns false.
 */
function isPhoneNumber(str,regions= []) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return false;
        }
        if (regions?.length > 0) {
            for (const region of regions) {
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

// const keys = Object.keys(regionMobileRegexObject);
// console.log(keys.join('" | "'));


module.exports = isPhoneNumber;
