// pages/index.js

import { useState } from 'react';
import Search from '../components/Search';


const Home = () => {
  const userId = 1; // Hardcoded user ID
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };


  return (
    <div>
      <h1>Product Search</h1>
      <Search
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSearch={handleSearch}
        products={products}  // Pass products array as prop
        userId={userId}      // Pass hardcoded userId as prop
      />
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>{product.product_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
