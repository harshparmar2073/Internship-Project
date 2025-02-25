import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Background Image
import backgroundImg from "../assets/images/buy_sell_section_bg.png";

// Icons
import signUpIcon from "../assets/images2/icon-buy-1.png";
import buyIcon from "../assets/images2/icon-buy-3.png";
import shopIcon from "../assets/images2/icon-buy-2.png";
import receiveIcon from "../assets/images2/icon-buy-4.png";
import useIcon from "../assets/images2/icon-buy-5.png";
import listIcon from "../assets/images2/icon-sell-2.png";
import sellIcon from "../assets/images2/icon-sell-3.png";
import shipIcon from "../assets/images2/Ship-it.png";
import getPaidIcon from "../assets/images2/Get-Paid.png";
import buyInnerImage from "../assets/images2/img-buy.png";
import sellInnerImage from "../assets/images2/img-sell.png";
import ReviewSection from "./ReviewSection";

const SectionContainer = styled(Box)({
  background: `url(${backgroundImg}) center/cover no-repeat`,
  padding: "90px 70px 110px",
  textAlign: "center",
  margin: "30px",
});

const InnerImage = styled("img")({
  width: "180px",
  height: "180px",
  marginBottom: "20px",
});

const IconImage = styled("img")({
  width: "70px",
  height: "70px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

const IconsContainer = styled(Box)({
  backgroundColor: "#fff",
  padding: "30px 30px",
  margin: "30px",
  marginTop: "-80px",
  position: "relative",
});

const IconGroup = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  margin: "0 auto",
  width: "fit-content",
  position: "relative",
  top: "-35px",
});

const IconBox = styled(Box)({
  textAlign: "center",
  width: "80px",
});

const IconText = styled(Typography)({
  fontSize: "16px",
  marginTop: "10px",
  color: "#000",
});

const StyledButton = styled(Button)({
  color: "#fff",
  borderRadius: "25px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  padding: "6px 14px",
  fontSize: "12px",
});

const BuySellSection = () => {
  return (
    <Box margin="30px">
      <SectionContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <InnerImage src={buyInnerImage} alt="Buy Illustration" />
            <Typography variant="h4" fontWeight="400" color="#fff">
              <b style={{ color: "#48a068" }}> Buy </b> anytime with
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              THE XCHANGE MARKETPLACE
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <InnerImage src={sellInnerImage} alt="Sell Illustration" />
            <Typography variant="h4" fontWeight="400" color="#fff">
              <b style={{ color: "#fb9d1e" }}> Sell </b> anytime with
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              THE XCHANGE MARKETPLACE
            </Typography>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Icons Section */}
      <IconsContainer>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6}>
            <IconGroup>
              <IconBox>
                <IconImage src={signUpIcon} alt="Sign up" />
                <IconText>Sign up</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={shopIcon} alt="Shop for it" />
                <IconText>Shop for it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={buyIcon} alt="Buy it" />
                <IconText>Buy it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={receiveIcon} alt="Receive it" />
                <IconText>Receive it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={useIcon} alt="Use it" />
                <IconText>Use it</IconText>
              </IconBox>
            </IconGroup>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <StyledButton variant="contained" sx={{ bgcolor: "#48a068" }}>
                  LEARN MORE
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton variant="contained" sx={{ bgcolor: "#fb9d1e" }}>
                  START BUYING
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <IconGroup>
              <IconBox>
                <IconImage src={signUpIcon} alt="Sign up" />
                <IconText>Sign up</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={listIcon} alt="List it" />
                <IconText>List it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={sellIcon} alt="Sell it" />
                <IconText>Sell it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={shipIcon} alt="Ship it" />
                <IconText>Ship it</IconText>
              </IconBox>
              <IconBox>
                <IconImage src={getPaidIcon} alt="Get Paid" />
                <IconText>Get Paid</IconText>
              </IconBox>
            </IconGroup>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <StyledButton variant="contained" sx={{ bgcolor: "#48a068" }}>
                  LEARN MORE
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton variant="contained" sx={{ bgcolor: "#fb9d1e" }}>
                  START SELLING
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </IconsContainer>

      {/* Reviews Section */}
      <Box sx={{ marginTop: "50px" }}>
        <ReviewSection />
      </Box>
    </Box>
  );
};

export default BuySellSection;
