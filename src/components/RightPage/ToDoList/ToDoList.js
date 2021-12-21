import React, { useState, useRef } from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css';

const ToDolist = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: '리액트 공부하기', done: false, editing: false },
    { id: 2, title: '"NFT revolution" 읽기', done: false, editing: false },
    { id: 3, title: '헬스장', done: true, editing: false },
    { id: 4, title: '둥이 목욕', done: false, editing: false },
  ]);

  const inputRef = useRef();
  const newInputRef = useRef();

  const addToDo = (e) => {
    e.preventDefault();
    let title = inputRef.current.value;
    setToDos([
      ...toDos,
      {
        id: Date.now(),
        title: title,
        done: false,
      },
    ]);
    inputRef.current.value = '';
  };

  const modifiedToDo = (todo) => {
    const index = toDos.indexOf(todo);
    const newToDos = [...toDos];
    if (newToDos[index].editing === false) {
      newToDos[index].editing = true;
      if (newInputRef === '') {
        newToDos[index].title = newInputRef.current.value;
      }
    } else {
      if (newInputRef === '') {
        newToDos[index].title = newInputRef.current.value;
      }
      newToDos[index].editing = false;
    }
    console.log(newToDos[index].editing);
    setToDos(newToDos);
  };

  const doneToDo = (todo) => {
    const index = toDos.indexOf(todo);
    const newToDos = [...toDos];
    if (newToDos[index].done === false) {
      newToDos[index].done = true;
    } else {
      newToDos[index].done = false;
    }
    console.log(newToDos[index].done);
    setToDos(newToDos);
  };

  const deleteToDo = (todo) => {
    const index = toDos.indexOf(todo);
    console.log(index);
    setToDos(
      toDos.filter((toDo) => {
        return toDo !== todo;
      })
    );
  };

  return (
    <div className={styles.frame}>
      <div>
        {toDos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            title={todo.title}
            done={todo.done}
            editing={todo.editing}
            modifiedToDo={modifiedToDo}
            deleteToDo={deleteToDo}
            doneToDo={doneToDo}
            ref={newInputRef}
          />
        ))}
      </div>
      <form onSubmit={addToDo}>
        <input
          type='text'
          ref={inputRef}
          placeholder='입력 후 엔터를 눌러주세요'
        />
      </form>
    </div>
  );
};

export default ToDolist;
