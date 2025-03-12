// import React from 'react';
// import { Box, Typography, Grid, Button } from '@mui/material';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';
// import OtpInput from 'react-otp-input';
// import { useNavigate, useLocation } from 'react-router-dom';

// // Dummy API object for demonstration purposes
// const api = {
//   post: async (endpoint) => {
//     console.log(`API POST called with endpoint: ${endpoint}`);
//     // Simulate a delay and successful response
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           data: {
//             data: { user: 'dummyUser' },
//             authToken: 'dummyToken',
//           },
//         });
//       }, 1000);
//     });
//   },
// };

// // Dummy useSnackbar hook that logs messages to the console
// const useSnackbar = () => ({
//   openSnackbar: (type, message) => console.log(`Snackbar [${type}]: ${message}`),
// });

// // Placeholder background image URL
// const backgroundImage = 'https://via.placeholder.com/1500x800';

// export const loginSchema = yup.object().shape({
//   otp: yup.string().length(4, 'Enter a valid 4-digit code').required('Code is required'),
// });

// const Verification = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   // Expecting username and sellerId passed via location.state
//   const { username, sellerId } = location.state || {};
//   console.log('Seller ID:', sellerId);
//   const { openSnackbar } = useSnackbar();

//   const initialValues = {
//     otp: '',
//     isRemeberMe: false,
//     type: 'buyer',
//   };

//   // Fallback to 'buyer' if nothing stored in localStorage
//   const storedUserType = localStorage.getItem("type") || 'buyer';
//   console.log('Stored User Type:', storedUserType);

//   const handleSubmit = async (values) => {
//     console.log('Form values:', values);
//     try {
//       const endpoint =
//         storedUserType === 'buyer'
//           ? `/signup/buyerVerify?email=${username}&otp=${values.otp}`
//           : `/signup/sellerVerify?email=${username}&otp=${values.otp}`;
//       const { data } = await api.post(endpoint);
//       localStorage.setItem('data', JSON.stringify(data.data));
//       localStorage.setItem('token', 'Bearer ' + data.authToken);
//       localStorage.setItem('type', storedUserType === 'buyer' ? 'buyer' : 'seller');

//       if (storedUserType === 'buyer') {
//         navigate('/myacc'); // Navigate to home if type is buyer
//       } else if (storedUserType === 'seller') {
//         navigate('/stripe', { state: { sellerId } }); // Navigate to stripe page for sellers
//       } else {
//         navigate('/ordersummary'); // Navigate to ordersummary for any other type
//       }
//     } catch (error) {
//       if (
//         error.response !== null ||
//         error.response.data !== null ||
//         error.response.data.errors.length !== 0
//       ) {
//         error.response.data.errors.forEach((e) => openSnackbar('error', e));
//       } else {
//         openSnackbar('error', error);
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: '80vh',
//         height: 'fit-content',
//         width: '100%',
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundRepeat: 'round',
//       }}
//     >
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={loginSchema}
//       >
//         {({ values, setFieldValue, isSubmitting }) => (
//           <Box sx={{ py: 5, pt: 9 }}>
//             <Form>
//               <Box sx={{ textAlign: "center", mb: 4 }}>
//                 <Typography sx={{ fontSize: "3rem", fontWeight: "bold" }} variant="h6">
//                   Enter Verification Code
//                 </Typography>
//               </Box>
//               <Grid container spacing={3} justifyContent="center" alignItems="center">
//                 <Grid item xs={12} md>
//                   <OtpInput
//                     inputType="tel"
//                     numInputs={4}
//                     renderSeparator={<span> - </span>}
//                     renderInput={(props) => <input {...props} />}
//                     inputStyle={{ width: "75px", borderRadius: "10px", height: "75px" }}
//                     containerStyle={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                     onChange={(otp) => setFieldValue('otp', otp)}
//                     value={values.otp}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Box sx={{ textAlign: "center" }}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "rgb(248, 158, 35)",
//                         px: 10,
//                         fontSize: "1.5rem",
//                         cursor: "pointer",
//                       }}
//                       disabled={isSubmitting}
//                     >
//                       Verify Code
//                     </Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Form>
//           </Box>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Verification;
