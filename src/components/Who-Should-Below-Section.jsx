import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import sellImg from "../assets/images/banner_rm.png";
import progressImg from "../assets/images/progress-bar.png";
import step1Icon from "../assets/images/sell-pro.png";
import step2Icon from "../assets/images/sell-pro-02.png";
import step3Icon from "../assets/images/sell-pro-03.png";
import step4Icon from "../assets/images/sell-pro-04.png";

const WhyShouldBelowSection = () => {
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
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* First Section */}
      <Box
        component="img"
        src={sellImg}
        alt="Why Sell"
        sx={{
          width: "100%",
          maxWidth: "1400px",
          height: "auto",
          mb: { xs: 4, md: 10 },
        }}
      />

      {/* Second Section */}
      <Box sx={{ width: "100%", maxWidth: "1200px", px: { xs: 2, md: 3 } }}>
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
                "&:hover": { backgroundColor:"black",color:"#fff" },
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
              // Desktop view - With progress bar
              <>
                {/* Step Icons - Adjusted for Better Alignment */}
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

                {/* Step Labels - Adjusted for Proper Spacing */}
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
    </Box>
  );
};

export default WhyShouldBelowSection;