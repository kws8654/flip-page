import React, { useState, useEffect } from 'react';
import styles from './LeftPage.module.css';

const API = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: process.env.REACT_APP_BASE,
};

const LeftPage = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(`${API.base}weather?q=seoul&units=metric&APPID=${API.key}`)
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
      alert(`${query}로 설정 완료!`);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.weatherFrame}>
        {typeof weather.main != 'undefined' ? (
          <div className={styles.weatherContent}>
            <div className={styles.weatherCon}>
              <div className={styles.location}>
                <span
                  className={
                    weather.name.length < 6
                      ? styles.locationContent
                      : weather.name.length > 10
                      ? styles.locationTooLongContent
                      : styles.locationLongContent
                  }
                >
                  {weather.name},
                </span>
              </div>
              <div className={styles.weather}>
                <span>{weather.sys.country} </span>
                <span
                  className={styles.temp}
                  style={{ color: weather.main.temp > 16 ? 'yellow' : 'blue' }}
                >
                  {Math.round(weather.main.temp)} ℃
                </span>
                <div className={styles.weather}>{weather.weather[0].main} </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className={styles.weatherEdit}>
          <div className={styles.weatherEditContent}>
            <div className={styles.weatherEditInfo}>
              Type the country you want to search in english
            </div>
            <input
              type='text'
              className='searchBar'
              placeholder='City'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPage;
