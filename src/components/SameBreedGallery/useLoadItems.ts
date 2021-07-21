import { useCallback, useState } from "react";

type UseLoadItemsHook = {
  loading: boolean;
  items: string[];
  hasNextPage: boolean;
  loadMore: () => void;
};

const ITEMS_PER_PAGE = 12;

export const useLoadItems = (imageUrls: string[]): UseLoadItemsHook => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const hasNextPage = items.length < imageUrls.length;
  console.log(items.length, imageUrls.length, hasNextPage);

  const loadMore = () => {
    if (!hasNextPage) {
      return;
    }

    setPage((page) => page + 1);
    setLoading(true);

    const sliceStartIndex = page * ITEMS_PER_PAGE;
    let sliceEndIndex = sliceStartIndex + ITEMS_PER_PAGE;

    console.log(sliceStartIndex, sliceEndIndex);

    if (!imageUrls[sliceEndIndex]) {
      sliceEndIndex = imageUrls.length;
    }

    const itemsToAdd = [
      ...items,
      ...imageUrls.slice(sliceStartIndex, sliceEndIndex),
    ];

    setItems(itemsToAdd);
    setLoading(false);
  };

  return { loading, items, hasNextPage, loadMore };
};
