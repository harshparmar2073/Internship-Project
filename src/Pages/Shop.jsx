// import React, { useState, useEffect } from "react";
// import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
// import api, { toFormData } from "../api";
// import {
//   Dialog,
//   DialogContent,
//   Grow,
//   Button,
//   Typography,
//   Snackbar,
//   Container,
//   Grid,
//   Paper,
//   Card,
//   CardContent,
//   Box,
//   TextField,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   InputAdornment,
//   AppBar,
//   Toolbar,
//   IconButton,
//   CircularProgress,
// } from "@mui/material";
// import videoplaceholder1 from "../assets/images2/video-placeholder.jpg";
// import ReactPlayer from "react-player";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import SearchIcon from "@mui/icons-material/Search";

// function SnackbarComponent({ open, message, onClose }) {
//   return (
//     <Snackbar open={open} autoHideDuration={3000} onClose={onClose} message={message} />
//   );
// }

// function Shop() {
//   const [error, setError] = useState(null);
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [fproducts, setFproducts] = useState([]);
//   const [advertisements, setAdvertisements] = useState([]);
//   const [info, setInfo] = useState({
//     manufacturer: [],
//     seller: [],
//     categories: [],
//   });
//   const [videoModal, setVideoModal] = useState({ state: false, url: "" });
//   const [isDialogOpen, setIsDialogOpen] = useState({ state: false, data: {} });
//   const [option, setOption] = useState({
//     page: 1,
//     size: 9,
//     sortBy: "orderstatus",
//     sortOrder: "asc",
//     search: "",
//     brand: "",
//     category: "",
//     minPrice: 0,
//     maxPrice: 1000000,
//     location: [],
//   });
//   const [search, setSearch] = useState("");
//   const [totalElem, setTotalElem] = useState(0);
//   const [snackbar, setSnackbar] = useState({ open: false, message: "" });
//   const [loading, setLoading] = useState(true);
//   // Add a separate loading state for the initial data load
//   const [initialLoadComplete, setInitialLoadComplete] = useState(false);

//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const openSnackbar = (message) => {
//     setSnackbar({ open: true, message });
//   };

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       console.log("Fetching Featured Products");
//       const response = await api.post("/home/homepage", {
//         page: option.page,
//         size: option.size,
//         sortBy: option.sortBy,
//         sortOrder: option.sortOrder,
//         maxPrice: option.maxPrice,
//         minPrice: option.minPrice,
//         search: option.search,
//         brand: option.brand,
//         category: option.category,
//       });

//       const data = response.data;

//       console.log("Featured Products Response:", data);

//       if (data?.statusCodeValue === 200 && data.body && data.body.content) {
//         setFeaturedProducts(data.body.content);
//         setTotalElem(data.body.totalElements || 0);
//       } else {
//         console.warn("Unexpected response format:", data);
//         openSnackbar(data.body?.message || "Error fetching data");
//         // Don't clear existing data on error if this is not initial load
//         if (!initialLoadComplete) {
//           setFeaturedProducts([]);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       openSnackbar(error?.message || "An error occurred");
//       // Don't clear existing data on error if this is not initial load
//       if (!initialLoadComplete) {
//         setFeaturedProducts([]);
//       }
//     } finally {
//       setLoading(false);
//       console.log("Fetching Featured Products Complete");
//     }
//   };

//   const fetchProd = async () => {
//     try {
//       console.log("Fetching Seller Featured Products");
//       const { data } = await api.get("sellerprofile/getSellerFeatureProducts");
//       console.log("Seller Featured Products Response:", data);
//       if (Array.isArray(data)) {
//         setFproducts(data);
//       } else {
//         console.warn("Expected array but got:", typeof data);
//         setFproducts([]);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       openSnackbar(error?.message || "Error fetching featured products");
//       // Don't set to empty array if this is not the initial load
//       if (!initialLoadComplete) {
//         setFproducts([]);
//       }
//     }
//   };
// console.log(import.meta.env.VITE_API_BASE_URL);

//   const fetchInfo = async () => {
//     try {
//       console.log("Fetching Lookups");
//       const { data } = await api.get("/home/lookups");
//       console.log("Lookups Response:", data);
//       setInfo(data || { manufacturer: [], seller: [], categories: [] });
//     } catch (error) {
//       console.error("Error fetching lookups:", error);
//       openSnackbar(error?.message || "Error fetching lookups");
//       // Don't set to default if this is not the initial load
//       if (!initialLoadComplete) {
//         setInfo({ manufacturer: [], seller: [], categories: [] });
//       }
//     }
//   };

//   const fetchAdvertisements = async () => {
//     try {
//       console.log("Fetching Advertisements");
//       const { data } = await api.post("/advert", { page: 1, size: 5 });
//       console.log("Advertisements Response:", data);
//       if (data && Array.isArray(data.content)) {
//         setAdvertisements(data.content);
//       } else {
//         console.warn("Expected data.content array but got:", data);
//         setAdvertisements([]);
//       }
//     } catch (error) {
//       console.error("Error fetching advertisements:", error);
//       openSnackbar(error?.message || "Error fetching advertisements");
//       // Don't set to empty array if this is not the initial load
//       if (!initialLoadComplete) {
//         setAdvertisements([]);
//       }
//     }
//   };

//   const handleDialogClose = () => {
//     setIsDialogOpen({ state: false, data: {} });
//   };

//   const handleDialogOpen = (data) => {
//     if (data) {
//       setIsDialogOpen({ state: true, data });
//     }
//   };

//   // Handle initial data loading
//   useEffect(() => {
//     console.log("Initial data load attempt");
//     let isMounted = true;
    
//     const loadData = async () => {
//       try {
//         console.log("Data loading started");
//         setLoading(true);
        
//         // Load data sequentially to prevent race conditions
//         if (isMounted) await fetchData();
//         if (isMounted) await fetchInfo();
//         if (isMounted) await fetchProd();
//         if (isMounted) await fetchAdvertisements();
        
//         console.log("Data loading finished");
//         if (isMounted) setInitialLoadComplete(true);
//       } catch (error) {
//         console.error("Error loading initial data:", error);
//         if (isMounted) {
//           setError("Failed to load data. Please check your connection and try again.");
//           openSnackbar("Failed to load some data. Please refresh the page.");
//         }
//       } finally {
//         console.log("Initial loading complete");
//         if (isMounted) setLoading(false);
//       }
//     };
    
//     loadData();
    
//     // Cleanup function
//     return () => {
//       isMounted = false;
//     };
//   }, []); // Empty dependency array for initial load only

//   // Handle option changes after initial load
//   // useEffect(() => {
//   //   // Skip on first render
//   //   if (!initialLoadComplete) return;
    
//   //   console.log("Option changed. Loading:", loading, "Option:", option);
//   //   let isMounted = true;
    
//   //   const updateData = async () => {
//   //     try {
//   //       if (isMounted) await fetchData();
//   //     } catch (error) {
//   //       console.error("Error fetching data on option change:", error);
//   //       if (isMounted) {
//   //         setError("Failed to update results. Please try a different filter.");
//   //       }
//   //     }
//   //   };
    
//   //   updateData();
    
//   //   return () => {
//   //     isMounted = false;
//   //   };
//   // }, [initialLoadComplete, option]); // Include initialLoadComplete to prevent running before initial load

//   const renderProductCard = (item) => {
//     if (!item || !item.id) return null;

//     return (
//       <Card
//         key={item.id}
//         sx={{ height: 430, cursor: "pointer", display: "flex", flexDirection: "column" }}
//         onClick={() => handleDialogOpen(item)}
//       >
//         <Box sx={{ height: 200, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
//           {item.primaryfile && item.primaryfile.url ? (
//             <Box
//               component="img"
//               src={item.primaryfile.url}
//               alt={item.productname || "Product"}
//               sx={{ height: 200, width: "100%", objectFit: "cover" }}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.style.display = "none";
//                 const parent = e.target.parentNode;
//                 if (parent) {
//                   const icon = document.createElement("div");
//                   icon.innerHTML =
//                     '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 24 24"><path fill="#6e6e6e" d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/></svg>';
//                   parent.appendChild(icon);
//                 }
//               }}
//             />
//           ) : (
//             <ImageNotSupportedIcon sx={{ fontSize: 100, color: "#6e6e6e" }} />
//           )}
//         </Box>
//         <CardContent sx={{ flexGrow: 1 }}>
//           <Typography
//             variant="h6"
//             gutterBottom
//             sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", fontSize: 18 }}
//           >
//             {item.productname || "Unnamed Product"}
//           </Typography>
//           <Typography variant="h6" color="primary">
//             ${item.discountprice !== "" && item.discountprice ? item.discountprice : item.price || "N/A"}
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   };   

//   if (error && !initialLoadComplete) {
//     return (
//       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
//         <Typography variant="h5" color="error" gutterBottom>
//           Something went wrong
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           {error}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
//           Refresh Page
//         </Button>
//       </Box>
//     );
//   }   

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <AppBar position="static" color="default">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             The Xchange Shop
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <SnackbarComponent open={snackbar.open} message={snackbar.message} onClose={handleSnackbarClose} />

//       <Dialog
//         open={videoModal.state}
//         onClose={() => setVideoModal({ state: false, url: "" })}
//         TransitionComponent={Grow}
//         PaperProps={{ style: { backgroundColor: "transparent", boxShadow: "none" } }}
//         fullWidth
//         maxWidth="md"
//       >
//         <DialogContent>
//           <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//             {!videoModal.isPrimary && videoModal.current > 0 && (
//               <IconButton
//                 onClick={() => {
//                   if (isDialogOpen.data?.productfiles?.[videoModal.current - 1]) {
//                     setVideoModal({
//                       ...videoModal,
//                       url: isDialogOpen.data.productfiles[videoModal.current - 1].url,
//                       type: isDialogOpen.data.productfiles[videoModal.current - 1].fileType,
//                       current: videoModal.current - 1,
//                     });
//                   }
//                 }}
//               >
//                 <ArrowBackIosIcon sx={{ fontSize: 60, color: "white" }} />
//               </IconButton>
//             )}

//             <Box sx={{ mx: 2, maxWidth: "100%" }}>
//               {videoModal.type === "video" ? (
//                 <ReactPlayer
//                   url={videoModal.url}
//                   playing
//                   controls
//                   width="100%"
//                   height="auto"
//                   onError={(e) => {
//                     console.error("Video player error:", e);
//                     openSnackbar("Error playing video");
//                   }}
//                 />
//               ) : (
//                 <Box
//                   component="img"
//                   src={videoModal.url}
//                   alt="Media content"
//                   sx={{ maxHeight: "70vh", maxWidth: "100%" }}
//                   onError={(e) => {
//                     e.target.src = '/path/to/fallback-image.jpg';
//                     openSnackbar("Error loading image");
//                   }}
//                 />
//               )}
//             </Box>

//             {!videoModal.isPrimary && videoModal.current + 1 < videoModal.total && (
//               <IconButton
//                 onClick={() => {
//                   if (isDialogOpen.data?.productfiles?.[videoModal.current + 1]) {
//                     setVideoModal({
//                       ...videoModal,
//                       url: isDialogOpen.data.productfiles[videoModal.current + 1].url,
//                       type: isDialogOpen.data.productfiles[videoModal.current + 1].fileType,
//                       current: videoModal.current + 1,
//                     });
//                   }
//                 }}
//               >
//                 <ArrowForwardIosIcon sx={{ fontSize: 60, color: "white" }} />
//               </IconButton>
//             )}
//           </Box>
//         </DialogContent>
//       </Dialog>

//       <Dialog open={isDialogOpen.state} onClose={handleDialogClose} TransitionComponent={Grow} fullWidth maxWidth="md">
//         <DialogContent>
//           <IconButton sx={{ position: "absolute", top: 8, right: 8, color: "#48a068" }} onClick={handleDialogClose}>
//             <HighlightOffIcon />
//           </IconButton>

//           <Box sx={{ mt: 2, mb: 2 }}>
//             <Grid container spacing={2} sx={{ mb: 4 }}>
//               <Grid item xs={12} sm={5}>
//                 <Box
//                   sx={{
//                     height: 193,
//                     minWidth: 150,
//                     border: "1px solid #b1b0b0",
//                     borderRadius: 1,
//                     p: 1.5,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {isDialogOpen.data?.primaryfile?.url ? (
//                     <Box
//                       component="img"
//                       src={isDialogOpen.data.primaryfile.url}
//                       alt={isDialogOpen.data?.productname || "Product image"}
//                       sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", cursor: "pointer" }}
//                       onClick={() => {
//                         if (isDialogOpen.data?.primaryfile?.url) {
//                           setVideoModal({
//                             state: true,
//                             url: isDialogOpen.data.primaryfile.url,
//                             type: "image",
//                             isPrimary: true,
//                           });
//                         }
//                       }}
//                       onError={(e) => {
//                         e.target.src = '/path/to/fallback-image.jpg';
//                       }}
//                     />
//                   ) : (
//                     <ImageNotSupportedIcon sx={{ fontSize: 100, color: "#6e6e6e" }} />
//                   )}
//                 </Box>
//               </Grid>

//               <Grid item xs={12} sm={7}>
//                 <Box
//                   sx={{
//                     minWidth: 250,
//                     height: 200,
//                     ml: { xs: 0, sm: 1 },
//                     display: "flex",
//                     flexWrap: "wrap",
//                     alignItems: "flex-start",
//                     alignContent: "flex-start",
//                   }}
//                 >
//                   {isDialogOpen.data?.productfiles?.map((pro_files, index) => {
//                     if (!pro_files || !pro_files.url) return null;

//                     return (
//                       <Box
//                         key={index}
//                         component="img"
//                         src={pro_files.fileType === "video" ? videoplaceholder1 : pro_files.url}
//                         alt={`Product file ${index}`}
//                         sx={{ width: 90, height: 90, p: 0.75, borderRadius: 1, border: "1px solid #b1b0b0", m: 0.5, cursor: "pointer", objectFit: "cover" }}
//                         onClick={() => {
//                           setVideoModal({
//                             state: true,
//                             url: pro_files.url,
//                             type: pro_files.fileType,
//                             isPrimary: false,
//                             current: index,
//                             total: isDialogOpen.data.productfiles.length,
//                           });
//                         }}
//                         onError={(e) => {
//                           e.target.src = '/path/to/fallback-image.jpg';
//                         }}
//                       />
//                     );
//                   })}
//                 </Box>
//               </Grid>
//             </Grid>
//           </Box>

//           <Box sx={{ mt: 4, mb: 2 }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               {isDialogOpen.data?.productname || ""}
//             </Typography>
//           </Box>

//           <Box sx={{ mb: 2 }}>
//             <Typography variant="body1">
//               {isDialogOpen.data?.description || "No description available"}
//             </Typography>
//           </Box>

//           <Typography variant="body1" sx={{ mb: 1 }}>
//             <Box component="span" sx={{ fontWeight:"bold" }}>
//               Brand:{" "}
//             </Box>
//             {isDialogOpen.data?.manufacturer || "Not specified"}
//           </Typography>

//           <Typography variant="body1" sx={{ mb: 1 }}>
//             <Box component="span" sx={{ fontWeight: "bold" }}>
//               Location:{" "}
//             </Box>
//             {isDialogOpen.data?.address || "Not specified"}
//           </Typography>

//           <Typography variant="body1">
//             <Box component="span" sx={{ fontWeight: "bold" }}>
//               Price:{" "}
//             </Box>
//             ${isDialogOpen.data?.discountprice !== "" && isDialogOpen.data?.discountprice ? isDialogOpen.data.discountprice : isDialogOpen.data?.price || "N/A"}
//           </Typography>
//         </DialogContent>
//       </Dialog>

//       <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
//         <Box sx={{ mb: 6 }}>
//           <Typography variant="h4" align="center" sx={{ mb: 4 }}>
//             Featured Products
//           </Typography>

//           <Grid container spacing={3}>
//             {loading && !initialLoadComplete ? (
//               <Grid item xs={12}>
//                 <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
//                   <CircularProgress />
//                 </Box>
//               </Grid>
//             ) : !fproducts || fproducts.length === 0 ? (
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 3, textAlign: "center" }}>
//                   <Typography variant="body1">No Featured Products Available</Typography>
//                 </Paper>
//               </Grid>
//             ) : (
//               fproducts.slice(-4).map((item, idx) => (
//                 <Grid item xs={6} md={3} key={item.id || `featured-${idx}`}>
//                   {renderProductCard(item)}
//                 </Grid>
//               ))
//             )}
//           </Grid>
//         </Box>

//         <Paper sx={{ py: 3, px: 2, bgcolor: "#f5f5f5", borderRadius: 2, mb: 3 }}>
//           <Container maxWidth="md">
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search THE XCHANGE SHOP"
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                 }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => setOption({ ...option, search })}
//                 sx={{ py: 1.5, px: 3, minWidth: { xs: "100%", sm: "auto" } }}
//               >
//                 Start Browsing
//               </Button>
//             </Box>
//           </Container>
//         </Paper>

//         <Typography variant="body1" sx={{ fontSize: "1em", mb: 4 }}>
//           Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: "bold" }}>
//               Shop by
//             </Typography>

//             <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
//                 Brand
//               </Typography>

//               <FormControl component="fieldset" fullWidth>
//                 <RadioGroup
//                   value={option.brand}
//                   onChange={(e) => {
//                     setOption({
//                       ...option,
//                       brand: e.target.value,
//                     });
//                   }}
//                 >
//                   {info.manufacturer && info.manufacturer.map((item, idx) => (
//                     <FormControlLabel key={`${item}-${idx}`} value={item} control={<Radio size="small" />} label={item} />
//                   ))}
//                 </RadioGroup>
//               </FormControl>
//             </Paper>

//             <Paper elevation={1} sx={{ p: 2 }}>
//               <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
//                 Price
//               </Typography>

//               <Box sx={{ mt: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       type="number"
//                       fullWidth
//                       label="Min Price"
//                       variant="outlined"
//                       size="small"
//                       value={option.minPrice}
//                       onChange={(e) =>
//                         setOption({
//                           ...option,
//                           minPrice: parseInt(e.target.value, 10) || 0,
//                         })
//                       }
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       type="number"
//                       fullWidth
//                       label="Max Price"
//                       variant="outlined"
//                       size="small"
//                       value={option.maxPrice}
//                       onChange={(e) =>
//                         setOption({
//                           ...option,
//                           maxPrice: parseInt(e.target.value, 10) || 0,
//                         })
//                       }
//                     />
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={8}>
//             <Grid container spacing={3}>
//               {loading ? (
//                 <Grid item xs={12}>
//                   <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
//                     <CircularProgress />
//                   </Box>
//                 </Grid>
//               ) : featuredProducts.length === 0 ? (
//                 <Grid item xs={12}>
//                   <Paper sx={{ p: 3, textAlign: "center" }}>
//                     <Typography>No Products available</Typography>
//                   </Paper>
//                 </Grid>
//               ) : (
//                 featuredProducts.map((item, idx) => (
//                   <Grid item xs={6} md={4} key={item.id || `product-${idx}`}>
//                     {renderProductCard(item)}
//                   </Grid>
//                 ))
//               )}
//             </Grid>
//           </Grid>

//           <Grid item xs={12} md={2}>
//             <Box sx={{ mt: { xs: 2, md: 4 } }}>
//               {advertisements && advertisements.slice(-3).map((item, index) => {
//                 if (!item) return null;

//                 let content = (
//                   <Paper key={item.id || `ad-${index}`} elevation={2} sx={{ mb: 4 }}>
//                     <Box
//                       component="img"
//                       src="/assets/images/dummy-img.png"
//                       alt="Default image"
//                       sx={{ width: "100%" }}
//                       onError={(e) => {
//                         e.target.style.display = 'none';
//                         const parent = e.target.parentNode;
//                         if (parent) {
//                           const text = document.createElement('div');
//                           text.innerHTML = '<div style="padding: 20px; text-align: center;">Advertisement</div>';
//                           parent.appendChild(text);
//                         }
//                       }}
//                     />
//                   </Paper>
//                 );

//                 if (item.file) {
//                   if (item.file.fileType === "video") {
//                     content = (
//                       <Paper
//                         key={item.id || `ad-video-${index}`}
//                         elevation={2}
//                         sx={{ mb: 4, cursor: "pointer", overflow: "hidden" }}
//                         onClick={() => {
//                           if (item.url) window.open(item.url, "_blank");
//                         }}
//                       >
//                         <Box
//                           component="video"
//                           width="100%"
//                           height="10em"
//                           controls
//                           preload="metadata"
//                           sx={{ display: "block" }}
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             const parent = e.target.parentNode;
//                             if (parent) {
//                               const text = document.createElement('div');
//                               text.innerHTML = '<div style="padding: 20px; text-align: center;">Video Advertisement</div>';
//                               parent.appendChild(text);
//                             }
//                           }}
//                         >
//                           <source src={item.file.url} type="video/mp4" />
//                           Your browser does not support the videotag.
//                         </Box>
//                       </Paper>
//                     );
//                   } else if (item.file.fileType === "image") {
//                     content = (
//                       <Paper
//                         key={item.id || `ad-image-${index}`}
//                         elevation={2}
//                         sx={{ mb: 4, cursor: "pointer", overflow: "hidden" }}
//                         onClick={() => {
//                           if (item.url) window.open(item.url, "_blank");
//                         }}
//                       >
//                         <Box
//                           component="img"
//                           src={item.file.url}
//                           alt="Advertisement"
//                           sx={{ width: "100%", height: "10em", display: "block" }}
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             const parent = e.target.parentNode;
//                             if (parent) {
//                               const text = document.createElement('div');
//                               text.innerHTML = '<div style="padding: 20px; text-align: center;">Image Advertisement</div>';
//                               parent.appendChild(text);
//                             }
//                           }}
//                         />
//                       </Paper>
//                     );
//                   }
//                 }

//                 return content;
//               })}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Shop;
import React, { useState, useEffect } from "react";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import api, { toFormData } from "../api";
import {
  Dialog,
  DialogContent,
  Grow,
  Button,
  Typography,
  Snackbar,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Box,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
  Checkbox,
  InputBase,
  Select,
  MenuItem,
} from "@mui/material";
import videoplaceholder1 from "../assets/images2/video-placeholder.jpg";
import ReactPlayer from "react-player";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function SnackbarComponent({ open, message, onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} message={message} />
  );
}

// ShopFilters component implementation (as provided in the previous artifact)
const ShopFilters = ({ options, setOptions, info }) => {
  const [priceRange, setPriceRange] = useState({
    min: options.minPrice,
    max: options.maxPrice,
  });

  const [openFilters, setOpenFilters] = useState({
    brand: true, // Initially open
    condition: true, // Initially open
    seller: true, // Initially open
    price: true, // Initially open
    location: true, // Initially open
  });

  // State for seller list fetched from API
  const [sellers, setSellers] = useState([]);

  // Fetch seller data from API when component mounts
  useEffect(() => {
    fetch("/api/sellers") // Replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API returns an array of seller objects { id, name }
        setSellers(data);
      })
      .catch((error) => console.error("Error fetching sellers:", error));
  }, []);

  const handleSubmitPrice = () => {
    setOptions({
      ...options,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  };

  const handleReset = (filterType) => {
    switch (filterType) {
      case "brand":
        setOptions({ ...options, brand: "" });
        break;
      case "condition":
        setOptions({ ...options, condition: "" });
        break;
      case "seller":
        setOptions({ ...options, seller: "" });
        break;
      case "price":
        setPriceRange({ min: 0, max: 1000000 });
        setOptions({ ...options, minPrice: 0, maxPrice: 1000000 });
        break;
      case "location":
        setOptions({ ...options, location: [] });
        break;
      default:
        break;
    }
  };

  const handleLocationChange = (location) => {
    const currentLocations = [...options.location];
    const locationIndex = currentLocations.indexOf(location);

    if (locationIndex === -1) {
      currentLocations.push(location);
    } else {
      currentLocations.splice(locationIndex, 1);
    }

    setOptions({ ...options, location: currentLocations });
  };

  const handlePriceRangeSelection = (min, max) => {
    setPriceRange({ min, max });
    setOptions({ ...options, minPrice: min, maxPrice: max });
  };

  const toggleFilter = (filterType) => {
    setOpenFilters({
      ...openFilters,
      [filterType]: !openFilters[filterType],
    });
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: "bold" }}>
        Shop by
      </Typography>

      {/* Brand Filter */}
      <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={() => toggleFilter("brand")}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Brand
          </Typography>
          <Box component="span">
            {openFilters.brand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        {openFilters.brand && (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleReset("brand")}
              sx={{ mb: 2, fontSize: 12 }}
            >
              Reset
            </Button>

            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={options.brand}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    brand: e.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Nike"
                  control={<Radio size="small" />}
                  label="Nike"
                />
                <FormControlLabel
                  value="Apple"
                  control={<Radio size="small" />}
                  label="Apple"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
      </Paper>

      {/* Condition Filter */}
      <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={() => toggleFilter("condition")}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Condition
          </Typography>
          <Box component="span">
            {openFilters.condition ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        {openFilters.condition && (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleReset("condition")}
              sx={{ mb: 2, fontSize: 12 }}
            >
              Reset
            </Button>

            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={options.condition}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    condition: e.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Machinery"
                  control={<Radio size="small" />}
                  label="Machinery"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio size="small" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
      </Paper>

      {/* Seller Filter */}
      <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={() => toggleFilter("seller")}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Seller
          </Typography>
          <Box component="span">
            {openFilters.seller ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        {openFilters.seller && (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleReset("seller")}
              sx={{ mb: 2, fontSize: 12 }}
            >
              Reset
            </Button>

            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={options.seller}
                onChange={(e) =>
                  setOptions({ ...options, seller: e.target.value })
                }
              >
                {sellers.map((seller) => (
                  <FormControlLabel
                    key={seller.id}
                    value={seller.id}
                    control={<Radio size="small" />}
                    label={seller.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </>
        )}
      </Paper>

      {/* Price Filter */}
      <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={() => toggleFilter("price")}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Price
          </Typography>
          <Box component="span">
            {openFilters.price ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        {openFilters.price && (
          <>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    fullWidth
                    placeholder="0"
                    variant="outlined"
                    size="small"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        min: parseInt(e.target.value, 10) || 0,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    fullWidth
                    placeholder="1000000"
                    variant="outlined"
                    size="small"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: parseInt(e.target.value, 10) || 0,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    onClick={handleSubmitPrice}
                    sx={{ mb: 1 }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    onClick={() => handleReset("price")}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <FormControl component="fieldset" fullWidth sx={{ mt: 2 }}>
              <RadioGroup
                value={
                  priceRange.min === 0 && priceRange.max === 50000
                    ? "under5000"
                    : priceRange.min === 5000 && priceRange.max === 20000
                    ? "5000to20000"
                    : priceRange.min === 20000 && priceRange.max === 50000
                    ? "20000to50000"
                    : priceRange.min === 50000 && priceRange.max === 99000
                    ? "50000to99000"
                    : ""
                }
                onChange={(e) => {
                  switch (e.target.value) {
                    case "under5000":
                      handlePriceRangeSelection(0, 50000);
                      break;
                    case "5000to20000":
                      handlePriceRangeSelection(5000, 20000);
                      break;
                    case "20000to50000":
                      handlePriceRangeSelection(20000, 50000);
                      break;
                    case "50000to99000":
                      handlePriceRangeSelection(50000, 99000);
                      break;
                    default:
                      break;
                  }
                }}
              >
                <FormControlLabel
                  value="under5000"
                  control={<Radio size="small" />}
                  label="Under $5000"
                />
                <FormControlLabel
                  value="5000to20000"
                  control={<Radio size="small" />}
                  label="$5000 to $20000"
                />
                <FormControlLabel
                  value="20000to50000"
                  control={<Radio size="small" />}
                  label="$20000 to $50000"
                />
                <FormControlLabel
                  value="50000to99000"
                  control={<Radio size="small" />}
                  label="$50000 to $99000"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
      </Paper>

      {/* Location Filter */}
      <Paper elevation={1} sx={{ mb: 3, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            cursor: "pointer",
          }}
          onClick={() => toggleFilter("location")}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Location
          </Typography>
          <Box component="span">
            {openFilters.location ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        {openFilters.location && (
          <>
            <FormControl component="fieldset" fullWidth>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.location.includes("Antarctica")}
                    onChange={() => handleLocationChange("Antarctica")}
                    size="small"
                  />
                }
                label="Antarctica"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.location.includes("Antigua And Barbuda")}
                    onChange={() =>
                      handleLocationChange("Antigua And Barbuda")
                    }
                    size="small"
                  />
                }
                label="Antigua And Barbuda"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.location.includes("Albania")}
                    onChange={() => handleLocationChange("Albania")}
                    size="small"
                  />
                }
                label="Albania"
              />
            </FormControl>
          </>
        )}
      </Paper>
    </Box>
  );
};
function Shop() {
  const [error, setError] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [fproducts, setFproducts] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const [info, setInfo] = useState({
    manufacturer: [],
    seller: [],
    categories: [],
  });
  const [videoModal, setVideoModal] = useState({ state: false, url: "" });
  const [isDialogOpen, setIsDialogOpen] = useState({ state: false, data: {} });
  const [option, setOption] = useState({
    page: 1,
    size: 9,
    sortBy: "orderstatus",
    sortOrder: "asc",
    search: "",
    brand: "",
    category: "",
    condition: "", // Added for condition filter
    seller: "", // Added for seller filter
    minPrice: 0,
    maxPrice: 1000000,
    location: [], // Changed to array for multiple selections
  });
  const [search, setSearch] = useState("");
  const [totalElem, setTotalElem] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [loading, setLoading] = useState(true);
  // Add a separate loading state for the initial data load
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const openSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Fetching Featured Products");
      
      // Create request payload with all filter options
      const payload = {
        page: option.page,
        size: option.size,
        sortBy: option.sortBy,
        sortOrder: option.sortOrder,
        maxPrice: option.maxPrice,
        minPrice: option.minPrice,
        search: option.search,
        brand: option.brand,
        category: option.category,
        condition: option.condition, // Include condition in API request
        seller: option.seller, // Include seller in API request
      };
      
      // Add locations if there are any selected
      if (option.location && option.location.length > 0) {
        payload.locations = option.location;
      }
      
      const response = await api.post("/home/homepage", payload);

      const data = response.data;

      console.log("Featured Products Response:", data);

      if (data?.statusCodeValue === 200 && data.body && data.body.content) {
        setFeaturedProducts(data.body.content);
        setTotalElem(data.body.totalElements || 0);
      } else {
        console.warn("Unexpected response format:", data);
        openSnackbar(data.body?.message || "Error fetching data");
        // Don't clear existing data on error if this is not initial load
        if (!initialLoadComplete) {
          setFeaturedProducts([]);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      openSnackbar(error?.message || "An error occurred");
      // Don't clear existing data on error if this is not initial load
      if (!initialLoadComplete) {
        setFeaturedProducts([]);
      }
    } finally {
      setLoading(false);
      console.log("Fetching Featured Products Complete");
    }
  };

  const fetchProd = async () => {
    try {
      console.log("Fetching Seller Featured Products");
      const { data } = await api.get("sellerprofile/getSellerFeatureProducts");
      console.log("Seller Featured Products Response:", data);
      if (Array.isArray(data)) {
        setFproducts(data);
      } else {
        console.warn("Expected array but got:", typeof data);
        setFproducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      openSnackbar(error?.message || "Error fetching featured products");
      // Don't set to empty array if this is not the initial load
      if (!initialLoadComplete) {
        setFproducts([]);
      }
    }
  };

  const fetchInfo = async () => {
    try {
      console.log("Fetching Lookups");
      const { data } = await api.get("/home/lookups");
      console.log("Lookups Response:", data);
      setInfo(data || { manufacturer: [], seller: [], categories: [] });
    } catch (error) {
      console.error("Error fetching lookups:", error);
      openSnackbar(error?.message || "Error fetching lookups");
      // Don't set to default if this is not the initial load
      if (!initialLoadComplete) {
        setInfo({ manufacturer: [], seller: [], categories: [] });
      }
    }
  };

  const fetchAdvertisements = async () => {
    try {
      console.log("Fetching Advertisements");
      const { data } = await api.post("/advert", { page: 1, size: 5 });
      console.log("Advertisements Response:", data);
      if (data && Array.isArray(data.content)) {
        setAdvertisements(data.content);
      } else {
        console.warn("Expected data.content array but got:", data);
        setAdvertisements([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      openSnackbar(error?.message || "Error fetching advertisements");
      // Don't set to empty array if this is not the initial load
      if (!initialLoadComplete) {
        setAdvertisements([]);
      }
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen({ state: false, data: {} });
  };

  const handleDialogOpen = (data) => {
    if (data) {
      setIsDialogOpen({ state: true, data });
    }
  };

  // Initial data load effect
  useEffect(() => {
    console.log("Initial data load attempt");
    let isMounted = true;
    
    const loadData = async () => {
      try {
        console.log("Data loading started");
        setLoading(true);
        
        // Load data sequentially to prevent race conditions
        if (isMounted) await fetchData();
        if (isMounted) await fetchInfo();
        if (isMounted) await fetchProd();
        if (isMounted) await fetchAdvertisements();
        
        console.log("Data loading finished");
        if (isMounted) setInitialLoadComplete(true);
      } catch (error) {
        console.error("Error loading initial data:", error);
        if (isMounted) {
          setError("Failed to load data. Please check your connection and try again.");
          openSnackbar("Failed to load some data. Please refresh the page.");
        }
      } finally {
        console.log("Initial loading complete");
        if (isMounted) setLoading(false);
      }
    };
    
    loadData();
    
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array for initial load only

  // Effect to reload data when filter options change
  useEffect(() => {
    // Only fetch if initial load is complete (to avoid duplicate fetches on mount)
    if (initialLoadComplete) {
      fetchData();
    }
  }, [
    option.page, 
    option.size, 
    option.sortBy, 
    option.sortOrder, 
    option.maxPrice, 
    option.minPrice, 
    option.brand, 
    option.category,
    option.condition, // React to condition changes
    option.seller, // React to seller changes
    // Don't trigger on location array changes directly as that would cause too many fetches
  ]);

  // Separate effect for handling search and location changes
  // Uses a timeout to prevent too many API calls
  useEffect(() => {
    if (!initialLoadComplete) return;
    
    const timer = setTimeout(() => {
      fetchData();
    }, 500); // Debounce time
    
    return () => clearTimeout(timer);
  }, [option.search, option.location.length]); // Only depend on the location array length

  const renderProductCard = (item) => {
    if (!item || !item.id) return null;

    return (
      <Card
        key={item.id}
        sx={{ height: 430, cursor: "pointer", display: "flex", flexDirection: "column" }}
        onClick={() => handleDialogOpen(item)}
      >
        <Box sx={{ height: 200, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          {item.primaryfile && item.primaryfile.url ? (
            <Box
              component="img"
              src={item.primaryfile.url}
              alt={item.productname || "Product"}
              sx={{ height: 200, width: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                const parent = e.target.parentNode;
                if (parent) {
                  const icon = document.createElement("div");
                  icon.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 24 24"><path fill="#6e6e6e" d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/></svg>';
                  parent.appendChild(icon);
                }
              }}
            />
          ) : (
            <ImageNotSupportedIcon sx={{ fontSize: 100, color: "#6e6e6e" }} />
          )}
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", fontSize: 18 }}
          >
            {item.productname || "Unnamed Product"}
          </Typography>
          <Typography variant="h6" color="primary">
            ${item.discountprice !== "" && item.discountprice ? item.discountprice : item.price || "N/A"}
          </Typography>
        </CardContent>
      </Card>
    );
  };   

  if (error && !initialLoadComplete) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <Typography variant="h5" color="error" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="body1" gutterBottom>
          {error}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
          Refresh Page
        </Button>
      </Box>
    );
  }   

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
      position="static"
      color="default"
      sx={{
        backgroundColor: 'transparent', // or "#f5f5f5" if you want a light background
        boxShadow: 'none',              // remove AppBar shadow
        py: 2,                          // vertical padding
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            fontWeight: '500',
            color: '#000',  
            textAlign: 'center',
          }}
        >
          FEATURED PRODUCTS
        </Typography>
        {/* Yellow bar under the text */}
        <Box
          sx={{
            width: 150,             // length of the bar
            height: 4,            // thickness of the bar
            backgroundColor: '#FFC107',
            mt: 1,                // margin-top
          }}
        />
      </Toolbar>
    </AppBar>
<Typography variant="body1" ml={2}>No Products</Typography>
      <SnackbarComponent open={snackbar.open} message={snackbar.message} onClose={handleSnackbarClose} />

      <Dialog
        open={videoModal.state}
        onClose={() => setVideoModal({ state: false, url: "" })}
        TransitionComponent={Grow}
        PaperProps={{ style: { backgroundColor: "transparent", boxShadow: "none" } }}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!videoModal.isPrimary && videoModal.current > 0 && (
              <IconButton
                onClick={() => {
                  if (isDialogOpen.data?.productfiles?.[videoModal.current - 1]) {
                    setVideoModal({
                      ...videoModal,
                      url: isDialogOpen.data.productfiles[videoModal.current - 1].url,
                      type: isDialogOpen.data.productfiles[videoModal.current - 1].fileType,
                      current: videoModal.current - 1,
                    });
                  }
                }}
              >
                <ArrowBackIosIcon sx={{ fontSize: 60, color: "white" }} />
              </IconButton>
            )}

            <Box sx={{ mx: 2, maxWidth: "100%" }}>
              {videoModal.type === "video" ? (
                <ReactPlayer
                  url={videoModal.url}
                  playing
                  controls
                  width="100%"
                  height="auto"
                  onError={(e) => {
                    console.error("Video player error:", e);
                    openSnackbar("Error playing video");
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={videoModal.url}
                  alt="Media content"
                  sx={{ maxHeight: "70vh", maxWidth: "100%" }}
                  onError={(e) => {
                    e.target.src = '/path/to/fallback-image.jpg';
                    openSnackbar("Error loading image");
                  }}
                />
              )}
            </Box>

            {!videoModal.isPrimary && videoModal.current + 1 < videoModal.total && (
              <IconButton
                onClick={() => {
                  if (isDialogOpen.data?.productfiles?.[videoModal.current + 1]) {
                    setVideoModal({
                      ...videoModal,
                      url: isDialogOpen.data.productfiles[videoModal.current + 1].url,
                      type: isDialogOpen.data.productfiles[videoModal.current + 1].fileType,
                      current: videoModal.current + 1,
                    });
                  }
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 60, color: "white" }} />
              </IconButton>
            )}
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={isDialogOpen.state} onClose={handleDialogClose} TransitionComponent={Grow} fullWidth maxWidth="md">
        <DialogContent>
          <IconButton sx={{ position: "absolute", top: 8, right: 8, color: "#48a068" }} onClick={handleDialogClose}>
            <HighlightOffIcon />
          </IconButton>

          <Box sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={5}>
                <Box
                  sx={{
                    height: 193,
                    minWidth: 150,
                    border: "1px solid #b1b0b0",
                    borderRadius: 1,
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isDialogOpen.data?.primaryfile?.url ? (
                    <Box
                      component="img"
                      src={isDialogOpen.data.primaryfile.url}
                      alt={isDialogOpen.data?.productname || "Product image"}
                      sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", cursor: "pointer" }}
                      onClick={() => {
                        if (isDialogOpen.data?.primaryfile?.url) {
                          setVideoModal({
                            state: true,
                            url: isDialogOpen.data.primaryfile.url,
                            type: "image",
                            isPrimary: true,
                          });
                        }
                      }}
                      onError={(e) => {
                        e.target.src = '/path/to/fallback-image.jpg';
                      }}
                    />
                  ) : (
                    <ImageNotSupportedIcon sx={{ fontSize: 100, color: "#6e6e6e" }} />
                  )}
                </Box>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Box
                  sx={{
                    minWidth: 250,
                    height: 200,
                    ml: { xs: 0, sm: 1 },
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  {isDialogOpen.data?.productfiles?.map((pro_files, index) => {
                    if (!pro_files || !pro_files.url) return null;

                    return (
                      <Box
                        key={index}
                        component="img"
                        src={pro_files.fileType === "video" ? videoplaceholder1 : pro_files.url}
                        alt={`Product file ${index}`}
                        sx={{ width: 90, height: 90, p: 0.75, borderRadius: 1, border: "1px solid #b1b0b0", m: 0.5, cursor: "pointer", objectFit: "cover" }}
                        onClick={() => {
                          setVideoModal({
                            state: true,
                            url: pro_files.url,
                            type: pro_files.fileType,
                            isPrimary: false,
                            current: index,
                            total: isDialogOpen.data.productfiles.length,
                          });
                        }}
                        onError={(e) => {
                          e.target.src = '/path/to/fallback-image.jpg';
                        }}
                      />
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {isDialogOpen.data?.productname || ""}
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body1">
              {isDialogOpen.data?.description || "No description available"}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 1 }}>
            <Box component="span" sx={{ fontWeight:"bold" }}>
              Brand:{" "}
            </Box>
            {isDialogOpen.data?.manufacturer || "Not specified"}
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Location:{" "}
            </Box>
            {isDialogOpen.data?.address || "Not specified"}
          </Typography>

          <Typography variant="body1">
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Price:{" "}
            </Box>
            ${isDialogOpen.data?.discountprice !== "" && isDialogOpen.data?.discountprice ? isDialogOpen.data.discountprice : isDialogOpen.data?.price || "N/A"}
          </Typography>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDialogClose}
              sx={{ minWidth: 120 }}
            >
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4 }}>
       {/* Search Bar */}
       <Box
  sx={{
    mb: 4,
    backgroundColor: '#4CAF50',
    py: 4,
  }}
>
  <Box
    sx={{
      width: {
        xs: '90%',
        sm: '70%',
        md: '600px',
        lg: '800px',
      },
      height: '55px',
      mx: 'auto',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '45px',
      pl: 3,
      pr: 0,
      py: 1.5,
    }}
  >
    <SearchIcon
      sx={{
        color: 'grey.600',
        fontSize: '2rem',
        mr: 2,
      }}
    />

    <InputBase
      placeholder="Search THE XCHANGE SHOP"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setOption({ ...option, search, page: 1 });
        }
      }}
      sx={{
        flex: 1,
        fontSize: {
          xs: '1rem', // Smaller font size for placeholder
          md: '1.2rem',
        },
      }}
    />

    <Button
      variant="contained"
      onClick={() => setOption({ ...option, search, page: 1 })}
      sx={{
        backgroundColor: '#FFA500',
        color: '#000',
        borderRadius: '999px',
        textTransform: 'none',
        fontWeight: '500',
        fontSize: {
          xs: '0.9rem', // Smaller font size for button text
          md: '1rem',
        },
        px: {
          xs: 4,
          md: 5,
        },
        py: 1.8,
        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
      }}
    >
      Start Browsing
    </Button>
  </Box>
</Box>

<Typography variant="body1" mb={2}>Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.</Typography>
        <Grid container spacing={3}>
          {/* Filters Section */}
          <Grid item xs={12} md={3}>
            <ShopFilters 
              options={option} 
              setOptions={setOption} 
              info={info} 
            />
          </Grid>

          {/* Products Grid Section */}
          <Grid item xs={12} md={9}>
            <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center"  }}>
             
              
              {/* <FormControl variant="outlined" size="small">
                <RadioGroup
                  row
                  value={option.sortBy}
                  onChange={(e) => {
                    setOption({
                      ...option,
                      sortBy: e.target.value,
                      page: 1,
                    });
                  }}
                >
                  <FormControlLabel value="price" control={<Radio />} label="Price" />
                  <FormControlLabel value="createddate" control={<Radio />} label="Date" />
                  <FormControlLabel value="orderstatus" control={<Radio />} label="Status" />
                </RadioGroup>
              </FormControl> */}
              <Box sx={{borderBottom: 1, borderColor: 'grey.400', width: '100%', mt:4}}></Box>
            </Box>  

            {loading && !initialLoadComplete ? (
              <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
                <CircularProgress />
              </Box>
            ) : featuredProducts.length > 0 ? (
              <>
                <Grid container spacing={3}>
                  {featuredProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                      {renderProductCard(item)}
                    </Grid>
                  ))}
                </Grid>

                {/* Pagination Controls */}
  <Box sx={{ mt: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Button
    disabled={option.page <= 1}
    onClick={() => setOption({ ...option, page: option.page - 1 })}
    sx={{
      minWidth: 'auto',
      px: 2,
      py: 1,
      borderRadius: '4px',
      border: '1px solid #ccc',
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
      '&.disabled': {
        color: '#ccc',
        border: '1px solid #eee',
      },
    }}
  >
    Previous
  </Button>
  <Button
    variant="contained"
    disabled={false}
    sx={{
      mx: 1,
      minWidth: '36px',
      height: '36px',
      borderRadius: '4px',
      backgroundColor: '#1976d2',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#1565c0',
      },
    }}
  >
    {option.page}
  </Button>
  <Button
    disabled={option.page >= Math.ceil(totalElem / option.size)}
    onClick={() => setOption({ ...option, page: option.page + 1 })}
    sx={{
      minWidth: 'auto',
      px: 2,
      py: 1,
      borderRadius: '4px',
      border: '1px solid #ccc',
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
      '&.disabled': {
        color: '#ccc',
        border: '1px solid #eee',
      },
    }}
  >
    Next
  </Button>
  <Box sx={{ ml: 2, border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
    <Select
      value={option.size}
      onChange={(e) => setOption({ ...option, size: e.target.value, page: 1 })}
      variant="outlined"
      size="small"
      sx={{
        height: '36px',
        minWidth: '60px',
        border: 'none',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    >
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={100}>100</MenuItem>
    </Select>
  </Box>
</Box>
              </>
            ) : (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="textSecondary">
                  No products found matching your criteria
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => {
                    setOption({
                      page: 1,
                      size: 9,
                      sortBy: "orderstatus",
                      sortOrder: "asc",
                      search: "",
                      brand: "",
                      category: "",
                      condition: "",
                      seller: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                      location: [],
                    });
                    setSearch("");
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        {/* Featured Products Section */}
        {fproducts.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
              Featured Products
            </Typography>
            <Grid container spacing={3}>
              {fproducts.slice(0, 3).map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {renderProductCard(item)}
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Advertisements Section */}
        {advertisements.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
              Sponsored Products
            </Typography>
            <Grid container spacing={3}>
              {advertisements.slice(0, 3).map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {renderProductCard(item)}
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            The Xchange Shop © {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Shop;