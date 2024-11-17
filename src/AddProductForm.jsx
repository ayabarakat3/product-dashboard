import React, { useState } from 'react';
// Import React and useState to manage form input

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (EventAction) => {
    EventAction.preventDefault();
  // Code meant to ensure that the webpage doesn't update after action. 
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      description,
    };
// Code meant to show the product id which is the date of when the product was dded along with the name, price, and description. 
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
      <input type="text" placeholder="Name" value={name} onChange={(EventAction) => setName(EventAction.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(EventAction) => setPrice(EventAction.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(EventAction) => setDescription(EventAction.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}
// Code meant to display the form on the page and allow users to add products.

export default AddProductForm;
// Code created to make App function accessible in other files.