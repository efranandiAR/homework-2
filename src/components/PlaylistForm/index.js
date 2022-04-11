const PlaylistFormComponent = ({ HandleOnSubmitPlaylist, HandleOnChangePlaylist}) => {
  
  return(
    <form onSubmit={HandleOnSubmitPlaylist}>
      <label htmlFor="title">Title:</label>
      <input 
        id="title"
        name="title" 
        type="text" 
        minLength={10} 
        onChange={HandleOnChangePlaylist} />
      <label htmlFor="description">Description:</label>
      <textarea 
        id="description" 
        name="description" 
        onChange={HandleOnChangePlaylist} />
      <button className="btn">Create Playlist</button>
    </form>
  );
}

export default PlaylistFormComponent;