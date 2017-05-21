import { List } from 'immutable'

export interface Bus {
  busName: string
  busId: number
  bikeRacks: number
  wheelChair : number
}

export interface State<T> {
  buses: List<Bus>
}