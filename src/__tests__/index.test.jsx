import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'
import { sampleProducts } from './helpers.jsx'

test('renders shopping app', () => {
    render(<App />)
    expect(screen.getByText(/Shopping App/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
    render(<App />)
    sampleProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument()
    })
})

test('shows "No products available" when filtering removes all products', async () => {
    render(<App />)
    const filterDropdown = screen.getByRole('combobox')
  
    // Now select a category that doesn't exist in your actual products.
    // This requires that your <select> has <option value="Veggies">Veggies</option>
    await userEvent.selectOptions(filterDropdown, 'Veggies')
  
    // The category is changed, so filteredProducts = [] → "No products available"
    expect(screen.getByText(/No products available/i)).toBeInTheDocument()
  })
