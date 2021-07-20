import { useState } from "react";

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

  const loadMore = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      const sliceStartIndex = page * ITEMS_PER_PAGE;
      let sliceEndIndex = sliceStartIndex + ITEMS_PER_PAGE - 1;

      if (!imageUrls[sliceEndIndex]) {
        sliceEndIndex = 0;
      }

      const itemsToAdd = [
        ...items,
        ...imageUrls.slice(sliceStartIndex, sliceEndIndex),
      ];
      setItems(itemsToAdd);
      setLoading(false);
    }, 300);
  };

  return { loading, items, hasNextPage, loadMore };
};
