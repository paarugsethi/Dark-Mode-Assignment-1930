import { useContext } from 'react';
import styles from './App.module.css';
import Page from './Components/Page';
import { ThemeContext } from './Context/ThemeContextProvider';

function App() {
  const [{theme, themeData}, toggleTheme, isDarkMode] = useContext(ThemeContext);
  
  if (theme === "light"){
    document.body.style = 'background: #F5F6FA;';
  }
  else{
    document.body.style = 'background: #1F2327;';
  }
 
  return (
    <div className={styles.App}>
      <Page/>
    </div>
  );
}

export default App;
