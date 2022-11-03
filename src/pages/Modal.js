import { Fragment, useEffect, useRef, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import ReactDOM from "react-dom";
import CartContext from '../components/cart/CartContext';


export default function Modal(props) {
  const modalState = props.toggle;
  const action = props.action
  const [state, dispatch] = useContext(CartContext);
  const [totalValue, setTotalValue] = useState(0);
  console.log(state)
  const total = () => {
  setTotalValue(  state.reduce((a, b) => a + ( parseInt(b.amount) * parseInt(b.price)), 0))
  }
  useEffect (() => {
    total();
  }, [state])
  return (
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={action}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BanknotesIcon className="h-6 w-6 text-pink-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Payment information
                      </Dialog.Title>
                      <div className="row mt-2">
                        <table class="table-fixed">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Amount</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>

                            {state.map((item) => (

                              <tr>
                                <td>{item.name}</td>
                                <td>{item.price} $</td>
                                <td>{item.amount}</td>
                                <td>{parseInt(item.amount) * parseInt(item.price)} $</td>
                              </tr>

                            ))}
                          </tbody>
                        </table>
                      </div>
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        TOTAL:  {totalValue} $
                      </Dialog.Title>
                            
                    </div>
                  </div>
                </div>


                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={action}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={action}

                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >

  )
}