import "./index.css";

const Button = ({ onClick, disabled, children}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;