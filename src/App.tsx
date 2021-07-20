import { FC } from "react";
import logo from "./logo.svg";
import { ImageUploader } from "./components/ImageUploader/ImageUploader";
import { makeStyles } from "@material-ui/styles";
import { useBreedPrediction } from "./hooks/useBreedPrediction";
import { useGetSameBreedImages } from "./components/SameBreedGallery/useGetSameBreedImages";
import { SameBreedGallery } from "./components/SameBreedGallery/SameBreedGallery";
import { Loading } from "./components/Loading";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: 32,
  },
});

export const App: FC = () => {
  const classes = useStyles();
  const { guessBreed, breedIndex, predictionLoading, predictionHasError } =
    useBreedPrediction();
  const { imagesUrls, requestLoading, requestHasError } =
    useGetSameBreedImages(breedIndex);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
      </header>
      <ImageUploader
        onImageLoad={guessBreed}
        predictionHasError={predictionHasError}
      />
      {(requestLoading || predictionLoading) && <Loading />}
      {!predictionLoading && imagesUrls.length > 0 && (
        <SameBreedGallery urls={imagesUrls} requestHasError={requestHasError} />
      )}
    </div>
  );
};
