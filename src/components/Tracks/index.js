import { React } from "react";
import Track from "./Components/Track"
import { ArtistList } from "./Components/Track/Info";
import styles from "./TracksTable.module.css";


const Tracks = ({data, HandleOnSelect, isSelected}) => {
    const List = data.map(
        (e) => 
            <li key = {e.id}>
                <Track 
                  url={e.album.images[2].url}
                  titleId={e.id}
                  title={e.name}
                  albumId={e.album.id}
                  album={e.album.name}
                  artist= {<ArtistList artists = {e.artists} />}
                  HandleOnSelect = {HandleOnSelect}
                  isSelected = {isSelected}
                  uri = {e.uri}
                />
            </li>
    );

    return(
      <ul className={styles.TracksTable}>{List}</ul>  
    );
}

export default Tracks;