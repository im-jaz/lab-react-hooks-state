import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('All')

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        handleAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App