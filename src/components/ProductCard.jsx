import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* Disable the button if the product is out of stock */}
      <button disabled={!product.inStock} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
