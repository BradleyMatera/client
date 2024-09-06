import React, { useState, useEffect } from 'react';
import styles from '../styles/Shop.module.css';
import ProductList from '../components/ProductList';
import mockProducts from '../mock/mockProducts';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use mock data instead of fetching from backend
    setProducts(mockProducts);
  }, []);

  return (
    <div className={styles.shop}>
      <h1>Shop Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Shop;