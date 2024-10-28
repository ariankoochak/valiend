const valiend = require("../index");

test("isPostalCode => '12345-12345' :: false", () => {
    expect(valiend.isPostalCode("12345-12345",["fa-IR"])).toBe(true);
});
