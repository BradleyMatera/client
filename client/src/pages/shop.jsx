import React from 'react';
import styles from '../styles/Shop.module.css';


function Shop() {
  return (
    <div className={styles.shop}>
      <h1>Shop Our Products</h1>
      <div className={styles.productList}>
        {/* Example product boxes */}
        <div className={styles.productBox}>
          <h3>Product 1</h3>
          <p>Description of product 1.</p>
          <button className="addToCartButton">Add to Cart</button>
        </div>
        <div className={styles.productBox}>
          <h3>Product 2</h3>
          <p>Description of product 2.</p>
          <button className="addToCartButton">Add to Cart</button>
        </div>
        <div className={styles.productBox}>
          <h3>Product 3</h3>
          <p>Description of product 3.</p>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;