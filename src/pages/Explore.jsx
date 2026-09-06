import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function Explore() {
  return (
    <div className="explore-page">
      <h1 className="explore-heading">Explore All Products</h1>
      <div className="featured-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Explore