import { combineReducers } from 'redux'
import * as R from 'ramda'
import { buses } from './buses'

export const rootReducer = combineReducers({
  buses
})

