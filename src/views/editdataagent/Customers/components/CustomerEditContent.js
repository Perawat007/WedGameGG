import React, { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomerList, putCustomer } from '../store/dataSliceAdmin'
import { setDrawerClose } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerForm from 'views/editdataagent/CustomerForm'

const CustomerEditContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()

    const customer = useSelector(
        (state) => state.crmCustomers.state.selectedCustomer
    )
    const data = useSelector((state) => state.crmCustomers.data.customerList)
    const { id } = customer
    const onFormSubmit = (values) => {
        const {
            id,
            username,
            name,
            phoneNumber,
            status,
            credit,
        } = values

        const basicInfo = { username,name, phoneNumber, status, credit}
        const personalInfo = {
            id,
            username,
            name,
            status,
            phoneNumber,
            credit,
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
        console.log(values);
        if (!isEmpty(editedCustomer)) {
            if (values.name !== '' && values.username !== '' && values.password !== ''& values.contact_number !== '' & values.credit !== '' ){
                dispatch(putCustomer(values)) //เรียกใช้งาน API 
                dispatch(setDrawerClose())
           }
           else{
               alert("กรุณากรอกข้อมูลให้ครบ");
           } 
        }
    }

    return (
        <CustomerForm
            ref={ref}
            onFormSubmit={onFormSubmit}
            customer={customer}
        />
    )
})

export default CustomerEditContent
