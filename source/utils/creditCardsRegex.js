module.exports = {
    "visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
    "master-card": /^5[1-5][0-9]{14}$/,
    "american-express": /^3[47][0-9]{13}$/,
    "discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    "diners-club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    "jcb": /^(?:2131|1800|35\d{3})\d{11}$/,
    "maestro": /^(?:5[0678]\d{2}|6\d{3})\d{8,15}$/,
    "union-pay": /^62[0-9]{14,17}$/,
};