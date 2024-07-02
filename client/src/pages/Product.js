// client/src/pages/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product {id}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
};

export default Product;
