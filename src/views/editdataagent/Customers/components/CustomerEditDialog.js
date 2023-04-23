import React, { useRef } from 'react'
import { Button, Drawer } from 'components/ui'
import CustomerEditContent from './CustomerEditContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose, setSelectedCustomer } from '../store/stateSlice'
import { DeleteAgent } from '../store/dataSliceAdmin'

const DrawerFooter = ({ onSaveClick, onCancel, onDelete }) => {
    return (
        <div className="text-right w-full">
             <Button size="sm" className="mr-2" onClick={onDelete}>
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
        <Drawer
            isOpen={drawerOpen}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
            closable={false}
            bodyClass="p-0"
            footer={
                <DrawerFooter
                    onDelete={deleteAgent}
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