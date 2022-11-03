import classes from './HeaderCartButton.module.css';
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import Modal from '../../pages/Modal';
import CartContext from '../cart/CartContext';
import { useContext, useState, useEffect } from 'react';
const HeaderCartButton = (props) => {
  const [state, dispatch] = useContext(CartContext);
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(!modalState)
  }

  return (
    <>
      <button className={classes.button} style={{backgroundColor: 'rgba(242, 242, 242, 0.75)', animation: 'floatingShadow 3s ease-in-out infinite'}} onClick={openModal}>
        <span className={classes.icon}>
          <ShoppingCartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{state.reduce((a, b) => a + b.amount, 0)}</span>
      </button>
      <Modal toggle={modalState} action={openModal} />
    </>


  );
};

export default HeaderCartButton;
