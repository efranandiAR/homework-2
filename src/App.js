// import logo from './logo.svg';
import './App.css';
import data from './single-sample';

const ListArtist = data.artists.map((element) =>
  <li>{element.name}</li>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>Music Player</h1>
        </div>
      </header>
      <div className="MusicPlayer">
      <div className="Container">
        <img
          src={ data.album.images[1].url }
          className="AlbumPicture"
          alt=''
        />
        <ul className="SongDetails">
          <li className="SongTitle">{ data.name }</li>
          <li className="SongAlbum">{ data.album.name }</li>
          <li className="SongArtists">
            <ul>{ListArtist}</ul>
          </li>
        </ul>
        <button className="Btn-Select">Select</button>
      </div>
    </div>
    </div>
  );
}

export default App;
