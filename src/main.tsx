import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.tsx'
import Topbar from './components/topbar/Topbar.tsx'
import TitleAndText from './components/titleAndText/TitleAndText.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Topbar />
    <Header />
    <TitleAndText />

  </StrictMode>,
)
