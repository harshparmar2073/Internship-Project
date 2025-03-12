import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./Pages/HomePage";
import CombinePage from "./components/Combine";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Typography } from "@mui/material";
import SellerHub from "./Pages/SellerHub";
import BuyerHub from "./Pages/BuyerHub";
import Shop from "./Pages/Shop";
import Support from "./components/Support";

const theme = createTheme({
  palette: {
    primary: { main: "#4aba70" },
    secondary: { main: "#f5a623" },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h4: { fontWeight: 400 },
    button: { textTransform: "none" },
  },
});

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 120px)",
          padding: "10px",
          marginTop: "-20px",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<CombinePage />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/seller" element={<SellerHub/>} />
          <Route path="/buyer" element={<BuyerHub/>}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>
      </main>

      {/* Show full footer on all pages except login */}
      {!isAuthPage ? (
        <Footer />
      ) : (
        <Box sx={{ backgroundColor: "black", py: 2, textAlign: "center", width: "100%" }}>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>
            Copyright © {new Date().getFullYear()} THE XCHANGE MARKETPLACE. All Rights Reserved.
            Website &amp; App Powered By K Business Solutions Inc.
          </Typography>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
