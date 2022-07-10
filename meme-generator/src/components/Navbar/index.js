import './index.css';
import trollFace from '../../assets/troll-face.png';

const Navbar = () => {
   return (
      <nav className="Navbar">
         <div className="logo">
            <img className="logo--img" src={trollFace} alt="Troll Face"/>
            <h2 className="logo--text">Meme Generator</h2>
         </div>
         <span>React Course - Project 3</span>
      </nav>
   );
}

export default Navbar;