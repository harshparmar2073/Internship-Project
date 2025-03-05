import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Button,
  CardMedia,
  CardContent,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { styled } from '@mui/material/styles';

// Example styled component for a diagonal "No Image" banner
const NoImageBanner = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '80%',
  textAlign: 'center',
  backgroundColor: '#ccc',
  color: '#000',
  fontWeight: 'bold',
  transform: 'translate(-10%, 50%) rotate(-45deg)',
  transformOrigin: 'left top',
  padding: '4px 0',
  fontSize: '0.8rem',
}));

const ProductCard = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid #e0e0e0',
  borderRadius: 4,
  overflow: 'hidden',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const FeaturedProduct = () => {
  // States for API data
  const [homepageData, setHomepageData] = useState(null); // from /home/homepage
  const [featuredProducts, setFeaturedProducts] = useState([]); // from sellerprofile/getSellerFeatureProducts
  const [lookups, setLookups] = useState({}); // from /home/lookups

  // Example filter states (no real logic here yet)
  const [brandFilter, setBrandFilter] = useState([]);
  const [conditionFilter, setConditionFilter] = useState([]);
  const [sellerFilter, setSellerFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Fetch data on mount or page change
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1) POST to /home/homepage
        const payload = { page: currentPage };
        const homepageRes = await axios.post('/home/homepage', payload);
        setHomepageData(homepageRes.data);

        // 2) GET to sellerprofile/getSellerFeatureProducts
        const featuredRes = await axios.get('sellerprofile/getSellerFeatureProducts');
        setFeaturedProducts(featuredRes.data);

        // 3) GET to /home/lookups
        const lookupsRes = await axios.get('/home/lookups');
        setLookups(lookupsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  // Example filter handlers
  const handleFilterChange = (filterType, value) => {
    // Insert your real filter logic here
    console.log('Filter changed:', filterType, value);
  };

  // Simple pagination controls
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    // In real code, you'd check if you're at the last page (based on total items)
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Shop by
      </Typography>
      <Grid container spacing={3}>
        {/* LEFT SIDE: FILTERS */}
        <Grid item xs={12} md={3}>
          {/* Brand */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('brand','Nike')} />}
                label="Nike"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('brand','Apple')} />}
                label="Apple"
              />
            </AccordionDetails>
          </Accordion>

          {/* Condition */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Condition</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('condition','Machinery')} />}
                label="Machinery"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('condition','Other')} />}
                label="Other"
              />
            </AccordionDetails>
          </Accordion>

          {/* Seller */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Seller</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('seller','Seller A')} />}
                label="Seller A"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('seller','Seller B')} />}
                label="Seller B"
              />
            </AccordionDetails>
          </Accordion>

          {/* Price */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('price','Under $100')} />}
                label="Under $100"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('price','$100 - $500')} />}
                label="$100 - $500"
              />
            </AccordionDetails>
          </Accordion>

          {/* Location */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('location','Antarctica')} />}
                label="Antarctica"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('location','Albania')} />}
                label="Albania"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => handleFilterChange('location','Antigua')} />}
                label="Antigua"
              />
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* RIGHT SIDE: PRODUCT CARDS */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id || product._id}>
                <ProductCard>
                  {/* Image or No Image Banner */}
                  <Box sx={{ position: 'relative' }}>
                    {product.image ? (
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                      />
                    ) : (
                      <Box 
                        sx={{
                          height: 200,
                          backgroundColor: '#f2f2f2',
                          position: 'relative'
                        }}
                      >
                        <NoImageBanner>No Image</NoImageBanner>
                      </Box>
                    )}

                    {/* Top-right icons: Like, Compare, etc. */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        display: 'flex',
                        gap: 1,
                      }}
                    >
                      <IconButton size="small" sx={{ backgroundColor: '#fff' }}>
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ backgroundColor: '#fff' }}>
                        <CompareArrowsIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Product Details */}
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mt: 3 
            }}
          >
            {/* Previous / Next */}
            <Box>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={handlePrevious}
                disabled={currentPage <= 1}
                sx={{ mr: 1 }}
              >
                Previous
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={handleNext}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
              <Typography variant="body2" component="span">
                Page: {currentPage}
              </Typography>
            </Box>

            {/* Items per page */}
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ mr: 1 }}>
                Items per page
              </Typography>
              <Select
                size="small"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedProduct;
