import React, { useState, useRef } from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css';

const ToDolist = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: '포트폴리오 끝내기', done: false },
    { id: 2, title: '경영학개론 공부', done: false },
    { id: 3, title: '헬스장', done: false },
    { id: 4, title: '둥이 목욕', done: false },
    // { id: 5, title: '닭가슴살 구입', done: false },
  ]);
  const [isClicked, setIsClicked] = useState(false);

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
    const toDosArray = [...toDos];
    const index = toDos.indexOf(todo);
    setToDos(toDosArray.splice(index, 1));
  };

  const doneToDo = (e) => {
    console.log(e);
    setIsClicked(true);
  };

  return (
    <div className={styles.frame}>
      {toDos.map((todo) => (
        <ToDo
          key={todo.id}
          title={todo.title}
          todo={todo}
          done={todo.done}
          doneToDo={doneToDo}
          deleteToDo={deleteToDo}
          isClicked={isClicked}
        />
      ))}
      <form onSubmit={addToDo}>
        <input type='text' ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
};

export default ToDolist;
