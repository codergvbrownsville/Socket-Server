import { makeStore } from './store'
import { startServer } from './server'
import { setBuses } from './actions/actions'
import { SET_BUSES } from './actions/actionCreators'
const stub = require('../stub/driver.json')
const app = require('http').createServer(handler)

const PORT = process.env.PORT || 8090;
app.listen(PORT)

function handler (req, res) {
    res.writeHead(200);
  };



const store = makeStore()
startServer(store, app)

store.dispatch(setBuses(stub))
