const valiend = require("../index");

test("opt code test", () => {
    const test = ()=>{
        const randomCode = valiend.getOtpCode();
        if(randomCode.length === 5 && isNaN(Number(randomCode)) === false){
            return true
        }
        return false
    }
    expect(test()).toBe(true);
});

test("opt code test", () => {
    const test = () => {
        const randomCode = valiend.getOtpCode({otpLength : 7})
        if (randomCode.length === 7 && isNaN(Number(randomCode)) === false) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});