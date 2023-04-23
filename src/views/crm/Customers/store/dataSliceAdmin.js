import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apPutAdmin,
    apiGetCrmCustomersStatistic,
    AddAdmin,
    apiGetCrmAdmin,
    apPutDeleteAdmin,
} from 'services/CrmService'

export const getCustomerStatistic = createAsyncThunk(
    'crmCustomers/data/getCustomerStatistic',
    async () => {
        const response = await apiGetCrmCustomersStatistic()
        return response.data
    }
)

export const getCustomers = createAsyncThunk(
    'crmCustomers/data/getCustomers',
    async (params) => {
        const response = await apiGetCrmAdmin(params)
        return response
        
    }
)

export const putCustomer = createAsyncThunk(
    'crmCustomers/data/putCustomer',
    async (data) => {
        const response = await apPutAdmin(data)
        return response.data
    }
)

export const AddCustomer = createAsyncThunk(
    'crmCustomers/data/AddCrmCustomer',
    async (data) => {
        const response = await AddAdmin(data)
        return response.data
    }
)

export const DeleteAdmin = createAsyncThunk(
    'crmCustomers/data/DeleteAdmin',
    async (data) => {
        const response = await apPutDeleteAdmin(data, 'admin')
        return response.data
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
    name: 'crmCustomers/data',
    initialState: {
        loading: false,
        customerList: [],
        statisticData: {},
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
        [getCustomers.fulfilled]: (state, action) => {
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCustomers.pending]: (state) => {
            state.loading = true
        },
        [getCustomerStatistic.pending]: (state) => {
            state.statisticLoading = true
        },
        [getCustomerStatistic.fulfilled]: (state, action) => {
            state.statisticData = action.payload
            state.statisticLoading = false
        },
    },
})

export const { setTableData, setCustomerList, setFilterData } =
    dataSlice.actions

export default dataSlice.reducer
