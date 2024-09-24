
const isEmail = require('./lib/isEmail');
const isPhoneNumber = require('./lib/isPhoneNumber');
const passwordContains = require('./lib/passwordContains');
const separateEmail = require('./lib/separateEmail');
const passwordQuality = require('./lib/passwordQuality')
const passwordGenerator = require('./lib/passwordGenerator');
const isNumeric = require('./lib/isNumeric');
const isInRange = require("./lib/isInRange");
const isUsername = require('./lib/isUsername')
const isSafePassword = require('./lib/isSafePassword');
const valiendCheck = require('./lib/valiendCheck');
const schemaMaker = require('./lib/schemaMaker');
const getOtpCode = require('./lib/getOtpCode');


module.exports = {
    isEmail,
    isPhoneNumber,
    passwordContains,
    separateEmail,
    passwordQuality,
    passwordGenerator,
    isNumeric,
    isInRange,
    isUsername,
    isSafePassword,
    schemaMaker,
    valiendCheck,
    getOtpCode,
};
