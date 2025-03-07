import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import video from "../assets/videos/Selling On The Xchange (3).mp4";
import pointerIcon from "../assets/images/icon-17.png";
import backgroundImg from "../assets/images/welcome_section-bg.png";

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

const ContentContainer = styled(Box)(({ theme }) => ({
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

const SellerInfoSection = () => {
  return (
    <SectionContainer>
      <BackgroundContainer>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            
            {/* Left Side - Video */}
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
                  textAlign: { xs: 'left', md: 'left' },
                  marginBottom: 0,
                  marginLeft:6
                }}>
                  Our aim is to offer a resale platform which specifically targets the underserved industrial and academic sectors.
                </Typography>
              </AimTextContainer>
            </Grid>

            {/* Right Side - Content */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }}>
              <ContentContainer sx={{ textAlign: { xs: 'center', md: 'left' } }}>
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
                  HOW SELLING ON THE XCHANGE MARKETPLACE WORKS
                </Typography>

                <Typography paragraph sx={{ 
                  fontSize: { xs: '16px', md: '18px' }, 
                  color: '#444', 
                  lineHeight: '1.6', 
                  fontFamily: 'Montserrat', 
                  mt: 1,
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  We make your selling experience hassle-free and straightforward.
                </Typography>

                <StyledList>
                  <StyledListItem>
                    <BulletDot>•</BulletDot>
                    <ListItemText primary="Earn money and grow your business with The XCHANGE MARKETPLACE" />
                  </StyledListItem>
                  <StyledListItem>
                    <BulletDot>•</BulletDot>
                    <ListItemText primary="Gain exposure & offer your products to the many visitors who come ready to purchase" />
                  </StyledListItem>
                  <StyledListItem>
                    <BulletDot>•</BulletDot>
                    <ListItemText primary="Promote & market your products, your company/business" />
                  </StyledListItem>
                  <StyledListItem>
                    <BulletDot>•</BulletDot>
                    <ListItemText primary="Leverage this innovative e-commerce platform to generate cash and sales leads" />
                  </StyledListItem>
                </StyledList>
              </ContentContainer>
            </Grid>
          </Grid>
        </Container>
      </BackgroundContainer>
    </SectionContainer>
  );
};

export default SellerInfoSection;
