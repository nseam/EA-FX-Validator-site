import './App.css';
import Footer from './components/Footer/Footer.js';
import NodeStatus from "./components/Debug/NodeStatus";

//import logo from './logo.svg';

function App() {
  //const data = await axios.get('http://example.com/status');
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NodeStatus>
      </NodeStatus>
      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
