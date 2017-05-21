import { fromJS, List } from 'immutable'
import { Action } from '../actions/Action'
import { State } from './State'
import {
  INITIAL,
  SET_BUSES,
  INCREMENT_BIKE_RACK,
  DECREMENT_BIKE_RACK,
  INCREMENT_WHEELCHAIR,
  DECREMENT_WHEELCHAIR
} from '../actions/actionCreators'
import {
  setBuses, incBikeRack,
  decBikeRack, incWheelChair,
  decWheelChair
} from './core'

const initialState = fromJS({
  buses: [{
    busName: undefined,
    busId: undefined,
    bikeRacks: undefined,
    wheelChair: undefined
  }]
})

export const buses = (state = initialState, action: Action) => {
  switch (action.type) {
    case INITIAL:
      return state

    case SET_BUSES:
      return setBuses(state, action)

    case INCREMENT_BIKE_RACK:
      return incBikeRack(state, action)

    case DECREMENT_BIKE_RACK:
      return decBikeRack(state, action)

    case INCREMENT_WHEELCHAIR:
      return incWheelChair(state, action)

    case DECREMENT_WHEELCHAIR:
      return decWheelChair(state, action)

    default:
      return state
  }
}
