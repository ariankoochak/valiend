const valiend = require("../index");

test("isVAT => 'DE494050532' :: false", () => {
    expect(valiend.isVAT("DE494050532", ["de-DE"])).toBe(true);
});

test("isVAT => 'AL494050532' :: false", () => {
    expect(valiend.isVAT("AL494050532", ['de-DE'])).toBe(false);
});
