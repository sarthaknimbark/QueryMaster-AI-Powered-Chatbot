import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx';
import { Toaster } from "react-hot-toast";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

const theme = createTheme ({
  typography: {
    fontFamily: "Roboto slab, serif",
    allVariants: { color: "white" },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toaster position="top-right"/>
    <App />
    </ThemeProvider> 
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
