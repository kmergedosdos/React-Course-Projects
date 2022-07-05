import './index.css';
import profilePhoto from '../../assets/kmerge-portrait.jpg';

const Profile = () => {
   return (
      <div className='profile-container'>
         <div className='img-wrapper'>
            <img src={profilePhoto} alt="Kmerge Dosdos" />
         </div>
         <h1 className='name'>Kmerge Boi Dosdos</h1>
         <h3 className='title'>Software Developer</h3>
         <small className='website'>kdosdos.website</small>
         <div className='contact'>
            <a href='mailto:kpdosdos@gmail.com' className='email'><i className="fa-solid fa-envelope"></i> Email</a>
            <a href='https://www.linkedin.com/in/kmerge-boimilleyr-dosdos-20b399219/' target="_blank" rel="noreferrer noopener" className='linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
         </div>
      </div>
   );
}

export default Profile;