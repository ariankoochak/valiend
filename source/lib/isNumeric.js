const englishNumberConvertor = require("../utils/englishNumberConvertor");

/**
 * With this method, you can check whether your variable is completely a numeric or not
 * @param {*} input
 * @return {Boolean}
 */
function isNumeric(input) {
    try {
        let strInput = ''
        if(typeof input === 'string'){
            strInput = englishNumberConvertor(input);
        }
        
        let numberDataTypeInput = strInput !== '' ? Number(strInput) : Number(input);
        if (isNaN(numberDataTypeInput) || numberDataTypeInput === Infinity) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isNumeric;