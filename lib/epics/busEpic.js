"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
const actions_1 = require("../actions/actions");
const actionCreators_1 = require("../actions/actionCreators");
exports.busEpic = action$ => action$.ofType(actionCreators_1.INITIAL)
    .map(actions_1.setBuses);
