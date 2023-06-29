export interface Currency {
  code: string;
  symbol: string;
  coefficient: number;
}

export interface ProductItem {
  id: number;
  name: string;
  title: string;
  price: number;
}


export const products: ProductItem[] = [
  { 
    id: 1, 
    name: "IPhone 12", 
    title: "This is IPhone 12", 
    price: 850
  },
  { 
    id: 2, 
    name: "IPhone 8", 
    title: "This is IPhone 8", 
    price: 560
  },
  { 
    id: 3, 
    name: "IPhone X", 
    title: "This is IPhone X", 
    price: 700
  },
];
