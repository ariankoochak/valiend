const valiend = require("../index");

test("persianNumberConvertor => '1234567890' :: true", () => {
    expect(valiend.persianNumberConvertor("1234567890")).toBe("۱۲۳۴۵۶۷۸۹۰");
});

test("persianNumberConvertor => '00' :: true", () => {
    expect(valiend.persianNumberConvertor("00")).toBe("۰۰");
});

test("persianNumberConvertor => '12345e67890' :: false", () => {
    expect(valiend.persianNumberConvertor("12345e67890")).toBe("۱۲۳۴۵e۶۷۸۹۰");
});

test("persianNumberConvertor => 'dsfsdsdv' :: false", () => {
    expect(valiend.persianNumberConvertor("dsfsdsdv")).toBe("dsfsdsdv");
});

test("persianNumberConvertor => Number('324') :: true", () => {
    expect(valiend.persianNumberConvertor('324')).toBe('۳۲۴');
});

test("persianNumberConvertor => Number(۱۳۴) :: true", () => {
    expect(valiend.persianNumberConvertor("۱۳۴")).toBe('۱۳۴');
});

test("persianNumberConvertor => Number(۱۳2۴) :: true", () => {
    expect(valiend.persianNumberConvertor("۱۳2۴")).toBe("۱۳۲۴");
});