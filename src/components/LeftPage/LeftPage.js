import React, { useState, useEffect } from 'react';
import styles from './LeftPage.module.css';

const API = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: process.env.REACT_APP_BASE,
};

const LeftPage = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [modal, setModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [color, setColor] = useState('');

  useEffect(() => {
    fetch(`${API.base}weather?q=seoul&units=metric&APPID=${API.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  const search = async (e) => {
    try {
      if (e.key === 'Enter') {
        const response = await fetch(
          `${API.base}weather?q=${query}&units=metric&APPID=${API.key}`
        );
        if (!response.ok) {
          throw Error('Error occured');
        }
        const result = await response.json();
        setWeather(result);
        randomColor();

        setModal(true);
        setIsError(false);
      }
    } catch {
      setModal(true);
      setIsError(true);
    }
  };
  useEffect(() => {
    randomColor();
  }, []);

  const randomColor = () => {
    let color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    setColor(color);
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
                  style={{ color: `${color}` }}
                >
                  {weather.name},
                </span>
              </div>
              <div className={styles.weather}>
                <span>{weather.sys.country} </span>
                <span
                  className={styles.temp}
                  style={{
                    color: weather.main.temp > 16 ? 'yellow' : 'darkblue',
                  }}
                >
                  {Math.round(weather.main.temp)} ℃
                </span>
                <div className={styles.weatherCondition}>
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className={styles.weatherEdit}>
          <div className={styles.weatherEditContent}>
            <div className={styles.weatherEditInfo}>
              Type the country in english you want to search
              <div style={{ fontSize: '1.2vw' }}>
                (The color of city name would be randomly changed)
              </div>
            </div>
            <input
              type='text'
              className='searchBar'
              placeholder='City'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              style={{ display: modal && 'none' }}
            />
          </div>
        </div>
      </div>
      {modal && (
        <div className={styles.modal}>
          <div>
            {isError
              ? `'${query}'은(는) 찾을 수 없는 지명입니다.`
              : `${query} 설정 완료!`}
          </div>
          <button
            onClick={() => {
              setModal(false);
              setQuery('');
            }}
          >
            <img src='./images/ok.png' alt='' />
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftPage;
