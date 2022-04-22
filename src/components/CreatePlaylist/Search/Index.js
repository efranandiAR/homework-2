import { Flex, Input, Button } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons"

const SearchTracks = ({HandleOnSubmitSearch, HandleOnChangeSearch}) => {

  return(
      <Flex
        align="center"
        justify="center"
        mb="12px"
      >
        <Input 
          variant={"filled"}
          backgroundColor="white"
          _focus={{ backgroundColor: "#white" }}
          _hover={{ backgroundColor: "#white" }}
          color="#2C2C2C"
          width="100%"
          mr="10px"
          fontSize="16px" 
          onChange={HandleOnChangeSearch}
          placeholder="Search for a song, artist, or album"
        />
        <Button
          backgroundColor="#1DB954"
          _hover={{ backgroundColor:"#21d961" }}
          _active={{ backgroundColor:"#24ed6a" }}
          onClick={HandleOnSubmitSearch}
        >
          <Search2Icon />
        </Button>
      </Flex>
  )
}

export default SearchTracks;