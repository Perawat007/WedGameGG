import React, { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCustomer } from '../store/dataSliceAdmin'
import { setDrawerClose } from '../store/addSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerFormAddAg from 'views/crm/CustomerFormAddAg'

const CustomerAddContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()

    const customer = useSelector(
        (addAgent) => addAgent.crmCustomers.state.selectedCustomer
    )
    const data = useSelector((addAgent) => addAgent.crmCustomers.data.customerList)
    const { id } = customer

    const onFormSubmit = (values) => {
        const {
            name,
            username,
            password,
        } = values

        const basicInfo = { name, username, password }
        const personalInfo = {
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
            if (values.name !== '' && values.username !== '' && values.password !== ''){
                 dispatch(AddCustomer(values)) //เรียกใช้งาน API 
                 dispatch(setDrawerClose())
            }
            else{
                alert("กรุณากรอกข้อมูลให้ครบ");
            }
           
        }
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
