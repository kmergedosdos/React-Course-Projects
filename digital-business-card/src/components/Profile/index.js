import './index.css';
import profilePhoto from '../../assets/kmerge-portrait.jpg';

const Profile = () => {
   return (
      <div className='profile-container'>
         <div className='img-wrapper'>
            <img src={profilePhoto} alt="Kmerge Dosdos" />
         </div>
         <h1 className='name'>Kmerge Dosdos</h1>
         <h3 className='title'>Web Developer</h3>
         <small className='website'>kdosdos.com</small>
         <div className='contact'>
            <a href='kdosdos.com' className='email'>Email</a>
            <a href='kdosdos.com' className='linkedin'>LinkedIn</a>
         </div>
      </div>
   );
}

export default Profile;