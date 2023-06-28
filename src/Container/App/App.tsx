import React, { useState, useEffect } from 'react';
import './App.scss';
import ProductList from '../../component/Product/ProductList';

interface Currency {
  code: string;
  symbol: string;
  coefficient: number;
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', coefficient: 1 },
  { code: 'UAH', symbol: '₴', coefficient: 27 },
  { code: 'EUR', symbol: '€', coefficient: 0.9 },
];

const App: React.FC = () => {
  const [currency, setCurrency] = useState<string>('USD');
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(0); // Reset the total to 0 when currency changes
  }, [currency]);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleBuyProduct = (price: number) => {
    setTotal((prevTotal) => prevTotal + price); // Add the price to the total
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Our Shop Page</h1>
        <div className="currency-buttons">
          {currencies.map((curr) => (
            <button key={curr.code} onClick={() => handleCurrencyChange(curr.code)}>
              {curr.code}
            </button>
          ))}
        </div>
      </header>
      <ProductList
        currency={currency}
        currencies={currencies}
        onBuy={handleBuyProduct}
      />
      <div className="total">
        Total: {getPriceWithCurrency(total, currency)}
      </div>
    </div>
  );
};

const getPriceWithCurrency = (price: number, currency: string): string => {
  const selectedCurrency = currencies.find((curr) => curr.code === currency);
  if (selectedCurrency) {
    return `${selectedCurrency.symbol}${price}`;
  }
  return `$${price}`;
};

export default App;
