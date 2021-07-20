import React, { FC } from "react";
import { useImageGalleryStyles } from "./useImageGalleryStyles";

type Props = {
  urls: string[];
};

export const ImageGallery: FC<Props> = ({ urls }) => {
  const classes = useImageGalleryStyles();
  return (
    <ul className={classes.root}>
      {urls.map((url, index) => (
        <li key={index} className={classes.imageItem}>
          <img className={classes.image} src={url} alt="x" loading="lazy" />
        </li>
      ))}
    </ul>
  );
};
