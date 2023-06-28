import React from 'react';
import { Currency, ProductItem } from '../../utils/ProductArr';

interface ProductListItemProps {
  product: ProductItem;
  currency: string;
  currencies: Currency[];
  onBuy: (price: number) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  currency,
  currencies,
  onBuy,
}) => {
  const getPriceWithCurrency = (): string => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const totalPrice = product.price * selectedCurrency.coefficient;
      return `${selectedCurrency.symbol}${totalPrice}`;
    }
    return `$${product.price}`;
  };

  const handleBuyClick = () => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const totalPrice = product.price * selectedCurrency.coefficient;
      onBuy(totalPrice);
    } else {
      onBuy(product.price);
    }
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.title}</p>
      <p>{getPriceWithCurrency()}</p>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default ProductListItem;
