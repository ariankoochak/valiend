/**
 * With this method, you can get useful information about the password entered as a string in this method
 * @param {string} str The string you want checked
 * @return {object} An object containing string information
 */
function passwordContains(str) {
    try {
        if (typeof str !== "string" || str.length === 0) {
            return {};
        }
        const isHaveCapitalLetter = /[A-Z]/.test(str);
        const isHaveSmallLetter = /[a-z]/.test(str);
        const isHaveNumber = /[0-9]/.test(str);
        const isHaveCharacter =
            /(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/.test(
                str
            );
        const passwordLength = str.length;
        const capitalLetterCount =
            isHaveCapitalLetter === true ? str.match(/[A-Z]/g).length : 0;
        const smallLetterCount =
            isHaveSmallLetter === true ? str.match(/[a-z]/g).length : 0;
        const numberCount =
            isHaveNumber === true ? str.match(/[0-9]/g).length : 0;
        const characterCount =
            isHaveCharacter === true
                ? str.match(
                      /(\@|\#|\!|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\\|\/|\>|\<|\?|\,|\.|\"|\'|\;|\:)/g
                  )?.length
                : 0;
        return {
            isHaveCapitalLetter,
            isHaveSmallLetter,
            isHaveNumber,
            isHaveCharacter,
            passwordLength,
            capitalLetterCount,
            smallLetterCount,
            numberCount,
            characterCount,
        };
    } catch (error) {
        console.log(error);
        return {};
    }
}

module.exports = passwordContains;
