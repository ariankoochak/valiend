![valiend](./Logo-text.png)

[valiend.com](https://www.valiend.com)
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
check validate email
```js
valiend.isEmail('aeromche@gmail.com'); //true
```
check validate Phone number
```js
valiend.isPhoneNumber('+989121234567'); //true

valiend.isPhoneNumber('09121234567',{regions : ['fa-IR']}); //true
```
Check the contents of the password
‍‍‍
```js
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
```
Separate different parts of the email
```js
valiend.separateEmail("aeromche@gmail.com");
/*{
  emailUsername: 'aeromche',
  emailSymbol: '@',
  emailMailServer: 'gmail',
  emailMailServerUrl: 'gmail.com',
  emailDomain: '.com'
}*/
```

Create a random password
```js
valiend.passwordGenerator(12); //r_YXST46!a7e
```

Check password quality
```js
valiend.passwordQuality('Honh3443') //75
```
Check for numeric value
```js
valiend.isNumeric("1237653423") //true
valiend.isNumeric("12376e423") //false
```
Checking whether the input value is within the range
```js
valiend.isInRange(32,{minRange : 18,maxRange : 90}) //true
```
Checking the validity of a user name in terms of the characters used
```js
valiend.isUsername("ariankoochak") //true
valiend.isUsername("_.aeromche._",{validChars : ['@','_','$','#','.']}) //true
valiend.isUsername("@eromche") //false
valiend.isUsername("@eromche$_") //false
```
Checking the security and strength of the password
```js
valiend.isSafePassword("A5h#3232") //true
valiend.isSafePassword("aadfdf") //false
valiend.isSafePassword("SA23sa#$",{strictMode : true}) //true
valiend.isSafePassword("A5h#3232",{strictMode : true}) //false
```

Creating a random otp (one time password) numerically
```js
valiend.getOtpCode() //85943
valiend.getOtpCode({otpLength : 7}) //0856473
```

Validate all data together

```js
  inputs = {
      username: "@riankoc",
      password: "aeromch@e3",
      email: "arian.koochak@protonmail.com",
  };
  const schema = valiend.schemaMaker({
      usernameSchema: {
          validChars: ["_"],
      },
      passwordSchema: {
          safePassword: true,
      },
  });
  valiend.valiendCheck(inputs, schema)
  /*
    {
        result: false,
        errors: [{username : "username not valid"},{ password: "password is not safe" }],
    }
  */
```
```js
  inputs = {
      username: "@riankoc",
      password: "aeromch@e3",
      email: "arian.koochak@protonmail.com",
  };
  const schema = valiend.schemaMaker({
      usernameSchema: {
          validChars: ["_"],
      },
      passwordSchema: {
          safePassword: true,
      },
  });
  valiend.valiendCheck(inputs, schema)
  /*
    {
        result: false,
        errors: [{username : "username not valid"},{ password: "password is not safe" }],
    }
  */
```