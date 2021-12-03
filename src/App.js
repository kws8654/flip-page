import styles from './App.module.css';
import LeftPage from './components/LeftPage/LeftPage';
import RightPage from './components/RightPage/RightPage';

function App() {
  return (
    <div className={styles.frame}>
      <LeftPage />
      <RightPage />
    </div>
  );
}

export default App;
