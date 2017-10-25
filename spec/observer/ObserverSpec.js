var Subject = require("../../observer/observer");

var seoul = {
    fn : function (wather, type) {
        if (type === "seoul") {
            console.log("Seoul FM 182.notify Seoul weather. " + wather);
        } else {
            console.log("Seoul FM 182. notify Korea weather. " + wather);
        }
    }
};

var incheon = {
    fn : function (wather, type) {
        if (type === "incheon") {
            console.log("Inchen FM 120. notify Incheon weather. " + wather);
        } else {
            console.log("Inchen FM 120. notify Korea weather. " + wather);
        }
    }
};

describe("Observer Test", function() {
    it("add Seoul observer", function () {
        Subject.add_observer(seoul);
        var observers = Subject.get_observers();
        expect(observers.length).toEqual(1);
    });

    it("weather of Seoul", function () {
        var alam_count = Subject.notify_weather("30m/s wind.", "seoul");
        expect(alam_count.length).toEqual(1);
    });

    it("add Incheon observer", function () {
        Subject.add_observer(incheon);
        var observers = Subject.get_observers();
        expect(observers.length).toEqual(2);
    });
    
    it("notify Incheon weather", function () {
       var alam_count = Subject.notify_weather("50m/s wind.", "incheon");
       expect(alam_count.length).toEqual(2);
    });

    it("remove Seoul observer", function () {
        Subject.remove_observer(seoul);
        var observers = Subject.get_observers();
        expect(observers.length).toEqual(1);
    });

    it("Notice Jejue weather", function () {
        var alam_count = Subject.notify_weather("It is typhoon in Jejue.", "all");
        expect(alam_count.length).toEqual(1);
    });

    it("clean observer", function () {
        Subject.clear_observers();
        var alam_count = Subject.notify_weather("It is typhoon in Jejue.", "all");
        expect(alam_count.length).toEqual(0);
    });
});