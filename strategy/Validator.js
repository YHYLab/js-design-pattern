var msg = "";
var Validator = {
  
    types: {
        isAlphaNum: {
            validate: function (value) {
                msg = "It's not a alphanum.";
                return !/[^a-z0-9]/i.test(value);
            },
            instruction: msg
        },
        isNumber: {
            validate: function (value) {
                msg: "It's not a number."
                return !isNaN(value);
            },
            instruction: "It's not a number."
        }
    },

    messages: [],

    config: {
        id: "isAlphaNum",
        number: "isNumber"
    },

    validate: function (data) {
        var i, msg, type, checker, result_ok;

        this.messages = [];

        for ( i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue;
                }

                if (!checker) {
                    throw {
                        name: "ValidationError",
                        messages: type + " has no any type."
                    }
                }

                result_ok = checker.validate(data[i]);
                if ( !result_ok) {
                    msg = "[" + i + "]'s value is invalidate. " + checker.instruction;
                    this.messages.push(msg);
                }
            }

        }
        return this.hasErrors();
    },
    hasErrors: function () {
        if (this.messages.length !== 0) {
            return this.messages;
        } else {
            return false;
        }
    }
};

module.exports = Validator;