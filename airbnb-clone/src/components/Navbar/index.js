import './index.css';
import airbnbLogo from '../../assets/airbnb-logo.png';

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logo-wrapper">
            <img src={airbnbLogo} alt="AirBnb Logo"/>
         </div>
      </div>
   );
}

export default Navbar;