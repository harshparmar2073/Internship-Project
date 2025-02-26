import React from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    rating: 5,
    title: "Fantastic Experience !",
    text: "I have started using the XCHANGE MARKETPLACE and it has consistently exceeded my expectations. The user interface is intuitive, making transactions smooth and hassle-free.",
    author: "Cassandra Marie Thornton",
  },
  {
    rating: 4,
    title: "Great Platform",
    text: "Overall, my experience with this exchange marketplace has been positive. The variety of options available for trading is impressive, and the platform is easy to navigate.",
    author: "Elijah Jackson Bennett",
  },
  {
    rating: 5,
    title: "Top-Notch Security",
    text: "Security is my top priority when it comes to exchange marketplaces, and this platform doesn't disappoint. The two-factor authentication and encryption measures in place provide a strong sense of confidence.",
    author: "Olivia Grace Henderson",
  },
  {
    rating: 5,
    title: "Excellent Support",
    text: "The customer support team is very responsive and helpful. I had an issue with a transaction, and they resolved it quickly.",
    author: "Daniel Robertson",
  },
  {
    rating: 4,
    title: "User-Friendly Interface",
    text: "This exchange marketplace is very easy to use. The UI is intuitive, and I have had no trouble navigating through the platform.",
    author: "Sophia Martinez",
  },
];

const ReviewSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const arrowStyles = {
    fontSize: isMobile ? "40px" : "65px",
    color: "#333",
    cursor: "pointer",
    background: "#fff",
    borderRadius: "50%",
    padding: isMobile ? "10px" : isTablet ? "15px" : "22px",
    boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.15)",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    display: isMobile ? "none" : "block", // Hide arrows on mobile
  };

  const CustomPrevArrow = ({ onClick }) => (
    <ArrowBackIos 
      onClick={onClick} 
      style={{ 
        ...arrowStyles, 
        left: isMobile ? "0px" : isTablet ? "-30px" : "-60px" 
      }} 
    />
  );

  const CustomNextArrow = ({ onClick }) => (
    <ArrowForwardIos 
      onClick={onClick} 
      style={{ 
        ...arrowStyles, 
        right: isMobile ? "0px" : isTablet ? "-30px" : "-60px" 
      }} 
    />
  );

  const settings = {
    dots: isMobile, // Show dots on mobile instead of arrows
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f9f9f9",
        py: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient at Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px", // Adjust height as needed
          background: "linear-gradient(to top, #f5f5fe, rgba(245, 245, 254, 0))",
          pointerEvents: "none",
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ 
          fontFamily: "Montserrat, sans-serif", 
          textAlign: "center", 
          mb: 4,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          px: 2
        }}
      >
        RECENT REVIEWS FROM BUYERS AND SELLERS
      </Typography>

      <Box sx={{ 
        width: "100%", 
        maxWidth: "1250px", 
        mx: "auto", 
        px: { xs: 2, sm: 3, md: 6 },
        ".slick-list": {
          overflow: { xs: "visible", md: "hidden" }
        }
      }}>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
                px: { xs: 1, md: 1.5 }
              }}
            >
              <Card
                sx={{
                  bgcolor: "#ffffff",
                  borderRadius: "12px",
                  p: { xs: 2, md: 3 },
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  width: { xs: "100%", sm: "330px", md: "360px" },
                  height: { xs: "auto", md: "400px" },
                  minHeight: { xs: "350px", md: "400px" },
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#ffb400", fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                    ))}
                  </Box>
                  <Typography 
                    variant="h6" 
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                  >
                    {review.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      my: 2,
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      lineHeight: 1.6
                    }}
                  >
                    {review.text}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                  >
                    {review.author}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ReviewSection;