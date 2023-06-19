import {  Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import { viewUser } from "../../Services/allApi";
import { BASE_URL } from "../../Services/base_url";
import { useParams } from "react-router-dom";



  


const Form = () => {

// get path parameter from asociated route
  const {id}  = useParams()

  // get a particular users details api
  const userDetails = async ()=>{
    const {data}= await viewUser(id)
    setInputData(data)
    // console.log(data);
  }

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  useEffect(()=>{
    userDetails()
  } )

  // state to hold mormal inputs
  const [inputData,setInputData] = useState({
    
    customerName:"",
    companyName:"",
    email:"",
    contactNumber:"",
    GSTNumber:"",
    requireService:"",
    qty:"",
    orderValue:""
  })


  // status
  const [status,setStatus] = useState("Active")
  // image state
  const [image,setImage] = useState("")

// to update inputdata state
  const setInputValue = (e)=>{
   const{name,value}= e.target
   setInputData({...inputData,[name]:value})
  }

  // console.log(inputData);

  // handleSubmit
  const handleSubmited = (e)=>{
    e.preventDefault()
    const {customerName,companyName,email,contactNumber,GSTNumber,requireService,qty,orderValue} = inputData;
    if(customerName===""){
      toast.error("customer name required!!")
    }else if(companyName===""){
      toast.error("company name required!!")
    }else if(email===""){
      toast.error("email required!!")
    }else if(contactNumber===""){
      toast.error("contact Number required!!")
    }else if(GSTNumber===""){
      toast.error("GST Number required!!")
    }else if(requireService===""){
      toast.error("require service required!!")
    }else if(qty===""){
      toast.error("qty required!!")
    }else if(orderValue===""){
      toast.error("order value required!!")
    }else{
      toast.success("Registration Success")
    }
  }

  return (
    <Box m="20px">
      <Header title="SALES ORDERS" subtitle="Create a New Sales orders" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Customer Name"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.customerName}
                name="customerName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Name"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.companyName}
                name="companyName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.contactNumber}
                name="contactNumber"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="GST Number"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.GSTNumber}
                name="GSTNumber"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Required Service"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.requireService}
                name="requireService"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Qty"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.qty}
                name="qty"
                error={!!touched.address3 && !!errors.address3}
                helperText={touched.address3 && errors.address3}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Approx,Order Value"
                onBlur={handleBlur}
                onChange={setInputValue}
                value={inputData.orderValue}
                name="orderValue"
                error={!!touched.ordervalue && !!errors.ordervalue}
                helperText={touched.ordervalue && errors.ordervalue}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button onClick={handleSubmited} type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
            <ToastContainer position="top-center" />

          </form>
        )}
      </Formik>
    </Box>
    // toast
  );
};

// Form validation schema
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  gst: yup.string().required("Required"),
  address2: yup.string().required("Required"),
  address3: yup.string().required("Required"),
  ordervalue: yup.string().required("Required"),
});

// Initial form field values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gst: "",
  address2: "",
  address3: "",
  ordervalue: "",
};

export default Form;
