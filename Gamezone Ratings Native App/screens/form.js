import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const schema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num', 'Rating must be a number between one to five!', (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0
    })
})

export default function Form({ handler }) {
    return(
        <View style = { globalStyles.container }>
            <Formik initialValues = {{ title: '', body: '', rating: '' }}
                    validationSchema = { schema }
                    onSubmit = { (values, actions) => {
                        handler(values)
                        actions.resetForm()
                    } }
            >
                { (props) => (
                    <View>
                        <TextInput placeholder = "Review Title" 
                                   style = { globalStyles.input }
                                   onChangeText = { props.handleChange('title') }
                                   value = { props.values.title }
                                   onBlur = { props.handleBlur('title') }
                        />
                        <Text style = { globalStyles.error }>{ props.touched.title && props.errors.title }</Text>
                        <TextInput placeholder = "Review Body" 
                                   style = { globalStyles.input }
                                   onChangeText = { props.handleChange('body') }
                                   value = { props.values.body }
                                   onBlur = { props.handleBlur('body') }
                                   multiline
                        />
                        <Text style = { globalStyles.error }>{ props.touched.body && props.errors.body }</Text>
                        <TextInput placeholder = "Rating (1-5)" 
                                   style = { globalStyles.input }
                                   onChangeText = { props.handleChange('rating') }
                                   value = { props.values.rating }
                                   onBlur = { props.handleBlur('rating') }
                                   keyboardType = "numeric"
                        />
                        <Text style = { globalStyles.error }>{ props.touched.rating && props.errors.rating }</Text>
                        <FlatButton text = "Save" handler = { props.handleSubmit } />
                    </View>
                ) }
            </Formik>
        </View>
    )
}