import React, { useState } from 'react';
import ToDo from './ToDo';

const ToDolist = () => {
  const [toDos, setSoDos] = useState([
    { id: 1, title: 'Reading', done: false },
    { id: 2, title: 'Running', done: false },
    { id: 3, title: 'Coding', done: false },
  ]);

  const addToDo = () => {};

  const deleteToDo = () => {};

  const doneToDo = () => {};
  return (
    <div>
      {toDos.map((todo) => (
        <ToDo id={todo.id} title={todo.title} done={todo.done} />
      ))}
    </div>
  );
};

export default ToDolist;
