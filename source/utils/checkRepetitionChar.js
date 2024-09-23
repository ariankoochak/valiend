/**
 * Checks for repetition of characters in
 * a string
 *
 * @param {int} length Repetition length.
 * @param {string} str The string to be checked.
 * @return {string}
 */
module.exports = function (length, str) {
    let res = "",repeated = false,i = 0,j = 0;
    for (i = 0; i < str.length; i++) {
        repeated = true;
        for (j = 0; j < length && j + i + length < str.length; j++) {
            repeated =
                repeated && str.charAt(j + i) === str.charAt(j + i + length);
        }
        if (j < length) {
            repeated = false;
        }
        if (repeated) {
            i += length - 1;
            repeated = false;
        } else {
            res += str.charAt(i);
        }
    }
    return res;
};
