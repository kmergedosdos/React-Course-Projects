import './index.css';
import photoGrid from '../../assets/photo-grid.png';

const Hero = () => {
   return (
      <section className="Hero">
         <img src={photoGrid} alt="Grid" className="hero--photo"/>
         <div className="hero--content">
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
               Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
         </div>
      </section>
   );
}

export default Hero;