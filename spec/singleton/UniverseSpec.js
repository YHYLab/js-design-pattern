var Universe = require('../../singleton/Universe');

describe("Singleton Test", function(){
    var universe_1 = new Universe();
    var universe_2 = new Universe();

    it("properties are equal.", function () {
        expect(universe_1.name).toEqual(universe_2.name);
        expect(universe_1.start_time).toEqual(universe_2.start_time);
    });

    it("instances are equal.", function () {
        expect(universe_1).toEqual(universe_2);
    });
});
