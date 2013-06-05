(function () {
    "use strict";

    function defineNumber(extended, is) {

        var mathPow = Math.pow, mathCeil = Math.ceil;

        function round(number, places, increment) {
            increment = increment || 1e-20;
            var factor = 10 / (10 * (increment || 10));
            return (mathCeil(factor * +number) / factor).toFixed(places) * 1; // Number
        }

        function roundCeil(number, places) {
            var powed = mathPow(10, places);
            return mathCeil(number * powed) / powed;
        }

        var number = {
            round: round,
            roundCeil: roundCeil
        };

        return extended.define(is.isNumber, number).expose(number);
    }

    if ("undefined" !== typeof exports) {
        if ("undefined" !== typeof module && module.exports) {
            module.exports = defineNumber(require("extended"), require("is-extended"));

        }
    } else if ("function" === typeof define && define.amd) {
        define(["extended", "is-extended", "array-extended", "arguments-extended"], function (extended, is) {
            return defineNumber(extended, is);
        });
    } else {
        this.numberExtended = defineNumber(this.extended, this.isExtended);
    }

}).call(this);






