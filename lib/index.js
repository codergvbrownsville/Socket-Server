"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const server_1 = require("./server");
const actions_1 = require("./actions/actions");
const stub = require('../stub/driver.json');
const store = store_1.makeStore();
server_1.startServer(store);
store.dispatch(actions_1.setBuses(stub));
