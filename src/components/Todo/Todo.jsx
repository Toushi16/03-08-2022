import "./index.css";

const Todo = ({ todo, children }) => {
  const { task, id } = todo;
  
  return (
    <div className="todo">
      {task}
      {children}
    </div>
  );
};

export default Todo;
