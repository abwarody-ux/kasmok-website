import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SouscriptionGamingRoom from './pages/SouscriptionGamingRoom'
import GamingRoomPage from './pages/GamingRoomPage'
import HotelPage from './pages/HotelPage'
import DevWebPage from './pages/DevWebPage'
import ChurchPage from './pages/ChurchPage'
import ATMPage from './pages/ATMPage'
import POSPage from './pages/POSPage'
import PayboxPage from './pages/PayboxPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/souscrire-gaming-room" element={<SouscriptionGamingRoom />} />
        <Route path="/gaming-room" element={<GamingRoomPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/dev-web" element={<DevWebPage />} />
        <Route path="/church" element={<ChurchPage />} />
        <Route path="/atm" element={<ATMPage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="/paybox" element={<PayboxPage />} />
      </Routes>
    </BrowserRouter>
  )
}
