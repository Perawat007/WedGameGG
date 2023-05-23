import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apAddMember,
    apiGetCrmCustomersStatistic,
    apPutMember,
    apiGetSubAgent,
    apPutDeleteMember
} from 'services/CrmService'

export const getCustomerStatistic = createAsyncThunk(
    'crmSubAgent/data/getCustomerStatistic',
    async () => {
        const response = await apiGetCrmCustomersStatistic()
        return response.data
    }
)

export const getCustomers = createAsyncThunk(
    'crmSubAgent/data/getCustomers',
    async (params) => {
        const response = await apiGetSubAgent(params)
        return response
    }
)

export const putCustomer = createAsyncThunk(
    'crmSubAgent/data/putCustomer',
    async (data) => {
        const response = await apPutMember(data)
        return response.data
    }
)

export const AddCustomer = createAsyncThunk(
    'crmSubAgent/data/AddCustomer',
    async (data) => {
        const response = await apAddMember(data)
        if (response.message === "Data Creates False"){  
            alert("UserName นี้มีอยู่แล้ว กรุณาเปลี่ยน Username");
        }
        else{
            window.location.reload();
        }
    }
)

export const DeleteMemBer = createAsyncThunk(
    'crmSubAgent/data/DeleteAgent',
    async (data) => {
        const response = await apPutDeleteMember(data, 'member')
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
    idUser:0
}

export const initialFilterData = {
    status: '',
}


const dataSlice = createSlice({
    name: 'crmSubAgent/data',
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
