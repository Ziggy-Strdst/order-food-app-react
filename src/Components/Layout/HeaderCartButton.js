import CartIcon from '../Cart/CartIcon';

import s from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={s.button} onClick={props.onClick}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
