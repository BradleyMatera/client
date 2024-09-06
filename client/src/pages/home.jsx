import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className="hero">
        <h1>Welcome to Recoverynet</h1>
        <p>Your one-stop shop for all recovery needs.</p>
      </section>
      <section className="featuredProducts">
        <h2>Featured Products</h2>
        <div className="productList">
          {/* Example product boxes */}
          <div className="productBox">
            <h3>Product 1</h3>
            <p>Description of product 1.</p>
          </div>
          <div className="productBox">
            <h3>Product 2</h3>
            <p>Description of product 2.</p>
          </div>
          <div className="productBox">
            <h3>Product 3</h3>
            <p>Description of product 3.</p>
          </div>
        </div>
      </section>
      <section className="communityStories">
        <h2>Community Stories</h2>
        <p>Read inspiring stories from our community.</p>
      </section>
    </div>
  );
}

export default Home;