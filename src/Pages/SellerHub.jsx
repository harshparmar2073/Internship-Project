import React from 'react';
import { Box, Typography, Button, Grid, Avatar, Link } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import banner from "../assets/images/newbg.png";
import signUpIcon from "../assets/images2/icon-buy-1.png";
import listIcon from "../assets/images2/icon-sell-2.png";
import sellIcon from "../assets/images2/icon-sell-3.png";
import shipIcon from "../assets/images2/Ship-it.png";
import getPaidIcon from "../assets/images2/Get-Paid.png";
import WhoShouldSellSection from '../components/Who-Should-Sell-Section';
import SellerInfoSection from '../components/Seller-Info-Section';

// Outer Wrapper
const HeroContainer = styled(Box)({
  backgroundColor: '#f5f5fe',
  padding: 0,
  width: '100%',
  overflow: 'hidden'
});

// Image Wrapper for Responsive Background
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

  [theme.breakpoints.down('lg')]: { minHeight: '75vh' },
  [theme.breakpoints.down('md')]: { minHeight: '70vh' },
  [theme.breakpoints.down('sm')]: { minHeight: '60vh', padding: '20px', alignItems: 'center' },
  [theme.breakpoints.down('xs')]: { minHeight: '50vh' },
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
const ContentContainer = styled(Box)({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '20px 15px',
});

// Steps Section
const steps = [
  { title: "Sign up", description: "Complete the EZ Form", icon: signUpIcon },
  { title: "List Equipment", description: "Upload Products to the Showcase", icon: listIcon },
  { title: "Sell Equipment", description: "Reach an Agreement with Buyer", icon: sellIcon },
  { title: "Ship Equipment", description: "Arrange Shipment", icon: shipIcon },
  { title: "Get Paid", description: "Deposit $$$", icon: getPaidIcon },
];

const SellerHub = () => {
  return (
    <HeroContainer>
      {/* Hero Section */}
      <ImageWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10} md={8} lg={5} sx={{ ml: { xs: 0, sm: 2, md: 4 }, px: { xs: 1, sm: 2 } }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, mb: "1.5rem", color: "white", textAlign: 'left' }}>
              THE XCHANGE MARKETPLACE
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' }, mb: "1rem", color: "white", textAlign: 'left' }}>
              A Secure Online Portal for Sellers
            </Typography>
            <ShopButton variant="contained" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, padding: { xs: '10px 20px', sm: '12px 24px', md: '16px 32px' } }}>
              START SELLING
            </ShopButton>
          </Grid>
        </Grid>
      </ImageWrapper>

      {/* Description Section */}
      <ContentContainer>
        <Typography paragraph sx={{ fontSize: { xs: '16px', md: '18px' }, lineHeight: '1.6', fontFamily: 'Montserrat' }}>
          Developed by Scientists and Engineers, XCHANGEMarketplace.com is an independent subscription-based marketplace website for buying and selling new, used, ex-demonstration, and refurbished testing equipment and supplies. Our aim is to offer a resale platform that specifically targets the underserved industrial and academic sectors.
        </Typography>
      </ContentContainer>

      {/* Get Started Section */}
      <Box sx={{ textAlign: "center", py: 3, backgroundColor: "#f7f9fc" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Get Started Today...
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "flex-start", 
                  gap: 2,
                  ml: 3 // Adds left margin for spacing
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: "transparent", 
                    width: 50, 
                    height: 50 
                  }}
                >
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    style={{ width: "100%", height: "100%" }} 
                  />
                </Avatar>

                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>

                  <Link 
                    href="#" 
                    underline="hover" 
                    sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      fontWeight: "bold", 
                      fontSize: "0.8rem",
                      transition: "all 0.3s ease-in-out",
                      "&:hover .arrow": { transform: "translateX(5px)" }  
                    }}
                  >
                    Learn more <span className="arrow" style={{ transition: "transform 0.3s ease-in-out", marginLeft: "5px" }}> &gt; </span>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Wrapped Seller Components in a Responsive Box */}
      <Box sx={{ width: "90%", maxWidth: "1200px", mx: "auto", py: 5 }}>
        <SellerInfoSection/>
        <WhoShouldSellSection />
      </Box>
      
    </HeroContainer>
  );
};

export default SellerHub;
