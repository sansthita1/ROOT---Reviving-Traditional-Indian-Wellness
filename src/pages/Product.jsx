import { useParams } from 'react-router-dom'
import products from '../data/products.js'

function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <h1 className="product-detail-name">{product.name}</h1>
      <p className="product-detail-material">{product.material}</p>
      <p className="product-detail-price">₹{product.price}</p>
      <p className="product-detail-description">{product.description}</p>
    </div>
  )
}

export default Product