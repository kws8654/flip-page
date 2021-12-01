import React from 'react';
import styles from './RightPage.module.css';
import ToDoList from './ToDoList';

const RightPage = () => {
  return (
    <div className={styles.frame}>
      <div> TO DO LIST </div>
      <ToDoList />
    </div>
  );
};

export default RightPage;
