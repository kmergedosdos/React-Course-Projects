import './index.css';
import katiePhoto from '../../assets/katie-zaferes.png';
import starPhoto from '../../assets/star.png';

const Card = () => {
   return (
      <div className="Card">
         <div className="card--status">SOLD OUT</div>
         <img className="card--photo" src={katiePhoto} alt="Katie Zaferes"/>
         <div className="card--stats">
            <div>
               <img className="card--star" src={starPhoto} alt="Star"/>
               <p className="card--rating">
                  5.0
                  <span> (6) &#8226; USA</span>
               </p>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <span><strong className="card--cost">From $136</strong> / person</span>
         </div>
      </div>
   );
}

export default Card;