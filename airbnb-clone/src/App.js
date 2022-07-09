import './index.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const Cards = data.map(card => (
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating.toFixed(1)}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      status={card.openSpots}
    />
  ));

  return (
    <div className="AppContainer">
      <Navbar />
      <Hero />
      <section className="cards--list">
        {Cards}
      </section>
    </div>
  );
}

export default App;
