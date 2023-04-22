import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersLog from './components/CustomersTableLog'
import { injectReducer } from 'store/index'
import reducer from './store'

injectReducer('crmCustomers', reducer)
/** Example purpose only */
const DataLog = (id) => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
                <CustomersLog row={id} />
            </AdaptableCard>
        </>
    )
}

export default DataLog
