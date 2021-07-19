import React, { FC, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import logo from "./logo.svg";
import { ImageUploader } from "./components/ImageUploader/ImageUploader";
import { makeStyles } from "@material-ui/styles";
import { GraphModel } from "@tensorflow/tfjs";

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

  useEffect(() => {
    (async () => {
      setModel(await tf.loadGraphModel("model/model.json"));
    })();
  }, []);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
      </header>
      <ImageUploader onLoad={(url) => console.log(url)} />
    </div>
  );
};
