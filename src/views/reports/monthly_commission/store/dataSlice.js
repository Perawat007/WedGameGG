import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCustomer, getCommissionMonthly } from 'services/CrmService'

export const getCryptoDashboardData = createAsyncThunk(
    'cryptoDashboard/data/getCryptoDashboardData',
    async () => {
        const response = await getCommissionMonthly()
        return response
    }
)

const dataSlice = createSlice({
    name: 'cryptoDashboard/data',
    initialState: {
        loadingAll: true,
        dashboardData: {},
    },
    reducers: {},
    extraReducers: {
        [getCryptoDashboardData.fulfilled]: (state, action) => {
            state.loadingAll = false
            state.dashboardData = action.payload
        },
        [getCryptoDashboardData.pending]: (state) => {
            state.loadingAll = true
        },
    },
})

export default dataSlice.reducer