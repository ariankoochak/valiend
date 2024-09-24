/**
 *
 * @param {Number} inputNumber
 * @param {object} range have a min range and max range
 * @param {Number} options.minRange min range default => 0
 * @param {Number} options.maxRange max range default => 10
 * @returns {Boolean}
 */
function isInRange(inputNumber, options = { minRange: 0, maxRange: 10 }) {
    try {
        if (
            typeof inputNumber !== "number" ||
            typeof options.minRange !== "number" ||
            typeof options.maxRange !== "number" ||
            isNaN(inputNumber) ||
            isNaN(options.minRange) ||
            isNaN(options.maxRange) ||
            inputNumber < options.minRange ||
            inputNumber > options.maxRange
        ) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = isInRange;