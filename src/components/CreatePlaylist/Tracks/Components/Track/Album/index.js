import { Image } from "@chakra-ui/react";

const Picture = ({url}) => (
    <Image
        src={url}
        alt=''
        mr="16px"
    />
);

export default Picture;