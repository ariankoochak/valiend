# Valiend

valiend is an open source package that was created to make it easier to check email, password and phone number entries. With this package, you can check these entries much more easily than before and according to them, different conditions in the project develop your

## install
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):
```sh
$ npm install valiend
```
## Usage
```js
const valiend = require('valiend');

valiend.isEmail('aeromche@gmail.com');
```

valiend is only available in **commonJs**


```js
const valiend = require('valiend');

valiend.isEmail('aeromche@gmail.com'); //true

valiend.isPhoneNumber('+989121234567'); //true

valiend.isPhoneNumber('09121234567',{ignoreCountryCode : true}); //true

valiend.passwordContains('Test4:@5tARian');
/*{
  isHaveCapitalLetter: true,
  isHaveSmallLetter: true,
  isHaveNumber: true,
  isHaveCharacter: true,
  passwordLength: 14,
  capitalLetterCount: 3,
  smallLetterCount: 7,
  numberCount: 2,
  characterCount: 2
}*/

valiend.separateEmail("aeromche@gmail.com");
/*{
  emailUsername: 'aeromche',
  emailSymbol: '@',
  emailMailServer: 'gmail',
  emailMailServerUrl: 'gmail.com',
  emailDomain: '.com'
}*/

valiend.passwordGenerator(12); //r_YXST46!a7e

valiend.passwordQuality('Honh3443') //75

```