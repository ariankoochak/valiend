const valiend = require("../index");

test("isPhoneNumber => '09121234567' :: false", () => {
    expect(valiend.isPhoneNumber("09121234567")).toBe(false);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567")).toBe(true);
});

test("isPhoneNumber => '9121234567' & option = {ignoreCountryCode : true} :: true", () => {
    expect(valiend.isPhoneNumber("9121234567",{ignoreCountryCode : true})).toBe(true);
});

test("isPhoneNumber => '09121234567' & option = {ignoreCountryCode : true} :: true", () => {
    expect(
        valiend.isPhoneNumber("09121234567", { ignoreCountryCode: true })
    ).toBe(true);
});

test("isPhoneNumber => '9121234567' :: false", () => {
    expect(valiend.isPhoneNumber("9121234567")).toBe(false);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567")).toBe(true);
});
