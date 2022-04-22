import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../utilities/redux/token-slice";
import {
  Button, Flex, Text, Link, Spacer
} from "@chakra-ui/react";

export default function LogIn() {
  const CLIENT_ID = "675110b87a764b42b3a51622ddaa8178";
  const REDIRECT_URI = "http://localhost:3000/";
  const SCOPE = "playlist-modify-private";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const currentToken = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let tokenSplit;

    if (!currentToken && hash) {
        tokenSplit = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

        window.location.hash = "";
    }
    dispatch(setToken(tokenSplit));
  }, [currentToken, dispatch]);

  return (
      <Flex direction="column" align="center" minH="80px">
        <Text fontSize="md" >
          Not Logged In
        </Text>
        <Spacer/>
        <Button
          role="button" 
          as={Link}
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}
          colorScheme="green"
          variant="solid"
        >
          Log In
        </Button>
      </Flex>
  );
}