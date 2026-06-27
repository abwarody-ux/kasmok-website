import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SouscriptionGamingRoom from './pages/SouscriptionGamingRoom'
import GamingRoomPage from './pages/GamingRoomPage'
import HotelPage from './pages/HotelPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/souscrire-gaming-room" element={<SouscriptionGamingRoom />} />
        <Route path="/gaming-room" element={<GamingRoomPage />} />
        <Route path="/hotel" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  )
}
