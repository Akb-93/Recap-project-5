import React from 'react';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;