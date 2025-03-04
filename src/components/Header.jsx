import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  padding: "10px 0",
  position: "relative",
  zIndex: 1000,
});

const NavButton = styled(Button)(({ active }) => ({
  color: "#2c3e50",
  fontWeight: "bold",
  margin: "0 16px",
  fontSize: "19px",
  fontFamily: "'Montserrat', sans-serif",
  textTransform: "uppercase",
  padding: "6px 8px",
  borderBottom: active ? "3px solid #4aba70" : "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#4aba70",
  },
}));

const LoginButton = styled(Button)({
  backgroundColor: "#f5a623",
  color: "white",
  borderRadius: "25px",
  padding: "10px 25px",
  fontSize: "19px",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "bold",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#e69c20",
  },
});

const MobileMenu = styled(Box)({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "white",
  zIndex: 999,
  textAlign: "center",
  padding: "20px 0",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
});

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate(); 

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleTabClick = (tabName, path) => {
    console.log("Navigating to", path);
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    navigate(path);
  };
  

  const handleLoginButtonClick = () => {
    setMobileMenuOpen(false); // Close menu if open
    navigate("/login"); // Navigate to login page
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "THE XCHANGE SHOP", path: "/shop" },
    { name: "SELLER HUB", path: "/seller" },
    { name: "BUYER HUB", path: "/buyer" },
  ];

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src={logo}
              alt="XChange Marketplace"
              style={{ height: "auto", width: "120px", marginLeft: "-20px", cursor: "pointer" }}
              onClick={() => handleTabClick("HOME", "/")}
            />
          </Box>

          {isMobile ? (
            <IconButton onClick={handleMenuToggle} sx={{ color: "#2c3e50" }}>
              {mobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "flex-end", gap: 2 }}>
              <Box sx={{ display: "flex" }}>
                {navItems.map((item) => (
                  <NavButton 
                    key={item.name} 
                    onClick={() => handleTabClick(item.name, item.path)} 
                    active={activeTab === item.name}
                  >
                    {item.name}
                  </NavButton>
                ))}
              </Box>
              <LoginButton 
                variant="contained" 
                sx={{ marginLeft: "20px" }}
                onClick={handleLoginButtonClick}
              >
                LOGIN / JOIN US
              </LoginButton>
            </Box>
          )}
        </Toolbar>

        {mobileMenuOpen && (
          <MobileMenu>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.name} onClick={() => handleTabClick(item.name, item.path)}>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      textAlign: "center",
                      "& .MuiTypography-root": {
                        color: activeTab === item.name ? "#4aba70" : "#2c3e50",
                        fontWeight: "bold",
                        fontSize: "19px",
                        fontFamily: "'Montserrat', sans-serif",
                      },
                    }}
                  />
                </ListItem>
              ))}
              <ListItem onClick={handleLoginButtonClick}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 1 }}>
                  <LoginButton variant="contained">
                    LOGIN / JOIN US
                  </LoginButton>
                </Box>
              </ListItem>
            </List>
          </MobileMenu>
        )}
      </StyledAppBar>
    </>
  );
};

export default Header;
