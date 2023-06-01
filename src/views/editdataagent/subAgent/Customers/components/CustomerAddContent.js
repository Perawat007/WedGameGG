import React, { forwardRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddSutAgent } from '../store/dataSliceSubAgent'
import { setDrawerClose } from '../store/addSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerFormAddAg from '../../CustomerFormAddAg'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog } from 'components/ui'
import { apiGetGame } from 'services/CrmService'

const CustomerAddContent = forwardRef((_, ref) => {
    
    const dispatch = useDispatch()
    const customer = [];
     const navigate = useNavigate();

    const [dialogIsOpen, setIsOpen] = useState(false)
    const [okay, setOkay] = useState(false)
    const [dataEdit, setDataEdit] = useState('')

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const success = await apiGetGame()
        setData(success.data);
    }

    const onFormSubmit = (values, dataPercent, dataActive) => {
        const {
            id,
            contact_number,
            name,
            username,
            password,
            credit,
            level,
            rank,
        } = values

        const basicInfo = {id, contact_number, name, username, password, credit,level, rank, dataPercent, dataActive}
        const personalInfo = {
            id,
            contact_number,
            username,
            name,
            password,
            credit,
            level,
            rank,
        }
       
        //dispatch(AddCustomer(values, IdAgent)) //เรียกใช้งาน API 
        if (values) {
            if (values.rank !== "" && values.level !== ""){
                setIsOpen(true)
                setDataEdit(basicInfo);
            }
            else{
                alert("กรุณากรอกข้อมูลให้ครบ");
            }
        }
    }
    const editDataSUb = () => {
        dispatch(AddSutAgent(dataEdit)) 
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        navigate(`/editSutAgent/${pathSegments[2]}/${dataEdit.id}`)
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
                    คุณต้องการเพิ่ม SubAgent ตามนี้ใช่หรือไม่
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
                        เพิ่ม
                    </Button>
                </div>
            </Dialog>

            <CustomerFormAddAg
                ref={ref}
                onFormSubmit={onFormSubmit}
                customer={customer}
                data = {data}
            />
        </div>
    )
})

export default CustomerAddContent
