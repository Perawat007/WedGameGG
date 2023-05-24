import React, { forwardRef,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCustomer } from '../store/dataSliceAdmin'
import { setDrawerClose } from '../store/addSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerFormAddAg from 'views/editdataagent/CustomerFormAddAg'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog } from 'components/ui'
const CustomerAddContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [dialogIsOpen, setIsOpen] = useState(false)
    const [okay, setOkay] = useState(false)
    const [dataEdit, setDataEdit] = useState('')

    const customer = [];
    const onFormSubmit = (values) => {
        const {
            name,
            username,
            password,
            contact_number,
            credit
            
        } = values

        const basicInfo = { name, username, password, contact_number, credit}
        const personalInfo = {
            name,
            username,
            password,
            contact_number,
            credit,
        }

        console.log(values);
        if (values) {
            if (values.name !== '' && values.username !== '' && values.password !== ''& values.contact_number !== '' & values.credit !== '' ){
                setIsOpen(true)
                setDataEdit(values);
           }
           else{
               alert("กรุณากรอกข้อมูลให้ครบ");
           } 
        }
    }
    const editDataSUb = () => {
        dispatch(AddCustomer(dataEdit)) //เรียกใช้งาน API 
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
                    คุณต้องการ Agent ตามนี้ใช้หรือไม่
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

            <CustomerFormAddAg
                ref={ref}
                onFormSubmit={onFormSubmit}
                customer={customer}
            />
        </div>
    )
})

export default CustomerAddContent
