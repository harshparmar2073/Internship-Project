import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './Pages/HomePage';
import CombinePage from './components/Combine';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './Pages/Shop';

const theme = createTheme({
  palette: {
    primary: { main: '#4aba70' },
    secondary: { main: '#f5a623' },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h4: { fontWeight: 400 },
    button: { textTransform: 'none' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 120px)", // Ensure it fits correctly
          padding: "10px",
          marginTop: "-20px",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<CombinePage />} />
          <Route path="/shop" element={<ShopPage/>}/>
        </Routes>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
