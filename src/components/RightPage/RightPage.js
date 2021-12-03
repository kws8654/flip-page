import React from 'react';
import Clock from '../UI/Clock';
import styles from './RightPage.module.css';
import ToDoList from './ToDoList/ToDoList';
const RightPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.title}>
        <div className={styles.titleHover}>TO DO LIST </div>
        <Clock />
      </div>
      <ToDoList />
    </div>
  );
};

export default RightPage;
