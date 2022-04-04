import { useState } from "react";

const PlaylistFormComponent = ({ playlist, HandleOnSubmitPlaylist, HandleOnChangePlaylist}) => {
  
  return(
    <form onSubmit={HandleOnSubmitPlaylist}>
      <label htmlFor="title">Title:</label>
      <input id="title" field="title" type="text" minLength={10} onChange={HandleOnChangePlaylist} value={playlist.title}/>
      <label htmlFor="description">Description:</label>
      <textarea id="description" field="description" onChange={HandleOnChangePlaylist} value={playlist.description} />
      <button className="btn">Create Playlist</button>
    </form>
  );
}

export default PlaylistFormComponent;