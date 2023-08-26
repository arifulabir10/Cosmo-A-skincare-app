// pages/_app.js

import '../styles/globals.css'; // Import global styles
import '../styles/Search.css'; // Import search component styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
