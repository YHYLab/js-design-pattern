var CarMaker = function () {};

CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + " doors.";
};

CarMaker.factory = function (type) {
    var new_car;

    if (typeof CarMaker[type] !== "function") {
        throw {
            name: "No Car Type Error",
            message: type + " desn't exist."
        }
    }

    if (typeof CarMaker[type].prototype.drive !== "function") {
        CarMaker[type].prototype = new CarMaker();
    }

    new_car = new CarMaker[type]();

    return new_car;
};

CarMaker.Compact = function () {
    this.doors = 4;
};

CarMaker.Convertible = function () {
    this.doors = 2;
};

CarMaker.SUV = function () {
    this.doors = 5;
};

module.exports = CarMaker;