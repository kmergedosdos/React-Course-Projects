import reactLogo from '../assets/react-logo.png';
import '../styles.css';

const Navbar = () => {
   return (
      <nav className='navbar'>
         <div className='logo'>
            <img src={reactLogo} alt='React Logo'/>
            <h3>ReactFacts</h3>
         </div>
         <h4>React Course - Project 1</h4>
      </nav>
   );
}

export default Navbar;