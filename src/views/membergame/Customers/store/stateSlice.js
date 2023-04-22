import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'crmCustomers/state',
    initialState: {
        drawerOpen: false,
        tradeDialogOpen: false,
        selectedCustomer: {},
    },
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },
        toggleTradeDialog: (state, action) => {
            state.tradeDialogOpen = action.payload
        },
        setSelectedRow: (state, action) => {
            state.selectedRow = action.payload
        },
    },
})
export const {
    setSelectedCustomer,
    setDrawerOpen,
    setDrawerClose,
    toggleTradeDialog,
    setSelectedRow,
} = stateSlice.actions

export default stateSlice.reducer;