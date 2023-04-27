import React, { useRef } from 'react'
import { Button, Drawer } from 'components/ui'
import CustomerEditContent from './CustomerEditContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose, setSelectedCustomer } from '../store/stateSlice'
import { DeleteMemBer } from '../store/dataSliceAdmin'

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
    const drawerOpen = useSelector(
        (state) => state.crmCustomers.state.drawerOpen
    )

    const customer = useSelector(
        (state) => state.crmCustomers.state.selectedCustomer
    )
    
    const onDrawerClose = () => {
        dispatch(setDrawerClose())
        dispatch(setSelectedCustomer({}))
    }

    const deleteMember =() =>{
        dispatch(DeleteMemBer(customer.id, 'member'))
        dispatch(setDrawerClose())
        dispatch(setSelectedCustomer({}))
    }

    const formikRef = useRef()

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
        <Drawer
            isOpen={drawerOpen}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
            closable={false}
            bodyClass="p-0"
            footer={
                <DrawerFooter
                    onDelete={deleteMember}
                    onCancel={onDrawerClose}
                    onSaveClick={formSubmit}
                />
            }
        >
        <CustomerEditContent ref={formikRef} />  
        </Drawer>
    )
}

export default CustomerEditDialog
