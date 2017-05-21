"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_observable_1 = require("redux-observable");
const index_1 = require("./reducers/index");
const index_2 = require("./epics/index");
const epicMiddleware = redux_observable_1.createEpicMiddleware(index_2.rootEpic);
exports.makeStore = () => redux_1.createStore(index_1.rootReducer, redux_1.applyMiddleware(epicMiddleware));
