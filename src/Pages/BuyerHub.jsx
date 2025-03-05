import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Avatar, 
  Link, 
  Container, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Assets
import banner from "../assets/images/newbg.png";
import signUpIcon from "../assets/images2/icon-buy-1.png";
import listIcon from "../assets/images2/icon-buy-2.png";
import sellIcon from "../assets/images2/icon-buy-3.png";
import shipIcon from "../assets/images2/icon-buy-4.png";
import getPaidIcon from "../assets/images2/icon-buy-5.png";
import video from "../assets/videos/Buying on the Xchange Marketplace (1).mp4";
import pointerIcon from "../assets/images/icon-17.png";
import backgroundImg from "../assets/images/welcome_section-bg.png";
import questionMarkImg from "../assets/images/question.png";
import illustration1 from "../assets/images/sell-icon-01.png";
import illustration2 from "../assets/images/sell-icon-02.png";
import illustration3 from "../assets/images/sell-icon-03.png";
import illustration4 from "../assets/images/sell-icon-04.png";
import heroImage from "../assets/images/cart-img.png";
import sellImg from "../assets/images/banner_rm.png";
import progressImg from "../assets/images/progress-bar.png";
import step1Icon from "../assets/images/sell-pro.png";
import step2Icon from "../assets/images/sell-pro-02.png";
import step3Icon from "../assets/images/sell-pro-03.png";
import step4Icon from "../assets/images/sell-pro-04.png";
import ReviewSection from '../components/ReviewSection';

// --- Styled Components ---

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

// Steps Section Container with improved spacing
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
  padding: "10px 30px",
  gap: "20px",
  flexWrap: "nowrap",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

// Seller Info Section Styles
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f7fa',
  padding: '5em 0',
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down('md')]: {
    padding: '3em 0',
  },
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "3em",
  paddingBottom: "3em",
  width: "100%",
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '500px',
    height: '500px',
    background: `url(${backgroundImg}) no-repeat center`,
    backgroundSize: 'contain',
    zIndex: 0,
    opacity: 0.8,
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: "2em",
    paddingBottom: "2em",
    '&::before': {
      width: '300px',
      height: '300px',
    },
  },
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px',
  height: '350px',
  border: '4px solid #4aba70',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#000',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
}));

const PointerIcon = styled('img')({
  width: '40px',
  height: '40px',
  marginRight: '8px'
});

const HeadingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const ContentContainer2 = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: "550px",
  [theme.breakpoints.down('md')]: {
    maxWidth: "100%",
    marginTop: "2em",
  },
}));

const StyledList = styled(List)(({ theme }) => ({
    padding: 0,
  marginTop: '5px',
}));

const StyledListItem = styled(ListItem)({
  padding: '3px 0',
  display: 'flex',
  alignItems: 'center',
});

const BulletDot = styled('span')({
  fontSize: '18px',
  marginRight: '8px',
  color: '#222',
});

const AimTextContainer = styled(Box)(({ theme }) => ({
  marginTop: '25px',
  zIndex: 2,
  position: 'relative',
  display: 'block',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));
const WhoShouldSellContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "3rem 2rem",
    borderRadius: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
    position: "relative",
    marginBottom: "-80px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-50px",
      padding: "2rem 1.5rem",
    },
}));
  
const WhySellContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const QuestionMarkImage = styled("img")(({ theme, isMobile }) => ({
  position: "absolute",
  left: "2%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "150px",
  opacity: 0.1,
  zIndex: 0,
  display: isMobile ? "none" : "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f5a623",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "16px",
  textTransform: "none",
  borderRadius: "25px",
  marginTop: "1rem",
  "&:hover": {
    backgroundColor: "#e5941c",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "8px 16px",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "120px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70px",
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  color: "#3ea964",
  textTransform: "none",
  fontSize: "14px",
  padding: "4px 8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "2px 4px",
  },
}));

const IconTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const SellingContainer = styled(Box)({
  textAlign: "left",
  marginBottom: "3rem",
});

const SellingImage = styled("img")(({ theme }) => ({
  width: "100%", 
  maxWidth: "600px", 
  height: "auto",
  display: "block",
  margin: "0 auto",
  position: "relative",
  top: "40px",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    top: "20px",
    maxWidth: "350px",
  },
}));

const BulletPointsContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
});

const BulletPointsColumn = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const BulletPoints = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  flexGrow: 1,
  marginBottom: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Dot = styled("span")({
  height: "8px",
  width: "8px",
  backgroundColor: "#f5a623",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "10px",
});

// --- BuyerHub Component ---

const BuyerHub = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Steps data for "Get Started Today" section
  const steps = [
    { title: "Sign up", description: "Complete the EZ Form", icon: signUpIcon },
    { title: "Shop for Equipment", description: "Browse our Showcase", icon: listIcon },
    { title: "Buy Equipment", description: "Select the Product", icon: sellIcon },
    { title: "Received Equipment", description: "Arrange Delivery", icon: shipIcon },
    { title: "Use Equipment", description: "Start Testing", icon: getPaidIcon },
  ];

  // Step items for the progress section in "HOW TO BUY"
  const stepItems = [
    { step: "STEP 1", text: "Create Your Store", color: "#48a068", icon: step1Icon },
    { step: "STEP 2", text: "Upload Pictures", color: "#4fbfb9", icon: step2Icon },
    { step: "STEP 3", text: "Upload Video", color: "orange", icon: step3Icon },
    { step: "STEP 4", text: "List Your Product", color: "#ff9d00", icon: step4Icon },
  ];

  return (
    <>
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
          <Typography 
            paragraph 
            sx={{ 
              fontSize: { xs: '16px', md: '18px' }, 
              lineHeight: '1.6', 
              fontFamily: 'Montserrat',
              padding: 0,
              textAlign: 'left'
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
                  md={2.3} 
                  lg={2} 
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <StepItem>
                    <Avatar 
                      sx={{ 
                        bgcolor: '#f7f9fc', 
                        width: 110, 
                        height: 110, 
                        minWidth: 110, 
                        minHeight: 110, 
                        p: 2 
                      }}
                    >
                      <img 
                        src={step.icon} 
                        alt={step.title} 
                        style={{ width: "100%", height: "100%" }} 
                      />
                    </Avatar>

                    <Box sx={{ flexGrow: 1, minWidth: "150px" }}>
                      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
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
                        <span className="arrow" 
                          style={{ transition: "transform 0.3s ease-in-out", marginLeft: "5px" }}>
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

        {/* Seller Info Section */}
        <SectionContainer>
          <BackgroundContainer>
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' } }}>
                  <VideoContainer>
                    <video width="100%" height="100%" controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </VideoContainer>

                  <AimTextContainer>
                    <Typography paragraph sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      color: '#666',
                      lineHeight: '2',
                      fontFamily: 'Montserrat',
                      textAlign: { xs: 'center', md: 'left' },
                      marginBottom: 0,
                      marginLeft: 6
                    }}>
                      Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
                    </Typography>
                  </AimTextContainer>
                </Grid>

                <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }}>
                  <ContentContainer2 sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <HeadingContainer sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <PointerIcon src={pointerIcon} alt="Pointer Icon" />
                      <Typography sx={{
                        fontWeight: 'bold',
                        color: '#f5a623',
                        fontSize: { xs: '20px', md: '22px' },
                        fontFamily: 'Montserrat'
                      }}>
                        Watch our video
                      </Typography>
                    </HeadingContainer>

                    <Typography sx={{
                      fontWeight: 'bold',
                      color: '#222',
                      fontSize: { xs: '22px', md: '26px' },
                      fontFamily: 'Montserrat',
                      mt: 1,
                      textAlign: { xs: 'center', md: 'left' }
                    }}>
                      HOW BUYING ON THE XCHANGE MARKETPLACE WORKS
                    </Typography>

                    <Typography paragraph sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      color: '#444',
                      lineHeight: '1.6',
                      fontFamily: 'Montserrat',
                      mt: 1,
                      textAlign: { xs: 'center', md: 'left' }
                    }}>
                      Enjoy a seamless shopping experience with The XCHANGE MARKETPLACE, Save money and discover unique products from a wide array of businesses. Explore a diverse marketplace where every visit is an opportunity to purchase something special. Find and connect with companies offering exactly what you need. Take advantage of this innovative e-commerce platform to find great deals and explore new products.
                    </Typography>
                  </ContentContainer2>
                </Grid>
              </Grid>
            </Container>
          </BackgroundContainer>
        </SectionContainer>

        {/* Who Should Sell Section */}
        <Box sx={{ width: "90%", maxWidth: "1200px", mx: "auto", py: 5, position: "relative", marginBottom: '-50px' }}>
          <SellingContainer>
            <Grid container alignItems="center" spacing={4}>
              {/* Left Side - Text Content */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold" sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.75rem",
                  },
                })}>
                  BUYING ON <span style={{ color: "#3ea964" }}>THE XCHANGE</span>
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                  Shop Online at your Leisure and Convenience Save Money with Options for Used and PreOwned Testing Equipment
                </Typography>

                {/* Bullet Point Lists */}
                <BulletPointsContainer container spacing={3}>
                  <BulletPointsColumn item xs={12} sm={6}>
                    <BulletPoints>
                      <Dot /> Buy Products Securely
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Avoid the Hassle of Normal Sales Process
                    </BulletPoints>
                    <BulletPoints> 
                      <Dot /> Request Virtual Demonstrations
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Communicate via Private Message
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Access Network of Service Providers
                    </BulletPoints>
                  </BulletPointsColumn>
                  <BulletPointsColumn item xs={12} sm={6}>
                    <BulletPoints>
                      <Dot /> Purchase with Ease
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Bypass Salespersons
                    </BulletPoints>
                    <BulletPoints>
                      <Dot />Experience Product Videos
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Get Support from the Xchange Team
                    </BulletPoints>
                    <BulletPoints>
                      <Dot /> Rent & Lease to Own
                    </BulletPoints>
                  </BulletPointsColumn>
                </BulletPointsContainer>
              </Grid>

              {/* Right Side - Image */}
              <Grid item xs={12} md={6} textAlign="center">
                <SellingImage src={heroImage} alt="Buying on The Xchange" />
              </Grid>
            </Grid>
          </SellingContainer>

          <WhoShouldSellContainer>
            {!isMobile && (
              <QuestionMarkImage
                src={questionMarkImg}
                alt="Question Mark"
                isMobile={isMobile}
              />
            )}

            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} sm={12} md={4} sx={{ mb: { xs: 3, md: 0 } }}>
                <Typography variant="h5" fontWeight="bold" color="#3ea964" sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.25rem",
                    textAlign: "center",
                  },
                })}>
                  WHO SHOULD SELL <span style={{ color: "#000" }}>ON THE XCHANGE</span>
                </Typography>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                  <CTAButton>Learn More</CTAButton>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={3} justifyContent="center">
                  {[
                    { title: "Testing Professionals", img: illustration1 },
                    { title: "Industrial & Scientific Companies", img: illustration2 },
                    { title: "Equipment Manufacturers & Resellers", img: illustration3 },
                    { title: "Consumers", img: illustration4 },
                  ].map((item, index) => (
                    <Grid item xs={6} sm={6} md={3} key={index} sx={{
                      textAlign: "center",
                      mb: { xs: 2, md: 0 },
                      px: { xs: 1, md: 2 }
                    }}>
                      <StyledImage src={item.img} alt={item.title} />
                      <IconTitle variant="body1">
                        {item.title}
                      </IconTitle>
                      <LearnMoreButton
                        size="small"
                        endIcon={<ArrowForwardIosIcon sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }} />}
                      >
                        Learn more
                      </LearnMoreButton>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </WhoShouldSellContainer>
        </Box>

        {/* Why Sell Section */}
        <WhySellContainer>
          <Box
            component="img"
            src={sellImg}
            alt="Why Buy"
            sx={{
              width: "100%",
              maxWidth: "1400px",
              height: "auto",
              mb: { xs: 4, md: 10 },
            }}
          />

          <Box sx={{ width: "100%", maxWidth: "1200px", px: { xs: 2, md: 3 } }}>
            <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 3, md: 0 } }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#48a068"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                  }}
                >
                  HOW TO BUY
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: '1.20rem', sm: '1.25rem', md: '1.70rem' }
                  }}
                >
                  ON THE XCHANGE
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#fb9d1e",
                    "&:hover": { backgroundColor: "black", color: "#fff" },
                    color: "#fff",
                    border: "1px solid #0000",
                    borderRadius: "20px",
                    display: "inline-block",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    fontWeight: "500",
                    px: { xs: 2, md: 3 },
                    py: { xs: 0.5, md: 1 }
                  }}
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={12} md={8} sx={{ textAlign: "center", position: "relative" }}>
                {!isMobile && (
                  <Box
                    component="img"
                    src={progressImg}
                    alt="Progress Bar"
                    sx={{
                      width: "100%",
                      maxWidth: "700px",
                      display: "block",
                      margin: { xs: 4, md: 8 },
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                )}

                {isMobile ? (
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {stepItems.map((item, index) => (
                      <Grid item xs={6} key={index} sx={{ mb: 4 }}>
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: "0px 3px 6px #e0e0e0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                          }}
                        >
                          <Box component="img" src={item.icon} alt={`Step ${index + 1}`} sx={{ width: 50, height: 50 }} />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{
                            color: item.color,
                            mt: 1,
                            fontSize: { xs: '0.85rem', sm: '1rem' }
                          }}
                        >
                          {item.step}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            fontFamily: "Lato, sans-serif"
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <>
                    <Grid
                      container
                      spacing={0}
                      justifyContent="center"
                      sx={{
                        position: "absolute",
                        mt: 4,
                        top: isTablet ? "-40px" : "-60px",
                        left: "56%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        zIndex: 2,
                      }}
                    >
                      {stepItems.map((item, index) => (
                        <Grid
                          item
                          xs={3}
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            position: "relative",
                          }}
                        >
                          <Box
                            sx={{
                              width: isTablet ? 90 : 110,
                              height: isTablet ? 90 : 110,
                              backgroundColor: "#ffffff",
                              borderRadius: "50%",
                              boxShadow: "0px 3px 6px #e0e0e0",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              margin: "auto",
                              transform: "translateY(5px)",
                            }}
                          >
                            <Box 
                              component="img" 
                              src={item.icon} 
                              alt={`Step ${index + 1}`} 
                              sx={{ 
                                width: isTablet ? 70 : 90, 
                                height: isTablet ? 70 : 90 
                              }} 
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Grid container spacing={0} justifyContent="center" sx={{ mt: 2, ml: isTablet ? 1 : 2 }}>
                      {stepItems.map((item, index) => (
                        <Grid item xs={3} key={index} sx={{ textAlign: "center" }}>
                          <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{
                              color: item.color,
                              mt: 0,
                              fontSize: isTablet ? '0.85rem' : '1rem'
                            }}
                          >
                            {item.step}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: isTablet ? '0.85rem' : '1.25rem',
                              fontFamily: "Lato, sans-serif",
                              mb: 6
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </WhySellContainer>
      </HeroContainer>

      <ReviewSection />
    </>
  );
};

export default BuyerHub;
