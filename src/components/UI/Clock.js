import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    const clock = () => {
      const time = new Date();
      const year = time.getFullYear();
      const month = `${time.getMonth() + 1}`;
      const date = time.getDate();
      const day = time.getDay();
      const week = ['일', '월', '화', '수', '목', '금', '토'];
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const timeNow = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
      setTime({
        year: year,
        month: month,
        date: date,
        day: day,
        week: week[day],
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        timeNow: timeNow,
      });
    };
    clock();
    setInterval(clock, 10);
  }, []);
  return (
    <div className={styles.clock}>
      {time.year}년 {time.month}월 {time.date}일 ({time.week}) <br />
      {time.hours}시{time.minutes}분 {time.seconds}초
    </div>
  );
};

export default Clock;
