import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersLog from './components/CustomersLog'
import CustomersTableTools from './components/CustomersTableTools'
import { injectReducer } from 'store/index'
import reducer from './store'

injectReducer('logTest', reducer)
/** Example purpose only */
const DataLog = (id) => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
                <CustomersTableTools />
                <CustomersLog row={id} />
            </AdaptableCard>
        </>
    )
}

export default DataLog
