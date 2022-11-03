import classes from './HeaderCartButton.module.css';
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import Modal from '../../pages/Modal';
import CartContext from '../cart/CartContext';
import { useContext } from 'react';
const HeaderCartButton = (props) => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>
          <ShoppingCartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{state.reduce((a,b)=>a+b.amount,0)}</span>
      </button>
      <Modal />
    </>


  );
};

export default HeaderCartButton;
