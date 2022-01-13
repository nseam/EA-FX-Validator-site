import './App.css';
import Footer from './components/Footer/Footer.js';
import ContaboStatus from "./components/Debug/ContaboStatus";

//import logo from './logo.svg';

function App() {
  //const data = await axios.get('http://vmi193328.contaboserver.net:26657/status');
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ContaboStatus>
      </ContaboStatus>
      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
