import { ADD_PRODUCT } from "./actionTypes";

export function reduceCart(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
        const { product } = payload;
        let newState = [...state]
        const index = newState.findIndex(el => el.id === product.id);
        if (index < 0) 
            newState.push(product);
        else 
            newState[index] = product;
        return newState;
    default:
      return state;
  }
}
