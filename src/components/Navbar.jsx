import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <nav className="site-navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explore" className="nav-link">Explore</Link>
              <Link to="/product" className="nav-link">Product</Link>
      <Link to="/material" className="nav-link">Material</Link>
      <Link to="/maker" className="nav-link">Maker</Link>
      <Link to="/careguide" className="nav-link">Care Guide</Link>
      <Link to="/checkout" className="nav-link">Checkout</Link>
      <Link to="/passport" className="nav-link">Passport</Link>
    </nav>
  )
}

export default Navbar