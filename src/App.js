import './App.css';
import MyButtonComponent from './components/Button';
import MyAlbumImageComponent from './components/AlbumPicture'
import MySongInfo from './components/SongInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>Music Player</h1>
        </div>
      </header>
      <div className="Container">
        <MyAlbumImageComponent />
        <MySongInfo />
        <MyButtonComponent />
      </div>
    </div>
  );
}

export default App;
