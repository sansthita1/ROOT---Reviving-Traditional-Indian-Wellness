import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function Home() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">Explore Your Roots</h1>
        <p className="hero-subtitle">
          Reviving Traditional Indian Wellness — one root, one ritual, one story at a time.
        </p>
      </div>

      <section className="featured-section">
        <h2 className="featured-heading">Featured Products</h2>
        <div className="featured-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home