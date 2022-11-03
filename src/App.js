import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Router from './routes';
import { useReducer } from 'react';
import CartContext from './components/cart/CartContext';
import { reduceCart } from './components/cart/reduceCart';


export default function App() {
  const store = useReducer(reduceCart, []);

  return (
    <BrowserRouter>
      <div className="App">
        <CartContext.Provider value={store}>
          <Router />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );

}

