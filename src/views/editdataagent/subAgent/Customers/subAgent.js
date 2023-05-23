import React, { useEffect, useState } from 'react'
import { AdaptableCard } from 'components/shared'
import Customers from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'
import { injectReducer } from 'store/index'
import reducer from './store'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers } from './store/dataSliceSubAgent'
import cloneDeep from 'lodash/cloneDeep'

injectReducer('crmSubAgent', reducer)
/** Example purpose only */
const SubAgent = () => {

    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const [id, setId] = useState('');
    const [IdAgent, setIdAgent] = useState([]);
    const [isClickedA, setIsClickedA] = useState(false);
    const [isClickedB, setIsClickedB] = useState(true);

    //const tableData = useSelector((state) => state.crmSubAgent.data.tableData)
    /* const fetchData = (data) => {
         const newTableData = cloneDeep(tableData)
         newTableData.query = ''
         newTableData.pageIndex = 1
         newTableData.idUser = data.id;
         dispatch(getCustomers(newTableData))
     }*/

    /* const { pageIndex, pageSize, sort, query, total } = useSelector(
         (state) => state.crmCustomers.data.tableData
     )*/

    const BackPangAgent = () => {
        setIsClickedA(true);
        setIsClickedB(false);
        navigate(`/editDataAgent`)
    }

     const h3Style = {
        color: isClickedA ? 'red' : 'yellow',
        cursor: 'pointer',
        display: 'inline-block',
        marginRight: '10px',
    };

    const Style = {
        color: 'white',
        display: 'inline-block',
        marginRight: '10px',
    };

    
    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        setId(rquestParam.id);
        //fetchData(rquestParam)
    }, [location.pathname])

    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
                <h4>MemberSubAgent Id {id}</h4>
                <br />
                <CustomersTableTools />
                <h6 style={Style}>กลับ</h6>
                <a style={h3Style} onClick={BackPangAgent}>Agent</a>
                <Customers />
            </AdaptableCard>
        </>
    )
}

export default SubAgent
