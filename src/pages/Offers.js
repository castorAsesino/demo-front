import { products } from "../utils/categories";
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import Product from "./Product"
import React, { useRef, useState, useReducer } from "react";
import { CartReducer } from "../components/cart/CartReducer";


export default function Ofertas(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [value, setValue] = useState('');


  return (
    <div className="bg-white">

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Offers</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <>
             <Product key={product.id} product={product} />
            </>
          ))}
        </div>

      </div>

    </div>

  )
}