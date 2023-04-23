import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apAddAgent,
    apiGetCrmCustomersStatistic,
    apPutAgent,
    apiGetLogMember,
    apPutDeleteAgent
} from 'services/CrmService'

export const getCustomerStatistic = createAsyncThunk(
    'logTest/data/getCustomerStatistic',
    async () => {
        const response = await apiGetCrmCustomersStatistic()
        return response.data
    }
)

export const getCustomersLog = createAsyncThunk(
    'logTest/data/getCustomersLog',
    async (params) => {
        const response = await apiGetLogMember(params)
        return response
        
    }
)

export const putCustomer = createAsyncThunk(
    'logTest/data/putCustomer',
    async (data) => {
        const response = await apPutAgent(data)
        return response.data
    }
)

export const AddCustomer = createAsyncThunk(
    'logTest/data/AddCustomer',
    async (data) => {
        const response = await apAddAgent(data)
        return response.data
    }
)

export const DeleteAgent = createAsyncThunk(
    'logTest/data/DeleteAgent',
    async (data) => {
        const response = await apPutDeleteAgent(data)
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
    name: 'logTest/data',
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
        [getCustomersLog.fulfilled]: (state, action) => {
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCustomersLog.pending]: (state) => {
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
