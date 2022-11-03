
  export const CartReducer = (state, action) => {
    if (action.type === "ADD_TODO") {
        const { product } = action.payload;
        let newState = [...state]
        const index = newState.findIndex(el => el.id === product.id);
        if (index < 0) 
            newState.push(product);
        else 
            newState[index] = product;
        return newState;
      }
    
     
    
      return state;
}