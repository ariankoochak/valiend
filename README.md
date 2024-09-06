# Valiend

Valiend is an open source package created to make checking email, password and phone number input easier. By using this package, you can check these inputs much more easily than before and develop different conditions in your project according to them.

## install
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):
```sh
$ npm install valiend
```
## Usage
To use valiend, you must call it according to your use of common js or es module

Common JS
```js
const valiend = require('valiend'); //common js

valiend.isEmail('aeromche@gmail.com');
```
 

ES Module
```js
import {isEmail} from 'valiend'; //ES Module

isEmail('aeromche@gmail.com');
```
## Features
```js
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