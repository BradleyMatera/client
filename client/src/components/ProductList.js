import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProductList.module.css';

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product._id} className={styles.productBox}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;