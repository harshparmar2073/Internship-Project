import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  useMediaQuery, 
  useTheme 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Images
import backgroundImg from "../assets/images/question.png"; 
import illustration1 from "../assets/images/sell-icon-01.png";
import illustration2 from "../assets/images/sell-icon-02.png";
import illustration3 from "../assets/images/sell-icon-03.png";
import illustration4 from "../assets/images/sell-icon-04.png";
import heroImage from "../assets/images/sell-img-3.png"; 
import progressImg from "../assets/images/progress-bar.png";
import step1Icon from "../assets/images/sell-pro.png";
import step2Icon from "../assets/images/sell-pro-02.png";
import step3Icon from "../assets/images/sell-pro-03.png";
import step4Icon from "../assets/images/sell-pro-04.png";
// Add your new overlap image here
import overlapImage from "../assets/images/banner_rm.png"

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  padding: "4rem 0",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0",
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

const Dot = styled("span")({
  height: "8px",
  width: "8px",
  backgroundColor: "#f5a623",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "10px",
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

const WhoShouldSellContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "3rem 2rem",
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "left",
  position: "relative",
  top: "-50px",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    top: "-30px",
    padding: "2rem 1.5rem",
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

const IconTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
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

function WhoShouldSellSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const stepItems = [
    { step: "STEP 1", text: "Create Your Store", color: "#48a068", icon: step1Icon },
    { step: "STEP 2", text: "Upload Pictures", color: "#4fbfb9", icon: step2Icon },
    { step: "STEP 3", text: "Upload Video", color: "orange", icon: step3Icon },
    { step: "STEP 4", text: "List Your Product", color: "#ff9d00", icon: step4Icon },
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* SELLING ON THE XCHANGE Section */}
        <SellingContainer>
          <Grid container alignItems="center" spacing={4}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.75rem",
                  },
                })}
              >
                SELLING ON <span style={{ color: "#3ea964" }}>THE XCHANGE</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                Sell online at your leisure. Make money selling new, used, and pre-owned test equipment.
              </Typography>

              {/* Bullet Point Lists */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <BulletPoints><Dot /> Professional Online Stores</BulletPoints>
                  <BulletPoints><Dot /> Affordable Programs/Plans</BulletPoints>
                  <BulletPoints><Dot /> Sell Products Instantly</BulletPoints>
                  <BulletPoints><Dot /> Generate Quote Request</BulletPoints>
                  <BulletPoints><Dot /> Message and Quote Center</BulletPoints>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BulletPoints><Dot /> Support from the Xchange Team</BulletPoints>
                  <BulletPoints><Dot /> Rent / Lease</BulletPoints>
                  <BulletPoints><Dot /> Access Network of Service Providers</BulletPoints>
                  <BulletPoints><Dot /> Create Product Videos</BulletPoints>
                  <BulletPoints><Dot /> Perform Virtual Demonstrations</BulletPoints>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={6} textAlign="center">
              <SellingImage src={heroImage} alt="Selling on The Xchange" />
            </Grid>
          </Grid>
        </SellingContainer>

        {/* WHO SHOULD SELL Section */}
        <WhoShouldSellContainer>
          <Grid container alignItems="center" spacing={3}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} sm={12} md={4} sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography 
                variant="h5" 
                fontWeight="bold" 
                color="#3ea964" 
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.25rem",
                    textAlign: "center",
                  },
                })}
              >
                WHO SHOULD SELL <span style={{ color: "#000" }}>ON THE XCHANGE</span>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <CTAButton>Learn More</CTAButton>
              </Box>
            </Grid>

            {/* Right Side - Image Grid */}
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={3} justifyContent="center">
                {[
                  { title: "Testing Professionals", img: illustration1 },
                  { title: "Industrial & Scientific Companies", img: illustration2 },
                  { title: "Equipment Manufacturers & Resellers", img: illustration3 },
                  { title: "Consumers", img: illustration4 },
                ].map((item, index) => (
                  <Grid 
                    item 
                    xs={6} 
                    sm={6} 
                    md={3} 
                    key={index} 
                    sx={{ 
                      textAlign: "center",
                      mb: { xs: 2, md: 0 },
                      px: { xs: 1, md: 2 }
                    }}
                  >
                    <StyledImage src={item.img} alt={item.title} />
                    <IconTitle variant="body1">
                      {item.title}
                    </IconTitle>
                    <LearnMoreButton 
                      size="small" 
                      endIcon={
                        <ArrowForwardIosIcon 
                          sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }} 
                        />
                      }
                    >
                      Learn more
                    </LearnMoreButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </WhoShouldSellContainer>

        {/* Updated Overlap Image Section */}
        <Box
          component="img"
          src={overlapImage}
          alt="Why Buy"
          sx={{
            width: "120%",
            maxWidth: "2000px",
            height: "auto",
            position: "relative",
            top: "-100px", 
            left: "50%",
            transform: "translateX(-50%)",
            mb: { xs: 2, md: 8 },
          }}
        />

        {/* HOW TO SELL Section */}
        <Box sx={{ width: "100%", maxWidth: "1200px", px: { xs: 2, md: 3 }, mt: 4 }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            {/* Left Side - Text & Button */}
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 3, md: 0 } }}>
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                color="#48a068"
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                HOW TO SELL
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
                  "&:hover": { backgroundColor:"black", color:"#fff" },
                  color:"#fff",
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

            {/* Right Side - Stepper */}
            <Grid item xs={12} md={8} sx={{ textAlign: "center", position: "relative" }}>
              {/* Progress Bar - Hidden on Mobile */}
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

              {/* Mobile and Desktop views for steps */}
              {isMobile ? (
                // Mobile view - 2 icons per row
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
                        <Box 
                          component="img" 
                          src={item.icon} 
                          alt={`Step ${index + 1}`} 
                          sx={{ width: 50, height: 50 }} 
                        />
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
                // Desktop view - With progress bar
                <>
                  {/* Step Icons */}
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
                            width: isTablet ? 70 : 90,
                            height: isTablet ? 70 : 90,
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
                              width: isTablet ? 50 : 70, 
                              height: isTablet ? 50 : 70 
                            }} 
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Step Labels */}
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
                            fontFamily: "Lato, sans-serif" 
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
      </Container>
    </SectionContainer>
  );
}

export default WhoShouldSellSection;
