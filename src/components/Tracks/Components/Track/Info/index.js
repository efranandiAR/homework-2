import React from "react";

const ArtistList = ({artists}) => {
    const ArtistArray = artists.map((element) =>
        <li key={element.id}>{element.name}</li>
    );
    return ArtistArray;
}

const Details = ({titleId, title, albumId, album, artist}) => {

    return (
    <ul className="SongDetails">
        <li className="SongTitle" key={titleId}>{title}</li>
        <li className="SongAlbum" key={albumId}> {album}</li>
        <li className="SongArtists">
            <ul>{artist}</ul>
        </li>
    </ul>
    )
};

export {
    ArtistList,
    Details
};