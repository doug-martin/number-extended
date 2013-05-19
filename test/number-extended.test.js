"use strict";
var it = require('it'),
    assert = require('assert'),
    num = require("../");

it.describe("numberExtended", function (it) {

    it.describe(".round", function (it) {

        it.describe("as a monad", function (it) {

            it.should("round a number", function () {
                assert.equal(num(10.000009).round(2).value(), 10);
                assert.equal(num(10.000009).round(5).value(), 10.00001);
                assert.equal(num(10.0009).round(3).value(), 10.001);
                assert.equal(num(10.0009).round(2).value(), 10);
                assert.equal(num(10.0009).round(3).value(), 10.001);
                assert.equal(num(10.0009).round(2, 1).value(), 11);
            });
        });
        it.describe("as a function", function (it) {
            it.should("round a number", function () {
                assert.equal(num.round(10.000009, 2), 10);
                assert.equal(num.round(10.000009, 5), 10.00001);
                assert.equal(num.round(10.0009, 3), 10.001);
                assert.equal(num.round(10.0009, 2), 10);
                assert.equal(num.round(10.0009, 3), 10.001);
                assert.equal(num.round(10.0009, 2, 1), 11);
            });
        });
    });

    it.describe(".roundCeil", function (it) {

        it.describe("as a monad", function (it) {
            it.should("round a number up", function () {
                assert.equal(num(10.000001).roundCeil(2).value(), 10.01);
                assert.equal(num(10.000002).roundCeil(5).value(), 10.00001);
                assert.equal(num(10.0003).roundCeil(3).value(), 10.001);
                assert.equal(num(10.0004).roundCeil(2).value(), 10.01);
                assert.equal(num(10.0005).roundCeil(3).value(), 10.001);
                assert.equal(num(10.0002).roundCeil(2).value(), 10.01);
            });
        });
        it.describe("as a function", function (it) {
            it.should("round a number up", function () {
                assert.equal(num.roundCeil(10.000001, 2), 10.01);
                assert.equal(num.roundCeil(10.000002, 5), 10.00001);
                assert.equal(num.roundCeil(10.0003, 3), 10.001);
                assert.equal(num.roundCeil(10.0004, 2), 10.01);
                assert.equal(num.roundCeil(10.0005, 3), 10.001);
                assert.equal(num.roundCeil(10.0002, 2), 10.01);
            });

        });
    });


});