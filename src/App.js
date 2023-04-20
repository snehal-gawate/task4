import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';

import { Footer } from './Components/Footer';
import { Maincontainer } from './Components/Maincontainer';


function App() {
  return (
    <div className="App">
      <Header/>
       <Maincontainer/>
      <Footer/>
    </div>
  );
}

export default App;
