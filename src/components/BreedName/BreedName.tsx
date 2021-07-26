import { FC } from "react";
import { breeds } from "../../utils/breeds";
import { useBreedNameStyles } from "./useBreedNameStyles";

type Props = {
  breedIndex?: number;
};

export const BreedName: FC<Props> = ({ breedIndex }) => {
  const classes = useBreedNameStyles();

  if (breedIndex === undefined) {
    return null;
  }

  return (
    <span className={classes.root}>
      It's a {breeds[breedIndex].name}! Like these...
    </span>
  );
};
