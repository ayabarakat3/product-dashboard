import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import './App.css';
// Code created to import necessary information from other files. 

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mascara', price: 25.0, description: 'Lash lengthening, long-wearing, cruelty-free mascara.' },
    { id: 2, name: 'Concealer', price: 28.0, description: 'A full coverage, light and liquid formula, best for brightening. ' },
    { id: 3, name: 'Perfume', price: 87.0, description: 'Unisex, layerable, floral scent.' },
  ]);
 // Data created. Dataset includes id number, name, price, and description of products.

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
 // Code created to add new peoducts when needed. 

  return ( 
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
}
// Code created to show the product list and the product form to add new products. 
export default App;
// Code created to make App function accessible in other files.