import React from 'react';
import { Box, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import bgImg from "../assets/images/main-bg3.jpg";
import LoginComponent from "./Login.jsx";
import SignupComponent from "./Signup.jsx";

const HEADER_HEIGHT = 80;
const FOOTER_HEIGHT = 60;

const PageWrapper = styled(Box)(({ theme }) => ({
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
    position: "relative",
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%", 
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    overflow: "hidden",
  }));
  
  const StyledContainer = styled(Paper)(({ theme }) => ({
    minHeight: "75vh", 
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    marginTop: "20vh",
  }));
  
  
  
function CombinePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageWrapper>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: isMobile ? '50vh' : '100%' }}>
          <StyledContainer>
            <Box sx={{ maxWidth: '400px', width: '100%' }}>
              <LoginComponent />
            </Box>
          </StyledContainer>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: isMobile ? '50vh' : '100%' }}>
          <StyledContainer>
            <Box sx={{ maxWidth: '400px', width: '100%' }}>
              <SignupComponent />
            </Box>
          </StyledContainer>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default CombinePage;
