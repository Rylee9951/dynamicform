import {createStore} from 'redux'

import formReducer from 'reducers/form-reducer'

const store = createStore(formReducer)

export default store