import React, { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCustomer } from '../store/dataSliceAdmin'
import { setDrawerClose } from '../store/addSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerFormAddAg from 'views/membergame/CustomerFormAddAg/index'

const CustomerAddContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()

    const customer = useSelector(
        (addMenBer) => addMenBer.crmCustomers.state.selectedCustomer
    )
    const data = useSelector((addMenBer) => addMenBer.crmCustomers.data.customerList)
    const { id } = customer

    const onFormSubmit = (values) => {
        const {
            agent_id,
            member_code,
            name,
            username,
            password,
        } = values

        const basicInfo = {agent_id, member_code, name, username, password }
        const personalInfo = {
            agent_id,
            member_code,
            name,
            username,
            password
        }
        let newData = cloneDeep(data)
        let editedCustomer = {}
       newData = newData.map((elm) => {
            if (elm.id === id) {
                elm = { ...elm, ...basicInfo }
                elm.personalInfo = { ...elm.personalInfo, ...personalInfo }
                editedCustomer = elm.personalInfo
            }
            return elm.personalInfo
        })

        if (isEmpty(editedCustomer)) {
            dispatch(AddCustomer(values)) //เรียกใช้งาน API 
        }
        dispatch(setDrawerClose())
        window.location.reload();
    }

    return (
        <CustomerFormAddAg
            ref={ref}
            onFormSubmit={onFormSubmit}
            customer={customer}
        />
    )
})

export default CustomerAddContent
