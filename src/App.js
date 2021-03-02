import './App.css';
import Navbar from './Header/Navbar';
import AboutMe from './Sections/About-Me-Section/AboutMe';
import Work from './Sections/Work-Section/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Work />
    </div>
  );
}

export default App;
