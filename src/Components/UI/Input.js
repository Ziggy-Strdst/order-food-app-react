import s from './Input.module.css';

const Input = (props) => {
  return (
    <div className={s.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
