import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer } from './reducers/index'
import { rootEpic } from './epics/index'

const epicMiddleware = createEpicMiddleware(rootEpic)

export const makeStore = () =>
  createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )
