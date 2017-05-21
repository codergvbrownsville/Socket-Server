import 'rxjs/add/operator/map'
import { setBuses } from '../actions/actions'
import { INITIAL } from '../actions/actionCreators'

export const busEpic = action$ =>
  action$.ofType(INITIAL)
    .map(setBuses)
