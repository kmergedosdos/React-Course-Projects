import ReactIconDark from '../assets/react-icon-dark.png';
import ReactIconLight from '../assets/react-icon-light.png';

const Main = ({ isDarkMode }) => {
   const style = {
      color: isDarkMode ? "#ffffff" : "#2B283A ",
      backgroundColor: isDarkMode ? "#282D35" : "#ffffff",
      backgroundImage: `url(${isDarkMode ? ReactIconDark : ReactIconLight})`
   };

   return (
      <main className='main' style={style}>
         <h1 className='title'>Fun facts about React</h1>
         <ul className='content'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Was well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
      </main>
   );
}

export default Main;