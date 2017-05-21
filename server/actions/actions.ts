import { fromJS } from 'immutable'
import {
  SET_BUSES,
  DECREMENT_BIKE_RACK,
  INCREMENT_BIKE_RACK,
  DECREMENT_WHEELCHAIR,
  INCREMENT_WHEELCHAIR
} from './actionCreators'

const baseAction = type => payload => ({
  type: type,
  payload: fromJS(payload)
})

export const setBuses = baseAction(SET_BUSES)
export const decrementBikeRack = baseAction(DECREMENT_BIKE_RACK)
export const incrementBikeRack = baseAction(INCREMENT_BIKE_RACK)
export const decrementWheelChair = baseAction(DECREMENT_WHEELCHAIR)
export const incrementWheelChair = baseAction(INCREMENT_WHEELCHAIR)



