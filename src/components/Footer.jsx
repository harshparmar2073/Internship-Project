import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import backgroundImage from "../assets/images/bg-3.jpg";

const Footer = () => {
  const sections = [
    { 
      title: "THE XCHANGE MARKETPLACE COMPANY", 
      links: [
        { name: "Home", url: "https://shop.thexchangemarketplace.com/home" },
        { name: "About Us", url: "https://shop.thexchangemarketplace.com/about-us-discover-our-unique-story-at-the-xchange-marketplace" },
        { name: "Team", url: "https://shop.thexchangemarketplace.com/xchange-marketplace-team-meet-the-marketing-experts-global-content-the-xchange-marketplace" }, 
        { name: "Careers", url: "https://shop.thexchangemarketplace.com/career-opportunities-the-xchange-marketplace" },
        { name: "Advertise with Us", url: "https://shop.thexchangemarketplace.com/advertise-with-us-xchange-marketplace" }
      ] 
    },
    { 
      title: "SHOP ON THE XCHANGE MARKETPLACE", 
      links: [
        { name: "Shop by Category", url: "https://shop.thexchangemarketplace.com/explore-trendy-categories" },
        { name: "Shop by Brand", url: "https://shop.thexchangemarketplace.com/" },
        { name: "Shop by Seller", url: "https://shop.thexchangemarketplace.com/faq-get-answers-to-your-burning-questions-brandname" },
        { name: "Shop by Price", url: "https://shop.thexchangemarketplace.com/" },
        { name: "Shop by Location", url: "https://shop.thexchangemarketplace.com/" }
      ] 
    },
    { 
      title: "BUY/SELL ON THE XCHANGE MARKETPLACE", 
      links: [
        { name: "How to Sell", url: "https://shop.thexchangemarketplace.com/how-to-sell-ultimate-guide-for-successful-sales-brandname" },
        { name: "Sell Your Equipment", url: "https://shop.thexchangemarketplace.com/https/thexchangemarketplace.com/how-to-sell-ultimate-guide-for-successful-sales-brandname" },
        { name: "My Account", url: "/login" },
        { name: "Shipping", url: "https://shop.thexchangemarketplace.com/shipping-equipment-xchange-marketplace-enhance-your-shipping-experience-with-top-quality-gear" } 
      ] 
    },
  ];

  const supportSections = [
    {
      title: "LEARN ABOUT THE XCHANGE MARKETPLACE",
      links: [
        { name: "Service Connect", url: "https://shop.thexchangemarketplace.com/industrial-testing-equipment-service-providers-xrf-oes-analysis-the-xrf-company" }, 
        { name: "Rent", url: "https://shop.thexchangemarketplace.com/rent-section-explore-schlitz-bicycle-rights-lo-fi-style-everyday-carry-essentials-by-schlitz" },
        { name: "Lease", url: "https://shop.thexchangemarketplace.com/lease-on-the-xchange-marketplace" },
        { name: "Terms and Conditions", url: "https://shop.thexchangemarketplace.com/terms-conditions-the-xchange-marketplace" },
        { name: "Privacy Policy", url: "https://shop.thexchangemarketplace.com/privacy-policy-the-xchange-marketplace" }
      ]
    },
    {
      title: "THE XCHANGE MARKETPLACE SUPPORT",
      links: [
        { name: "Support / Help", url: "https://shop.thexchangemarketplace.com/support/help" },
        { name: "FAQs", url: "https://shop.thexchangemarketplace.com/faqs-get-answers-to-your-burning-questions-schlitz-brand" },
        { name: "Contact", url: "https://shop.thexchangemarketplace.com/contact-us-get-in-touch-with-schlitz-for-all-your-questions" },

      ]
    }
  ];

  // Function to handle link navigation
  const handleLinkClick = (e, url) => {
    e.preventDefault();
    window.location.href = url;
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "fit",
          backgroundPosition: "center",
          py: 2,
          color: "white",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px",
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "1100px", mx: "auto", px: 2, textAlign: "center" }}>
          {/* First Row: Sections */}
          {sections.map((section, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <Box sx={{ position: "relative", display: "inline-block", pb: 1 }}>
                <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{ pb: 0.5 }}>
                  {section.title}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-3px",
                    width: "80px",
                    height: "2px",
                    backgroundColor: "#ffa200",
                    borderRadius: "2px",
                    transition: "all 0.5s ease-in",
                  }}
                />
              </Box>
              <Box sx={{ pt: 1 }}>
                {section.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    underline="none"
                    onClick={(e) => item.url !== "#" && handleLinkClick(e, item.url)}
                    sx={{
                      color: "white",
                      display: "block",
                      mb: 1.5,
                      transition: "all 0.5s ease-in",
                      "&:hover": { color: "orange" },
                      cursor: "pointer",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
          {/* Second Row: Support Sections + Join Us & Follow Us */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Support Sections */}
            {supportSections.map((section, index) => (
              <Grid key={index} item xs={12} sm={4}>
                <Box sx={{ position: "relative", display: "inline-block", pb: 1 }}>
                  <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{ pb: 0.5 }}>
                    {section.title}
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      bottom: "-3px",
                      width: "80px",
                      height: "2px",
                      backgroundColor: "#ffa200",
                      borderRadius: "2px",
                      transition: "all 0.5s ease-in",
                    }}
                  />
                </Box>
                <Box sx={{ pt: 1 }}>
                  {section.links.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      underline="none"
                      onClick={(e) => item.url !== "#" && handleLinkClick(e, item.url)}
                      sx={{
                        color: "white",
                        display: "block",
                        mb: 1.5,
                        transition: "all 0.5s ease-in",
                        "&:hover": { color: "orange" },
                        cursor: "pointer",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}

            {/* Join Us & Follow Us Section */}
            <Grid item xs={12} sm={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffb400",
                  color: "#fff",
                  fontWeight: "500",
                  borderRadius: "20px",
                  px: 3,
                  py: 0.5,
                  fontSize: "12px",
                  transition: "all 1.5s ease-in",
                  "&:hover": { backgroundColor: "#e0a600" },
                }}
              >
                JOIN US
              </Button>

              <Box>
                <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{ pb: 0.5 }}>
                  FOLLOW US
                </Typography>
                <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
                  <Link href="#" sx={{ color: "white", transition: "all 0.5s ease-in", "&:hover": { color: "orange" } }}>
                    <FacebookIcon fontSize="small" />
                  </Link>
                  <Link href="#" sx={{ color: "white", transition: "all 0.5s ease-in", "&:hover": { color: "orange" } }}>
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="#" sx={{ color: "white", transition: "all 0.5s ease-in", "&:hover": { color: "orange" } }}>
                    <TwitterIcon fontSize="small" />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Copyright Section */}
      <Box
        sx={{
          backgroundColor: "black",
          py: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            mx: "auto",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Typography variant="body2">
            Copyright © {new Date().getFullYear()} THE XCHANGE MARKETPLACE. All Rights Reserved.
            Website &amp; App Powered By K Business Solutions Inc.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;