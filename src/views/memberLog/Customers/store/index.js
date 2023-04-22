import { combineReducers } from '@reduxjs/toolkit'
import state from './stateSlice'
import data from './dataSliceLog'

const reducer = combineReducers({
    state,
    data,
})

export default reducer
