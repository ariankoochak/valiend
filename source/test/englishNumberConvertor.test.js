const valiend = require("../index");

test("englishNumberConvertor => '1234567890' :: true", () => {
    expect(valiend.englishNumberConvertor("1234567890")).toBe("1234567890");
});

test("englishNumberConvertor => '00' :: true", () => {
    expect(valiend.englishNumberConvertor("00")).toBe("00");
});

test("englishNumberConvertor => '12345e67890' :: false", () => {
    expect(valiend.englishNumberConvertor("12345e67890")).toBe("12345e67890");
});

test("englishNumberConvertor => 'dsfsdsdv' :: false", () => {
    expect(valiend.englishNumberConvertor("dsfsdsdv")).toBe("dsfsdsdv");
});

test("englishNumberConvertor => Number('324') :: true", () => {
    expect(valiend.englishNumberConvertor('324')).toBe('324');
});

test("englishNumberConvertor => Number(۱۳۴) :: true", () => {
    expect(valiend.englishNumberConvertor("۱۳۴")).toBe('134');
});

test("englishNumberConvertor => Number(۱۳2۴) :: true", () => {
    expect(valiend.englishNumberConvertor("۱۳2۴")).toBe("1324");
});