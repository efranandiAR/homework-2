import React from "react";
import styles from "../Track.module.css";

const ArtistList = ({artists}) => {
    const ArtistArray = artists.map((element) =>
        <li key={element.id}>{element.name}</li>
    );
    return ArtistArray;
}

const Details = ({titleId, title, albumId, album, artist}) => {

    return (
    <ul className={styles.SongDetails}>
        <li className={styles.SongTitle} key={titleId}>{title}</li>
        <li className={styles.SongAlbum} key={albumId}> {album}</li>
        <li className={styles.SongArtists}>
            <ul>{artist}</ul>
        </li>
    </ul>
    )
};

export {
    ArtistList,
    Details
};