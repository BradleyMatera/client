import React, { useEffect, useState } from 'react';
import mockProducts from '../mock/mockProducts';
import mockCommunityStories from '../mock/mockCommunityStories';
import ProductList from '../components/ProductList';
import CommunityStories from '../components/CommunityStories';
import styles from '../styles/Home.module.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [communityStories, setCommunityStories] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  useEffect(() => {
    setCommunityStories(mockCommunityStories);
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to Recoverynet</h1>
      <p>Your journey to recovery starts here.</p>
      <div className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <ProductList products={products} />
      </div>
      <div className={styles.communityStories}>
        <h2>Community Stories</h2>
        <CommunityStories />
      </div>
    </div>
  );
}

export default Home;