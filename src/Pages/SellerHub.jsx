import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Avatar, 
  Link 
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import banner from "../assets/images/newbg.png";
import signUpIcon from "../assets/images2/icon-buy-1.png";
import listIcon from "../assets/images2/icon-sell-2.png";
import sellIcon from "../assets/images2/icon-sell-3.png";
import shipIcon from "../assets/images2/Ship-it.png";
import getPaidIcon from "../assets/images2/Get-Paid.png";
import WhoShouldSellSection from '../components/Who-Should-Sell-Section';
import SellerInfoSection from '../components/Seller-Info-Section';
import ReviewSectionSellerBuyer from '../components/Review-Section-Seller-Buyer';

// Outer Wrapper
const HeroContainer = styled(Box)({
  backgroundColor: '#f5f5fe',
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
  paddingRight: '30px',
  paddingTop: '10px',  
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  }
}));

// Steps Section Container
const StepsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '40px 30px',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 15px',
  }
}));

// Individual Step Item styling
const StepItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "left",
  gap: "20px",
  flexWrap: "nowrap",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

// Steps Section content
const steps = [
  { title: "Sign up",        description: "Complete the EZ Form", icon: signUpIcon },
  { title: "List Equipment", description: "Upload Products to the Showcase", icon: listIcon },
  { title: "Sell Equipment", description: "Reach an Agreement with Buyer", icon: sellIcon },
  { title: "Ship Equipment", description: "Arrange Shipment", icon: shipIcon },
  { title: "Get Paid",       description: "Deposit $$$", icon: getPaidIcon },
];

const SellerHub = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler to redirect to /shop route
  const handleStartSelling = () => {
    navigate('/shop');
  };

  return (
    <HeroContainer>
      {/* Hero Section */}
      <ImageWrapper>
        <Grid container spacing={2}>
          <Grid 
            item 
            xs={12} 
            sm={10} 
            md={8} 
            lg={5} 
            sx={{ ml: { xs: 0, sm: 2, md: 4 }, px: { xs: 1, sm: 2 } }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, 
                mb: "1.5rem", 
                color: "white", 
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
                color: "white", 
                textAlign: 'left' 
              }}
            >
              A Secure Online Portal for Sellers
            </Typography>
            <ShopButton 
              variant="contained"
              onClick={handleStartSelling} // Add onClick event
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, 
                padding: { xs: '10px 20px', sm: '12px 24px', md: '16px 32px' } 
              }}
            >
              START SELLING
            </ShopButton>
          </Grid>
        </Grid>
      </ImageWrapper>

      {/* Description Section */}
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
          Developed by Scientists and Engineers, XCHANGEMarketplace.com is an independent subscription-based marketplace website for buying and selling new, used, ex-demonstration, and refurbished testing equipment and supplies. Our aim is to offer a resale platform that specifically targets the underserved industrial and academic sectors.
        </Typography>
      </ContentContainer>

      {/* Get Started Section */}
      <StepsContainer>
        <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            sx={{ 
              mb: 4, 
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#f5a623'
              }
            }}
          >
            Get Started Today...
          </Typography>

          {/* Steps Grid */}
          <Grid
            container
            spacing={4}
            justifyContent="space-evenly"
            sx={{ px: { xs: 2, md: 8 } }}
          >
            {steps.map((step, index) => (
              <Grid 
                item 
                key={index} 
                xs={12} 
                sm={6} 
                md={2} 
                lg={2} 
                xl={2}
              >
                <StepItem>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#f7f9fc', 
                      width: 100, 
                      height: 100, 
                      minWidth: 100, 
                      minHeight: 100, 
                      p: 1 
                    }}
                  >
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      style={{ width: "100%", height: "100%" }} 
                    />
                  </Avatar>

                  <Box sx={{ flexGrow: 1, minWidth: "150px" }}>
                    <Typography 
                      variant="subtitle1" 
                      fontWeight="bold" 
                      sx={{ mb: 0.5 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 1 }}
                    >
                      {step.description}
                    </Typography>
                    
                    <Link 
                      href="#" 
                      underline="hover" 
                      sx={{ 
                        fontWeight: "bold", 
                        fontSize: "0.9rem",
                        display: "flex", 
                        alignItems: "center",
                        transition: "all 0.3s ease-in-out",
                        "&:hover .arrow": { transform: "translateX(5px)" }
                      }}
                    >
                      Learn more 
                      <span 
                        className="arrow" 
                        style={{ 
                          transition: "transform 0.3s ease-in-out", 
                          marginLeft: "5px" 
                        }}
                      >
                        &gt;
                      </span>
                    </Link>
                  </Box>
                </StepItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </StepsContainer>

      {/* Additional Sections */}
      <Box sx={{ width: "90%", maxWidth: "1200px", mx: "auto", py: 5 }}>
        <SellerInfoSection/>
        <WhoShouldSellSection />
        <ReviewSectionSellerBuyer/>
      </Box>
    </HeroContainer>
  );
};

export default SellerHub;
