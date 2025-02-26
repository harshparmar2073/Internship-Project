import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import backgroundImg from "../assets/images/question.png"; 
import illustration1 from "../assets/images/sell-icon-01.png";
import illustration2 from "../assets/images/sell-icon-02.png";
import illustration3 from "../assets/images/sell-icon-03.png";
import illustration4 from "../assets/images/sell-icon-04.png";
import heroImage from "../assets/images/sell-img-3.png"; // Hero image

const SectionContainer = styled(Box)({
  backgroundColor: "#f5f7fa",
  padding: "4rem 0",
  position: "relative",
});

const SellingContainer = styled(Box)({
  textAlign: "left",
  marginBottom: "3rem",
});

const SellingImage = styled("img")({
    width: "120%", // Increase size
    maxWidth: "600px", // Adjust as needed
    height: "auto",
    display: "block",
    margin: "0 auto",
    position: "relative",
    top: "40px", // Move down to overlap the next section
    zIndex: 1, // Make sure it overlaps properly
  });
  

const BulletPointsContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
});

const BulletPointsColumn = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", 
});

const BulletPoints = styled(Typography)({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  flexGrow: 1, // Ensures both columns have equal height
});

const Dot = styled("span")({
  height: "8px",
  width: "8px",
  backgroundColor: "#f5a623",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "10px",
});

const WhoShouldSellContainer = styled(Box)({
    backgroundColor: "#fff",
    padding: "3rem 2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
    position: "relative",
    top: "-50px", // Move up so hero image overlaps
    zIndex: 2, 
  });  

const QuestionMarkImage = styled("img")({
  position: "absolute",
  left: "2%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "150px",
  opacity: 0.1,
  zIndex: 0,
});

const ContentBox = styled(Box)({
  position: "relative",
  zIndex: 2,
});

const CTAButton = styled(Button)({
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
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "120px",
  marginBottom: "10px",
});

const WhoShouldSellSection = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        
        {/* SELLING ON THE XCHANGE Section */}
        <SellingContainer>
          <Grid container alignItems="center" spacing={4}>
            
            {/* Left Side - Text Content */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" fontWeight="bold">
                SELLING ON <span style={{ color: "#3ea964" }}>THE XCHANGE</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                Sell online at your leisure. Make money selling new, used, and pre-owned test equipment.
              </Typography>

              {/* Bullet Point Lists - Ensuring Equal Alignment */}
              <BulletPointsContainer container spacing={3}>
                <BulletPointsColumn item xs={6}>
                  <BulletPoints><Dot /> Professional Online Stores</BulletPoints>
                  <BulletPoints><Dot /> Affordable Programs/Plans</BulletPoints>
                  <BulletPoints><Dot /> Sell Products Instantly</BulletPoints>
                  <BulletPoints><Dot /> Generate Quote Request</BulletPoints>
                  <BulletPoints><Dot /> Message and Quote Center</BulletPoints>
                </BulletPointsColumn>
                <BulletPointsColumn item xs={6}>
                  <BulletPoints><Dot /> Support from the Xchange Team</BulletPoints>
                  <BulletPoints><Dot /> Rent / Lease</BulletPoints>
                  <BulletPoints><Dot /> Access Network of Service Providers</BulletPoints>
                  <BulletPoints><Dot /> Create Product Videos</BulletPoints>
                  <BulletPoints><Dot /> Perform Virtual Demonstrations</BulletPoints>
                </BulletPointsColumn>
              </BulletPointsContainer>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} sm={6} textAlign="center">
              <SellingImage src={heroImage} alt="Selling on The Xchange" />
            </Grid>
          </Grid>
        </SellingContainer>

        {/* WHO SHOULD SELL Section */}
        <WhoShouldSellContainer>
          {/* Background Question Mark Image */}
          <QuestionMarkImage src={backgroundImg} alt="Question Mark" />

          <Grid container alignItems="center" spacing={3}>
            
            {/* Left Side - Text Content */}
            <Grid item xs={12} sm={4}>
              <ContentBox>
                <Typography variant="h5" fontWeight="bold" color="#3ea964">
                  WHO SHOULD SELL <span style={{ color: "#000" }}>ON THE XCHANGE</span>
                </Typography>
                <CTAButton>Learn More</CTAButton>
              </ContentBox>
            </Grid>

            {/* Right Side - Image Grid */}
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2} justifyContent="center">
                {[
                  { title: "Testing Professionals", img: illustration1, link: "#" },
                  { title: "Industrial & Scientific Companies", img: illustration2, link: "#" },
                  { title: "Equipment Manufacturers & Resellers", img: illustration3, link: "#" },
                  { title: "Consumers", img: illustration4, link: "#" },
                ].map((item, index) => (
                  <Grid item xs={6} sm={3} key={index} textAlign="center">
                    <StyledImage src={item.img} alt={item.title} />
                    <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
                    <Button size="small" sx={{ color: "#3ea964", textTransform: "none" }} endIcon={<ArrowForwardIosIcon />}>
                      Learn more
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </WhoShouldSellContainer>
      </Container>
    </SectionContainer>
  );
};

export default WhoShouldSellSection;
