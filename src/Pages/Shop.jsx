import React from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FeaturedProduct from "../components/FeaturedProduct";

const Shop = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2, pb: 6 }}>
      {/* Featured Products Heading */}
      <Typography variant="h5" fontWeight="bold">
        FEATURED PRODUCTS
      </Typography>
      <Box
        sx={{
          width: 250,
          height: 3,
          backgroundColor: "#ffc91f",
          mx: "auto",
          my: 1,
        }}
      />

      {/* No Products Message */}
      <Box sx={{ textAlign: "left", ml: "5%", mt: 2 }}>
        <Typography variant="h5" color="textprimary">
          No Products
        </Typography>
      </Box>

      {/* Search Section */}
      <Box
        sx={{
          backgroundColor: "#48a068",
          py: 4,
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 10,
            overflow: "hidden",
            width: { xs: "90%", sm: "70%", md: "50%" },
            height: 55,
          }}
        >
          <TextField
            placeholder="Search THE XCHANGE SHOP"
            fullWidth
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="disabled" />
                </InputAdornment>
              ),
              sx: { border: "none", height: 55, fontSize: 16 },
            }}
            sx={{ flex: 1, "& fieldset": { border: "none" } }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "orange",
              borderRadius: 10,
              px: 4,
              py: 1.5,
              height: 55,
              fontSize: 16,
              "&:hover": { bgcolor: "darkorange" },
            }}
          >
            Start Browsing
          </Button>
        </Box>
      </Box>

      {/* Description - Now aligned right below the green search box */}
      <Box sx={{ textAlign: "left", ml: "5%", mt: 4 }}>
        <Typography variant="body2" color="textSecondary">
          Our aim is to offer a resale platform which specifically targets the underserved
          industrial and academic sectors.
        </Typography>
      </Box>
      <FeaturedProduct/>
    </Box>
  );
};

export default Shop;
