var Universe;
(function () {

    var instance;

    Universe = function Universe() {
        if (instance) {
            return instance;
        }

        instance = this;

        this.name = "Jack";
        this.start_time = 0;
    };
})();

module.exports = Universe;