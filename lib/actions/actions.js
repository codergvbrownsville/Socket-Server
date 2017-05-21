"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const actionCreators_1 = require("./actionCreators");
const baseAction = type => payload => ({
    type: type,
    payload: immutable_1.fromJS(payload)
});
exports.setBuses = baseAction(actionCreators_1.SET_BUSES);
exports.decrementBikeRack = baseAction(actionCreators_1.DECREMENT_BIKE_RACK);
exports.incrementBikeRack = baseAction(actionCreators_1.INCREMENT_BIKE_RACK);
exports.decrementWheelChair = baseAction(actionCreators_1.DECREMENT_WHEELCHAIR);
exports.incrementWheelChair = baseAction(actionCreators_1.INCREMENT_WHEELCHAIR);
