const valiend = require("../index");

test("isUsername => 'ariankoochak' :: true", () => {
    expect(valiend.isUsername("ariankoochak")).toBe(true);
});

test("isUsername => 'aeromche' :: true", () => {
    expect(valiend.isUsername("aeromche")).toBe(true);
});

test("isUsername => '_.arinkoochak._' :: true", () => {
    expect(valiend.isUsername("_.arinkoochak._",{validChars : ['@','_','$','#','.']})).toBe(true);
});

test("isUsername => '_.arinkoochak._' :: true", () => {
    expect(valiend.isUsername("_.arinkoochak._")).toBe(true);
});

test("isUsername => 'arian.koochak123' :: true", () => {
    expect(valiend.isUsername("arian.koochak123",{validChars : ['@','_','$','#','.']})).toBe(true);
});

test("isUsername => 'arian.koochak123' :: true", () => {
    expect(valiend.isUsername("arian.koochak123")).toBe(true);
});

test("isUsername => '@eromche' :: true", () => {
    expect(valiend.isUsername("@eromche",{validChars : ['@','_','$','#','.']})).toBe(true);
});

test("isUsername => '@eromche$_' :: true", () => {
    expect(valiend.isUsername("@eromche$_",{validChars : ['@','_','$','#','.']})).toBe(true);
});

test("isUsername => '@eromche' :: false", () => {
    expect(valiend.isUsername("@eromche")).toBe(false);
});

test("isUsername => '@eromche$_' :: false", () => {
    expect(valiend.isUsername("@eromche$_")).toBe(false);
});