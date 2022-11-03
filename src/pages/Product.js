import { products } from "../utils/categories";
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import Input from "../components/Layout/Input";
import CartContext from "../components/cart/CartContext";
import {addProduct} from "../components/cart/actions";
import React, { useRef, useState, useReducer, useContext } from "react";

export default function Product(props) {
  const amountInputRef = useRef();
  const [state, dispatch] = useContext(CartContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', amountInputRef.current.value)
    console.log('submit', amountInputRef)
    const enteredAmount = amountInputRef.current.value;
    dispatch(addProduct({ product: {...props.product, amount: parseInt(amountInputRef.current.value) }}));
  };

  return (


    <>
      <div key={props.product.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={props.product.imageSrc}
            alt={props.product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">

          <h3 className="text-sm text-gray-500">
            <p>
              <span aria-hidden="true" />
              {props.product.name}
            </p>
          </h3>

          <p className="text-xl font-medium text-pink-500">{props.product.price} $</p>

        </div>
        <div className=" flex justify-between">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-sm-4"><input type="number" id={'amount_' + props.product.id} className="form-control" ref={amountInputRef} min="0" defaultValue="0"
            /></div>


            <div className="col-sm-8">

              <button type="submit"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" style={{ width: ' 100%' }}><ShoppingBagIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
                Add
              </button>
            </div>
          </form>


        </div>

      </div>

    </>
  )
}