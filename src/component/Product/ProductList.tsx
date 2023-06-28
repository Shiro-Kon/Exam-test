import React from 'react';
import { Currency, products } from '../../utils/ProductArr';
import ProductListItem from '../ProductList/ProductListItem';

interface ProductListProps {
  currency: string;
  currencies: Currency[];
  onBuy: (price: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ currency, currencies, onBuy }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          currency={currency}
          currencies={currencies}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
};

export default ProductList;
