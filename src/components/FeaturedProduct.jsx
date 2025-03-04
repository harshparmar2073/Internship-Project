import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Pagination, 
  CardActions, 
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import api from '../api'; 

const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'error',
    message: ''
  });
  const [options, setOptions] = useState({
    page: 1,
    size: 10,
    category: '',
    sortBy: 'price',
    sortOrder: 'asc',
    search: '',
    seller: ''
  });

  // Fetch Homepage Products
  const fetchHomepageProducts = async () => {
    try {
      const payload = { ...options };
      const { data } = await api.post("/home/homepage", payload);
      
      if (data.statusCodeValue === 200) {
        setFeaturedProducts(data.body.content);
        setTotalElements(data.body.totalElements);
      } else {
        openSnackbar('error', data.body.message || 'Failed to fetch products');
      }
    } catch (error) {
      openSnackbar('error', error.message);
    }
  };

  // Snackbar Management
  const openSnackbar = (severity, message) => {
    setSnackbar({ open: true, severity, message });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Pagination Handler
  const handlePageChange = (event, value) => {
    setOptions(prev => ({ ...prev, page: value }));
  };

  // Filter Change Handlers
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setOptions(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchHomepageProducts();
  }, [options]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={2}>
          {/* Filters Sidebar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                <InputLabel>Brand</InputLabel>
                <Select
                  name="seller"
                  value={options.seller}
                  onChange={handleFilterChange}
                  label="Brand"
                >
                  <MenuItem value="">All Brands</MenuItem>
                  <MenuItem value="Nike">Nike</MenuItem>
                  <MenuItem value="Apple">Apple</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                <InputLabel>Condition</InputLabel>
                <Select
                  name="category"
                  value={options.category}
                  onChange={handleFilterChange}
                  label="Condition"
                >
                  <MenuItem value="">All Conditions</MenuItem>
                  <MenuItem value="Machinery">Machinery</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* Products Grid */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {featuredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.imageUrl || '/default-product.jpg'}
                      alt={product.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${product.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton color="primary" aria-label="add to cart">
                        <ShoppingCartIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={Math.ceil(totalElements / options.size)}
                page={options.page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Snackbar for Error Handling */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity} 
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default FeaturedProduct;