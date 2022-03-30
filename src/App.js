import './App.css';
import SpotifyAuth from './Authentication/Components';
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
        {/* <ListDisplay /> */}
        <SpotifyAuth/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
