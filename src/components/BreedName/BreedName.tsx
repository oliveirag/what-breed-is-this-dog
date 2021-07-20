import { FC } from "react";
import { breeds } from "../../breeds";

type Props = {
  breedIndex: number | undefined;
};

export const BreedName: FC<Props> = ({ breedIndex }) => {
  if (breedIndex === undefined) {
    return null;
  }

  return <>It's a {breeds[breedIndex].name}! Like these...</>;
};
