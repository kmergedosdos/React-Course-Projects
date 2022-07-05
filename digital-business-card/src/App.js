import Profile from './components/Profile';
import Details from './components/Details';
import Socials from './components/Socials';


function App() {
  return (
    <div className="app-wrapper">
      <div className='content-wrapper'>
        <Profile />
        <Details />
      </div>
      <Socials />
    </div>
  );
}

export default App;
