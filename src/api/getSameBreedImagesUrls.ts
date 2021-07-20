import { breeds } from "../utils/breeds";
import { ApiResponse } from "./ApiResponse";

export const getSameBreedImagesUrls = (
  breedIndex: number
): Promise<ApiResponse<string[]>> =>
  fetch(
    `https://dog.ceo/api/breed/${breeds[breedIndex].resourceId}/images`
  ).then((res) => res.json());
