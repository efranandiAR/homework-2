import React from "react";

const Picture = ({url}) => (
    <img
        src={url}
        className="AlbumPicture"
        alt=''
    />
);

export default Picture;