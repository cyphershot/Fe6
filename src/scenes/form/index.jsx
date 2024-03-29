import {  Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import React,{useContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import { empRegister } from "../../Services/allApi";
import { useNavigate } from "react-router-dom";
import { addData } from "../../components/contexts/ContextShare";



  



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // use navigate
  const navigate = useNavigate()
  // state to share data from register to all contacts
  const {useradd,setUserAdd} = useContext(addData) 


  const handleFormSubmit = (values) => {
    console.log(values);
  };

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

  console.log(inputData);

  // to update status
  const setStatusvalue = (e)=>{
    setStatus(e.value)
  }

  const setProfile = (e)=>{
    // console.log(e);
    setImage(e.target.files[0])
  }
  console.log(image);

  // handleSubmit
  const handleSubmited = async (e)=>{
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
    }else if(image === ""){
      toast.error("File upload is required!!")
    }else{
      //toast.success("Registration Success")
      //api call

      const data = new FormData()
      data.append("customerName",customerName)
      data.append("companyName",companyName)
      data.append("email",email)
      data.append("contactNumber",contactNumber)
      data.append("GSTNumber",GSTNumber)
      data.append("requireService",requireService)
      data.append("qty",qty)
      data.append("orderValue",orderValue)
      data.append("user_profile",image)

      //  console.log(data);
      const headerConfig = {
        "content-Type":"multipart/form-data"
      }

      const response = await empRegister(data,headerConfig)
      console.log(response);
      if(response.status===200){
        // form register success - all state reset
        setInputData({
          ...inputData,
          customerName:"",
          companyName:"",
          email:"",
          contactNumber:"",
          GSTNumber:"",
          requireService:"",
          qty:"",
          orderValue:""

        })
        setImage("")
        // share data to all contact page via use context
        setUserAdd(response.data)

        // navigate  to view sales orders
        navigate('/team')

      }

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
             <TextField
  fullWidth
  variant="filled"
  type="file"
  label="Upload File"
  name="user_profile"
  onChange={setProfile}
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
