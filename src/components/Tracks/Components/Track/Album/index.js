import React from "react";
import styles from "../Track.module.css";

const Picture = ({url}) => (
    <img
        src={url}
        className={styles.AlbumPicture}
        alt=''
    />
);

export default Picture;