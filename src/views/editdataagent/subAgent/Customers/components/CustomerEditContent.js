import React, { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomerList, updateSubAgent } from '../store/dataSliceSubAgent'
import { setDrawerClose } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerForm from '../../CustomerForm'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog } from 'components/ui'

const CustomerEditContent = forwardRef((_, ref) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [dialogIsOpen, setIsOpen] = useState(false)
    const [okay, setOkay] = useState(false)
    const [dataEdit, setDataEdit] = useState('')

    const customer = useSelector(
        (state) => state.crmSubAgent.state.selectedCustomer
    )
    const data = useSelector((state) => state.crmSubAgent.data.customerList)
    const onFormSubmit = (values) => {
        const {
            id,
            contact_number,
            name,
            username,
            password,
            status,
            credit,
            level,
            rank,
        } = values

        const basicInfo = { contact_number, name, username, password, status, credit, level, rank }
        const personalInfo = {
            id,
            contact_number,
            username,
            name,
            password,
            status,
            credit,
            level,
            rank,
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

        if (values) {
            if (values.rank !== '' && values.level !== '') {
                setIsOpen(true)
                setDataEdit(values);
            } else {
                alert("กรุณากรอกข้อมูลให้ครบ");
            }
        }


    }

    const editDataSUb = () => {
        dispatch(updateSubAgent(dataEdit))
        navigate(`/editSutAgent/${customer.id_agent}`)
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
