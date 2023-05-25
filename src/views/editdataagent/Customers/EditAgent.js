import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'
import { injectReducer } from 'store/index'
import reducer from './store'

injectReducer('crmEditAgentCustomers', reducer)
/** Example purpose only */
const CollapseMenuItemView2 = () => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
                <h4>Agent</h4>
                <br/>
                <CustomersTableTools />
                <CustomersTable />
            </AdaptableCard>
        </>
    )
}

export default CollapseMenuItemView2
