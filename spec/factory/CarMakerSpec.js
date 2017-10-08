var CarMaker = require("../../factory/CarMaker");

describe("Test a factory pattern.", function () {

    it("Make a compact car.", function () {
        var compact = CarMaker.factory('Compact');
        expect(compact.drive()).toEqual("Vroom, I have 4 doors.");
    });

    it("Make a convertible car.", function () {
        var convertible = CarMaker.factory('Convertible');
        expect(convertible.drive()).toEqual("Vroom, I have 2 doors.");
    });

    it("Make a SUV car.", function () {
        var suv = CarMaker.factory('SUV');
        expect(suv.drive()).toEqual("Vroom, I have 5 doors.");
    });
});