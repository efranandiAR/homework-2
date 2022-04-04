import { React, useState } from "react";
import Track from "./Components/Track"
import { ArtistList } from "./Components/Track/Info";


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
                  HandleOnSelect = {() => (HandleOnSelect(e.uri))}
                  isSelected = {isSelected}
                />
            </li>
    );

    return(
      <ul>{List}</ul>  
    );
}

export default Tracks;