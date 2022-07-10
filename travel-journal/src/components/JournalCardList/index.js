import './index.css';
import JournalCard from '../JournalCard';
import data from '../../data';

const JournalCardList = () => {
   return (
      <div className="JournalCardList">
         {data.map((item, i) => {
            if(i > 0) {
               return (
                  <div>
                     <hr style={{marginBottom: 20, borderTop: "1px solid #F5F5F5"}}/>
                     <JournalCard key={i} {...item}/>
                  </div>
               );
            }
            return <JournalCard key={i} {...item}/>
         })}
      </div>
   );
}

export default JournalCardList;