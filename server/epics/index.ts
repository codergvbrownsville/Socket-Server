import { combineEpics } from 'redux-observable'
import { busEpic } from './busEpic'

export const rootEpic = combineEpics(
  busEpic
)
