import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";

const PlaylistForm = ({ HandleOnSubmitPlaylist, HandleOnChangePlaylist}) => {
  
  return(
    <Flex direction="column" justify="center" align="center" p="20px" mb="25px" width="90%">
        <Heading size={"md"} mb="16px" >Create Playlist</Heading>
        <Input
          variant={"filled"}
          color={"#B9B9B9"}
          backgroundColor={"#2C2C2C"}
          _focus={{ backgroundColor: "#2C2C2C" }}
          _hover={{ backgroundColor: "#2C2C2C" }}
          width="auto"
          placeholder="Enter a title for your playlist"
          id="title"
          name="title" 
          minLength={10}
          w="40%"
          mb="16px"
          onChange={HandleOnChangePlaylist}
        />
        <Textarea
          variant={"filled"}
          color={"#B9B9B9"}
          backgroundColor={"#2C2C2C"}
          _focus={{ backgroundColor: "#2C2C2C" }}
          _hover={{ backgroundColor: "#2C2C2C" }}
          placeholder="Enter a description for your playlist"
          id="description" 
          name="description"
          minH="170px"
          w="40%"
          mb="16px"
          onChange={HandleOnChangePlaylist}
        />
        <Button
          role="button"
          variant={"solid"}
          color={"#191414"}
          onClick={HandleOnSubmitPlaylist}
        >CREATE</Button>
    </Flex>
  );
}

export default PlaylistForm;