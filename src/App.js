import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>MockUptify</h1>
        </div>
      </header>
      <div className="Container">
        <Home/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
