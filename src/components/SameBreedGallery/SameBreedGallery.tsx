import React, { FC } from "react";
import { useSameBreedGalleryStyles } from "./useSameBreedGalleryStyles";
import LazyLoad from "react-lazyload";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useLoadItems } from "./useLoadItems";

type Props = {
  urls: string[];
  requestHasError: boolean;
};

export const SameBreedGallery: FC<Props> = ({ urls, requestHasError }) => {
  const classes = useSameBreedGalleryStyles();
  const { loading, items, hasNextPage, loadMore } = useLoadItems(urls);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    rootMargin: "0px 0px 400px 0px",
  });

  if (requestHasError) {
    return <>Request failed. Please try to upload again.</>;
  }

  return (
    <div className={classes.root}>
      {items.map((url, index) => (
        <LazyLoad height={200} key={index} style={{ height: "100%" }} once>
          <div className={classes.imageItem}>
            <img className={classes.image} src={url} alt="x" />
          </div>
        </LazyLoad>
      ))}
      {(loading || hasNextPage) && <div ref={sentryRef}>Loading...</div>}
    </div>
  );
};
