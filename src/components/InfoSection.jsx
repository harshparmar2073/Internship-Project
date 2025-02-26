import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import video from "../assets/videos/Welcome to the Xchange Marketplace (1).mp4";
import pointerIcon from "../assets/images/icon-17.png";
import backgroundImg from "../assets/images/welcome_section-bg.png";
import beforeImg from "../assets/images/welcome-bg-img.png";

const SectionContainer = styled(Box)({
  backgroundColor: '#f5f7fa',
  paddingTop: 0,
  position: "relative",
  overflow: "hidden",
});

// Updated BackgroundContainer to match original CSS
const BackgroundContainer = styled(Box)({
  position: "relative",
  paddingTop: "6em",
  paddingBottom: "6.5em",
  background: `url(${backgroundImg}) no-repeat 50% -50px`,
  backgroundSize: "auto", // Changed to auto instead of contain
  width: "100%",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    left: "4em",  
    bottom: "2em",  
    background: `url(${beforeImg}) no-repeat 0 0`,
    width: "5em",  
    height: "5em",
    zIndex: -1,
  }
});

const VideoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '650px',
  height: '400px',
  border: '4px solid #4aba70',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#000',
  zIndex: 2,
});

const PointerIcon = styled('img')({
  width: '45px',
  height: '45px',
  marginBottom: '5px'
});

const HeadingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '20px',
});

const Underline = styled(Box)({
  borderBottom: '8px solid #f5a623',
  width: '120px',
  marginTop: '5px',
  borderRadius: "10px",
});

const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 2, 
});

const InfoSection = () => {
  return (
    <SectionContainer>
      <BackgroundContainer>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            
            {/* Left Side - Video */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <VideoContainer>
                <video width="100%" height="100%" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoContainer>
            </Grid>

            {/* Right Side - Content */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-start">
              <ContentContainer>
                <HeadingContainer>
                  <PointerIcon src={pointerIcon} alt="Pointer Icon" />
                  <Typography sx={{ fontWeight: 'bold', color: '#f5a623', fontSize: '22px', fontFamily: 'Montserrat' }}>
                    Welcome to
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', color: '#48a068', fontSize: '36px', fontFamily: 'Montserrat' }}>
                    THE XCHANGE
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', color: '#48a068', fontSize: '36px', fontFamily: 'Montserrat' }}>
                    MARKETPLACE
                  </Typography>
                  <Underline />
                </HeadingContainer>

                {/* Content */}
                <Typography paragraph sx={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'Montserrat', mb: 2 }}>
                  Developed by Scientists and Engineers, XCHANGEMarketplace.com is an independent subscription-based
                  marketplace for buying and selling new, used, ex-demonstration, and refurbished testing equipment and supplies. 
                  Our aim is to offer a resale platform that specifically targets the underserved industrial and academic sectors.
                </Typography>

                <Typography paragraph sx={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'Montserrat' }}>
                  Our founders have more than 100 years of experience in the instrumentation industry, connecting testing
                  personnel to the equipment and supplies they need. Our platform is a dynamic and innovative online
                  marketplace that is one of the only ones to support uploaded video clips, enhancing users' experience.
                </Typography>
              </ContentContainer>
            </Grid>
          </Grid>
        </Container>
      </BackgroundContainer>
    </SectionContainer>
  );
};

export default InfoSection;
