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
  backgroundSize: "contain", // ✅ Makes the image smaller
  backgroundPosition: "center center",
  backgroundAttachment: "fixed", // Keeps the image in place
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StyledContainer = styled(Paper)(({ theme }) => ({
  minHeight: "75vh",
  width: "90%",
  maxWidth: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(8px)",
  boxShadow: theme.shadows[5],
  overflowY: "hidden",
}));

function CombinePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageWrapper>
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{ minHeight: "100%", width: "100%", paddingBottom: 2 }}
      >
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ display: 'flex', justifyContent: 'center', paddingBottom: isMobile ? 3 : 0 }}
        >
          <StyledContainer>
            <Box sx={{ width: "100%" }}>
              <LoginComponent />
            </Box>
          </StyledContainer>
        </Grid>

        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ display: 'flex', justifyContent: 'center', paddingTop: isMobile ? 3 : 0 }}
        >
          <StyledContainer>
            <Box sx={{ width: "100%" }}>
              <SignupComponent />
            </Box>
          </StyledContainer>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default CombinePage;
