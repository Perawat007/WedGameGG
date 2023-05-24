//clear All เปลี่ยนเป็น Add 

import React, { useRef } from 'react'
import { Button } from 'components/ui'
import { getCustomers, setTableData } from '../store/dataSliceAdmin'
import CustomerTableSearch from './CustomerTableSearch'
import CustomerTableFilter from './CustomerTableFilter'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import { useLocation, useNavigate } from 'react-router-dom'
import {setDrawerOpen} from '../store/addSlice'


const CustomersTableTools = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const pathA = window.location.pathname;
    const pathSegments = pathA.split('/');
    
    const ActionColumn = () => { //สั่งทำงาน Add
        navigate(`/AddAgent`) //:agentId/:subagentId
        //dispatch(setDrawerOpen())
    }

    const inputRef = useRef()

    const tableData = useSelector((state) => state.crmEditAgentCustomers.data.tableData)

    const handleInputChange = (val) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length !== 0) {
            fetchData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            fetchData(newTableData)
        }
    }

    const fetchData = (data) => {
        dispatch(setTableData(data))
        dispatch(getCustomers(data))
    }

    return (
        <div className="md:flex items-center justify-between">
            <div className="md:flex items-center gap-4">
                <CustomerTableSearch
                    ref={inputRef}
                    onInputChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <Button size="sm" onClick={ActionColumn}>
                    Add Agent
                </Button>
            </div>
        </div>
    )
}

export default CustomersTableTools
