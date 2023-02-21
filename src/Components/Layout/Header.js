import s from './Header.module.css';

import mealsImg from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={s.header}>
        <h1>Food App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={s['main-image']}>
        <img src={mealsImg} alt="some food" />
      </div>
    </>
  );
};

export default Header;
