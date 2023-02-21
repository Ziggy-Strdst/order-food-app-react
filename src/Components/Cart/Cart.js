import Modal from '../UI/Modal';
import s from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={s['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={s.actions}>
        <button className={s['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={s.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
