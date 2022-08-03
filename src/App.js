import React from 'react';
import Todo from './components/Todo';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

let initialValue = {
  todos: [],
  counter: 1,
};

function reducer(state, action) {
  let { type, payload } = action;
  let { todos, counter } = state;

  switch (type) {
    case "Add":
      {
        let id = counter;
        counter++;
        todos = [...todos, { ...todo, id: id }];
      }
      break;

    case "Delete":
      {
        todos = todos.filter((todo) => todo.id != payload);
      }
      break;

    default:
  }

  return {
    ...state,
    todos: todos,
    counter: counter,
  };
};

let todo = {};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  const addTodo = () => {
    dispatch({ type: 'Add' });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'Delete', payload: id });
  };

  const handleInputChange = (e) => {
    todo[e.target.name] = e.target.value;
  };

  return (
    <div className="App">
      <div className='todo-title'>
        <h1>To Do List</h1>
      </div>
      <div className='todo-input'>
        <Input onChange={handleInputChange}>
        <Button onClick={addTodo}>Add</Button>
        </Input>
      </div>

      <div className='todo-list'>
        {state.todos.map((todo, index) => {
          let { id } = todo;
          return (
            <Todo todo={todo} key={`todo-${index}`}>
              <Button onClick={() => deleteTodo(id)}>X</Button>
            </Todo>
          );
        })}
      </div>
    </div>
  );
}

export default App;
