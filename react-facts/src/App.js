import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="container">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Main isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
