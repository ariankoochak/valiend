/**
 * @param {Number} min default value = 0
 * @param {Number} max default value = 9
 * @return {Number}
 */
module.exports = function (min = 0, max = 9) {
    try {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } catch (error) {
        return error;
    }
};
