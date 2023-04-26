//EditData Agent
import React from 'react'
import { Input, FormItem, Avatar, Upload } from 'components/ui'
import {
    HiUserCircle,
    HiLocationMarker,
    HiOutlineUser,
    HiPhone,
} from 'react-icons/hi'
import { Field } from 'formik'

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
                        const avatarProps = '/img/avatars/thumb-6.jpg'
                            ? { src: '/img/avatars/thumb-6.jpg'}
                            : {}
                        return (
                            <div className="flex justify-center">
                                <Upload
                                    className="cursor-pointer"
                                    onChange={(files) =>
                                        onSetFormFile(form, field, files)
                                    }
                                    onFileRemove={(files) =>
                                        onSetFormFile(form, field, files)
                                    }
                                    showList={false}
                                    uploadLimit={1}
                                >
                                    <Avatar
                                        className="border-2 border-white dark:border-gray-800 shadow-lg"
                                        size={100}
                                        shape="circle"
                                        icon={<HiOutlineUser />}
                                        {...avatarProps}
                                    />
                                </Upload>
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
                invalid={errors.location && touched.location}
                errorMessage={errors.location}
            >
                <Field
                    type="password"
                    autoComplete="off"
                    name="password"
                    placeholder="Password"
                    component={Input}
                    prefix={<HiLocationMarker className="text-xl" />}
                />
            </FormItem>

            <FormItem
                label="Phone Number"
                invalid={errors.phoneNumber && touched.phoneNumber}
                errorMessage={errors.phoneNumber}
            >
                <Field
                    type="tel"
                    autoComplete="off"
                    name="contact_number"
                    placeholder="Phone Number"
                    component={Input}
                    prefix={<HiPhone className="text-xl" />}
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
                    prefix={<HiPhone className="text-xl" />}
                />
            </FormItem>
        </>
    )
}

export default PersonalInfoForm
