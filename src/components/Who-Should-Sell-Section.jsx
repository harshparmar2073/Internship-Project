import { Box, Typography, Container, Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import backgroundImg from "../assets/images/question.png"; 
import illustration1 from "../assets/images/sell-icon-01.png";
import illustration2 from "../assets/images/sell-icon-02.png";
import illustration3 from "../assets/images/sell-icon-03.png";
import illustration4 from "../assets/images/sell-icon-04.png";
import heroImage from "../assets/images/sell-img-3.png"; 
import lastImage from "../assets/images/banner_rm.png";

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f6f8",
  padding: "4rem 0",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0", // Reduce padding on mobile
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
    top: "20px", // Adjust position for small screens
    maxWidth: "350px", // Smaller image on mobile
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
    fontSize: "14px", // Smaller font on mobile
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

const WhoShouldSellContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "3rem 2rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "left",
  position: "relative",
  top: "-50px",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    top: "-30px", // Adjust for mobile
    padding: "2rem 1.5rem", // Increased horizontal padding
  },
}));

// Explicitly handling the background image visibility with both theme breakpoints and display property
const QuestionMarkImage = styled("img")(({ theme, isMobile }) => ({
  position: "absolute",
  left: "2%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "150px",
  opacity: 0.1,
  zIndex: 0,
  display: isMobile ? "none" : "block", // Use prop to control visibility
  [theme.breakpoints.down("md")]: {
    display: "none", // Ensure it's hidden on smaller screens
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
    maxWidth: "70px", // Reduce size on mobile
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

function WhoShouldSellSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* SELLING ON THE XCHANGE Section */}
        <SellingContainer>
          <Grid container alignItems="center" spacing={4}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.75rem",
                },
              })}>
                SELLING ON <span style={{ color: "#3ea964" }}>THE XCHANGE</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                Sell online at your leisure. Make money selling new, used, and pre-owned test equipment.
              </Typography>

              {/* Bullet Point Lists */}
              <BulletPointsContainer container spacing={3}>
                <BulletPointsColumn item xs={12} sm={6}>
                  <BulletPoints>
                    <Dot /> Professional Online Stores
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Affordable Programs/Plans
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Sell Products Instantly
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Generate Quote Request
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Message and Quote Center
                  </BulletPoints>
                </BulletPointsColumn>
                <BulletPointsColumn item xs={12} sm={6}>
                  <BulletPoints>
                    <Dot /> Support from the Xchange Team
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Rent / Lease
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Access Network of Service Providers
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Create Product Videos
                  </BulletPoints>
                  <BulletPoints>
                    <Dot /> Perform Virtual Demonstrations
                  </BulletPoints>
                </BulletPointsColumn>
              </BulletPointsContainer>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={6} textAlign="center">
              <SellingImage src={heroImage} alt="Selling on The Xchange" />
            </Grid>
          </Grid>
        </SellingContainer>

        {/* WHO SHOULD SELL Section */}
        <WhoShouldSellContainer>
          {/* Only render the question mark image if not on mobile */}
          {!isMobile && (
            <QuestionMarkImage 
              src={backgroundImg} 
              alt="Question Mark" 
              isMobile={isMobile} 
            />
          )}
          
          <Grid container alignItems="center" spacing={3}>
            {/* Left Side - Text Content */}
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

            {/* Right Side - Image Grid */}
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
      </Container>
    </SectionContainer>
  );
}

export default WhoShouldSellSection;