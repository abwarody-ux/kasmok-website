import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SouscriptionGamingRoom from './pages/SouscriptionGamingRoom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/souscrire-gaming-room" element={<SouscriptionGamingRoom />} />
      </Routes>
    </BrowserRouter>
  )
}
