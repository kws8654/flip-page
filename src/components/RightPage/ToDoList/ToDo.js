import React from 'react';
import styles from './ToDo.module.css';

const ToDo = (props) => {
  // const isClicked = props.isClicked;
  const handleDec = () => {
    props.deleteToDo(props.todo);
  };

  const handleDone = () => {
    props.doneToDo(props.todo);
  };
  return (
    <div className={styles.todoFrame}>
      <div
        className={styles.title}
        style={{ textDecoration: props.todo.done && 'line-through' }}
      >
        {props.title}
      </div>
      <button className={styles.delButton} onClick={handleDec}>
        삭제
      </button>
      <button className={styles.doneButton} onClick={handleDone}>
        완료
      </button>
    </div>
  );
};

export default ToDo;
