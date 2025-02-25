import React, { useState, useRef } from "react";
import { Box, Typography, Grid, TextField, Button, FormControlLabel, Radio, RadioGroup, Checkbox, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// Removed react-phone-input-2 import
// Removed country-state-city import

// Styled Components
const FormContainer = styled(Box)({
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px",
});

const Title = styled(Typography)({
  fontSize: "28px",
  color: "#4aa56d",
  textTransform: "uppercase",
  fontWeight: 600,
  marginBottom: "8px",
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  color: "#fb9d1f",
  fontWeight: 600,
});

const Description = styled(Typography)({
  fontSize: "14px",
  color: "#737979",
  marginBottom: "16px",
});

const SignupButton = styled(Button)({
  padding: "10px 0px",
  backgroundColor: "#4aa56d",
  color: "white",
  fontWeight: "bold",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#3d8a5a",
  },
});

const StyledRadio = styled(Radio)({
  '&.Mui-checked': {
    color: '#48a068',
  }
});

// Validation Schema
const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
  company: yup.string().required("Company Name is required."),
  phone: yup
    .string()
    .matches(/^[0-9+\-() ]{8,}$/, "Phone number is not valid")
    .required("Phone is required."),
  address: yup.string().required("Address is required."),
  continent: yup.string().required("Continent is required."),
  country: yup.string().required("Country is required."),
  username: yup
    .string()
    .email("Invalid Email.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      "Password must contain at least one number and one special character."
    ),
  type: yup.string().required("User type is required."),
  tnc: yup.boolean().oneOf([true], "You must accept the terms and conditions.")
});

function SignupForm() {
  const navigate = useNavigate();
  
  // Simple continents and countries data
  const continents = [
    'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'
  ];
  
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
    'France', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'South Africa'
  ];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // API call would go here
      // const { data } = await api.post(
      //   values.type === "buyer" ? "signup/buyer" : "signup/seller",
      //   values
      // );

      // Mock successful response for demo
      console.log("Form submitted:", values);
      
      // Redirect based on user type
      navigate(values.type === "buyer" ? "/verification" : "/verification");
      resetForm();
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Title>Sign up</Title>
      <Subtitle>Create Account</Subtitle>
      <Description>
        Enter your details to create an account with us
      </Description>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          address: "",
          continent: "",
          country: "",
          username: "",
          password: "",
          type: "buyer",
          tnc: false,
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
          <Form>
            <Grid container spacing={1}>
              {/* User Type Selection */}
              <Grid item xs={12}>
                <RadioGroup
                  row
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="buyer"
                    control={<StyledRadio />}
                    label="Buyer"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<StyledRadio />}
                    label="Seller"
                  />
                </RadioGroup>
              </Grid>

              {/* First Name & Last Name */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  size="small"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  size="small"
                  margin="normal"
                />
              </Grid>

              {/* Company */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="company"
                  label="Company Name"
                  placeholder="Company Name"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                  size="small"
                  margin="normal"
                />
              </Grid>

              {/* Phone - Simplified without external library */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone"
                  placeholder="+1 (555) 555-5555"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  size="small"
                  margin="normal"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+</InputAdornment>,
                  }}
                />
              </Grid>

              {/* Address */}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Continent - Simplified dropdown */}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <TextField
                  fullWidth
                  select
                  name="continent"
                  label="Select Continent"
                  value={values.continent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.continent && Boolean(errors.continent)}
                  helperText={touched.continent && errors.continent}
                  SelectProps={{
                    native: true,
                  }}
                  size="small"
                >
                  <option value=""></option>
                  {continents.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>

              {/* Country - Simplified dropdown */}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <TextField
                  fullWidth
                  select
                  name="country"
                  label="Select Country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.country && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                  SelectProps={{
                    native: true,
                  }}
                  size="small"
                >
                  <option value=""></option>
                  {countries.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>

              {/* Email */}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <TextField
                  fullWidth
                  name="username"
                  label="Email"
                  placeholder="Email"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  size="small"
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  size="small"
                />
              </Grid>

              {/* Terms and Conditions */}
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.tnc}
                      onChange={(e) => setFieldValue("tnc", e.target.checked)}
                      name="tnc"
                      color="primary"
                      size="small"
                    />
                  }
                  label={
                    <a 
                      style={{ cursor: "pointer", color: "black" }} 
                      href="/terms-and-condition"
                    >
                      I agree to the terms and conditions
                    </a>
                  }
                />
                {touched.tnc && errors.tnc && (
                  <Typography style={{ color: "#fb4868", fontSize: "12px" }}>
                    {errors.tnc}
                  </Typography>
                )}
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} style={{ marginTop: "12px" }}>
                <SignupButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting || !values.tnc}
                >
                  SIGNUP
                </SignupButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default SignupForm;