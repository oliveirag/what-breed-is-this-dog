import { useEffect, useState } from "react";

type UseLoadItemsHook = {
  loading: boolean;
  items: string[];
  hasNextPage: boolean;
  loadMore: () => void;
};

const ITEMS_PER_PAGE = 12;

export const useLoadItems = (imageUrls: string[]): UseLoadItemsHook => {
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setItems([]);
    setPage(0);
  }, [imageUrls]);

  const hasNextPage = items.length < imageUrls.length;

  const loadMore = () => {
    if (!hasNextPage) {
      return;
    }

    setPage((page) => page + 1);
    setLoading(true);

    const sliceStartIndex = page * ITEMS_PER_PAGE;
    let sliceEndIndex = sliceStartIndex + ITEMS_PER_PAGE;

    const itemsToAdd = [
      ...items,
      ...imageUrls.slice(sliceStartIndex, sliceEndIndex),
    ];

    setItems(itemsToAdd);
    setLoading(false);
  };

  return { loading, items, hasNextPage, loadMore };
};
