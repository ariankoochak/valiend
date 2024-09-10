const valiend = require("../index");

test("passwordQuality => 'aadfdf' :: 0", () => {
    expect(valiend.passwordQuality("aadfdf")).toBe(0);
});

test("passwordQuality => '78788989sdsdf' :: 50", () => {
    expect(valiend.passwordQuality("78788989sdsdf")).toBe(50);
});

test("passwordQuality => 'A5h#3232' :: 100", () => {
    expect(valiend.passwordQuality("A5h#3232")).toBe(100);
});
