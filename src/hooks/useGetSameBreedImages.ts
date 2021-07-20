import { useEffect, useState } from "react";
import { getSameBreedImagesUrls } from "../api/getSameBreedImagesUrls";

type GetSameBreedImagesHook = {
  imagesUrls: string[];
  requestLoading: boolean;
  requestHasError: boolean;
};

export const useGetSameBreedImages = (
  breedIndex: number | undefined
): GetSameBreedImagesHook => {
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [requestHasError, setRequestHasError] = useState<boolean>(false);

  useEffect(() => {
    if (breedIndex) {
      (async () => {
        try {
          setRequestHasError(false); // a reset if it failed before
          setRequestLoading(true);

          const { message } = await getSameBreedImagesUrls(breedIndex);
          setImagesUrls(message);
          setRequestLoading(false);
        } catch (e) {
          setRequestHasError(true);
        }
      })();
    }
  }, [breedIndex]);

  return { imagesUrls, requestLoading, requestHasError };
};
