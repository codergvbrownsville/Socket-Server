"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateRackIncrement = (bus) => bus.update('bikeRacksCount', rack => rack === bus.get('bikeRackMaxCount')
    ? bus.get('bikeRackMaxCount')
    : rack + 1);
const updateRackDecrement = (bus) => bus.update('bikeRacksCount', rack => rack === 0
    ? bus.get('bikeRackMaxcount')
    : rack - 1);
const increment = (state, action) => state.set('buses', state.get('buses')
    .merge(state.get('buses')
    .filter(buses => buses.get('busId') === action.payload.get('busId'))
    .map(updateRackIncrement)));
const decrement = (state, action) => state.set('buses', state.get('buses')
    .merge(state.get('buses')
    .filter(b => b.get('busId') === action.payload.get('busId'))
    .map(updateRackDecrement)));
exports.setBuses = (state, action) => state.set('buses', action.payload);
exports.incBikeRack = increment;
exports.incWheelChair = increment;
exports.decBikeRack = decrement;
exports.decWheelChair = decrement;
