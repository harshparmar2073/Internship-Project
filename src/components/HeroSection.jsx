import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import banner from "../assets/images/banner-03.png";

// Outer Wrapper
const HeroContainer = styled(Box)({
  backgroundColor: '#f5f5fe',
  padding: 0,
  width: '100%',
  overflow: 'hidden'
});

// Image Wrapper completely revised for true responsiveness
const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  padding: '30px',
  width: '100%',
  maxWidth: '1400px',
  margin: '15px auto 0',
  minHeight: '80vh',

  // Responsive adjustments
  [theme.breakpoints.down('lg')]: {
    minHeight: '75vh',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '70vh',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '60vh',
    padding: '20px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: '50vh',
  }
}));

// Button Animation
const halfCircleAnimation = keyframes`
  0% { transform: scaleX(0); opacity: 0.5; }
  100% { transform: scaleX(1); opacity: 1; }
`;

const ShopButton = styled(Button)({
  backgroundColor: '#f5a623',
  color: '#ffffff',
  borderRadius: '15px',
  padding: '16px 32px',
  fontWeight: '800',
  fontSize: "1.2rem",
  textTransform: 'uppercase',
  position: 'relative',
  zIndex: 2,
  overflow: 'visible',
  '&::before': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    fontSize: "1rem",
    background: '#f89e23',
    borderRadius: '50%',
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    animation: `${halfCircleAnimation} 2s ease-in-out forwards`,
    zIndex: 0,
  },
  '&:hover': {
    backgroundColor: '#e69c20'
  }
});

// To ensure paragraph aligns with image width
const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', 
  paddingLeft: '30px', 
  paddingTop: '10px',  
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
  }
}));



const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Image section */}
      <ImageWrapper>
        <Grid container spacing={2}>
          <Grid 
            item 
            xs={12} 
            sm={10} 
            md={8} 
            lg={5} 
            sx={{ 
              ml: { xs: 0, sm: 2, md: 4 },
              px: { xs: 1, sm: 2 }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                mb: "1.5rem",
                color: "white",
                whiteSpace: { xs: 'normal', md: 'nowrap' },
                textAlign: 'left'
              }}
            >
              THE XCHANGE MARKETPLACE
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' },
                mb: "1rem",
                mt: 1,
                color: "white",
                whiteSpace: { xs: 'normal', md: 'nowrap' },
                textAlign: 'left'
              }}
            >
              for Buyers & Sellers of Testing Equipment
            </Typography>
            
            <ShopButton 
              variant="contained"
              sx={{
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                padding: { xs: '10px 20px', sm: '12px 24px', md: '16px 32px' }
              }}
            >
              START SHOPPING
            </ShopButton>
          </Grid>
        </Grid>
      </ImageWrapper>

      {/* Description paragraph */}
      <ContentContainer>
      <Typography 
        paragraph 
        sx={{ 
        fontSize: { xs: '16px', md: '18px' }, 
       lineHeight: '1.6', 
        fontFamily: 'Montserrat',
        padding: 0,
        textAlign: 'justify'
      }}
      >

          Developed by Scientists and Engineers, XCHANGEMarketplace.com is an independent subscription-based marketplace website for buying and selling new, used, ex-demonstration and refurbished testing equipment and supplies. Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
        </Typography>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;