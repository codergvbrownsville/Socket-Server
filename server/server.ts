import * as Server  from 'socket.io'
import * as R from 'ramda'
import * as L from 'ramda-lens'
import { fromJS } from 'immutable'

const payload = R.lensProp('payload')
const transformPayload = L.over(payload, fromJS)

const onConnect = store => socket => {
  const dispatch = store.dispatch.bind(store)
  socket.emit('state', store.getState().buses.toJS())
  socket.on('action', R.compose(dispatch, transformPayload))
}

const emitState = R.curry((io, store, _) =>
  io.emit('state', store.getState().toJS())
)

export const startServer = (store, app) => {
  const io = Server(app)
  store.subscribe(emitState(io, store))
  io.on('connect', onConnect(store))
}
