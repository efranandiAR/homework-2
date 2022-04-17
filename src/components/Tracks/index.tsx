// import { React } from "react";
import Track from "./Components/Track"
import { ArtistList } from "./Components/Track/Info";
import styles from "./TracksTable.module.css";
import { Item } from "../../utilities/tsxModule/tracks"
import { Key } from "react";

interface Props {
    data: Array<Item>;
    HandleOnSelect: void;
    isSelected: Array<String>;
}

const Tracks = ({data, HandleOnSelect, isSelected}: Props) => {
    const List = data.map(
        (e: { id: Key | null | undefined; album: { images: { url: any; }[]; id: any; name: any; }; name: any; artists: any; uri: any; }) => 
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