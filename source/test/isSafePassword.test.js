const valiend = require("../index");

test("isSafePassword => 'aadfdf' :: false", () => {
    expect(valiend.isSafePassword("aadfdf")).toBe(false);
});

test("isSafePassword => '78788989sdsdf' :: false", () => {
    expect(valiend.isSafePassword("78788989sdsdf")).toBe(false);
});

test("isSafePassword => 'A5h#3232' :: true", () => {
    expect(valiend.isSafePassword("A5h#3232")).toBe(true);
});

test("isSafePassword => 'SA23sa#$' :: true", () => {
    expect(valiend.isSafePassword("SA23sa#$")).toBe(true);
});

test("isSafePassword => 'SA23sa#$' :: true", () => {
    expect(valiend.isSafePassword("SA23sa#$",{strictMode : true})).toBe(true);
});

test("isSafePassword => 'A5h#3232' :: false", () => {
    expect(valiend.isSafePassword("A5h#3232",{strictMode : true})).toBe(false);
});
