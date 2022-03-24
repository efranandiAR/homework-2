import React from "react";
import data from "../../single-sample";

const MyAlbumImageComponent = () => (
    <img
        src={ data.album.images[1].url }
        className="AlbumPicture"
        alt=''
    />
);

export default MyAlbumImageComponent;