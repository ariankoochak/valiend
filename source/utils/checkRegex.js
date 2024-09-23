/**
 * 
 * @param {*} testInput 
 * @param {RegExp} regex 
 * @returns {boolean}
 */
module.exports = function (testInput,regex){
    return testInput.match(regex) !== null ? true : false;
}