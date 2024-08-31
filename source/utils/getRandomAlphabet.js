const getRandomNumber = require("./getRandomNumber");

/**
 * @param {string} UOLC upper or lower case , UOLC = 'both' -> upper and lower case , UOLC = 'up' -> upper case , UOLC = 'lo' -> lower case
 * @return {string}
 */
module.exports = function (UOLC = "both") {
    try {
        switch (UOLC) {
            case "up":
                return String.fromCharCode(getRandomNumber(65, 90));
            case "lo":
                return String.fromCharCode(getRandomNumber(97, 122));
            case "both":
                let min = 65;
                let max = 90;
                let dice = getRandomNumber(0,1);
                if(dice === 1){
                    min = 97;
                    max = 122;
                }
                return String.fromCharCode(getRandomNumber(min, max));
            default:
                throw new Error('UOLC not found');
        }
    } catch (error) {
        return error;
    }
};
