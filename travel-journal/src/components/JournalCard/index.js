import './index.css';

const JournalCard = (props) => {
   return (
      <div className="JournalCard">
         <img src={props.imageUrl} alt="Mount Fuji"/>
         <div className="journal-card--deets">
            <h5 className="journal-card--loc">
               <i className="fa-solid fa-location-dot"></i>
               <span>{props.location.toUpperCase()}</span>
               <a href={props.googleMapsUrl} target="_blank" rel="noreferrer noopener">View on Google Maps</a>
            </h5>
            <h2 className="journal-card--name">{props.title}</h2>
            <span className="journal-card--date">{props.startDate} - {props.endDate}</span>
            <p className="journal-card-description">{props.description}</p>
         </div>
      </div>
   );
}

export default JournalCard;