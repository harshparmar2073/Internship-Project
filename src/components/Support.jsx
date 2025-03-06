import React from "react";
import { Container, Box, Button, Grid, Typography, Link } from "@mui/material";
import bannerImg from "../assets/images2/banner-02.png";

function Support() {
  return (
    <Container maxWidth="lg">
      {/* Banner Section */}
      <Grid container sx={{ my: { xs: 4, md: 5 } }}>
        <Grid item xs={12}>
          <Box
            sx={{
              background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImg}) no-repeat center`,
              backgroundSize: { xs: "100% 100%", md: "cover" },
              minHeight: { xs: "40vh", md: "50vh" },
              py: { xs: 4, md: 7 },
              px: { xs: 2, md: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              }}
            >
              THE XCHANGE MARKETPLACE SUPPORT
            </Typography>
            <Box
              sx={{
                mt: { xs: 2, md: 3 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "rgb(248, 158, 35)",
                  px: { xs: 2, md: 3 },
                  borderRadius: "15px",
                  fontSize: { xs: ".8rem", md: "1.3rem" },
                  "&:hover": { backgroundColor: "rgb(230, 140, 30)" },
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
                }}
              >
                Join Us
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Support Overview Section */}
      <Box
        sx={{
          my: { xs: 3, md: 4 },
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: "600",
            mb: { xs: 2, md: 3 },
            letterSpacing: 1,
          }}
        >
          THE XCHANGE MARKETPLACE SUPPORT
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.4,
          }}
        >
          Welcome to the THE XCHANGE MARKETPLACE SUPPORT PAGE! We are here to assist you with any questions or issues you may encounter while using our platform. Your satisfaction is our top priority, and we are committed to providing you with the best possible support experience.
        </Typography>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ my: { xs: 2, md: 3 }, px: { xs: 2, md: 0 } }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            mb: 1,
          }}
        >
          Contact Information
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "15px", md: "17px" }, mb: 1 }}
        >
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:Support@XCHANGEMARKETPLACE.COM"
            underline="hover"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              textDecoration: "underline",
              transition: "color 0.3s",
              "&:hover": { color: "#115293" },
            }}
          >
            Support@XCHANGEMARKETPLACE.COM
          </Link>
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: "15px", md: "17px" } }}>
          <strong>Phone:</strong>{" "}
          <Link
            href="tel:+18447275001"
            underline="hover"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              textDecoration: "underline",
              transition: "color 0.3s",
              "&:hover": { color: "#115293" },
            }}
          >
            +1-844-727-5001
          </Link>
          <br />
          Our dedicated support team is available from Monday to Friday, 9:00 AM to 6:00 PM (UTC-5).
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ my: { xs: 2, md: 3 }, px: { xs: 2, md: 0 } }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            mb: 1,
            borderTop: "1px solid rgba(0,0,0,0.2)",
            mt:1,
            pt:1
          }}
        >
          Frequently Asked Questions (FAQs)
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          Before reaching out to our support team, you may find answers to common questions in our FAQ section. Here are some frequently asked questions:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            mb: 1,
            borderTop: "1px solid rgba(0,0,0,0.2)",
            mt:1,
            pt:1
          }}
        >
          Contacting Support
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          If you cannot find the answers you need in our FAQ section or have an issue that requires our assistance, please don't hesitate to reach out to our support team via email or phone. Our support agents are trained to provide prompt and helpful responses to your inquiries.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            mb: 1,
            borderTop: "1px solid rgba(0,0,0,0.2)",
            mt:1,
            pt:1
          }}
        >
          Reporting Issues
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            mb: 1,
            lineHeight: 1.6,
          }}
        >
          To help us assist you more effectively, please provide the following information when reporting an issue:
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: { xs: 2, md: 4 },
            fontSize: { xs: "15px", md: "17px" },
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          <li>Your username and registered email address.</li>
          <li>A detailed description of the problem or question.</li>
          <li>Any relevant order or transaction IDs.</li>
          <li>Screenshots or error messages (if applicable).</li>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          We strive to resolve your issues as quickly as possible and appreciate your cooperation in providing the necessary information.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            mb: 1,
            borderTop: "1px solid rgba(0,0,0,0.2)",
            mt:1,
            pt:1
          }}
        >
          Feedback
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          We value your feedback and suggestions for improving THE XCHANGE MARKETPLACE. If you have any ideas or comments on how we can enhance your experience, please feel free to share them with us.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.6,
          }}
        >
          Thank you for choosing THE XCHANGE MARKETPLACE. We look forward to serving you and ensuring that your experience is smooth and enjoyable. Your trust and satisfaction are of utmost importance to us.
        </Typography>
      </Box>

      {/* Closing Signature */}
      <Box
        sx={{
          my: { xs: 3, md: 4 },
          textAlign: "left",
          px: { xs: 2, md: 0 },
          borderTop: "1px solid rgba(0,0,0,0.2)",
          pt: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "600",
          }}
        >
          Sincerely, The XCHANGE MARKETPLACE SUPPORT TEAM
        </Typography>
      </Box>
    </Container>
  );
}

export default Support;
