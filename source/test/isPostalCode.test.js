const valiend = require("../index");

test("isPostalcode => '12345-12345' :: false", () => {
    expect(valiend.isPostalCode("12345-12345", {regions : ["fa-IR"]})).toBe(true);
});
