var Validator = require("../../strategy/Validator");

describe("Test a validator.", function () {
    it("expect wrong number", function () {
        var data = {
            number: "jack"
        };

        var result = Validator.validate(data);
        expect(result.length).toEqual(1);
    });

    it("expect wrong id", function () {
        var data = {
            number: "jack#"
        };

        var result = Validator.validate(data);
        expect(result.length).toEqual(1);
    });
});