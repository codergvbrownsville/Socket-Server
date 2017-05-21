"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const busEpic_1 = require("./busEpic");
exports.rootEpic = redux_observable_1.combineEpics(busEpic_1.busEpic);
