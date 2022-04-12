import styles from "./Search.module.css"

const SearchTracks = ({HandleOnSubmitSearch, HandleOnChangeSearch}) => {

  return(
    <div className={styles.SearchBarContainer}>
      <form
        className={styles.SearchBarForm}
        onSubmit={HandleOnSubmitSearch}>
        <input 
          className={styles.SearchInput} 
          type="text" 
          onChange={HandleOnChangeSearch}
          placeholder="Search for a song, artist, or album"
        />
        <button className={styles.Btn} type={"submit"}>SEARCH</button>
      </form>
    </div>
  )
}

export default SearchTracks;