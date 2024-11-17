import React from 'react'; 
// Code created to import necessary information from other files.

function ProductItem({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
// Code created to display the details and description of a product. 

export default ProductItem;
// Code created to make App function accessible in other files.