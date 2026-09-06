function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-image" />
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-material">{product.material}</p>
      <p className="product-card-price">₹{product.price}</p>
    </div>
  )
}

export default ProductCard