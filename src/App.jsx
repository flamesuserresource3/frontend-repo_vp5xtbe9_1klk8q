import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Hero />
      <Lineup />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
