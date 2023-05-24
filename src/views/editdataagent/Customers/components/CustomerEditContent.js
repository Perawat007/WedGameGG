import React, { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomerList, putCustomer } from '../store/dataSliceAdmin'
import { setDrawerClose } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerForm from 'views/editdataagent/CustomerForm'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog } from 'components/ui'

const CustomerEditContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [dialogIsOpen, setIsOpen] = useState(false)
    const [okay, setOkay] = useState(false)
    const [dataEdit, setDataEdit] = useState('')

    const customer = useSelector(
        (state) => state.crmEditAgentCustomers.state.selectedCustomer
    )

    const data = useSelector((state) => state.crmEditAgentCustomers.data.customerList)

    //const { id } = customer
    const onFormSubmit = (values) => {
        const {
            id,
            username,
            password,
            name,
            phoneNumber,
            status,
            credit,
            idUser,
        } = values
        const basicInfo = { username,name, phoneNumber, status, credit,idUser}
        const personalInfo = {
            id,
            username,
            name,
            status,
            phoneNumber,
            credit,
            idUser,
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

        if (!isEmpty(editedCustomer)) {
            if (values.name !== '' && values.username !== '' && values.contact_number !== '' & values.credit !== '' ){
                setIsOpen(true)
                setDataEdit(values);
           }
           else{
               alert("กรุณากรอกข้อมูลให้ครบ");
           } 
        }
    }

    const editDataSUb = () => {
        dispatch(putCustomer(dataEdit)) 
        navigate(`/editDataAgent`)
    }

    const onDialogClose = (e) => {
        setOkay(false)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        setIsOpen(false)
        editDataSUb();
    }


    return (
        <div>
        <Dialog
            isOpen={dialogIsOpen}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h5 className="mb-4">การแจ้งเตือน</h5>
            <p>
                คุณต้องการแก้ไขข้อมูลตามนี้หรือไม่
            </p>
            <div className="text-right mt-6">
                <Button
                    className="ltr:mr-2 rtl:ml-2"
                    variant="plain"
                    onClick={onDialogClose}
                >
                    ยกเลิก
                </Button>
                <Button variant="solid" onClick={onDialogOk}>
                    แก้ไข
                </Button>
            </div>
        </Dialog>

        <CustomerForm
            ref={ref}
            onFormSubmit={onFormSubmit}
            customer={customer}
        />
    </div>
    )
})

export default CustomerEditContent
