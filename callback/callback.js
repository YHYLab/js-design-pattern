var Callback = function (age, callback) {
    if ( age > 10 ) {
        callback();
    }
};

module.exports = Callback;