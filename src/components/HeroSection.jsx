import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import banner from "../assets/images/banner-03.png";

// Outer Wrapper
const HeroContainer = styled(Box)({
  backgroundColor: '#f5f5fe',
  padding: '40px', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '50vh',
  width: '100%',
  overflow: 'hidden' 
});

// Image Wrapper
const ImageWrapper = styled(Box)({
  position: 'relative',
  minHeight: '80vh',
  backgroundImage: `url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  padding: '30px', 
  margin: '15px auto', 
  width: '100%', 
  maxWidth: '1400px',
  height: 'auto' 
});

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

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container maxWidth={true} disableGutters>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <ImageWrapper>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={6} lg={5} sx={{ maxWidth: '100%', ml: 4 }}> 
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 'bold', 
                      fontSize: { xs: '2.5rem', md: '3rem' }, 
                      mb: "1.5rem",
                      color: "white",
                      whiteSpace: 'nowrap', 
                      textAlign: 'left'
                    }}
                  >
                    THE XCHANGE MARKETPLACE
                  </Typography>

                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                      fontSize: { xs: '1.2rem', md: '2rem' }, 
                      mb: "1rem",
                      mt:1,
                      color: "white",
                      whiteSpace: 'nowrap', 
                      textAlign: 'left'
                    }}
                  >
                    for Buyers & Sellers of Testing Equipment
                  </Typography>

                  <ShopButton variant="contained">
                    START SHOPPING
                  </ShopButton>
                </Grid>
              </Grid>
            </ImageWrapper>
          </Grid>
          <Typography paragraph sx={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'Montserrat', m: 5.5, maxWidth: '1400px', margin: '0 auto' }}>
            Developed by Scientists and Engineers, XCHANGEMarketplace.com is an independent subscription-based marketplace website for buying and selling new, used, ex-demonstration and refurbished testing equipment and supplies. Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
          </Typography>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
