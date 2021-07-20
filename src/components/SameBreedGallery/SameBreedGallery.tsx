import React, { FC } from "react";
import { useSameBreedGalleryStyles } from "./useSameBreedGalleryStyles";
import LazyLoad from "react-lazyload";

type Props = {
  urls: string[];
  requestHasError: boolean;
};

export const SameBreedGallery: FC<Props> = ({ urls, requestHasError }) => {
  const classes = useSameBreedGalleryStyles();

  if (requestHasError) {
    return <>Request failed. Please try to upload again.</>;
  }

  return (
    <div className={classes.root}>
      {urls.map((url, index) => (
        <LazyLoad height={200} key={index} style={{ height: "100%" }} once>
          <div className={classes.imageItem}>
            <img className={classes.image} src={url} alt="x" />
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};
