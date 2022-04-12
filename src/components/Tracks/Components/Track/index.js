import React from "react";
import Picture from "./Album";
import { Details } from "./Info";
import SelectButton from "./Button"
import styles from "./Track.module.css";

const Track = ({ url, titleId, title, albumId, album, artist, HandleOnSelect, isSelected, uri}) => {

  return(
    <div className={styles.SongContainer}>
      <Picture url={url}/>
      <Details 
        titleId={titleId}
        title={title}
        albumId={albumId}
        album={album}
        artist= {artist}
      />
      <SelectButton 
        HandleOnSelect={HandleOnSelect}
        isSelected = {isSelected}
        uri = {uri}
      />
    </div>
  );
}

export default Track;