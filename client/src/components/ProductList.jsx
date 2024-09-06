import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product._id} className={styles.productBox}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>£{product.price.toFixed(2)}</p>
          <div className={styles.options}>
            <select>
              {product.options.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
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
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default ProductList;