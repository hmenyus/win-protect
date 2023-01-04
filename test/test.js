const win_protect = require("../");

it("tests", () => {
    const input = Buffer.from("hello");
    expect(win_protect.decrypt(win_protect.encrypt(input)).toString()).toEqual("hello");

    const password = Buffer.from("password123");
    expect(win_protect.decrypt(win_protect.encrypt(input, password), password).toString()).toEqual("hello");

    expect(() => win_protect.decrypt(win_protect.encrypt(input), password).toString()).toThrow("Cannot decrypt data");

    expect(() => win_protect.decrypt(win_protect.encrypt(input, password)).toString()).toThrow("Cannot decrypt data");
});
