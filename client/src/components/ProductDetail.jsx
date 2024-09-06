import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductDetail.module.css';

function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API
    fetch(`/api/products/${productId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productDetail}>
      <img src={product.image} alt={product.name} />
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;