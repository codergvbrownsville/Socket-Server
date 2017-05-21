"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const buses_1 = require("./buses");
exports.rootReducer = redux_1.combineReducers({
    buses: buses_1.buses
});
