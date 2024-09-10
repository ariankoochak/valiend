const valiend = require("../index");

test("separateEmail => 'arian.koochak@gmail.com'", () => {
    expect(valiend.separateEmail("arian.koochak@gmail.com")).toEqual({
        emailUsername: "arian.koochak",
        emailSymbol: "@",
        emailMailServer: "gmail",
        emailMailServerUrl: "gmail.com",
        emailDomain: ".com",
    });
});

test("separateEmail => 'arian.koochak.com'", () => {
    expect(valiend.separateEmail("arian.koochak.com")).toEqual({});
});
