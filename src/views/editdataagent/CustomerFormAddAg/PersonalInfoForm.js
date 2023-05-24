//EditData Agent
import React from 'react'
import { Input, FormItem, Avatar, Select } from 'components/ui'
import {
    HiUserCircle,
    HiOutlineUser,
    HiPhone,
    HiCurrencyDollar,
    HiLockClosed,
    HiOutlineUserGroup,
    HiCheck,
} from 'react-icons/hi'
import { Field } from 'formik'
import * as Yup from 'yup'
import { components } from 'react-select'

const PersonalInfoForm = (props) => {
    const {values, touched, errors } = props
    const { Control } = components;

    const level = [
        { value: 'Stater', label: 'Stater', icon: HiOutlineUser },
        { value: 'VIP', label: 'VIP' },
        { value: 'VVIP', label: 'VVIP' },
    ]
    
    const rank = [
        { value: 'Agent', label: 'Agent' },
        { value: 'Reseller', label: 'Reseller' },
    ]

    const CustomSelectOption = ({ innerProps, label, data, isSelected }) => {
        return (
            <div
                className={`flex items-center justify-between p-2 ${isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                {...innerProps}
            >
                <div className="flex items-center">
                    <span className="ml-2 rtl:mr-2">{label}</span>
                </div>
                {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
            </div>
        )
    }

    const CustomControl = ({ children, ...props }) => {
        const selected = props.getValue()[0]
        return (
            <Control {...props}>
                {selected && (
                    <HiOutlineUserGroup className="text-xl" />
                )}
                {children}
            </Control>
        )
    }

    const onSetFormFile = (form, field, file) => {
        form.setFieldValue(field.name, URL.createObjectURL(file[0]))
    }

    return (
        <>
            <FormItem
                invalid={errors.upload && touched.upload}
                errorMessage={errors.upload}
            >
                <Field name="img">
                    {({ field, form }) => {
                        const avatarProps = '/img/avatars/pngegglol.png'
                            ? { src: '/img/avatars/pngegglol.png' }
                            : {}
                        return (
                            <div className="flex justify-center">
                                <Avatar
                                    className="border-2 border-white dark:border-gray-800 shadow-lg"
                                    size={70}
                                    shape="circle"
                                    icon={<HiOutlineUser />}
                                    {...avatarProps}
                                />
                            </div>
                        )
                    }}
                </Field>

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
                invalid={errors.username && touched.username}
                errorMessage={errors.username}
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
                invalid={errors.password && touched.password}
                errorMessage={errors.password}
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

            <FormItem
                label="Phone Number"
                invalid={errors.contact_number && touched.contact_number}
                errorMessage={errors.contact_number}
            >
                <Field
                    type="tel"
                    autoComplete="off"
                    name="contact_number"
                    placeholder="Phone Number"
                    component={Input}
                    prefix={<HiPhone className="text-xl" />}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                />
            </FormItem>
            <FormItem
                label="ระดับ"
                invalid={errors.rank && touched.rank}
                errorMessage={errors.rank}
            >
                <Field name="rank">
                    {({ field, form }) => (
                        <Select
                            field={field}
                            form={form}
                            placeholder="Please Select"
                            options={rank}
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            value={rank.filter(
                                (option) =>
                                    option.value ===
                                    values?.rank
                            )}
                            onChange={(option) =>
                                form.setFieldValue(
                                    field.name,
                                    option.value
                                )
                            }
                        />
                    )}
                </Field>
            </FormItem>
            <FormItem
                label="Credit"
                invalid={errors.credit && touched.credit}
                errorMessage={errors.credit}
            >
                <Field
                    type="Number"
                    autoComplete="off"
                    name="credit"
                    placeholder="credit"
                    component={Input}
                    prefix={<HiCurrencyDollar className="text-xl" />}
                />
            </FormItem>

            <FormItem
                label="ระดับ"
                invalid={errors.rank && touched.rank}
                errorMessage={errors.rank}
            >
                <Field name="level">
                    {({ field, form }) => (
                        <Select
                            field={field}
                            form={form}
                            placeholder="Please Select"
                            options={level}
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            value={level.filter(
                                (option) =>
                                    option.value ===
                                    values?.level
                            )}
                            onChange={(option) =>
                                form.setFieldValue(
                                    field.name,
                                    option.value
                                )
                            }
                        />
                    )}
                </Field>
            </FormItem>
        </>
    )
}

export default PersonalInfoForm
