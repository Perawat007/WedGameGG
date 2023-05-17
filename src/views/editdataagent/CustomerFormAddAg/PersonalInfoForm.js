//EditData Agent
import React from 'react'
import { Input, FormItem, Avatar, Upload } from 'components/ui'
import {
    HiUserCircle,
    HiLocationMarker,
    HiOutlineUser,
    HiPhone,
    HiCurrencyDollar,
    HiLockClosed,
} from 'react-icons/hi'
import { Field } from 'formik'
import * as Yup from 'yup'

const PersonalInfoForm = (props) => {
    const { touched, errors } = props

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
                        ? { src: '/img/avatars/pngegglol.png'}
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
        </>
    )
}

export default PersonalInfoForm
