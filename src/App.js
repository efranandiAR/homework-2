import './App.css';
import ListDisplay from './Song';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>MockUptify</h1>
        </div>
      </header>
      <div className="Container">
        <ListDisplay />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
