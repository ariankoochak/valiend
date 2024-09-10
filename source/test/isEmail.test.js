const valiend = require("../index");

test("isEmail => 'aeromche@gmail.com' :: true", () => {
    expect(valiend.isEmail("aeromche@gmail.com")).toBe(true);
});

test("isEmail => 'arian.koochak@gmail.com' :: true", () => {
    expect(valiend.isEmail("arian.koochak@gmail.com")).toBe(true);
});

test("isEmail => 'arian.koochak@gmail.com.com' :: true", () => {
    expect(valiend.isEmail("arian.koochak@gmail.com.com")).toBe(true);
});

test("isEmail => 'aeromchegmail.com' :: false", () => {
    expect(valiend.isEmail("aeromchegmail.com")).toBe(false);
});

test("isEmail => 'aeromche@gmailcom' :: false", () => {
    expect(valiend.isEmail("aeromchegmail.com")).toBe(false);
});

test("isEmail => 'aeromche@gmailcom' :: false", () => {
    expect(valiend.isEmail("aeromche@gmail")).toBe(false);
});