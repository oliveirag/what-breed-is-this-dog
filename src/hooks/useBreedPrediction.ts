import { useEffect, useState } from "react";
import { GraphModel } from "@tensorflow/tfjs";
import * as tf from "@tensorflow/tfjs";

type BreedPredictionHook = {
  guessBreed: (image: HTMLImageElement) => void;
  breedIndex: number | undefined;
  predictionLoading: boolean;
  predictionHasError: boolean;
};

export const useBreedPrediction = (): BreedPredictionHook => {
  const [model, setModel] = useState<GraphModel>();
  const [breedIndex, setBreedIndex] = useState<number>();
  const [predictionLoading, setPredictionLoading] = useState<boolean>(false);
  const [predictionHasError, setPredictionHasError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setModel(await tf.loadGraphModel("model/model.json"));
      } catch (e) {
        setPredictionHasError(true);
      }
    })();
  }, []);

  const guessBreed = async (image: HTMLImageElement) => {
    if (predictionHasError) {
      return;
    }
    try {
      setPredictionLoading(true);

      // Solution extracted from dog.ceo Github
      // https://github.com/dog-ceo/guess-that-dog
      const inputTensor = tf.browser.fromPixels(image);
      const resized = tf.image
        .resizeBilinear(inputTensor, [224, 224])
        .toFloat();
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
      setPredictionLoading(false);
    } catch (e) {
      setPredictionHasError(true);
    }
  };

  return { guessBreed, breedIndex, predictionLoading, predictionHasError };
};
