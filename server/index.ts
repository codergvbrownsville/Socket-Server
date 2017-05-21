import { makeStore } from './store'
import { startServer } from './server'
import { setBuses } from './actions/actions'
import { SET_BUSES } from './actions/actionCreators'
const stub = require('../stub/driver.json')

const store = makeStore()
startServer(store)

store.dispatch(setBuses(stub))
