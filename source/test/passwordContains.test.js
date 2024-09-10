const valiend = require("../index");

test("passwordContains => 'dsfdsg434'", () => {
    expect(valiend.passwordContains("dsfdsg434")).toEqual({
        isHaveCapitalLetter: false,
        isHaveSmallLetter: true,
        isHaveNumber: true,
        isHaveCharacter: false,
        passwordLength: 9,
        capitalLetterCount: 0,
        smallLetterCount: 6,
        numberCount: 3,
        characterCount: 0,
    });
});

test("passwordContains => 'aa@$SD34'", () => {
    expect(valiend.passwordContains("aa@$SD34")).toEqual({
        isHaveCapitalLetter: true,
        isHaveSmallLetter: true,
        isHaveNumber: true,
        isHaveCharacter: true,
        passwordLength: 8,
        capitalLetterCount: 2,
        smallLetterCount: 2,
        numberCount: 2,
        characterCount: 2,
    });
});
