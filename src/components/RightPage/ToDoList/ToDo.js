import React from 'react';
import styles from './ToDo.module.css';

const ToDo = (props) => {
  const handleDec = () => {
    props.deleteToDo(props.todo);
  };

  const handleDone = () => {
    props.doneToDo(props.todo);
  };

  // const handleModified = () => {
  //   props.modifiedToDo(props.todo);
  // };

  return (
    <div className={styles.todoFrame}>
      <div
        className={props.editing ? styles.titleEditing : styles.title}
        style={{ textDecoration: props.done && 'line-through' }}
      >
        {props.editing ? (
          <input type='text' ref={props.newInputRef} />
        ) : (
          props.title
        )}
      </div>

      {/* <button className={styles.doneButton} onClick={handleModified}>
        <img src='./images/checked.png' alt='' />
      </button> */}
      <button className={styles.doneButton} onClick={handleDone}>
        <img src='./images/checked.png' alt='' />
      </button>
      <button className={styles.delButton} onClick={handleDec}>
        <img src='./images/cross.png' alt='' />
      </button>
    </div>
  );
};

export default ToDo;
