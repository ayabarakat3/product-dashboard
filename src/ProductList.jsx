import React from 'react'; 
import ProductItem from './ProductItem'; 
// Code created to import necessary information from other files.

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List:</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
// Code created to display the list of products by the ID number that was set in the original data set. 
// Product "key" is the product ID number. 

export default ProductList;
// Code created to make App function accessible in other files.