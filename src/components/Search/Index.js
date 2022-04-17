import styles from "./Search.module.css"
import { Flex, Input, Button } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons"

const SearchTracks = ({HandleOnSubmitSearch, HandleOnChangeSearch}) => {

  return(
      <Flex
        className={styles.SearchBarContainer} 
        align="center"
        justify="center"
      >
        <form
        className={styles.SearchBarForm}
        onSubmit={HandleOnSubmitSearch}>
          <Input 
            className={styles.SearchInput}
            variant='filled'
            width='auto' 
            onChange={HandleOnChangeSearch}
            placeholder="Search for a song, artist, or album"
          />
        <Button 
          className={styles.Btn}
          onClick={HandleOnSubmitSearch}
        >
          <Search2Icon />
        </Button>
        {/* <button className={styles.Btn} type={"submit"}>SEARCH</button> */}
      </form>
      </Flex>
  )
}

export default SearchTracks;