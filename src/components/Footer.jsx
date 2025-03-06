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
      links: ["Home", "About Us", "Team", "Careers", "Advertise with Us"] 
    },
    { 
      title: "SHOP ON THE XCHANGE MARKETPLACE", 
      links: ["Shop by Category", "Shop by Brand", "Shop by Seller", "Shop by Price", "Shop by Location"] 
    },
    { 
      title: "BUY/SELL ON THE XCHANGE MARKETPLACE", 
      links: ["How to Sell", "Sell Your Equipment", "My Account", "Shipping"] 
    },
  ];

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
                    href={
                      item === "My Account"
                        ? "/login"
                        : section.title === "SHOP ON THE XCHANGE MARKETPLACE"
                          ? "/shop"
                          : "#"
                    }
                    underline="none"
                    sx={{
                      color: "white",
                      display: "block",
                      mb: 1.5,
                      transition: "all 0.5s ease-in",
                      "&:hover": { color: "orange" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
          {/* Second Row: Support Sections + Join Us & Follow Us */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Support Sections */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ position: "relative", display: "inline-block", pb: 1 }}>
                <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{ pb: 0.5 }}>
                  LEARN ABOUT THE XCHANGE MARKETPLACE
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
                {["Service Connect", "Rent", "Lease", "Terms and Conditions", "Privacy Policy"].map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    underline="none"
                    sx={{
                      color: "white",
                      display: "block",
                      mb: 1.5,
                      transition: "all 0.5s ease-in",
                      "&:hover": { color: "orange" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ position: "relative", display: "inline-block", pb: 1 }}>
                <Typography variant="h6" fontWeight="bold" fontSize="12px" sx={{ pb: 0.5 }}>
                  THE XCHANGE MARKETPLACE SUPPORT
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
                {["Support / Help", "FAQs", "Contact"].map((item, i) => (
                  <Link
                    key={i}
                    href={item === "Support / Help" ? "/support" : "#"}
                    underline="none"
                    sx={{
                      color: "white",
                      display: "block",
                      mb: 1.5,
                      transition: "all 0.5s ease-in",
                      "&:hover": { color: "orange" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

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
