import React, { FC, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import logo from "./logo.svg";
import { ImageUploader } from "./components/ImageUploader/ImageUploader";
import { makeStyles } from "@material-ui/styles";
import { GraphModel } from "@tensorflow/tfjs";
import { breeds } from "./breeds";

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
  const [model, setModel] = useState<GraphModel>();
  const [breedIndex, setBreedIndex] = useState(-1);

  useEffect(() => {
    (async () => {
      setModel(await tf.loadGraphModel("model/model.json"));
    })();
  }, []);

  const handleImageLoad = async (image: HTMLImageElement) => {
    const inputTensor = tf.browser.fromPixels(image);
    const resized = tf.image.resizeBilinear(inputTensor, [224, 224]).toFloat();
    const offset = tf.scalar(255.0);
    const normalized = resized.div(offset);
    const batched = normalized.expandDims(0);

    const outputTensor = (await model!.predict(batched)) as tf.Tensor;
    const probabilitiesArray = Array.from(await outputTensor.data());

    const breedBestGuessIndex =
      probabilitiesArray.reduce(
        (bestIndexSoFar, currentElement, currentElementIndex, arr) =>
          currentElement > arr[bestIndexSoFar]
            ? currentElementIndex
            : bestIndexSoFar,
        0
      ) - 1;

    setBreedIndex(breedBestGuessIndex);
  };

  const fetchSameBreedDogs = async () => {
    fetch(`https://dog.ceo/api/breed/${breeds[breedIndex].id}/images`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    if (breedIndex >= 0) {
      fetchSameBreedDogs();
    }
  }, [breedIndex]);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
      </header>
      <ImageUploader onImageLoad={handleImageLoad} />
    </div>
  );
};
