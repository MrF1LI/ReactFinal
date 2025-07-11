import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home.jsx";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename="/ReactFinal">
          <ThemeProvider>
              <LanguageProvider>
                  <App />
              </LanguageProvider>
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
