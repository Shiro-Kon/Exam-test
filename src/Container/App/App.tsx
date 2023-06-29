import React, { useState } from 'react';
import './App.scss';
import ProductList from '../../component/Product/ProductList';

interface Currency {
  code: string;
  symbol: string;
  coefficient: number;
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', coefficient: 1 },
  { code: 'UAH', symbol: '₴', coefficient:  27 },
  { code: 'EUR', symbol: '€', coefficient:  0.9 },
];

const App: React.FC = () => {
  const [currency, setCurrency] = useState<string>('USD');
  const [total, setTotal] = useState<number>(0);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleBuyProduct = (price: number) => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const priceInSelectedCurrency = price / selectedCurrency.coefficient;
      setTotal((prevTotal) => prevTotal + priceInSelectedCurrency);
    }
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
      <ProductList currency={currency} currencies={currencies} onBuy={handleBuyProduct} />
      <div className="total">
        Total: {getPriceWithCurrency(total, currency)}
      </div>
    </div>
  );
};

const getPriceWithCurrency = (price: number, currency: string): string => {
  const selectedCurrency = currencies.find((curr) => curr.code === currency);
  if (selectedCurrency) {
    const priceInSelectedCurrency = price * selectedCurrency.coefficient;
    return `${selectedCurrency.symbol}${priceInSelectedCurrency.toFixed(2)}`;
  }
  return `$${price.toFixed(2)}`;
};

export default App;
