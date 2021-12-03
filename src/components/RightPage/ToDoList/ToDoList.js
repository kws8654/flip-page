import React, { useState, useRef } from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css';

const ToDolist = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: '포트폴리오 끝내기', done: false },
    { id: 2, title: '경영학개론 공부', done: true },
    { id: 3, title: '헬스장', done: false },
    { id: 4, title: '둥이 목욕', done: false },
    // { id: 5, title: '닭가슴살 구입', done: false },
  ]);

  const inputRef = useRef();

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

  const deleteToDo = (todo) => {
    const index = toDos.indexOf(todo);
    console.log(index);
    setToDos(
      toDos.filter((toDo) => {
        return toDo !== todo;
      })
    );
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

  return (
    <div className={styles.frame}>
      <ul>
        {toDos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            title={todo.title}
            done={todo.done}
            deleteToDo={deleteToDo}
            doneToDo={doneToDo}
          />
        ))}
      </ul>
      <form onSubmit={addToDo}>
        <input type='text' ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
};

export default ToDolist;
