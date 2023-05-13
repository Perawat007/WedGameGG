import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCrmMember } from 'services/CrmService'

export const getCrmDashboardData = createAsyncThunk(
    'crmDashboard/data/getCrmDashboardData',
    async (params) => {
        const response = await apiGetCrmMember(params)
        return response
    }
)

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData = {
    status: '',
}

const dataSlice = createSlice({
    name: 'crmDashboard/data',
    initialState: {
        loading: false,
        customerList: [],
        dashboardData: {},
        tableData: initialTableData,
        filterData: initialFilterData,
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setCustomerList: (state, action) => {
            state.customerList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getCrmDashboardData.fulfilled]: (state, action) => {
            state.customerList = action.payload.data //ใช้ Search ข้อมูล
            state.dashboardData = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCrmDashboardData.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setTableData, setCustomerList, setFilterData } =
    dataSlice.actions

export default dataSlice.reducer
