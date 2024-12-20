import React, { useState } from 'react';
// Import React and useState to manage form input

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code meant to ensure that the webpage doesn't update after action. 
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      description,
    };
    // Code meant to show the product id which is the date of when the product was added along with the name, price, and description. 
    // Code meant to display the option to add products, set price, and a description.
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setDescription('');
  };
  // Code meant to set exactly how product information should be displayed. 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(event) => setPrice(event.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(event) => setDescription(event.target.value)} 
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
// Code meant to display the form on the page and allow users to add products.
// Changed EventAction to event to simplify the code. 
export default AddProductForm;
// Code created to make App function accessible in other files.
