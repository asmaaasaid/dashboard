import { Box , TextField , Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from 'react'

const initialValues ={
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: ''
};

const phoneRegExp= /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const validationSchema ={
    firstName: yup.string().required('this input is required'),
    lastName: yup.string().required('this input is required'),
    email: yup.string().email('invalid email').required('this input is required'),
    contact: yup.string()
    .matches(phoneRegExp , "phone number is not valid")
    .required('this input is required'),
    address1: yup.string().required('this input is required'),
    address2: yup.string().required('this input is required'),
}
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values)=>{
        console.log(values)
    }
  return (
    <Box mt='20px'>
        <Header title="create user" subtitle="create a new user profile" />

        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
            { ({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Box
                    display='grid'
                    gridTemplateColumns="repeat(4 , minmax(0,1fr))"
                    gap="30px"
                    sx={{
                        "& > div":{ gridColumn: isNonMobile ? undefined : "span 4" },
                        mt:'30px'
                    }}
                    >
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="First Name"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.firstName}
                         name="firstName"
                         error={!!touched.firstName && !!errors.firstName}
                         helperText={touched.firstName && errors.firstName}
                         sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.lastName}
                         name="lastName"
                         error={!!touched.lastName && !!errors.lastName}
                         helperText={touched.lastName && errors.lastName}
                         sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.email}
                         name="email"
                         error={!!touched.email && !!errors.email}
                         helperText={touched.email && errors.email}
                         sx={{gridColumn:"span 4"}}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Contact"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.contact}
                         name="contact"
                         error={!!touched.contact && !!errors.contact}
                         helperText={touched.contact && errors.contact}
                         sx={{gridColumn:"span 4"}}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.address1}
                         name="address1"
                         error={!!touched.address1 && !!errors.address1}
                         helperText={touched.address1 && errors.address1}
                         sx={{gridColumn:"span 4"}}
                        />
                       
                    </Box>
                    <Button type="submit" variant="contained" color="info" sx={{mt:'20px'}}>create new user</Button>
                </form>
            ) }
        </Formik>
    </Box>
  )
}

export default Form