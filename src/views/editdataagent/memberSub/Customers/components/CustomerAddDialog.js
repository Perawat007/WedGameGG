import React, { useRef } from 'react'
import { Button, Drawer, Dialog} from 'components/ui'
import CustomerAddContent from './CustomerAddContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose } from '../store/addSlice'
import { useNavigate } from 'react-router-dom'
const DrawerFooter = ({ onSaveClick, onCancel }) => {
    return (
        <div className="text-right w-full">
            <Button size="sm" className="mr-2" onClick={onCancel}>
                Cancel
            </Button>
            <Button size="sm" variant="solid" onClick={onSaveClick}>
                Save
            </Button>
        </div>
    )
}

const CustomerAddDialog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onDrawerClose = () => {
        //dispatch(setDrawerClose())
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        navigate(`/memberSub/${pathSegments[2]}/${pathSegments[3]}/${pathSegments[4]}/${pathSegments[5]}`)
    }

    const formikRef = useRef()

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
    <div className="flex flex-col h-full justify-between">
        <div className="overflow-y-auto">
            <CustomerAddContent ref={formikRef} />  
        </div>
        <DrawerFooter
        onCancel={onDrawerClose}
        onSaveClick={formSubmit}
    />
    </div>
    )
}

export default CustomerAddDialog
