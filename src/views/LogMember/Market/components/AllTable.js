import React, { useMemo } from 'react'
import { Avatar, Badge } from 'components/ui'
import { DataTable } from 'components/shared'
import { setTableData } from '../store/dataSlice'
import cloneDeep from 'lodash/cloneDeep'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useThemeClass from 'utils/hooks/useThemeClass'

const AllTable = ({ data, loading, tableData }) => {
    const dispatch = useDispatch()

    const statusColor = {
        active: 'bg-emerald-500',
        blocked: 'bg-red-500',
    }
    
    const NameColumn = ({ row }) => {
        const { textTheme } = useThemeClass()
    
        return (
            <div className="flex items-center">
                <Link
                    className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold`}
                    to={`/app/crm/customer-details?id=${row.member_id}`}
                >
                    {row.member_id}
                </Link>
            </div>
        )
    }
    
    const GameColumn = ({ row }) => {
        const { textTheme } = useThemeClass()
    
        return (
            <div className="flex items-center">
                <Link
                    className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold`}
                    to={`/app/crm/customer-details?id=${row.game_id}`}
                >
                    {row.game_id}
                </Link>
            </div>
        )
    }
    

    const columns = useMemo(
        () => [
            {
                header: 'Member_id',
                accessorKey: 'member_id',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
        
            {
                header: 'Game_id',
                accessorKey: 'game_id',
                cell: (props) => {
                    const row = props.row.original
                    return <GameColumn row={row} />
                },
            },
        
            {
                header: 'Bet',
                accessorKey: 'bet',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <span className="ml-2 rtl:mr-2 capitalize">
                                {row.bet}
                            </span>
                        </div>
                    )
                },
            },
        
            {
                header: 'Balance',
                accessorKey: 'balance',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <span className="ml-2 rtl:mr-2 capitalize">
                                {row.balance}
                            </span>
                        </div>
                    )
                },
            },
        
            {
                header: 'Win',
                accessorKey: 'win',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <Badge className={statusColor[row.win]} />
                            <span className="ml-2 rtl:mr-2 capitalize">
                                {row.win}
                            </span>
                        </div>
                    )
                },
            },
            {
                header: 'Created_at',
                accessorKey: 'created_at',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <Badge className={statusColor[row.created_at]} />
                            <span className="ml-2 rtl:mr-2 capitalize">
                                {row.created_at}
                            </span>
                        </div>
                    )
                },
            },
        ],
        []
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
        <DataTable
            columns={columns}
            data={data}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ size: 'sm', className: 'rounded-md' }}
            loading={loading}
            pagingData={tableData}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            onSort={onSort}
        />
    )
}

export default AllTable
