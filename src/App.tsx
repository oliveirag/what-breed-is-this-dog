import { FC } from "react";
import logo from "./logo.svg";
import { ImageUploader } from "./components/ImageUploader/ImageUploader";
import { makeStyles } from "@material-ui/styles";
import { useBreedPrediction } from "./hooks/useBreedPrediction";
import { useGetSameBreedImages } from "./hooks/useGetSameBreedImages";
import { SameBreedGallery } from "./components/SameBreedGallery/SameBreedGallery";
import { Loading } from "./components/Loading";
import { BreedName } from "./components/BreedName/BreedName";

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
  const {
    guessBreed,
    breedIndex,
    modelLoading,
    predictionLoading,
    predictionHasError,
  } = useBreedPrediction();
  const { imagesUrls, requestLoading, requestHasError } =
    useGetSameBreedImages(breedIndex);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} alt="What breed is this dog?" data-testid="app-logo" />
      </header>

      {!modelLoading && (
        <ImageUploader
          onImageLoad={guessBreed}
          predictionHasError={predictionHasError}
        />
      )}

      <BreedName breedIndex={breedIndex} />

      {(requestLoading || predictionLoading || modelLoading) && <Loading />}
      {!predictionLoading && imagesUrls.length > 0 && (
        <SameBreedGallery urls={imagesUrls} requestHasError={requestHasError} />
      )}
    </div>
  );
};
