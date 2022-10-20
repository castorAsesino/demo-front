import classes from './HeaderCartButton.module.css';
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
