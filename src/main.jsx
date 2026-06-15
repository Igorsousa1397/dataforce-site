import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Termos from './pages/Termos.jsx'
import Privacidade from './pages/Privacidade.jsx'
import Cookies from './pages/Cookies.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import './index.css'
import CursorTrail from './components/CursorTrail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorTrail />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termos-de-servico" element={<Termos />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/politica-de-cookies" element={<Cookies />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
