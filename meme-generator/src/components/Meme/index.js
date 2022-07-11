import { useState } from 'react';
import './index.css';
import memesData from '../../memesData';

const Meme = () => {
   const [meme, setMeme] = useState({
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

   return (
      <main className="Meme">
         <form className="form">
            <input
               type="text"
               placeholder="Top Text"
               className="form--input"
            />
            <input
               type="text"
               placeholder="Bottom Text"
               className="form--input"
            />
            <button className="form--submit" onClick={getNewMemeImage}>Get a new meme image 🖼</button>
         </form>
         {meme.imgUrl !== "" && <img src={meme.imgUrl} alt="New Meme" className="meme--img"/>}
      </main>
   );
}

export default Meme;