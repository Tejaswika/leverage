
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import Navbar from './components/NavBar/NavBar';
import TopStrip from './components/TopStrip/TopStrip';

function App() {
  return (
    <div className="App">
      <TopStrip />
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
