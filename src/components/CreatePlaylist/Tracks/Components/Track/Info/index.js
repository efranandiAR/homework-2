import { List, ListItem, Stack } from "@chakra-ui/react"

const ArtistList = ({artists}) => {
    const ArtistArray = artists.map((element) =>
            <ListItem fontSize="14px" key={element.id}>{element.name}</ListItem>
    );
    return ArtistArray;
}

const Details = ({titleId, title, albumId, album, artist}) => {

    return (
    <List>
            <ListItem fontSize="16px" key={titleId}>{title}</ListItem>
            <ListItem fontSize="12px" key={albumId}>{album}</ListItem>
            <ListItem>
                <Stack spacing={2} direction="row">
                    <List>{artist}</List>
                </Stack>
            </ListItem>
    </List>
    )
};

export {
    ArtistList,
    Details
};