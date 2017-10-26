var Callback = require("../../callback/callback");


describe("test callback", function () {
    var spy,
        real_callback = function real_callback() {
            console.log("this is a callback.");
        };

    beforeEach(function() {
        spy = jasmine.createSpy("real_callback", real_callback);
    });
    
    it("excute callback", function () {
        Callback(17, spy);
        expect(spy).toHaveBeenCalled();
    });

    it("excute callback", function () {
        Callback(3, spy);
        expect(spy).not.toHaveBeenCalled();
    });
});