import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './__tests__/helpers'

const App = () => {
  // 1) Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  // 2) Cart management
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // 3) Category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter the products based on `selectedCategory`
  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* Dark mode toggle component */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Veggies">Veggies</option>
        {/* Add or remove categories as needed */}
      </select>

      {/* Display products based on the selected category */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      ) : (
        <p>No products available</p>
      )}

      {/* Cart component */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
