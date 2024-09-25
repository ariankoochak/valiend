const creditCardsRegex = require('../utils/creditCardsRegex');
const checkRegex = require('../utils/checkRegex');
/**
 * This method validates it according to the type of credit card
 * @param {string} creditCard -> The credit card in the form of the string you want to validate
 * @param {{ creditCardType: Array }} [options={creditCardType : Array}]  An array of credit card types that you want the entered credit card to be one of-like visa or master-card.If you leave this parameter blank, it will be validated with all types of credit cards
 */
function isCreditCard(creditCard,options = {creditCardType : []}){
    try {
        if(options.creditCardType === undefined || options.creditCardType.length === 0){
            options.creditCardType = Object.keys(creditCardsRegex);
        }
        for(const cardType of options.creditCardType){
            let cardRegex = creditCardsRegex[cardType];
            if (cardRegex !== undefined && checkRegex(creditCard, cardRegex)) {
                return true;
            }
        }
        return false
    } catch (error) {
        console.log(error);
    }
}

module.exports = isCreditCard;