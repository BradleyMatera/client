import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'; // Ensure this path is correct


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;