import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Product from './pages/Product.jsx'
import Material from './pages/Material.jsx'
import Maker from './pages/Maker.jsx'
import CareGuide from './pages/CareGuide.jsx'
import Checkout from './pages/Checkout.jsx'
import Passport from './pages/Passport.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
                <Route path="/product" element={<Product />} />
                        <Route path="/material" element={<Material />} />
                        <Route path="/maker" element={<Maker />} />
                                <Route path="/careguide" element={<CareGuide />} />
                                        <Route path="/checkout" element={<Checkout />} />
                                                <Route path="/passport" element={<Passport />} />
            </Routes>
      <Footer />
    </>
  )
}

export default App