const valiend = require("../index");

test("isInRange => 23 between 12 & 27 :: true", () => {
    expect(valiend.isInRange(23,{minRange : 12, maxRange : 27})).toBe(true);
});

test("isInRange => 23 between 12 & '27' :: false", () => {
    expect(valiend.isInRange(23, { minRange: 12, maxRange: '27' })).toBe(false);
});

test("isInRange => 44 between 12 & '27' :: false", () => {
    expect(valiend.isInRange(44, { minRange: 12, maxRange: 27 })).toBe(false);
});

test("isInRange => 5 between 12 & '27' :: false", () => {
    expect(valiend.isInRange(5, { minRange: 12, maxRange: 27 })).toBe(false);
});
