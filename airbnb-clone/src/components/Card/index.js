import './index.css';
import starPhoto from '../../assets/star.png';

const Card = (
   { img, rating, reviewCount, location, title, price, status}
) => {
   return (
      <div className="Card">
         {status <= 0 && <div className="card--status">SOLD OUT</div>}
         <img className="card--photo" src={require('../../assets/' + img)} alt="Katie Zaferes"/>
         <div className="card--stats">
            <div>
               <img className="card--star" src={starPhoto} alt="Star"/>
               <p className="card--rating">
                  {rating}
                  <span> ({reviewCount}) &#8226; {location}</span>
               </p>
            </div>
            <p className="card--title">{title}</p>
            <span><strong className="card--cost">From ${price}</strong> / person</span>
         </div>
      </div>
   );
}

export default Card;