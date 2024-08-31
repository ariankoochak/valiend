const getRandomNumber = require("./getRandomNumber");

/**
 * @return {string}
 */
module.exports = function () {
    try {
        const chars = ['@','#','!','$','%','^','&','*','(',')','_','+','-','=','\\','/','>','<',"?",";","'",'"',':'];
        return chars[getRandomNumber(0,chars.length - 1)]
    } catch (error) {
        return error;
    }
};
