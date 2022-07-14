import { useState } from 'react';
import './index.css';
import memesData from '../../memesData';

const Meme = () => {
   const [memeData, setMeme] = useState({
      topText: "",
      bottomText: "",
      imgUrl: ""
   });

   const memes = memesData.data.memes;

   function getNewMemeImage(e) {
      e.preventDefault();
      const newMeme = memes[Math.floor(Math.random() * memes.length)];
      const memeImgUrl = newMeme.url;
      setMeme(prevState => ({
         ...prevState,
         imgUrl: memeImgUrl
      }));
   }

   function handleChange(event) {
      const { name, value } = event.target;
      setMeme(prevMemeData => ({
         ...prevMemeData,
         [name]: value
      }));
   }

   return (
      <main className="Meme">
         <form className="form" onSubmit={getNewMemeImage}>
            <input
               type="text"
               name="topText"
               value={memeData.topText}
               onChange={handleChange}
               placeholder="Top Text"
               className="form--input"
            />
            <input
               type="text"
               name="bottomText"
               value={memeData.bottomText}
               onChange={handleChange}
               placeholder="Bottom Text"
               className="form--input"
            />
            <button className="form--submit">Get a new meme image 🖼</button>
         </form>
         <div className='meme--container'>
            {memeData.imgUrl !== "" && <img src={memeData.imgUrl} alt="New Meme" className="meme--img"/>}
            <h2 className='meme--toptext'>{memeData.imgUrl !== "" && memeData.topText.toUpperCase()}</h2>
            <h2 className='meme--bottomtext'>{memeData.imgUrl !== "" && memeData.bottomText.toUpperCase()}</h2>
         </div>
      </main>
   );
}

export default Meme;