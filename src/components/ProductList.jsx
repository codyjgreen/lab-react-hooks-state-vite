import React from 'react'

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ margin: '8px 0' }}>
          <strong>{product.name}</strong> - {product.price} - {product.category}{' '}
          {product.inStock ? '(In Stock)' : '(Out of Stock)'}
          {' '}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
