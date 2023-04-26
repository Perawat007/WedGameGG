import React, { forwardRef } from 'react'
import { Tabs, FormContainer } from 'components/ui'
import { Form, Formik } from 'formik'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import PersonalInfoForm from './PersonalInfoForm'

dayjs.extend(customParseFormat)

const { TabNav, TabList, TabContent } = Tabs

const CustomerFormAddAg = forwardRef((props, ref) => {
    const { onFormSubmit } = props

    return (
        <Formik
            innerRef={ref}
            initialValues={{
                name : '',
                username: '',
                password:'',
                contact_number:'',
                credit: 0.00 || '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                onFormSubmit?.(values)
                setSubmitting(false)
            }}
        >
            {({ touched, errors, resetForm }) => (
                <Form>
                    <FormContainer>
                        <Tabs defaultValue="personalInfo">
                            <TabList>
                                <TabNav value="personalInfo">
                                    Add Agent
                                </TabNav>
                            </TabList>
                            <div className="p-6">
                                <TabContent value="personalInfo">
                                    <PersonalInfoForm
                                        touched={touched}
                                        errors={errors}
                                    />
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
