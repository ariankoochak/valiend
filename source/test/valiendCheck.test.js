const valiend = require("../index");

test("valiendCheck", () => {
    inputs = {
        username : 'ariankoc',
        password : 'aeromch@e3',
        email : 'arian.koochak@protonmail.com',
    }
    const schema = valiend.schemaMaker({
        usernameSchema : {
            validChars : ['_']
        },
        passwordSchema : {
            minPasswordScore : 25,
        }
    })
    expect(valiend.valiendCheck(inputs,schema)).toEqual({
        result : true,
        errors : [],
    });
});

test("valiendCheck", () => {
    inputs = {
        username: "ariankoc",
        password: "aeromch@e3",
        email: "arian.koochak@protonmail.com",
    };
    const schema = valiend.schemaMaker({
        usernameSchema: {
            validChars: ["_"],
        },
        passwordSchema: {
            safePassword : true,
        },
    });
    expect(valiend.valiendCheck(inputs, schema)).toEqual({
        result: false,
        errors: [
            {password : "password is not safe"}
        ],
    });
});

test("valiendCheck", () => {
    inputs = {
        username: "@riankoc",
        password: "aeromch@e3",
        email: "arian.koochak@protonmail.com",
    };
    const schema = valiend.schemaMaker({
        usernameSchema: {
            validChars: ["_"],
        },
        passwordSchema: {
            safePassword: true,
        },
    });
    expect(valiend.valiendCheck(inputs, schema)).toEqual({
        result: false,
        errors: [{username : "username not valid"},{ password: "password is not safe" }],
    });
});

test("valiendCheck", () => {
    inputs = {};
    const schema = valiend.schemaMaker({
        usernameSchema: {
            validChars: ["_"],
        },
        passwordSchema: {
            safePassword: true,
        },
    });
    expect(valiend.valiendCheck(inputs, schema)).toEqual({
        result: false,
        errors: [],
    });
});