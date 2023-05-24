import React, { useRef } from 'react'
import { Button, Drawer, Dialog } from 'components/ui'
import CustomerEditContent from './CustomerEditContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose} from '../store/stateSlice'
import { setSelectedCustomer } from '../store/dataSliceAdmin'
import { DeleteAgent } from '../store/dataSliceAdmin'
import { useNavigate } from 'react-router-dom'
const DrawerFooter = ({ onSaveClick, onCancel, onDelete }) => {
    return (
        <div className="text-right w-full">
             <Button size="sm" className="mr-2" variant="solid" color="red-600" onClick={onDelete}>
                Delete
            </Button>
            <Button size="sm" className="mr-2" onClick={onCancel}>
                Cancel
            </Button>
            <Button size="sm" variant="solid" onClick={onSaveClick}>
                Save
            </Button>
        </div>
    )
}

const CustomerEditDialog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const customer = useSelector(
        (state) => state.crmEditAgentCustomers.state.selectedCustomer
    )
    console.log(customer);
    const onDrawerClose = () => {
        dispatch(setSelectedCustomer({}))
        navigate(`/editDataAgent`)
    }

    const deleteAgent =() =>{
        dispatch(DeleteAgent(customer.id))
        dispatch(setDrawerClose())
        dispatch(setSelectedCustomer({}))
    }

    const formikRef = useRef()

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
    <div className="flex flex-col h-full justify-between">
        <div className="overflow-y-auto">
            <CustomerEditContent ref={formikRef} />  
        </div>
        <DrawerFooter
        onDelete={deleteAgent}
        onCancel={onDrawerClose}
        onSaveClick={formSubmit}
    />
    </div>
    )
}

export default CustomerEditDialog
