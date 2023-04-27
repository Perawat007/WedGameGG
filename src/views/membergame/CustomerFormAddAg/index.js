import React, { forwardRef,useEffect, useState } from 'react'
import { Tabs, FormContainer } from 'components/ui'
import { Form, Formik } from 'formik'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import PersonalInfoForm from './PersonalInfoForm'
import { Input, FormItem, Avatar, Upload ,Select} from 'components/ui'
import { Field } from 'formik'
import * as Yup from 'yup'
import { values } from 'lodash'
import { components } from 'react-select'
import {
    HiUserCircle,
    HiLocationMarker,
    HiPhone,
    HiCheck,
    HiOutlineUser,
    HiCurrencyDollar,
    HiLockClosed,
} from 'react-icons/hi'
import { StatusList } from '../../options.data'
import './DropdownList.css';

dayjs.extend(customParseFormat)

const { Control } = components

const PaymentControl = ({ children, ...props }) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && (
                <img className="max-w-[35px] ml-2" src={selected.img} alt="" />
            )}
            {children}
        </Control>
    )
}

const PaymentSelectOption = ({ innerProps, label, data, isSelected }) => {
    return (
        <div
            className={`cursor-pointer flex items-center justify-between p-2 ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center">
                <img className="max-w-[35px]" src={data.img} alt="" />
                <span className="ml-2 rtl:mr-2">{label}</span>
            </div>
            {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
        </div>
    )
}

const { TabNav, TabList, TabContent } = Tabs

const CustomerFormAddAg = forwardRef((props, ref) => {
    const { onFormSubmit } = props

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:5000/list_idAgent');
          const dataID = await response.json();
          setData(dataID.data);
          setLoading(false);
        }
        fetchData();
    }, []);

    function handleSelect(e) {
        console.log(e.target.value);
        setSelectedOption(e.target.value);
    }

    const styles = {
        backgroundColor: 'lightblack',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    };

    return (
        <Formik
            innerRef={ref}
            initialValues={{
                agent_id: '',
                member_code: '',
                name : '',
                username: '',
                password:'',
                IdAgent:'',
            }}
            onSubmit={(values, { setSubmitting }) => {
                onFormSubmit?.(values, selectedOption)
                setSubmitting(false)
            }}
        >
            {({ touched, errors, resetForm }) => (
                <Form>
                    <FormContainer>
                        <Tabs defaultValue="personalInfo">
                            <TabList>
                                <TabNav value="personalInfo">
                                    Add MemBer
                                </TabNav>
                            </TabList>
                            <div className="p-6">
                                <TabContent value="personalInfo">
                                <>
                <FormItem
                invalid={errors.upload && touched.upload}
                errorMessage={errors.upload}
                >
                <Field name="img">
                    {({ field, form }) => {
                        const avatarProps = '/img/avatars/pngegglol.png'
                        ? { src: '/img/avatars/pngegglol.png'}
                            : {}
                        return (
                            <div className="flex justify-center">
                            <Avatar
                                    className="border-2 border-white dark:border-gray-800 shadow-lg"
                                    size={100}
                                    shape="circle"
                                    icon={<HiOutlineUser />}
                                    {...avatarProps}
                                />
                        </div>
                        )
                    }}
                </Field>
                
            </FormItem>
            
            
            <FormItem>
            <div className="dropdown-container">
             <label className="dropdown-label" htmlFor="dropdown">agent_id</label>
             <select className="dropdown-list" id="dropdown" onChange={(e) => handleSelect(e)}>
             <option value={null}>-- กรุณา Agent ID --</option>
                {data.map((item, index) => (
            <option key={index} value={item.id}>{`${item.id}`}</option>
             ))}
            </select>
            </div>
            </FormItem>
            
            {/*
            <FormItem
                label="agent_id"
                invalid={errors.name && touched.name}
                errorMessage={errors.name}
            >
                <Field
                    type="number"
                    autoComplete="off"
                    name="agent_id"
                    placeholder="agent_id"
                    component={Input}
                    prefix={<HiUserCircle className="text-xl" />}
                />
            </FormItem>

             */}
            
            <FormItem
                label="member_code"
                invalid={errors.name && touched.name}
                errorMessage={errors.name}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="member_code"
                    placeholder="member_code"
                    component={Input}
                    prefix={<HiUserCircle className="text-xl" />}
                />
            </FormItem>

            <FormItem
                label="name"
                invalid={errors.name && touched.name}
                errorMessage={errors.name}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="name"
                    placeholder="name"
                    component={Input}
                    prefix={<HiUserCircle className="text-xl" />}
                />
            </FormItem>
            <FormItem
                label="Username"
                invalid={errors.name && touched.name}
                errorMessage={errors.name}
            >
                <Field
                    name="username"
                    placeholder="username"
                    component={Input}
                    prefix={<HiUserCircle className="text-xl" />}
                />
            </FormItem>
            <FormItem
                label="password"
                invalid={errors.location && touched.location}
                errorMessage={errors.location}
            >
                <Field
                    type="password"
                    autoComplete="off"
                    name="password"
                    placeholder="Password"
                    component={Input}
                    prefix={<HiLockClosed className="text-xl" />}
                />
            </FormItem>
        </>
                                </TabContent>
                            </div>
                        </Tabs>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
})

export default CustomerFormAddAg
