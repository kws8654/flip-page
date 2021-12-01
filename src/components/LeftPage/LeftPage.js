import React, { useState, useEffect } from 'react';
import styles from './LeftPage.module.css';

const API = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: process.env.REACT_APP_BASE,
};

const LeftPage = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${API.base}weather?q=california&units=metric&APPID=${API.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  const search = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(
        `${API.base}weather?q=${query}&units=metric&APPID=${API.key}`
      );
      const result = await response.json();
      setWeather(result);
      setQuery('');
      console.log(result);
    }
  };
  const dateBuilder = (d) => {
    let months = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    let days = ['월', '화', '수', '목', '금', '토', '일'];

    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];

    return `${year}년 ${month}월 ${date}일 ${day}요일  `;
  };
  return (
    // <div
    //   className={
    //     typeof weather.main != 'undefined'
    //       ? weather.main.temp < 16
    //         ? 'app cold'
    //         : 'app'
    //       : 'app'
    //   }
    // >
    <div className={styles.frame}>
      {/* <div className='searchBox'>
          <input
            type='text'
            className='searchBar'
            placeholder='도시'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div> */}
      {typeof weather.main != 'undefined' ? (
        <div className={styles.content}>
          <div className={styles.location}>
            <span className={styles.locationContent}>{weather.name},</span>
          </div>
          <div className={styles.temp}>
            <span>{weather.sys.country} ,</span>
            <span
              className={weather.main.temp > 16 ? 'temp cold' : 'styles.temp'}
            >
              {Math.round(weather.main.temp)} ℃
            </span>
          </div>
          <span className={styles.weather}>{weather.weather[0].main}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default LeftPage;
