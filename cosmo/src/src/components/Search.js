// components/Search.js

import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  width: 250px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({ query, onQueryChange, onSearch, products, userId }) => {
  const handleAddToCart = async (productId, userId) => {
    try {
      const response = await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, userId })
      });

      const data = await response.json();
      console.log(data.message); // You can show a success message here
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error display or other actions
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          placeholder="Search"
        />
        <SearchButton onClick={onSearch}>
          Search
        </SearchButton>
      </SearchContainer>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.product_name}
            <button onClick={() => handleAddToCart(product.product_id, userId)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
