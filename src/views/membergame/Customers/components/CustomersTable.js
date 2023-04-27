import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { Avatar, Badge, Button, Dialog } from 'components/ui'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers, setTableData } from '../store/dataSliceAdmin'
import {
    setSelectedCustomer,
    setDrawerOpen,
} from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import CustomerAddDialog from './CustomerAddDialog'
import cloneDeep from 'lodash/cloneDeep'
import LogData from 'views/LogMember/Market/LogData'

import {
    HiCheck,
    HiMinusCircle,
    HiCurrencyDollar,
    HiCalendar
} from 'react-icons/hi'

const statusColor = {
    active: 'bg-emerald-500',
    blocked: 'bg-red-500',
}

const ActionColumn = (row) => {
    const { textTheme } = useThemeClass()
    const dispatch = useDispatch()
    const onEdit = () => {
        dispatch(setDrawerOpen())
        dispatch(setSelectedCustomer(row.rowLog))
    }

    return (
        <div className="ltr:text-right rtl:text-left">
            <Button size="sm" variant="solid" color="blue-600" onClick={() => onEdit()}>
                Edit
            </Button>
        </div>
    )
}

const ActionColumnLog = (row) => {
    const [viewOpen, setViewOpen] = useState(false)
    const [rowIdLog, setLogId] = useState();

    const onViewOpen = (rowId) => {
        setLogId(rowId.rowLog.id)
        setViewOpen(true)
    }

    const onDialogClose = () => {
        setViewOpen(false)
    }

    return (
        <>
        <div className="ltr:text-right rtl:text-left">
            <Button size="sm"  variant="solid" color="yellow-600" onClick={() => onViewOpen(row)}>
                Log
            </Button>
        </div>

        <Dialog
                isOpen={viewOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
            <div className="w-full">
                <h1>Log</h1>
                <LogData idLog = {rowIdLog} />
            </div>  
        </Dialog>
    </>
    )
}


const NameColumn = ({ row }) => {
    const { textTheme } = useThemeClass()

    return (
        <div className="flex items-center">
           { row.id}
        </div>
    )
}

const columns = [

    {
        header: 'ID',
        cell: (props) => {
            const row = props.row.original
            return <NameColumn row={row} />
        },
    },

    {
        header: 'NameAgent',
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {row.username_agent}
                    </span>
                </div>
            )
        },
    },

    {
        header: 'Name',
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                     <Avatar size={28} shape="circle" src={"/img/avatars/thumb-1.jpg"} />
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {row.name}
                    </span>
                </div>
            )
        },
    },
    
    {
        header: 'UserName',
        accessorKey: 'username',
    },

    {
        header: 'Balance',
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                <HiCurrencyDollar className="text-emerald-500 text-xl"/>
                <span className="ml-2 rtl:mr-2 capitalize">
                    {row.balance}
                </span>
            </div>
            )
        },
    },

    {
        header: 'Status',
        cell: (props) => {
            const row = props.row.original
            if (row.status === 'Y'){
                return (
                    <div className="flex items-center">
                        <HiCheck className="text-emerald-500 text-xl" />
                        <span className="ml-2 rtl:mr-2 capitalize">
                            {'Active'}
                        </span>
                    </div>
                )
            }
            else{
                return (
                    <div className="flex items-center">
                        <HiMinusCircle className={statusColor['blocked']} />
                        <span className="ml-2 rtl:mr-2 capitalize">
                            {'Blocked'}
                        </span>
                    </div>
                )
            
            }
        },
    },
    {
        header: 'Created_at',
        cell: (props) => {
            const row = props.row.original
            const inputDate = row.created_at;
            const date = new Date(inputDate);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.toLocaleTimeString()}`;
            return (
                <div className="flex items-center">
                    <HiCalendar className="text-emerald-500 text-xl"/>
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {formattedDate}
                    </span>
                </div>
            )
        },
    },

    {
        header: '',
        id: 'action',
        cell: (props) => {
            const row = props.row.original
            return <ActionColumn rowLog={row}/>
        },
    },

    {
        header: '',
        id: 'actionLog',
        cell: (props) => {
            const row = props.row.original
            return <ActionColumnLog rowLog={row}/>
        },
    },
]

const Customers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.crmCustomers.data.customerList)
    const loading = useSelector((state) => state.crmCustomers.data.loading)
    const filterData = useSelector(
        (state) => state.crmCustomers.data.filterData
    )

    const { pageIndex, pageSize, sort, query, total } = useSelector(
        (state) => state.crmCustomers.data.tableData
    )

    const fetchData = useCallback(() => {
        dispatch(getCustomers({ pageIndex, pageSize, sort, query, filterData }))
    }, [pageIndex, pageSize, sort, query, filterData, dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData, pageIndex, pageSize, sort, filterData])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total }),
        [pageIndex, pageSize, sort, query, total]
    )

    const onPaginationChange = (page) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }

    const onSort = (sort) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        dispatch(setTableData(newTableData))
    }

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ width: 28, height: 28 }}
                loading={loading}
                pagingData={{ pageIndex, pageSize, sort, query, total }}
                onPaginationChange={onPaginationChange}
                onSelectChange={onSelectChange}
                onSort={onSort}
            />
            <CustomerEditDialog />
            <CustomerAddDialog />
        </>
    )
}

export default Customers
