"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const actionCreators_1 = require("../actions/actionCreators");
const core_1 = require("./core");
const initialState = immutable_1.fromJS({
    buses: [{
            busName: undefined,
            busId: undefined,
            bikeRacks: undefined,
            wheelChair: undefined
        }]
});
exports.buses = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators_1.INITIAL:
            return state;
        case actionCreators_1.SET_BUSES:
            return core_1.setBuses(state, action);
        case actionCreators_1.INCREMENT_BIKE_RACK:
            return core_1.incBikeRack(state, action);
        case actionCreators_1.DECREMENT_BIKE_RACK:
            return core_1.decBikeRack(state, action);
        case actionCreators_1.INCREMENT_WHEELCHAIR:
            return core_1.incWheelChair(state, action);
        case actionCreators_1.DECREMENT_WHEELCHAIR:
            return core_1.decWheelChair(state, action);
        default:
            return state;
    }
};
