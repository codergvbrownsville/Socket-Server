"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server = require("socket.io");
const R = require("ramda");
const L = require("ramda-lens");
const immutable_1 = require("immutable");
const PORT = process.env.PORT || 8090;
const payload = R.lensProp('payload');
const transformPayload = L.over(payload, immutable_1.fromJS);
const onConnect = store => socket => {
    const dispatch = store.dispatch.bind(store);
    socket.emit('state', store.getState().buses.toJS());
    socket.on('action', R.compose(dispatch, transformPayload));
};
const emitState = R.curry((io, store, _) => io.emit('state', store.getState().toJS()));
exports.startServer = store => {
    const io = Server().attach(PORT);
    store.subscribe(emitState(io, store));
    io.on('connect', onConnect(store));
};
