
import './App.css';
import  Banner from './components/banner'
import Header from './components/header';
import Caurosel from './components/caurosel';
import Design from './components/design';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Header/>
      <Caurosel/>
      <Design/>
      <Services/>
      
    </div>
  );
}

export default App;
