import React from "react";
import data from "../../single-sample";

const ListArtist = data.artists.map((element) =>
  <li key={element.id}>{element.name}</li>
);

const MySongInfo = () => (
    <ul className="SongDetails">
        <li className="SongTitle" key="title">{ data.name }</li>
        <li className="SongAlbum" key="albumName"> { data.album.name }</li>
        <li className="SongArtists" key="artists">
            <ul>{ListArtist}</ul>
        </li>
    </ul>
);

export default MySongInfo;