var observers = [];
var Subject = {

    add_observer: function (observer) {
        if (observers.indexOf(observer) === -1) {
            observers.push(observer);
        }
        return observers;
    },

    notify_weather: function (wather, type) {
        var i = 0,
            i_len = observers.length,
            result = [];
        for(; i < i_len; i++) {
            result.push(observers[i].fn(wather, type));
        }
        return result;
    },

    get_observers: function () {
        return observers;
    },

    clear_observers: function () {
        observers = [];
        return observers;
    },

    remove_observer: function (observer) {
        var index = observers.indexOf(observer);
        if (index >= 0) {
            observers.splice(index, 1);
        }
        return observers;
    }
};

module.exports = Subject;