import React from 'react';
import styles from './ToDo.module.css';

const ToDo = (props) => {
  // const isClicked = props.isClicked;
  return (
    <div className={styles.todoFrame}>
      <div
        className={styles.title}
        // style={{ textDecoration: isClicked && 'line-through' }}
      >
        {props.title}
      </div>
      <button className={styles.delButton} onClick={props.deleteToDo}>
        삭제
      </button>
    </div>
  );
};

export default ToDo;
