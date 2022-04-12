import styles from "./PlaylistForm.module.css";

const PlaylistForm = ({ HandleOnSubmitPlaylist, HandleOnChangePlaylist}) => {
  
  return(
    <div className={styles.PlaylistContainer}>
      <form
        className={styles.PlaylistForm} 
        onSubmit={HandleOnSubmitPlaylist}>
        <h1>Create Playlist</h1>
        <input
          className={styles.TitleInput} 
          id="title"
          name="title" 
          type="text" 
          minLength={10}
          placeholder="Enter a title for your playlist" 
          onChange={HandleOnChangePlaylist} />
        <textarea
          className={styles.DescriptionInput}
          id="description" 
          name="description"
          placeholder="Enter a description for your playlist"
          onChange={HandleOnChangePlaylist} />
        <button className={styles.Btn} >CREATE</button>
      </form>
    </div>
  );
}

export default PlaylistForm;