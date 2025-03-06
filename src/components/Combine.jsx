import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import bgImg from "../assets/images/main-bg3.jpg";
import api from "../api.js";

/* ======================= */
/*     STYLED COMPONENTS   */
/* ======================= */

// For Signup Form
const FormContainer = styled(Box)({
  maxWidth: "460px",
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
  "&.Mui-checked": {
    color: "#48a068",
  },
});

// For the Page Layout
const HEADER_HEIGHT = 80;
const FOOTER_HEIGHT = 60;

const PageWrapper = styled(Box)(({ theme, fixedBg }) => ({
  minHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
  position: "relative",
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: "scroll",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StyledContainer = styled(Paper)(({ theme }) => ({
  minHeight: "60vh",
  width: "90%",
  maxWidth: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(8px)",
  boxShadow: theme.shadows[5],
  overflowY: "hidden",
}));

/* ======================= */
/*      SIGNUP FORM        */
/* ======================= */

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
  username: yup.string().email("Invalid Email.").required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      "Password must contain at least one number and one special character."
    ),
  type: yup.string().required("User type is required."),
  tnc: yup.boolean().oneOf([true], "You must accept the terms and conditions."),
});

function SignupForm() {
  const navigate = useNavigate();

  // Simple continents and countries data
  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
    "Mexico",
    "South Africa",
  ];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // For demo purposes we simply log the values
      console.log("Signup Form submitted:", values);

      // Redirecting after successful signup (adjust as needed)
      navigate("/verification");
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
      <Description>Enter your details to create an account with us</Description>
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            <Grid container spacing={1}>
              {/* User Type Selection */}
              <Grid item xs={12}>
                <RadioGroup row name="type" value={values.type} onChange={handleChange}>
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

              {/* Phone Field */}
              <Grid item xs={6}>
                <Box sx={{ mt: 2, overflowX: "hidden" }}>
                  <PhoneInput
                    country={"us"}
                    value={values.phone}
                    onChange={(phoneValue) => setFieldValue("phone", phoneValue)}
                    onBlur={() => {
                      if (!touched.phone) touched.phone = true;
                    }}
                    specialLabel="Phone"
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    containerStyle={{ width: "100%", overflow: "hidden" }}
                    inputStyle={{
                      width: "100%",
                      height: "35px",
                      fontSize: "14px",
                      overflow: "hidden",
                    }}
                    buttonStyle={{ height: "35px" }}
                    dropdownStyle={{
                      maxHeight: "200px",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  />
                  {touched.phone && errors.phone && (
                    <Typography style={{ color: "#f44336", fontSize: "12px" }}>
                      {errors.phone}
                    </Typography>
                  )}
                </Box>
              </Grid>

              {/* Address */}
              <Grid item xs={12} sx={{ mt: 1 }}>
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

              {/* Continent */}
              <Grid item xs={12} sx={{ mt: 1 }}>
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
                  SelectProps={{ native: true }}
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

              {/* Country */}
              <Grid item xs={12} sx={{ mt: 1 }}>
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
                  SelectProps={{ native: true }}
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
              <Grid item xs={12} sx={{ mt: 1 }}>
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
              <Grid item xs={12} sx={{ mt: 1 }}>
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
                    <a style={{ cursor: "pointer", color: "black" }} href="/terms-and-condition">
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
              <Grid item xs={12} sx={{ mt: 1 }}>
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
/*       LOGIN FORM        */
const loginSchema = yup.object().shape({
  username: yup.string().email("Invalid Email.").required("Email is required."),
  password: yup.string().required("Password is required."),
});

function LoginForm({ setShowForgotPassword }) {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data } = await api.post(
        values.type === "buyer" ? "auth/buyer" : "auth/seller",
        values
      );

      localStorage.setItem("data", JSON.stringify(data.data));
      localStorage.setItem("token", "Bearer " + data.authToken);
      localStorage.setItem("type", values.type);

      navigate(values.type === "buyer" ? "/myacc" : "/overview");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 400,
        p: 3,
        mx: "auto",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#4aa56d",
          fontWeight: 600,
          textTransform: "uppercase",
          textAlign: "left",
        }}
      >
        LOGIN
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#fb9d1f",
          fontWeight: 600,
          textAlign: "left",
          mb: 1,
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#737979",
          mb: 2,
          textAlign: "left",
        }}
      >
        Enter your email and password to login
      </Typography>

      <Formik
        initialValues={{ username: "", password: "", rememberMe: false, type: "buyer" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              {/* User Type Selection */}
              <Grid item xs={12} sx={{ textAlign: "left" }}>
                <RadioGroup
                  row
                  value={values.type}
                  onChange={(e) => setFieldValue("type", e.target.value)}
                  sx={{ justifyContent: "start" }}
                >
                  <FormControlLabel
                    value="buyer"
                    control={<Radio color="primary" />}
                    label="Buyer"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio color="primary" />}
                    label="Seller"
                  />
                </RadioGroup>
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="username"
                  label="Email"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  variant="outlined"
                  size="small"
                />
              </Grid>

              {/* Remember Me & Forgot Password */}
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.rememberMe}
                      onChange={(e) => setFieldValue("rememberMe", e.target.checked)}
                      name="rememberMe"
                      color="primary"
                      size="small"
                    />
                  }
                  label={<Typography variant="body2">Remember Me</Typography>}
                />
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography
                  variant="body2"
                  sx={{ color: "#898f8f", cursor: "pointer" }}
                  onClick={() =>
                    setShowForgotPassword && setShowForgotPassword(true)
                  }
                >
                  Forgot Password?
                </Typography>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#f89e23",
                    color: "white",
                    padding: "10px 0px",
                    mt: 2,
                    "&:hover": { backgroundColor: "#e08e1f" },
                  }}
                  disabled={isSubmitting}
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
/*      COMBINE PAGE       */

function CombinePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageWrapper fixedBg={!isMobile}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100%", width: "100%", paddingBottom: 2 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: isMobile ? 3 : 0,
          }}
        >
          <StyledContainer>
            <Box sx={{ width: "100%" }}>
              <LoginForm />
            </Box>
          </StyledContainer>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: isMobile ? 3 : 0,
          }}
        >
          <StyledContainer>
            <Box sx={{ width: "100%" }}>
              <SignupForm />
            </Box>
          </StyledContainer>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default CombinePage;
 