import './App.css';
import Navbar from './components/Appbar';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  );
}

export default App;
