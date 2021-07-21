import React, { FC } from "react";
import { useSameBreedGalleryStyles } from "./useSameBreedGalleryStyles";
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
    disabled: !hasNextPage,
    rootMargin: "0px 0px 400px 0px",
  });

  if (requestHasError) {
    return <>Request failed. Please try to upload again.</>;
  }

  return (
    <ul className={classes.root}>
      {items.map((url, index) => (
        <li className={classes.imageItem} key={index}>
          <img className={classes.image} src={url} alt="dog" loading="lazy" />
        </li>
      ))}
      {(loading || hasNextPage) && <div ref={sentryRef}>Loading...</div>}
    </ul>
  );
};
