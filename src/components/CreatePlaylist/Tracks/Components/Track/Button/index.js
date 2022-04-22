import { Button } from "@chakra-ui/react";

const SelectButton = ({ HandleOnSelect, isSelected, uri }) => {
  return (
    <Button
      size="sm"
      bg="#1DB954"
      borderRadius="40px"
      p={["5px", "15px"]}
      width="100%"
      maxW="110px"
      fontSize="14px"
      _hover={{ backgroundColor:"#21d961" }}
      _active={{ backgroundColor:"#24ed6a" }} 
      onClick={() => HandleOnSelect(uri)}
    >
      {isSelected.includes(uri) ? "DESELECT" : "SELECT" }
    </Button>
  )};

export default SelectButton;