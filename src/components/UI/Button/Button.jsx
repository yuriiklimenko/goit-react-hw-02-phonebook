import css from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    //   ...props(щоб передавати в button все що захочемо)
    <button {...props} className={css.btn}>
      {children}
    </button>
  );
};

export default Button;
