import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import video from "../assets/videos/Selling On The Xchange (3).mp4";
import pointerIcon from "../assets/images/icon-17.png";
import backgroundImg from "../assets/images/welcome_section-bg.png";

const SectionContainer = styled(Box)({
  backgroundColor: '#f5f7fa',
  padding: '5em 0',
  position: "relative",
  overflow: "hidden",
});

const BackgroundContainer = styled(Box)({
  position: "relative",
  paddingTop: "3em",
  paddingBottom: "3em",
  background: `url(${backgroundImg}) no-repeat center`,
  backgroundSize: "cover",
  width: "100%",
  zIndex: 1,
});

const VideoContainer = styled(Box)({
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
});

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

const Underline = styled(Box)({
  borderBottom: '4px solid #f5a623',
  width: '100px',
  marginTop: '5px',
  borderRadius: "5px",
});

const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  maxWidth: "550px"
});

const StyledList = styled(List)({
  padding: 0,
  marginTop: '10px',
});

const StyledListItem = styled(ListItem)({
  padding: '5px 0',
  display: 'flex',
  alignItems: 'start',
});

const SellerInfoSection = () => {
  return (
    <SectionContainer>
      <BackgroundContainer>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            
            {/* Left Side - Video (Same as Screenshot) */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <VideoContainer>
                <video width="100%" height="100%" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoContainer>
            </Grid>

            {/* Right Side - Content (Exactly like Screenshot) */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-start">
              <ContentContainer>
                <HeadingContainer>
                  <PointerIcon src={pointerIcon} alt="Pointer Icon" />
                  <Typography sx={{ fontWeight: 'bold', color: '#f5a623', fontSize: '22px', fontFamily: 'Montserrat' }}>
                    Watch our video
                  </Typography>
                </HeadingContainer>

                <Typography sx={{ fontWeight: 'bold', color: '#222', fontSize: '26px', fontFamily: 'Montserrat', mt: 1 }}>
                  HOW SELLING ON THE XCHANGE MARKETPLACE WORKS
                </Typography>

                <Typography paragraph sx={{ fontSize: '18px', color: '#444', lineHeight: '1.6', fontFamily: 'Montserrat', mt: 1 }}>
                  We make your selling experience hassle-free and straightforward,
                </Typography>

                <StyledList>
                  <StyledListItem>
                    <ListItemText primary="✔ Earn money and grow your business with The XCHANGE MARKETPLACE" />
                  </StyledListItem>
                  <StyledListItem>
                    <ListItemText primary="✔ Gain Exposure & Offer your products to the many visitors who come ready to purchase" />
                  </StyledListItem>
                  <StyledListItem>
                    <ListItemText primary="✔ Promote & market your products, your company/business" />
                  </StyledListItem>
                  <StyledListItem>
                    <ListItemText primary="✔ Leverage this Innovative E-commerce platform to generate cash and sales leads" />
                  </StyledListItem>
                </StyledList>

                <Typography paragraph sx={{ fontSize: '16px', color: '#666', lineHeight: '1.5', fontFamily: 'Montserrat', mt: 2 }}>
                  Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
                </Typography>

              </ContentContainer>
            </Grid>

          </Grid>
        </Container>
      </BackgroundContainer>
    </SectionContainer>
  );
};

export default SellerInfoSection;
