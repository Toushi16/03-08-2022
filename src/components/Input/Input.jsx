import "./index.css";

const Input = ({ onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (

    <section className="input">
    <div className="input__inner">
      <input name="task" placeholder="Write here..." onChange={handleChange} type="text"/>
      {children}
    </div>
  </section>
  );
};

export default Input;
