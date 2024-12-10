const valiend = require("../index");

test("isNumeric => '1234567890' :: true", () => {
    expect(valiend.isNumeric("1234567890")).toBe(true);
});

test("isNumeric => '00' :: true", () => {
    expect(valiend.isNumeric("00")).toBe(true);
});

test("isNumeric => '12345e67890' :: false", () => {
    expect(valiend.isNumeric("12345e67890")).toBe(false);
});

test("isNumeric => 'dsfsdsdv' :: false", () => {
    expect(valiend.isNumeric("dsfsdsdv")).toBe(false);
});

test("isNumeric => Numeber(324) :: true", () => {
    expect(valiend.isNumeric(324)).toBe(true);
});

test("isNumeric => Numeber(۱۳۴) :: true", () => {
    expect(valiend.isNumeric('۱۳۴')).toBe(true);
});