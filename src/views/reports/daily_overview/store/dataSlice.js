import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getCustomer} from 'services/CrmService'

export const getCryptoDashboardData = createAsyncThunk(
    'cryptoDashboard/data/getCryptoDashboardData',
    async (data) => {
        const response = await getCustomer(data)
        return response
    }
)

const dataSlice = createSlice({
    name: 'cryptoDashboard/data',
    initialState: {
        loading: true,
        dashboardData: {},
    },
    reducers: {},
    extraReducers: {
        [getCryptoDashboardData.fulfilled]: (state, action) => {
            state.loading = false
            state.dashboardData = action.payload
        },
        [getCryptoDashboardData.pending]: (state) => {
            state.loading = true
        },
    },
})

export default dataSlice.reducer
