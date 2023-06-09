import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { Avatar, Badge, Button, Dialog } from 'components/ui'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers, setTableData } from '../store/dataSliceSubAgent'
import {
    setSelectedCustomer,
    setDrawerOpen,
} from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import cloneDeep from 'lodash/cloneDeep'
import { useNavigate, useLocation } from 'react-router-dom'
import LogData from 'views/LogMember/Market/LogData'
import LogEditData from 'views/LogEditUser/Market/LogEditData'
import { FiPercent } from "react-icons/fi";
import {
    HiCheck,
    HiMinusCircle,
    HiCurrencyDollar,
    HiCalendar,
    HiPencil,
    HiOutlineDocumentText,
    HiOutlineUserGroup
} from 'react-icons/hi'
import { RiFileHistoryFill } from "react-icons/ri";
const statusColor = {
    active: 'bg-emerald-500',
    blocked: 'bg-red-500',
}

const ActionColumn = ({ row }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const onEdit = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        navigate(`/editAgentSub/${pathSegments[2]}/${row.name}/${row.id}`)
        dispatch(setSelectedCustomer(row))
    }

    const onmemberSubAgent = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');

        navigate(`/memberSub/${pathSegments[2]}/${row.name}/${row.id_agent}/${row.id}`)
    }

    const onEditPercent = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        navigate(`/editPercentSutAgent/${pathSegments[2]}/${row.name}/${row.id_agent}/${row.id}`)
    }

    const [viewOpen, setViewOpen] = useState(false)
    const [rowIdLog, setLogId] = useState();

    const onViewOpen = (rowId) => {
        setLogId(rowId.id)
        setViewOpen(true)
    }

    const onDialogClose = () => {
        setViewOpen(false)
    }

    const [viewLogOpen, setViewLogOpen] = useState(false)
    const [rowLogIdLog, setSeeLogId] = useState();

    const onViewOpenLog = (rowId) => {
        setSeeLogId(rowId.id)
        setViewLogOpen(true)
    }

    const onDialogLogClose = () => {
        setViewLogOpen(false)
    }

    return (
        <div className="ltr:text-right rtl:text-left">
            <div>
                <Button variant="solid" color="green-600" icon={<HiOutlineUserGroup />} onClick={() => onmemberSubAgent()} />
                <Button variant="solid" color="blue-600" icon={<HiPencil />} onClick={() => onEdit()} />
                <Button variant="solid" color="red-600" icon={<FiPercent />} onClick={() => onEditPercent()} />
                <Button variant="solid" color="yellow-600" icon={<HiOutlineDocumentText />} onClick={() => onViewOpen(row)} />
            </div>

            <Dialog
                isOpen={viewOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className="w-full">
                    <h1>Log Edit</h1>
                    <LogEditData idLog={rowIdLog} typeLog={'member'} />
                </div>
            </Dialog>

            <Dialog
                isOpen={viewLogOpen}
                onClose={onDialogLogClose}
                onRequestClose={onDialogLogClose}
                bodyClass="p-0"
            >
                <div className="w-full">
                    <div className="flex flex-col h-full justify-between">
                        <div className="overflow-y-auto">
                            <h1>Log</h1>
                            <LogData idLog={rowLogIdLog} />
                        </div>
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

const NameColumn = ({ row }) => {
    const { textTheme } = useThemeClass()

    return (
        <div className="flex items-center">
            {row.id}
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
        header: 'IDAgent',
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {row.id_agent}
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
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {row.username}
                    </span>
                </div>
            )
        },
    },

    {
        header: 'Credit',
        cell: (props) => {
            const row = props.row.original
            return (
                <div className="flex items-center">
                    <HiCurrencyDollar className="text-emerald-500 text-xl" />
                    <span className="ml-2 rtl:mr-2 capitalize">
                        {row.creditsub}
                    </span>
                </div>
            )
        },
    },

    {
        header: 'Status',
        cell: (props) => {
            const row = props.row.original
            if (row.status === 'Y') {
                return (
                    <div className="flex items-center">
                        <HiCheck className="text-emerald-500 text-xl" />
                        <span className="ml-2 rtl:mr-2 capitalize">
                            {'Active'}
                        </span>
                    </div>
                )
            }
            else {
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
                    <HiCalendar className="text-emerald-500 text-xl" />
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
        cell: (props) => <ActionColumn row={props.row.original} />,
    },

    /* {
         header: '',
         id: 'actionLog',
         cell: (props) => {
             const row = props.row.original
             return <ActionColumnLog rowLog={row}/>
         },
     },*/
]

const Customers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.crmSubAgent.data.customerList)
    const loading = useSelector((state) => state.crmSubAgent.data.loading)
    const filterData = useSelector(
        (state) => state.crmSubAgent.data.filterData
    )
    const location = useLocation()
    const path = location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1
    )
    const rquestParam = { id: path }
    const idUser = rquestParam.id
    const { pageIndex, pageSize, sort, query, total } = useSelector(
        (state) => state.crmSubAgent.data.tableData
    )

    const fetchData = useCallback(() => {
        dispatch(getCustomers({ pageIndex, pageSize, sort, query, filterData, idUser}))
    }, [pageIndex, pageSize, sort, query, filterData, idUser, dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData, pageIndex, pageSize, sort, filterData, idUser])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total, idUser}),
        [pageIndex, pageSize, sort, query, total, idUser]
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
        </>
    )
}

export default Customers
