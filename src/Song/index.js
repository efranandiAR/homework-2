import React from "react";
import data from '../data'
import Picture from "./Components/Album";
import SelectSong from "./Components/Button"
import { ArtistList, Details } from "./Components/Info";

const ListDisplay = () => {
    const List = data.map(
        (e) => 
            <li key = {e.id}>
                <div className="SongContainer">
                    <Picture url={e.album.images[2].url}/>
                    <Details titleId={e.id} title={e.name} albumId={e.album.id} album={e.album.name} artist= {<ArtistList artists = {e.artists} />} />
                    <SelectSong />
                </div>
            </li>
    );

    return(
      <ul>{List}</ul>  
    );
}

export default ListDisplay;