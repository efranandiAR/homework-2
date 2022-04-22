import React from "react";
import Picture from "./Album";
import { Details } from "./Info";
import SelectButton from "./Button"
import { Flex, Spacer } from "@chakra-ui/react";

const Track = ({ url, titleId, title, albumId, album, artist, HandleOnSelect, isSelected, uri}) => {

  return(
    <Flex 
      direction="row" 
      justify="strech" 
      align="center" 
      bg="#262626" 
      borderRadius="5px" 
      boxShadow="base"
      p={["8px", "16px"]}
      height="100%"
      maxH="120px"
      width="100%"
    >
      <Picture url={url}/>
      <Details 
        titleId={titleId}
        title={title}
        albumId={albumId}
        album={album}
        artist= {artist}
      />
      <Spacer/>
      <SelectButton 
        HandleOnSelect={HandleOnSelect}
        isSelected = {isSelected}
        uri = {uri}
      />
    </Flex>
  );
}

export default Track;