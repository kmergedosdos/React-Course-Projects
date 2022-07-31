import reactLogo from '../assets/react-logo.png';
import '../styles.css';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

   const style = {
      backgroundColor: isDarkMode ? "#21222A" : "#ffffff",
      borderBottom: isDarkMode ? "none" : "3px solid rgba(0,0,0,0.1)"
   }

   function toggleColorMode() {
      setIsDarkMode(prevMode => !prevMode);
   }

   return (
      <nav className='navbar' style={style}>
         <div className='logo'>
            <img src={reactLogo} alt='React Logo'/>
            <h3>ReactFacts</h3>
         </div>
         <div className='theme--toggler'>
            <span
               className='theme--toggler--text'
               style={{color: isDarkMode ? "#918E9B" : "#2B283A"}}
            >
               Light
            </span>
            <div 
               className='theme--toggler--switch'
               onClick={toggleColorMode}
               style={{backgroundColor: isDarkMode ? "#F5F5F5" : "#222222"}}
            >
               <div className='theme--toggler--circle' style={{
                  backgroundColor: isDarkMode ? "#222222" : "#F5F5F5",
                  marginLeft: isDarkMode ? "12px" : "1px"
               }}></div>
            </div>
            <span
               className='theme--toggler--text'
               style={{color: isDarkMode ? "#ffffff" : "#D5D4D8"}}
            >
               Dark
            </span>
         </div>
      </nav>
   );
}

export default Navbar;