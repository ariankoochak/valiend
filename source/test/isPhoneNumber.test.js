const valiend = require("../index");

test("isPhoneNumber => '09121234567' :: false", () => {
    expect(valiend.isPhoneNumber("09121234567")).toBe(true);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567")).toBe(true);
});

//old test
test("isPhoneNumber => '9121234567' & option = {ignoreCountryCode : true} :: true", () => {
    expect(valiend.isPhoneNumber("9121234567",{ignoreCountryCode : true})).toBe(true);
});

// old test
test("isPhoneNumber => '09121234567' & option = {ignoreCountryCode : true} :: true", () => {
    expect(
        valiend.isPhoneNumber("09121234567", { ignoreCountryCode: true })
    ).toBe(true);
});

test("isPhoneNumber => '9121234567' :: false", () => {
    expect(valiend.isPhoneNumber("9121234567")).toBe(true);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567")).toBe(true);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567",{regions : ['fa-IR']})).toBe(true);
});

test("isPhoneNumber => '+989121234567' :: true", () => {
    expect(valiend.isPhoneNumber("+989121234567", { regions: ["en-US"] })).toBe(false);
});

test("isPhoneNumber => '09121234567' :: true", () => {
    expect(valiend.isPhoneNumber("09121234567", { regions: ["en-US","fa-IR"] })).toBe(true);
});

test("isPhoneNumber => '09121234567' :: true", () => {
    expect(valiend.isPhoneNumber("09121234567", { regions: ["foobar", "fa-IR"] })).toBe(true);
});
