const {isCreditCard} = require("../index");

test("isCreditCard => visa", () => {
    expect(isCreditCard("4539405881952413",{creditCardType : ['visa']})).toBe(true);
});

test("isCreditCard => visa", () => {
    expect(isCreditCard("5584741041242142", { creditCardType: ["visa"] })).toBe(false);
});

test("isCreditCard => visa or master-card", () => {
    expect(isCreditCard("5584741041242142", { creditCardType: ["visa","master-card"] })).toBe(true);
});

test("isCreditCard => all", () => {
    expect(isCreditCard("5584741041242142")).toBe(true);
});

test("isCreditCard => all", () => {
    expect(isCreditCard("sfsvfd")).toBe(false);
});

test("isCreditCard => american express", () => {
    expect(isCreditCard("371252082166578",{creditCardType : ['american-express']})).toBe(true);
});