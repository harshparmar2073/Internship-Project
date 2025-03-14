// import React from 'react';
// import {
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   FormControlLabel,
//   Radio,
//   Box,
//   Checkbox,
//   Paper,
//   RadioGroup
// } from '@mui/material';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import api from "../api.js";

// // Validation Schema
// const loginSchema = yup.object().shape({
//   username: yup.string().email('Invalid Email.').required('Email is required.'),
//   password: yup.string().required('Password is required.'),
// });

// const LoginForm = ({ setShowForgotPassword }) => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const { data } = await api.post(
//         values.type === 'buyer' ? 'auth/buyer' : 'auth/seller',
//         values
//       );

//       localStorage.setItem('data', JSON.stringify(data.data));
//       localStorage.setItem('token', 'Bearer ' + data.authToken);
//       localStorage.setItem('type', values.type);

//       navigate(values.type === 'buyer' ? '/myacc' : '/overview');
//     } catch (error) {
//       console.error('Login error:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         width: "100%",
//         maxWidth: 400, // Keeps form well-sized
//         p: 3,
//         mx: "auto",
//         backgroundColor: "transparent", // Removed background color
//         boxShadow: "none", // Removed extra styling
//       }}
//     >
//       <Typography variant="h5" sx={{ color: '#4aa56d', fontWeight: 600, textTransform: 'uppercase', textAlign: "center" }}>
//         LOGIN
//       </Typography>
//       <Typography variant="body2" sx={{ color: '#fb9d1f', fontWeight: 600, textAlign: "center", mb: 1 }}>
//         Welcome Back!
//       </Typography>
//       <Typography variant="body2" sx={{ color: '#737979', mb: 2, textAlign: "center" }}>
//         Enter your email and password to login
//       </Typography>

//       <Formik
//         initialValues={{ username: '', password: '', rememberMe: false, type: 'buyer' }}
//         validationSchema={loginSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
//           <Form>
//             <Grid container spacing={2}>
//               {/* User Type Selection */}
//               <Grid item xs={12} sx={{ textAlign: "center" }}>
//                 <RadioGroup
//                   row
//                   value={values.type}
//                   onChange={(e) => setFieldValue('type', e.target.value)}
//                   sx={{ justifyContent: "center" }}
//                 >
//                   <FormControlLabel value="buyer" control={<Radio color="primary" />} label="Buyer" />
//                   <FormControlLabel value="seller" control={<Radio color="primary" />} label="Seller" />
//                 </RadioGroup>
//               </Grid>

//               {/* Email */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="username"
//                   label="Email"
//                   value={values.username}
//                   onChange={handleChange}
//                   error={touched.username && Boolean(errors.username)}
//                   helperText={touched.username && errors.username}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid>

//               {/* Password */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   error={touched.password && Boolean(errors.password)}
//                   helperText={touched.password && errors.password}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid>

//               {/* Remember Me & Forgot Password */}
//               <Grid item xs={6}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={values.rememberMe}
//                       onChange={(e) => setFieldValue('rememberMe', e.target.checked)}
//                       name="rememberMe"
//                       color="primary"
//                       size="small"
//                     />
//                   }
//                   label={<Typography variant="body2">Remember Me</Typography>}
//                 />
//               </Grid>
//               <Grid item xs={6} textAlign="right">
//                 <Typography
//                   variant="body2"
//                   sx={{ color: '#898f8f', cursor: 'pointer' }}
//                   onClick={() => setShowForgotPassword && setShowForgotPassword(true)}
//                 >
//                   Forgot Password?
//                 </Typography>
//               </Grid>

//               {/* Submit Button */}
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     backgroundColor: '#f89e23',
//                     color: 'white',
//                     padding: '10px 0px',
//                     mt: 2,
//                     '&:hover': { backgroundColor: '#e08e1f' },
//                   }}
//                   disabled={isSubmitting}
//                 >
//                   LOGIN
//                 </Button>
//               </Grid>
//             </Grid>
//           </Form>
//         )}
//       </Formik>
//     </Paper>
//   );
// };

// export default LoginForm;
