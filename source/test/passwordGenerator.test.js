const valiend = require("../index");

test("passwordGenerator()", () => {
    expect(valiend.passwordGenerator().length).toBe(valiend.passwordGenerator().length);
});

test("passwordGenerator(12)", () => {
    expect(valiend.passwordGenerator(12).length).toBe(
        valiend.passwordGenerator(12).length
    );
});
