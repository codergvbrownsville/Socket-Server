import { Action } from '../actions/Action'
import { Map } from 'immutable'

const updateRackIncrement = (bus: Map<any, any>): Map<any, any> =>
  bus.update(
    'bikeRacksCount', 
    rack => rack === bus.get('bikeRackMaxCount') 
      ? bus.get('bikeRackMaxCount') 
      : rack + 1
  )

const updateRackDecrement = (bus: Map<any, any>): Map<any, any> =>
  bus.update(
    'bikeRacksCount', 
    rack => rack === 0 
      ? bus.get('bikeRackMaxcount') 
      : rack - 1
  )

const increment = (state: Map<any, any>, action: Action) =>
  state.set('buses', state.get('buses')
    .merge(state.get('buses')
    .filter(buses => buses.get('busId') === action.payload.get('busId'))
    .map(updateRackIncrement)
  ))

const decrement = (state: Map<any, any>, action: Action) =>
  state.set('buses', state.get('buses')
    .merge(state.get('buses') 
    .filter(b => b.get('busId') === action.payload.get('busId'))
    .map(updateRackDecrement)
  ))

export const setBuses = (state: Map<any, any>, action: Action) =>
  state.set('buses', action.payload)

export const incBikeRack = increment
export const incWheelChair = increment
export const decBikeRack = decrement
export const decWheelChair = decrement