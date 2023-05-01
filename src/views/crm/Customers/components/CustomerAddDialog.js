import React, { useRef } from 'react'
import { Button, Drawer, Dialog } from 'components/ui'
import CustomerAddContent from './CustomerAddContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose } from '../store/addSlice'

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
    const drawerOpen = useSelector(
        (addAgent) => addAgent.crmCustomers.addAgent.drawerOpen
    )

    const onDrawerClose = () => {
        dispatch(setDrawerClose())
    }

    const formikRef = useRef()

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
        <Dialog
        isOpen={drawerOpen}
        onClose={onDrawerClose}
        onRequestClose={onDrawerClose}
        closable={false}
        bodyClass="p-0"
    >
    <CustomerAddContent ref={formikRef} />  
    <DrawerFooter
        onCancel={onDrawerClose}
        onSaveClick={formSubmit}
    />
    </Dialog>
    )
}

export default CustomerAddDialog
