import React from "react";
import Picture from "./Album";
import { Details } from "./Info";
import SelectButton from "./Button"

const Track = ({ url, titleId, title, albumId, album, artist, HandleOnSelect, isSelected}) => {

  return(
    <div className="SongContainer">
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
      />
    </div>
  );
}

export default Track;